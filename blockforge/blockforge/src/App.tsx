import { useEffect, useState } from 'react';
import MeshViewer from './components/MeshViewer';
import Gallery from './components/Gallery';
import { generateMesh } from './services/meshAI';
import { searchAssets } from './services/assetAPI';
import { AssetSearchResult, CustomMeshSpec, GalleryEntry } from './types';

const STORAGE_KEY = 'blockforge_gallery';
const SIZE_OPTIONS = ['any', 'small', 'medium', 'large'] as const;
const COLOR_OPTIONS = ['any', 'warm', 'cool', 'neutral', 'metallic'] as const;
const MATERIAL_OPTIONS = ['any', 'wood', 'stone', 'metal', 'glass', 'plastic', 'ceramic'] as const;
const TOOL_OPTIONS = ['auto', 'any', 'hammer-chisel', 'lathe', 'cnc', '3d-printer', 'mold-cast', 'laser-cut'] as const;
const SKILL_OPTIONS = ['auto', 'any', 'joinery', 'carving', 'sculpting', 'precision-machining', 'architectural-detail', 'ornamental'] as const;
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
  const [size, setSize] = useState<(typeof SIZE_OPTIONS)[number]>('any');
  const [color, setColor] = useState<(typeof COLOR_OPTIONS)[number]>('any');
  const [material, setMaterial] = useState<(typeof MATERIAL_OPTIONS)[number]>('any');
  const [tool, setTool] = useState<(typeof TOOL_OPTIONS)[number]>('auto');
  const [skill, setSkill] = useState<(typeof SKILL_OPTIONS)[number]>('auto');
  const [extraFeature, setExtraFeature] = useState('');
  const [spec, setSpec] = useState<CustomMeshSpec | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [assetQuery, setAssetQuery] = useState('plastic');
  const [assetResults, setAssetResults] = useState<AssetSearchResult[]>([]);
  const [assetLoading, setAssetLoading] = useState(false);
  const [assetError, setAssetError] = useState<string | null>(null);
  const [assetSearchTriggered, setAssetSearchTriggered] = useState(false);
  const [showAssetStatus, setShowAssetStatus] = useState(true);
  const [gallery, setGallery] = useState<GalleryEntry[]>([]);

  const polyHavenCount = assetResults.filter((result) => result.source === 'polyhaven').length;
  const ambientCGCount = assetResults.filter((result) => result.source === 'ambientcg').length;
  const usedSources = Array.from(new Set(assetResults.map((result) => result.source)));
  const polyHavenUsed = polyHavenCount > 0;
  const ambientCGUsed = ambientCGCount > 0;

  useEffect(() => {
    setGallery(loadGallery());
  }, []);

  async function handleGenerate(overridePrompt?: string) {
    const description = (overridePrompt ?? prompt).trim();
    if (!description || isLoading) return;

    const filterPrompts: string[] = [];
    if (size !== 'any') filterPrompts.push(`${size} size`);
    if (color !== 'any') filterPrompts.push(`${color} color palette`);
    if (material !== 'any') filterPrompts.push(`${material} material`);
    if (tool === 'auto') {
      filterPrompts.push('choose the most suitable fabrication tools automatically');
    } else if (tool !== 'any') {
      filterPrompts.push(`crafted with ${tool}`);
    }

    if (skill === 'auto') {
      filterPrompts.push('choose the most suitable craftsmanship skill level automatically');
    } else if (skill !== 'any') {
      filterPrompts.push(`showing ${skill} skill level finish`);
    }
    if (extraFeature.trim()) filterPrompts.push(extraFeature.trim());

    const descriptionWithFilters = filterPrompts.length
      ? `${description} with ${filterPrompts.join(', ')}`
      : description;

    setIsLoading(true);
    setError(null);
    try {
      const { spec: newSpec } = await generateMesh(descriptionWithFilters);
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

    handleAssetSearch();
  }

  function handleSelect(entry: GalleryEntry) {
    setSpec(entry.spec);
    setActiveId(entry.id);
    setPrompt(entry.prompt);
    setError(null);
  }

  async function handleAssetSearch(query?: string) {
    if (assetLoading) return;
    const searchQuery = typeof query === 'string' ? query.trim() : assetQuery.trim();
    if (!searchQuery) return;

    setAssetLoading(true);
    setAssetError(null);
    if (typeof query === 'string') {
      setAssetQuery(searchQuery);
    }

    try {
      const data = await searchAssets(searchQuery);
      setAssetResults(data.results);
      setAssetSearchTriggered(true);
      if (data.errors && Object.keys(data.errors).length > 0) {
        setAssetError(Object.values(data.errors).join(' · '));
      }
    } catch (err) {
      setAssetResults([]);
      setAssetSearchTriggered(true);
      setAssetError(err instanceof Error ? err.message : 'Failed to fetch assets.');
    } finally {
      setAssetLoading(false);
    }
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

        <div className="asset-search-bar">
          <input
            className="prompt-input"
            placeholder="Search PolyHaven + ambientCG textures"
            value={assetQuery}
            onChange={(e) => setAssetQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleAssetSearch(); }}
          />
          <button className="prompt-button" onClick={() => handleAssetSearch()} disabled={assetLoading}>
            {assetLoading ? 'Searching…' : 'Search assets'}
          </button>
        </div>

        <div className="filter-bar">
          <select className="filter-select" value={size} onChange={(e) => setSize(e.target.value as typeof size)}>
            {SIZE_OPTIONS.map((option) => (
              <option key={option} value={option}>{option === 'any' ? 'Any size' : `${option.charAt(0).toUpperCase() + option.slice(1)} size`}</option>
            ))}
          </select>
          <select className="filter-select" value={color} onChange={(e) => setColor(e.target.value as typeof color)}>
            {COLOR_OPTIONS.map((option) => (
              <option key={option} value={option}>{option === 'any' ? 'Any color' : `${option.charAt(0).toUpperCase() + option.slice(1)} color`}</option>
            ))}
          </select>
          <select className="filter-select" value={material} onChange={(e) => setMaterial(e.target.value as typeof material)}>
            {MATERIAL_OPTIONS.map((option) => (
              <option key={option} value={option}>{option === 'any' ? 'Any material' : `${option.charAt(0).toUpperCase() + option.slice(1)}`}</option>
            ))}
          </select>
          <select className="filter-select" value={tool} onChange={(e) => setTool(e.target.value as typeof tool)}>
            {TOOL_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option === 'auto'
                  ? 'Tool: Auto (AI decides)'
                  : option === 'any'
                    ? 'Any tool'
                    : `Tool: ${option.replace(/-/g, ' ')}`}
              </option>
            ))}
          </select>
          <select className="filter-select" value={skill} onChange={(e) => setSkill(e.target.value as typeof skill)}>
            {SKILL_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option === 'auto'
                  ? 'Skill: Auto (AI decides)'
                  : option === 'any'
                    ? 'Any skill'
                    : `Skill: ${option.replace(/-/g, ' ')}`}
              </option>
            ))}
          </select>
          <input
            className="filter-input"
            placeholder="Extra feature (textured, hollow, beveled, embossed)"
            value={extraFeature}
            onChange={(e) => setExtraFeature(e.target.value)}
          />
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
        {assetError && <div className="error-banner">{assetError}</div>}
        {showAssetStatus ? (
          <div className="asset-status-bar">
            <div className={`asset-status-chip ${polyHavenUsed ? 'asset-status-chip--active' : ''}`}>
              {polyHavenUsed
                ? `PolyHaven textures loaded: ${polyHavenCount}`
                : assetSearchTriggered
                  ? 'PolyHaven textures loaded: 0'
                  : 'PolyHaven textures pending'}
            </div>
            <div className={`asset-status-chip ${ambientCGUsed ? 'asset-status-chip--active' : ''}`}>
              {ambientCGUsed
                ? `ambientCG textures loaded: ${ambientCGCount}`
                : assetSearchTriggered
                  ? 'ambientCG textures loaded: 0'
                  : 'ambientCG textures pending'}
            </div>
            <button type="button" className="asset-status-toggle" onClick={() => setShowAssetStatus(false)}>
              Hide status
            </button>
          </div>
        ) : (
          <div className="asset-status-hidden">
            <button type="button" className="asset-status-toggle" onClick={() => setShowAssetStatus(true)}>
              Show texture status
            </button>
          </div>
        )}

        <MeshViewer spec={spec} isLoading={isLoading} />

        {spec && (
          <div className="research-panel">
            <div className="research-title">{spec.objectName}</div>
            <div className="research-note">{spec.materialResearch}</div>
            <div className="research-meta">{spec.parts.length} part{spec.parts.length === 1 ? '' : 's'}</div>
          </div>
        )}

        {assetResults.length > 0 && (
          <div className="asset-results-panel">
            <div className="research-title">Textures used from PolyHaven / ambientCG</div>
            <div className="asset-results-grid">
              {assetResults.map((asset) => (
                <div key={`${asset.source}-${asset.id}`} className="asset-result-card">
                  <div className="asset-source">{asset.source === 'polyhaven' ? 'PolyHaven' : 'ambientCG'}</div>
                  {asset.thumbnailUrl ? (
                    <img className="asset-thumbnail" src={asset.thumbnailUrl} alt={asset.name} />
                  ) : (
                    <div className="asset-thumbnail asset-thumbnail--empty">No preview</div>
                  )}
                  <div className="asset-name">{asset.name}</div>
                  <div className="asset-meta">
                    {asset.tags?.slice(0, 3).join(', ') || asset.categories?.slice(0, 3).join(', ') || 'No tags'}
                  </div>
                  {asset.files?.[0]?.url ? (
                    <a className="asset-download" href={asset.files[0].url} target="_blank" rel="noreferrer">
                      Download file
                    </a>
                  ) : (
                    <div className="asset-download asset-download--disabled">No file link</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
