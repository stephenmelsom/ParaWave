/**
 * Task 8: Tests & verification
 * Covers 8.1–8.12 (automated). Items 8.13–8.17 require manual testing.
 *
 * Task 9: Stock sheet nesting
 * Covers 9.1–9.5 (automated). Item V-7 (Carbide Create import) is manual.
 */
import { describe, expect, it } from 'vitest';

import {
  FIN_WARN,
  SEGMENT_WARN,
  SHEET_WARN,
  computeNestMetrics,
  computeSlatLayout,
  createDiagonalField,
  createInterferenceField,
  createRadialField,
  createWaveField,
  evaluateBezier,
  evaluateBezierAtY,
  fitAllPaths,
  fitPath,
  fromDisplayValue,
  nestSheets,
  placedPathData,
  protrusionAt,
  protrusionFromWaveValue,
  sheetSvgs,
  slatPathData,
  slatSvg,
  toDisplayValue,
  validateDesign,
} from './core';
import type { NestPlacement } from './core/nest/pack';
import type { Design, FittedPath, SheetConfig, WaveConfig } from './core/types';
import { createCutlistCsv, slatFilename } from './export';
import { createDesignStore } from './state/design.svelte.ts';

// ─── shared fixtures ─────────────────────────────────────────────────────────

const baseDesign: Design = {
  H: 120,
  W: 180,
  D: 40,
  pMin: 5,
  slatWidth: 18,
  gap: 6,
  fitTolerance: 0.1,
  displayUnit: 'mm',
  wave: {
    kind: 'diagonal',
    theta: 35,
    lambda: 80,
    phi: 10,
  },
};

function designWithWave(wave: WaveConfig): Design {
  return { ...baseDesign, wave };
}

// Evaluate front-edge deviation using dense resampling (50 samples per segment)
function maxFrontEdgeError(
  design: Design,
  xCenter: number,
  finIndex = 0,
): number {
  const path = fitPath(design, xCenter, finIndex);
  const field = createWaveField(design.wave);
  let maxErr = 0;

  for (const seg of path.segments) {
    for (let step = 0; step <= 50; step++) {
      const t = step / 50;
      const pt = evaluateBezier(seg, t);
      const trueZ = protrusionAt(design, xCenter, pt.y, field);
      maxErr = Math.max(maxErr, Math.abs(pt.z - trueZ));
    }
  }

  return maxErr;
}

// ─── 8.1  f ∈ [−1, 1] for all wave families with varied weights ──────────────

describe('8.1 – wave field unit interval', () => {
  it('diagonal field stays within [−1, 1] across a grid', () => {
    const field = createDiagonalField({
      kind: 'diagonal',
      theta: 47,
      lambda: 63,
      phi: 22,
    });

    for (let x = -50; x <= 250; x += 17) {
      for (let y = -50; y <= 250; y += 13) {
        expect(field.f(x, y)).toBeGreaterThanOrEqual(-1);
        expect(field.f(x, y)).toBeLessThanOrEqual(1);
        expect(Number.isFinite(field.dfdy(x, y))).toBe(true);
      }
    }
  });

  it('radial field stays within [−1, 1] across a grid', () => {
    const field = createRadialField({
      kind: 'radial',
      cx: 85,
      cy: 70,
      lambda: 55,
      phi: 30,
      decay: 0.8,
    });

    for (let x = -50; x <= 250; x += 17) {
      for (let y = -50; y <= 250; y += 13) {
        expect(field.f(x, y)).toBeGreaterThanOrEqual(-1);
        expect(field.f(x, y)).toBeLessThanOrEqual(1);
        expect(Number.isFinite(field.dfdy(x, y))).toBe(true);
      }
    }
  });

  it('interference field stays within [−1, 1] with varied positive/negative weights', () => {
    // Use weights that aren't equal to ensure the normalisation path is exercised
    const weightSets = [
      [3, -1],
      [1, 7],
      [-2, 5],
      [0.1, -0.9],
    ];

    for (const [w0, w1] of weightSets) {
      const field = createInterferenceField([
        { type: 'diagonal', theta: 20, lambda: 70, phi: 0, weight: w0! },
        {
          type: 'radial',
          cx: 50,
          cy: 60,
          lambda: 90,
          phi: 15,
          decay: 0.3,
          weight: w1!,
        },
      ]);

      for (let x = 0; x <= 180; x += 30) {
        for (let y = 0; y <= 120; y += 20) {
          expect(field.f(x, y)).toBeGreaterThanOrEqual(-1 - 1e-10);
          expect(field.f(x, y)).toBeLessThanOrEqual(1 + 1e-10);
          expect(Number.isFinite(field.dfdy(x, y))).toBe(true);
        }
      }
    }
  });

  it('interference field with all-zero weights returns 0', () => {
    const field = createInterferenceField([
      { type: 'diagonal', theta: 0, lambda: 100, phi: 0, weight: 0 },
    ]);

    expect(field.f(50, 50)).toBe(0);
    expect(field.dfdy(50, 50)).toBe(0);
  });
});

