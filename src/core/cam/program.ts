/**
 * The intermediate representation between toolpath building and g-code text.
 *
 * The op list is machine-agnostic: coordinates are already in machine space
 * (millimetres, X/Y from the stock's lower-left corner, Z zero at the stock top
 * with cuts negative), but nothing here knows about G-words, modal state or
 * dialect quirks. That is entirely the post processor's business, which is what
 * makes a second controller a new `PostProcessor` and nothing else.
 */

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export type ToolpathOp =
  | { kind: 'comment'; text: string }
  | {
      kind: 'section';
      toolNumber: number;
      toolDiameter: number;
      /** Flat end mills are the only tools ParaWave describes; defaults suit them. */
      cornerRadius?: number;
      fluteLength?: number;
      /** Included angle in degrees; 180 for a flat end mill. */
      angle?: number;
    }
  | { kind: 'spindle'; rpm: number }
  | { kind: 'rapid'; x?: number; y?: number; z?: number }
  | { kind: 'linear'; x?: number; y?: number; z?: number; feed: number };

export interface ToolpathProgram {
  /** Recorded in the header comment for traceability back to the design. */
  sourceFilename: string;
  stockMin: Vec3;
  stockMax: Vec3;
  ops: ToolpathOp[];
}

export interface PostProcessor {
  id: string;
  description: string;
  /** File extension, without a dot. */
  extension: string;
  emit(program: ToolpathProgram): string;
}
