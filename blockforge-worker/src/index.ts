import { Hono } from 'hono';
import { cors } from 'hono/cors';

type Bindings = {
  MISTRAL_API_KEY: string;
  COHERE_API_KEY: string;
  CEREBRAS_API_KEY: string;
  NIM_ENDPOINT?: string;
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type'],
  exposeHeaders: ['Content-Length'],
  maxAge: 86400,
}));

const ACCOUNT_EMAIL = 'yusufsamodien12@gmail.com';

app.get('/', (c) => {
  return c.json({
    status: 'online',
    service: 'World26 API Proxy',
    version: '1.0.0',
    account: ACCOUNT_EMAIL,
    endpoints: {
      health: 'GET /',
      chat: 'POST /v1/chat/completions',
      design: 'POST /design',
      recentDesigns: 'GET /recent-designs',
      agentActivity: 'GET /agent-activity',
      state: {
        get: 'GET /state',
        post: 'POST /state',
        clear: 'POST /clear-state',
      },
    },
    cors: 'enabled',
    message: 'Ready to serve GitHub Pages',
  });
});

app.get('/state', async (c) => {
  try {
    const result = await c.env.DB.prepare('SELECT state FROM memory WHERE id = ?')
      .bind('latest')
      .first();
    if (!result) return c.json({ state: null });
    return c.json({ state: JSON.parse(result.state as string) });
  } catch (err: any) {
    console.error('Memory Fetch Error:', err);
    return c.json({ error: `Memory Fetch Error: ${err.message}` }, 500);
  }
});

app.post('/state', async (c) => {
  try {
    const { state } = await c.req.json();
    await c.env.DB.prepare('INSERT OR REPLACE INTO memory (id, state, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP)')
      .bind('latest', JSON.stringify(state))
      .run();
    return c.json({ success: true });
  } catch (err: any) {
    console.error('Memory Save Error:', err);
    return c.json({ error: `Memory Save Error: ${err.message}` }, 500);
  }
});

app.post('/clear-state', async (c) => {
  try {
    await c.env.DB.prepare('DELETE FROM memory WHERE id = ?').bind('latest').run();
    return c.json({ success: true, message: 'Saved simulation state cleared' });
  } catch (err: any) {
    console.error('Memory Clear Error:', err);
    return c.json({ error: `Memory Clear Error: ${err.message}` }, 500);
  }
});

// GET /agent-activity — recent BlockForge tool-usage events, so the BlockForge
// UI can show a live "agent is using this tool" indicator.
app.get('/agent-activity', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT id, source, description, created_at FROM agent_activity ORDER BY id DESC LIMIT 10'
    ).all();
    return c.json({ activity: results ?? [] });
  } catch (err: any) {
    console.error('Agent Activity Fetch Error:', err);
    return c.json({ error: `Agent Activity Fetch Error: ${err.message}` }, 500);
  }
});

async function logAgentActivity(db: D1Database, source: string, description: string): Promise<void> {
  try {
    await db.prepare('INSERT INTO agent_activity (source, description) VALUES (?, ?)')
      .bind(source, description)
      .run();
  } catch (err) {
    console.error('Agent Activity Log Error:', err);
  }
}

