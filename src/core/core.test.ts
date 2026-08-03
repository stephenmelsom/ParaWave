import { describe, expect, it } from 'vitest';

import {
  SEGMENT_WARN,
  bezierTForY,
  blocksGeometry,
  buildMesh,
  collectRadialKinks,
  computeReadouts,
  computeSlatLayout,
  createDiagonalField,
  createInterferenceField,
  createRadialField,
  createWaveField,
  evaluateBezier,
  evaluateBezierAtY,
  fitPath,
  formatForDisplay,
  fromDisplayValue,
  hermiteCubic,
  parseFromDisplay,
  protrusionAt,
  protrusionFromWaveValue,
  seedBoundaries,
  slatPathData,
  slatSvg,
  toDisplayValue,
  validateDesign,
} from './index';
import type {
  BezierSeg,
  Design,
  MachineConfig,
  SheetConfig,
  WaveConfig,
} from './types';

const baseDesign: Design = {
  H: 120,
  W: 180,
  D: 40,
  pMin: 5,
  slatWidth: 18,
  gap: 6,
  fitTolerance: 0.02,
  displayUnit: 'mm',
  wave: {
    kind: 'diagonal',
    theta: 35,
    lambda: 80,
    phi: 10,
  },
};

function designWithWave(wave: WaveConfig): Design {
  return {
    ...baseDesign,
    wave,
  };
}

function maxFitError(
  design: Design,
  xCenter: number,
  segments: BezierSeg[],
): number {
  const field = createWaveField(design.wave);
  let maxError = 0;

  for (const segment of segments) {
    for (let step = 0; step <= 20; step += 1) {
      const t = step / 20;
      const fitted = evaluateBezier(segment, t);
      const expected = protrusionAt(design, xCenter, fitted.y, field);
      maxError = Math.max(maxError, Math.abs(fitted.z - expected));
    }
  }

  return maxError;
}

describe('units', () => {
  it('keeps canonical values in millimeters', () => {
    const inches = toDisplayValue(123.456, 'inch');

    expect(fromDisplayValue(inches, 'inch')).toBe(123.456);
    expect(formatForDisplay(25.4, 'inch')).toBe('1.00000000');
    expect(parseFromDisplay('1.00000000', 'inch')).toBe(25.4);
    expect(Number.isNaN(parseFromDisplay('', 'mm'))).toBe(true);
  });
});

describe('wave fields', () => {
  it('keeps every family inside the unit interval', () => {
    const diagonal = createDiagonalField({
      kind: 'diagonal',
      theta: 30,
      lambda: 75,
      phi: 15,
    });
    const radial = createRadialField({
      kind: 'radial',
      cx: 20,
      cy: 30,
      lambda: 55,
      phi: 20,
      decay: 0.6,
    });
    const interference = createInterferenceField([
      {
        type: 'diagonal',
        theta: 20,
        lambda: 60,
        phi: 0,
        weight: 2,
      },
      {
        type: 'radial',
        cx: 40,
        cy: 50,
        lambda: 90,
        phi: 45,
        decay: 0.3,
        weight: -1,
      },
    ]);

    for (let x = -20; x <= 200; x += 11) {
      for (let y = -20; y <= 200; y += 13) {
        expect(Math.abs(diagonal.f(x, y))).toBeLessThanOrEqual(1);
        expect(Math.abs(radial.f(x, y))).toBeLessThanOrEqual(1);
        expect(Math.abs(interference.f(x, y))).toBeLessThanOrEqual(1);
        expect(Number.isFinite(diagonal.dfdy(x, y))).toBe(true);
        expect(Number.isFinite(radial.dfdy(x, y))).toBe(true);
        expect(Number.isFinite(interference.dfdy(x, y))).toBe(true);
      }
    }

    expect(radial.dfdy(20, 30)).toBe(0);
  });
});

describe('geometry and readouts', () => {
  it('centers the computed slat array and maps analytic wave bounds', () => {
    const layout = computeSlatLayout(baseDesign);
    const readouts = computeReadouts(baseDesign);

    expect(layout.finCount).toBe(7);
    expect(layout.spannedWidth).toBe(162);
    expect(layout.endMargin).toBe(9);
    expect(layout.centerlines).toEqual([18, 42, 66, 90, 114, 138, 162]);
    expect(protrusionFromWaveValue(baseDesign, -1)).toBe(5);
    expect(protrusionFromWaveValue(baseDesign, 1)).toBe(40);
    expect(readouts.stockThickness).toBe(18);
    expect(readouts.declaredDepthRange).toEqual({ min: 5, max: 40 });
    expect(readouts.totalFootprint).toEqual({
      width: 180,
      height: 120,
      depth: 40,
    });
  });
});

