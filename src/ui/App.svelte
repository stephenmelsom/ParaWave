<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  import { slatSvgs } from '../core/svg';
  import type { ComputeResult } from '../core/types';
  import {
    createDesignManifest,
    createExportZip,
    downloadExportZip,
  } from '../export';
  import { createDesignStore } from '../state/design.svelte.ts';
  import {
    createWaveScene,
    detectWebGLSupport,
    type WaveSceneController,
  } from '../three';
  import {
    computeExportGeometry,
    createGeometryBridge,
    type GeometryBridge,
  } from '../worker/bridge';
  import ExportButton from './ExportButton.svelte';
  import Inspector2D from './Inspector2D.svelte';
  import ParamPanel from './ParamPanel.svelte';
  import Readouts from './Readouts.svelte';
  import UnitToggle from './UnitToggle.svelte';
  import ValidationList from './ValidationList.svelte';

  const store = createDesignStore();

  let viewportHost = $state<HTMLDivElement | null>(null);
  let bridge = $state<GeometryBridge | null>(null);
  let sceneController = $state<WaveSceneController | null>(null);
  let selectedFinIndex = $state(0);
  let webglAvailable = $state(true);
  let bridgeFallback = $state(false);
  let computeError = $state('');
  let exportWorking = $state(false);
  let orbitHintVisible = $state(true);

  let finCount = $derived(store.readouts.finCount);
  let selectedPath = $derived(store.computeResult?.paths[selectedFinIndex]);
  let selectedDisplay = $derived(
    Math.min(selectedFinIndex + 1, Math.max(finCount, 1)),
  );
  let finPadWidth = $derived(Math.max(3, String(Math.max(finCount, 1)).length));
  let paddedSelected = $derived(String(selectedDisplay).padStart(finPadWidth, '0'));
  let paddedTotal = $derived(String(finCount).padStart(finPadWidth, '0'));
  let statusText = $derived.by(() => {
    if (computeError) {
      return computeError;
    }

    if (!store.canComputeGeometry) {
      return 'geometry paused until hard blocks clear';
    }

    if (bridgeFallback) {
      return 'Worker unavailable. Using synchronous geometry.';
    }

    if (store.computeResult) {
      return 'geometry ready';
    }

    return 'computing geometry';
  });

  function selectFin(nextIndex: number): void {
    const lastIndex = Math.max(0, finCount - 1);
    selectedFinIndex = Math.min(Math.max(nextIndex, 0), lastIndex);
  }

  function setFinFromInput(raw: string): void {
    const parsed = Number.parseInt(raw, 10);

    if (Number.isFinite(parsed)) {
      selectFin(parsed - 1);
    }
  }

  function acceptResult(result: ComputeResult): void {
    store.setComputeResult(result);
    computeError = '';

    if (selectedFinIndex >= result.paths.length) {
      selectedFinIndex = Math.max(0, result.paths.length - 1);
    }

    if (webglAvailable) {
      sceneController?.setMesh(result.mesh);
    }
  }

  async function exportDesign(): Promise<void> {
    if (exportWorking || !store.exportEnabled) {
      return;
    }

    exportWorking = true;
    computeError = '';

    try {
      const design = store.snapshot();
      const result = await computeExportGeometry(design);
      const manifest = createDesignManifest(design, result.paths.length);
      const archive = await createExportZip({
        manifest,
        slatSvgs: slatSvgs(result.paths, design),
      });

      downloadExportZip(archive);
    } catch (error) {
      computeError =
        error instanceof Error ? error.message : 'Export generation failed.';
    } finally {
      exportWorking = false;
    }
  }

  $effect(() => {
    const controller = sceneController;
    controller?.setSelectedFinIndex(store.computeResult ? selectedFinIndex : null);
  });

  $effect(() => {
    if (selectedFinIndex > Math.max(0, finCount - 1)) {
      selectedFinIndex = Math.max(0, finCount - 1);
    }
  });

  $effect(() => {
    const bridgeInstance = bridge;

    if (!bridgeInstance || !store.canComputeGeometry) {
      return;
    }

    bridgeInstance.request(store.snapshot(), { needMesh: webglAvailable });
  });

  onMount(() => {
    webglAvailable = detectWebGLSupport();

    if (webglAvailable && viewportHost) {
      try {
        sceneController = createWaveScene(viewportHost, {
          onFinSelected: selectFin,
          onUserInteraction: () => {
            orbitHintVisible = false;
          },
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
        computeError =
          error instanceof Error ? error.message : 'Geometry computation failed.';
      },
    });
  });

  onDestroy(() => {
    bridge?.dispose();
    sceneController?.dispose();
  });
</script>

<main class="app-shell" aria-label="ParaWave wave wall art generator">
  <header class="topbar">
    <div class="brand">
      <h1>ParaWave</h1>
      <span>v1</span>
    </div>

    <UnitToggle
      value={store.design.displayUnit}
      onChange={(unit) => store.setDisplayUnit(unit)}
    />

    <ExportButton
      enabled={store.exportEnabled}
      finCount={finCount}
      working={exportWorking}
      onExport={exportDesign}
    />
  </header>

  <section class="instrument">
    <aside class="rail" aria-label="Control rail">
      <ParamPanel {store} />
    </aside>

    <section
      class="viewport-frame"
      class:interference={store.design.wave.kind === 'interference'}
      class:diagonal={store.design.wave.kind === 'diagonal'}
      class:radial={store.design.wave.kind === 'radial'}
      aria-label="3D preview"
    >
      <div class="corner corner-tl"></div>
      <div class="corner corner-tr"></div>
      <div class="corner corner-bl"></div>
      <div class="corner corner-br"></div>

      {#if webglAvailable}
        <div class="viewport-host" bind:this={viewportHost}></div>
        {#if orbitHintVisible}
          <p class="orbit-hint">drag to orbit · scroll to zoom</p>
        {/if}
      {:else}
        <div class="webgl-message" role="status">
          3D preview needs WebGL. The controls, 2D inspector, readouts, validation, and export still work.
        </div>
      {/if}

      <div class="status-chip" aria-live="polite">{statusText}</div>

      <div class="fin-stepper" aria-label="Selected fin">
        <button
          type="button"
          aria-label="Previous fin"
          disabled={finCount <= 1}
          onclick={() => selectFin(selectedFinIndex - 1)}
        >
          ‹
        </button>
        <span>[</span>
        <input
          type="text"
          inputmode="numeric"
          aria-label="Selected fin index"
          value={paddedSelected}
          onchange={(event) =>
            setFinFromInput((event.currentTarget as HTMLInputElement).value)}
        />
        <button
          type="button"
          aria-label="Next fin"
          disabled={finCount <= 1}
          onclick={() => selectFin(selectedFinIndex + 1)}
        >
          ▸
        </button>
        <span>] / {paddedTotal}</span>
      </div>
    </section>

    <aside class="right-panel" aria-label="Inspector and readouts">
      <Inspector2D
        path={selectedPath}
        design={store.design}
        selectedFinIndex={selectedFinIndex}
        totalFins={finCount}
      />
      <Readouts
        design={store.design}
        readouts={store.readouts}
        actualDepthRange={store.actualDepthRange}
        totalSegments={store.totalSegments}
      />
      <ValidationList validation={store.validation} />
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
    display: grid;
    grid-template-columns: 360px minmax(180px, 1fr) 320px;
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid var(--edge);
    padding: 0 16px;
  }

  .brand {
    display: inline-flex;
    align-items: baseline;
    gap: 10px;
  }

  h1 {
    margin: 0;
    font-family: 'Fraunces', serif;
    font-size: 1.9rem;
    font-weight: 600;
  }

  .brand span {
    border: 1px solid var(--edge);
    padding: 2px 6px;
    color: var(--cool);
    font-size: 0.66rem;
  }

  .topbar :global(.unit-toggle) {
    justify-self: center;
  }

  .topbar :global(.export-button) {
    justify-self: end;
  }

  .instrument {
    display: grid;
    min-height: 0;
    grid-template-columns: 360px minmax(560px, 1fr) 320px;
  }

  .rail,
  .right-panel {
    min-height: 0;
    overflow: auto;
    background: color-mix(in srgb, var(--panel) 92%, transparent);
  }

  .rail {
    border-right: 1px solid var(--edge);
    padding: 16px;
  }

  .right-panel {
    display: grid;
    align-content: start;
    gap: 16px;
    border-left: 1px solid var(--edge);
    padding: 16px;
  }

  .viewport-frame {
    position: relative;
    overflow: hidden;
    min-height: 0;
    border-inline: 1px solid var(--edge);
    background:
      linear-gradient(var(--grid-strong) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid-strong) 1px, transparent 1px),
      linear-gradient(var(--grid) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid) 1px, transparent 1px),
      radial-gradient(circle at 50% 52%, var(--gold-glow), transparent 28rem),
      var(--bg-2);
    background-size: 128px 128px, 128px 128px, 32px 32px, 32px 32px, auto, auto;
  }

  .viewport-frame::after {
    position: absolute;
    inset: 0;
    z-index: 1;
    background-image:
      radial-gradient(circle at 20% 30%, var(--grid-strong) 0 1px, transparent 1px),
      radial-gradient(circle at 70% 60%, var(--grid-strong) 0 1px, transparent 1px);
    background-size: 17px 19px, 23px 29px;
    content: '';
    opacity: var(--grain-opacity);
    pointer-events: none;
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
  .fin-stepper,
  .status-chip {
    position: absolute;
    z-index: 3;
    color: var(--ink-dim);
    font-size: 0.72rem;
  }

  .orbit-hint {
    right: 16px;
    bottom: 16px;
    margin: 0;
  }

  .status-chip {
    top: 16px;
    left: 64px;
    border: 1px solid var(--edge);
    background: color-mix(in srgb, var(--bg) 82%, transparent);
    padding: 7px 9px;
    color: var(--cool);
  }

  .webgl-message {
    inset: 0;
    display: grid;
    place-items: center;
    padding: 32px;
    color: var(--cool);
    text-align: center;
  }

  .fin-stepper {
    bottom: 16px;
    left: 16px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid var(--edge);
    background: color-mix(in srgb, var(--bg) 82%, transparent);
    padding: 6px 8px;
    color: var(--gold-bright);
    font-variant-numeric: tabular-nums;
  }

  .fin-stepper input {
    width: 42px;
    border: 1px solid var(--edge);
    color: inherit;
    background: var(--panel-2);
    text-align: center;
    font-variant-numeric: tabular-nums;
  }

  .fin-stepper button {
    display: grid;
    width: 28px;
    height: 28px;
    place-items: center;
    border: 1px solid var(--edge);
    color: var(--ink);
    background: var(--panel-2);
    cursor: pointer;
  }

  .fin-stepper button:disabled {
    color: var(--ink-faint);
    cursor: not-allowed;
  }

  .fin-stepper input:focus-visible,
  .fin-stepper button:focus-visible {
    outline: 2px solid var(--gold-bright);
    outline-offset: 2px;
  }

  .diagonal .fin-stepper {
    border-color: var(--cool);
  }

  .radial .fin-stepper {
    border-color: var(--gold-deep);
  }

  .interference .fin-stepper {
    border-color: var(--gold);
  }

  @media (max-width: 1199px) {
    .topbar {
      grid-template-columns: 280px minmax(160px, 1fr) 260px;
    }

    .instrument {
      grid-template-columns: 300px minmax(420px, 1fr) 280px;
    }
  }

  @media (max-width: 819px) {
    .app-shell {
      grid-template-rows: auto 1fr;
    }

    .topbar,
    .instrument {
      grid-template-columns: 1fr;
    }

    .topbar {
      gap: 10px;
      padding: 12px;
    }

    .topbar :global(.unit-toggle),
    .topbar :global(.export-button) {
      justify-self: stretch;
    }

    .viewport-frame {
      min-height: 420px;
      order: -1;
    }

    .rail,
    .right-panel {
      border: 0;
      border-top: 1px solid var(--edge);
    }
  }
</style>