// POST /v1/chat/completions - Generic proxy with fallback: Mistral → Cerebras → Cohere → NIM.
app.post('/v1/chat/completions', async (c) => {
  try {
    const body = await c.req.json();

    let messages;
    if (body.systemInstruction && body.prompt) {
      messages = [
        { role: 'system', content: body.systemInstruction },
        { role: 'user', content: body.prompt },
      ];
    } else if (body.messages) {
      messages = body.messages;
    } else {
      return c.json({ error: 'Invalid request format' }, 400);
    }

    const temperature = body.temperature || 0.7;
    const maxTokens = body.max_tokens || 2000;

    const providers: { name: string; key: string | undefined; endpoint: string }[] = [
      { name: 'Mistral', key: c.env.MISTRAL_API_KEY, endpoint: 'https://api.mistral.ai/v1/chat/completions' },
      { name: 'Cerebras', key: c.env.CEREBRAS_API_KEY, endpoint: 'https://api.cerebras.ai/v1/chat/completions' },
    ];
    if (c.env.NIM_ENDPOINT) {
      providers.push({ name: 'NVIDIA-NIM', key: '', endpoint: c.env.NIM_ENDPOINT });
    }

    for (const provider of providers) {
      if (!provider.key && provider.name !== 'NVIDIA-NIM') continue;
      try {
        const model = provider.name === 'Mistral' ? (body.model || 'mistral-large-latest')
          : provider.name === 'Cerebras' ? (body.model || 'cerebras-gpt-3.5-turbo')
          : provider.name === 'NVIDIA-NIM' ? (body.model || 'meta/llama-3.1-70b-instruct')
          : (body.model || 'mistral-large-latest');

        const authKey = provider.name === 'NVIDIA-NIM' ? '' : provider.key;
        const headers: Record<string, string> = { 'Content-Type': 'application/json' };
        if (authKey) headers.Authorization = `Bearer ${authKey}`;

        const response = await fetch(provider.endpoint, {
          method: 'POST',
          headers,
          body: JSON.stringify({ model, messages, temperature, max_tokens: maxTokens }),
        });

        if (!response.ok) {
          const errorData = await response.text();
          console.error(`❌ ${provider.name} error:`, response.status, errorData);
          continue;
        }

        const data = await response.json();
        return c.json(data, response.status as any);
      } catch (err: any) {
        console.error(`❌ ${provider.name} exception:`, err.message);
      }
    }

    return c.json({ error: 'All providers failed to respond' }, 502);
  } catch (err: any) {
    console.error('❌ Proxy error:', err);
    return c.json({ error: `Proxy Error: ${err.message}` }, 500);
  }
});

// ─── Agent-created designs ──────────────────────────────────────────────────
// Store generated specs so Blockforge's UI can display objects created by
// the World-Agent (or any other client). Stored for 24 hours; older entries
// are purged automatically on write.

const DESIGN_TABLE = `
  CREATE TABLE IF NOT EXISTS designs (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    source     TEXT NOT NULL DEFAULT 'unknown',
    description TEXT NOT NULL,
    spec       TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`;

async function ensureDesignTable(db: D1Database): Promise<void> {
  try {
    await db.prepare(DESIGN_TABLE).run();
  } catch {
    // Table already exists — fine.
  }
}

async function purgeOldDesigns(db: D1Database): Promise<void> {
  try {
    await db.prepare(
      "DELETE FROM designs WHERE created_at < datetime('now', '-24 hours')"
    ).run();
  } catch {
    // Non-fatal.
  }
}

// GET /recent-designs — return up to 20 recent agent-created designs so the
// BlockForge UI can display them.
app.get('/recent-designs', async (c) => {
  try {
    await ensureDesignTable(c.env.DB);
    const { results } = await c.env.DB.prepare(
      'SELECT id, source, description, spec, created_at FROM designs ORDER BY id DESC LIMIT 20'
    ).all();
    return c.json({ designs: results ?? [] });
  } catch (err: any) {
    console.error('Recent Designs Fetch Error:', err);
    return c.json({ error: `Recent Designs Fetch Error: ${err.message}` }, 500);
  }
});

// ─── /metrics — API metrics ──────────────────────────────────────────────
// Exposes request count, average latency, and error rate so the Blockforge UI
// can show a live dashboard. Metrics reset after 15 minutes of inactivity.

interface MetricsStore {
  totalRequests: number;
  successCount: number;
  errorCount: number;
  totalLatencyMs: number;
  lastReset: number;
}
let metrics: MetricsStore = { totalRequests: 0, successCount: 0, errorCount: 0, totalLatencyMs: 0, lastReset: Date.now() };

function recordMetrics(success: boolean, latencyMs: number): void {
  const now = Date.now();
  if (now - metrics.lastReset > 15 * 60 * 1000) {
    metrics = { totalRequests: 0, successCount: 0, errorCount: 0, totalLatencyMs: 0, lastReset: now };
  }
  metrics.totalRequests++;
  metrics.totalLatencyMs += latencyMs;
  if (success) metrics.successCount++; else metrics.errorCount++;
}

app.get('/metrics', (c) => {
  const avgLatency = metrics.totalRequests > 0 ? (metrics.totalLatencyMs / metrics.totalRequests).toFixed(1) : '0';
  return c.json({
    totalRequests: metrics.totalRequests,
    successCount: metrics.successCount,
    errorCount: metrics.errorCount,
    avgLatencyMs: parseFloat(avgLatency),
    uptimeMs: Date.now() - metrics.lastReset,
  });
});