describe('Hermite and adaptive fitting', () => {
  it('converts endpoint values and slopes into a cubic Bezier', () => {
    const segment = hermiteCubic({
      start: { y: 0, z: 2, dzdy: 3 },
      end: { y: 6, z: 20, dzdy: 3 },
    });

    expect(segment.p0).toEqual({ y: 0, z: 2 });
    expect(segment.p1).toEqual({ y: 2, z: 8 });
    expect(segment.p2).toEqual({ y: 4, z: 14 });
    expect(segment.p3).toEqual({ y: 6, z: 20 });
    expect(evaluateBezier(segment, 0.5)).toEqual({ y: 3, z: 11 });
  });

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
          {
            type: 'diagonal',
            theta: 30,
            lambda: 65,
            phi: 5,
            weight: 1,
          },
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
  ])('fits the $name field within tolerance', ({ wave }) => {
    const design = designWithWave(wave);
    const path = fitPath(design, 90, 3);

    expect(path.segments.length).toBeGreaterThan(0);
    expect(
      maxFitError(design, path.xCenter, path.segments),
    ).toBeLessThanOrEqual(design.fitTolerance);
  });

  it('injects an exact boundary at a radial center kink', () => {
    const design = designWithWave({
      kind: 'radial',
      cx: 90,
      cy: 57.5,
      lambda: 50,
      phi: 0,
      decay: 0,
    });

    expect(collectRadialKinks(design.wave, 90, design.H)).toEqual([57.5]);
    expect(seedBoundaries(design, 90)).toContain(57.5);

    const path = fitPath(design, 90);
    expect(path.segments.some((segment) => segment.p3.y === 57.5)).toBe(true);
    expect(path.segments.some((segment) => segment.p0.y === 57.5)).toBe(true);
  });
});

describe('SVG emission', () => {
  it('emits one fixed-precision closed path in millimeters', () => {
    const path = fitPath(baseDesign, 90, 3);
    const data = slatPathData(path);
    const svg = slatSvg(path, baseDesign);

    expect(data.startsWith('M 0.0000 0.0000 L')).toBe(true);
    expect(data).toContain(' C ');
    expect(data.endsWith(' Z')).toBe(true);
    expect(svg).toContain('width="40.0000mm" height="120.0000mm"');
    expect(svg).toContain('viewBox="0 0 40.0000 120.0000"');
    expect(svg.match(/<path /g)).toHaveLength(1);
  });
});

describe('validation', () => {
  it('returns exact hard-block and warning messages', () => {
    const invalid: Design = {
      ...baseDesign,
      D: 4,
      pMin: 5,
      gap: 0,
      fitTolerance: 0,
      wave: {
        kind: 'interference',
        sources: [
          {
            type: 'radial',
            cx: 0,
            cy: 0,
            lambda: 0,
            phi: 0,
            decay: 0,
            weight: 0,
          },
        ],
      },
    };
    const result = validateDesign(invalid, { totalSegments: SEGMENT_WARN + 1 });

    expect(result.exportEnabled).toBe(false);
    expect(result.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: 'FR-VAL.1',
          message: 'Max depth must be greater than minimum protrusion.',
        }),
        expect.objectContaining({
          code: 'FR-VAL.3',
          message: 'Wavelength must be greater than zero.',
        }),
        expect.objectContaining({
          code: 'FR-VAL.7',
          message: 'Gap is zero; slats will touch with no spacing.',
        }),
        expect.objectContaining({
          code: 'FR-VAL.8',
          message: 'Tight tolerance is producing a very large/heavy export.',
        }),
        expect.objectContaining({
          code: 'FR-VAL.10',
          message: 'Tolerance must be greater than zero.',
        }),
        expect.objectContaining({
          code: 'FR-VAL.11',
          message: 'At least one source weight must be non-zero.',
        }),
      ]),
    );
  });

  it('keeps a valid design exportable', () => {
    const result = validateDesign(baseDesign);

    expect(result.hardBlocks).toEqual([]);
    expect(result.exportEnabled).toBe(true);
  });
});

