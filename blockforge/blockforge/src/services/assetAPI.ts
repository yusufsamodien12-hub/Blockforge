import { AssetSearchResponse, AssetSearchResult, TextureMapSet } from '../types';

function normalizePolyHavenAsset(id: string, asset: any): AssetSearchResult {
  return {
    source: 'polyhaven',
    id,
    name: asset.name || id,
    description: asset.description,
    thumbnailUrl: asset.thumbnail_url || asset.thumbnailUrl || asset.thumbnail || undefined,
    tags: Array.isArray(asset.tags) ? asset.tags : [],
    categories: Array.isArray(asset.categories) ? asset.categories : [],
    maxResolution: Array.isArray(asset.max_resolution) ? asset.max_resolution : undefined,
    downloadCount: typeof asset.download_count === 'number' ? asset.download_count : undefined,
    files: buildPolyHavenAssetFiles(id, asset),
    raw: asset,
  };
}

function buildPolyHavenAssetFiles(id: string, asset: any): { url: string; type?: string; size?: number }[] {
  return [{ url: `https://polyhaven.com/a/${encodeURIComponent(id)}`, type: 'page' }];
}


function filterPolyHavenResults(results: AssetSearchResult[], query: string): AssetSearchResult[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return results;

  return results.filter((asset) => {
    const text = [asset.name, asset.description, ...(asset.tags ?? []), ...(asset.categories ?? [])]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    return text.includes(normalized);
  });
}

async function fetchPolyHavenDirect(query: string): Promise<AssetSearchResponse> {
  const trimmedQuery = query.trim();
  const baseUrl = new URL('https://api.polyhaven.com/assets');
  baseUrl.searchParams.set('t', 'textures');
  baseUrl.searchParams.set('ext', 'apiassets');

  const directUrl = new URL(baseUrl);
  if (trimmedQuery) {
    directUrl.searchParams.set('q', trimmedQuery);
    directUrl.searchParams.set('c', trimmedQuery);
  }

  const response = await fetch(directUrl.toString(), {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`PolyHaven direct fetch failed with status ${response.status}`);
  }

  const json = await response.json();
  let results: AssetSearchResult[] = Object.entries(json || {}).map(([id, asset]) => normalizePolyHavenAsset(id, asset));

  if (trimmedQuery && results.length === 0) {
    const fallbackUrl = new URL(baseUrl);
    const fallbackResp = await fetch(fallbackUrl.toString(), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    if (!fallbackResp.ok) {
      throw new Error(`PolyHaven fallback fetch failed with status ${fallbackResp.status}`);
    }
    const fallbackJson = await fallbackResp.json();
    const allResults = Object.entries(fallbackJson || {}).map(([id, asset]) => normalizePolyHavenAsset(id, asset));
    results = filterPolyHavenResults(allResults, trimmedQuery);
  }

  return {
    results: results.slice(0, 24),
    errors: { fallback: 'PolyHaven direct fallback used' },
  };
}

export async function searchAssets(query: string): Promise<AssetSearchResponse> {
  const trimmedQuery = query.trim();
  const queryString = trimmedQuery ? `?q=${encodeURIComponent(trimmedQuery)}` : '';

  try {
    const response = await fetch(`/api/asset-search${queryString}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.status === 404) {
      return fetchPolyHavenDirect(query);
    }

    if (!response.ok) {
      throw new Error(`Asset search failed with status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error && /404/.test(error.message)) {
      return fetchPolyHavenDirect(query);
    }
    // If the proxy route is unavailable, fall back to direct PolyHaven search.
    return fetchPolyHavenDirect(query);
  }
}

// PolyHaven's /files/{id} response shape, matched the same way as the
// server-side classifier in server.js -- see that file for the field notes.
const POLYHAVEN_MAP_KEY_PATTERNS: { field: keyof TextureMapSet; re: RegExp }[] = [
  { field: 'diffuse', re: /^(diffuse|albedo|color)$/i },
  { field: 'normal', re: /^(nor(_gl|_dx)?|normal)$/i },
  { field: 'roughness', re: /^rough(ness)?$/i },
  { field: 'ao', re: /^ao$|ambient.?occlusion/i },
];

function pickSmallestFile(resolutionMap: any): string | undefined {
  if (!resolutionMap || typeof resolutionMap !== 'object') return undefined;
  const resolutions = Object.keys(resolutionMap).sort((a, b) => {
    const na = parseInt(a, 10) || Infinity;
    const nb = parseInt(b, 10) || Infinity;
    return na - nb;
  });
  for (const res of resolutions) {
    const formats = resolutionMap[res];
    if (!formats || typeof formats !== 'object') continue;
    const file = formats.jpg || formats.png || Object.values(formats)[0];
    if (file && typeof (file as any).url === 'string') return (file as any).url;
  }
  return undefined;
}

async function fetchPolyHavenMapsDirect(id: string): Promise<TextureMapSet> {
  const response = await fetch(`https://api.polyhaven.com/files/${encodeURIComponent(id)}`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    throw new Error(`PolyHaven files API returned ${response.status}`);
  }
  const json = await response.json();
  const maps: TextureMapSet = {};
  for (const [key, value] of Object.entries(json || {})) {
    const match = POLYHAVEN_MAP_KEY_PATTERNS.find((p) => p.re.test(key));
    if (!match || maps[match.field]) continue;
    const url = pickSmallestFile(value);
    if (url) maps[match.field] = url;
  }
  return maps;
}

// Fetches real PBR maps for a single chosen asset. Only called for the one
// asset actually being applied to a mesh -- not for every search result,
// since PolyHaven's map data requires a dedicated request per asset.
// ambientCG results already carry `maps` from search (see server.js), so
// this is only meaningful for PolyHaven results.
export async function fetchTextureMaps(asset: AssetSearchResult): Promise<TextureMapSet> {
  if (asset.maps && Object.keys(asset.maps).length > 0) return asset.maps;
  if (asset.source !== 'polyhaven') return {};

  try {
    const response = await fetch(`/api/polyhaven-files/${encodeURIComponent(asset.id)}`);
    if (response.status === 404) return fetchPolyHavenMapsDirect(asset.id);
    if (!response.ok) throw new Error(`Map fetch failed with status ${response.status}`);
    const data = await response.json();
    return data.maps ?? {};
  } catch {
    // Server route unavailable (e.g. static deploy with no server.js) --
    // PolyHaven's API is CORS-open, so call it directly as a last resort.
    return fetchPolyHavenMapsDirect(asset.id);
  }
}