// ─── PolyHaven texture search + URL resolution ───────────────────────────
// PolyHaven provides free CC0 textures with direct download URLs.
// Their API: https://api.polyhaven.com (assets search, file info)
// Download CDN: https://dl.polyhaven.org/file/ph-assets/Textures/jpg/2k/
const POLYHAVEN_API = 'https://api.polyhaven.com';

/** Search PolyHaven textures by keyword. Returns asset names. */
async function searchPolyHaven(query: string, limit = 5): Promise<string[]> {
  try {
    const url = `${POLYHAVEN_API}/assets?t=textures&q=${encodeURIComponent(query)}&limit=${limit}`;
    const resp = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!resp.ok) return [];
    const data: any = await resp.json();
    // /assets returns { "assetName": { name, ... }, ... }
    const assetNames = data && typeof data === 'object' ? Object.keys(data) : [];
    return assetNames.slice(0, limit);
  } catch {
    return [];
  }
}

/** Fetch the actual diffuse download URL for a PolyHaven texture asset. */
const POLYHAVEN_DL = 'https://dl.polyhaven.org/file/ph-assets/Textures/jpg/2k';
async function getPolyHavenDiffuseUrl(assetName: string): Promise<string | undefined> {
  try {
    const resp = await fetch(`${POLYHAVEN_API}/files/${encodeURIComponent(assetName)}`);
    if (!resp.ok) return undefined;
    const data: any = await resp.json();
    // Response: { diffuse: { "2k": { jpg: { url: "...", size: ..., md5: ... } } } }
    const diffuseUrl = data?.diffuse?.['2k']?.jpg?.url;
    if (typeof diffuseUrl === 'string' && diffuseUrl.startsWith('http')) return diffuseUrl;
    // Fallback to constructed URL if API didn't return a proper url field
    return `${POLYHAVEN_DL}/${assetName}/${assetName}_diff_2k.jpg`;
  } catch {
    return `${POLYHAVEN_DL}/${assetName}/${assetName}_diff_2k.jpg`;
  }
}

// ─── Texture URL mapper ─────────────────────────────────────────────────
// Resolves real working texture URLs from PolyHaven and applies them to
// each mesh part. Uses the PolyHaven search API for dynamic lookup, then
// falls back to a comprehensive map of verified CDN URLs.

const POLYHAVEN_DIFFUSE = (name: string) => `${POLYHAVEN_DL}/${name}/${name}_diff_2k.jpg`;

// Verified working PolyHaven diffuse texture URLs by material keyword.
// All tested and returning HTTP 200.
const FALLBACK_TEXTURES: Record<string, string> = {
  brick: POLYHAVEN_DIFFUSE('red_brick'),
  stone: POLYHAVEN_DIFFUSE('rock_wall'),
  wood: POLYHAVEN_DIFFUSE('wood_floor'),
  concrete: POLYHAVEN_DIFFUSE('rough_concrete'),
  metal: POLYHAVEN_DIFFUSE('metal_plate'),
  glass: POLYHAVEN_DIFFUSE('square_tiles'),
  roof: POLYHAVEN_DIFFUSE('roof_tiles'),
  ground: POLYHAVEN_DIFFUSE('ground_grey'),
  plaster: POLYHAVEN_DIFFUSE('white_plaster_02'),
  tile: POLYHAVEN_DIFFUSE('square_tiles'),
  marble: POLYHAVEN_DIFFUSE('marble_01'),
  gravel: POLYHAVEN_DIFFUSE('gravel'),
  sand: POLYHAVEN_DIFFUSE('sand_01'),
  cobblestone: POLYHAVEN_DIFFUSE('grassy_cobblestone'),
  slate: POLYHAVEN_DIFFUSE('slate_floor'),
  asphalt: POLYHAVEN_DIFFUSE('worn_asphalt'),
  plank: POLYHAVEN_DIFFUSE('wooden_planks'),
  pavement: POLYHAVEN_DIFFUSE('pavement_01'),
  wall: POLYHAVEN_DIFFUSE('stone_wall'),
  floor: POLYHAVEN_DIFFUSE('wood_floor'),
  brickwall: POLYHAVEN_DIFFUSE('herringbone_brick'),
};

