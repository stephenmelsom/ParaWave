import { describe, expect, it } from 'vitest';

import { evaluateBezierAtY } from '../fit/hermite';
import { fitAllPaths } from '../fit/adaptive';
import type { Design, FittedPath, NestMetrics, SheetConfig, WaveConfig } from '../types';
import { buildEdgeProfile, computeNestMetrics, matingBound } from './profile';
import { nestSheets, rowsPerSheetFor } from './pack';
import type { NestPlacement } from './pack';

const baseDesign: Design = {
  H: 600,
  W: 900,
  D: 60,
  pMin: 5,
  slatWidth: 18,
  gap: 6,
  fitTolerance: 0.05,
  displayUnit: 'mm',
  wave: {
    kind: 'diagonal',
    theta: 35,
    lambda: 220,
    phi: 10,
  },
};

const baseSheet: SheetConfig = {
  enabled: true,
  width: 762,
  height: 762,
  margin: 10,
  clearance: 6,
  labelStyle: 'text',
};

const waveFamilies: { name: string; wave: WaveConfig }[] = [
  { name: 'diagonal', wave: { kind: 'diagonal', theta: 35, lambda: 220, phi: 10 } },
  {
    name: 'radial',
    wave: { kind: 'radial', cx: 450, cy: 300, lambda: 180, phi: 0, decay: 0.001 },
  },
  {
    name: 'interference',
    wave: {
      kind: 'interference',
      sources: [
        { type: 'diagonal', theta: 20, lambda: 260, phi: 0, weight: 1 },
        { type: 'radial', cx: 200, cy: 450, lambda: 150, phi: 40, decay: 0.002, weight: 0.7 },
      ],
    },
  },
];

function designWithWave(wave: WaveConfig): Design {
  return { ...baseDesign, wave };
}

/** Front-edge z of a fitted path at height y, by direct curve evaluation. */
function frontEdgeAt(path: FittedPath, y: number): number {
  for (const segment of path.segments) {
    if (y >= segment.p0.y - 1e-9 && y <= segment.p3.y + 1e-9) {
      return evaluateBezierAtY(segment, y).z;
    }
  }

  const last = path.segments.at(-1);

  return last ? last.p3.z : 0;
}

function sampledWidth(path: FittedPath, height: number, samples: number): number {
  let max = 0;

  for (let step = 0; step <= samples; step += 1) {
    max = Math.max(max, frontEdgeAt(path, (step / samples) * height));
  }

  return max;
}

/** Composite Simpson over the front edge, as an independent area check. */
function sampledArea(path: FittedPath, height: number, intervals: number): number {
  const h = height / intervals;
  let total = frontEdgeAt(path, 0) + frontEdgeAt(path, height);

  for (let step = 1; step < intervals; step += 1) {
    total += (step % 2 === 0 ? 2 : 4) * frontEdgeAt(path, step * h);
  }

  return (total * h) / 3;
}

/** Sheet-space span [left, right] occupied by a placement at height `y`. */
function occupancyAt(
  placement: NestPlacement,
  path: FittedPath,
  height: number,
  y: number,
): { left: number; right: number } {
  const localY = y - placement.y;

  if (placement.rotation === 0) {
    const z = frontEdgeAt(path, localY);

    return { left: placement.x, right: placement.x + z };
  }

  const z = frontEdgeAt(path, height - localY);

  return { left: placement.x - z, right: placement.x };
}

describe('edge profiles', () => {
  it.each(waveFamilies)('measures $name part width exactly', ({ wave }) => {
    const design = designWithWave(wave);
    const { paths } = fitAllPaths(design);

    for (const path of paths) {
      const profile = buildEdgeProfile(path, design.H);
      const sampled = sampledWidth(path, design.H, 4000);

      // The profile width is exact (it includes every critical point), so a
      // dense sample can only ever fall short of it — never exceed it.
      expect(profile.width).toBeGreaterThanOrEqual(sampled - 1e-9);
      expect(profile.width).toBeLessThanOrEqual(sampled + 1e-2);
    }
  });

  it('integrates part area exactly', () => {
    const { paths } = fitAllPaths(baseDesign);

    for (const path of paths) {
      const profile = buildEdgeProfile(path, baseDesign.H);
      const reference = sampledArea(path, baseDesign.H, 4000);

      expect(profile.area).toBeCloseTo(reference, 3);
    }
  });

  it('covers the full slat height with ascending breakpoints', () => {
    const { paths } = fitAllPaths(baseDesign);
    const path = paths[0];

    expect(path).toBeDefined();

    const profile = buildEdgeProfile(path as FittedPath, baseDesign.H);

    expect(profile.ys[0]).toBeCloseTo(0, 9);
    expect(profile.ys.at(-1)).toBeCloseTo(baseDesign.H, 9);
    expect(profile.intervalMax).toHaveLength(profile.ys.length - 1);

    for (let index = 1; index < profile.ys.length; index += 1) {
      expect(profile.ys[index] as number).toBeGreaterThan(profile.ys[index - 1] as number);
    }
  });

  it('returns a degenerate profile for a path with no segments', () => {
    const profile = buildEdgeProfile({ finIndex: 0, xCenter: 0, segments: [] }, 600);

    expect(profile.width).toBe(0);
    expect(profile.area).toBe(0);
    expect(Number.isNaN(profile.width)).toBe(false);
  });
});

