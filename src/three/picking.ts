export interface FaceHit {
  faceIndex?: number | null;
}

export interface FinRange {
  startTriangle: number;
  triangleCount: number;
}

export function getFinRange(finRanges: ArrayLike<number>, finIndex: number): FinRange | null {
  if (!Number.isInteger(finIndex) || finIndex < 0) {
    return null;
  }

  const rangeOffset = finIndex * 2;
  const startTriangle = finRanges[rangeOffset];
  const triangleCount = finRanges[rangeOffset + 1];

  if (startTriangle === undefined || triangleCount === undefined) {
    return null;
  }

  return {
    startTriangle,
    triangleCount,
  };
}

export function findFinIndexForFace(
  faceIndex: number | null | undefined,
  finRanges: ArrayLike<number>,
): number | null {
  if (faceIndex === null || faceIndex === undefined || faceIndex < 0) {
    return null;
  }

  let low = 0;
  let high = Math.floor(finRanges.length / 2) - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const range = getFinRange(finRanges, mid);

    if (!range) {
      return null;
    }

    const endTriangle = range.startTriangle + range.triangleCount;

    if (faceIndex < range.startTriangle) {
      high = mid - 1;
      continue;
    }

    if (faceIndex >= endTriangle) {
      low = mid + 1;
      continue;
    }

    return mid;
  }

  return null;
}

export function pickFinFromHits(
  hits: readonly FaceHit[],
  finRanges: ArrayLike<number>,
): number | null {
  for (const hit of hits) {
    const finIndex = findFinIndexForFace(hit.faceIndex, finRanges);

    if (finIndex !== null) {
      return finIndex;
    }
  }

  return null;
}