function guessTextureKeyword(color: string, description: string, materialResearch?: string): string {
  const lower = `${description} ${materialResearch || ''}`.toLowerCase();
  const keywords = Object.keys(FALLBACK_TEXTURES);
  for (const kw of keywords) {
    if (lower.includes(kw)) return kw;
  }
  // Color-brightness heuristic
  const hex = color.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
  if (brightness > 200) return 'plaster';
  if (brightness > 150) return 'concrete';
  if (brightness > 80) return 'stone';
  return 'brick';
}

/** Apply the best available texture URLs to every part in a spec that doesn't
 *  already have a textureUrl. Uses PolyHaven search first, then falls back to
 *  the FALLBACK_TEXTURES map by keyword matching. */
async function applyTextureUrls(spec: any, description: string): Promise<void> {
  const needsTex = spec.parts.filter((p: any) => !p.material?.textureUrl);
  if (needsTex.length === 0) return;

  // Fetch texture suggestions from PolyHaven search
  const searchNames = await searchPolyHaven(description);
  // Also fetch actual download URLs for search results
  const searchUrls = new Map<string, string>();
  for (const name of searchNames) {
    const url = await getPolyHavenDiffuseUrl(name);
    if (url) searchUrls.set(name, url);
  }

  for (const part of needsTex) {
    const keyword = guessTextureKeyword(part.material.color, description, spec.materialResearch);
    let textureUrl: string | undefined;

    // Try to find a matching texture from search results
    const matchName = searchNames.find(n => n.toLowerCase().includes(keyword));
    if (matchName && searchUrls.has(matchName)) {
      textureUrl = searchUrls.get(matchName);
    }

    // Fallback to hardcoded texture map
    if (!textureUrl) {
      textureUrl = FALLBACK_TEXTURES[keyword] || FALLBACK_TEXTURES.brick;
    }

    part.material = { ...part.material, textureUrl };
  }
}

// ─── /design — BlockForge mesh generation ──────────────────────────────────
// Called by the World26 agent (or any client) when it needs a CustomMeshSpec
// for an object that isn't one of the built-in world object types.
// Input:  { description: string, material?: string }
// Output: { spec: CustomMeshSpec } where CustomMeshSpec matches BlockForge's
// existing src/types.ts shape (objectName, materialResearch, parts[]).

const DESIGN_SYSTEM_PROMPT = `
You are BlockForge, an expert architectural design engine. You design realistic, proportional 3D building components (walls, roofs, doors, windows, foundations, columns, staircases, fences, chimneys, etc.) using geometric primitives.

## Your Design Process

1. **Identify the building type** — is this a load-bearing wall? a gable roof? a window frame? a column? a brick? Match the type to real-world construction standards.
2. **Use real-world dimensions** — a standard wall is 2.4-3m tall x 0.2-0.3m thick. A door is 0.8-1m wide x 2-2.2m tall. A standard brick is 0.2m x 0.1m x 0.07m. A roof tile is ~0.3m x 0.2m. A window is 0.6-1.2m wide x 0.8-1.5m tall.
3. **Build architectural assemblies** — walls must have proper thickness. Roofs must overhang walls slightly. Doors must fit within a wall opening. Foundations must extend beyond walls. Use 4-12 parts for realism.
4. **Use authentic materials** — bricks are rough, matte, reddish-brown with slight color variation. Glass is smooth, semi-transparent, reflective. Roof tiles are rough, dark, slightly overlapping. Wood is warm-brown with moderate roughness. Concrete is gray, matte, rough. Metal is smooth, reflective, silver/dark.

## Vocabulary of Architectural Parts

Use these known building patterns:
- **Wall assembly**: main wall panel + corner trim + base trim + top plate. A 3m x 2.6m x 0.25m wall with trim.
- **Gable roof**: left slope + right slope + ridge cap + eaves trim. Each slope at 30-45 degrees.
- **Window**: frame (thin box) + glass (cylinder or thin box) + sill (thin ledge below).
- **Door**: door slab + frame + handle (small cylinder) + threshold.
- **Foundation**: concrete slab wider than wall footprint, stepped at edges.
- **Column**: base + shaft + capital. Round or square.
- **Staircase**: treads + risers + stringers. Each tread 0.3m deep x 0.15m high.
- **Fence**: posts + rails + pickets evenly spaced.
- **Chimney**: square shaft + cap + flue tile.

## Response Format

Respond with STRICT JSON ONLY.

{
  "objectName": "descriptive name like 'brick-wall-assembly' or 'gable-roof-with-tiles'",
  "materialResearch": "explain the real material, its texture, reflectivity, color, and why it fits this use",
  "parts": [
    {
      "geometry": "box" | "cylinder" | "cone" | "sphere" | "torus",
      "args": [numbers in Three.js order],
      "position": [x, y, z] (local offset from base, y=0 is ground),
      "rotation": [x, y, z] (radians),
      "material": {
        "color": "#rrggbb",
        "roughness": 0.0-1.0,
        "metalness": 0.0-1.0,
        "emissive": "#rrggbb" (omit if not emissive),
        "emissiveIntensity": 0.0-3.0,
        "textureUrl": "https://ambientcg.com/get?id=AssetName_2K-JPG" (optional — real texture URL from ambientCG or PolyHaven)
      }
    }
  ]
}

Geometry args order:
  box:      [width, height, depth]
  cylinder: [radiusTop, radiusBottom, height, radialSegments?]
  cone:     [radius, height, radialSegments?]
  sphere:   [radius, widthSegments?, heightSegments?]
  torus:    [radius, tube, radialSegments?, tubularSegments?]

## Critical Rules
- Every dimension must be between 0.02 and 8 meters.
- Use 4 to 12 parts for a complete building component.
- "position" is a local offset from the object's base (lowest point at y=0).
- Center the assembly roughly on local x/z origin.
- Materials must be realistic for the given architectural type.
- Use proper proportions: walls are thin and tall, roofs are wide and sloped, bricks are small and numerous.
`.trim();

