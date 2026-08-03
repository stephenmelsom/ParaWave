import type { FittedPath, LabelStyle, SheetConfig } from './types';
import type { NestPlacement, NestResult, NestedSheet } from './nest/pack';
import { buildEdgeProfile } from './nest/profile';
import { formatCoordinate } from './svg';

/** Interval count used only to pick a label anchor — precision is irrelevant here. */
const LABEL_PROBE_INTERVALS = 64;

const MIN_LABEL_SIZE = 3;
const MAX_LABEL_SIZE = 8;

export interface SheetSvgContext {
  sheet: SheetConfig;
  /** Design height H, in mm. */
  height: number;
  finCount: number;
  includeStockOutline?: boolean;
}

/** Zero-padded slat label, matching `slatFilename`'s padding so the two cross-reference. */
export function partLabel(finIndex: number, finCount: number): string {
  const width = Math.max(3, String(finCount).length);

  return String(finIndex + 1).padStart(width, '0');
}

/**
 * Map a slat-local point onto the sheet.
 *
 * Both cases are affine, so control points map exactly and the Béziers survive
 * unchanged. 180° is a rotation, not a reflection — its determinant is +1, so
 * winding is preserved and an outside-contour offset behaves exactly as it does
 * for the per-slat files.
 */
export function placePoint(
  placement: NestPlacement,
  height: number,
  z: number,
  y: number,
): { x: number; y: number } {
  if (placement.rotation === 180) {
    return { x: placement.x - z, y: placement.y + height - y };
  }

  return { x: placement.x + z, y: placement.y + y };
}

/**
 * Path data for one slat at its nested position, with the placement transform
 * baked into the coordinates.
 *
 * Deliberately not emitted as an SVG `transform` attribute: Carbide Create's
 * importer is minimal, and nested transforms are the most common cause of
 * geometry landing at the wrong size or position.
 */
export function placedPathData(
  path: FittedPath,
  placement: NestPlacement,
  height: number,
): string {
  const first = path.segments[0];
  const last = path.segments.at(-1);

  if (!first || !last) {
    const origin = placePoint(placement, height, 0, 0);

    return `M ${formatCoordinate(origin.x)} ${formatCoordinate(origin.y)} Z`;
  }

  const point = (z: number, y: number): string => {
    const mapped = placePoint(placement, height, z, y);

    return `${formatCoordinate(mapped.x)} ${formatCoordinate(mapped.y)}`;
  };

  const commands = [
    'M',
    point(0, first.p0.y),
    'L',
    point(first.p0.z, first.p0.y),
    ...path.segments.map(
      (segment) =>
        `C ${point(segment.p1.z, segment.p1.y)} ${point(segment.p2.z, segment.p2.y)} ${point(
          segment.p3.z,
          segment.p3.y,
        )}`,
    ),
    'L',
    point(0, last.p3.y),
    'L',
    point(0, first.p0.y),
    'Z',
  ];

  return commands.join(' ');
}

/**
 * A point comfortably inside the slat: the height at which its front edge is
 * furthest from the back edge, so the part spans [0, width] there.
 */
function labelAnchor(
  path: FittedPath,
  height: number,
): { z: number; y: number; width: number } {
  const profile = buildEdgeProfile(path, height, LABEL_PROBE_INTERVALS);
  let bestIndex = 0;

  for (let index = 1; index < profile.zs.length; index += 1) {
    if ((profile.zs[index] as number) > (profile.zs[bestIndex] as number)) {
      bestIndex = index;
    }
  }

  return {
    z: (profile.zs[bestIndex] ?? 0) / 2,
    y: profile.ys[bestIndex] ?? height / 2,
    width: profile.width,
  };
}

function labelSize(width: number, characters: number): number {
  const raw = (1.6 * width) / Math.max(1, characters);

  return Math.min(MAX_LABEL_SIZE, Math.max(MIN_LABEL_SIZE, raw));
}

