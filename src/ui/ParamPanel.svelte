<script lang="ts">
  import {
    formatForDisplay,
    parseFromDisplay,
    toDisplayValue,
  } from '../core/units';
  import type { ValidationIssue } from '../core/validation';
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
    {
      field: 'D',
      label: 'max depth D',
      min: 1,
      max: 300,
      step: 1,
      decimals: 2,
    },
    {
      field: 'pMin',
      label: 'min protrusion',
      min: 0,
      max: 299,
      step: 1,
      decimals: 2,
    },
    {
      field: 'slatWidth',
      label: 'slat width',
      min: 3,
      max: 50,
      step: 0.1,
      decimals: 2,
    },
    {
      field: 'gap',
      label: 'gap width',
      min: 0,
      max: 100,
      step: 0.5,
      decimals: 2,
    },
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
    {
      field: 'lambda',
      label: 'wavelength lambda',
      kind: 'length',
      decimals: 2,
    },
    { field: 'phi', label: 'phase phi', kind: 'angle', decimals: 2 },
  ];

  const radialControls: NumericControl<RadialParam>[] = [
    { field: 'cx', label: 'center x', kind: 'length', decimals: 2 },
    { field: 'cy', label: 'center y', kind: 'length', decimals: 2 },
    {
      field: 'lambda',
      label: 'wavelength lambda',
      kind: 'length',
      decimals: 2,
    },
    { field: 'phi', label: 'phase phi', kind: 'angle', decimals: 2 },
    {
      field: 'decay',
      label: 'decay',
      kind: 'scalar',
      decimals: 4,
      step: 0.001,
    },
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
    {
      field: 'decay',
      label: 'decay',
      kind: 'scalar',
      decimals: 4,
      step: 0.001,
    },
  ];

  const families: { value: WaveConfig['kind']; label: string }[] = [
    { value: 'diagonal', label: 'Diagonal' },
    { value: 'radial', label: 'Radial' },
    { value: 'interference', label: 'Interference' },
  ];
  const panelHelpId = 'param-panel-help';

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
      decimals:
        store.design.displayUnit === 'mm' ? decimals : Math.max(3, decimals),
      trimTrailingZeros: true,
    });
  }

  function formatParam(
    value: number,
    kind: ParamKind,
    decimals: number,
  ): string {
    if (!Number.isFinite(value)) {
      return String(value);
    }

    if (kind === 'length') {
      return formatLength(value, decimals);
    }

    return value
      .toFixed(decimals)
      .replace(/(\.\d*?)0+$/, '$1')
      .replace(/\.$/, '');
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

  function applyNumber(
    raw: string,
    kind: ParamKind,
    apply: (value: number) => void,
  ): void {
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

  function issueForField(field: string): ValidationIssue | undefined {
    return store.validation.issues.find((issue) => issue.field === field);
  }

  function issueIdForField(field: string): string {
    return `param-issue-${field.replace(/[^a-z0-9]+/gi, '-')}`;
  }

  function describedByForField(field: string): string {
    return issueForField(field) ? issueIdForField(field) : panelHelpId;
  }

  function rangeFillPercent(value: number, min: number, max: number): number {
    if (
      !Number.isFinite(value) ||
      !Number.isFinite(min) ||
      !Number.isFinite(max) ||
      max <= min
    ) {
      return 0;
    }

    return Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  }

  function rangeStyle(
    value: number,
    min: number,
    max: number,
    invalid = false,
  ): string {
    return `--range-fill:${rangeFillPercent(value, min, max)}%; --range-color:${invalid ? 'var(--danger)' : 'var(--gold)'}`;
  }

  function sourceField(index: number, field: string): string {
    return `wave.sources.${index}.${field}`;
  }

  function formatSigned(value: number): string {
    const formatted = Number.isFinite(value)
      ? value
          .toFixed(2)
          .replace(/(\.\d*?)0+$/, '$1')
          .replace(/\.$/, '')
      : String(value);

    return value >= 0 ? `+${formatted}` : formatted;
  }

  function weightWidth(value: number): number {
    return Math.min(100, Math.abs(value) * 50);
  }
</script>

<section class="param-panel" aria-label="Parameter controls">
  <p id={panelHelpId} class="sr-only">
    Values are stored in millimeters. Editing a field updates the live preview,
    readouts, validation, and export state.
  </p>
  <details open>
    <summary aria-describedby={panelHelpId}>Dimensions</summary>
    <div class="group-body">
      {#each dimensionControls as control (control.field)}
        {@const issue = issueForField(control.field)}
        {@const sliderMin = sliderBound(control.min)}
        {@const sliderMax = sliderBound(control.max)}
        {@const currentValue = sliderValue(control.field)}
        <label class="control-row" class:invalid={fieldHasIssue(control.field)}>
          <span class="control-label">{control.label}</span>
          <input
            class="slider"
            type="range"
            min={sliderMin}
            max={sliderMax}
            step={sliderStep(control.step)}
            value={currentValue}
            style={rangeStyle(
              currentValue,
              sliderMin,
              sliderMax,
              Boolean(issue),
            )}
            aria-label={control.label}
            aria-invalid={issue?.tier === 'hard'}
            aria-describedby={describedByForField(control.field)}
            oninput={(event) => updateGlobalFromSlider(control, event)}
          />
          <span class="numeric">
            <input
              type="text"
              inputmode="decimal"
              value={formatLength(
                store.design[control.field],
                control.decimals,
              )}
              aria-label={`${control.label} value`}
              aria-invalid={issue?.tier === 'hard'}
              aria-describedby={describedByForField(control.field)}
              onchange={(event) => updateGlobalFromInput(control.field, event)}
            />
            <span>{unitLabel('length')}</span>
          </span>
          {#if issue}
            <span
              id={issueIdForField(control.field)}
              class:hard={issue.tier === 'hard'}
              class:soft={issue.tier === 'soft'}
              class="field-note"
            >
              {issue.tier === 'hard' ? '✕' : '⚠'}
              {issue.message}
            </span>
          {/if}
        </label>
      {/each}
    </div>
  </details>

  <details open>
    <summary aria-describedby={panelHelpId}>Wave Function</summary>
    <div class="group-body">
      <div class="family-tabs" role="tablist" aria-label="Wave family">
        {#each families as family (family.value)}
          <button
            type="button"
            role="tab"
            aria-selected={store.design.wave.kind === family.value}
            aria-describedby={panelHelpId}
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
            {@const field = `wave.${control.field}`}
            {@const issue = issueForField(field)}
            <label class="numeric-row" class:invalid={Boolean(issue)}>
              <span>{control.label}</span>
              <input
                type="text"
                inputmode="decimal"
                value={formatParam(
                  store.design.wave[control.field],
                  control.kind,
                  control.decimals,
                )}
                aria-label={`${control.label} value`}
                aria-invalid={issue?.tier === 'hard'}
                aria-describedby={describedByForField(field)}
                onchange={(event) =>
                  applyNumber(inputValue(event), control.kind, (value) =>
                    store.setDiagonalParam(control.field, value),
                  )}
              />
              <small>{unitLabel(control.kind)}</small>
              {#if issue}
                <span
                  id={issueIdForField(field)}
                  class:hard={issue.tier === 'hard'}
                  class:soft={issue.tier === 'soft'}
                  class="field-note"
                >
                  {issue.tier === 'hard' ? '✕' : '⚠'}
                  {issue.message}
                </span>
              {/if}
            </label>
          {/each}
        </div>
      {:else if store.design.wave.kind === 'radial'}
        <div class="param-grid" aria-label="Radial wave parameters">
          {#each radialControls as control (control.field)}
            {@const field = `wave.${control.field}`}
            {@const issue = issueForField(field)}
            <label class="numeric-row" class:invalid={Boolean(issue)}>
              <span>{control.label}</span>
              <input
                type="text"
                inputmode="decimal"
                value={formatParam(
                  store.design.wave[control.field],
                  control.kind,
                  control.decimals,
                )}
                aria-label={`${control.label} value`}
                aria-invalid={issue?.tier === 'hard'}
                aria-describedby={describedByForField(field)}
                onchange={(event) =>
                  applyNumber(inputValue(event), control.kind, (value) =>
                    store.setRadialParam(control.field, value),
                  )}
              />
              <small>{unitLabel(control.kind)}</small>
              {#if issue}
                <span
                  id={issueIdForField(field)}
                  class:hard={issue.tier === 'hard'}
                  class:soft={issue.tier === 'soft'}
                  class="field-note"
                >
                  {issue.tier === 'hard' ? '✕' : '⚠'}
                  {issue.message}
                </span>
              {/if}
            </label>
          {/each}
        </div>
      {:else}
        {@const sourcesIssue = issueForField('wave.sources')}
        <div
          class="sources-header"
          class:invalid={Boolean(sourcesIssue)}
          aria-label="Interference sources"
          aria-describedby={sourcesIssue
            ? issueIdForField('wave.sources')
            : panelHelpId}
        >
          <span>SOURCES K={store.design.wave.sources.length}</span>
          <button
            type="button"
            disabled={store.design.wave.sources.length >=
              MAX_INTERFERENCE_SOURCES}
            onclick={() => store.addInterferenceSource()}
            aria-label="Add interference source"
            aria-describedby={sourcesIssue
              ? issueIdForField('wave.sources')
              : panelHelpId}
          >
            +
          </button>
          {#if sourcesIssue}
            <span
              id={issueIdForField('wave.sources')}
              class:hard={sourcesIssue.tier === 'hard'}
              class:soft={sourcesIssue.tier === 'soft'}
              class="field-note"
            >
              {sourcesIssue.tier === 'hard' ? '✕' : '⚠'}
              {sourcesIssue.message}
            </span>
          {/if}
        </div>

        <div class="source-list">
          {#each store.design.wave.sources as source, index (index)}
            <details class="source-row" open>
              <summary aria-describedby={panelHelpId}>
                <span class="dot" aria-hidden="true"></span>
                <select
                  aria-label={`Source ${index + 1} type`}
                  aria-describedby={panelHelpId}
                  value={source.type}
                  onchange={(event) =>
                    store.setSourceType(index, selectValue(event))}
                  onclick={(event) => event.stopPropagation()}
                >
                  <option value="diagonal">diagonal</option>
                  <option value="radial">radial</option>
                </select>
                <label class="weight">
                  <span>weight</span>
                  <input
                    class="slider weight-slider"
                    type="range"
                    min="-2"
                    max="2"
                    step="0.1"
                    value={source.weight}
                    style={rangeStyle(source.weight, -2, 2)}
                    aria-label={`Source ${index + 1} weight`}
                    aria-describedby={panelHelpId}
                    oninput={(event) =>
                      applyNumber(inputValue(event), 'scalar', (value) =>
                        store.setSourceWeight(index, value),
                      )}
                  />
                  <strong>{formatSigned(source.weight)}</strong>
                  <i style={`--weight-width:${weightWidth(source.weight)}%`}
                  ></i>
                </label>
                <button
                  type="button"
                  disabled={store.design.wave.sources.length <= 1}
                  aria-label={`Remove source ${index + 1}`}
                  aria-describedby={panelHelpId}
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
                    {@const field = sourceField(index, control.field)}
                    {@const issue = issueForField(field)}
                    <label
                      class="numeric-row compact"
                      class:invalid={Boolean(issue)}
                    >
                      <span>{control.label}</span>
                      <input
                        type="text"
                        inputmode="decimal"
                        value={formatParam(
                          source[control.field],
                          control.kind,
                          control.decimals,
                        )}
                        aria-label={`Source ${index + 1} ${control.label} value`}
                        aria-invalid={issue?.tier === 'hard'}
                        aria-describedby={describedByForField(field)}
                        onchange={(event) =>
                          applyNumber(
                            inputValue(event),
                            control.kind,
                            (value) =>
                              store.setDiagonalSourceParam(
                                index,
                                control.field,
                                value,
                              ),
                          )}
                      />
                      <small>{unitLabel(control.kind)}</small>
                      {#if issue}
                        <span
                          id={issueIdForField(field)}
                          class:hard={issue.tier === 'hard'}
                          class:soft={issue.tier === 'soft'}
                          class="field-note"
                        >
                          {issue.tier === 'hard' ? '✕' : '⚠'}
                          {issue.message}
                        </span>
                      {/if}
                    </label>
                  {/each}
                {:else}
                  {#each radialSourceControls as control (control.field)}
                    {@const field = sourceField(index, control.field)}
                    {@const issue = issueForField(field)}
                    <label
                      class="numeric-row compact"
                      class:invalid={Boolean(issue)}
                    >
                      <span>{control.label}</span>
                      <input
                        type="text"
                        inputmode="decimal"
                        value={formatParam(
                          source[control.field],
                          control.kind,
                          control.decimals,
                        )}
                        aria-label={`Source ${index + 1} ${control.label} value`}
                        aria-invalid={issue?.tier === 'hard'}
                        aria-describedby={describedByForField(field)}
                        onchange={(event) =>
                          applyNumber(
                            inputValue(event),
                            control.kind,
                            (value) =>
                              store.setRadialSourceParam(
                                index,
                                control.field,
                                value,
                              ),
                          )}
                      />
                      <small>{unitLabel(control.kind)}</small>
                      {#if issue}
                        <span
                          id={issueIdForField(field)}
                          class:hard={issue.tier === 'hard'}
                          class:soft={issue.tier === 'soft'}
                          class="field-note"
                        >
                          {issue.tier === 'hard' ? '✕' : '⚠'}
                          {issue.message}
                        </span>
                      {/if}
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
    <summary aria-describedby={panelHelpId}>Fit Tolerance</summary>
    <div class="group-body">
      {#each toleranceControls as control (control.field)}
        {@const issue = issueForField(control.field)}
        {@const sliderMin = sliderBound(control.min)}
        {@const sliderMax = sliderBound(control.max)}
        {@const currentValue = sliderValue(control.field)}
        <label class="control-row" class:invalid={fieldHasIssue(control.field)}>
          <span class="control-label">{control.label}</span>
          <input
            class="slider"
            type="range"
            min={sliderMin}
            max={sliderMax}
            step={sliderStep(control.step)}
            value={currentValue}
            style={rangeStyle(
              currentValue,
              sliderMin,
              sliderMax,
              Boolean(issue),
            )}
            aria-label={control.label}
            aria-invalid={issue?.tier === 'hard'}
            aria-describedby={describedByForField(control.field)}
            oninput={(event) => updateGlobalFromSlider(control, event)}
          />
          <span class="numeric">
            <input
              type="text"
              inputmode="decimal"
              value={formatLength(
                store.design[control.field],
                control.decimals,
              )}
              aria-label={`${control.label} value`}
              aria-invalid={issue?.tier === 'hard'}
              aria-describedby={describedByForField(control.field)}
              onchange={(event) => updateGlobalFromInput(control.field, event)}
            />
            <span>{unitLabel('length')}</span>
          </span>
          {#if issue}
            <span
              id={issueIdForField(control.field)}
              class:hard={issue.tier === 'hard'}
              class:soft={issue.tier === 'soft'}
              class="field-note"
            >
              {issue.tier === 'hard' ? '✕' : '⚠'}
              {issue.message}
            </span>
          {/if}
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
    font: var(--type-h2);
    font-family: 'Fraunces', serif;
    cursor: pointer;
  }

  .group-body {
    display: grid;
    gap: 12px;
    padding-top: 8px;
    animation: param-cross-fade 140ms ease-out both;
  }

  .control-row {
    position: relative;
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
    font: var(--type-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .slider,
  .weight input {
    --range-fill: 0%;
    --range-color: var(--gold);
    width: 100%;
    min-width: 0;
    height: 22px;
    appearance: none;
    background: transparent;
    cursor: pointer;
  }

  .slider::-webkit-slider-runnable-track,
  .weight input::-webkit-slider-runnable-track {
    height: 2px;
    background: linear-gradient(
      90deg,
      var(--range-color) 0 var(--range-fill),
      var(--cool-dim) var(--range-fill) 100%
    );
  }

  .slider::-webkit-slider-thumb,
  .weight input::-webkit-slider-thumb {
    width: 12px;
    height: 12px;
    margin-top: -5px;
    border: 1px solid var(--bg);
    appearance: none;
    background: var(--range-color);
    box-shadow: 0 0 0 0 var(--gold-glow);
    transform: rotate(45deg);
    transition:
      background 140ms ease,
      box-shadow 140ms ease;
  }

  .slider::-moz-range-track,
  .weight input::-moz-range-track {
    height: 2px;
    background: var(--cool-dim);
  }

  .slider::-moz-range-progress,
  .weight input::-moz-range-progress {
    height: 2px;
    background: var(--range-color);
  }

  .slider::-moz-range-thumb,
  .weight input::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border: 1px solid var(--bg);
    border-radius: 0;
    background: var(--range-color);
    box-shadow: 0 0 0 0 var(--gold-glow);
    transform: rotate(45deg);
    transition:
      background 140ms ease,
      box-shadow 140ms ease;
  }

  .slider:hover::-webkit-slider-thumb,
  .slider:focus-visible::-webkit-slider-thumb,
  .weight input:hover::-webkit-slider-thumb,
  .weight input:focus-visible::-webkit-slider-thumb {
    background: var(--gold-bright);
    box-shadow: 0 0 0 7px var(--gold-glow);
  }

  .slider:hover::-moz-range-thumb,
  .slider:focus-visible::-moz-range-thumb,
  .weight input:hover::-moz-range-thumb,
  .weight input:focus-visible::-moz-range-thumb {
    background: var(--gold-bright);
    box-shadow: 0 0 0 7px var(--gold-glow);
  }

  .invalid .slider {
    --range-color: var(--danger);
  }

  .weight input {
    width: 100%;
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
    border-radius: 0;
    color: var(--ink);
    background: var(--panel-2);
    font-variant-numeric: tabular-nums;
    transition:
      border-color 140ms ease,
      background 140ms ease,
      color 140ms ease;
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

  .invalid input,
  .sources-header.invalid {
    border-color: var(--danger);
  }

  .invalid input {
    background: color-mix(in srgb, var(--panel-2) 88%, var(--danger-bg));
  }

  .field-note {
    grid-column: 1 / -1;
    color: var(--ink-dim);
    font: var(--type-body);
    font-size: 0.68rem;
    line-height: 1.35;
    letter-spacing: 0;
    text-transform: none;
  }

  .field-note.hard {
    color: var(--danger);
  }

  .field-note.soft {
    color: var(--warn);
  }

  .numeric-row .field-note,
  .sources-header .field-note {
    color: var(--ink-dim);
    font: var(--type-body);
    letter-spacing: 0;
    text-transform: none;
  }

  .numeric-row .field-note.hard,
  .sources-header .field-note.hard {
    color: var(--danger);
  }

  .numeric-row .field-note.soft,
  .sources-header .field-note.soft {
    color: var(--warn);
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
    border-radius: 0;
    color: var(--ink-dim);
    background: transparent;
    cursor: pointer;
    transition:
      color 140ms ease,
      background 140ms ease;
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
    background: color-mix(in srgb, var(--panel-2) 82%, var(--gold-glow));
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
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border: 1px solid var(--edge);
    background: var(--panel-2);
    padding: 8px 10px;
  }

  .sources-header .field-note {
    flex: 1 0 100%;
  }

  .sources-header button,
  .source-row button {
    display: grid;
    width: 28px;
    height: 28px;
    place-items: center;
    border: 1px solid var(--edge);
    border-radius: 0;
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
    transition: border-color 140ms ease;
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
    font: var(--type-value);
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

  @keyframes param-cross-fade {
    from {
      opacity: 0;
      transform: translateY(3px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 819px) {
    summary,
    button,
    input[type='text'],
    select {
      min-height: 44px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .group-body {
      animation: none;
    }

    input,
    select,
    .family-tabs button,
    .source-row,
    .slider::-webkit-slider-thumb,
    .weight input::-webkit-slider-thumb,
    .slider::-moz-range-thumb,
    .weight input::-moz-range-thumb {
      transition: none;
    }
  }
</style>