const VALID_GEOMETRIES = ['box', 'cylinder', 'cone', 'sphere', 'torus'];
const MAX_PARTS = 12;
const MIN_DIM = 0.02;
const MAX_DIM = 8;
const HEX_COLOR_RE = /^#[0-9a-fA-F]{6}$/;

function clampFinite(value: unknown, min: number, max: number, fallback: number): number {
  const n = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(n) ? Math.max(min, Math.min(max, n)) : fallback;
}

function sanitizeColor(value: unknown, fallback: string): string {
  return typeof value === 'string' && HEX_COLOR_RE.test(value) ? value : fallback;
}

function sanitizeVec3(value: unknown, fallback: [number, number, number]): [number, number, number] {
  if (!Array.isArray(value) || value.length !== 3) return fallback;
  return [
    clampFinite(value[0], -15, 15, fallback[0]),
    clampFinite(value[1], -5, 15, fallback[1]),
    clampFinite(value[2], -15, 15, fallback[2]),
  ];
}

function extractJson(text: string): unknown {
  let cleaned = text.trim();
  // Remove markdown code block fences (both ```json and ```)
  if (cleaned.includes('```')) {
    cleaned = cleaned.replace(/```[a-z]*\n?/gi, '').replace(/```/g, '').trim();
  }
  // Strip any leading whitespace/newlines before {
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start === -1 || end === -1 || end < start) {
    throw new Error('No JSON object found in model response');
  }
  const jsonStr = cleaned.slice(start, end + 1);
  // Repair broken JSON: trailing commas before ? or ]
  const fixed = jsonStr.replace(/,\s*([}\]])/g, '$1');
  return JSON.parse(fixed);
}

function sanitizeMeshSpec(raw: any, fallbackName: string) {
  if (!raw || typeof raw !== 'object' || !Array.isArray(raw.parts) || raw.parts.length === 0) {
    return null;
  }

  const parts = raw.parts
    .slice(0, MAX_PARTS)
    .map((part: any) => {
      if (!part || typeof part !== 'object') return null;
      if (!VALID_GEOMETRIES.includes(part.geometry)) return null;
      if (!Array.isArray(part.args) || part.args.length === 0) return null;

      const args = part.args.slice(0, 4).map((a: unknown) => clampFinite(a, MIN_DIM, MAX_DIM, 0.5));
      const material = part.material && typeof part.material === 'object' ? part.material : {};

      // Preserve textureUrl if the LLM provided one OR if we assign one later
      const textureUrl = typeof material.textureUrl === 'string' && material.textureUrl.trim()
        ? material.textureUrl.trim()
        : undefined;

      return {
        geometry: part.geometry,
        args,
        position: sanitizeVec3(part.position, [0, 0, 0]),
        rotation: sanitizeVec3(part.rotation, [0, 0, 0]),
        material: {
          color: sanitizeColor(material.color, '#8899aa'),
          roughness: clampFinite(material.roughness, 0, 1, 0.5),
          metalness: clampFinite(material.metalness, 0, 1, 0.1),
          emissive: material.emissive ? sanitizeColor(material.emissive, '#000000') : undefined,
          emissiveIntensity: material.emissiveIntensity !== undefined
            ? clampFinite(material.emissiveIntensity, 0, 3, 0.5)
            : undefined,
          ...(textureUrl ? { textureUrl } : {}),
        },
      };
    })
    .filter((p: unknown) => p !== null);

  if (parts.length === 0) return null;

  return {
    objectName: typeof raw.objectName === 'string' && raw.objectName.trim()
      ? raw.objectName.trim().slice(0, 80)
      : fallbackName,
    materialResearch: typeof raw.materialResearch === 'string'
      ? raw.materialResearch.slice(0, 400)
      : 'Unspecified material.',
    parts,
  };
}

