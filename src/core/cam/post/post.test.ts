import { describe, expect, it } from 'vitest';

import type { ToolpathOp, ToolpathProgram } from '../program';
import { DEFAULT_POST_ID, ONEFINITY_POST, postProcessorFor } from './index';

function programWith(ops: ToolpathOp[]): ToolpathProgram {
  return {
    sourceFilename: 'parawave sheet 1 of 2',
    stockMin: { x: 0, y: 0, z: -18 },
    stockMax: { x: 762, y: 762, z: 0 },
    ops,
  };
}

const cut: ToolpathOp[] = [
  { kind: 'section', toolNumber: 1, toolDiameter: 3.175 },
  { kind: 'spindle', rpm: 18000 },
  { kind: 'rapid', x: 20, y: 30, z: 5 },
  { kind: 'linear', x: 20, y: 30, z: -3, feed: 500 },
  { kind: 'linear', x: 60, y: 30, z: -3, feed: 2000 },
  { kind: 'linear', x: 60, y: 90, z: -3, feed: 2000 },
  { kind: 'rapid', x: 60, y: 90, z: 5 },
];

function emit(ops: ToolpathOp[]): string {
  return ONEFINITY_POST.emit(programWith(ops));
}

describe('post processor registry', () => {
  it('exposes the Onefinity post as the default', () => {
    expect(DEFAULT_POST_ID).toBe('onefinity-buildbotics');
    expect(ONEFINITY_POST.extension).toBe('nc');
    expect(postProcessorFor('onefinity-buildbotics')).toBe(ONEFINITY_POST);
  });

  it('falls back to the default rather than throwing on an unknown id', () => {
    expect(postProcessorFor('not-a-post')).toBe(ONEFINITY_POST);
  });
});