describe('CNC toolpath validation', () => {
  const sheet: SheetConfig = {
    enabled: true,
    width: 762,
    height: 762,
    margin: 10,
    clearance: 6,
    labelStyle: 'text',
  };

  const machine: MachineConfig = {
    enabled: true,
    post: 'onefinity-buildbotics',
    millingDirection: 'climb',
    toolNumber: 1,
    toolDiameter: 3.175,
    spindleRpm: 18000,
    feedRate: 2000,
    plungeRate: 500,
    depthPerPass: 3,
    throughAllowance: 0.5,
    retractHeight: 5,
    tabCount: 4,
    tabWidth: 8,
    tabHeight: 3,
    engraveLabels: true,
    engraveToolNumber: 1,
    engraveDiameter: 3.175,
    engraveDepth: 0.6,
    engraveFeed: 1500,
    engraveRpm: 18000,
  };

  it('leaves the shipped defaults exportable', () => {
    const result = validateDesign(baseDesign, { sheet, machine });

    expect(result.hardBlocks).toEqual([]);
    expect(result.exportEnabled).toBe(true);
  });

  it('blocks export when clearance is under the tool diameter (FR-VAL.17)', () => {
    // A 1/4" bit needs the corridor widened: two contours each pushed out by a
    // radius would otherwise meet in the middle of a 6 mm gap.
    const result = validateDesign(baseDesign, {
      sheet,
      machine: { ...machine, toolDiameter: 6.35 },
    });

    expect(result.exportEnabled).toBe(false);
    expect(result.hardBlocks.map((issue) => issue.field)).toEqual(
      expect.arrayContaining(['sheet.clearance', 'machine.toolDiameter']),
    );
    expect(result.hardBlocks[0]?.message).toContain(
      'at least the tool diameter',
    );
  });

  it('blocks export when the margin is under the tool radius (FR-VAL.18)', () => {
    const result = validateDesign(baseDesign, {
      sheet: { ...sheet, margin: 1 },
      machine,
    });

    expect(result.exportEnabled).toBe(false);
    expect(result.hardBlocks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'FR-VAL.18', field: 'sheet.margin' }),
      ]),
    );
  });

  it('blocks non-positive cutting parameters (FR-VAL.19)', () => {
    const result = validateDesign(baseDesign, {
      sheet,
      machine: { ...machine, feedRate: 0, depthPerPass: -1 },
    });

    expect(result.exportEnabled).toBe(false);
    expect(result.hardBlocks.map((issue) => issue.field)).toEqual(
      expect.arrayContaining(['machine.feedRate', 'machine.depthPerPass']),
    );
  });

  it('ignores engrave settings when labels are not being engraved', () => {
    const result = validateDesign(baseDesign, {
      sheet,
      machine: { ...machine, engraveLabels: false, engraveFeed: 0 },
    });

    expect(result.exportEnabled).toBe(true);
  });

  it('warns without blocking when tabs are as tall as the cut (FR-VAL.20)', () => {
    const result = validateDesign(baseDesign, {
      sheet,
      machine: { ...machine, tabHeight: 40 },
    });

    expect(result.exportEnabled).toBe(true);
    expect(result.warnings).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: 'FR-VAL.20',
          field: 'machine.tabHeight',
        }),
      ]),
    );
  });

  it('blocks export but not geometry, since cutting cannot change shape', () => {
    const result = validateDesign(baseDesign, {
      sheet,
      machine: { ...machine, toolDiameter: 6.35, feedRate: 0 },
    });

    expect(result.exportEnabled).toBe(false);
    // Every hard block here is a machine rule, so the preview keeps computing.
    expect(result.hardBlocks.some(blocksGeometry)).toBe(false);
  });

  it('still pauses geometry for a design-level block', () => {
    const result = validateDesign({ ...baseDesign, H: 0 }, { sheet, machine });

    expect(result.hardBlocks.some(blocksGeometry)).toBe(true);
  });

  it('stays silent when g-code output or nesting is switched off', () => {
    const broken: MachineConfig = {
      ...machine,
      toolDiameter: 6.35,
      feedRate: 0,
    };

    expect(
      validateDesign(baseDesign, {
        sheet,
        machine: { ...broken, enabled: false },
      }).exportEnabled,
    ).toBe(true);
    expect(
      validateDesign(baseDesign, {
        sheet: { ...sheet, enabled: false },
        machine: broken,
      }).exportEnabled,
    ).toBe(true);
  });
});

describe('mesh construction', () => {
  it('builds merged indexed buffers, normals, and fin triangle ranges', () => {
    const paths = [fitPath(baseDesign, 42, 0), fitPath(baseDesign, 66, 1)];
    const mesh = buildMesh(paths, baseDesign, { samplesPerSegment: 2 });
    const vertexCount = mesh.positions.length / 3;

    expect(mesh.positions.length).toBeGreaterThan(0);
    expect(mesh.normals.length).toBe(mesh.positions.length);
    expect(mesh.indices.length).toBeGreaterThan(0);
    expect(mesh.finRanges).toHaveLength(4);
    expect(mesh.finRanges[0]).toBe(0);
    expect(mesh.finRanges[1]).toBeGreaterThan(0);
    expect(mesh.finRanges[2]).toBe(mesh.finRanges[1]);
    expect(Math.max(...mesh.indices)).toBeLessThan(vertexCount);
  });
});

describe('bezierTForY and evaluateBezierAtY', () => {
  it('evaluateBezierAtY returns the same point as evaluateBezier at the matching t', () => {
    const seg = hermiteCubic({
      start: { y: 0, z: 5, dzdy: 0 },
      end: { y: 10, z: 15, dzdy: 0 },
    });
    const atY5 = evaluateBezierAtY(seg, 5);
    const atT05 = evaluateBezier(seg, 0.5);

    expect(atY5.y).toBeCloseTo(atT05.y, 10);
    expect(atY5.z).toBeCloseTo(atT05.z, 10);
  });

  it('bezierTForY returns 0 for a zero-span segment', () => {
    const seg = hermiteCubic({
      start: { y: 5, z: 10, dzdy: 0 },
      end: { y: 5, z: 10, dzdy: 0 },
    });

    expect(bezierTForY(seg, 5)).toBe(0);
  });
});
