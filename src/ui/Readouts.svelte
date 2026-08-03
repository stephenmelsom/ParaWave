<script lang="ts">
  import type { NestResult } from '../core/nest/pack';
  import type { Design, SheetConfig } from '../core/types';
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
    sheet: SheetConfig;
    nest: NestResult | null;
  }

  let {
    design,
    readouts,
    actualDepthRange,
    totalSegments,
    sheet,
    nest,
  }: Props = $props();

  let sheetCountKnown = $derived(sheet.enabled && nest !== null);
  let stockSummary = $derived(
    !sheet.enabled
      ? 'nesting off'
      : nest
        ? String(nest.sheetCount)
        : 'computing',
  );

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

  <div class="hero-readout">
    <span class="label">stock sheets</span>
    <strong class:pending={!sheetCountKnown}>{stockSummary}</strong>
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
    {#if sheet.enabled}
      <div>
        <dt>slats per sheet</dt>
        <dd>
          {nest && nest.sheetCount > 0
            ? nest.sheets.map((entry) => entry.placements.length).join(' · ')
            : '—'}
        </dd>
      </div>
      <div>
        <dt>rows per sheet</dt>
        <dd>{nest ? nest.rowsPerSheet : '—'}</dd>
      </div>
      <div>
        <dt>stock utilisation</dt>
        <dd>{nest ? `${(nest.utilization * 100).toFixed(1)}%` : '—'}</dd>
      </div>
      {#if nest && nest.unplaced.length > 0}
        <div>
          <dt>unnested slats</dt>
          <dd>{nest.unplaced.length}</dd>
        </div>
      {/if}
    {/if}
  </dl>
</section>

<style>
  .readouts {
    display: grid;
    min-width: 0;
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

  /* The numeral size is set for a count; a word at that size dominates the panel. */
  .hero-readout strong.pending {
    color: var(--ink-faint);
    font-size: 0.74rem;
    letter-spacing: 0.04em;
  }

  dl {
    display: grid;
    gap: 8px;
    margin: 0;
  }

  /* Flex, not grid. A two-track grid has to choose between a value track that
     floors at min-content (widening the panel past its fixed column) and one
     that can be squeezed to nothing — and a squeezed track sets `42.4%` one
     glyph per line. Flex wrapping has no such trade-off: the value sits beside
     its label while it fits and drops to its own full-width line when it does
     not. */
  dl > div {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 2px 8px;
  }

  dt {
    min-width: 0;
    overflow-wrap: break-word;
  }

  dd {
    min-width: 0;
    margin: 0;
    color: var(--ink);
    font-size: 0.74rem;
    font-variant-numeric: tabular-nums;
    text-align: right;
    /* Break between the parts of a compound value, never inside one: `anywhere`
       would split `42.4%` and `13 · 13 · 11` character by character. */
    overflow-wrap: break-word;
  }

  .actual-depth {
    row-gap: 7px;
  }

  .depth-bar {
    /* Always its own full-width line under the row it gauges. */
    flex: 0 0 100%;
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