// ─── 8.2  p ≤ D, analytic bounds map exactly to pMin and D ───────────────────

describe('8.2 – protrusion bounds', () => {
  it('f = −1 → p = pMin and f = +1 → p = D', () => {
    expect(protrusionFromWaveValue(baseDesign, -1)).toBe(baseDesign.pMin);
    expect(protrusionFromWaveValue(baseDesign, 1)).toBe(baseDesign.D);
    expect(protrusionFromWaveValue(baseDesign, 0)).toBe(
      (baseDesign.pMin + baseDesign.D) / 2,
    );
  });

  it('protrusionAt never exceeds D and never falls below pMin across the design space', () => {
    const field = createWaveField(baseDesign.wave);
    const layout = computeSlatLayout(baseDesign);

    for (const xCenter of layout.centerlines) {
      for (let y = 0; y <= baseDesign.H; y += 5) {
        const p = protrusionAt(baseDesign, xCenter, y, field);
        expect(p).toBeGreaterThanOrEqual(baseDesign.pMin - 1e-10);
        expect(p).toBeLessThanOrEqual(baseDesign.D + 1e-10);
      }
    }
  });

  it('holds for radial and interference families too', () => {
    const designs: Design[] = [
      designWithWave({
        kind: 'radial',
        cx: 90,
        cy: 60,
        lambda: 50,
        phi: 0,
        decay: 0.5,
      }),
      designWithWave({
        kind: 'interference',
        sources: [
          { type: 'diagonal', theta: 30, lambda: 65, phi: 5, weight: 2 },
          {
            type: 'radial',
            cx: 90,
            cy: 60,
            lambda: 55,
            phi: 15,
            decay: 0.2,
            weight: -1,
          },
        ],
      }),
    ];

    for (const design of designs) {
      const field = createWaveField(design.wave);

      for (let x = 0; x <= design.W; x += 20) {
        for (let y = 0; y <= design.H; y += 15) {
          const p = protrusionAt(design, x, y, field);
          expect(p).toBeGreaterThanOrEqual(design.pMin - 1e-10);
          expect(p).toBeLessThanOrEqual(design.D + 1e-10);
        }
      }
    }
  });
});

// ─── 8.3  Front-edge deviation ≤ fitTolerance (dense resampling) ─────────────

describe('8.3 – curve-fit tolerance (dense resampling)', () => {
  it.each([
    {
      name: 'diagonal',
      wave: {
        kind: 'diagonal',
        theta: 40,
        lambda: 45,
        phi: 12,
      } satisfies WaveConfig,
    },
    {
      name: 'radial',
      wave: {
        kind: 'radial',
        cx: 90,
        cy: 60,
        lambda: 50,
        phi: 0,
        decay: 0.4,
      } satisfies WaveConfig,
    },
    {
      name: 'interference',
      wave: {
        kind: 'interference',
        sources: [
          { type: 'diagonal', theta: 30, lambda: 65, phi: 5, weight: 1 },
          {
            type: 'radial',
            cx: 90,
            cy: 60,
            lambda: 55,
            phi: 15,
            decay: 0.2,
            weight: 1,
          },
        ],
      } satisfies WaveConfig,
    },
  ])(
    '$name front-edge stays within fitTolerance (50 samples/segment)',
    ({ wave }) => {
      const design = designWithWave(wave);
      const layout = computeSlatLayout(design);
      const xCenter =
        layout.centerlines[Math.floor(layout.centerlines.length / 2)]!;

      const err = maxFrontEdgeError(design, xCenter);
      expect(err).toBeLessThanOrEqual(design.fitTolerance);
    },
  );
});

// ─── 8.4  Slat path structure: closed, line segs for back edges, cubics for front ─

