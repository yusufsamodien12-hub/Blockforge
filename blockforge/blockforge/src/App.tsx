import { useEffect, useState } from 'react';
import MeshViewer from './components/MeshViewer';
import Gallery from './components/Gallery';
import { generateMesh } from './services/meshAI';
import { CustomMeshSpec, GalleryEntry } from './types';

const STORAGE_KEY = 'blockforge_gallery';
const QUICK_PICKS = ['brick', 'wooden door', 'egg', 'stone wall', 'roof tile', 'garden fence'];

function loadGallery(): GalleryEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveGallery(entries: GalleryEntry[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // Storage full or unavailable -- non-fatal, the session still works.
  }
}

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [spec, setSpec] = useState<CustomMeshSpec | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [gallery, setGallery] = useState<GalleryEntry[]>([]);

  useEffect(() => {
    setGallery(loadGallery());
  }, []);

  async function handleGenerate(overridePrompt?: string) {
    const description = (overridePrompt ?? prompt).trim();
    if (!description || isLoading) return;

    setIsLoading(true);
    setError(null);
    try {
      const { spec: newSpec } = await generateMesh(description);
      const entry: GalleryEntry = {
        id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        prompt: description,
        spec: newSpec,
        createdAt: Date.now(),
      };
      setSpec(newSpec);
      setActiveId(entry.id);
      setGallery((prev) => {
        const next = [entry, ...prev].slice(0, 50);
        saveGallery(next);
        return next;
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong designing that object.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleSelect(entry: GalleryEntry) {
    setSpec(entry.spec);
    setActiveId(entry.id);
    setPrompt(entry.prompt);
    setError(null);
  }

  function handleDelete(id: string) {
    setGallery((prev) => {
      const next = prev.filter((e) => e.id !== id);
      saveGallery(next);
      return next;
    });
    if (activeId === id) {
      setSpec(null);
      setActiveId(null);
    }
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark" />
          <div>
            <div className="brand-name">BlockForge</div>
            <div className="brand-tagline">AI material &amp; shape research</div>
          </div>
        </div>
        <div className="sidebar-section-label">Gallery</div>
        <Gallery entries={gallery} activeId={activeId} onSelect={handleSelect} onDelete={handleDelete} />
      </aside>

      <main className="main">
        <div className="prompt-bar">
          <input
            className="prompt-input"
            placeholder="What should BlockForge design? e.g. 'clay roof tile'"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleGenerate(); }}
          />
          <button className="prompt-button" onClick={() => handleGenerate()} disabled={isLoading || !prompt.trim()}>
            {isLoading ? 'Designing…' : 'Design it'}
          </button>
        </div>

        <div className="quick-picks">
          {QUICK_PICKS.map((label) => (
            <button
              key={label}
              className="quick-pick-chip"
              onClick={() => { setPrompt(label); handleGenerate(label); }}
              disabled={isLoading}
            >
              {label}
            </button>
          ))}
        </div>

        {error && <div className="error-banner">{error}</div>}

        <MeshViewer spec={spec} isLoading={isLoading} />

        {spec && (
          <div className="research-panel">
            <div className="research-title">{spec.objectName}</div>
            <div className="research-note">{spec.materialResearch}</div>
            <div className="research-meta">{spec.parts.length} part{spec.parts.length === 1 ? '' : 's'}</div>
          </div>
        )}
      </main>
    </div>
  );
}
