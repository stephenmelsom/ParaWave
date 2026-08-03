import { computeFinCount } from './geometry';
import type {
  Design,
  MachineConfig,
  SheetConfig,
  Source,
  WaveConfig,
} from './types';
import { sourceWeightTotal } from './wave/interference';

export const FIN_WARN = 400;
export const SEGMENT_WARN = 50_000;
export const SHEET_WARN = 50;

export type ValidationTier = 'hard' | 'soft';

// FR-VAL.9 (depth clipping) is intentionally absent — the wave evaluation is
// bounded to [pMin, D] by construction, so depth overflow is impossible.
export type ValidationCode =
  | 'FR-VAL.1'
  | 'FR-VAL.2'
  | 'FR-VAL.3'
  | 'FR-VAL.4'
  | 'FR-VAL.5'
  | 'FR-VAL.6'
  | 'FR-VAL.7'
  | 'FR-VAL.8'
  | 'FR-VAL.10'
  | 'FR-VAL.11'
  | 'FR-VAL.12'
  | 'FR-VAL.13'
  | 'FR-VAL.14'
  | 'FR-VAL.15'
  | 'FR-VAL.16'
  | 'FR-VAL.17'
  | 'FR-VAL.18'
  | 'FR-VAL.19'
  | 'FR-VAL.20';

export interface ValidationIssue {
  code: ValidationCode;
  field: string;
  tier: ValidationTier;
  message: string;
}

/**
 * Rules that only concern cutting, not shape.
 *
 * They still block *export* — a program that drives the cutter into the
 * neighbouring part is worse than no program. But they must not pause geometry
 * computation: nothing a machine setting says can change a single fitted curve,
 * so a mistyped feed rate freezing the 3D preview would be nonsense. Identified
 * by code rather than by field, because FR-VAL.17 and .18 are machine rules
 * deliberately anchored on the sheet fields that can also resolve them.
 */
export const MACHINE_VALIDATION_CODES: ReadonlySet<ValidationCode> = new Set([
  'FR-VAL.17',
  'FR-VAL.18',
  'FR-VAL.19',
  'FR-VAL.20',
]);

/** Does this issue stop geometry from being computed at all? */
export function blocksGeometry(issue: ValidationIssue): boolean {
  return issue.tier === 'hard' && !MACHINE_VALIDATION_CODES.has(issue.code);
}

export interface ValidationOptions {
  totalSegments?: number;
  sheet?: SheetConfig;
  machine?: MachineConfig;
  nest?: {
    sheetCount: number;
    unplacedCount: number;
  };
}

export interface ValidationResult {
  issues: ValidationIssue[];
  hardBlocks: ValidationIssue[];
  warnings: ValidationIssue[];
  exportEnabled: boolean;
}

function hard(
  code: ValidationCode,
  field: string,
  message: string,
): ValidationIssue {
  return { code, field, tier: 'hard', message };
}

function soft(
  code: ValidationCode,
  field: string,
  message: string,
): ValidationIssue {
  return { code, field, tier: 'soft', message };
}

function wavelengthIssuesForSource(
  source: Source,
  index: number,
): ValidationIssue[] {
  if (source.lambda > 0) {
    return [];
  }

  return [
    hard(
      'FR-VAL.3',
      `wave.sources.${index}.lambda`,
      'Wavelength must be greater than zero.',
    ),
  ];
}

function wavelengthIssuesForWave(wave: WaveConfig): ValidationIssue[] {
  switch (wave.kind) {
    case 'diagonal':
    case 'radial':
      return wave.lambda > 0
        ? []
        : [
            hard(
              'FR-VAL.3',
              'wave.lambda',
              'Wavelength must be greater than zero.',
            ),
          ];
    case 'interference':
      return wave.sources.flatMap(wavelengthIssuesForSource);
  }
}

/**
 * Stock sheet rules.
 *
 * FR-VAL.12–.14 are computable from `Design` + `SheetConfig` alone, so they are
 * hard blocks in the synchronous cheap tier and genuinely disable export.
 * FR-VAL.15–.16 depend on a nest result, which arrives from the worker — and
 * `exportEnabled` derives from the cheap tier, so an expensive-tier hard block
 * would appear in the UI without disabling the button. They are soft warnings
 * instead: unnestable slats still appear in the cut list and the per-slat SVGs
 * are unaffected.
 */
