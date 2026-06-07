<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  import { computeReadouts } from '../core/readouts';
  import type { ComputeResult, Design } from '../core/types';
  import { createWaveScene, detectWebGLSupport, type WaveSceneController } from '../three';
  import { createGeometryBridge, type GeometryBridge } from '../worker/bridge';
  import Inspector2D from './Inspector2D.svelte';

  const landingDesign: Design = {
    H: 600,
    W: 900,
    D: 90,
    pMin: 6,
    slatWidth: 12,
    gap: 12,
    fitTolerance: 0.05,
    displayUnit: 'mm',
    wave: {
      kind: 'interference',
      sources: [
        {
          type: 'diagonal',
          theta: 30,
          lambda: 300,
          phi: 0,
          weight: 1,
        },
        {
          type: 'radial',
          cx: 450,
          cy: 300,
          lambda: 200,
          phi: 0,
          decay: 0.0015,
          weight: 1,
        },
      ],
    },
  };

  const readouts = computeReadouts(landingDesign);

  let viewportHost: HTMLDivElement;
  let bridge: GeometryBridge | null = null;
  let sceneController: WaveSceneController | null = null;
  let computeResult: ComputeResult | null = null;
  let selectedFinIndex = 0;
  let webglAvailable = true;
  let bridgeFallback = false;
  let computeError = '';

  $: finCount = computeResult?.paths.length ?? readouts.finCount;
  $: selectedPath = computeResult?.paths[selectedFinIndex];
  $: selectedDisplay = Math.min(selectedFinIndex + 1, Math.max(finCount, 1));
  $: paddedSelected = String(selectedDisplay).padStart(Math.max(3, String(Math.max(finCount, 1)).length), '0');
  $: paddedTotal = String(finCount).padStart(Math.max(3, String(Math.max(finCount, 1)).length), '0');
  $: sceneController?.setSelectedFinIndex(computeResult ? selectedFinIndex : null);

  function selectFin(nextIndex: number): void {
    const lastIndex = Math.max(0, finCount - 1);

    selectedFinIndex = Math.min(Math.max(nextIndex, 0), lastIndex);
  }

  function acceptResult(result: ComputeResult): void {
    computeResult = result;
    computeError = '';

    if (selectedFinIndex >= result.paths.length) {
      selectedFinIndex = Math.max(0, result.paths.length - 1);
    }

    if (webglAvailable) {
      sceneController?.setMesh(result.mesh);
    }
  }

  onMount(() => {
    webglAvailable = detectWebGLSupport();

    if (webglAvailable) {
      try {
        sceneController = createWaveScene(viewportHost, {
          onFinSelected: selectFin,
        });
      } catch {
        webglAvailable = false;
      }
    }

    bridge = createGeometryBridge({
      onResult: acceptResult,
      onFallback: () => {
        bridgeFallback = true;
      },
      onError: (error) => {
        computeError = error instanceof Error ? error.message : 'Geometry computation failed.';
      },
    });

    bridge.request(landingDesign, { needMesh: webglAvailable });
  });

  onDestroy(() => {
    bridge?.dispose();
    sceneController?.dispose();
  });
</script>

