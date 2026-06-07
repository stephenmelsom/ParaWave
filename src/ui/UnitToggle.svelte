<script lang="ts">
  import type { Unit } from '../core/types';

  interface Props {
    value: Unit;
    onChange: (unit: Unit) => void;
  }

  let { value, onChange }: Props = $props();

  const units: { value: Unit; label: string }[] = [
    { value: 'mm', label: 'mm' },
    { value: 'inch', label: 'inch' },
  ];
</script>

<div
  class="unit-toggle"
  role="group"
  aria-label="Display units"
  aria-describedby="unit-toggle-help"
>
  <p id="unit-toggle-help" class="sr-only">
    Toggle the display unit without changing the stored millimeter design
    values.
  </p>
  {#each units as unit (unit.value)}
    <button
      type="button"
      class:active={value === unit.value}
      aria-pressed={value === unit.value}
      aria-describedby="unit-toggle-help"
      onclick={() => onChange(unit.value)}
    >
      {unit.label}
    </button>
  {/each}
</div>

<style>
  .unit-toggle {
    display: grid;
    grid-template-columns: repeat(2, minmax(64px, 1fr));
    border: 1px solid var(--edge);
    background: var(--panel-2);
  }

  button {
    position: relative;
    min-height: 34px;
    border: 0;
    border-radius: 0;
    color: var(--ink-dim);
    background: transparent;
    cursor: pointer;
    transition:
      color 140ms ease,
      background 140ms ease;
  }

  button + button {
    border-left: 1px solid var(--edge);
  }

  button::after {
    position: absolute;
    right: 8px;
    bottom: 0;
    left: 8px;
    height: 2px;
    background: transparent;
    content: '';
  }

  button.active {
    color: var(--ink);
    background: color-mix(in srgb, var(--panel-2) 82%, var(--gold-glow));
  }

  button.active::after {
    background: var(--gold);
  }

  button:focus-visible {
    outline: 2px solid var(--gold-bright);
    outline-offset: 2px;
  }

  @media (max-width: 819px) {
    button {
      min-height: 44px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    button {
      transition: none;
    }
  }
</style>
