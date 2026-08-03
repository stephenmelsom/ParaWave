/**
 * Onefinity (Buildbotics) post processor.
 *
 * A port of the Carbide Create post `onefinity_cc_post.js` — same emit rules,
 * same modal formatters, same safe-Z choreography — so a program produced here
 * is the one that CAM route would have produced. The original is driven by
 * Carbide through `onOpen` / `onSection` / `onRapid` / `onLinear` /
 * `onSpindleSpeed` / `onClose` callbacks; here the same handlers are driven by
 * a `ToolpathProgram`.
 *
 * Two deliberate departures from the original, both noted at their call sites:
 * negative zero is normalised away, and a redundant spindle command is
 * suppressed rather than re-emitting an eight second dwell.
 */

import type { PostProcessor, ToolpathOp, ToolpathProgram } from '../program';

/** Machine-coordinate Z the tool retracts to before a tool change, in mm. */
const SAFE_Z_FROM_TOP = -5;

const COORDINATE_DIGITS = 3;
const FEED_DIGITS = 1;
const UNIT_DIGITS = 2;

const DEFAULT_CORNER_RADIUS = 0;
const DEFAULT_ANGLE = 180;

interface Formatter {
  format(value: number | undefined): string;
  reset(): void;
}

/**
 * A modal word: emits `name` + value only when the formatted value changed.
 *
 * `reset()` sets the remembered value to something no number can format to, so
 * the next call always emits — which is how the original forces a full block
 * after a tool change or a machine-coordinate move.
 */
function createFormatter(name: string, digits: number): Formatter {
  let lastOutput = '';

  return {
    format(value: number | undefined): string {
      if (value === undefined) {
        this.reset();

        return '';
      }

      // Tiny negative results would otherwise format as "-0.000". The original
      // never sees them because Carbide hands it snapped coordinates.
      const rounded = Number(value.toFixed(digits));
      const text = (rounded === 0 ? 0 : rounded).toFixed(digits);

      if (text === lastOutput) {
        return '';
      }

      lastOutput = text;

      return name + text;
    },
    reset(): void {
      lastOutput = '--';
    },
  };
}

function formatUnits(value: number): string {
  return `${value.toFixed(UNIT_DIGITS)}mm`;
}

function formatDimension(value: number): string {
  return value.toFixed(UNIT_DIGITS);
}

class OnefinityEmitter {
  private readonly lines: string[] = [];

  private readonly xval = createFormatter('X', COORDINATE_DIGITS);
  private readonly yval = createFormatter('Y', COORDINATE_DIGITS);
  private readonly zval = createFormatter('Z', COORDINATE_DIGITS);
  private readonly fval = createFormatter('F', FEED_DIGITS);
  private readonly sval = createFormatter('S', 0);
  private readonly tval = createFormatter('T', 0);
  private readonly motionMode = createFormatter('G', 0);

  private wasHomeZ = false;
  private pendingRetract: number | undefined;
  private lastTool = -1;
  private spindle = false;
  private rpm = 0;

  private writeLn(line: string): void {
    this.lines.push(line);
  }

  /**
   * Join the words of one block.
   *
   * The original writes the line unconditionally; skipping empty blocks only
   * removes blank lines a fully-modal no-op move would leave behind.
   */
  private writeBlock(...words: string[]): void {
    const line = words.join('');

    if (line.length > 0) {
      this.writeLn(line);
    }
  }

  private comment(text: string): void {
    this.writeLn(`(${text})`);
  }

  private safeZ(): void {
    if (this.wasHomeZ) {
      return;
    }

    this.comment('Move to safe Z to avoid workholding');
    this.writeLn(`G53G0Z${SAFE_Z_FROM_TOP.toFixed(COORDINATE_DIGITS)}`);
    this.motionMode.reset();
    this.zval.reset();
    this.wasHomeZ = true;
    this.pendingRetract = undefined;
  }

  private open(program: ToolpathProgram): void {
    const { stockMin, stockMax } = program;

    this.comment(`Design File: ${program.sourceFilename}`);
    this.comment(
      `stockMin:${formatUnits(stockMin.x)}, ${formatUnits(stockMin.y)}, ${formatUnits(stockMin.z)}`,
    );
    this.comment(
      `stockMax:${formatUnits(stockMax.x)}, ${formatUnits(stockMax.y)}, ${formatUnits(stockMax.z)}`,
    );

    const length = stockMax.x - stockMin.x;
    const width = stockMax.y - stockMin.y;
    const height = stockMax.z - stockMin.z;

    this.comment(
      `STOCK/BLOCK,${formatDimension(length)}, ${formatDimension(width)}, ` +
        `${formatDimension(height)},${formatDimension(-stockMin.x)}, ` +
        `${formatDimension(-stockMin.y)}, ${formatDimension(-stockMin.z)}`,
    );

    this.writeLn('G90');
    this.writeLn('G21');
    this.safeZ();
  }

