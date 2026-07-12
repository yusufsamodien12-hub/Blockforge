# BlockForge

A standalone companion to world26: type the name of an object — a building
block, material, or everyday thing (`brick`, `wooden door`, `egg`, `stone
wall`, `roof tile`) — and the AI researches what it's actually made of and
precisely shaped like, then BlockForge renders it as a real Three.js mesh
built from primitives (box/cylinder/cone/sphere/torus), not a generic block.

No purchasing, no supplier integration — this is purely a "design and see
it" tool. Every design is kept in a local gallery (browser storage) so you
can revisit past objects.

## How it works

1. You type a description and hit **Design it** (or click a quick-pick chip).
2. The app sends a research prompt to your configured AI backend, asking it
   to reason about real-world material (composition, texture, reflectivity)
   and precise geometric shape.
3. The response is **validated and clamped** before it ever touches the
   renderer — geometry kind, part count, every dimension, and every color
   are checked, and malformed parts are dropped rather than crashing the
   viewer. See `src/services/meshAI.ts` → `sanitizeMeshSpec`.
4. The mesh renders in the viewer (drag to orbit, scroll to zoom), alongside
   the AI's one-sentence material note.

## Setup

```bash
npm install
cp .env.example .env
```

Easiest path: edit `.env` and point `VITE_PROXY_URL` at the **same
Cloudflare Worker** your world26 project already uses — it's a generic
chat-completions proxy, so nothing new needs to be deployed.

```bash
npm run dev
```

Open http://localhost:4100.

### Local-only alternative

If you'd rather run a local proxy instead of reusing the worker:

```bash
# .env
VITE_PROXY_URL=http://localhost:3101/api/mistral/chat
MISTRAL_API_KEY=your_mistral_api_key_here
```

`npm run dev` starts both this proxy (`server.js`, port 3101) and Vite.

## Deploying

Run `npm run build`. If you deploy to a subpath (e.g. GitHub Pages at
`username.github.io/blockforge/`), set `base: '/blockforge/'` for
production builds in `vite.config.ts` (already wired up via the `isProd`
check) — otherwise built assets will 404, which is exactly the bug we found
in world26's own deploy config.
