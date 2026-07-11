export type MeshGeometryKind = 'box' | 'cylinder' | 'cone' | 'sphere' | 'torus';

export interface MeshMaterialSpec {
  color: string;
  roughness: number;
  metalness: number;
  emissive?: string;
  emissiveIntensity?: number;
}

// A single precise primitive. `args` follows the Three.js constructor
// signature for the given `geometry`:
//   box:      [width, height, depth]
//   cylinder: [radiusTop, radiusBottom, height, radialSegments?]
//   cone:     [radius, height, radialSegments?]
//   sphere:   [radius, widthSegments?, heightSegments?]
//   torus:    [radius, tube, radialSegments?, tubularSegments?]
export interface MeshPart {
  geometry: MeshGeometryKind;
  args: number[];
  position: [number, number, number];
  rotation: [number, number, number];
  material: MeshMaterialSpec;
}

// The result of asking the AI to research a real-world object's material
// and shape. This is untrusted model output -- always run it through
// sanitizeMeshSpec() before rendering (see services/meshAI.ts).
export interface CustomMeshSpec {
  objectName: string;
  materialResearch: string;
  parts: MeshPart[];
}

export type AssetSource = 'polyhaven' | 'ambientcg';

export interface AssetFile {
  url: string;
  md5?: string;
  size?: number;
  type?: string;
}

export interface AssetSearchResult {
  source: AssetSource;
  id: string;
  name: string;
  description?: string;
  thumbnailUrl?: string;
  tags?: string[];
  categories?: string[];
  maxResolution?: [number, number];
  downloadCount?: number;
  files?: AssetFile[];
  raw?: unknown;
}

export interface AssetSearchResponse {
  results: AssetSearchResult[];
  errors?: Record<string, string>;
  usedSources?: AssetSource[];
}

export interface GalleryEntry {
  id: string;
  prompt: string;
  spec: CustomMeshSpec;
  createdAt: number;
}
