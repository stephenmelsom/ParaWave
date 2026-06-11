<script lang="ts">
  import type { Design, FittedPath } from '../core/types';
  import { slatPathData } from '../core/svg';
  import {
    fittedPathDepthRange,
    formatMeasurement,
    makeTicks,
  } from './inspector';

  export let path: FittedPath | undefined = undefined;
  export let design: Pick<Design, 'H' | 'D' | 'displayUnit'> = {
    H: 1,
    D: 1,
    displayUnit: 'mm',
  };
  export let selectedFinIndex = 0;
  export let totalFins = 0;

  const svgWidth = 320;
  const svgHeight = 360;
  const padLeft = 50;
  const padRight = 24;
  const padTop = 36;
  const padBottom = 52;
  const originX = padLeft;
  const plotWidth = svgWidth - padLeft - padRight;
  const plotHeight = svgHeight - padTop - padBottom;
  const originY = padTop + plotHeight;
  const gradientId = 'inspector-wave-fill';

  $: safeHeight = Math.max(1, design.H);
  $: safeDepth = Math.max(1, design.D);
  $: scaleX = plotWidth / safeDepth;
  $: scaleY = plotHeight / safeHeight;
  $: pathData = path ? slatPathData(path) : '';
  $: depthRange = path ? fittedPathDepthRange(path) : { min: 0, max: 0 };
  $: depthTicks = makeTicks(safeDepth, 4);
  $: heightTicks = makeTicks(safeHeight, 4);
  $: firstSegment = path?.segments[0];
  $: lastSegment = path?.segments[path.segments.length - 1];
  $: lowerDepth = firstSegment?.p0.z ?? 0;
  $: upperDepth = lastSegment?.p3.z ?? 0;
  $: padWidth = Math.max(3, String(Math.max(totalFins, 1)).length);
  $: selectedLabel = String(Math.min(selectedFinIndex + 1, Math.max(totalFins, 1))).padStart(padWidth, '0');
  $: totalLabel = String(Math.max(totalFins, 0)).padStart(padWidth, '0');
  $: centerlineLabel = path ? formatMeasurement(path.xCenter, design.displayUnit) : '-';
  $: rangeLabel = `${formatMeasurement(depthRange.min, design.displayUnit)} - ${formatMeasurement(depthRange.max, design.displayUnit)}`;
</script>

<section class="inspector" aria-label="2D slat inspector">
  <header class="inspector-header">
    <div>
      <p class="eyebrow">2D slat inspector</p>
      <h2>fin {selectedLabel} / {totalLabel}</h2>
    </div>
    <dl>
      <div>
        <dt>x center</dt>
        <dd>{centerlineLabel}</dd>
      </div>
      <div>
        <dt>depth used</dt>
        <dd>{rangeLabel}</dd>
      </div>
    </dl>
  </header>

  <div class="drawing">
    {#if path}
      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} role="img" aria-label={`Measured profile for fin ${selectedLabel}`}>
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stop-color="var(--wave-shadow)" stop-opacity="0.18" />
            <stop offset="58%" stop-color="var(--wave-mid)" stop-opacity="0.34" />
            <stop offset="100%" stop-color="var(--wave-highlight)" stop-opacity="0.46" />
          </linearGradient>
        </defs>

        <line class="axis axis-depth" x1={originX} y1={originY} x2={originX + plotWidth} y2={originY} />
        <line class="axis axis-height" x1={originX} y1={originY} x2={originX} y2={originY - plotHeight} />

        {#each depthTicks as tick (tick)}
          <g class="tick">
            <line x1={originX + tick * scaleX} y1={originY} x2={originX + tick * scaleX} y2={originY + 6} />
            <text x={originX + tick * scaleX} y={originY + 20}>
              {formatMeasurement(tick, design.displayUnit, {
                decimals: design.displayUnit === 'mm' ? 1 : 2,
                includeUnit: false,
                trimTrailingZeros: true,
              })}
            </text>
          </g>
        {/each}

        {#each heightTicks as tick (tick)}
          <g class="tick tick-height">
            <line x1={originX - 6} y1={originY - tick * scaleY} x2={originX} y2={originY - tick * scaleY} />
            <text x={originX - 10} y={originY - tick * scaleY + 4}>
              {formatMeasurement(tick, design.displayUnit, {
                decimals: design.displayUnit === 'mm' ? 0 : 2,
                includeUnit: false,
                trimTrailingZeros: true,
              })}
            </text>
          </g>
        {/each}

        <g transform={`translate(${originX} ${originY}) scale(${scaleX} ${-scaleY})`}>
          <path class="profile-fill" d={pathData} />
          <line class="datum" x1="0" y1="0" x2="0" y2={safeHeight} />
          <line class="cap" x1="0" y1="0" x2={lowerDepth} y2="0" />
          <line class="cap" x1="0" y1={safeHeight} x2={upperDepth} y2={safeHeight} />
          <path class="profile-stroke" d={pathData} />
        </g>
      </svg>
    {:else}
      <div class="empty">Waiting for fitted path.</div>
    {/if}
  </div>
</section>

<style>
  .inspector {
    display: grid;
    min-height: 0;
    gap: 1rem;
    color: var(--ink);
  }

  .inspector-header {
    display: grid;
    gap: 0.75rem;
  }

  .eyebrow,
  dt {
    margin: 0;
    color: var(--cool);
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0.15rem 0 0;
    font-family: 'Fraunces', serif;
    font-size: 1.35rem;
    font-weight: 500;
  }

  dl {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.55rem;
    margin: 0;
  }

  dl div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    border-top: 1px solid var(--edge);
    padding-top: 0.45rem;
  }

  dd {
    margin: 0;
    color: var(--gold-bright);
    font-variant-numeric: tabular-nums;
  }

  .drawing {
    min-height: 0;
    background:
      linear-gradient(var(--grid) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid) 1px, transparent 1px);
    background-size: 24px 24px;
    background-color: var(--panel-2);
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
    min-height: 320px;
  }

  .axis,
  .tick line,
  .datum,
  .cap {
    stroke: var(--cool);
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
  }

  .axis {
    opacity: 0.82;
  }

  .tick line {
    opacity: 0.64;
  }

  .tick text {
    fill: var(--ink-dim);
    font-size: 9px;
    text-anchor: middle;
    font-variant-numeric: tabular-nums;
  }

  .tick-height text {
    text-anchor: end;
  }

  .datum {
    opacity: 0.95;
  }

  .cap {
    opacity: 0.62;
  }

  .profile-fill {
    fill: url('#inspector-wave-fill');
    stroke: none;
  }

  .profile-stroke {
    fill: none;
    stroke: var(--gold);
    stroke-width: 1.6;
    vector-effect: non-scaling-stroke;
  }

  .empty {
    display: grid;
    min-height: 320px;
    place-items: center;
    color: var(--cool);
    font-size: 0.8rem;
  }
</style>