function sheetIssues(
  design: Design,
  options: ValidationOptions,
): ValidationIssue[] {
  const sheet = options.sheet;

  if (!sheet || !sheet.enabled) {
    return [];
  }

  const issues: ValidationIssue[] = [];

  if (!(sheet.width > 0)) {
    issues.push(
      hard('FR-VAL.12', 'sheet.width', 'Value must be greater than zero.'),
    );
  }

  if (!(sheet.height > 0)) {
    issues.push(
      hard('FR-VAL.12', 'sheet.height', 'Value must be greater than zero.'),
    );
  }

  if (sheet.margin < 0) {
    issues.push(
      hard('FR-VAL.12', 'sheet.margin', 'Edge margin cannot be negative.'),
    );
  }

  if (sheet.clearance < 0) {
    issues.push(
      hard(
        'FR-VAL.12',
        'sheet.clearance',
        'Part clearance cannot be negative.',
      ),
    );
  }

  if (issues.length > 0) {
    return issues;
  }

  if (sheet.height - 2 * sheet.margin < design.H) {
    issues.push(
      hard(
        'FR-VAL.13',
        'sheet.height',
        'Sheet height is too small to fit a full-height slat.',
      ),
    );
  }

  if (sheet.width - 2 * sheet.margin < design.pMin) {
    issues.push(
      hard(
        'FR-VAL.14',
        'sheet.width',
        'Sheet width is too small to fit a single slat profile.',
      ),
    );
  }

  const nest = options.nest;

  if (nest && nest.unplacedCount > 0) {
    issues.push(
      soft(
        'FR-VAL.15',
        'sheet.width',
        `${nest.unplacedCount} slats are too wide for this sheet and were left unnested.`,
      ),
    );
  }

  if (nest && nest.sheetCount > SHEET_WARN) {
    issues.push(
      soft(
        'FR-VAL.16',
        'sheet.width',
        `Design needs ${nest.sheetCount} sheets of stock — consider a larger sheet.`,
      ),
    );
  }

  return issues;
}

/**
 * CNC toolpath rules.
 *
 * All of these are computable from `Design` + `SheetConfig` + `MachineConfig`
 * alone, so unlike FR-VAL.15–.16 they can sit in the synchronous cheap tier and
 * genuinely disable export.
 *
 * They apply only when g-code output is switched on and slats are being nested,
 * because that is the only combination that produces a toolpath at all.
 */
function machineIssues(
  design: Design,
  options: ValidationOptions,
): ValidationIssue[] {
  const machine = options.machine;
  const sheet = options.sheet;

  if (!machine || !machine.enabled || !sheet || !sheet.enabled) {
    return [];
  }

  const issues: ValidationIssue[] = [];

  const positives: Array<[string, number]> = [
    ['toolDiameter', machine.toolDiameter],
    ['spindleRpm', machine.spindleRpm],
    ['feedRate', machine.feedRate],
    ['plungeRate', machine.plungeRate],
    ['depthPerPass', machine.depthPerPass],
    ['retractHeight', machine.retractHeight],
    ...(machine.engraveLabels
      ? ([
          ['engraveDiameter', machine.engraveDiameter],
          ['engraveDepth', machine.engraveDepth],
          ['engraveFeed', machine.engraveFeed],
          ['engraveRpm', machine.engraveRpm],
        ] as Array<[string, number]>)
      : []),
  ];

  for (const [field, value] of positives) {
    if (!(value > 0)) {
      issues.push(
        hard(
          'FR-VAL.19',
          `machine.${field}`,
          'Value must be greater than zero.',
        ),
      );
    }
  }

  const nonNegatives: Array<[string, number]> = [
    ['throughAllowance', machine.throughAllowance],
    ['tabCount', machine.tabCount],
    ['tabWidth', machine.tabWidth],
    ['tabHeight', machine.tabHeight],
  ];

  for (const [field, value] of nonNegatives) {
    if (!(value >= 0)) {
      issues.push(
        hard('FR-VAL.19', `machine.${field}`, 'Value cannot be negative.'),
      );
    }
  }

  if (issues.length > 0) {
    return issues;
  }

  // The corridor between two nested parts is exactly `clearance` wide — flat
  // back edges are placed a clearance apart, mating wavy edges a clearance past
  // their mating bound, and rows a clearance apart. Two contours each pushed
  // out by a tool radius therefore collide as soon as clearance drops below a
  // full tool diameter.
  if (sheet.clearance < machine.toolDiameter) {
    const message =
      'Part clearance must be at least the tool diameter, or the cutter will ' +
      'cut into the neighbouring part.';

    issues.push(hard('FR-VAL.17', 'sheet.clearance', message));
    issues.push(hard('FR-VAL.17', 'machine.toolDiameter', message));
  }

  if (sheet.margin < machine.toolDiameter / 2) {
    issues.push(
      hard(
        'FR-VAL.18',
        'sheet.margin',
        'Edge margin is smaller than the tool radius, so the toolpath would run off the stock.',
      ),
    );
  }

  const cutDepth = design.slatWidth + machine.throughAllowance;

  if (machine.tabCount > 0 && machine.tabHeight >= cutDepth) {
    issues.push(
      soft(
        'FR-VAL.20',
        'machine.tabHeight',
        'Tabs are as tall as the cut, so parts will never be released.',
      ),
    );
  }

  if (machine.engraveLabels && machine.engraveDepth >= design.slatWidth) {
    issues.push(
      soft(
        'FR-VAL.20',
        'machine.engraveDepth',
        'Label engraving is as deep as the stock is thick.',
      ),
    );
  }

  return issues;
}

