import { computeReadouts } from '../core/readouts';
import type {
  ComputeResult,
  Design,
  DiagonalSource,
  DiagonalWaveConfig,
  RadialSource,
  RadialWaveConfig,
  Source,
  Unit,
  WaveConfig,
} from '../core/types';
import { validateDesign } from '../core/validation';

export const MAX_INTERFERENCE_SOURCES = 8;

export const DESIGN_NUMBER_FIELDS = [
  'H',
  'W',
  'D',
  'pMin',
  'slatWidth',
  'gap',
  'fitTolerance',
] as const;

export type DesignNumberField = (typeof DESIGN_NUMBER_FIELDS)[number];
export type DiagonalParam = Exclude<keyof DiagonalWaveConfig, 'kind'>;
export type RadialParam = Exclude<keyof RadialWaveConfig, 'kind'>;
export type DiagonalSourceParam = Exclude<keyof DiagonalSource, 'type' | 'weight'>;
export type RadialSourceParam = Exclude<keyof RadialSource, 'type' | 'weight'>;

function createDiagonalWave(): DiagonalWaveConfig {
  return {
    kind: 'diagonal',
    theta: 30,
    lambda: 300,
    phi: 0,
  };
}

function createRadialWave(design: Pick<Design, 'W' | 'H'>): RadialWaveConfig {
  return {
    kind: 'radial',
    cx: design.W / 2,
    cy: design.H / 2,
    lambda: 200,
    phi: 0,
    decay: 0,
  };
}

function createDiagonalSource(weight = 1): DiagonalSource {
  return {
    type: 'diagonal',
    theta: 30,
    lambda: 300,
    phi: 0,
    weight,
  };
}

function createRadialSource(
  design: Pick<Design, 'W' | 'H'>,
  weight = 1,
): RadialSource {
  return {
    type: 'radial',
    cx: design.W / 2,
    cy: design.H / 2,
    lambda: 200,
    phi: 0,
    decay: 0,
    weight,
  };
}

function createInterferenceWave(
  design: Pick<Design, 'W' | 'H'>,
): WaveConfig {
  return {
    kind: 'interference',
    sources: [createDiagonalSource(), createRadialSource(design)],
  };
}

export function createLandingDesign(): Design {
  const dimensions = {
    H: 600,
    W: 900,
  };

  return {
    ...dimensions,
    D: 60,
    pMin: 5,
    slatWidth: 18,
    gap: 6,
    fitTolerance: 0.05,
    displayUnit: 'mm',
    wave: createInterferenceWave(dimensions),
  };
}

export const LANDING_DESIGN = createLandingDesign();

export class DesignStore {
  design = $state<Design>(createLandingDesign());
  computeResult = $state<ComputeResult | null>(null);

  readouts = $derived(computeReadouts(this.design));
  cheapValidation = $derived(validateDesign(this.design));
  validation = $derived(
    validateDesign(
      this.design,
      this.computeResult
        ? { totalSegments: this.computeResult.totalSegments }
        : {},
    ),
  );
  exportEnabled = $derived(this.cheapValidation.exportEnabled);
  canComputeGeometry = $derived(this.cheapValidation.hardBlocks.length === 0);
  actualDepthRange = $derived(this.computeResult?.observedDepth ?? null);
  totalSegments = $derived(this.computeResult?.totalSegments ?? 0);
  // cheapValidation tracks lambda/weight/kind but not theta/phi/cx/cy/decay.
  // This derived subscribes to those fields so callers can depend on all wave params.
  waveRevision = $derived(this._waveParamKey());

  private _waveParamKey(): string {
    const w = this.design.wave;
    if (w.kind === 'diagonal') {
      return `d|${w.theta}|${w.phi}`;
    }
    if (w.kind === 'radial') {
      return `r|${w.cx}|${w.cy}|${w.phi}|${w.decay}`;
    }
    return `i|${w.sources
      .map((s) =>
        s.type === 'diagonal'
          ? `d|${s.theta}|${s.phi}`
          : `r|${s.cx}|${s.cy}|${s.phi}|${s.decay}`,
      )
      .join(',')}`;
  }

  setDisplayUnit(unit: Unit): void {
    this.design.displayUnit = unit;
  }

  setDesignNumber(field: DesignNumberField, valueMm: number): void {
    this.design[field] = valueMm;
  }

  setWaveKind(kind: WaveConfig['kind']): void {
    if (this.design.wave.kind === kind) {
      return;
    }

    switch (kind) {
      case 'diagonal':
        this.design.wave = createDiagonalWave();
        break;
      case 'radial':
        this.design.wave = createRadialWave(this.design);
        break;
      case 'interference':
        this.design.wave = createInterferenceWave(this.design);
        break;
    }
  }

  setDiagonalParam(field: DiagonalParam, value: number): void {
    const wave = this.design.wave;

    if (wave.kind === 'diagonal') {
      wave[field] = value;
    }
  }

  setRadialParam(field: RadialParam, value: number): void {
    const wave = this.design.wave;

    if (wave.kind === 'radial') {
      wave[field] = value;
    }
  }

  addInterferenceSource(): void {
    const wave = this.design.wave;

    if (
      wave.kind !== 'interference' ||
      wave.sources.length >= MAX_INTERFERENCE_SOURCES
    ) {
      return;
    }

    const nextIndex = wave.sources.length;
    wave.sources.push(
      nextIndex % 2 === 0
        ? createDiagonalSource()
        : createRadialSource(this.design),
    );
  }

  removeInterferenceSource(index: number): void {
    const wave = this.design.wave;

    if (wave.kind !== 'interference' || wave.sources.length <= 1) {
      return;
    }

    wave.sources.splice(index, 1);
  }

  setSourceType(index: number, type: Source['type']): void {
    const wave = this.design.wave;

    if (wave.kind !== 'interference') {
      return;
    }

    const source = wave.sources[index];

    if (!source || source.type === type) {
      return;
    }

    wave.sources[index] =
      type === 'diagonal'
        ? createDiagonalSource(source.weight)
        : createRadialSource(this.design, source.weight);
  }

  setSourceWeight(index: number, value: number): void {
    const source = this.sourceAt(index);

    if (source) {
      source.weight = value;
    }
  }

  setDiagonalSourceParam(
    index: number,
    field: DiagonalSourceParam,
    value: number,
  ): void {
    const source = this.sourceAt(index);

    if (source?.type === 'diagonal') {
      source[field] = value;
    }
  }

  setRadialSourceParam(
    index: number,
    field: RadialSourceParam,
    value: number,
  ): void {
    const source = this.sourceAt(index);

    if (source?.type === 'radial') {
      source[field] = value;
    }
  }

  setComputeResult(result: ComputeResult): void {
    this.computeResult = result;
  }

  snapshot(): Design {
    return $state.snapshot(this.design) as Design;
  }

  reset(): void {
    this.design = createLandingDesign();
    this.computeResult = null;
  }

  private sourceAt(index: number): Source | undefined {
    const wave = this.design.wave;

    return wave.kind === 'interference' ? wave.sources[index] : undefined;
  }
}

export function createDesignStore(): DesignStore {
  return new DesignStore();
}
