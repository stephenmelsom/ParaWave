import packageMetadata from '../../package.json';

import { cloneDesign } from '../core/clone';
import type { Design, Unit } from '../core/types';

export const MANIFEST_FILENAME = 'parawave-design.json';
export const APP_VERSION = packageMetadata.version;

export interface ParaWaveManifest {
  schemaVersion: 1;
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
  };
  design: Design;
}

export interface CreateManifestOptions {
  appVersion?: string;
  exportedAt?: Date | string;
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

  return {
    schemaVersion: 1,
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
    },
    design: cloneDesign(design),
  };
}

export function serializeDesignManifest(manifest: ParaWaveManifest): string {
  return `${JSON.stringify(manifest, null, 2)}\n`;
}
