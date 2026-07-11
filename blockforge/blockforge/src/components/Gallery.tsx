import { GalleryEntry } from '../types';

interface GalleryProps {
  entries: GalleryEntry[];
  activeId: string | null;
  onSelect: (entry: GalleryEntry) => void;
  onDelete: (id: string) => void;
}

export default function Gallery({ entries, activeId, onSelect, onDelete }: GalleryProps) {
  if (entries.length === 0) {
    return (
      <div className="gallery-empty">
        Designed objects will appear here.
      </div>
    );
  }

  return (
    <div className="gallery-list">
      {entries.map((entry) => (
        <div
          key={entry.id}
          className={`gallery-item ${entry.id === activeId ? 'gallery-item--active' : ''}`}
          onClick={() => onSelect(entry)}
        >
          <div className="gallery-item-swatch" style={{ background: entry.spec.parts[0]?.material.color ?? '#8899aa' }} />
          <div className="gallery-item-text">
            <div className="gallery-item-name">{entry.spec.objectName}</div>
            <div className="gallery-item-prompt">{entry.prompt}</div>
          </div>
          <button
            className="gallery-item-delete"
            onClick={(e) => { e.stopPropagation(); onDelete(entry.id); }}
            aria-label={`Delete ${entry.spec.objectName}`}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
