import { fitAllPaths } from '../core/fit/adaptive';
import { buildMesh } from '../core/mesh';
import { computeNestMetrics } from '../core/nest/profile';
import type { ComputeRequest, ComputeResult, MeshBuffers } from '../core/types';

export function computeGeometry(request: ComputeRequest): ComputeResult {
  const fitted = fitAllPaths(request.design);
  const result: ComputeResult = {
    generation: request.generation,
    paths: fitted.paths,
    observedDepth: fitted.observedDepth,
    totalSegments: fitted.totalSegments,
    // Geometry-derived nesting inputs only. The packing itself is O(N)
    // arithmetic and runs on the main thread, so sheet-parameter changes never
    // trigger a re-fit.
    nest: computeNestMetrics(fitted.paths, request.design.H),
  };

  if (request.needMesh) {
    result.mesh = buildMesh(fitted.paths, request.design);
  }

  return result;
}

export function meshTransferList(mesh: MeshBuffers | undefined): Transferable[] {
  if (!mesh) {
    return [];
  }

  return [
    mesh.positions.buffer as Transferable,
    mesh.indices.buffer as Transferable,
    mesh.normals.buffer as Transferable,
    mesh.finRanges.buffer as Transferable,
  ];
}

export function resultTransferList(result: ComputeResult): Transferable[] {
  return meshTransferList(result.mesh);
}
