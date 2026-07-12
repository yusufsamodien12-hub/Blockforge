import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { Mistral } from '@mistralai/mistralai';

function loadEnvFile() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) return;

  const raw = fs.readFileSync(envPath, 'utf8');
  raw.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const match = trimmed.match(/^([^=]+)=(.*)$/);
    if (!match) return;
    const key = match[1].trim();
    let value = match[2].trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  });
}

loadEnvFile();

const app = express();
const PORT = parseInt(process.env.PORT ?? '3101', 10);
const mistralApiKey = process.env.MISTRAL_API_KEY;
const proxyUrl = process.env.VITE_PROXY_URL;

if (!mistralApiKey && !proxyUrl) {
  console.warn('⚠️ MISTRAL_API_KEY not set and VITE_PROXY_URL not configured. Local direct mode is unavailable.');
} else if (!mistralApiKey && proxyUrl) {
  console.log(`ℹ️ No MISTRAL_API_KEY configured. Forwarding /api/mistral/chat to proxy at ${proxyUrl}`);
}

const client = mistralApiKey ? new Mistral({ apiKey: mistralApiKey }) : null;
const API_USER_AGENT = process.env.API_USER_AGENT ?? 'BlockForge/1.0 (+https://github.com/yusufsamodien12-hub/Blockforge)';
const ambientCGApiUrl = process.env.AMBIENTCG_API_URL ?? 'https://ambientcg.com/api/v3/assets';

app.use(cors());
app.use(express.json({ limit: '10mb' }));

function normalizePolyHavenAsset(id, asset) {
  return {
    source: 'polyhaven',
    id,
    name: asset.name || asset.title || id,
    description: asset.description ?? undefined,
    thumbnailUrl: asset.thumbnail_url || asset.thumbnailUrl || asset.thumbnail || undefined,
    tags: Array.isArray(asset.tags) ? asset.tags : [],
    categories: Array.isArray(asset.categories) ? asset.categories : [],
    maxResolution: Array.isArray(asset.max_resolution) && asset.max_resolution.length === 2 ? asset.max_resolution : undefined,
    downloadCount: typeof asset.download_count === 'number' ? asset.download_count : undefined,
    files: buildPolyHavenAssetFiles(id, asset),
    raw: asset,
  };
}

async function fetchPolyHavenTextureUrl(assetId) {
  try {
    const res = await fetch(`https://api.polyhaven.com/files/${assetId}`, {
      headers: { 'User-Agent': API_USER_AGENT, 'Accept': 'application/json' },
    });
    if (!res.ok) return null;
    const files = await res.json();
    const diffuse = files?.Diffuse || files?.diffuse;
    if (!diffuse) return null;
    const res2k = diffuse['2k'] || diffuse['1k'] || diffuse['4k'];
    if (!res2k) return null;
    const jpg = res2k.jpg || res2k.png;
    return jpg?.url || null;
  } catch {
    return null;
  }
}

function buildPolyHavenAssetFiles(id, asset) {
  const safeId = id.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
  const assetId = safeId || id;
  const files = [{ url: `https://polyhaven.com/a/${assetId}`, type: 'page' }];
  if (typeof asset._textureUrl === 'string') {
    files.unshift({ url: asset._textureUrl, type: 'diffuse' });
  }
  return files;
}

function normalizeAmbientCGAsset(id, asset) {
  const files = [];
  if (typeof asset.downloadLink === 'string') {
    files.push({ url: asset.downloadLink, type: 'download' });
  }
  if (Array.isArray(asset.downloadLinks)) {
    asset.downloadLinks.forEach((link) => {
      if (typeof link === 'string') files.push({ url: link, type: 'download' });
      else if (link && typeof link.url === 'string') files.push({ url: link.url, md5: link.md5, size: link.size, type: 'download' });
    });
  }
  if (Array.isArray(asset.files)) {
    asset.files.forEach((file) => {
      if (file && typeof file.url === 'string') files.push({ url: file.url, md5: file.md5, size: file.size, type: file.type || 'download' });
    });
  }

  if (!files.length && (asset.id || id)) {
    files.push({ url: `https://ambientcg.com/view?id=${asset.id || id}`, type: 'page' });
  }

  const thumbnailUrl =
    typeof asset.thumbnailUrl === 'string' ? asset.thumbnailUrl :
    typeof asset.preview === 'string' ? asset.preview :
    typeof asset.thumbnail === 'string' ? asset.thumbnail :
    asset.thumbnails?.['1024-PNG'] || asset.thumbnails?.['512-PNG'] || asset.thumbnails?.['256-PNG'] || asset.thumbnails?.['128-PNG'] || undefined;

  return {
    source: 'ambientcg',
    id: asset.id || id || asset.name || JSON.stringify(asset),
    name: asset.name || asset.title || asset.id || id || 'ambientCG asset',
    description: asset.description ?? undefined,
    thumbnailUrl,
    tags: Array.isArray(asset.tags) ? asset.tags : Array.isArray(asset.categories) ? asset.categories : [],
    categories: Array.isArray(asset.categories) ? asset.categories : undefined,
    maxResolution: Array.isArray(asset.max_resolution) && asset.max_resolution.length === 2 ? asset.max_resolution : undefined,
    downloadCount: typeof asset.downloadCount === 'number' ? asset.downloadCount : undefined,
    files,
    raw: asset,
  };
}

