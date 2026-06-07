import { describe, expect, it } from 'vitest';

import type { MeshBuffers } from '../core/types';
import {
  createFinMaterials,
  FIN_MATERIAL_COLORS,
  geometryFromMeshBuffers,
  selectedFinGeometry,
} from './fins';

function fixtureMesh(): MeshBuffers {
  return {
    positions: new Float32Array([
      0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0, 0, 3, 0, 0, 2, 1, 0,
    ]),
    normals: new Float32Array([
      0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    ]),
    indices: new Uint32Array([0, 1, 2, 3, 4, 5]),
    finRanges: new Uint32Array([0, 1, 1, 1]),
  };
}

describe('fin mesh wrappers', () => {
  it('uses the honey-oak palette with a low-metal, medium-rough surface', () => {
    const materials = createFinMaterials();

    expect(`#${materials.base.color.getHexString()}`).toBe(
      FIN_MATERIAL_COLORS.wood,
    );
    expect(materials.base.metalness).toBeLessThan(0.1);
    expect(materials.base.roughness).toBeGreaterThan(0.4);
    expect(`#${materials.highlight.color.getHexString()}`).toBe(
      FIN_MATERIAL_COLORS.selected,
    );

    materials.base.dispose();
    materials.highlight.dispose();
  });

  it('wraps merged mesh buffers as one indexed geometry', () => {
    const geometry = geometryFromMeshBuffers(fixtureMesh());

    expect(geometry.index?.count).toBe(6);
    expect(geometry.getAttribute('position').count).toBe(6);
    expect(geometry.boundingBox).not.toBeNull();

    geometry.dispose();
  });

  it('builds a compact overlay geometry for the selected fin', () => {
    const geometry = selectedFinGeometry(fixtureMesh(), 1);

    expect(geometry).not.toBeNull();
    expect(geometry?.index?.count).toBe(3);
    expect(geometry?.getAttribute('position').count).toBe(3);

    geometry?.dispose();
  });
});
