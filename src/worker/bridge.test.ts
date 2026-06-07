import { describe, expect, it } from 'vitest';

import type { ComputeRequest, ComputeResult, Design } from '../core/types';
import {
  computeExportGeometry,
  createGeometryBridge,
  type WorkerLike,
} from './bridge';
import { computeGeometry, resultTransferList } from './compute';

const baseDesign: Design = {
  H: 24,
  W: 32,
  D: 10,
  pMin: 2,
  slatWidth: 6,
  gap: 2,
  fitTolerance: 0.05,
  displayUnit: 'mm',
  wave: {
    kind: 'diagonal',
    theta: 30,
    lambda: 40,
    phi: 0,
  },
};

class ManualFrames {
  private callbacks = new Map<number, FrameRequestCallback>();
  private nextHandle = 1;

  request = (callback: FrameRequestCallback): number => {
    const handle = this.nextHandle;
    this.nextHandle += 1;
    this.callbacks.set(handle, callback);
    return handle;
  };

  cancel = (handle: number): void => {
    this.callbacks.delete(handle);
  };

  flush(): void {
    const callbacks = [...this.callbacks.values()];
    this.callbacks.clear();

    for (const callback of callbacks) {
      callback(0);
    }
  }

  get size(): number {
    return this.callbacks.size;
  }
}

class FakeWorker implements WorkerLike {
  onmessage: ((event: MessageEvent<ComputeResult>) => void) | null = null;
  onmessageerror: ((event: MessageEvent<unknown>) => void) | null = null;
  onerror: ((event: Event) => void) | null = null;
  messages: ComputeRequest[] = [];
  terminated = false;

  postMessage(message: ComputeRequest): void {
    this.messages.push(message);
  }

  terminate(): void {
    this.terminated = true;
  }

  completeLast(): void {
    const request = this.messages.at(-1);

    if (!request) {
      throw new Error('No worker request to complete.');
    }

    this.onmessage?.(
      {
        data: {
          generation: request.generation,
          paths: [],
          observedDepth: { min: 0, max: 0 },
          totalSegments: 0,
        },
      } as unknown as MessageEvent<ComputeResult>,
    );
  }

  fail(): void {
    this.onerror?.({
      preventDefault: () => undefined,
    } as Event);
  }
}

function variant(width: number): Design {
  return {
    ...baseDesign,
    W: width,
  };
}

describe('geometry worker bridge', () => {
  it('builds optional mesh data and exposes every mesh buffer as transferable', () => {
    const result = computeGeometry({
      design: baseDesign,
      needMesh: true,
      generation: 7,
    });
    const transfers = resultTransferList(result);

    expect(result.generation).toBe(7);
    expect(result.paths.length).toBeGreaterThan(0);
    expect(result.mesh?.positions.length).toBeGreaterThan(0);
    expect(transfers).toEqual([
      result.mesh?.positions.buffer,
      result.mesh?.indices.buffer,
      result.mesh?.normals.buffer,
      result.mesh?.finRanges.buffer,
    ]);
  });

  it('coalesces public requests to one worker post per animation frame', () => {
    const frames = new ManualFrames();
    const worker = new FakeWorker();
    const results: ComputeResult[] = [];
    const bridge = createGeometryBridge({
      onResult: (result) => results.push(result),
      createWorker: () => worker,
      requestAnimationFrame: frames.request,
      cancelAnimationFrame: frames.cancel,
    });

    bridge.request(variant(40));
    bridge.request(variant(56), { needMesh: false });

    expect(worker.messages).toHaveLength(0);

    frames.flush();

    expect(worker.messages).toHaveLength(1);
    expect(worker.messages[0]?.design.W).toBe(56);
    expect(worker.messages[0]?.needMesh).toBe(false);
    expect(worker.messages[0]?.generation).toBe(1);

    worker.completeLast();

    expect(results).toHaveLength(1);
  });

  it('keeps a single in-flight request and only computes the latest pending design', () => {
    const frames = new ManualFrames();
    const worker = new FakeWorker();
    const bridge = createGeometryBridge({
      onResult: () => undefined,
      createWorker: () => worker,
      requestAnimationFrame: frames.request,
      cancelAnimationFrame: frames.cancel,
    });

    bridge.request(variant(40));
    frames.flush();

    expect(worker.messages).toHaveLength(1);
    expect(worker.messages[0]?.design.W).toBe(40);

    bridge.request(variant(48));
    frames.flush();
    bridge.request(variant(64));
    frames.flush();

    expect(worker.messages).toHaveLength(1);

    worker.completeLast();

    expect(frames.size).toBe(1);

    frames.flush();

    expect(worker.messages).toHaveLength(2);
    expect(worker.messages[1]?.design.W).toBe(64);
    expect(worker.messages[1]?.generation).toBe(2);
  });

  it('falls back to synchronous core computation when worker creation throws', () => {
    const frames = new ManualFrames();
    const results: ComputeResult[] = [];
    const fallbacks: unknown[] = [];
    const bridge = createGeometryBridge({
      onResult: (result) => results.push(result),
      onFallback: (reason) => fallbacks.push(reason),
      createWorker: () => {
        throw new Error('CSP blocked worker creation');
      },
      requestAnimationFrame: frames.request,
      cancelAnimationFrame: frames.cancel,
    });

    bridge.request(baseDesign, { needMesh: false });
    frames.flush();

    expect(bridge.usingSynchronousFallback).toBe(true);
    expect(fallbacks).toHaveLength(1);
    expect(results).toHaveLength(1);
    expect(results[0]?.paths.length).toBeGreaterThan(0);
    expect(results[0]?.mesh).toBeUndefined();
  });

  it('retries the active request synchronously after a worker error', () => {
    const frames = new ManualFrames();
    const worker = new FakeWorker();
    const results: ComputeResult[] = [];
    const bridge = createGeometryBridge({
      onResult: (result) => results.push(result),
      createWorker: () => worker,
      requestAnimationFrame: frames.request,
      cancelAnimationFrame: frames.cancel,
    });

    bridge.request(baseDesign, { needMesh: false });
    frames.flush();

    expect(worker.messages).toHaveLength(1);

    worker.fail();

    expect(worker.terminated).toBe(true);
    expect(bridge.usingSynchronousFallback).toBe(true);
    expect(results).toHaveLength(1);
    expect(results[0]?.generation).toBe(1);
    expect(results[0]?.paths.length).toBeGreaterThan(0);
  });

  it('runs export geometry immediately at full fidelity without a mesh', async () => {
    const worker = new FakeWorker();
    const resultPromise = computeExportGeometry(baseDesign, {
      createWorker: () => worker,
      generation: 12,
    });

    expect(worker.messages).toHaveLength(1);
    expect(worker.messages[0]).toMatchObject({
      generation: 12,
      needMesh: false,
    });

    worker.completeLast();

    const result = await resultPromise;
    expect(result.generation).toBe(12);
    expect(result.mesh).toBeUndefined();
    expect(worker.terminated).toBe(true);
  });

  it('falls back to synchronous geometry for a blocked export worker', async () => {
    const result = await computeExportGeometry(baseDesign, {
      createWorker: () => {
        throw new Error('CSP blocked export worker');
      },
    });

    expect(result.paths.length).toBeGreaterThan(0);
    expect(result.mesh).toBeUndefined();
  });
});
