/**
 * Toolpath building: nested sheet geometry to a machine-space op list.
 *
 * ## Coordinate frames
 *
 * Sheet coordinates and machine coordinates coincide:
 *
 *     Xmachine = x_sheet
 *     Ymachine = y_sheet
 *     Zmachine = -depth        (zero at the stock surface, cuts negative)
 *
 * with the work origin at the stock's lower-left corner. The identity is not an
 * accident and it is not a missing flip — it is the whole point of FR-EXP.6.
 * `placePoint` maps a slat's local y (zero at the bottom of the wall) to an
 * *increasing* sheet y. The sheet document is then rendered Y-down, which is
 * why a slat looks upside-down in a browser; a CAM tool reading that same y as
 * a Y-up workspace coordinate is what stands it back up. Machine space is Y-up,
 * so taking sheet y as machine Y does exactly the same thing.
 *
 * The same identity is what makes the labels come out right. The seven-segment
 * glyphs from `labelStrokeSegments` are authored with glyph "up" at *increasing*
 * sheet y — mirrored in a plain SVG viewer, upright in a Y-up workspace. Do not
 * "fix" that mirror, and do not introduce a flip here to compensate for it:
 * either change alone would engrave every label upside-down and mirror every
 * part top-to-bottom.
 *
 * ## Operation order
 *
 * Labels are engraved before any profile pass. That is not cosmetic: once a
 * part has been cut free, engraving it is at best inaccurate and at worst
 * throws the part.
 */

import {
  labelLayout,
  labelStrokeSegments,
  partLabel,
  placePoint,
} from '../sheet-svg';
import type { FittedPath, MachineConfig, SheetConfig } from '../types';
import type { NestedSheet } from '../nest/pack';
import {
  COINCIDENT_EPSILON,
  distance,
  orientRing,
  polylineLength,
  type Point2,
} from './geom';
import { offsetSlatContour } from './offset';
import type { ToolpathOp, ToolpathProgram } from './program';
import { applyTabs, tabSpans } from './tabs';

export interface SheetProgramContext {
  sheet: SheetConfig;
  machine: MachineConfig;
  /** Design height H, in mm. */
  height: number;
  /** Stock thickness — the design's slat width, in mm. */
  thickness: number;
  finCount: number;
  sheetCount: number;
}

/**
 * Climb milling on an *outside* contour runs counter-clockwise when the spindle
 * turns clockwise (M3).
 *
 * With M3 the tooth at the tool's left-hand side travels in the feed direction,
 * so the cut is climbing when the part stays on the tool's left; keeping a shape
 * on your left while walking around its outside means going counter-clockwise.
 * If a test cut says otherwise, invert this one constant — the machine setting
 * is the user-facing escape hatch.
 */
const CLIMB_IS_COUNTER_CLOCKWISE = true;

/**
 * Map a sheet-space point into machine space.
 *
 * The identity, for the reason set out in this module's header. It stays a
 * named function because it is the boundary between the two frames, and because
 * an alternative work origin (stock centre rather than lower-left) would be
 * implemented here and nowhere else.
 */
function toMachine(point: Point2): Point2 {
  return { x: point.x, y: point.y };
}

/**
 * Depths for each pass, deepest last, none deeper than the full cut.
 *
 * `depthPerPass` is a maximum, not an exact step: the cut is divided into the
 * fewest equal passes that respect it. Stepping down by exactly `depthPerPass`
 * would leave a sliver final pass whenever the two do not divide evenly — a
 * 0.5 mm skim through 18.5 mm of ply at 3 mm a pass, which is all rubbing and
 * no cutting.
 */
export function passDepths(cutDepth: number, depthPerPass: number): number[] {
  if (!(cutDepth > 0)) {
    return [];
  }

  if (!(depthPerPass > 0)) {
    return [-cutDepth];
  }

  const count = Math.max(1, Math.ceil(cutDepth / depthPerPass));
  const depths: number[] = [];

  for (let index = 1; index <= count; index += 1) {
    depths.push(-(cutDepth * index) / count);
  }

  return depths;
}

