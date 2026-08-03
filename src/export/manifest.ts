import packageMetadata from '../../package.json';

import { cloneDesign } from '../core/clone';
import type { NestResult } from '../core/nest/pack';
import type { Design, MachineConfig, SheetConfig, Unit } from '../core/types';

export const MANIFEST_FILENAME = 'parawave-design.json';
export const APP_VERSION = packageMetadata.version;

export interface ManifestNesting {
  sheetCount: number;
  rowsPerSheet: number;
  placedCount: number;
  unplacedFinIndices: number[];
  utilization: number;
}

export interface ParaWaveManifest {
  schemaVersion: 3;
  app: {
    name: 'ParaWave';
    version: string;
  };
  exportedAt: string;
  units: {
    geometry: 'mm';
    display: Unit;
    angles: 'degrees';
  };
  computed: {
    finCount: number;
    /** Null when nesting was disabled for this export. */
    nesting: ManifestNesting | null;
  };
  /**
   * Machine and stock configuration. A sibling of `design`, not a member of it —
   * the same design can be cut on different machines.
   */
  stock: SheetConfig | null;
  /**
   * Cutting parameters the g-code was generated with. Null when g-code was not
   * exported. Also a sibling of `design` — same design, different machines.
   */
  machine: MachineConfig | null;
  design: Design;
}

export interface CreateManifestOptions {
  appVersion?: string;
  exportedAt?: Date | string;
  stock?: SheetConfig | null;
  machine?: MachineConfig | null;
  nest?: NestResult | null;
}

function exportTimestamp(value: Date | string | undefined): string {
  if (value instanceof Date) {
    return value.toISOString();
  }

  return value ?? new Date().toISOString();
}

export function createDesignManifest(
  design: Design,
  finCount: number,
  options: CreateManifestOptions = {},
): ParaWaveManifest {
  if (!Number.isInteger(finCount) || finCount < 0) {
    throw new RangeError('Manifest fin count must be a non-negative integer.');
  }

  const nest = options.nest;

  return {
    schemaVersion: 3,
    app: {
      name: 'ParaWave',
      version: options.appVersion ?? APP_VERSION,
    },
    exportedAt: exportTimestamp(options.exportedAt),
    units: {
      geometry: 'mm',
      display: design.displayUnit,
      angles: 'degrees',
    },
    computed: {
      finCount,
      nesting: nest
        ? {
            sheetCount: nest.sheetCount,
            rowsPerSheet: nest.rowsPerSheet,
            placedCount: nest.placedCount,
            unplacedFinIndices: [...nest.unplaced],
            utilization: nest.utilization,
          }
        : null,
    },
    stock: options.stock ? { ...options.stock } : null,
    machine: options.machine ? { ...options.machine } : null,
    design: cloneDesign(design),
  };
}

export function serializeDesignManifest(manifest: ParaWaveManifest): string {
  return `${JSON.stringify(manifest, null, 2)}\n`;
}
