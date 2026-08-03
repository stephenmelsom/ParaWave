import JSZip from 'jszip';
import { describe, expect, it } from 'vitest';

import {
  buildSheetProgram,
  passDepths,
  partContour,
  type SheetProgramContext,
} from '../core/cam';
import { labelStrokeSegments } from '../core/sheet-svg';
import { fitAllPaths } from '../core/fit';
import { computeNestMetrics } from '../core/nest/profile';
import { nestSheets } from '../core/nest/pack';
import type { NestResult } from '../core/nest/pack';
import type {
  Design,
  FittedPath,
  MachineConfig,
  SheetConfig,
} from '../core/types';
import {
  GCODE_DIR,
  SHEETS_DIR,
  SLATS_DIR,
  createDesignManifest,
  createExportZip,
  gcodeExtension,
  gcodeFilename,
  sheetGcodePrograms,
} from './index';

const design: Design = {
  H: 300,
  W: 400,
  D: 40,
  pMin: 8,
  slatWidth: 18,
  gap: 6,
  fitTolerance: 0.05,
  displayUnit: 'mm',
  wave: { kind: 'diagonal', theta: 30, lambda: 260, phi: 0 },
};

const sheet: SheetConfig = {
  enabled: true,
  width: 600,
  height: 600,
  margin: 10,
  clearance: 6,
  labelStyle: 'stroke',
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

function fixture(): { paths: FittedPath[]; nest: NestResult } {
  const paths = fitAllPaths(design).paths;
  const nest = nestSheets(computeNestMetrics(paths, design.H), sheet, design.H);

  return { paths, nest };
}

function context(overrides: Partial<MachineConfig> = {}): SheetProgramContext {
  return {
    sheet,
    machine: { ...machine, ...overrides },
    height: design.H,
    thickness: design.slatWidth,
    finCount: fixture().paths.length,
    sheetCount: 1,
  };
}

describe('g-code filenames', () => {
  it('pads to match the sheet SVG filenames so the two cross-reference', () => {
    expect(gcodeFilename(0, 3)).toBe('sheet_001.nc');
    expect(gcodeFilename(11, 120)).toBe('sheet_012.nc');
  });

  it('uses the extension the configured post produces', () => {
    expect(gcodeExtension(machine)).toBe('nc');
    expect(gcodeFilename(0, 1, gcodeExtension(machine))).toBe('sheet_001.nc');
  });

  it('rejects an index outside the sheet range', () => {
    expect(() => gcodeFilename(3, 3)).toThrow(RangeError);
    expect(() => gcodeFilename(-1, 3)).toThrow(RangeError);
  });
});

describe('sheet programs', () => {
  it('emits one program per nested sheet', () => {
    const { paths, nest } = fixture();
    const programs = sheetGcodePrograms(nest, paths, context());

    expect(nest.sheetCount).toBeGreaterThan(0);
    expect(programs).toHaveLength(nest.sheetCount);
    expect(
      programs.every((program) =>
        program.startsWith('(Design File: ParaWave sheet'),
      ),
    ).toBe(true);
  });

  it('describes the stock it was posted for', () => {
    const { paths, nest } = fixture();
    const program = sheetGcodePrograms(nest, paths, context())[0] as string;

    expect(program).toContain('(stockMin:0.00mm, 0.00mm, -18.00mm)');
    expect(program).toContain('(stockMax:600.00mm, 600.00mm, 0.00mm)');
  });

  it('engraves every label before any profile pass', () => {
    const { paths, nest } = fixture();
    const program = sheetGcodePrograms(nest, paths, context())[0] as string;

    const engrave = program.indexOf('(Engrave part labels)');
    const profile = program.indexOf('(Profile cut slats)');

    expect(engrave).toBeGreaterThan(-1);
    expect(profile).toBeGreaterThan(engrave);
    // No part comment may appear before the profile section starts.
    expect(program.slice(0, profile)).not.toContain('(Part ');
  });

  it('skips engraving when labels are off', () => {
    const { paths, nest } = fixture();
    const program = sheetGcodePrograms(
      nest,
      paths,
      context({ engraveLabels: false }),
    )[0] as string;

    expect(program).not.toContain('(Engrave part labels)');
    expect(program).toContain('(Profile cut slats)');
  });

  it('stays inside the stock in X and Y', () => {
    const { paths, nest } = fixture();
    const program = sheetGcodePrograms(nest, paths, context())[0] as string;

    for (const match of program.matchAll(/[XY](-?\d+\.\d+)/g)) {
      const value = Number(match[1]);

      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(sheet.width);
    }
  });

  it('never cuts deeper than the stock plus its through allowance', () => {
    const { paths, nest } = fixture();
    const program = sheetGcodePrograms(nest, paths, context())[0] as string;
    const deepest = design.slatWidth + machine.throughAllowance;

    for (const match of program.matchAll(/^(?:G[01])?Z(-?\d+\.\d+)/gm)) {
      const value = Number(match[1]);

      // -5 is the machine-coordinate safe retract, which is not a work depth.
      expect(value).toBeGreaterThanOrEqual(-deepest - 1e-6);
      expect(value).toBeLessThanOrEqual(machine.retractHeight + 1e-6);
    }
  });
});

describe('machine coordinate mapping', () => {
  it('takes sheet coordinates as machine coordinates, origin at the stock corner', () => {
    const { paths, nest } = fixture();
    const sheetZero = nest.sheets[0];
    const placement = sheetZero?.placements[0];

    expect(placement).toBeDefined();

    const contour = partContour(
      paths[placement?.finIndex ?? 0] as FittedPath,
      sheetZero as NonNullable<typeof sheetZero>,
      0,
      context(),
    );

    const radius = machine.toolDiameter / 2;
    const top = Math.max(...contour.map((point) => point.y));
    const bottom = Math.min(...contour.map((point) => point.y));

    // Row zero sits at sheet y = margin and spans H. There is no Y flip: the
    // sheet's y axis *is* the machine's, which is what stands the slats upright
    // (FR-EXP.6). The contour extends one tool radius past the part.
    expect(bottom).toBeCloseTo(sheet.margin - radius, 6);
    expect(top).toBeCloseTo(sheet.margin + design.H + radius, 6);
  });

  it('places the part where the sheet SVG says it is', () => {
    const { paths, nest } = fixture();
    const sheetZero = nest.sheets[0] as NonNullable<(typeof nest.sheets)[0]>;
    const placement = sheetZero.placements[0] as NonNullable<
      (typeof sheetZero.placements)[0]
    >;
    const contour = partContour(
      paths[placement.finIndex] as FittedPath,
      sheetZero,
      0,
      context(),
    );

    const radius = machine.toolDiameter / 2;
    // A 0-degree part's straight back edge sits at placement.x, so its offset
    // contour reaches exactly one radius behind it.
    expect(placement.rotation).toBe(0);
    expect(Math.min(...contour.map((point) => point.x))).toBeCloseTo(
      placement.x - radius,
      6,
    );
  });

  it('engraves labels upright: glyph tops are above glyph bottoms in machine Y', () => {
    // Segment "a" is the top bar of a seven-segment digit and "d" the bottom
    // bar. Authored for a Y-down document they carry the *larger* sheet y, and
    // because machine Y is sheet y they keep it — so the top bar engraves above
    // the bottom bar. A stray flip anywhere in the chain inverts this.
    const strokes = labelStrokeSegments('8', 100, 200, 6);
    const ys = strokes.flatMap((stroke) => [stroke.y1, stroke.y2]);
    const topBar = strokes.find(
      (stroke) => stroke.y1 === stroke.y2 && stroke.y1 === Math.max(...ys),
    );
    const bottomBar = strokes.find(
      (stroke) => stroke.y1 === stroke.y2 && stroke.y1 === Math.min(...ys),
    );

    expect(topBar).toBeDefined();
    expect(bottomBar).toBeDefined();
    expect((topBar?.y1 ?? 0) > (bottomBar?.y1 ?? 0)).toBe(true);
  });

  it('engraves labels within the stock and at the engrave depth', () => {
    const { paths, nest } = fixture();
    const program = sheetGcodePrograms(nest, paths, context())[0] as string;
    const engraveSection = program.slice(
      0,
      program.indexOf('(Profile cut slats)'),
    );

    expect(engraveSection).toContain(`Z-${machine.engraveDepth.toFixed(3)}`);

    const ys = [...engraveSection.matchAll(/Y(-?\d+\.\d+)/g)].map((match) =>
      Number(match[1]),
    );

    expect(ys.length).toBeGreaterThan(0);

    for (const value of ys) {
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(sheet.height);
    }
  });

  it('reverses the contour for conventional milling and keeps the plunge point', () => {
    const { paths, nest } = fixture();
    const sheetZero = nest.sheets[0] as NonNullable<(typeof nest.sheets)[0]>;
    const path = paths[sheetZero.placements[0]?.finIndex ?? 0] as FittedPath;

    const climb = partContour(
      path,
      sheetZero,
      0,
      context({ millingDirection: 'climb' }),
    );
    const conventional = partContour(
      path,
      sheetZero,
      0,
      context({ millingDirection: 'conventional' }),
    );

    expect(conventional[0]).toEqual(climb[0]);
    expect(conventional[1]).toEqual(climb.at(-1));
    expect(conventional).toHaveLength(climb.length);
  });
});

describe('depth passes', () => {
  it('steps down to exactly the cut depth without overshooting', () => {
    const depths = passDepths(18.5, 3);

    expect(depths).toHaveLength(7);
    expect(depths.at(-1)).toBeCloseTo(-18.5, 9);
    // Equal steps, none deeper than the configured maximum.
    for (let index = 0; index < depths.length; index += 1) {
      const previous = index === 0 ? 0 : (depths[index - 1] as number);
      expect(previous - (depths[index] as number)).toBeLessThanOrEqual(
        3 + 1e-9,
      );
    }
  });

  it('makes a single pass when the step is deeper than the cut', () => {
    expect(passDepths(6, 10)).toEqual([-6]);
  });

  it('degrades rather than looping forever on a zero step', () => {
    expect(passDepths(18, 0)).toEqual([-18]);
    expect(passDepths(0, 3)).toEqual([]);
  });
});

describe('toolpath program structure', () => {
  it('retracts between parts so no rapid crosses the stock at depth', () => {
    const { paths, nest } = fixture();
    const sheetZero = nest.sheets[0] as NonNullable<(typeof nest.sheets)[0]>;
    const program = buildSheetProgram(sheetZero, paths, {
      ...context(),
      sheetCount: nest.sheetCount,
    });

    let lastZ = machine.retractHeight;

    for (const op of program.ops) {
      if (op.kind === 'rapid' || op.kind === 'linear') {
        if (op.z !== undefined) {
          lastZ = op.z;
        }

        // A rapid that moves in XY must be at or above the retract height.
        if (op.kind === 'rapid' && (op.x !== undefined || op.y !== undefined)) {
          expect(lastZ).toBeGreaterThanOrEqual(machine.retractHeight - 1e-9);
        }
      }
    }
  });

  it('plunges at the plunge rate and cuts at the feed rate', () => {
    const { paths, nest } = fixture();
    const sheetZero = nest.sheets[0] as NonNullable<(typeof nest.sheets)[0]>;
    const program = buildSheetProgram(sheetZero, paths, {
      ...context(),
      sheetCount: nest.sheetCount,
    });

    const plunges = program.ops.filter(
      (op) => op.kind === 'linear' && op.x === undefined && op.y === undefined,
    );

    expect(plunges.length).toBeGreaterThan(0);
    expect(
      plunges.every(
        (op) => op.kind === 'linear' && op.feed === machine.plungeRate,
      ),
    ).toBe(true);
  });
});

describe('archive layout', () => {
  it('places g-code beside the sheets it was generated from', async () => {
    const { paths, nest } = fixture();
    const programs = sheetGcodePrograms(nest, paths, context());
    const manifest = createDesignManifest(design, paths.length, {
      stock: sheet,
      machine,
      nest,
    });

    const archive = await createExportZip({
      manifest,
      slatSvgs: paths.map(() => '<svg/>'),
      sheetSvgs: nest.sheets.map(() => '<svg/>'),
      gcodePrograms: programs,
      gcodeExtension: 'nc',
    });

    const names = Object.keys(
      await JSZip.loadAsync(await archive.arrayBuffer()).then(
        (zip) => zip.files,
      ),
    );

    expect(names).toContain(`${GCODE_DIR}sheet_001.nc`);
    expect(names.indexOf(`${GCODE_DIR}sheet_001.nc`)).toBeGreaterThan(
      names.indexOf(`${SHEETS_DIR}sheet_001.svg`),
    );
    expect(names.indexOf(`${GCODE_DIR}sheet_001.nc`)).toBeLessThan(
      names.indexOf(`${SLATS_DIR}slat_001.svg`),
    );
  });

  it('records the machine the programs were posted for', () => {
    const { nest } = fixture();
    const manifest = createDesignManifest(design, 3, {
      stock: sheet,
      machine,
      nest,
    });

    expect(manifest.machine).toEqual(machine);
    expect(manifest.schemaVersion).toBe(3);
  });

  it('refuses a g-code count that disagrees with the manifest', async () => {
    const { paths, nest } = fixture();
    const manifest = createDesignManifest(design, paths.length, {
      stock: sheet,
      machine,
      nest,
    });

    await expect(
      createExportZip({
        manifest,
        slatSvgs: paths.map(() => '<svg/>'),
        sheetSvgs: nest.sheets.map(() => '<svg/>'),
        gcodePrograms: ['(only one)'],
      }),
    ).rejects.toThrow(/G-code program count/);
  });
});
