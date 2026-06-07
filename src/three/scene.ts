import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import type { MeshBuffers } from '../core/types';
import { FinsView } from './fins';
import { pickFinFromHits } from './picking';

export interface WaveSceneOptions {
  onFinSelected?: (finIndex: number) => void;
  onUserInteraction?: () => void;
}

export interface WaveSceneController {
  setMesh(mesh: MeshBuffers | undefined): void;
  setSelectedFinIndex(finIndex: number | null): void;
  dispose(): void;
}

export type WebGLProbeCanvas = {
  getContext: (contextId: string) => unknown;
};

export type CanvasFactory = () => WebGLProbeCanvas | null;

function defaultCanvasFactory(): HTMLCanvasElement | null {
  if (typeof document === 'undefined') {
    return null;
  }

  return document.createElement('canvas');
}

export function detectWebGLSupport(canvasFactory: CanvasFactory = defaultCanvasFactory): boolean {
  try {
    const canvas = canvasFactory();

    if (!canvas) {
      return false;
    }

    return Boolean(
      canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl'),
    );
  } catch {
    return false;
  }
}

function setRendererSize(renderer: THREE.WebGLRenderer, host: HTMLElement): void {
  const width = Math.max(1, host.clientWidth);
  const height = Math.max(1, host.clientHeight);
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(width, height, false);
}

function createBackGrid(): THREE.GridHelper {
  const grid = new THREE.GridHelper(1200, 24, 0x405868, 0x273846);

  grid.name = 'parawave-blueprint-grid';
  grid.rotation.x = Math.PI / 2;
  grid.position.z = -18;

  const material = grid.material;

  if (Array.isArray(material)) {
    for (const item of material) {
      item.transparent = true;
      item.opacity = 0.34;
    }
  } else {
    material.transparent = true;
    material.opacity = 0.34;
  }

  return grid;
}

export function createWaveScene(host: HTMLElement, options: WaveSceneOptions = {}): WaveSceneController {
  if (!detectWebGLSupport()) {
    throw new Error('WebGL is not available.');
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 5000);
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  const controls = new OrbitControls(camera, renderer.domElement);
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const fins = new FinsView();
  const pieceRoot = new THREE.Group();
  let meshBuffers: MeshBuffers | null = null;
  let frameHandle = 0;
  let resizeObserver: ResizeObserver | null = null;
  let hasFramedInitialMesh = false;
  let pointerDown: { x: number; y: number } | null = null;

  scene.add(createBackGrid());

  const ambient = new THREE.AmbientLight(0xf2e4d1, 0.5);
  const warmKey = new THREE.DirectionalLight(0xffd5a0, 2.3);
  const coolFill = new THREE.DirectionalLight(0x8fb2c8, 0.95);

  warmKey.position.set(-260, 420, 320);
  coolFill.position.set(320, 180, 260);
  scene.add(ambient, warmKey, coolFill);

  pieceRoot.name = 'parawave-piece-root';
  pieceRoot.add(fins.group);
  scene.add(pieceRoot);

  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.className = 'parawave-webgl-canvas';
  setRendererSize(renderer, host);
  host.append(renderer.domElement);

  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = true;
  controls.enableZoom = true;
  controls.touches = {
    ONE: THREE.TOUCH.ROTATE,
    TWO: THREE.TOUCH.DOLLY_PAN,
  };

  function framePiece(): void {
    const target = fins.pickTarget;

    if (!target) {
      return;
    }

    target.geometry.computeBoundingBox();

    const box = target.geometry.boundingBox;

    if (!box) {
      return;
    }

    const center = new THREE.Vector3();
    const size = new THREE.Vector3();

    box.getCenter(center);
    box.getSize(size);
    fins.group.position.set(-center.x, -center.y, -center.z);

    const radius = Math.max(size.length() / 2, 1);
    const distance = radius / Math.sin(THREE.MathUtils.degToRad(camera.fov / 2));

    camera.aspect = Math.max(1, host.clientWidth) / Math.max(1, host.clientHeight);
    camera.near = Math.max(0.1, radius / 100);
    camera.far = Math.max(2000, radius * 8);
    camera.position.set(radius * 0.72, radius * 0.42, distance * 1.12);
    camera.updateProjectionMatrix();
    controls.target.set(0, 0, 0);
    controls.update();
  }

  function resize(): void {
    setRendererSize(renderer, host);
    camera.aspect = Math.max(1, host.clientWidth) / Math.max(1, host.clientHeight);
    camera.updateProjectionMatrix();
  }

  function render(): void {
    frameHandle = window.requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera);
  }

  function pickFin(event: PointerEvent): void {
    if (!meshBuffers || !fins.pickTarget) {
      return;
    }

    const rect = renderer.domElement.getBoundingClientRect();

    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    raycaster.setFromCamera(pointer, camera);

    const selected = pickFinFromHits(raycaster.intersectObject(fins.pickTarget, false), meshBuffers.finRanges);

    if (selected !== null) {
      options.onFinSelected?.(selected);
    }
  }

  function handlePointerDown(event: PointerEvent): void {
    pointerDown = {
      x: event.clientX,
      y: event.clientY,
    };
  }

  function handlePointerUp(event: PointerEvent): void {
    if (!pointerDown) {
      return;
    }

    const distance = Math.hypot(event.clientX - pointerDown.x, event.clientY - pointerDown.y);
    pointerDown = null;

    if (distance <= 5) {
      pickFin(event);
    }
  }

  controls.addEventListener('start', () => {
    options.onUserInteraction?.();
  });
  renderer.domElement.addEventListener('pointerdown', handlePointerDown);
  renderer.domElement.addEventListener('pointerup', handlePointerUp);

  if (typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
  } else {
    window.addEventListener('resize', resize);
  }

  render();

  return {
    setMesh(mesh: MeshBuffers | undefined): void {
      meshBuffers = mesh ?? null;
      fins.setMesh(mesh);

      if (mesh && !hasFramedInitialMesh) {
        framePiece();
        hasFramedInitialMesh = true;
      }
    },

    setSelectedFinIndex(finIndex: number | null): void {
      fins.setSelectedFin(finIndex);
    },

    dispose(): void {
      window.cancelAnimationFrame(frameHandle);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      renderer.domElement.removeEventListener('pointerup', handlePointerUp);
      resizeObserver?.disconnect();

      if (!resizeObserver) {
        window.removeEventListener('resize', resize);
      }

      controls.dispose();
      fins.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