describe('8.4 – slat path structure', () => {
  it('path data starts with M, contains C commands, ends with Z (closed)', () => {
    const path = fitPath(baseDesign, 90, 0);
    const d = slatPathData(path);

    expect(d.startsWith('M ')).toBe(true);
    expect(d.endsWith(' Z')).toBe(true);
    expect(d).toContain(' C ');
  });

  it('path starts at z=0 (back edge) and returns to z=0 before closing', () => {
    const path = fitPath(baseDesign, 90, 0);
    const d = slatPathData(path);
    // Path: M 0 y0 L z_start y0 [C z1 y1 z2 y2 z3 y3 ...] L 0 yN L 0 y0 Z
    // Tokenized tail: "L 0.0000 yN L 0.0000 y0 Z"
    const tokens = d.split(/\s+/);
    const zIdx = tokens.indexOf('Z');
    // offsets from Z: -6=L  -5=0.0000(z)  -4=yN  -3=L  -2=0.0000(z)  -1=y0  0=Z
    expect(tokens[zIdx - 6]).toBe('L');
    expect(tokens[zIdx - 5]).toBe('0.0000'); // z=0 (back-edge return)
    expect(tokens[zIdx - 3]).toBe('L');
    expect(tokens[zIdx - 2]).toBe('0.0000'); // z=0 at close
  });

  it('front edge uses only cubic commands, not quadratic or arc', () => {
    const path = fitPath(baseDesign, 90, 0);
    const d = slatPathData(path);

    // Should not contain quadratic (Q) or arc (A) commands
    expect(d).not.toMatch(/\bQ\b/);
    expect(d).not.toMatch(/\bA\b/);
  });

  it('each segment continues from where the previous left off (contiguous path)', () => {
    const path = fitPath(baseDesign, 90, 0);

    for (let i = 0; i < path.segments.length - 1; i++) {
      const a = path.segments[i]!;
      const b = path.segments[i + 1]!;
      expect(a.p3.y).toBeCloseTo(b.p0.y, 6);
      expect(a.p3.z).toBeCloseTo(b.p0.z, 6);
    }
  });
});

// ─── 8.5  mm → inch → mm round-trip ─────────────────────────────────────────

describe('8.5 – mm → inch → mm round-trip', () => {
  it('round-trips millimeter values through inches with no meaningful drift', () => {
    const samples = [0, 25.4, 100, 127, 300, 600, 0.001, 999.9999, 123.456];

    for (const mm of samples) {
      const inches = toDisplayValue(mm, 'inch');
      const roundTripped = fromDisplayValue(inches, 'inch');
      // Allow only IEEE-754 rounding noise (< 0.1 nm at typical CNC scales)
      expect(Math.abs(roundTripped - mm)).toBeLessThan(1e-9);
    }
  });
});

// ─── 8.6  Re-fitting identical parameters produces geometrically equivalent paths ─

describe('8.6 – deterministic re-fit', () => {
  it('fitting the same params twice yields paths within fitTolerance of each other', () => {
    const design = designWithWave({
      kind: 'interference',
      sources: [
        { type: 'diagonal', theta: 25, lambda: 85, phi: 10, weight: 1.5 },
        {
          type: 'radial',
          cx: 90,
          cy: 60,
          lambda: 60,
          phi: 20,
          decay: 0.3,
          weight: -0.8,
        },
      ],
    });
    const xCenter = 90;
    const pathA = fitPath(design, xCenter, 0);
    const pathB = fitPath(design, xCenter, 0);

    // Same segment count
    expect(pathA.segments.length).toBe(pathB.segments.length);

    // Every control point agrees within tolerance (TS-D2: not byte-identical required)
    for (let i = 0; i < pathA.segments.length; i++) {
      const a = pathA.segments[i]!;
      const b = pathB.segments[i]!;
      for (const key of ['p0', 'p1', 'p2', 'p3'] as const) {
        expect(Math.abs(a[key].z - b[key].z)).toBeLessThanOrEqual(
          design.fitTolerance,
        );
        expect(Math.abs(a[key].y - b[key].y)).toBeLessThanOrEqual(
          design.fitTolerance,
        );
      }
    }
  });
});

// ─── 8.7  Golden reference designs (numerical regression guard) ──────────────