<main class="app-shell" aria-label="ParaWave wave wall art generator">
  <header class="topbar">
    <div>
      <p class="kicker">wave wall art generator</p>
      <h1>ParaWave</h1>
    </div>
    <p class="status" aria-live="polite">
      {#if computeError}
        {computeError}
      {:else if bridgeFallback}
        Worker unavailable. Using synchronous geometry.
      {:else if computeResult}
        geometry ready
      {:else}
        computing geometry
      {/if}
    </p>
  </header>

  <section class="instrument">
    <aside class="rail" aria-label="Current landing design">
      <p class="panel-label">preview input</p>
      <dl>
        <div>
          <dt>height</dt>
          <dd>{landingDesign.H} mm</dd>
        </div>
        <div>
          <dt>width</dt>
          <dd>{landingDesign.W} mm</dd>
        </div>
        <div>
          <dt>fins</dt>
          <dd>{readouts.finCount}</dd>
        </div>
        <div>
          <dt>wave</dt>
          <dd>interference / 2 sources</dd>
        </div>
      </dl>
    </aside>

    <section class="viewport-frame" aria-label="3D preview">
      <div class="corner corner-tl"></div>
      <div class="corner corner-tr"></div>
      <div class="corner corner-bl"></div>
      <div class="corner corner-br"></div>

      {#if webglAvailable}
        <div class="viewport-host" bind:this={viewportHost}></div>
        <p class="orbit-hint">drag to orbit - scroll to zoom</p>
      {:else}
        <div class="webgl-message" role="status">
          3D preview needs WebGL - your browser does not support it. All design, measurement, and export still work.
        </div>
      {/if}

      <div class="fin-stepper" aria-label="Selected fin">
        <button type="button" on:click={() => selectFin(selectedFinIndex - 1)} disabled={finCount <= 1}>-</button>
        <span>[ {paddedSelected} ] / {paddedTotal}</span>
        <button type="button" on:click={() => selectFin(selectedFinIndex + 1)} disabled={finCount <= 1}>+</button>
      </div>
    </section>

    <aside class="right-panel">
      <Inspector2D
        path={selectedPath}
        design={landingDesign}
        selectedFinIndex={selectedFinIndex}
        totalFins={finCount}
      />
    </aside>
  </section>
</main>

<style>
  .app-shell {
    display: grid;
    min-height: 100vh;
    grid-template-rows: 64px 1fr;
    color: var(--ink);
    background:
      radial-gradient(circle at 52% 42%, var(--gold-glow), transparent 34rem),
      linear-gradient(180deg, var(--bg-2), var(--bg));
  }

  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    border-bottom: 1px solid var(--edge);
    padding: 0 1.25rem;
  }

  .kicker,
  .panel-label,
  .status,
  dt {
    margin: 0;
    color: var(--cool);
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    font-family: 'Fraunces', serif;
    font-size: 1.7rem;
    font-weight: 600;
  }

  .status {
    color: var(--ink-dim);
    text-align: right;
  }

  .instrument {
    display: grid;
    min-height: 0;
    grid-template-columns: minmax(260px, 320px) minmax(420px, 1fr) minmax(280px, 340px);
  }

  .rail,
  .right-panel {
    min-height: 0;
    border-right: 1px solid var(--edge);
    background: color-mix(in srgb, var(--panel) 84%, transparent);
    padding: 1rem;
  }

  .right-panel {
    border-right: 0;
    border-left: 1px solid var(--edge);
  }

  dl {
    display: grid;
    gap: 0.75rem;
    margin: 1rem 0 0;
  }

  dl div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    border-top: 1px solid var(--edge);
    padding-top: 0.6rem;
  }

  dd {
    margin: 0;
    color: var(--ink);
    font-variant-numeric: tabular-nums;
    text-align: right;
  }

  .viewport-frame {
    position: relative;
    overflow: hidden;
    min-height: 0;
    background:
      linear-gradient(var(--grid) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid) 1px, transparent 1px),
      radial-gradient(circle at 50% 52%, var(--gold-glow), transparent 28rem),
      var(--bg-2);
    background-size: 32px 32px, 32px 32px, auto, auto;
  }

  .viewport-host {
    position: absolute;
    inset: 0;
  }

  :global(.parawave-webgl-canvas) {
    display: block;
    width: 100%;
    height: 100%;
    touch-action: none;
  }

  .corner {
    position: absolute;
    z-index: 2;
    width: 34px;
    height: 34px;
    border-color: var(--cool);
    pointer-events: none;
  }

  .corner-tl {
    top: 14px;
    left: 14px;
    border-top: 1px solid;
    border-left: 1px solid;
  }

  .corner-tr {
    top: 14px;
    right: 14px;
    border-top: 1px solid;
    border-right: 1px solid;
  }

  .corner-bl {
    bottom: 14px;
    left: 14px;
    border-bottom: 1px solid;
    border-left: 1px solid;
  }

  .corner-br {
    right: 14px;
    bottom: 14px;
    border-right: 1px solid;
    border-bottom: 1px solid;
  }

  .orbit-hint,
  .webgl-message,
  .fin-stepper {
    position: absolute;
    z-index: 3;
    color: var(--ink-dim);
    font-size: 0.72rem;
  }

  .orbit-hint {
    right: 1rem;
    bottom: 1rem;
    margin: 0;
  }

  .webgl-message {
    inset: 0;
    display: grid;
    place-items: center;
    padding: 2rem;
    color: var(--cool);
    text-align: center;
  }

  .fin-stepper {
    bottom: 1rem;
    left: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    border: 1px solid var(--edge);
    background: color-mix(in srgb, var(--bg) 82%, transparent);
    padding: 0.45rem 0.6rem;
    color: var(--gold-bright);
    font-variant-numeric: tabular-nums;
  }

  button {
    display: grid;
    width: 28px;
    height: 28px;
    place-items: center;
    border: 1px solid var(--edge);
    color: var(--ink);
    background: var(--panel-2);
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }

  @media (max-width: 920px) {
    .instrument {
      grid-template-columns: 1fr;
      grid-template-rows: auto minmax(420px, 1fr) auto;
    }

    .rail,
    .right-panel {
      border: 0;
      border-bottom: 1px solid var(--edge);
    }
  }
</style>
