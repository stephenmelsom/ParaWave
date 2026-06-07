import { fitAllPaths } from '../core/fit/adaptive';
import { buildMesh } from '../core/mesh';
import type { ComputeRequest, ComputeResult, MeshBuffers } from '../core/types';

export function computeGeometry(request: ComputeRequest): ComputeResult {
  const fitted = fitAllPaths(request.design);
  const result: ComputeResult = {
    generation: request.generation,
    paths: fitted.paths,
    observedDepth: fitted.observedDepth,
    totalSegments: fitted.totalSegments,
  };

  if (request.needMesh) {
    result.mesh = buildMesh(fitted.paths, request.design);
  }

  return result;
}

function transferBuffer(buffer: ArrayBufferLike): Transferable {
  return buffer as ArrayBuffer;
}

export function meshTransferList(mesh: MeshBuffers | undefined): Transferable[] {
  if (!mesh) {
    return [];
  }

  return [
    transferBuffer(mesh.positions.buffer),
    transferBuffer(mesh.indices.buffer),
    transferBuffer(mesh.normals.buffer),
    transferBuffer(mesh.finRanges.buffer),
  ];
}

export function resultTransferList(result: ComputeResult): Transferable[] {
  return meshTransferList(result.mesh);
}