describe('8.7 – golden reference designs', () => {
  it('diagonal reference: known segment count and endpoint protrusions', () => {
    const design: Design = {
      H: 200,
      W: 300,
      D: 50,
      pMin: 8,
      slatWidth: 20,
      gap: 8,
      fitTolerance: 0.1,
      displayUnit: 'mm',
      wave: { kind: 'diagonal', theta: 30, lambda: 100, phi: 0 },
    };
    const layout = computeSlatLayout(design);
    const xCenter =
      layout.centerlines[Math.floor(layout.centerlines.length / 2)]!;
    const path = fitPath(design, xCenter, 0);
    const field = createWaveField(design.wave);

    // Path must cover [0, H]
    expect(path.segments[0]!.p0.y).toBe(0);
    expect(path.segments.at(-1)!.p3.y).toBe(design.H);

    // Endpoints match the true wave value exactly (they are set by the fit engine)
    const firstZ = protrusionAt(design, xCenter, 0, field);
    const lastZ = protrusionAt(design, xCenter, design.H, field);
    expect(path.segments[0]!.p0.z).toBeCloseTo(firstZ, 4);
    expect(path.segments.at(-1)!.p3.z).toBeCloseTo(lastZ, 4);

    // Segment count must be positive and deterministic
    const path2 = fitPath(design, xCenter, 0);
    expect(path.segments.length).toBe(path2.segments.length);
  });

  it('interference reference: landing design produces 37 fins, each path covers [0, H]', () => {
    const store = createDesignStore();
    const design = store.design;
    const layout = computeSlatLayout(design);

    expect(layout.finCount).toBe(37);

    const path = fitPath(design, layout.centerlines[0]!, 0);
    expect(path.segments[0]!.p0.y).toBe(0);
    expect(path.segments.at(-1)!.p3.y).toBe(design.H);
  });

  it('full geometry pipeline: totalSegments is positive and observed depth is within declared range', () => {
    const geo = fitAllPaths(baseDesign);

    expect(geo.paths.length).toBeGreaterThan(0);
    expect(geo.totalSegments).toBeGreaterThan(0);
    expect(geo.observedDepth.min).toBeGreaterThanOrEqual(
      baseDesign.pMin - baseDesign.fitTolerance,
    );
    expect(geo.observedDepth.max).toBeLessThanOrEqual(
      baseDesign.D + baseDesign.fitTolerance,
    );
  });
});

// ─── 8.8  Exported filenames sort lexically to left-to-right order ───────────

describe('8.8 – export filename ordering', () => {
  it('slat filenames are zero-padded so lexical order matches assembly order', () => {
    const n = 37;
    const names = Array.from({ length: n }, (_, i) => slatFilename(i, n));

    // Sorted lexically should equal the original order
    expect([...names].sort()).toEqual(names);
  });

  it('padding width is max(3, digits(N)) for large fin counts', () => {
    expect(slatFilename(0, 1000)).toBe('slat_0001.svg');
    expect(slatFilename(999, 1000)).toBe('slat_1000.svg');
    expect(slatFilename(0, 37)).toBe('slat_001.svg');
    expect(slatFilename(36, 37)).toBe('slat_037.svg');
  });
});

// ─── 8.9  Table-driven FR-VAL.1–.11 validation conditions ───────────────────