function engraveOps(
  sheet: NestedSheet,
  paths: readonly FittedPath[],
  context: SheetProgramContext,
): ToolpathOp[] {
  const { machine, height, finCount } = context;

  if (
    !machine.engraveLabels ||
    context.sheet.labelStyle === 'none' ||
    sheet.placements.length === 0
  ) {
    return [];
  }

  const ops: ToolpathOp[] = [
    { kind: 'comment', text: 'Engrave part labels' },
    {
      kind: 'section',
      toolNumber: machine.engraveToolNumber,
      toolDiameter: machine.engraveDiameter,
    },
    { kind: 'spindle', rpm: machine.engraveRpm },
  ];

  const retract = machine.retractHeight;
  const depth = -machine.engraveDepth;

  for (const placement of sheet.placements) {
    const path = paths[placement.finIndex];

    if (!path) {
      continue;
    }

    const label = partLabel(placement.finIndex, finCount);
    const layout = labelLayout(path, placement, height, label.length);
    // Seven-segment glyphs share endpoints — "a" ends where "b" begins — so
    // chaining contiguous strokes avoids retracting and re-plunging on the spot,
    // which would leave a visible pip at every joint.
    let cursor: Point2 | null = null;

    for (const stroke of labelStrokeSegments(
      label,
      layout.x,
      layout.y,
      layout.size,
    )) {
      const from = toMachine({ x: stroke.x1, y: stroke.y1 });
      const to = toMachine({ x: stroke.x2, y: stroke.y2 });

      if (!cursor || distance(cursor, from) > COINCIDENT_EPSILON) {
        ops.push({ kind: 'rapid', z: retract });
        ops.push({ kind: 'rapid', x: from.x, y: from.y });
        ops.push({ kind: 'linear', z: depth, feed: machine.plungeRate });
      }

      ops.push({
        kind: 'linear',
        x: to.x,
        y: to.y,
        z: depth,
        feed: machine.engraveFeed,
      });
      cursor = to;
    }
  }

  ops.push({ kind: 'rapid', z: retract });

  return ops;
}

/** The offset cut contour for one placed part, in machine space. */
export function partContour(
  path: FittedPath,
  sheet: NestedSheet,
  placementIndex: number,
  context: SheetProgramContext,
): Point2[] {
  const placement = sheet.placements[placementIndex];

  if (!placement) {
    return [];
  }

  const local = offsetSlatContour(
    path,
    context.height,
    context.machine.toolDiameter / 2,
  );
  const machineRing = local.map((point) =>
    toMachine(placePoint(placement, context.height, point.x, point.y)),
  );

  return orientRing(
    machineRing,
    context.machine.millingDirection === 'climb'
      ? CLIMB_IS_COUNTER_CLOCKWISE
      : !CLIMB_IS_COUNTER_CLOCKWISE,
  );
}

function profileOps(
  sheet: NestedSheet,
  paths: readonly FittedPath[],
  context: SheetProgramContext,
): ToolpathOp[] {
  const { machine, thickness, finCount } = context;

  if (sheet.placements.length === 0) {
    return [];
  }

  const ops: ToolpathOp[] = [
    { kind: 'comment', text: 'Profile cut slats' },
    {
      kind: 'section',
      toolNumber: machine.toolNumber,
      toolDiameter: machine.toolDiameter,
      fluteLength: thickness + machine.throughAllowance,
    },
    { kind: 'spindle', rpm: machine.spindleRpm },
  ];

  const retract = machine.retractHeight;
  const cutDepth = thickness + machine.throughAllowance;
  const depths = passDepths(cutDepth, machine.depthPerPass);
  // Tab height is the stock left under the tab, so it is measured from the back
  // of the sheet rather than from the bottom of the overcut.
  const tabTopDepth = -thickness + machine.tabHeight;

  for (let index = 0; index < sheet.placements.length; index += 1) {
    const placement = sheet.placements[index];
    const path = placement ? paths[placement.finIndex] : undefined;

    if (!placement || !path) {
      continue;
    }

    const contour = partContour(path, sheet, index, context);
    const start = contour[0];

    if (!start || contour.length < 3) {
      continue;
    }

    const spans = tabSpans(
      polylineLength(contour),
      machine.tabCount,
      machine.tabWidth,
    );

    ops.push({
      kind: 'comment',
      text: `Part ${partLabel(placement.finIndex, finCount)}`,
    });
    ops.push({ kind: 'rapid', z: retract });
    ops.push({ kind: 'rapid', x: start.x, y: start.y });

    for (const depth of depths) {
      const tabbed = applyTabs(contour, spans, depth, tabTopDepth);
      const first = tabbed[0];

      if (!first) {
        continue;
      }

      ops.push({ kind: 'linear', z: first.z, feed: machine.plungeRate });

      for (let step = 1; step < tabbed.length; step += 1) {
        const point = tabbed[step] as { x: number; y: number; z: number };

        ops.push({
          kind: 'linear',
          x: point.x,
          y: point.y,
          z: point.z,
          feed: machine.feedRate,
        });
      }

      // Close the loop back to the plunge point before stepping down.
      ops.push({
        kind: 'linear',
        x: first.x,
        y: first.y,
        z: first.z,
        feed: machine.feedRate,
      });
    }

    ops.push({ kind: 'rapid', z: retract });
  }

  return ops;
}

/**
 * One nested sheet as a machine-space toolpath program: labels engraved, then
 * every slat profiled free of the stock.
 */
export function buildSheetProgram(
  sheet: NestedSheet,
  paths: readonly FittedPath[],
  context: SheetProgramContext,
): ToolpathProgram {
  return {
    sourceFilename: `ParaWave sheet ${sheet.index + 1} of ${context.sheetCount}`,
    stockMin: { x: 0, y: 0, z: -context.thickness },
    stockMax: { x: context.sheet.width, y: context.sheet.height, z: 0 },
    ops: [
      ...engraveOps(sheet, paths, context),
      ...profileOps(sheet, paths, context),
    ],
  };
}
