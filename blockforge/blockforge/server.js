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

app.use(cors());
app.use(express.json({ limit: '10mb' }));

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