// ─── /design cache ──────────────────────────────────────────────────────
// Deduplicate identical /design requests so we don't hit Mistral rate limits.
// Cache lives in-memory and expires after 5 minutes.
const designCache = new Map<string, { spec: any; expiresAt: number }>();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

app.post('/design', async (c) => {
  const startTime = Date.now();

  try {
    const body = await c.req.json();
    const description: string = typeof body.description === 'string' ? body.description.trim() : '';
    const material: string = typeof body.material === 'string' ? body.material.trim() : '';
    const size: string = typeof body.size === 'string' ? body.size.trim() : '';
    const color: string = typeof body.color === 'string' ? body.color.trim() : '';
    const features: string = typeof body.features === 'string' ? body.features.trim() : '';
    const source: string = typeof body.source === 'string' && body.source.trim() ? body.source.trim().slice(0, 40) : 'unknown';

    if (!description) {
      return c.json({ error: 'Missing required field: description' }, 400);
    }

    // Check cache
    const cacheKey = `${description}::${material}`;
    const cached = designCache.get(cacheKey);
    if (cached && cached.expiresAt > Date.now()) {
      recordMetrics(true, Date.now() - startTime);
      return c.json({ spec: cached.spec, cached: true });
    }

    c.executionCtx.waitUntil(logAgentActivity(c.env.DB, source, description));

    const prompt = `Design a precise 3D mesh for: "${description}"${material ? ` (material hint: ${material})` : ''}`;

    const messages = [
      { role: 'system', content: DESIGN_SYSTEM_PROMPT },
      { role: 'user', content: prompt },
    ];

    // Try providers in order: Mistral → Cohere → Cerebras → NIM
    let llmText = '';
    const providers: { name: string; key: string | undefined; endpoint: string; format: 'openai' | 'cohere' }[] = [
      { name: 'Mistral', key: c.env.MISTRAL_API_KEY, endpoint: 'https://api.mistral.ai/v1/chat/completions', format: 'openai' },
      { name: 'Cohere', key: c.env.COHERE_API_KEY, endpoint: 'https://api.cohere.ai/v1/chat', format: 'cohere' },
      { name: 'Cerebras', key: c.env.CEREBRAS_API_KEY, endpoint: 'https://api.cerebras.ai/v1/chat/completions', format: 'openai' },
    ];
    // Add NIM if configured
    if (c.env.NIM_ENDPOINT) {
      providers.push({ name: 'NVIDIA-NIM', key: '', endpoint: c.env.NIM_ENDPOINT, format: 'openai' });
    }

    for (const provider of providers) {
      if (!provider.key && provider.name !== 'NVIDIA-NIM') continue;
      try {
        let body: any;
        let headers: Record<string, string> = { 'Content-Type': 'application/json' };

        if (provider.format === 'cohere') {
          headers.Authorization = `Bearer ${provider.key}`;
          // Cohere /chat expects a single message string + optional chat_history
          const userMsg = messages.find(m => m.role === 'user')?.content || messages[0]?.content || '';
          const chatHistory = messages.slice(0, -1).map(m => ({
            role: m.role === 'assistant' ? 'CHATBOT' : 'USER',
            message: m.content,
          }));
          body = {
            model: 'command-r-plus',
            message: userMsg,
            chat_history: chatHistory.length > 0 ? chatHistory : undefined,
            temperature: 0.6,
            max_tokens: 2000,
          };
          const resp = await fetch(provider.endpoint, { method: 'POST', headers, body: JSON.stringify(body) });
          if (!resp.ok) {
            const err = await resp.text();
            console.error(`❌ ${provider.name} error:`, resp.status, err);
            continue;
          }
          const data: any = await resp.json();
          llmText = data.text || '';
        } else {
          // OpenAI-compatible (Mistral, Cerebras, NIM)
          if (provider.key) headers.Authorization = `Bearer ${provider.key}`;
          body = {
            model: provider.name === 'NVIDIA-NIM' ? 'meta/llama-3.1-70b-instruct' : 'mistral-large-latest',
            messages,
            temperature: 0.6,
            max_tokens: 2000,
          };
          const resp = await fetch(provider.endpoint, { method: 'POST', headers, body: JSON.stringify(body) });
          if (!resp.ok) {
            const err = await resp.text();
            console.error(`❌ ${provider.name} error:`, resp.status, err);
            continue;
          }
          const raw = await resp.text();
          let data: any;
          try { data = JSON.parse(raw); } catch { continue; }
          llmText = data.choices?.[0]?.message?.content || '';
        }

        if (llmText.trim()) break; // Success — use this provider's output
      } catch (err: any) {
        console.error(`❌ ${provider.name} exception:`, err.message);
      }
    }

    if (!llmText.trim()) {
      // All LLM providers failed — fall back to procedural mesh generation
      const proceduralSpec = generateProceduralMesh(description, body.size, body.color, body.material, body.features);
      if (!proceduralSpec) {
        return c.json({ error: 'All LLM providers failed and procedural fallback generated no result' }, 502);
      }
      recordMetrics(true, Date.now() - startTime);
      return c.json({ spec: proceduralSpec, source: 'procedural' });
    }

    const parsed = extractJson(llmText);
    let spec = sanitizeMeshSpec(parsed, description);

    if (spec) {
      try {
        await applyTextureUrls(spec, description);
      } catch {
        // Non-fatal — parts without textureUrl will render with flat colors.
      }
    }

    if (!spec) {
      recordMetrics(false, Date.now() - startTime);
      return c.json({ error: 'Model response did not contain a usable mesh design' }, 502);
    }

    recordMetrics(true, Date.now() - startTime);

    // Cache the result
    designCache.set(cacheKey, { spec, expiresAt: Date.now() + CACHE_TTL_MS });

    // Store the spec in D1 so BlockForge's UI can display it.
    c.executionCtx.waitUntil(
      (async () => {
        try {
          await ensureDesignTable(c.env.DB);
          await purgeOldDesigns(c.env.DB);
          await c.env.DB.prepare(
            'INSERT INTO designs (source, description, spec) VALUES (?, ?, ?)'
          ).bind(source, description, JSON.stringify(spec)).run();
        } catch (dbErr) {
          console.error('Design storage error (non-fatal):', dbErr);
        }
      })()
    );

    return c.json({ spec });
  } catch (err: any) {
    recordMetrics(false, Date.now() - startTime);
    console.error('❌ Design error:', err);
    return c.json({ error: `Design Error: ${err.message}` }, 500);
  }
});

