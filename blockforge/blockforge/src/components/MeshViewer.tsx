import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CustomMeshSpec } from '../types';

interface MeshViewerProps {
  spec: CustomMeshSpec | null;
  isLoading: boolean;
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

export default function MeshViewer({ spec, isLoading }: MeshViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const objectGroupRef = useRef<THREE.Group | null>(null);
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

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

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
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointermove', onMove);
      renderer.domElement.removeEventListener('pointerdown', onDown);
      renderer.domElement.removeEventListener('wheel', onWheel);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  // Rebuild the object whenever the spec changes.
  useEffect(() => {
    const group = objectGroupRef.current;
    if (!group) return;

    while (group.children.length > 0) {
      const child = group.children.pop() as THREE.Mesh;
      child.geometry.dispose();
      (child.material as THREE.Material).dispose();
    }

    if (!spec) return;

    let maxHeight = 0;
    for (const part of spec.parts) {
      const geometry = buildGeometry(part);
      const material = new THREE.MeshStandardMaterial({
        color: part.material.color,
        roughness: part.material.roughness,
        metalness: part.material.metalness,
        emissive: part.material.emissive ?? '#000000',
        emissiveIntensity: part.material.emissiveIntensity ?? 0,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...part.position);
      mesh.rotation.set(...part.rotation);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      maxHeight = Math.max(maxHeight, part.position[1] + 1);
    }

    cameraStateRef.current.dist = Math.max(3, Math.min(12, maxHeight * 2.5));
  }, [spec]);

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
