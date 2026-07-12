import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CustomMeshSpec, TextureMapSet } from '../types';

interface MeshViewerProps {
  spec: CustomMeshSpec | null;
  isLoading: boolean;
  textureMaps?: TextureMapSet | null;
}

function buildGeometry(part: CustomMeshSpec['parts'][number]): THREE.BufferGeometry {
  switch (part.geometry) {
    case 'box':
      return new THREE.BoxGeometry(...(part.args.slice(0, 3) as [number, number, number]));
    case 'cylinder':
      return new THREE.CylinderGeometry(...(part.args.slice(0, 4) as [number, number, number, number]));
    case 'cone':
      return new THREE.ConeGeometry(...(part.args.slice(0, 3) as [number, number, number]));
    case 'sphere':
      return new THREE.SphereGeometry(...(part.args.slice(0, 3) as [number, number, number]));
    case 'torus':
      return new THREE.TorusGeometry(...(part.args.slice(0, 4) as [number, number, number, number]));
    default:
      return new THREE.BoxGeometry(0.5, 0.5, 0.5);
  }
}

// A texture tiled at 1x1 over a large part looks like one giant stretched
// smear; tiled at a fixed high count over a small part looks like noise.
// Estimate each part's largest visible dimension and repeat the texture
// roughly once per half-meter, so scale stays reasonably consistent across
// differently-sized parts of the same object.
const METERS_PER_TILE = 0.5;
function estimateFootprintMeters(part: CustomMeshSpec['parts'][number]): number {
  const dims = part.args.slice(0, 3).filter((n) => Number.isFinite(n));
  return dims.length > 0 ? Math.max(...dims) : 0.5;
}