  private close(): void {
    if (this.spindle) {
      this.writeLn('M05');
    }

    this.writeLn('M02');
  }

  private spindleSpeed(speed: number): void {
    if (speed <= 0) {
      this.spindle = false;
      this.writeBlock('M05');
    } else {
      this.spindle = true;
      this.sval.reset();
      this.writeBlock('M03', this.sval.format(speed));
      this.writeBlock('G4 P8');
    }

    this.rpm = speed;
  }

  private section(op: Extract<ToolpathOp, { kind: 'section' }>): void {
    if (op.toolNumber === this.lastTool) {
      return;
    }

    this.lastTool = op.toolNumber;
    this.spindleSpeed(0);
    this.safeZ();
    this.comment(
      `TOOL/MILL,${formatDimension(op.toolDiameter)}, ` +
        `${formatDimension(op.cornerRadius ?? DEFAULT_CORNER_RADIUS)}, ` +
        `${formatDimension(op.fluteLength ?? op.toolDiameter * 3)}, ` +
        `${(op.angle ?? DEFAULT_ANGLE).toFixed(2)}`,
    );
    this.tval.reset();
    this.writeBlock('M6', this.tval.format(op.toolNumber));
    this.xval.reset();
    this.yval.reset();
    this.zval.reset();
    this.fval.reset();
    this.wasHomeZ = true;
  }

  /**
   * Format an optional axis word.
   *
   * An axis the caller left out is simply absent from the block — it must not
   * go through `format(undefined)`, which is the formatter's *reset* and would
   * make the next block restate an axis that never moved.
   */
  private word(formatter: Formatter, value: number | undefined): string {
    return value === undefined ? '' : formatter.format(value);
  }

  /**
   * Emit the XY travel that must precede any descent from machine safe Z, plus
   * the work retract that was deferred until it happened.
   */
  private leaveSafeZ(x: number | undefined, y: number | undefined): void {
    this.writeBlock(
      this.motionMode.format(0),
      this.word(this.xval, x),
      this.word(this.yval, y),
    );
    this.wasHomeZ = false;

    if (this.pendingRetract !== undefined) {
      this.writeBlock(
        this.motionMode.format(0),
        this.word(this.zval, this.pendingRetract),
      );
      this.pendingRetract = undefined;
    }
  }

  private rapid(x?: number, y?: number, z?: number): void {
    if (this.wasHomeZ && x === undefined && y === undefined) {
      // Parked at machine safe Z, which is above any work retract height, so
      // there is nothing to do yet — descending now would drop the tool through
      // the workholding the safe move was protecting. Remember the height and
      // descend to it once the XY travel has happened.
      this.pendingRetract = z;

      return;
    }

    if (this.wasHomeZ) {
      this.leaveSafeZ(x, y);
    }

    this.writeBlock(
      this.motionMode.format(0),
      this.word(this.xval, x),
      this.word(this.yval, y),
      this.word(this.zval, z),
    );
  }

  private linear(
    x: number | undefined,
    y: number | undefined,
    z: number | undefined,
    feed: number,
  ): void {
    if (this.wasHomeZ) {
      this.leaveSafeZ(x, y);
    }

    const xv = this.word(this.xval, x);
    const yv = this.word(this.yval, y);
    const zv = this.word(this.zval, z);

    if (xv !== '' || yv !== '' || zv !== '') {
      this.writeBlock(
        this.motionMode.format(1),
        xv,
        yv,
        zv,
        this.fval.format(feed),
      );
    }
  }

  emit(program: ToolpathProgram): string {
    this.open(program);

    for (const op of program.ops) {
      switch (op.kind) {
        case 'comment':
          this.comment(op.text);
          break;
        case 'section':
          this.section(op);
          break;
        case 'spindle':
          // The original re-issues M03 and its eight second dwell every time.
          // Carbide only calls it on a change; guard so a same-tool section
          // boundary does not cost a spin-up the machine does not need.
          if (!(this.spindle && op.rpm === this.rpm)) {
            this.spindleSpeed(op.rpm);
          }
          break;
        case 'rapid':
          this.rapid(op.x, op.y, op.z);
          break;
        case 'linear':
          this.linear(op.x, op.y, op.z, op.feed);
          break;
      }
    }

    this.close();

    return `${this.lines.join('\n')}\n`;
  }
}

export const ONEFINITY_POST: PostProcessor = {
  id: 'onefinity-buildbotics',
  description: 'Onefinity (Buildbotics, M6 tool change)',
  extension: 'nc',
  emit(program: ToolpathProgram): string {
    return new OnefinityEmitter().emit(program);
  },
};