describe('mating bound', () => {
  it.each(waveFamilies)('never under-estimates the $name pitch', ({ wave }) => {
    const design = designWithWave(wave);
    const { paths } = fitAllPaths(design);
    const metrics = computeNestMetrics(paths, design.H);

    for (let index = 0; index + 1 < paths.length; index += 1) {
      const a = paths[index] as FittedPath;
      const b = paths[index + 1] as FittedPath;
      let sampled = 0;

      for (let step = 0; step <= 5000; step += 1) {
        const y = (step / 5000) * design.H;
        sampled = Math.max(sampled, frontEdgeAt(a, y) + frontEdgeAt(b, design.H - y));
      }

      expect(metrics.mates[index] as number).toBeGreaterThanOrEqual(sampled - 1e-9);
    }
  });

  it('stays tight enough to be worth using', () => {
    const { paths } = fitAllPaths(baseDesign);
    const metrics = computeNestMetrics(paths, baseDesign.H);

    for (let index = 0; index + 1 < paths.length; index += 1) {
      const a = paths[index] as FittedPath;
      const b = paths[index + 1] as FittedPath;
      let sampled = 0;

      for (let step = 0; step <= 5000; step += 1) {
        const y = (step / 5000) * baseDesign.H;
        sampled = Math.max(sampled, frontEdgeAt(a, y) + frontEdgeAt(b, baseDesign.H - y));
      }

      // Slack is wasted stock, so hold it to well under a third of a millimetre.
      expect(metrics.mates[index] as number).toBeLessThanOrEqual(sampled + 0.3);
    }
  });

  it('falls back to separate bounding boxes for degenerate profiles', () => {
    const { paths } = fitAllPaths(baseDesign);
    const real = buildEdgeProfile(paths[0] as FittedPath, baseDesign.H);
    const empty = buildEdgeProfile(
      { finIndex: 1, xCenter: 0, segments: [] },
      baseDesign.H,
    );

    expect(matingBound(real, empty, baseDesign.H)).toBe(real.width + empty.width);
  });
});