export default function MeshViewer({ spec, isLoading, textureMaps }: MeshViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const objectGroupRef = useRef<THREE.Group | null>(null);
  const loadedTexturesRef = useRef<THREE.Texture[]>([]);
  const cameraStateRef = useRef({ angle: 0.6, elevation: 0.45, dist: 6 });
  const draggingRef = useRef(false);

  // One-time scene setup.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b0f1a);
    scene.fog = new THREE.FogExp2(0x0b0f1a, 0.035);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 200);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    scene.add(new THREE.AmbientLight(0x334155, 0.7));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(4, 6, 4);
    key.castShadow = true;
    scene.add(key);
    const rim = new THREE.PointLight(0x38bdf8, 1.2, 20);
    rim.position.set(-3, 3, -3);
    scene.add(rim);

    const platform = new THREE.Mesh(
      new THREE.CylinderGeometry(2.4, 2.4, 0.15, 48),
      new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.9, metalness: 0.1 })
    );
    platform.position.y = -0.075;
    platform.receiveShadow = true;
    scene.add(platform);

    const ringGeo = new THREE.RingGeometry(2.35, 2.42, 64);
    const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.5 }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.001;
    scene.add(ring);

    const group = new THREE.Group();
    scene.add(group);
    objectGroupRef.current = group;

    const onDown = (e: PointerEvent) => {
      draggingRef.current = true;
      (onDown as any).lastX = e.clientX;
      (onDown as any).lastY = e.clientY;
    };
    const onUp = () => { draggingRef.current = false; };
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const lastX = (onDown as any).lastX ?? e.clientX;
      const lastY = (onDown as any).lastY ?? e.clientY;
      cameraStateRef.current.angle -= (e.clientX - lastX) * 0.006;
      cameraStateRef.current.elevation = Math.max(0.1, Math.min(1.4, cameraStateRef.current.elevation - (e.clientY - lastY) * 0.006));
      (onDown as any).lastX = e.clientX;
      (onDown as any).lastY = e.clientY;
    };
    const onWheel = (e: WheelEvent) => {
      cameraStateRef.current.dist = Math.max(2.5, Math.min(16, cameraStateRef.current.dist + e.deltaY * 0.01));
    };
    renderer.domElement.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointermove', onMove);
    renderer.domElement.addEventListener('wheel', onWheel);

    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
    resizeObserver.observe(container);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!draggingRef.current) cameraStateRef.current.angle += 0.0025;
      const { angle, elevation, dist } = cameraStateRef.current;
      camera.position.set(
        dist * Math.cos(angle) * Math.cos(elevation),
        dist * Math.sin(elevation) + 0.4,
        dist * Math.sin(angle) * Math.cos(elevation)
      );
      camera.lookAt(0, 0.6, 0);
      ring.rotation.z += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointermove', onMove);
      renderer.domElement.removeEventListener('pointerdown', onDown);
      renderer.domElement.removeEventListener('wheel', onWheel);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      loadedTexturesRef.current.forEach((t) => t.dispose());
      loadedTexturesRef.current = [];
    };
  }, []);

  // Rebuild the object whenever the spec or texture maps change.
  useEffect(() => {
    const group = objectGroupRef.current;
    if (!group) return;

    let active = true;
    const cleanupPrevious = () => {
      while (group.children.length > 0) {
        const child = group.children.pop() as THREE.Mesh;
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      }
    };

    cleanupPrevious();

    if (!spec) return;

    const loader = new THREE.TextureLoader();
    const loadTexture = (url: string): Promise<THREE.Texture> =>
      new Promise((resolve, reject) => {
        loader.load(url, resolve, undefined, reject);
      });

    // Load each present map type once (not once per part -- every part
    // sharing this texture set reuses the same loaded THREE.Texture
    // objects, just with per-part repeat/offset settings via clone()).
    const loadMapSet = async (maps: TextureMapSet | null | undefined) => {
      if (!maps) return {};
      const entries = await Promise.all(
        (Object.entries(maps) as [keyof TextureMapSet, string | undefined][])
          .filter((entry): entry is [keyof TextureMapSet, string] => Boolean(entry[1]))
          .map(async ([field, url]) => {
            try {
              const texture = await loadTexture(url);
              return [field, texture] as const;
            } catch {
              return [field, null] as const;
            }
          })
      );
      return Object.fromEntries(entries.filter(([, tex]) => tex !== null)) as Partial<Record<keyof TextureMapSet, THREE.Texture>>;
    };

    const configureTile = (texture: THREE.Texture, footprintMeters: number, colorSpace = false): THREE.Texture => {
      const tiled = texture.clone();
      tiled.needsUpdate = true;
      tiled.wrapS = THREE.RepeatWrapping;
      tiled.wrapT = THREE.RepeatWrapping;
      const repeatCount = Math.max(1, Math.round(footprintMeters / METERS_PER_TILE));
      tiled.repeat.set(repeatCount, repeatCount);
      tiled.anisotropy = 8;
      if (colorSpace) tiled.colorSpace = THREE.SRGBColorSpace;
      return tiled;
    };

    const buildMeshes = async () => {
      loadedTexturesRef.current.forEach((t) => t.dispose());
      loadedTexturesRef.current = [];

      const baseMaps = await loadMapSet(textureMaps);
      if (!active) return;

      let maxHeight = 0;
      for (const part of spec.parts) {
        const geometry = buildGeometry(part);
        const footprint = estimateFootprintMeters(part);

        const materialOptions: THREE.MeshStandardMaterialParameters = {
          color: part.material.color,
          roughness: part.material.roughness,
          metalness: part.material.metalness,
          emissive: part.material.emissive ?? '#000000',
          emissiveIntensity: part.material.emissiveIntensity ?? 0,
        };

        if (baseMaps.diffuse) {
          const tiled = configureTile(baseMaps.diffuse, footprint, true);
          materialOptions.map = tiled;
          loadedTexturesRef.current.push(tiled);
        }
        if (baseMaps.normal) {
          const tiled = configureTile(baseMaps.normal, footprint);
          materialOptions.normalMap = tiled;
          loadedTexturesRef.current.push(tiled);
        }
        if (baseMaps.roughness) {
          const tiled = configureTile(baseMaps.roughness, footprint);
          materialOptions.roughnessMap = tiled;
          loadedTexturesRef.current.push(tiled);
        }
        if (baseMaps.ao) {
          const tiled = configureTile(baseMaps.ao, footprint);
          materialOptions.aoMap = tiled;
          materialOptions.aoMapIntensity = 1;
          loadedTexturesRef.current.push(tiled);
          // aoMap requires a second UV channel in Three.js; our procedural
          // geometries only have one, so reuse it as uv2 -- a well-known
          // workaround, not mathematically perfect UV unwrapping, but far
          // better than aoMap silently doing nothing.
          if (geometry.attributes.uv && !geometry.attributes.uv2) {
            geometry.setAttribute('uv2', geometry.attributes.uv);
          }
        }

        const material = new THREE.MeshStandardMaterial(materialOptions);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(...part.position);
        mesh.rotation.set(...part.rotation);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.scale.set(0.01, 0.01, 0.01);
        group.add(mesh);
        maxHeight = Math.max(maxHeight, part.position[1] + 1);
      }

      cameraStateRef.current.dist = Math.max(3, Math.min(12, maxHeight * 2.5));

      let s = 0.01;
      const grow = () => {
        s = Math.min(1, s + 0.09);
        group.children.forEach((child) => {
          const mesh = child as THREE.Mesh;
          mesh.scale.set(s, s, s);
        });
        if (s < 1) requestAnimationFrame(grow);
      };
      grow();
    };

    buildMeshes();

    return () => {
      active = false;
      cleanupPrevious();
      loadedTexturesRef.current.forEach((t) => t.dispose());
      loadedTexturesRef.current = [];
    };
  }, [spec, textureMaps]);

  return (
    <div ref={containerRef} className="mesh-viewer">
      {isLoading && (
        <div className="viewer-overlay">
          <div className="spinner" />
          <div className="overlay-label">Researching material &amp; shape…</div>
        </div>
      )}
      {!spec && !isLoading && (
        <div className="viewer-overlay viewer-overlay--idle">
          <div className="overlay-label">Type an object above to design it</div>
        </div>
      )}
    </div>
  );
}
