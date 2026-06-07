import * as THREE from 'three';

import type { MeshBuffers } from '../core/types';
import { getFinRange } from './picking';

export const FIN_MATERIAL_COLORS = {
  wood: '#c8843a',
  woodShadow: '#8a5a2b',
  woodHighlight: '#f2c178',
  selected: '#f6c97d',
} as const;

export interface FinViewMaterials {
  base: THREE.MeshStandardMaterial;
  highlight: THREE.MeshStandardMaterial;
}

export function createFinMaterials(): FinViewMaterials {
  return {
    base: new THREE.MeshPhysicalMaterial({
      color: FIN_MATERIAL_COLORS.wood,
      emissive: FIN_MATERIAL_COLORS.woodShadow,
      emissiveIntensity: 0.08,
      metalness: 0.03,
      roughness: 0.54,
      clearcoat: 0.12,
      clearcoatRoughness: 0.48,
      specularColor: FIN_MATERIAL_COLORS.woodHighlight,
      specularIntensity: 0.42,
    }),
    highlight: new THREE.MeshPhysicalMaterial({
      color: FIN_MATERIAL_COLORS.selected,
      emissive: FIN_MATERIAL_COLORS.selected,
      emissiveIntensity: 0.38,
      metalness: 0.02,
      roughness: 0.42,
      specularColor: FIN_MATERIAL_COLORS.woodHighlight,
      specularIntensity: 0.58,
      transparent: true,
      opacity: 0.96,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    }),
  };
}

export function geometryFromMeshBuffers(
  mesh: MeshBuffers,
): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();

  geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(mesh.positions, 3),
  );
  geometry.setAttribute('normal', new THREE.BufferAttribute(mesh.normals, 3));
  geometry.setIndex(new THREE.BufferAttribute(mesh.indices, 1));
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();

  return geometry;
}

export function selectedFinGeometry(
  mesh: MeshBuffers,
  finIndex: number,
): THREE.BufferGeometry | null {
  const range = getFinRange(mesh.finRanges, finIndex);

  if (!range || range.triangleCount <= 0) {
    return null;
  }

  const indexStart = range.startTriangle * 3;
  const indexEnd = indexStart + range.triangleCount * 3;
  const vertexMap = new Map<number, number>();
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];

  for (
    let sourceIndexOffset = indexStart;
    sourceIndexOffset < indexEnd;
    sourceIndexOffset += 1
  ) {
    const sourceVertexIndex = mesh.indices[sourceIndexOffset];

    if (sourceVertexIndex === undefined) {
      continue;
    }

    let targetVertexIndex = vertexMap.get(sourceVertexIndex);

    if (targetVertexIndex === undefined) {
      const sourceOffset = sourceVertexIndex * 3;
      const px = mesh.positions[sourceOffset];
      const py = mesh.positions[sourceOffset + 1];
      const pz = mesh.positions[sourceOffset + 2];
      const nx = mesh.normals[sourceOffset];
      const ny = mesh.normals[sourceOffset + 1];
      const nz = mesh.normals[sourceOffset + 2];

      if (
        px === undefined ||
        py === undefined ||
        pz === undefined ||
        nx === undefined ||
        ny === undefined ||
        nz === undefined
      ) {
        continue;
      }

      targetVertexIndex = positions.length / 3;
      vertexMap.set(sourceVertexIndex, targetVertexIndex);
      positions.push(px, py, pz);
      normals.push(nx, ny, nz);
    }

    indices.push(targetVertexIndex);
  }

  if (positions.length === 0 || indices.length === 0) {
    return null;
  }

  const geometry = new THREE.BufferGeometry();

  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(positions, 3),
  );
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setIndex(indices);
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();

  return geometry;
}

export class FinsView {
  readonly group = new THREE.Group();
  readonly materials: FinViewMaterials;

  private meshBuffers: MeshBuffers | null = null;
  private baseMesh: THREE.Mesh | null = null;
  private highlightMesh: THREE.Mesh | null = null;
  private selectedFinIndex: number | null = null;

  constructor(materials: FinViewMaterials = createFinMaterials()) {
    this.materials = materials;
    this.group.name = 'parawave-fin-group';
  }

  get pickTarget(): THREE.Mesh | null {
    return this.baseMesh;
  }

  setMesh(mesh: MeshBuffers | undefined): void {
    this.clearMeshes();
    this.meshBuffers = mesh ?? null;

    if (!mesh) {
      return;
    }

    this.baseMesh = new THREE.Mesh(
      geometryFromMeshBuffers(mesh),
      this.materials.base,
    );
    this.baseMesh.name = 'parawave-fins-merged';
    this.baseMesh.castShadow = true;
    this.baseMesh.receiveShadow = true;
    this.group.add(this.baseMesh);
    this.updateHighlight();
  }

  setSelectedFin(finIndex: number | null): void {
    this.selectedFinIndex = finIndex;
    this.updateHighlight();
  }

  dispose(): void {
    this.clearMeshes();
    this.materials.base.dispose();
    this.materials.highlight.dispose();
  }

  private clearMeshes(): void {
    if (this.baseMesh) {
      this.group.remove(this.baseMesh);
      this.baseMesh.geometry.dispose();
      this.baseMesh = null;
    }

    this.clearHighlight();
    this.meshBuffers = null;
  }

  private clearHighlight(): void {
    if (!this.highlightMesh) {
      return;
    }

    this.group.remove(this.highlightMesh);
    this.highlightMesh.geometry.dispose();
    this.highlightMesh = null;
  }

  private updateHighlight(): void {
    this.clearHighlight();

    if (!this.meshBuffers || this.selectedFinIndex === null) {
      return;
    }

    const geometry = selectedFinGeometry(
      this.meshBuffers,
      this.selectedFinIndex,
    );

    if (!geometry) {
      return;
    }

    this.highlightMesh = new THREE.Mesh(geometry, this.materials.highlight);
    this.highlightMesh.name = 'parawave-selected-fin';
    this.highlightMesh.renderOrder = 10;
    this.group.add(this.highlightMesh);
  }
}