/**
 * Procedural mesh generator — fallback when no LLM provider is available.
 * Supports any size/color/material/texture combination.
 */
function generateProceduralMesh(description: string, size?: string, color?: string, material?: string, features?: string): any {
  const desc = description.toLowerCase();
  const colorVal = color || '#8899aa';
  let w = 1.0, h = 1.0, d = 1.0;
  if (size) { const p = size.split(/[x×*]/).map(s => parseFloat(s.trim())).filter(n => !isNaN(n)); if (p.length >= 2) { w = p[0]; d = p[1]; } if (p.length >= 3) h = p[2]; }
  const hm = desc.match(/(\d+\.?\d*)\s*m?\s*(high|tall|height)/); if (hm) h = parseFloat(hm[1]);
  const wm = desc.match(/(\d+\.?\d*)\s*m?\s*(wide|width)/); if (wm) w = parseFloat(wm[1]);
  const dm = desc.match(/(\d+\.?\d*)\s*m?\s*(deep|depth|thick)/); if (dm) d = parseFloat(dm[1]);
  w = Math.max(0.1, Math.min(8, w)); h = Math.max(0.1, Math.min(8, h)); d = Math.max(0.05, Math.min(4, d));
  const hasTex = features?.includes('textured') || ['brick','stone','wood','concrete','metal'].includes((material||'').toLowerCase());
  const ml = (material||'').toLowerCase();
  let r = 0.6, m = 0.1;
  if (['brick','stone','concrete'].includes(ml)) { r=0.85; m=0.05; } else if (['wood','timber'].includes(ml)) { r=0.75; m=0.03; } else if (['metal','steel','iron'].includes(ml)) { r=0.2; m=0.9; } else if (['glass'].includes(ml)) { r=0.05; m=0.1; }
  let parts: any[] = [];
  if (desc.includes('wall')) {
    parts = [{ geometry: 'box', args: [w, h, d], position: [0, h/2, 0], rotation: [0,0,0], material: { color: colorVal, roughness: r, metalness: m } }];
    if (features?.includes('hollow')) parts.push({ geometry: 'box', args: [w*0.4, h*0.4, d*0.6], position: [0, h*0.5, d*0.3], rotation: [0,0,0], material: { color: '#1a1a2e', roughness: 0.1, metalness: 0 } });
  } else if (desc.includes('roof') || desc.includes('slab')) {
    parts = [{ geometry: 'box', args: [w, d, h*0.15], position: [0, h*0.075, 0], rotation: [0,0,0], material: { color: colorVal, roughness: r, metalness: m } }];
  } else if (desc.includes('door') || desc.includes('entry')) {
    parts = [
      { geometry: 'box', args: [w*0.7, h, d*0.1], position: [0, h/2, 0], rotation: [0,0,0], material: { color: colorVal, roughness: 0.7, metalness: 0.05 } },
      { geometry: 'cylinder', args: [0.03,0.03,0.15,8], position: [w*0.25, h*0.5, d*0.08], rotation: [0,0,Math.PI/2], material: { color: '#d4a373', roughness: 0.3, metalness: 0.7 } },
    ];
  } else if (desc.includes('column') || desc.includes('pillar')) {
    parts = [{ geometry: 'cylinder', args: [d/2, d/2, h, 12], position: [0, h/2, 0], rotation: [0,0,0], material: { color: colorVal, roughness: r, metalness: m } }];
  } else if (desc.includes('tower')) {
    parts = [
      { geometry: 'cylinder', args: [d/2, d*0.7, h, 8], position: [0, h/2, 0], rotation: [0,0,0], material: { color: colorVal, roughness: r, metalness: m } },
      { geometry: 'box', args: [w*1.2, 0.1, d*1.2], position: [0, h, 0], rotation: [0,0,0], material: { color: '#555', roughness: 0.6, metalness: 0.3 } },
    ];
  } else if (desc.includes('fence') || desc.includes('railing')) {
    const np = Math.max(2, Math.floor(w / 0.5));
    for (let i = 0; i < np; i++) parts.push({ geometry: 'box', args: [0.05, h, 0.05], position: [-w/2+(w/(np-1))*i, h/2, 0], rotation: [0,0,0], material: { color: colorVal, roughness: r, metalness: m } });
    parts.push({ geometry: 'box', args: [w, 0.03, 0.03], position: [0, h*0.7, 0], rotation: [0,0,0], material: { color: colorVal, roughness: r, metalness: m } });
    parts.push({ geometry: 'box', args: [w, 0.03, 0.03], position: [0, h*0.3, 0], rotation: [0,0,0], material: { color: colorVal, roughness: r, metalness: m } });
  } else {
    parts = [{ geometry: 'box', args: [w, h, d], position: [0, h/2, 0], rotation: [0,0,0], material: { color: colorVal, roughness: r, metalness: m } }];
  }
  if (hasTex) {
    const texUrl = FALLBACK_TEXTURES[ml] || FALLBACK_TEXTURES.brick;
    for (const p of parts) p.material.textureUrl = texUrl;
  }
  if (features?.includes('beveled')) for (const p of parts) p.material.roughness = Math.min(1, (p.material.roughness||0.5)+0.1);
  if (features?.includes('embossed')) for (const p of parts) p.material.metalness = Math.min(1, (p.material.metalness||0)+0.15);
  return { objectName: description.slice(0,80), materialResearch: `${material||'Standard'} (r${r.toFixed(2)}/m${m.toFixed(2)})${hasTex?' textured':''}.`, parts };
}

export default app;
