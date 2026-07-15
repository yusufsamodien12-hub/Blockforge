import { useEffect, useState } from 'react';
import MeshViewer from './components/MeshViewer';
import Gallery from './components/Gallery';
import { generateMesh } from './services/meshAI';
import { searchAssets, fetchTextureMaps } from './services/assetAPI';
import { AssetSearchResult, CustomMeshSpec, GalleryEntry, TextureMapSet } from './types';

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
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((entry) => {
      return (
        entry &&
        typeof entry === 'object' &&
        typeof entry.id === 'string' &&
        typeof entry.prompt === 'string' &&
        typeof entry.createdAt === 'number' &&
        entry.spec &&
        typeof entry.spec === 'object' &&
        Array.isArray((entry.spec as any).parts)
      );
    });
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
  const [assetResults, setAssetResults] = useState<AssetSearchResult[]>([]);
  const [assetLoading, setAssetLoading] = useState(false);
  const [assetError, setAssetError] = useState<string | null>(null);
  const [assetSearchTriggered, setAssetSearchTriggered] = useState(false);
  const [showAssetStatus, setShowAssetStatus] = useState(true);
  const [textureMaps, setTextureMaps] = useState<TextureMapSet | null>(null);
  const [appliedAssetId, setAppliedAssetId] = useState<string | null>(null);
  const [textureMapsLoading, setTextureMapsLoading] = useState(false);
  const [viewerMaximized, setViewerMaximized] = useState(false);
  const [gallery, setGallery] = useState<GalleryEntry[]>([]);
  const [agentActivity, setAgentActivity] = useState<{ source: string; description: string; created_at: string } | null>(null);
  const [agentDesigns, setAgentDesigns] = useState<GalleryEntry[]>([]);
  const [activeAgentDesignId, setActiveAgentDesignId] = useState<string | null>(null);

  const polyHavenCount = assetResults.filter((result) => result.source === 'polyhaven').length;
  const ambientCGCount = assetResults.filter((result) => result.source === 'ambientcg').length;
  const usedSources = Array.from(new Set(assetResults.map((result) => result.source)));
  const polyHavenUsed = polyHavenCount > 0;
  const ambientCGUsed = ambientCGCount > 0;

  useEffect(() => {
    setGallery(loadGallery());
  }, []);

  // Poll BlockForge's own worker for recent /design calls from other tools
  // (e.g. World-Agent), so this UI can show a live "agent is using this
  // tool" indicator. Only surfaces activity from the last 15 seconds.
  useEffect(() => {
    const proxyUrl = import.meta.env.VITE_PROXY_URL as string | undefined;
    const baseUrl = proxyUrl
      ? proxyUrl.replace(/\/v1\/chat\/completions$/, '')
      : 'https://blockforge.yusufsamodien12.workers.dev';

    let cancelled = false;
    async function poll() {
      try {
        const [activityResp, designsResp] = await Promise.all([
          fetch(`${baseUrl}/agent-activity`),
          fetch(`${baseUrl}/recent-designs`)
        ]);

        // Agent activity
        if (activityResp.ok && !cancelled) {
          const activityData: any = await activityResp.json();
          const latest = activityData?.activity?.[0];
          if (latest && latest.source !== 'unknown') {
            const ageMs = Date.now() - new Date(latest.created_at.replace(' ', 'T') + 'Z').getTime();
            setAgentActivity(ageMs < 30000 ? latest : null);
          }
        }

        // Recent agent-created designs
        if (designsResp.ok && !cancelled) {
          const designsData: any = await designsResp.json();
          const designs = designsData?.designs ?? [];
          const mapped: GalleryEntry[] = designs
            .filter((d: any) => d.spec && d.description)
            .map((d: any) => {
              let spec: CustomMeshSpec;
              try {
                spec = typeof d.spec === 'string' ? JSON.parse(d.spec) : d.spec;
              } catch {
                return null;
              }
              return {
                id: `agent-${d.id}`,
                prompt: d.description,
                spec,
                createdAt: new Date(d.created_at).getTime(),
              };
            })
            .filter((e: any) => e !== null);
          setAgentDesigns(mapped);
        }
      } catch {
        // Non-fatal -- just skip this poll cycle.
      }
    }

    poll();
    const interval = setInterval(poll, 4000);
    return () => { cancelled = true; clearInterval(interval); };
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function pickAndLoad() {
      if (assetResults.length === 0) {
        setTextureMaps(null);
        setAppliedAssetId(null);
        return;
      }

      // Prefer a result that already has classified maps (ambientCG, right
      // from search -- no extra request needed). Otherwise fall back to the
      // first PolyHaven result and fetch its real maps on demand -- only
      // for this one candidate, not every search result.
      const withMaps = assetResults.find((a) => a.maps && Object.keys(a.maps).length > 0);
      const candidate = withMaps ?? assetResults[0];

      setTextureMapsLoading(true);
      try {
        const maps = await fetchTextureMaps(candidate);
        if (cancelled) return;
        if (Object.keys(maps).length === 0) {
          setTextureMaps(null);
          setAppliedAssetId(null);
        } else {
          setTextureMaps(maps);
          setAppliedAssetId(`${candidate.source}-${candidate.id}`);
        }
      } catch {
        if (!cancelled) {
          setTextureMaps(null);
          setAppliedAssetId(null);
        }
      } finally {
        if (!cancelled) setTextureMapsLoading(false);
      }
    }

    pickAndLoad();
    return () => { cancelled = true; };
  }, [assetResults]);

  function buildTextureSearchQuery(description: string) {
    const parts = [description];
    if (material !== 'any') parts.push(material);
    if (color !== 'any') parts.push(color);
    if (extraFeature.trim()) parts.push(extraFeature.trim());
    return parts.join(' ');
  }

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

    const textureQuery = buildTextureSearchQuery(description);
    setIsLoading(true);
    setError(null);
    try {
      await handleAssetSearch(textureQuery).catch(() => {});
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
  }

  function handleSelect(entry: GalleryEntry) {
    setSpec(entry.spec);
    setActiveId(entry.id);
    setPrompt(entry.prompt);
    setError(null);
  }

  async function handleAssetSearch(searchTerm: string) {
    if (assetLoading) return;
    const query = searchTerm.trim();
    if (!query) return;

    setAssetLoading(true);
    setAssetError(null);

    try {
      const data = await searchAssets(query);
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
        {agentActivity && (
          <div className="agent-activity-banner">
            🤖 <strong>{agentActivity.source}</strong> is using this tool: “{agentActivity.description}”
          </div>
        )}
        <Gallery entries={gallery} activeId={activeId} onSelect={handleSelect} onDelete={handleDelete} />

        {agentDesigns.length > 0 && (
          <>
            <div className="sidebar-section-label">Agent Creations</div>
            <Gallery entries={agentDesigns} activeId={activeAgentDesignId} onSelect={(entry) => {
              setSpec(entry.spec);
              setActiveAgentDesignId(entry.id);
              setActiveId(null);
              setError(null);
            }} onDelete={() => {}} />
          </>
        )}
      </aside>

      <main className="main">
        <div className="main-header">
          {agentActivity && (
            <div className="agent-control-note">
              🤖 Design controls are currently delegated to <strong>{agentActivity.source}</strong>
            </div>
          )}
          <div className="prompt-bar">
            <input
              className="prompt-input"
              placeholder={agentActivity ? 'Controlled by agent — manual input disabled' : "What should BlockForge design? e.g. 'clay roof tile'"}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleGenerate(); }}
              disabled={!!agentActivity}
            />
            <button className="prompt-button" onClick={() => handleGenerate()} disabled={isLoading || !prompt.trim() || !!agentActivity}>
              {isLoading ? 'Designing…' : 'Design it'}
            </button>
          </div>


          <div className="filter-bar">
            <select className="filter-select" value={size} onChange={(e) => setSize(e.target.value as typeof size)} disabled={!!agentActivity}>
              {SIZE_OPTIONS.map((option) => (
                <option key={option} value={option}>{option === 'any' ? 'Any size' : `${option.charAt(0).toUpperCase() + option.slice(1)} size`}</option>
              ))}
            </select>
            <select className="filter-select" value={color} onChange={(e) => setColor(e.target.value as typeof color)} disabled={!!agentActivity}>
              {COLOR_OPTIONS.map((option) => (
                <option key={option} value={option}>{option === 'any' ? 'Any color' : `${option.charAt(0).toUpperCase() + option.slice(1)} color`}</option>
              ))}
            </select>
            <select className="filter-select" value={material} onChange={(e) => setMaterial(e.target.value as typeof material)} disabled={!!agentActivity}>
              {MATERIAL_OPTIONS.map((option) => (
                <option key={option} value={option}>{option === 'any' ? 'Any material' : `${option.charAt(0).toUpperCase() + option.slice(1)}`}</option>
              ))}
            </select>
            <select className="filter-select" value={tool} onChange={(e) => setTool(e.target.value as typeof tool)} disabled={!!agentActivity}>
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
            <select className="filter-select" value={skill} onChange={(e) => setSkill(e.target.value as typeof skill)} disabled={!!agentActivity}>
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
              disabled={!!agentActivity}
            />
          </div>

          <div className="quick-picks">
            {QUICK_PICKS.map((label) => (
              <button
                key={label}
                className="quick-pick-chip"
                disabled={!!agentActivity || isLoading}
                onClick={() => { setPrompt(label); handleGenerate(label); }}
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
                  ? `PolyHaven results found: ${polyHavenCount}`
                  : assetSearchTriggered
                    ? 'PolyHaven results found: 0'
                    : 'PolyHaven search pending'}
              </div>
              <div className={`asset-status-chip ${ambientCGUsed ? 'asset-status-chip--active' : ''}`}>
                {ambientCGUsed
                  ? `ambientCG results found: ${ambientCGCount}`
                  : assetSearchTriggered
                    ? 'ambientCG results found: 0'
                    : 'ambientCG search pending'}
              </div>
              <div className={`asset-status-chip ${appliedAssetId ? 'asset-status-chip--active' : ''}`}>
                {textureMapsLoading ? 'Applying texture…' : appliedAssetId ? 'Texture applied to mesh' : 'No texture applied'}
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
        </div>

        <div className="main-content">
          <div className={`mesh-viewer-wrapper ${viewerMaximized ? 'mesh-viewer-wrapper--maximized' : ''}`}>
            <button
              type="button"
              className="viewer-toggle-button"
              onClick={() => setViewerMaximized((prev) => !prev)}
            >
              {viewerMaximized ? 'Restore view' : 'Maximize view'}
            </button>
            <MeshViewer spec={spec} isLoading={isLoading} textureMaps={textureMaps} />
          </div>

          {spec && (
            <div className="research-panel">
              <div className="research-title">{spec.objectName}</div>
              <div className="research-note">{spec.materialResearch}</div>
              <div className="research-meta">{spec.parts.length} part{spec.parts.length === 1 ? '' : 's'}</div>
            </div>
          )}

          {assetResults.length > 0 && (
            <div className="asset-results-panel">
              <div className="research-title">
                Texture search results
                {textureMapsLoading && <span className="applied-badge applied-badge--loading">Applying…</span>}
              </div>
              <div className="research-note">
                {appliedAssetId
                  ? 'One result below is actually applied to the mesh (marked "Applied"). The rest are shown for reference only.'
                  : "None of these are applied to the mesh yet -- they're shown for reference only."}
              </div>
              <div className="asset-results-grid">
                {assetResults.map((asset) => {
                  const key = `${asset.source}-${asset.id}`;
                  const isApplied = key === appliedAssetId;
                  return (
                    <div key={key} className={`asset-result-card ${isApplied ? 'asset-result-card--applied' : ''}`}>
                      <div className="asset-source">
                        {asset.source === 'polyhaven' ? 'PolyHaven' : 'ambientCG'}
                        {isApplied && <span className="applied-badge">Applied</span>}
                      </div>
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
                          {asset.files[0].type === 'page' ? 'Open asset page' : 'Download file'}
                        </a>
                      ) : (
                        <div className="asset-download asset-download--disabled">No file link</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