export function validateDesign(
  design: Design,
  options: ValidationOptions = {},
): ValidationResult {
  const issues: ValidationIssue[] = [];

  if (design.D <= design.pMin) {
    issues.push(
      hard(
        'FR-VAL.1',
        'D',
        'Max depth must be greater than minimum protrusion.',
      ),
    );
  }

  issues.push(...wavelengthIssuesForWave(design.wave));

  if (design.H <= 0) {
    issues.push(hard('FR-VAL.4', 'H', 'Value must be greater than zero.'));
  }

  if (design.W <= 0) {
    issues.push(hard('FR-VAL.4', 'W', 'Value must be greater than zero.'));
  }

  if (design.slatWidth <= 0) {
    issues.push(
      hard('FR-VAL.4', 'slatWidth', 'Value must be greater than zero.'),
    );
  }

  if (design.gap < 0) {
    issues.push(hard('FR-VAL.4', 'gap', 'Gap must be zero or greater.'));
  }

  if (design.pMin < 0) {
    issues.push(
      hard('FR-VAL.5', 'pMin', 'Minimum protrusion cannot be negative.'),
    );
  }

  if (design.fitTolerance <= 0) {
    issues.push(
      hard('FR-VAL.10', 'fitTolerance', 'Tolerance must be greater than zero.'),
    );
  }

  if (
    design.wave.kind === 'interference' &&
    sourceWeightTotal(design.wave.sources) === 0
  ) {
    issues.push(
      hard(
        'FR-VAL.11',
        'wave.sources',
        'At least one source weight must be non-zero.',
      ),
    );
  }

  const finCount = computeFinCount(design);

  if (finCount < 1 && design.W > 0 && design.slatWidth > 0) {
    issues.push(
      hard(
        'FR-VAL.2',
        'W',
        'Width is too small to fit a single slat plus gap.',
      ),
    );
  }

  if (finCount > FIN_WARN) {
    issues.push(
      soft(
        'FR-VAL.6',
        'W',
        `Large fin count (${finCount}) — preview and export may be slow.`,
      ),
    );
  }

  if (design.gap === 0) {
    issues.push(
      soft('FR-VAL.7', 'gap', 'Gap is zero; slats will touch with no spacing.'),
    );
  }

  if (
    options.totalSegments !== undefined &&
    options.totalSegments > SEGMENT_WARN
  ) {
    issues.push(
      soft(
        'FR-VAL.8',
        'fitTolerance',
        'Tight tolerance is producing a very large/heavy export.',
      ),
    );
  }

  issues.push(...sheetIssues(design, options));
  issues.push(...machineIssues(design, options));

  const hardBlocks = issues.filter((issue) => issue.tier === 'hard');
  const warnings = issues.filter((issue) => issue.tier === 'soft');

  return {
    issues,
    hardBlocks,
    warnings,
    exportEnabled: hardBlocks.length === 0,
  };
}