// Seven-segment strokes in a y-up unit cell: x in [0, 0.6], y in [0, 1].
const SEGMENT_STROKES: Record<string, [number, number, number, number]> = {
  a: [0, 1, 0.6, 1],
  b: [0.6, 1, 0.6, 0.5],
  c: [0.6, 0.5, 0.6, 0],
  d: [0, 0, 0.6, 0],
  e: [0, 0.5, 0, 0],
  f: [0, 1, 0, 0.5],
  g: [0, 0.5, 0.6, 0.5],
};

const DIGIT_SEGMENTS: Record<string, string[]> = {
  '0': ['a', 'b', 'c', 'd', 'e', 'f'],
  '1': ['b', 'c'],
  '2': ['a', 'b', 'g', 'e', 'd'],
  '3': ['a', 'b', 'g', 'c', 'd'],
  '4': ['f', 'g', 'b', 'c'],
  '5': ['a', 'f', 'g', 'c', 'd'],
  '6': ['a', 'f', 'g', 'e', 'c', 'd'],
  '7': ['a', 'b', 'c'],
  '8': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  '9': ['a', 'b', 'c', 'd', 'f', 'g'],
};

/** One stroke of a seven-segment glyph, in sheet coordinates. */
export interface LabelStroke {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

/**
 * Seven-segment glyph strokes for a label, centred on a sheet-space point.
 *
 * Shared by the SVG export and the g-code engrave toolpath so both draw exactly
 * the same glyphs in exactly the same place.
 */
export function labelStrokeSegments(
  label: string,
  centerX: number,
  centerY: number,
  size: number,
): LabelStroke[] {
  const advance = 0.8 * size;
  const totalWidth = label.length * advance - 0.2 * size;
  const startX = centerX - totalWidth / 2;
  // The document is authored Y-down and the CAM tool flips it, so glyph "up"
  // is *increasing* y here: the digits look mirrored in a plain SVG viewer and
  // read upright once imported. This matches the `<text>` style's mirror, and
  // the g-code export's Y-flip into machine space undoes it the same way.
  const baselineY = centerY - size / 2;
  const strokes: LabelStroke[] = [];

  label.split('').forEach((character, index) => {
    const originX = startX + index * advance;

    for (const key of DIGIT_SEGMENTS[character] ?? []) {
      const stroke = SEGMENT_STROKES[key];

      if (!stroke) {
        continue;
      }

      const [x1, y1, x2, y2] = stroke;

      strokes.push({
        x1: originX + x1 * size,
        y1: baselineY + y1 * size,
        x2: originX + x2 * size,
        y2: baselineY + y2 * size,
      });
    }
  });

  return strokes;
}

/**
 * Label glyphs as stroked paths rather than `<text>`.
 *
 * Carbide Create's SVG importer discards text elements, so `labelStyle:
 * 'stroke'` renders digits as ordinary vectors that import cleanly and can
 * drive an engrave toolpath.
 */
export function strokeLabelPathData(
  label: string,
  centerX: number,
  centerY: number,
  size: number,
): string[] {
  return labelStrokeSegments(label, centerX, centerY, size).map((stroke) =>
    [
      'M',
      formatCoordinate(stroke.x1),
      formatCoordinate(stroke.y1),
      'L',
      formatCoordinate(stroke.x2),
      formatCoordinate(stroke.y2),
    ].join(' '),
  );
}

/** Where a part's label sits on the sheet, and how big it is. */
export interface LabelLayout {
  x: number;
  y: number;
  size: number;
}

/**
 * Position and size the label for one placed part.
 *
 * Shared by the SVG and g-code emitters so a label engraved by the machine
 * lands exactly where the sheet drawing says it will.
 */
export function labelLayout(
  path: FittedPath,
  placement: NestPlacement,
  height: number,
  characters: number,
): LabelLayout {
  const anchor = labelAnchor(path, height);
  const mapped = placePoint(placement, height, anchor.z, anchor.y);

  return {
    x: mapped.x,
    y: mapped.y,
    size: labelSize(anchor.width, characters),
  };
}

function labelsGroup(
  sheet: NestedSheet,
  paths: readonly FittedPath[],
  context: SheetSvgContext,
): string[] {
  const style: LabelStyle = context.sheet.labelStyle;

  if (style === 'none' || sheet.placements.length === 0) {
    return [];
  }

  const textLines: string[] = [];
  const strokeLines: string[] = [];

  for (const placement of sheet.placements) {
    const path = paths[placement.finIndex];

    if (!path) {
      continue;
    }

    const label = partLabel(placement.finIndex, context.finCount);
    const { x, y, size } = labelLayout(
      path,
      placement,
      context.height,
      label.length,
    );
    const mapped = { x, y };

    if (style === 'stroke') {
      strokeLines.push(
        ...strokeLabelPathData(label, mapped.x, mapped.y, size).map(
          (d) =>
            `    <path d="${d}" fill="none" stroke="black" stroke-width="0.01"/>`,
        ),
      );
      continue;
    }

    // Mirror each glyph about its own anchor rather than about the sheet, so
    // the label stays in the same coordinate frame as the part it names and
    // still reads upright once the CAM tool flips the document.
    const mirror = `translate(${formatCoordinate(mapped.x)} ${formatCoordinate(mapped.y)}) scale(1 -1)`;

    textLines.push(
      `    <text transform="${mirror}" x="0" y="0" ` +
        `font-family="monospace" font-size="${formatCoordinate(size)}" ` +
        `text-anchor="middle" dominant-baseline="middle" fill="black">${label}</text>`,
    );
  }

  if (style === 'stroke') {
    // Glyphs are baked in the parts' own frame, so the file carries no
    // transform anywhere at all.
    return ['  <g id="labels">', ...strokeLines, '  </g>'];
  }

  return ['  <g id="labels">', ...textLines, '  </g>'];
}

/**
 * One nested stock sheet as an SVG, 1 user unit = 1 mm.
 *
 * The stock outline in `<g id="stock">` is not a cut path — it exists so a
 * mis-scaled import is obvious at a glance: measure it, and if it is not the
 * configured sheet width the importer applied a DPI conversion.
 */
export function sheetSvg(
  sheet: NestedSheet,
  paths: readonly FittedPath[],
  context: SheetSvgContext,
  sheetCount = 1,
): string {
  const width = formatCoordinate(context.sheet.width);
  const height = formatCoordinate(context.sheet.height);

  const partLines = sheet.placements.flatMap((placement) => {
    const path = paths[placement.finIndex];

    if (!path) {
      return [];
    }

    const label = partLabel(placement.finIndex, context.finCount);
    const d = placedPathData(path, placement, context.height);

    return [
      `    <path id="part-${label}" data-fin-index="${placement.finIndex}" ` +
        `d="${d}" fill="none" stroke="black" stroke-width="0.01"/>`,
    ];
  });

  const stockLines =
    context.includeStockOutline === false
      ? []
      : [
          '  <g id="stock">',
          `    <rect id="stock-outline" x="0" y="0" width="${width}" height="${height}" ` +
            'fill="none" stroke="black" stroke-width="0.01"/>',
          '  </g>',
        ];

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}mm" height="${height}mm" viewBox="0 0 ${width} ${height}">`,
    `  <desc>ParaWave nested sheet ${sheet.index + 1} of ${sheetCount}. ` +
      `1 user unit = 1 mm. Sheet ${width} x ${height} mm. ` +
      'The stock group is a reference outline, not a cut path.</desc>',
    ...stockLines,
    '  <g id="parts">',
    ...partLines,
    '  </g>',
    ...labelsGroup(sheet, paths, context),
    '</svg>',
  ].join('\n');
}

export function sheetSvgs(
  nest: NestResult,
  paths: readonly FittedPath[],
  context: SheetSvgContext,
): string[] {
  return nest.sheets.map((sheet) =>
    sheetSvg(sheet, paths, context, nest.sheetCount),
  );
}
