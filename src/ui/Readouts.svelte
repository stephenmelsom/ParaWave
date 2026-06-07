<script lang="ts">
  import type { Design } from '../core/types';
  import type { ReadoutValues } from '../core/readouts';
  import { formatMeasurement } from './inspector';

  interface DepthRange {
    min: number;
    max: number;
  }

  interface Props {
    design: Design;
    readouts: ReadoutValues;
    actualDepthRange: DepthRange | null;
    totalSegments: number;
  }

  let { design, readouts, actualDepthRange, totalSegments }: Props = $props();

  let declaredSpan = $derived(
    Math.max(
      Number.EPSILON,
      readouts.declaredDepthRange.max - readouts.declaredDepthRange.min,
    ),
  );
  let usedStart = $derived(
    actualDepthRange
      ? Math.min(
          100,
          Math.max(
            0,
            ((actualDepthRange.min - readouts.declaredDepthRange.min) /
              declaredSpan) *
              100,
          ),
        )
      : 0,
  );
  let usedWidth = $derived(
    actualDepthRange
      ? Math.min(
          100 - usedStart,
          Math.max(
            0,
            ((actualDepthRange.max - actualDepthRange.min) / declaredSpan) *
              100,
          ),
        )
      : 0,
  );

  function measurement(value: number): string {
    return formatMeasurement(value, design.displayUnit, {
      decimals: design.displayUnit === 'mm' ? 2 : 3,
      trimTrailingZeros: true,
    });
  }

  function rangeLabel(range: DepthRange): string {
    return `${measurement(range.min)} – ${measurement(range.max)}`;
  }
</script>

<section
  class="readouts"
  aria-label="Design readouts"
  aria-live="polite"
  aria-atomic="false"
>
  <header>
    <p>readouts</p>
    <span>{totalSegments.toLocaleString()} segments</span>
  </header>

  <div class="hero-readout">
    <span class="label">fin count N</span>
    <strong>{readouts.finCount}</strong>
  </div>

  <dl>
    <div>
      <dt>spanned width</dt>
      <dd>{measurement(readouts.spannedWidth)}</dd>
    </div>
    <div>
      <dt>end margin</dt>
      <dd>{measurement(readouts.endMargin)}</dd>
    </div>
    <div>
      <dt>stock thickness</dt>
      <dd>{measurement(readouts.stockThickness)}</dd>
    </div>
    <div>
      <dt>declared depth</dt>
      <dd>{rangeLabel(readouts.declaredDepthRange)}</dd>
    </div>
    <div class="actual-depth">
      <dt>actual depth used</dt>
      <dd>
        {actualDepthRange ? rangeLabel(actualDepthRange) : 'computing'}
      </dd>
      <div class="depth-bar" aria-hidden="true">
        <span style={`--used-start:${usedStart}%; --used-width:${usedWidth}%`}
        ></span>
      </div>
    </div>
    <div>
      <dt>total footprint</dt>
      <dd>
        {measurement(readouts.totalFootprint.width)} ×
        {measurement(readouts.totalFootprint.height)} ×
        {measurement(readouts.totalFootprint.depth)}
      </dd>
    </div>
  </dl>
</section>

<style>
  .readouts {
    display: grid;
    gap: 12px;
    border-top: 1px solid var(--edge);
    padding-top: 14px;
  }

  header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
  }

  header p,
  header span,
  .label,
  dt {
    margin: 0;
    color: var(--cool);
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  header span {
    color: var(--ink-faint);
    letter-spacing: 0;
  }

  .hero-readout {
    display: flex;
    align-items: end;
    justify-content: space-between;
    border-block: 1px solid var(--edge);
    padding: 10px 0;
  }

  .hero-readout strong {
    color: var(--gold-bright);
    font: var(--type-readout-xl);
    font-weight: 500;
    font-variant-numeric: tabular-nums;
  }

  dl {
    display: grid;
    gap: 8px;
    margin: 0;
  }

  dl > div {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: baseline;
    gap: 8px;
  }

  dd {
    margin: 0;
    color: var(--ink);
    font-size: 0.74rem;
    font-variant-numeric: tabular-nums;
    text-align: right;
  }

  .actual-depth {
    row-gap: 7px;
  }

  .depth-bar {
    grid-column: 1 / -1;
    position: relative;
    height: 4px;
    background: var(--cool-dim);
  }

  .depth-bar span {
    position: absolute;
    top: 0;
    bottom: 0;
    left: var(--used-start);
    width: var(--used-width);
    background: var(--gold);
  }
</style>