async function searchPolyHavenAssets(query) {
  const url = new URL('https://api.polyhaven.com/assets');
  url.searchParams.set('type', 'textures');
  url.searchParams.set('t', 'textures');
  url.searchParams.set('ext', 'apiassets');
  if (query) {
    url.searchParams.set('q', query);
    url.searchParams.set('c', query);
    url.searchParams.set('search', query);
  }

  const response = await fetch(url.toString(), {
    headers: {
      'User-Agent': API_USER_AGENT,
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`PolyHaven API returned ${response.status}`);
  }

  const json = await response.json();
  if (!json || typeof json !== 'object') {
    return [];
  }

  const rawEntries = Object.entries(json)
    .filter(([id, asset]) => {
      if (!query) return true;
      const normalizedQuery = query.toLowerCase();
      return [asset.name, ...(asset.tags ?? []), ...(asset.categories ?? [])].some((value) =>
        typeof value === 'string' && value.toLowerCase().includes(normalizedQuery)
      );
    })
    .slice(0, 12);

  const entries = await Promise.all(
    rawEntries.map(async ([id, asset]) => {
      const textureUrl = await fetchPolyHavenTextureUrl(id);
      if (textureUrl) asset._textureUrl = textureUrl;
      return normalizePolyHavenAsset(id, asset);
    })
  );

  return entries;
}

async function searchAmbientCGAssets(query) {
  const url = new URL(ambientCGApiUrl);
  if (query) {
    url.searchParams.set('q', query);
    url.searchParams.set('query', query);
    url.searchParams.set('search', query);
  }
  url.searchParams.set('limit', '12');
  url.searchParams.set('include', 'thumbnails');

  const response = await fetch(url.toString(), {
    headers: {
      'User-Agent': API_USER_AGENT,
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`ambientCG API returned ${response.status}`);
  }

  const json = await response.json();
  const items = Array.isArray(json)
    ? json
    : Array.isArray(json.assets)
      ? json.assets
      : Array.isArray(json.results)
        ? json.results
        : [];

  return items.slice(0, 12).map((item, index) => normalizeAmbientCGAsset(String(index), item));
}

app.post('/api/mistral/chat', async (req, res) => {
  if (client) {
    try {
      const { systemInstruction, prompt, model = 'mistral-large-latest' } = req.body;
      const chatResponse = await client.chat.complete({
        model,
        messages: [
          { role: 'system', content: systemInstruction },
          { role: 'user', content: prompt },
        ],
        temperature: 0.6,
        maxTokens: 1200,
      });
      const responseText = chatResponse.choices?.[0]?.message?.content || '{}';
      return res.json({ text: responseText, success: true });
    } catch (error) {
      console.error('Mistral API Error:', error);
      return res.status(500).json({ error: 'Failed to communicate with Mistral API', details: error.message });
    }
  }

  if (!proxyUrl) {
    return res.status(500).json({ error: 'API key not configured. Set MISTRAL_API_KEY, or set VITE_PROXY_URL to reuse an existing worker proxy.' });
  }

  try {
    const proxyResponse = await fetch(proxyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const text = await proxyResponse.text();
    const contentType = proxyResponse.headers.get('content-type') ?? 'application/json';
    res.status(proxyResponse.status).type(contentType).send(text);
  } catch (error) {
    console.error('Proxy request error:', error);
    res.status(500).json({ error: 'Failed to communicate with configured proxy', details: error.message });
  }
});

app.get('/api/asset-search', async (req, res) => {
  const query = String(req.query.q || '');
  const results = [];
  const errors = {};

  const [polyhaven, ambientcg] = await Promise.allSettled([
    searchPolyHavenAssets(query),
    searchAmbientCGAssets(query),
  ]);

  if (polyhaven.status === 'fulfilled') {
    results.push(...polyhaven.value);
  } else {
    errors.polyhaven = String(polyhaven.reason?.message || polyhaven.reason || 'Unknown error');
  }

  if (ambientcg.status === 'fulfilled') {
    results.push(...ambientcg.value);
  } else {
    errors.ambientcg = String(ambientcg.reason?.message || ambientcg.reason || 'Unknown error');
  }

  res.json({ results, errors });
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(process.cwd(), 'ui.html'));
});

app.get(['/ui', '/ui.html'], (req, res) => {
  res.sendFile(path.resolve(process.cwd(), 'ui.html'));
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'blockforge-proxy' });
});

app.use(express.static(path.resolve(process.cwd())));

app.listen(PORT, () => {
  console.log(`🚀 BlockForge local proxy running on http://localhost:${PORT}`);
  if (fs.existsSync(path.resolve(process.cwd(), 'ui.html'))) {
    console.log(`ℹ️ Preview UI available at http://localhost:${PORT}/ui`);
  }
});