describe('Onefinity g-code', () => {
  it('opens with the stock header, absolute mode and metric units', () => {
    const lines = emit(cut).split('\n');

    expect(lines[0]).toBe('(Design File: parawave sheet 1 of 2)');
    expect(lines[1]).toBe('(stockMin:0.00mm, 0.00mm, -18.00mm)');
    expect(lines[2]).toBe('(stockMax:762.00mm, 762.00mm, 0.00mm)');
    expect(lines[3]).toBe(
      '(STOCK/BLOCK,762.00, 762.00, 18.00,0.00, 0.00, 18.00)',
    );
    expect(lines[4]).toBe('G90');
    expect(lines[5]).toBe('G21');
  });

  it('retracts to machine safe Z before touching the stock', () => {
    const text = emit(cut);

    expect(text).toContain('(Move to safe Z to avoid workholding)');
    expect(text).toContain('G53G0Z-5.000');
  });

  it('changes tools with M6 and describes the cutter first', () => {
    const text = emit(cut);

    expect(text).toContain('(TOOL/MILL,3.17, 0.00, 9.52, 180.00)');
    expect(text).toContain('M6T1');
  });

  it('starts the spindle with a dwell so it reaches speed', () => {
    const text = emit(cut);
    const start = text.indexOf('M03S18000');

    expect(start).toBeGreaterThan(-1);
    expect(text.slice(start)).toMatch(/^M03S18000\nG4 P8\n/);
  });

  it('ends by stopping the spindle and the program', () => {
    const lines = emit(cut).trimEnd().split('\n');

    expect(lines.at(-2)).toBe('M05');
    expect(lines.at(-1)).toBe('M02');
  });

  it('emits an XY-only move at safe height before the first descent', () => {
    const lines = emit(cut);
    const safeIndex = lines.indexOf('G53G0Z-5.000');
    const after = lines.slice(safeIndex).split('\n');

    // The block right after the tool change moves in XY only: no Z word yet.
    const firstMove = after.find((line) => line.startsWith('G0X'));

    expect(firstMove).toBe('G0X20.000Y30.000');
  });

  it('suppresses axis words that have not changed', () => {
    const lines = emit(cut).split('\n');

    // The plunge changes Z alone; X and Y are already where they belong.
    expect(lines).toContain('G1Z-3.000F500.0');
    // Then X alone changes, then Y alone.
    expect(lines).toContain('X60.000F2000.0');
    expect(lines).toContain('Y90.000');
    expect(lines.some((line) => line.includes('X60.000Y30.000'))).toBe(false);
  });

  it('holds the motion mode and the feed modally, like the original', () => {
    const text = emit(cut);

    // G1 is stated once and then implied by every following cutting block.
    expect(text.match(/G1/g)).toHaveLength(1);
    expect(text.match(/F2000\.0/g)).toHaveLength(1);
  });

  it('formats coordinates to three decimals and feeds to one', () => {
    const text = emit([
      { kind: 'section', toolNumber: 1, toolDiameter: 6.35 },
      { kind: 'spindle', rpm: 12000 },
      { kind: 'linear', x: 1.23456, y: 2, z: -1, feed: 1234.56 },
    ]);

    expect(text).toContain('X1.235');
    expect(text).toContain('F1234.6');
  });

  it('normalises negative zero out of the output', () => {
    const text = emit([
      { kind: 'section', toolNumber: 1, toolDiameter: 3 },
      { kind: 'spindle', rpm: 10000 },
      { kind: 'linear', x: -1e-15, y: 5, z: -2, feed: 900 },
    ]);

    expect(text).not.toContain('-0.000');
    expect(text).toContain('X0.000');
  });

  it('does not re-spin an already running spindle at the same speed', () => {
    const text = emit([
      { kind: 'section', toolNumber: 1, toolDiameter: 3.175 },
      { kind: 'spindle', rpm: 18000 },
      { kind: 'linear', x: 10, y: 10, z: -1, feed: 800 },
      { kind: 'section', toolNumber: 1, toolDiameter: 3.175 },
      { kind: 'spindle', rpm: 18000 },
      { kind: 'linear', x: 20, y: 10, z: -1, feed: 800 },
    ]);

    expect(text.match(/G4 P8/g)).toHaveLength(1);
    expect(text.match(/M6T1/g)).toHaveLength(1);
  });

  it('stops the spindle and retracts before a real tool change', () => {
    const text = emit([
      { kind: 'section', toolNumber: 1, toolDiameter: 3.175 },
      { kind: 'spindle', rpm: 18000 },
      { kind: 'linear', x: 10, y: 10, z: -1, feed: 800 },
      { kind: 'section', toolNumber: 2, toolDiameter: 6.35 },
      { kind: 'spindle', rpm: 16000 },
      { kind: 'linear', x: 20, y: 10, z: -6, feed: 1800 },
    ]);

    const second = text.indexOf('M6T2');
    const before = text.slice(0, second);

    expect(before.lastIndexOf('M05')).toBeGreaterThan(
      before.indexOf('M03S18000'),
    );
    expect(before.lastIndexOf('G53G0Z-5.000')).toBeGreaterThan(
      before.indexOf('M6T1'),
    );
    expect(text).toContain('M03S16000');
  });

  it('does not restate an axis that a Z-only move left alone', () => {
    const lines = emit([
      { kind: 'section', toolNumber: 1, toolDiameter: 3 },
      { kind: 'spindle', rpm: 10000 },
      { kind: 'rapid', x: 40, y: 50, z: 5 },
      { kind: 'linear', z: -1, feed: 400 },
      { kind: 'linear', x: 60, y: 50, z: -1, feed: 900 },
    ]).split('\n');

    // Omitting X and Y must not be read as a formatter reset, or the cutting
    // move below would pointlessly restate Y50.000.
    expect(lines).toContain('G1Z-1.000F400.0');
    expect(lines).toContain('X60.000F900.0');
    expect(lines.some((line) => line.includes('X60.000Y50.000'))).toBe(false);
  });

  it('defers a work retract until the XY travel off machine safe Z', () => {
    const lines = emit([
      { kind: 'section', toolNumber: 1, toolDiameter: 3 },
      { kind: 'spindle', rpm: 10000 },
      // A retract issued while still parked at G53 Z-5 must not descend before
      // the tool has travelled clear in XY.
      { kind: 'rapid', z: 5 },
      { kind: 'rapid', x: 40, y: 50 },
      { kind: 'linear', z: -1, feed: 400 },
    ]).split('\n');

    const travel = lines.indexOf('G0X40.000Y50.000');
    const descend = lines.indexOf('Z5.000');

    expect(travel).toBeGreaterThan(-1);
    expect(descend).toBe(travel + 1);
    expect(lines.indexOf('G1Z-1.000F400.0')).toBeGreaterThan(descend);
    // No lone motion word from formatting an absent axis.
    expect(lines).not.toContain('G0');
  });

  it('passes comments straight through in parentheses', () => {
    const text = emit([{ kind: 'comment', text: 'engrave labels' }]);

    expect(text).toContain('(engrave labels)');
  });
});
