import type { WaveConfig } from '../types';
import { createDiagonalField } from './diagonal';
import { createInterferenceField } from './interference';
import { createRadialField } from './radial';
import type { WaveField } from './types';

export function createWaveField(config: WaveConfig): WaveField {
  switch (config.kind) {
    case 'diagonal':
      return createDiagonalField(config);
    case 'radial':
      return createRadialField(config);
    case 'interference':
      return createInterferenceField(config.sources);
  }
}
