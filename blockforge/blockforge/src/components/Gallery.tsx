import { GalleryEntry } from '../types';

interface GalleryProps {
  entries: (GalleryEntry & { source?: string })[];
  activeId: string | null;
  onSelect: (entry: GalleryEntry) => void;
  onDelete: (id: string) => void;
  type: 'user' | 'agent';
}

export default function Gallery({ entries, activeId, onSelect, onDelete, type }: GalleryProps) {
  if (entries.length === 0) {
    return (
      <div className="gallery-empty">
        {type === 'user'
          ? 'Designed objects will appear here.'
          : 'No agent creations yet. The World-Agent will populate this as it builds.'}
      </div>
    );
  }

  return (
    <div className="gallery-list">
      {entries.map((entry) => {
        const firstMat = entry.spec.parts[0]?.material;
        const hasTexture = !!firstMat?.textureUrl;
        const partCount = entry.spec.parts.length;
        const isActive = entry.id === activeId;

        return (
          <div
            key={entry.id}
            className={`gallery-item ${isActive ? 'gallery-item--active' : ''} ${type === 'agent' ? 'gallery-item--agent' : ''}`}
            onClick={() => onSelect(entry)}
          >
            <div
              className={`gallery-item-swatch ${hasTexture ? 'gallery-item-swatch--textured' : ''}`}
              style={{ background: firstMat?.color ?? '#8899aa' }}
            />
            <div className="gallery-item-text">
              <div className="gallery-item-name">
                {entry.spec.objectName || 'Unnamed design'}
                {type === 'agent' && <span className="gallery-item-source">Agent</span>}
              </div>
              <div className="gallery-item-prompt">{entry.prompt}</div>
              <div className="gallery-item-meta">
                <span>{partCount} part{partCount === 1 ? '' : 's'}</span>
                {hasTexture && <span className="gallery-item-texture-badge" title="Has texture">TX</span>}
                {firstMat?.metalness && firstMat.metalness > 0.5 ? <span>Metallic</span> : null}
                {entry.source && <span className="gallery-item-source-label">{entry.source}</span>}
              </div>
            </div>
            {type === 'user' && (
              <button
                className="gallery-item-delete"
                onClick={(e) => { e.stopPropagation(); onDelete(entry.id); }}
                aria-label={`Delete ${entry.spec.objectName}`}
              >
                ×
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
