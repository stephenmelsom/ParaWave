<script lang="ts">
  import type { ValidationResult } from '../core/validation';

  interface Props {
    validation: ValidationResult;
  }

  let { validation }: Props = $props();
</script>

<section
  class="validation"
  aria-label="Validation"
  aria-live="polite"
  aria-atomic="false"
>
  <header>
    <p>validation</p>
    <span
      >{validation.hardBlocks.length} blocks / {validation.warnings.length} warnings</span
    >
  </header>

  {#if validation.issues.length === 0}
    <p class="ready">Ready to export.</p>
  {:else}
    <ul>
      {#each validation.hardBlocks as issue (issue.code + issue.field)}
        <li class="issue hard">
          <span class="glyph" aria-hidden="true">✕</span>
          <span>{issue.message}</span>
          <span class="field">{issue.field}</span>
        </li>
      {/each}
      {#each validation.warnings as issue (issue.code + issue.field)}
        <li class="issue warning">
          <span class="glyph" aria-hidden="true">⚠</span>
          <span>{issue.message}</span>
          <span class="field">{issue.field}</span>
        </li>
      {/each}
    </ul>
  {/if}
</section>

<style>
  .validation {
    display: grid;
    gap: 10px;
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
  header span {
    margin: 0;
    color: var(--cool);
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  header span {
    color: var(--ink-faint);
    font-size: 0.62rem;
    letter-spacing: 0;
  }

  ul {
    display: grid;
    gap: 6px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .issue {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 4px 8px;
    padding: 9px 10px;
    font-size: 0.72rem;
    line-height: 1.45;
  }

  .hard {
    color: var(--danger);
    background: var(--danger-bg);
  }

  .warning {
    color: var(--warn);
    background: var(--warn-bg);
  }

  .glyph {
    grid-row: span 2;
  }

  .field {
    color: currentColor;
    font-size: 0.62rem;
    opacity: 0.76;
  }

  .ready {
    margin: 0;
    color: var(--ok);
    font-size: 0.76rem;
  }
</style>
