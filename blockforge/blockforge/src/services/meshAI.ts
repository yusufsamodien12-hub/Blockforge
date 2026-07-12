import { CustomMeshSpec, MeshGeometryKind, MeshPart } from '../types';

const SYSTEM_PROMPT = `
You are BlockForge, a design engine. Given the name of an object (a
building block, material, or everyday thing -- e.g. "brick", "wooden door",
"egg", "stone wall", "roof tile"), you do two things before answering:

1. RESEARCH THE MATERIAL: what is this object actually made of in the real
   world? Consider its composition, texture, and reflectivity (e.g. fired
   clay brick is rough and matte; glass is smooth and slightly reflective;
   an eggshell is smooth, matte, and off-white with subtle texture).

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

export interface GenerateMeshResult {
  spec: CustomMeshSpec;
}

const VALID_GEOMETRIES: MeshGeometryKind[] = ['box', 'cylinder', 'cone', 'sphere', 'torus'];
const MAX_PARTS = 10;
const MIN_DIM = 0.02;
const MAX_DIM = 8;
const HEX_COLOR_RE = /^#[0-9a-fA-F]{6}$/;

function clampFinite(value: unknown, min: number, max: number, fallback: number): number {
  const n = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(min, Math.min(max, n));
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

// The model's output is raw numeric input driving actual Three.js
// constructor args. Without validation, a malformed or adversarial
// response (huge/negative/NaN dimensions, non-hex colors, unknown
// geometry kinds, unbounded part counts) could crash the renderer or
// produce something absurd. Sanitize every field; drop anything that
// can't be made safe rather than trusting the model directly.
export function sanitizeMeshSpec(raw: unknown, fallbackName: string): CustomMeshSpec | null {
  if (!raw || typeof raw !== 'object') return null;
  const candidate = raw as Partial<CustomMeshSpec>;
  if (!Array.isArray(candidate.parts) || candidate.parts.length === 0) return null;

  const parts: MeshPart[] = candidate.parts
    .slice(0, MAX_PARTS)
    .map((part: any): MeshPart | null => {
      if (!part || typeof part !== 'object') return null;
      if (!VALID_GEOMETRIES.includes(part.geometry)) return null;
      if (!Array.isArray(part.args) || part.args.length === 0) return null;

      const args = part.args.slice(0, 4).map((a: unknown) => clampFinite(a, MIN_DIM, MAX_DIM, 0.5));
      const material = part.material && typeof part.material === 'object' ? part.material : {};

      return {
        geometry: part.geometry as MeshGeometryKind,
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
    .filter((p): p is MeshPart => p !== null);

  if (parts.length === 0) return null;

  return {
    objectName: typeof candidate.objectName === 'string' && candidate.objectName.trim()
      ? candidate.objectName.trim().slice(0, 80)
      : fallbackName,
    materialResearch: typeof candidate.materialResearch === 'string'
      ? candidate.materialResearch.slice(0, 400)
      : 'Unspecified material.',
    parts,
  };
}

function extractJson(text: string): unknown {
  let cleaned = text.trim();
  if (cleaned.includes('```')) {
    cleaned = cleaned.replace(/```[a-z]*\n?/gi, '').replace(/```/g, '').trim();
  }

  // Normalize JavaScript-style JSON-like output from the model.
  cleaned = cleaned.replace(/\/\/.*$/gm, '');
  cleaned = cleaned.replace(/\/\*[\s\S]*?\*\//g, '');
  cleaned = cleaned.replace(/undefined/g, 'null');
  cleaned = cleaned.replace(/NaN/g, '0');
  cleaned = cleaned.replace(/Infinity/g, '0');
  cleaned = cleaned.replace(/Math\.PI\s*([*/])\s*([0-9.]+)/g, (_, op, num) => {
    const value = Number(num);
    return Number.isFinite(value)
      ? String(op === '*' ? Math.PI * value : Math.PI / value)
      : String(Math.PI);
  });
  cleaned = cleaned.replace(/([0-9.]+)\s*\*\s*Math\.PI/g, (_, num) => {
    const value = Number(num);
    return Number.isFinite(value) ? String(value * Math.PI) : String(Math.PI);
  });
  cleaned = cleaned.replace(/Math\.PI/g, String(Math.PI));
  cleaned = cleaned.replace(/([{,]\s*)([A-Za-z0-9_]+)\s*:/g, '$1"$2":');
  cleaned = cleaned.replace(/,\s*([}\]])/g, '$1');

  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start === -1 || end === -1 || end < start) {
    throw new Error('No JSON object found in model response');
  }

  return JSON.parse(cleaned.slice(start, end + 1));
}

// Calls whichever backend is configured, mirroring world26's aiLogic.ts so
// this app can reuse the same Cloudflare Worker proxy (or local server.js)
// world26 already uses -- no new backend required.
export async function generateMesh(objectDescription: string): Promise<GenerateMeshResult> {
  const envProxyUrl = (import.meta as any)?.env?.VITE_PROXY_URL as string | undefined;
  const directKey = (import.meta as any)?.env?.VITE_MISTRAL_API_KEY as string | undefined;
  const proxyUrl = directKey ? undefined : (envProxyUrl ?? '/api/mistral/chat');

  const prompt = `Design a precise 3D mesh for: "${objectDescription.trim()}"`;
  let responseText: string;

  if (proxyUrl) {
    const usesSimplifiedFormat = proxyUrl.includes('/api/mistral/chat');
    const body = usesSimplifiedFormat
      ? { systemInstruction: SYSTEM_PROMPT, prompt, model: 'mistral-large-latest' }
      : {
          model: 'mistral-large-latest',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: prompt },
          ],
          temperature: 0.6,
          max_tokens: 1200,
        };

    const resp = await fetch(proxyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!resp.ok) throw new Error(`Proxy returned ${resp.status}`);
    const data: any = await resp.json();
    responseText = data.text ?? data.choices?.[0]?.message?.content ?? '';
  } else if (directKey) {
    const resp = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${directKey}` },
      body: JSON.stringify({
        model: 'mistral-large-latest',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: prompt },
        ],
        temperature: 0.6,
        max_tokens: 1200,
      }),
    });
    if (!resp.ok) throw new Error(`Mistral API returned ${resp.status}`);
    const data: any = await resp.json();
    responseText = data.choices?.[0]?.message?.content ?? '';
  } else {
    throw new Error('No AI backend configured. Set VITE_PROXY_URL (or VITE_MISTRAL_API_KEY for local dev only) in .env');
  }

  const parsed = extractJson(responseText);
  const spec = sanitizeMeshSpec(parsed, objectDescription);
  if (!spec) throw new Error('Model response did not contain a usable mesh design');

  return { spec };
}
