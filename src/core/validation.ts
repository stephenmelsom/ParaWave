import { computeFinCount } from './geometry';
import type { Design, Source, WaveConfig } from './types';
import { sourceWeightTotal } from './wave/interference';

export const FIN_WARN = 400;
export const SEGMENT_WARN = 50_000;

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
  | 'FR-VAL.11';

export interface ValidationIssue {
  code: ValidationCode;
  field: string;
  tier: ValidationTier;
  message: string;
}

export interface ValidationOptions {
  totalSegments?: number;
}

export interface ValidationResult {
  issues: ValidationIssue[];
  hardBlocks: ValidationIssue[];
  warnings: ValidationIssue[];
  exportEnabled: boolean;
}

function hard(code: ValidationCode, field: string, message: string): ValidationIssue {
  return { code, field, tier: 'hard', message };
}

function soft(code: ValidationCode, field: string, message: string): ValidationIssue {
  return { code, field, tier: 'soft', message };
}

function wavelengthIssuesForSource(source: Source, index: number): ValidationIssue[] {
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
        : [hard('FR-VAL.3', 'wave.lambda', 'Wavelength must be greater than zero.')];
    case 'interference':
      return wave.sources.flatMap(wavelengthIssuesForSource);
  }
}

export function validateDesign(
  design: Design,
  options: ValidationOptions = {},
): ValidationResult {
  const issues: ValidationIssue[] = [];

  if (design.D <= design.pMin) {
    issues.push(hard('FR-VAL.1', 'D', 'Max depth must be greater than minimum protrusion.'));
  }

  issues.push(...wavelengthIssuesForWave(design.wave));

  if (design.H <= 0) {
    issues.push(hard('FR-VAL.4', 'H', 'Value must be greater than zero.'));
  }

  if (design.W <= 0) {
    issues.push(hard('FR-VAL.4', 'W', 'Value must be greater than zero.'));
  }

  if (design.slatWidth <= 0) {
    issues.push(hard('FR-VAL.4', 'slatWidth', 'Value must be greater than zero.'));
  }

  if (design.gap < 0) {
    issues.push(hard('FR-VAL.4', 'gap', 'Gap must be zero or greater.'));
  }

  if (design.pMin < 0) {
    issues.push(hard('FR-VAL.5', 'pMin', 'Minimum protrusion cannot be negative.'));
  }

  if (design.fitTolerance <= 0) {
    issues.push(hard('FR-VAL.10', 'fitTolerance', 'Tolerance must be greater than zero.'));
  }

  if (design.wave.kind === 'interference' && sourceWeightTotal(design.wave.sources) === 0) {
    issues.push(
      hard('FR-VAL.11', 'wave.sources', 'At least one source weight must be non-zero.'),
    );
  }

  const finCount = computeFinCount(design);

  if (finCount < 1 && design.W > 0 && design.slatWidth > 0) {
    issues.push(hard('FR-VAL.2', 'W', 'Width is too small to fit a single slat plus gap.'));
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
    issues.push(soft('FR-VAL.7', 'gap', 'Gap is zero; slats will touch with no spacing.'));
  }

  if (options.totalSegments !== undefined && options.totalSegments > SEGMENT_WARN) {
    issues.push(
      soft(
        'FR-VAL.8',
        'fitTolerance',
        'Tight tolerance is producing a very large/heavy export.',
      ),
    );
  }

  const hardBlocks = issues.filter((issue) => issue.tier === 'hard');
  const warnings = issues.filter((issue) => issue.tier === 'soft');

  return {
    issues,
    hardBlocks,
    warnings,
    exportEnabled: hardBlocks.length === 0,
  };
}
