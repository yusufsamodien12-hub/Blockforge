import { AssetSearchResponse, AssetSearchResult } from '../types';

function normalizePolyHavenAsset(id: string, asset: any): AssetSearchResult {
  return {
    source: 'polyhaven',
    id,
    name: asset.name || id,
    description: asset.description,
    thumbnailUrl: asset.thumbnail_url,
    tags: Array.isArray(asset.tags) ? asset.tags : [],
    categories: Array.isArray(asset.categories) ? asset.categories : [],
    maxResolution: Array.isArray(asset.max_resolution) ? asset.max_resolution : undefined,
    downloadCount: typeof asset.download_count === 'number' ? asset.download_count : undefined,
    files: [],
    raw: asset,
  };
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
