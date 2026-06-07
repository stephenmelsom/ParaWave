import type { Unit } from './types';

export const MM_PER_INCH = 25.4;

export interface UnitFormatOptions {
  decimals?: number;
  trimTrailingZeros?: boolean;
}

const DEFAULT_DECIMALS: Record<Unit, number> = {
  mm: 4,
  inch: 8,
};

export function toDisplayValue(valueMm: number, unit: Unit): number {
  return unit === 'inch' ? valueMm / MM_PER_INCH : valueMm;
}

export function fromDisplayValue(value: number, unit: Unit): number {
  return unit === 'inch' ? value * MM_PER_INCH : value;
}

export function formatForDisplay(
  valueMm: number,
  unit: Unit,
  options: UnitFormatOptions = {},
): string {
  if (!Number.isFinite(valueMm)) {
    return String(valueMm);
  }

  const decimals = options.decimals ?? DEFAULT_DECIMALS[unit];
  const formatted = toDisplayValue(valueMm, unit).toFixed(decimals);

  if (!options.trimTrailingZeros) {
    return formatted;
  }

  return formatted.replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
}

export function parseFromDisplay(input: string, unit: Unit): number {
  const trimmed = input.trim();

  if (trimmed.length === 0) {
    return Number.NaN;
  }

  const parsed = Number(trimmed);

  if (!Number.isFinite(parsed)) {
    return Number.NaN;
  }

  return fromDisplayValue(parsed, unit);
}
