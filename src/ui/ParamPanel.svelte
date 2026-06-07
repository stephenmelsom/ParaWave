<script lang="ts">
  import { formatForDisplay, parseFromDisplay, toDisplayValue } from '../core/units';
  import type { Source, WaveConfig } from '../core/types';
  import {
    MAX_INTERFERENCE_SOURCES,
    type DesignNumberField,
    type DesignStore,
    type DiagonalParam,
    type DiagonalSourceParam,
    type RadialParam,
    type RadialSourceParam,
  } from '../state/design.svelte.ts';

  interface Props {
    store: DesignStore;
  }

  type ParamKind = 'length' | 'angle' | 'scalar';

  interface GlobalControl {
    field: DesignNumberField;
    label: string;
    min: number;
    max: number;
    step: number;
    decimals: number;
  }

  interface NumericControl<Field extends string> {
    field: Field;
    label: string;
    kind: ParamKind;
    decimals: number;
    step?: number;
  }

  let { store }: Props = $props();

  const dimensionControls: GlobalControl[] = [
    { field: 'H', label: 'height H', min: 50, max: 2400, step: 1, decimals: 2 },
    { field: 'W', label: 'width W', min: 50, max: 3000, step: 1, decimals: 2 },
    { field: 'D', label: 'max depth D', min: 1, max: 300, step: 1, decimals: 2 },
    { field: 'pMin', label: 'min protrusion', min: 0, max: 299, step: 1, decimals: 2 },
    {
      field: 'slatWidth',
      label: 'slat width',
      min: 3,
      max: 50,
      step: 0.1,
      decimals: 2,
    },
    { field: 'gap', label: 'gap width', min: 0, max: 100, step: 0.5, decimals: 2 },
  ];

  const toleranceControls: GlobalControl[] = [
    {
      field: 'fitTolerance',
      label: 'fit tolerance',
      min: 0.001,
      max: 1,
      step: 0.001,
      decimals: 4,
    },
  ];

  const diagonalControls: NumericControl<DiagonalParam>[] = [
    { field: 'theta', label: 'direction theta', kind: 'angle', decimals: 2 },
    { field: 'lambda', label: 'wavelength lambda', kind: 'length', decimals: 2 },
    { field: 'phi', label: 'phase phi', kind: 'angle', decimals: 2 },
  ];

  const radialControls: NumericControl<RadialParam>[] = [
    { field: 'cx', label: 'center x', kind: 'length', decimals: 2 },
    { field: 'cy', label: 'center y', kind: 'length', decimals: 2 },
    { field: 'lambda', label: 'wavelength lambda', kind: 'length', decimals: 2 },
    { field: 'phi', label: 'phase phi', kind: 'angle', decimals: 2 },
    { field: 'decay', label: 'decay', kind: 'scalar', decimals: 4, step: 0.001 },
  ];

  const diagonalSourceControls: NumericControl<DiagonalSourceParam>[] = [
    { field: 'theta', label: 'theta', kind: 'angle', decimals: 2 },
    { field: 'lambda', label: 'lambda', kind: 'length', decimals: 2 },
    { field: 'phi', label: 'phi', kind: 'angle', decimals: 2 },
  ];

  const radialSourceControls: NumericControl<RadialSourceParam>[] = [
    { field: 'cx', label: 'cx', kind: 'length', decimals: 2 },
    { field: 'cy', label: 'cy', kind: 'length', decimals: 2 },
    { field: 'lambda', label: 'lambda', kind: 'length', decimals: 2 },
    { field: 'phi', label: 'phi', kind: 'angle', decimals: 2 },
    { field: 'decay', label: 'decay', kind: 'scalar', decimals: 4, step: 0.001 },
  ];

  const families: { value: WaveConfig['kind']; label: string }[] = [
    { value: 'diagonal', label: 'Diagonal' },
    { value: 'radial', label: 'Radial' },
    { value: 'interference', label: 'Interference' },
  ];

  function unitLabel(kind: ParamKind): string {
    if (kind === 'angle') {
      return 'deg';
    }

    if (kind === 'scalar') {
      return '';
    }

    return store.design.displayUnit === 'mm' ? 'mm' : 'in';
  }

  function formatLength(valueMm: number, decimals: number): string {
    return formatForDisplay(valueMm, store.design.displayUnit, {
      decimals: store.design.displayUnit === 'mm' ? decimals : Math.max(3, decimals),
      trimTrailingZeros: true,
    });
  }

  function formatParam(value: number, kind: ParamKind, decimals: number): string {
    if (!Number.isFinite(value)) {
      return String(value);
    }

    if (kind === 'length') {
      return formatLength(value, decimals);
    }

    return value.toFixed(decimals).replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
  }

  function parseParam(raw: string, kind: ParamKind): number {
    return kind === 'length'
      ? parseFromDisplay(raw, store.design.displayUnit)
      : Number(raw.trim());
  }

  function inputValue(event: Event): string {
    return (event.currentTarget as HTMLInputElement).value;
  }

  function selectValue(event: Event): Source['type'] {
    return (event.currentTarget as HTMLSelectElement).value as Source['type'];
  }

  function applyNumber(raw: string, kind: ParamKind, apply: (value: number) => void): void {
    const value = parseParam(raw, kind);

    if (Number.isFinite(value)) {
      apply(value);
    }
  }

  function updateGlobalFromInput(field: DesignNumberField, event: Event): void {
    applyNumber(inputValue(event), 'length', (value) => {
      store.setDesignNumber(field, value);
    });
  }

  function updateGlobalFromSlider(control: GlobalControl, event: Event): void {
    const value = parseFromDisplay(inputValue(event), store.design.displayUnit);

    if (Number.isFinite(value)) {
      store.setDesignNumber(control.field, value);
    }
  }

  function sliderValue(field: DesignNumberField): number {
    return toDisplayValue(store.design[field], store.design.displayUnit);
  }

  function sliderBound(valueMm: number): number {
    return toDisplayValue(valueMm, store.design.displayUnit);
  }

  function sliderStep(stepMm: number): number {
    return toDisplayValue(stepMm, store.design.displayUnit);
  }

  function fieldHasIssue(field: string): boolean {
    return store.validation.issues.some((issue) => issue.field === field);
  }

  function sourceField(index: number, field: string): string {
    return `wave.sources.${index}.${field}`;
  }

  function formatSigned(value: number): string {
    const formatted = Number.isFinite(value)
      ? value.toFixed(2).replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '')
      : String(value);

    return value >= 0 ? `+${formatted}` : formatted;
  }

  function weightWidth(value: number): number {
    return Math.min(100, Math.abs(value) * 50);
  }
