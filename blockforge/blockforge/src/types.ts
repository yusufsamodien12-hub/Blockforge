export type MeshGeometryKind = 'box' | 'cylinder' | 'cone' | 'sphere' | 'torus';

export interface MeshMaterialSpec {
  color: string;
  roughness: number;
  metalness: number;
  emissive?: string;
  emissiveIntensity?: number;
  /** URL to a texture image to use as map (diffuse/albedo) */
  textureUrl?: string;
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

// Real, individually-classified PBR map URLs for an asset -- as opposed to
// AssetFile[], which is just "here's a pile of links, good luck." Only
// populate a field when you actually have a URL for that specific map type.
export interface TextureMapSet {
  diffuse?: string;
  normal?: string;
  roughness?: string;
  ao?: string;
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
  // Populated for ambientCG results directly from search (their API exposes
  // per-map download links up front). PolyHaven results leave this undefined
  // from search -- PolyHaven's search endpoint never includes map URLs, only
  // a second call to /files/{id} does, so that's fetched on demand only for
  // the one asset actually chosen (see services/assetAPI.ts fetchPolyHavenMaps).
  maps?: TextureMapSet;
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

/** Design created by the World-Agent, fetched from the worker's /recent-designs endpoint */
export interface AgentDesign {
  id: number;
  source: string;
  description: string;
  spec: string; // JSON string of CustomMeshSpec
  created_at: string;
}