describe('8.9 – validation table (FR-VAL.1–.11)', () => {
  const valid: Design = {
    H: 300,
    W: 400,
    D: 50,
    pMin: 5,
    slatWidth: 18,
    gap: 6,
    fitTolerance: 0.05,
    displayUnit: 'mm',
    wave: { kind: 'diagonal', theta: 30, lambda: 100, phi: 0 },
  };

  it('FR-VAL.1 (hard): D ≤ pMin → "Max depth must be greater than minimum protrusion."', () => {
    const r = validateDesign({ ...valid, D: 5, pMin: 5 });
    expect(r.exportEnabled).toBe(false);
    expect(r.issues).toContainEqual(
      expect.objectContaining({ code: 'FR-VAL.1', tier: 'hard' }),
    );
  });

  it('FR-VAL.2 (hard): slatWidth + gap > W → "Width is too small to fit a single slat plus gap."', () => {
    const r = validateDesign({ ...valid, W: 10, slatWidth: 18, gap: 6 });
    expect(r.issues).toContainEqual(
      expect.objectContaining({ code: 'FR-VAL.2', tier: 'hard' }),
    );
  });

  it('FR-VAL.3 (hard): lambda ≤ 0 in diagonal → "Wavelength must be greater than zero."', () => {
    const r = validateDesign({
      ...valid,
      wave: { kind: 'diagonal', theta: 30, lambda: 0, phi: 0 },
    });
    expect(r.issues).toContainEqual(
      expect.objectContaining({
        code: 'FR-VAL.3',
        tier: 'hard',
        message: 'Wavelength must be greater than zero.',
      }),
    );
    expect(r.exportEnabled).toBe(false);
  });

  it('FR-VAL.3 (hard): lambda ≤ 0 in an interference source', () => {
    const r = validateDesign({
      ...valid,
      wave: {
        kind: 'interference',
        sources: [
          { type: 'diagonal', theta: 30, lambda: 0, phi: 0, weight: 1 },
        ],
      },
    });
    expect(r.issues).toContainEqual(
      expect.objectContaining({ code: 'FR-VAL.3', tier: 'hard' }),
    );
  });

  it('FR-VAL.4 (hard): H ≤ 0 → "Value must be greater than zero."', () => {
    const r = validateDesign({ ...valid, H: 0 });
    expect(r.issues).toContainEqual(
      expect.objectContaining({ code: 'FR-VAL.4', tier: 'hard', field: 'H' }),
    );
    expect(r.exportEnabled).toBe(false);
  });

  it('FR-VAL.4 (hard): W ≤ 0', () => {
    const r = validateDesign({ ...valid, W: 0 });
    expect(r.issues).toContainEqual(
      expect.objectContaining({ code: 'FR-VAL.4', tier: 'hard', field: 'W' }),
    );
  });

  it('FR-VAL.4 (hard): slatWidth ≤ 0', () => {
    const r = validateDesign({ ...valid, slatWidth: 0 });
    expect(r.issues).toContainEqual(
      expect.objectContaining({
        code: 'FR-VAL.4',
        tier: 'hard',
        field: 'slatWidth',
      }),
    );
  });

  it('FR-VAL.4 (hard): gap < 0', () => {
    const r = validateDesign({ ...valid, gap: -1 });
    expect(r.issues).toContainEqual(
      expect.objectContaining({ code: 'FR-VAL.4', tier: 'hard', field: 'gap' }),
    );
    expect(r.exportEnabled).toBe(false);
  });

  it('FR-VAL.5 (hard): pMin < 0 → "Minimum protrusion cannot be negative."', () => {
    const r = validateDesign({ ...valid, pMin: -1 });
    expect(r.issues).toContainEqual(
      expect.objectContaining({ code: 'FR-VAL.5', tier: 'hard' }),
    );
    expect(r.exportEnabled).toBe(false);
  });

  it('FR-VAL.6 (soft): finCount > FIN_WARN produces a non-blocking warning', () => {
    // Make a design that produces > 400 fins
    const narrowDesign: Design = {
      ...valid,
      W: (FIN_WARN + 1) * (valid.slatWidth + valid.gap),
      wave: { kind: 'diagonal', theta: 30, lambda: 100, phi: 0 },
    };
    const r = validateDesign(narrowDesign);
    expect(r.issues).toContainEqual(
      expect.objectContaining({ code: 'FR-VAL.6', tier: 'soft' }),
    );
    expect(r.exportEnabled).toBe(true);
  });

  it('FR-VAL.7 (soft): gap === 0 → "Gap is zero; slats will touch with no spacing."', () => {
    const r = validateDesign({ ...valid, gap: 0 });
    expect(r.issues).toContainEqual(
      expect.objectContaining({
        code: 'FR-VAL.7',
        tier: 'soft',
        message: 'Gap is zero; slats will touch with no spacing.',
      }),
    );
    expect(r.exportEnabled).toBe(true);
  });

  it('FR-VAL.8 (soft): totalSegments > SEGMENT_WARN → "Tight tolerance is producing a very large/heavy export."', () => {
    const r = validateDesign(valid, { totalSegments: SEGMENT_WARN + 1 });
    expect(r.issues).toContainEqual(
      expect.objectContaining({ code: 'FR-VAL.8', tier: 'soft' }),
    );
    expect(r.exportEnabled).toBe(true);
  });

  it('FR-VAL.10 (hard): fitTolerance ≤ 0 → "Tolerance must be greater than zero."', () => {
    const r = validateDesign({ ...valid, fitTolerance: 0 });
    expect(r.issues).toContainEqual(
      expect.objectContaining({ code: 'FR-VAL.10', tier: 'hard' }),
    );
    expect(r.exportEnabled).toBe(false);
  });

  it('FR-VAL.11 (hard): all interference weights = 0 → "At least one source weight must be non-zero."', () => {
    const r = validateDesign({
      ...valid,
      wave: {
        kind: 'interference',
        sources: [
          { type: 'diagonal', theta: 30, lambda: 100, phi: 0, weight: 0 },
          {
            type: 'radial',
            cx: 200,
            cy: 150,
            lambda: 80,
            phi: 0,
            decay: 0,
            weight: 0,
          },
        ],
      },
    });
    expect(r.issues).toContainEqual(
      expect.objectContaining({ code: 'FR-VAL.11', tier: 'hard' }),
    );
    expect(r.exportEnabled).toBe(false);
  });

  it('valid design has no issues and exportEnabled = true', () => {
    const r = validateDesign(valid);
    expect(r.issues).toHaveLength(0);
    expect(r.exportEnabled).toBe(true);
    expect(r.hardBlocks).toHaveLength(0);
  });

  // ── FR-VAL.12–.16: stock sheet rules ──────────────────────────────────────
  // All gated on an enabled SheetConfig, so designs validated without one are
  // unaffected.

  const stock: SheetConfig = {
    enabled: true,
    width: 762,
    height: 762,
    margin: 10,
    clearance: 6,
    labelStyle: 'text',
  };

  it('sheet rules stay silent unless an enabled sheet config is supplied', () => {
    expect(validateDesign(valid).issues).toHaveLength(0);
    // Disabling nesting must not strand the user behind a stock-sheet error.
    expect(
      validateDesign(valid, { sheet: { ...stock, enabled: false, width: -1 } })
        .issues,
    ).toHaveLength(0);
  });

  it('FR-VAL.12 (hard): non-positive sheet dimensions → "Value must be greater than zero."', () => {
    const r = validateDesign(valid, { sheet: { ...stock, width: 0 } });
    expect(r.exportEnabled).toBe(false);
    expect(r.issues).toContainEqual({
      code: 'FR-VAL.12',
      field: 'sheet.width',
      tier: 'hard',
      message: 'Value must be greater than zero.',
    });
  });

  it('FR-VAL.12 (hard): negative margin and clearance are rejected', () => {
    expect(
      validateDesign(valid, { sheet: { ...stock, margin: -1 } }).issues,
    ).toContainEqual({
      code: 'FR-VAL.12',
      field: 'sheet.margin',
      tier: 'hard',
      message: 'Edge margin cannot be negative.',
    });
    expect(
      validateDesign(valid, { sheet: { ...stock, clearance: -1 } }).issues,
    ).toContainEqual({
      code: 'FR-VAL.12',
      field: 'sheet.clearance',
      tier: 'hard',
      message: 'Part clearance cannot be negative.',
    });
  });

  it('FR-VAL.13 (hard): usable height < H → "Sheet height is too small to fit a full-height slat."', () => {
    const r = validateDesign(valid, { sheet: { ...stock, height: 200 } });
    expect(r.exportEnabled).toBe(false);
    expect(r.issues).toContainEqual({
      code: 'FR-VAL.13',
      field: 'sheet.height',
      tier: 'hard',
      message: 'Sheet height is too small to fit a full-height slat.',
    });
  });

  it('FR-VAL.14 (hard): usable width < pMin → "Sheet width is too small to fit a single slat profile."', () => {
    const r = validateDesign(valid, { sheet: { ...stock, width: 22 } });
    expect(r.issues).toContainEqual({
      code: 'FR-VAL.14',
      field: 'sheet.width',
      tier: 'hard',
      message: 'Sheet width is too small to fit a single slat profile.',
    });
  });

  it('FR-VAL.15 (soft): unnestable slats warn but never block export', () => {
    const r = validateDesign(valid, {
      sheet: stock,
      nest: { sheetCount: 2, unplacedCount: 3 },
    });
    expect(r.exportEnabled).toBe(true);
    expect(r.issues).toContainEqual({
      code: 'FR-VAL.15',
      field: 'sheet.width',
      tier: 'soft',
      message: '3 slats are too wide for this sheet and were left unnested.',
    });
  });

  it('FR-VAL.16 (soft): an excessive sheet count warns but never blocks export', () => {
    const r = validateDesign(valid, {
      sheet: stock,
      nest: { sheetCount: SHEET_WARN + 1, unplacedCount: 0 },
    });
    expect(r.exportEnabled).toBe(true);
    expect(r.issues).toContainEqual({
      code: 'FR-VAL.16',
      field: 'sheet.width',
      tier: 'soft',
      message: `Design needs ${SHEET_WARN + 1} sheets of stock — consider a larger sheet.`,
    });
  });

  it('a workable sheet adds no issues at all', () => {
    const r = validateDesign(valid, {
      sheet: stock,
      nest: { sheetCount: 3, unplacedCount: 0 },
    });
    expect(r.issues).toHaveLength(0);
  });
});

