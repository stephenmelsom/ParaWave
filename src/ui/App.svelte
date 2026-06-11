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
  let activePanel = $state<'controls' | 'inspector' | 'readouts'>('controls');

  let finCount = $derived(store.readouts.finCount);
  let selectedPath = $derived(store.computeResult?.paths[selectedFinIndex]);
  let selectedDisplay = $derived(
    Math.min(selectedFinIndex + 1, Math.max(finCount, 1)),
  );
  let finPadWidth = $derived(Math.max(3, String(Math.max(finCount, 1)).length));
  let paddedSelected = $derived(
    String(selectedDisplay).padStart(finPadWidth, '0'),
  );
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
    controller?.setSelectedFinIndex(
      store.computeResult ? selectedFinIndex : null,
    );
  });

  $effect(() => {
    if (selectedFinIndex > Math.max(0, finCount - 1)) {
      selectedFinIndex = Math.max(0, finCount - 1);
    }
  });

  $effect(() => {
    const bridgeInstance = bridge;
    const canCompute = store.canComputeGeometry;
    // Read waveRevision to subscribe to theta/phi/cx/cy/decay changes,
    // which cheapValidation (and therefore canComputeGeometry) does not track.
    void store.waveRevision;

    if (!bridgeInstance || !canCompute) {
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
          error instanceof Error
            ? error.message
            : 'Geometry computation failed.';
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
      <h1 id="app-title">ParaWave</h1>
      <span>v1</span>
    </div>

    <UnitToggle
      value={store.design.displayUnit}
      onChange={(unit) => store.setDisplayUnit(unit)}
    />
  </header>

  <p class="screen-note" role="note">
    ParaWave is best viewed on a larger screen. The instrument remains available
    below, but the 3D workspace is intentionally compact here.
  </p>

  <section class="instrument">
    <div class="panel-tabs" role="tablist" aria-label="Instrument panels">
      <span id="panel-tabs-help" class="sr-only">
        Choose which instrument panel appears below the 3D preview.
      </span>
      <button
        id="tab-controls"
        type="button"
        role="tab"
        aria-controls="panel-controls"
        aria-selected={activePanel === 'controls'}
        aria-describedby="panel-tabs-help"
        class:active={activePanel === 'controls'}
        onclick={() => (activePanel = 'controls')}
      >
        Controls
      </button>
      <button
        id="tab-inspector"
        type="button"
        role="tab"
        aria-controls="panel-inspector"
        aria-selected={activePanel === 'inspector'}
        aria-describedby="panel-tabs-help"
        class:active={activePanel === 'inspector'}
        onclick={() => (activePanel = 'inspector')}
      >
        Inspector
      </button>
      <button
        id="tab-readouts"
        type="button"
        role="tab"
        aria-controls="panel-readouts"
        aria-selected={activePanel === 'readouts'}
        aria-describedby="panel-tabs-help"
        class:active={activePanel === 'readouts'}
        onclick={() => (activePanel = 'readouts')}
      >
        Readouts
      </button>
    </div>

    <aside
      class="rail"
      class:panel-active={activePanel === 'controls'}
      aria-label="Control rail"
    >
      <div
        id="panel-controls"
        role="tabpanel"
        aria-labelledby="tab-controls"
        class:panel-active={activePanel === 'controls'}
      >
        <ParamPanel {store} />
      </div>
    </aside>

    <section
      class="viewport-frame"
      class:interference={store.design.wave.kind === 'interference'}
      class:diagonal={store.design.wave.kind === 'diagonal'}
      class:radial={store.design.wave.kind === 'radial'}
      aria-label="3D preview"
      aria-describedby="viewport-hint viewport-status"
    >
      <div class="corner corner-tl"></div>
      <div class="corner corner-tr"></div>
      <div class="corner corner-bl"></div>
      <div class="corner corner-br"></div>

      {#if webglAvailable}
        <div class="viewport-host" bind:this={viewportHost}></div>
        <p
          id="viewport-hint"
          class="orbit-hint"
          class:hidden={!orbitHintVisible}
        >
          drag to orbit · scroll or pinch to zoom
        </p>
      {:else}
        <div class="webgl-message" role="status">
          3D preview needs WebGL. The controls, 2D inspector, readouts,
          validation, and export still work.
        </div>
      {/if}

      <div id="viewport-status" class="status-chip" aria-live="polite">
        {statusText}
      </div>

      <div class="fin-stepper" aria-label="Selected fin">
        <button
          type="button"
          aria-label="Previous fin"
          aria-describedby="viewport-status"
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
          aria-describedby="viewport-status"
          value={paddedSelected}
          onchange={(event) =>
            setFinFromInput((event.currentTarget as HTMLInputElement).value)}
        />
        <button
          type="button"
          aria-label="Next fin"
          aria-describedby="viewport-status"
          disabled={finCount <= 1}
          onclick={() => selectFin(selectedFinIndex + 1)}
        >
          ▸
        </button>
        <span>] / {paddedTotal}</span>
      </div>
    </section>

    <aside
      class="right-panel"
      class:panel-active={activePanel !== 'controls'}
      aria-label="Inspector and readouts"
    >
      <div
        id="panel-inspector"
        role="tabpanel"
        aria-labelledby="tab-inspector"
        class="inspector-panel"
        class:panel-active={activePanel === 'inspector'}
      >
        <Inspector2D
          path={selectedPath}
          design={store.design}
          {selectedFinIndex}
          totalFins={finCount}
        />
      </div>
      <div
        id="panel-readouts"
        role="tabpanel"
        aria-labelledby="tab-readouts"
        class="telemetry-panel"
        class:panel-active={activePanel === 'readouts'}
      >
        <Readouts
          design={store.design}
          readouts={store.readouts}
          actualDepthRange={store.actualDepthRange}
          totalSegments={store.totalSegments}
        />
        <ValidationList validation={store.validation} />
      </div>
    </aside>
  </section>

  <div class="export-dock" aria-label="Export action">
    <ExportButton
      enabled={store.exportEnabled}
      {finCount}
      working={exportWorking}
      onExport={exportDesign}
    />
  </div>
</main>

<style>
  .app-shell {
    position: relative;
    isolation: isolate;
    display: grid;
    min-height: 100vh;
    grid-template-rows: 64px 1fr;
    color: var(--ink);
    background:
      radial-gradient(circle at 53% 38%, var(--gold-glow), transparent 35rem),
      linear-gradient(180deg, var(--bg-2), var(--bg));
  }

  .app-shell::before {
    position: fixed;
    inset: 0;
    z-index: -1;
    background-image:
      radial-gradient(
        circle at 20% 30%,
        var(--grid-strong) 0 1px,
        transparent 1px
      ),
      radial-gradient(
        circle at 76% 62%,
        var(--grid-strong) 0 1px,
        transparent 1px
      );
    background-size:
      19px 23px,
      29px 31px;
    content: '';
    opacity: calc(var(--grain-opacity) * 0.7);
    pointer-events: none;
  }

  .topbar {
    position: relative;
    z-index: 5;
    display: grid;
    grid-template-columns: 360px minmax(180px, 1fr) 320px;
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid var(--edge);
    padding: 0 16px;
    background: color-mix(in srgb, var(--bg) 88%, transparent);
    animation: header-reveal 360ms ease-out both;
  }

  .brand {
    display: inline-flex;
    align-items: baseline;
    gap: 10px;
  }

  h1 {
    margin: 0;
    font: var(--type-wordmark);
    font-family: 'Fraunces', serif;
    letter-spacing: 0;
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

  .export-dock {
    position: absolute;
    top: 12px;
    right: 16px;
    z-index: 6;
    display: flex;
    width: 320px;
    justify-content: flex-end;
  }

  .screen-note {
    display: none;
    margin: 0;
    border-bottom: 1px solid var(--edge);
    padding: 12px 16px;
    color: var(--cool);
    background: var(--panel);
    font-size: 0.74rem;
  }

  .instrument {
    display: grid;
    min-height: 0;
    grid-template-columns: 360px minmax(560px, 1fr) 320px;
    grid-template-areas: 'rail viewport right';
  }

  .panel-tabs {
    display: none;
  }

  .rail,
  .right-panel {
    min-height: 0;
    overflow: auto;
    background: color-mix(in srgb, var(--panel) 92%, transparent);
  }

  .rail {
    grid-area: rail;
    border-right: 1px solid var(--edge);
    padding: 16px;
  }

  .rail :global(details) {
    animation: rail-group-reveal 340ms ease-out both;
  }

  .rail :global(details:nth-of-type(1)) {
    animation-delay: 80ms;
  }

  .rail :global(details:nth-of-type(2)) {
    animation-delay: 120ms;
  }

  .rail :global(details:nth-of-type(3)) {
    animation-delay: 160ms;
  }

  .right-panel {
    grid-area: right;
    display: grid;
    align-content: start;
    gap: 16px;
    border-left: 1px solid var(--edge);
    padding: 16px;
  }

  .telemetry-panel {
    display: grid;
    gap: 16px;
  }

  .viewport-frame {
    position: relative;
    grid-area: viewport;
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
    background-size:
      128px 128px,
      128px 128px,
      32px 32px,
      32px 32px,
      auto,
      auto;
    animation: viewport-reveal 460ms 220ms ease-out both;
  }

  .viewport-frame::after {
    position: absolute;
    inset: 0;
    z-index: 1;
    background-image:
      radial-gradient(
        circle at 20% 30%,
        var(--grid-strong) 0 1px,
        transparent 1px
      ),
      radial-gradient(
        circle at 70% 60%,
        var(--grid-strong) 0 1px,
        transparent 1px
      );
    background-size:
      17px 19px,
      23px 29px;
    content: '';
    opacity: var(--grain-opacity);
    pointer-events: none;
  }

  .viewport-frame:focus-visible {
    outline: 2px solid var(--gold-bright);
    outline-offset: -4px;
  }

  .viewport-host {
    position: absolute;
    inset: 0;
  }

  :global(.parawave-webgl-canvas) {
    display: block;
    width: 100%;
    height: 100%;
    animation: piece-rise 520ms 420ms ease-out both;
    touch-action: none;
  }

  .corner {
    position: absolute;
    z-index: 2;
    width: 34px;
    height: 34px;
    border-color: var(--cool);
    pointer-events: none;
    animation: corner-draw 380ms 300ms ease-out both;
  }

  .corner::before,
  .corner::after {
    position: absolute;
    background: var(--cool);
    content: '';
    opacity: 0.72;
  }

  .corner::before {
    width: 13px;
    height: 1px;
  }

  .corner::after {
    width: 1px;
    height: 13px;
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

  .corner-tl::before,
  .corner-bl::before {
    left: -6px;
  }

  .corner-tr::before,
  .corner-br::before {
    right: -6px;
  }

  .corner-tl::after,
  .corner-tr::after {
    top: -6px;
  }

  .corner-bl::after,
  .corner-br::after {
    bottom: -6px;
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
    transition: opacity 160ms ease;
  }

  .orbit-hint.hidden {
    opacity: 0;
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
    border-radius: 0;
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
    border-radius: 0;
    color: var(--ink);
    background: var(--panel-2);
    cursor: pointer;
    transition:
      border-color 140ms ease,
      color 140ms ease,
      background 140ms ease;
  }

  .fin-stepper button:hover:not(:disabled) {
    border-color: var(--gold);
    color: var(--gold-bright);
    background: color-mix(in srgb, var(--panel-2) 82%, var(--gold-glow));
  }

  .fin-stepper button:disabled {
    color: var(--ink-faint);
    cursor: not-allowed;
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

  @keyframes header-reveal {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes rail-group-reveal {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes viewport-reveal {
    from {
      opacity: 0;
      clip-path: inset(2% 2% 2% 2%);
    }

    to {
      opacity: 1;
      clip-path: inset(0);
    }
  }

  @keyframes corner-draw {
    from {
      opacity: 0;
      transform: scale(0.84);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes piece-rise {
    from {
      opacity: 0;
      transform: translateY(8px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1199px) {
    .topbar {
      grid-template-columns: 300px minmax(160px, 1fr) 280px;
    }

    .instrument {
      grid-template-columns: 304px minmax(420px, 1fr) 284px;
    }

    .export-dock {
      width: 280px;
    }

    .rail,
    .right-panel {
      padding: 12px;
    }
  }

  @media (max-width: 819px) {
    .app-shell {
      grid-template-rows: auto 1fr;
    }

    .topbar {
      grid-template-columns: 1fr;
      gap: 10px;
      padding: 12px;
    }

    .instrument {
      grid-template-columns: 1fr;
      grid-template-areas:
        'viewport'
        'tabs'
        'rail'
        'right';
    }

    .topbar :global(.unit-toggle) {
      justify-self: stretch;
    }

    .export-dock {
      position: static;
      display: grid;
      width: auto;
      border-top: 1px solid var(--edge);
      padding: 12px;
      background: var(--panel);
    }

    .export-dock :global(.export-button) {
      width: 100%;
    }

    .panel-tabs {
      grid-area: tabs;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      border-block: 1px solid var(--edge);
      background: var(--panel-2);
    }

    .panel-tabs button {
      position: relative;
      min-height: 44px;
      border: 0;
      border-right: 1px solid var(--edge);
      color: var(--ink-dim);
      background: transparent;
      cursor: pointer;
    }

    .panel-tabs button:last-child {
      border-right: 0;
    }

    .panel-tabs button::after {
      position: absolute;
      right: 12px;
      bottom: 0;
      left: 12px;
      height: 2px;
      background: transparent;
      content: '';
    }

    .panel-tabs button.active {
      color: var(--ink);
    }

    .panel-tabs button.active::after {
      background: var(--gold);
    }

    .viewport-frame {
      min-height: min(52vh, 500px);
      border-inline: 0;
    }

    .rail,
    .right-panel {
      display: none;
      border: 0;
      border-top: 1px solid var(--edge);
    }

    .rail.panel-active,
    .right-panel.panel-active {
      display: block;
    }

    #panel-controls:not(.panel-active),
    .inspector-panel:not(.panel-active),
    .telemetry-panel:not(.panel-active) {
      display: none;
    }

    .rail :global(button),
    .rail :global(input[type='text']),
    .rail :global(select),
    .right-panel :global(button),
    .right-panel :global(input),
    .panel-tabs button {
      min-height: 44px;
    }
  }

  @media (max-width: 599px) {
    .app-shell {
      grid-template-rows: auto auto 1fr auto;
    }

    .screen-note {
      display: block;
    }

    .panel-tabs {
      display: none;
    }

    .instrument {
      grid-template-areas:
        'viewport'
        'rail'
        'right';
    }

    .viewport-frame {
      min-height: 320px;
    }

    .rail,
    .right-panel {
      display: block;
    }

    #panel-controls,
    .inspector-panel,
    .telemetry-panel {
      display: block;
    }

    .right-panel {
      display: grid;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .topbar,
    .rail :global(details),
    .viewport-frame,
    .corner,
    :global(.parawave-webgl-canvas) {
      animation: none;
    }

    .orbit-hint,
    .fin-stepper button {
      transition: none;
    }
  }

  @media (prefers-reduced-data: reduce) {
    .app-shell::before,
    .viewport-frame::after {
      opacity: 0;
    }
  }
</style>