</script>

<section class="param-panel" aria-label="Parameter controls">
  <details open>
    <summary>Dimensions</summary>
    <div class="group-body">
      {#each dimensionControls as control (control.field)}
        <label class="control-row" class:invalid={fieldHasIssue(control.field)}>
          <span class="control-label">{control.label}</span>
          <input
            class="slider"
            type="range"
            min={sliderBound(control.min)}
            max={sliderBound(control.max)}
            step={sliderStep(control.step)}
            value={sliderValue(control.field)}
            aria-label={control.label}
            oninput={(event) => updateGlobalFromSlider(control, event)}
          />
          <span class="numeric">
            <input
              type="text"
              inputmode="decimal"
              value={formatLength(store.design[control.field], control.decimals)}
              aria-label={`${control.label} value`}
              onchange={(event) => updateGlobalFromInput(control.field, event)}
            />
            <span>{unitLabel('length')}</span>
          </span>
        </label>
      {/each}
    </div>
  </details>

  <details open>
    <summary>Wave Function</summary>
    <div class="group-body">
      <div class="family-tabs" role="tablist" aria-label="Wave family">
        {#each families as family (family.value)}
          <button
            type="button"
            role="tab"
            aria-selected={store.design.wave.kind === family.value}
            class:active={store.design.wave.kind === family.value}
            onclick={() => store.setWaveKind(family.value)}
          >
            {family.label}
          </button>
        {/each}
      </div>

      {#if store.design.wave.kind === 'diagonal'}
        <div class="param-grid" aria-label="Diagonal wave parameters">
          {#each diagonalControls as control (control.field)}
            <label class="numeric-row" class:invalid={fieldHasIssue(`wave.${control.field}`)}>
              <span>{control.label}</span>
              <input
                type="text"
                inputmode="decimal"
                value={formatParam(store.design.wave[control.field], control.kind, control.decimals)}
                onchange={(event) =>
                  applyNumber(inputValue(event), control.kind, (value) =>
                    store.setDiagonalParam(control.field, value),
                  )}
              />
              <small>{unitLabel(control.kind)}</small>
            </label>
          {/each}
        </div>
      {:else if store.design.wave.kind === 'radial'}
        <div class="param-grid" aria-label="Radial wave parameters">
          {#each radialControls as control (control.field)}
            <label class="numeric-row" class:invalid={fieldHasIssue(`wave.${control.field}`)}>
              <span>{control.label}</span>
              <input
                type="text"
                inputmode="decimal"
                value={formatParam(store.design.wave[control.field], control.kind, control.decimals)}
                onchange={(event) =>
                  applyNumber(inputValue(event), control.kind, (value) =>
                    store.setRadialParam(control.field, value),
                  )}
              />
              <small>{unitLabel(control.kind)}</small>
            </label>
          {/each}
        </div>
      {:else}
        <div
          class="sources-header"
          class:invalid={fieldHasIssue('wave.sources')}
          aria-label="Interference sources"
        >
          <span>SOURCES K={store.design.wave.sources.length}</span>
          <button
            type="button"
            disabled={store.design.wave.sources.length >= MAX_INTERFERENCE_SOURCES}
            onclick={() => store.addInterferenceSource()}
            aria-label="Add interference source"
          >
            +
          </button>
        </div>

        <div class="source-list">
          {#each store.design.wave.sources as source, index (index)}
            <details class="source-row" open>
              <summary>
                <span class="dot" aria-hidden="true"></span>
                <select
                  aria-label={`Source ${index + 1} type`}
                  value={source.type}
                  onchange={(event) => store.setSourceType(index, selectValue(event))}
                  onclick={(event) => event.stopPropagation()}
                >
                  <option value="diagonal">diagonal</option>
                  <option value="radial">radial</option>
                </select>
                <label class="weight">
                  <span>weight</span>
                  <input
                    type="range"
                    min="-2"
                    max="2"
                    step="0.1"
                    value={source.weight}
                    oninput={(event) =>
                      applyNumber(inputValue(event), 'scalar', (value) =>
                        store.setSourceWeight(index, value),
                      )}
                  />
                  <strong>{formatSigned(source.weight)}</strong>
                  <i style={`--weight-width:${weightWidth(source.weight)}%`}></i>
                </label>
                <button
                  type="button"
                  disabled={store.design.wave.sources.length <= 1}
                  aria-label={`Remove source ${index + 1}`}
                  onclick={(event) => {
                    event.preventDefault();
                    store.removeInterferenceSource(index);
                  }}
                >
                  ×
                </button>
              </summary>

              <div class="source-body">
                {#if source.type === 'diagonal'}
                  {#each diagonalSourceControls as control (control.field)}
                    <label
                      class="numeric-row compact"
                      class:invalid={fieldHasIssue(sourceField(index, control.field))}
                    >
                      <span>{control.label}</span>
                      <input
                        type="text"
                        inputmode="decimal"
                        value={formatParam(source[control.field], control.kind, control.decimals)}
                        onchange={(event) =>
                          applyNumber(inputValue(event), control.kind, (value) =>
                            store.setDiagonalSourceParam(index, control.field, value),
                          )}
                      />
                      <small>{unitLabel(control.kind)}</small>
                    </label>
                  {/each}
                {:else}
                  {#each radialSourceControls as control (control.field)}
                    <label
                      class="numeric-row compact"
                      class:invalid={fieldHasIssue(sourceField(index, control.field))}
                    >
                      <span>{control.label}</span>
                      <input
                        type="text"
                        inputmode="decimal"
                        value={formatParam(source[control.field], control.kind, control.decimals)}
                        onchange={(event) =>
                          applyNumber(inputValue(event), control.kind, (value) =>
                            store.setRadialSourceParam(index, control.field, value),
                          )}
                      />
                      <small>{unitLabel(control.kind)}</small>
                    </label>
                  {/each}
                {/if}
              </div>
            </details>
          {/each}
        </div>
      {/if}
    </div>
  </details>

  <details open>
    <summary>Fit Tolerance</summary>
    <div class="group-body">
      {#each toleranceControls as control (control.field)}
        <label class="control-row" class:invalid={fieldHasIssue(control.field)}>
          <span class="control-label">{control.label}</span>
          <input
            class="slider"
            type="range"
            min={sliderBound(control.min)}
            max={sliderBound(control.max)}
            step={sliderStep(control.step)}
            value={sliderValue(control.field)}
            aria-label={control.label}
            oninput={(event) => updateGlobalFromSlider(control, event)}
          />
          <span class="numeric">
            <input
              type="text"
              inputmode="decimal"
              value={formatLength(store.design[control.field], control.decimals)}
              aria-label={`${control.label} value`}
              onchange={(event) => updateGlobalFromInput(control.field, event)}
            />
            <span>{unitLabel('length')}</span>
          </span>
        </label>
      {/each}
    </div>
  </details>
</section>

<style>
  .param-panel {
    display: grid;
    gap: 12px;
  }

  details {
    border-bottom: 1px solid var(--edge);
    padding-bottom: 12px;
  }

  summary {
    display: flex;
    align-items: center;
    min-height: 32px;
    color: var(--ink);
    font-family: 'Fraunces', serif;
    font-size: 1.08rem;
    font-weight: 500;
    cursor: pointer;
  }

  .group-body {
    display: grid;
    gap: 12px;
    padding-top: 8px;
  }

  .control-row {
    display: grid;
    grid-template-columns: 96px minmax(86px, 1fr) 96px;
    align-items: center;
    gap: 10px;
  }

  .control-label,
  .numeric-row span,
  .weight span,
  .sources-header span {
    color: var(--ink-dim);
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .slider,
  .weight input {
    accent-color: var(--gold);
    width: 100%;
    min-width: 0;
  }

  .numeric {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 24px;
    align-items: center;
    gap: 5px;
  }

  input,
  select {
    min-width: 0;
    border: 1px solid var(--edge);
    color: var(--ink);
    background: var(--panel-2);
    font-variant-numeric: tabular-nums;
  }

  input[type='text'],
  select {
    min-height: 30px;
    padding: 0 7px;
  }

  .numeric input,
  .numeric-row input {
    text-align: right;
  }

  .numeric span,
  .numeric-row small {
    color: var(--ink-faint);
    font-size: 0.64rem;
  }

  input:focus-visible,
  select:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--gold-bright);
    outline-offset: 2px;
  }

  .invalid input,
  .sources-header.invalid {
    border-color: var(--danger);
  }

  .invalid .slider {
    accent-color: var(--danger);
  }

  .family-tabs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid var(--edge);
    background: var(--panel-2);
  }

  .family-tabs button {
    position: relative;
    min-height: 34px;
    border: 0;
    color: var(--ink-dim);
    background: transparent;
    cursor: pointer;
  }

  .family-tabs button + button {
    border-left: 1px solid var(--edge);
  }

  .family-tabs button::after {
    position: absolute;
    right: 8px;
    bottom: 0;
    left: 8px;
    height: 2px;
    background: transparent;
    content: '';
  }

  .family-tabs button.active {
    color: var(--ink);
  }

  .family-tabs button.active::after {
    background: var(--gold);
  }

  .param-grid,
  .source-body {
    display: grid;
    gap: 8px;
  }

  .numeric-row {
    display: grid;
    grid-template-columns: minmax(84px, 1fr) 92px 28px;
    align-items: center;
    gap: 8px;
  }

  .numeric-row.compact {
    grid-template-columns: minmax(48px, 1fr) 92px 28px;
  }

  .sources-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border: 1px solid var(--edge);
    background: var(--panel-2);
    padding: 8px 10px;
  }

  .sources-header button,
  .source-row button {
    display: grid;
    width: 28px;
    height: 28px;
    place-items: center;
    border: 1px solid var(--edge);
    color: var(--ink);
    background: var(--panel);
    cursor: pointer;
  }

  .sources-header button:disabled,
  .source-row button:disabled {
    color: var(--ink-faint);
    cursor: not-allowed;
    opacity: 0.56;
  }

  .source-list {
    display: grid;
    gap: 8px;
  }

  .source-row {
    border: 1px solid var(--edge);
    background: var(--panel-2);
    padding: 0;
  }

  .source-row summary {
    display: grid;
    grid-template-columns: auto 88px minmax(0, 1fr) auto;
    gap: 8px;
    padding: 8px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.72rem;
  }

  .dot {
    width: 7px;
    height: 7px;
    background: var(--gold);
    transform: rotate(45deg);
  }

  .weight {
    position: relative;
    display: grid;
    grid-template-columns: auto minmax(40px, 1fr) 38px;
    align-items: center;
    gap: 6px;
  }

  .weight strong {
    color: var(--gold-bright);
    font-size: 0.72rem;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
    text-align: right;
  }

  .weight i {
    position: absolute;
    right: 0;
    bottom: -4px;
    width: var(--weight-width);
    height: 2px;
    background: var(--gold);
  }

  .source-body {
    border-top: 1px solid var(--edge);
    padding: 10px 8px 12px;
  }
</style>