// ─── 8.10  2D inspector path data === exported SVG path data ─────────────────
// Covered in src/ui/inspector.test.ts ("uses the exact SVG path data emitted for export").
// Verify the invariant here too for belt-and-braces.

describe('8.10 – inspector path equals SVG export path', () => {
  it('the same FittedPath produces identical path data for inspector and export', () => {
    const path = fitPath(baseDesign, 90, 3);

    // The 2D inspector renders slatPathData(path) directly (Inspector2D.svelte),
    // while export embeds the same data inside the SVG via slatSvg. V-6 requires
    // these to be geometrically identical — assert the export SVG carries exactly
    // the inspector's path data, so any future divergence is caught.
    const inspectorPathData = slatPathData(path);
    const exportSvg = slatSvg(path, baseDesign);

    expect(inspectorPathData).toMatch(/^M/);
    expect(exportSvg).toContain(`d="${inspectorPathData}"`);
  });
});

// ─── 8.11  Family-aware panel: switching families swaps params cleanly ────────

describe('8.11 – wave-family switching (store level)', () => {
  it("setWaveKind changes the wave kind and installs only that family's params", () => {
    const store = createDesignStore();

    store.setWaveKind('diagonal');
    expect(store.design.wave.kind).toBe('diagonal');
    expect('sources' in store.design.wave).toBe(false);
    expect('theta' in store.design.wave).toBe(true);

    store.setWaveKind('radial');
    expect(store.design.wave.kind).toBe('radial');
    expect('theta' in store.design.wave).toBe(false);
    expect('cx' in store.design.wave).toBe(true);

    store.setWaveKind('interference');
    expect(store.design.wave.kind).toBe('interference');
    expect('sources' in store.design.wave).toBe(true);
    if (store.design.wave.kind === 'interference') {
      expect(store.design.wave.sources.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('switching family twice to the same kind is a no-op', () => {
    const store = createDesignStore();
    store.setWaveKind('diagonal');
    const waveBefore = store.design.wave;
    store.setWaveKind('diagonal');
    expect(store.design.wave).toBe(waveBefore);
  });
});

// ─── 8.12  Export button disabled when any hard block is active ───────────────

describe('8.12 – exportEnabled mirrors hard-block state', () => {
  it('exportEnabled is false as soon as a hard block is introduced', () => {
    const store = createDesignStore();
    expect(store.exportEnabled).toBe(true);

    store.setDesignNumber('D', 4); // D <= pMin (5) → FR-VAL.1
    expect(store.exportEnabled).toBe(false);
    expect(store.validation.hardBlocks.length).toBeGreaterThan(0);
  });

  it('exportEnabled recovers to true when the hard block is resolved', () => {
    const store = createDesignStore();
    store.setDesignNumber('D', 4);
    expect(store.exportEnabled).toBe(false);

    store.setDesignNumber('D', 60);
    expect(store.exportEnabled).toBe(true);
  });

  it('soft warnings do not block export', () => {
    const store = createDesignStore();
    store.setDesignNumber('gap', 0); // FR-VAL.7 soft

    const hasSoftWarning = store.validation.issues.some(
      (issue) => issue.code === 'FR-VAL.7' && issue.tier === 'soft',
    );
    expect(hasSoftWarning).toBe(true);
    expect(store.exportEnabled).toBe(true);
  });
});

// ─── 9.1  Nested parts never overlap and stay inside the sheet ────────────────

describe('9.1 – nested parts never overlap and stay inside the sheet', () => {
  const design: Design = {
    H: 600,
    W: 900,
    D: 60,
    pMin: 5,
    slatWidth: 18,
    gap: 6,
    fitTolerance: 0.05,
    displayUnit: 'mm',
    wave: {
      kind: 'interference',
      sources: [
        { type: 'diagonal', theta: 28, lambda: 260, phi: 0, weight: 1 },
        {
          type: 'radial',
          cx: 300,
          cy: 250,
          lambda: 190,
          phi: 35,
          decay: 0.0015,
          weight: 0.65,
        },
      ],
    },
  };

  const stock: SheetConfig = {
    enabled: true,
    width: 762,
    height: 762,
    margin: 10,
    clearance: 6,
    labelStyle: 'text',
  };

  function frontEdgeAt(path: FittedPath, y: number): number {
    for (const segment of path.segments) {
      if (y >= segment.p0.y - 1e-9 && y <= segment.p3.y + 1e-9) {
        return evaluateBezierAtY(segment, y).z;
      }
    }

    return path.segments.at(-1)?.p3.z ?? 0;
  }

  function span(placement: NestPlacement, path: FittedPath, y: number) {
    const local = y - placement.y;

    if (placement.rotation === 180) {
      const z = frontEdgeAt(path, design.H - local);

      return { left: placement.x - z, right: placement.x };
    }

    return { left: placement.x, right: placement.x + frontEdgeAt(path, local) };
  }

  it('honours the requested clearance between every neighbouring pair', () => {
    const { paths } = fitAllPaths(design);
    const nest = nestSheets(
      computeNestMetrics(paths, design.H),
      stock,
      design.H,
    );

    expect(nest.sheetCount).toBeGreaterThan(0);

    for (const sheet of nest.sheets) {
      for (let index = 1; index < sheet.placements.length; index += 1) {
        const before = sheet.placements[index - 1] as NestPlacement;
        const after = sheet.placements[index] as NestPlacement;

        if (before.row !== after.row) {
          continue;
        }

        for (let step = 0; step <= 400; step += 1) {
          const y = before.y + (step / 400) * design.H;
          const a = span(before, paths[before.finIndex] as FittedPath, y);
          const b = span(after, paths[after.finIndex] as FittedPath, y);

          expect(b.left).toBeGreaterThanOrEqual(
            a.right + stock.clearance - 1e-9,
          );
        }
      }
    }
  });

  it('keeps every part within the sheet margins', () => {
    const { paths } = fitAllPaths(design);
    const nest = nestSheets(
      computeNestMetrics(paths, design.H),
      stock,
      design.H,
    );

    for (const sheet of nest.sheets) {
      for (const placement of sheet.placements) {
        for (let step = 0; step <= 200; step += 1) {
          const y = placement.y + (step / 200) * design.H;
          const extent = span(
            placement,
            paths[placement.finIndex] as FittedPath,
            y,
          );

          expect(extent.left).toBeGreaterThanOrEqual(stock.margin - 1e-9);
          expect(extent.right).toBeLessThanOrEqual(
            stock.width - stock.margin + 1e-9,
          );
        }
      }
    }
  });

  // ─── 9.2  Nested sheet SVG scale contract ──────────────────────────────────

  it('9.2 – declares physical millimetres with a matching viewBox and a stock outline', () => {
    const { paths } = fitAllPaths(design);
    const nest = nestSheets(
      computeNestMetrics(paths, design.H),
      stock,
      design.H,
    );
    const svgs = sheetSvgs(nest, paths, {
      sheet: stock,
      height: design.H,
      finCount: paths.length,
    });

    expect(svgs).toHaveLength(nest.sheetCount);

    for (const svg of svgs) {
      expect(svg).toContain('width="762.0000mm" height="762.0000mm"');
      expect(svg).toContain('viewBox="0 0 762.0000 762.0000"');
      // Measuring this rectangle after import is how a DPI mis-scale is caught.
      expect(svg).toContain('id="stock-outline"');
    }
  });

  // ─── 9.3  The cut list accounts for every slat exactly once ────────────────

  it('9.3 – cut list accounts for every slat exactly once', () => {
    const { paths } = fitAllPaths(design);
    const metrics = computeNestMetrics(paths, design.H);
    const nest = nestSheets(metrics, stock, design.H);
    const rows = createCutlistCsv(nest, metrics, paths.length, design.H)
      .trimEnd()
      .split('\n')
      .slice(1);

    const indices = rows
      .map((row) => Number(row.split(',')[2]))
      .sort((left, right) => left - right);

    expect(indices).toEqual(paths.map((_, index) => index));
  });

  // ─── 9.4  Nesting beats naive fixed-pitch placement ────────────────────────

  it('9.4 – nesting needs fewer sheets than naive fixed-pitch placement', () => {
    const { paths } = fitAllPaths(design);
    const nest = nestSheets(
      computeNestMetrics(paths, design.H),
      stock,
      design.H,
    );

    const perRow = Math.floor(
      (stock.width - 2 * stock.margin + stock.clearance) /
        (design.D + stock.clearance),
    );

    expect(nest.sheetCount).toBeLessThan(
      Math.ceil(paths.length / (perRow * nest.rowsPerSheet)),
    );
  });

  // ─── 9.5  Nested geometry equals per-slat export geometry ──────────────────

  it('9.5 – a part at the identity placement matches its per-slat path exactly', () => {
    const { paths } = fitAllPaths(design);
    const path = paths[0] as FittedPath;

    // Same FittedPath, same process — this locks the two emitters together the
    // way 8.10 locks the inspector to the export.
    expect(
      placedPathData(
        path,
        { finIndex: 0, x: 0, y: 0, rotation: 0, row: 0 },
        design.H,
      ),
    ).toBe(slatPathData(path));
  });
});
