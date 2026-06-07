<script lang="ts">
  interface Props {
    enabled: boolean;
    finCount: number;
    working?: boolean;
    onExport?: () => void;
  }

  let {
    enabled,
    finCount,
    working = false,
    onExport = () => undefined,
  }: Props = $props();

  let paddedCount = $derived(
    String(Math.max(0, finCount)).padStart(
      Math.max(3, String(Math.max(1, finCount)).length),
      '0',
    ),
  );
</script>

<button
  class="export-button"
  type="button"
  disabled={!enabled || working}
  aria-busy={working}
  onclick={() => onExport()}
>
  {#if working}
    <span aria-hidden="true">…packing {paddedCount} slats</span>
    <span class="sr-only">Packing {finCount} slats for export</span>
  {:else}
    <span aria-hidden="true">⎙ EXPORT ZIP</span>
    <span class="sr-only">Export ZIP</span>
  {/if}
</button>

<style>
  .export-button {
    min-width: 164px;
    min-height: 40px;
    border: 1px solid var(--gold);
    color: var(--bg);
    background: var(--gold);
    box-shadow: 0 0 24px var(--gold-glow);
    font-weight: 500;
    cursor: pointer;
  }

  .export-button:hover:not(:disabled) {
    border-color: var(--gold-bright);
    background: var(--gold-bright);
  }

  .export-button:focus-visible {
    outline: 2px solid var(--gold-bright);
    outline-offset: 3px;
  }

  .export-button:disabled {
    border-color: var(--edge);
    color: var(--ink-faint);
    background: var(--panel-2);
    box-shadow: none;
    cursor: not-allowed;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
  }
</style>
