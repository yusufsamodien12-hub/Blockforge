import { Hono } from 'hono';
import { cors } from 'hono/cors';

type Bindings = {
  MISTRAL_API_KEY: string;
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

// POST /v1/chat/completions - Generic Mistral proxy (unchanged behavior).
app.post('/v1/chat/completions', async (c) => {
  const apiKey = c.env.MISTRAL_API_KEY;
  if (!apiKey) {
    console.error('❌ MISTRAL_API_KEY not configured');
    return c.json({ error: 'Configuration Error: Missing API Key' }, 500);
  }

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

    const model = body.model || 'mistral-large-latest';
    const temperature = body.temperature || 0.7;
    const maxTokens = body.max_tokens || 2000;

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model, messages, temperature, max_tokens: maxTokens }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('❌ Mistral API error:', response.status, errorData);
      return c.json({ error: `Mistral API Error: ${response.status}`, details: errorData }, 500);
    }

    const data = await response.json();
    return c.json(data, response.status as any);
  } catch (err: any) {
    console.error('❌ Proxy error:', err);
    return c.json({ error: `Proxy Error: ${err.message}` }, 500);
  }
});

// ─── /design — BlockForge mesh generation ──────────────────────────────────
// Called by the World26 agent (or any client) when it needs a CustomMeshSpec
// for an object that isn't one of the built-in world object types.
// Input:  { description: string, material?: string }
// Output: { spec: CustomMeshSpec } where CustomMeshSpec matches BlockForge's
// existing src/types.ts shape (objectName, materialResearch, parts[]).

const DESIGN_SYSTEM_PROMPT = `
You are BlockForge, a design engine. Given the name of an object (a
building block, material, or everyday thing -- e.g. "brick", "wooden door",
"egg", "stone wall", "roof tile"), you do two things before answering:

1. RESEARCH THE MATERIAL: what is this object actually made of in the real
   world? Consider its composition, texture, and reflectivity.

2. RESEARCH THE SHAPE: what precise geometric primitives combine to form
   this object's silhouette and proportions accurately? Use as few parts as
   needed for a recognizable, precise shape -- prefer 1-4 parts for simple
   objects, up to 10 for more complex ones.

Respond with STRICT JSON ONLY. No markdown, no commentary outside the JSON.

{
  "objectName": "short canonical name for what you designed",
  "materialResearch": "one or two sentences on the material(s) you chose and why",
  "parts": [
    {
      "geometry": "box" | "cylinder" | "cone" | "sphere" | "torus",
      "args": [numbers -- see geometry arg order below],
      "position": [x, y, z],
      "rotation": [x, y, z],
      "material": {
        "color": "#rrggbb",
        "roughness": 0.0-1.0,
        "metalness": 0.0-1.0,
        "emissive": "#rrggbb" (optional, omit if the object doesn't glow),
        "emissiveIntensity": 0.0-3.0 (optional)
      }
    }
  ]
}

Geometry "args" order (Three.js constructor order):
  box:      [width, height, depth]
  cylinder: [radiusTop, radiusBottom, height, radialSegments?]
  cone:     [radius, height, radialSegments?]
  sphere:   [radius, widthSegments?, heightSegments?]
  torus:    [radius, tube, radialSegments?, tubularSegments?]

Rules:
- "position" is a local offset in meters from the object's own base point.
  Rest the object on the ground: its lowest point should sit at y = 0.
- Keep every dimension between 0.02 and 8 meters.
- Use 1 to 10 parts total.
- Center the object roughly on the local x/z origin.
`.trim();

const VALID_GEOMETRIES = ['box', 'cylinder', 'cone', 'sphere', 'torus'];
const MAX_PARTS = 10;
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
  if (cleaned.includes('```')) {
    cleaned = cleaned.replace(/```[a-z]*\n?/gi, '').replace(/```/g, '').trim();
  }
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start === -1 || end === -1 || end < start) {
    throw new Error('No JSON object found in model response');
  }
  return JSON.parse(cleaned.slice(start, end + 1));
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

app.post('/design', async (c) => {
  const apiKey = c.env.MISTRAL_API_KEY;
  if (!apiKey) {
    return c.json({ error: 'Configuration Error: Missing API Key' }, 500);
  }

  try {
    const body = await c.req.json();
    const description: string = typeof body.description === 'string' ? body.description.trim() : '';
    const material: string = typeof body.material === 'string' ? body.material.trim() : '';

    if (!description) {
      return c.json({ error: 'Missing required field: description' }, 400);
    }

    const prompt = `Design a precise 3D mesh for: "${description}"${material ? ` (material hint: ${material})` : ''}`;

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'mistral-large-latest',
        messages: [
          { role: 'system', content: DESIGN_SYSTEM_PROMPT },
          { role: 'user', content: prompt },
        ],
        temperature: 0.6,
        max_tokens: 1200,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('❌ Mistral API error:', response.status, errorData);
      return c.json({ error: `Mistral API Error: ${response.status}`, details: errorData }, 500);
    }

    const data: any = await response.json();
    const text: string = data.choices?.[0]?.message?.content ?? '';
    const parsed = extractJson(text);
    const spec = sanitizeMeshSpec(parsed, description);

    if (!spec) {
      return c.json({ error: 'Model response did not contain a usable mesh design' }, 502);
    }

    return c.json({ spec });
  } catch (err: any) {
    console.error('❌ Design error:', err);
    return c.json({ error: `Design Error: ${err.message}` }, 500);
  }
});

export default app;