describe('sheet packing', () => {
  it.each(waveFamilies)('never overlaps parts for a $name field', ({ wave }) => {
    const design = designWithWave(wave);
    const { paths } = fitAllPaths(design);
    const metrics = computeNestMetrics(paths, design.H);
    const nest = nestSheets(metrics, baseSheet, design.H);

    expect(nest.sheetCount).toBeGreaterThan(0);

    for (const sheet of nest.sheets) {
      for (let index = 1; index < sheet.placements.length; index += 1) {
        const previous = sheet.placements[index - 1] as NestPlacement;
        const current = sheet.placements[index] as NestPlacement;

        if (previous.row !== current.row) {
          continue;
        }

        const previousPath = paths[previous.finIndex] as FittedPath;
        const currentPath = paths[current.finIndex] as FittedPath;

        for (let step = 0; step <= 500; step += 1) {
          const y = previous.y + (step / 500) * design.H;
          const before = occupancyAt(previous, previousPath, design.H, y);
          const after = occupancyAt(current, currentPath, design.H, y);

          expect(after.left).toBeGreaterThanOrEqual(
            before.right + baseSheet.clearance - 1e-9,
          );
        }
      }
    }
  });

  it('keeps every part inside the sheet margins', () => {
    const { paths } = fitAllPaths(baseDesign);
    const metrics = computeNestMetrics(paths, baseDesign.H);
    const nest = nestSheets(metrics, baseSheet, baseDesign.H);

    for (const sheet of nest.sheets) {
      for (const placement of sheet.placements) {
        const path = paths[placement.finIndex] as FittedPath;

        for (let step = 0; step <= 200; step += 1) {
          const y = placement.y + (step / 200) * baseDesign.H;
          const span = occupancyAt(placement, path, baseDesign.H, y);

          expect(span.left).toBeGreaterThanOrEqual(baseSheet.margin - 1e-9);
          expect(span.right).toBeLessThanOrEqual(
            baseSheet.width - baseSheet.margin + 1e-9,
          );
        }

        expect(placement.y).toBeGreaterThanOrEqual(baseSheet.margin - 1e-9);
        expect(placement.y + baseDesign.H).toBeLessThanOrEqual(
          baseSheet.height - baseSheet.margin + 1e-9,
        );
      }
    }
  });

  it('accounts for every fin exactly once', () => {
    const { paths } = fitAllPaths(baseDesign);
    const metrics = computeNestMetrics(paths, baseDesign.H);
    const nest = nestSheets(metrics, baseSheet, baseDesign.H);

    const seen = [
      ...nest.sheets.flatMap((sheet) => sheet.placements.map((entry) => entry.finIndex)),
      ...nest.unplaced,
    ].sort((left, right) => left - right);

    expect(seen).toEqual(paths.map((_, index) => index));
    expect(nest.placedCount + nest.unplaced.length).toBe(paths.length);
  });

  it('alternates rotation within a row, always starting at zero', () => {
    const { paths } = fitAllPaths(baseDesign);
    const metrics = computeNestMetrics(paths, baseDesign.H);
    const nest = nestSheets(metrics, baseSheet, baseDesign.H);

    for (const sheet of nest.sheets) {
      const rows = new Map<number, NestPlacement[]>();

      for (const placement of sheet.placements) {
        const bucket = rows.get(placement.row) ?? [];
        bucket.push(placement);
        rows.set(placement.row, bucket);
      }

      expect(rows.size).toBeLessThanOrEqual(nest.rowsPerSheet);

      for (const [row, placements] of rows) {
        placements.forEach((placement, index) => {
          expect(placement.rotation).toBe(index % 2 === 0 ? 0 : 180);
          expect(placement.y).toBeCloseTo(
            baseSheet.margin + row * (baseDesign.H + baseSheet.clearance),
            9,
          );
        });
      }
    }
  });

  it('needs fewer sheets than naive fixed-pitch placement', () => {
    const { paths } = fitAllPaths(baseDesign);
    const metrics = computeNestMetrics(paths, baseDesign.H);
    const nest = nestSheets(metrics, baseSheet, baseDesign.H);

    const usableWidth = baseSheet.width - 2 * baseSheet.margin;
    const naivePerRow = Math.floor(
      (usableWidth + baseSheet.clearance) / (baseDesign.D + baseSheet.clearance),
    );
    const naiveSheets = Math.ceil(paths.length / (naivePerRow * nest.rowsPerSheet));

    expect(nest.sheetCount).toBeLessThan(naiveSheets);
  });

  it('is deterministic', () => {
    const { paths } = fitAllPaths(baseDesign);
    const metrics = computeNestMetrics(paths, baseDesign.H);

    expect(nestSheets(metrics, baseSheet, baseDesign.H)).toEqual(
      nestSheets(metrics, baseSheet, baseDesign.H),
    );
  });

  it('reports utilisation against gross sheet area', () => {
    const { paths } = fitAllPaths(baseDesign);
    const metrics = computeNestMetrics(paths, baseDesign.H);
    const nest = nestSheets(metrics, baseSheet, baseDesign.H);

    const placedArea = nest.sheets
      .flatMap((sheet) => sheet.placements)
      .reduce((total, placement) => total + (metrics.areas[placement.finIndex] ?? 0), 0);

    expect(nest.utilization).toBeCloseTo(
      placedArea / (nest.sheetCount * baseSheet.width * baseSheet.height),
      9,
    );
    expect(nest.utilization).toBeGreaterThan(0);
    expect(nest.utilization).toBeLessThan(1);
  });

  it('skips an over-wide fin without disturbing its neighbours', () => {
    const metrics: NestMetrics = {
      widths: [40, 5000, 40, 40],
      areas: [4000, 500000, 4000, 4000],
      mates: [5040, 5040, 70],
      height: 600,
    };
    const nest = nestSheets(metrics, baseSheet, 600);

    expect(nest.unplaced).toEqual([1]);
    expect(nest.placedCount).toBe(3);

    const placements = nest.sheets.flatMap((sheet) => sheet.placements);
    const first = placements[0] as NestPlacement;
    const second = placements[1] as NestPlacement;

    // Fin 1 was skipped, so mates[0] describes the wrong pair; the fallback is
    // the separate bounding boxes of fins 0 and 2.
    expect(second.x - first.x).toBeCloseTo(40 + 40 + baseSheet.clearance, 9);
  });

  it('computes rows per sheet from the usable height', () => {
    expect(rowsPerSheetFor(baseSheet, 600)).toBe(1);
    expect(rowsPerSheetFor(baseSheet, 300)).toBe(2);
    expect(rowsPerSheetFor(baseSheet, 0)).toBe(0);
  });

  it('places nothing when the configuration cannot hold a slat', () => {
    const { paths } = fitAllPaths(baseDesign);
    const metrics = computeNestMetrics(paths, baseDesign.H);

    const disabled = nestSheets(metrics, { ...baseSheet, enabled: false }, baseDesign.H);
    expect(disabled.sheetCount).toBe(0);
    expect(disabled.unplaced).toHaveLength(paths.length);

    const tooShort = nestSheets(metrics, { ...baseSheet, height: 100 }, baseDesign.H);
    expect(tooShort.rowsPerSheet).toBe(0);
    expect(tooShort.unplaced).toHaveLength(paths.length);

    const tooNarrow = nestSheets(metrics, { ...baseSheet, width: 15 }, baseDesign.H);
    expect(tooNarrow.sheetCount).toBe(0);
    expect(tooNarrow.unplaced).toHaveLength(paths.length);
  });

  it('refuses to lay out metrics computed at a different height', () => {
    const { paths } = fitAllPaths(baseDesign);
    const metrics = computeNestMetrics(paths, baseDesign.H);

    const stale = nestSheets(metrics, baseSheet, 400);

    expect(stale.sheetCount).toBe(0);
    expect(stale.placedCount).toBe(0);
  });
});
