import type { ComputeRequest, ComputeResult, Design } from '../core/types';
import { computeGeometry } from './compute';

export interface WorkerLike {
  onmessage: ((event: MessageEvent<ComputeResult>) => void) | null;
  onmessageerror: ((event: MessageEvent<unknown>) => void) | null;
  onerror: ((event: Event) => void) | null;
  postMessage(message: ComputeRequest): void;
  terminate(): void;
}

export interface GeometryBridgeRequestOptions {
  needMesh?: boolean;
}

export interface ExportGeometryOptions {
  createWorker?: () => WorkerLike;
  generation?: number;
}

export interface GeometryBridgeOptions {
  onResult: (result: ComputeResult) => void;
  onError?: (error: unknown, request: ComputeRequest) => void;
  onFallback?: (reason: unknown) => void;
  createWorker?: () => WorkerLike;
  requestAnimationFrame?: (callback: FrameRequestCallback) => number;
  cancelAnimationFrame?: (handle: number) => void;
}

interface QueuedCompute {
  design: Design;
  needMesh: boolean;
}

function defaultCreateWorker(): WorkerLike {
  return new Worker(new URL('./geometry.worker.ts', import.meta.url), {
    type: 'module',
  }) as WorkerLike;
}

function defaultRequestAnimationFrame(callback: FrameRequestCallback): number {
  if (typeof globalThis.requestAnimationFrame === 'function') {
    return globalThis.requestAnimationFrame(callback);
  }

  return globalThis.setTimeout(() => {
    callback(globalThis.performance?.now() ?? Date.now());
  }, 0);
}

function defaultCancelAnimationFrame(handle: number): void {
  if (typeof globalThis.cancelAnimationFrame === 'function') {
    globalThis.cancelAnimationFrame(handle);
    return;
  }

  globalThis.clearTimeout(handle);
}

function cloneDesign(design: Design): Design {
  if (typeof globalThis.structuredClone === 'function') {
    return globalThis.structuredClone(design) as Design;
  }

  return JSON.parse(JSON.stringify(design)) as Design;
}

export class GeometryBridge {
  private readonly onResult: (result: ComputeResult) => void;
  private readonly onError?: (error: unknown, request: ComputeRequest) => void;
  private readonly onFallback?: (reason: unknown) => void;
  private readonly createWorker: () => WorkerLike;
  private readonly requestFrame: (callback: FrameRequestCallback) => number;
  private readonly cancelFrame: (handle: number) => void;

  private worker: WorkerLike | null = null;
  private useSynchronousHost = false;
  private disposed = false;
  private inFlight = false;
  private generation = 0;
  private activeRequest: ComputeRequest | null = null;
  private pending: QueuedCompute | null = null;
  private queuedForFrame: QueuedCompute | null = null;
  private frameHandle: number | null = null;

  constructor(options: GeometryBridgeOptions) {
    this.onResult = options.onResult;
    this.onError = options.onError;
    this.onFallback = options.onFallback;
    this.createWorker = options.createWorker ?? defaultCreateWorker;
    this.requestFrame = options.requestAnimationFrame ?? defaultRequestAnimationFrame;
    this.cancelFrame = options.cancelAnimationFrame ?? defaultCancelAnimationFrame;
  }

  get usingSynchronousFallback(): boolean {
    return this.useSynchronousHost;
  }

  request(design: Design, options: GeometryBridgeRequestOptions = {}): void {
    if (this.disposed) {
      return;
    }

    this.queueForNextFrame({
      design: cloneDesign(design),
      needMesh: options.needMesh ?? true,
    });
  }

  dispose(): void {
    this.disposed = true;

    if (this.frameHandle !== null) {
      this.cancelFrame(this.frameHandle);
      this.frameHandle = null;
    }

    this.worker?.terminate();
    this.worker = null;
    this.activeRequest = null;
    this.pending = null;
    this.queuedForFrame = null;
    this.inFlight = false;
  }

  private queueForNextFrame(job: QueuedCompute): void {
    this.queuedForFrame = job;

    if (this.frameHandle !== null) {
      return;
    }

    this.frameHandle = this.requestFrame(() => {
      this.frameHandle = null;

      if (this.disposed) {
        return;
      }

      const next = this.queuedForFrame;
      this.queuedForFrame = null;

      if (!next) {
        return;
      }

      if (this.inFlight) {
        this.pending = next;
        return;
      }

      this.start(next);
    });
  }

  private start(job: QueuedCompute): void {
    const request: ComputeRequest = {
      design: job.design,
      needMesh: job.needMesh,
      generation: (this.generation += 1),
    };

    this.inFlight = true;
    this.activeRequest = request;

    if (this.useSynchronousHost) {
      this.runActiveSynchronously();
      return;
    }

    try {
      this.ensureWorker().postMessage(request);
    } catch (error) {
      this.switchToSynchronousHost(error);
      this.runActiveSynchronously();
    }
  }

  private ensureWorker(): WorkerLike {
    if (this.worker) {
      return this.worker;
    }

    const worker = this.createWorker();
    worker.onmessage = this.handleWorkerMessage;
    worker.onerror = this.handleWorkerFailure;
    worker.onmessageerror = this.handleWorkerFailure;
    this.worker = worker;

    return worker;
  }

  private readonly handleWorkerMessage = (event: MessageEvent<ComputeResult>): void => {
    this.finish(event.data);
  };

  private readonly handleWorkerFailure = (event: Event): void => {
    event.preventDefault();

    const retry = this.activeRequest;
    this.switchToSynchronousHost(event);

    if (!retry) {
      this.inFlight = false;
      this.schedulePendingAfterCompletion();
      return;
    }

    this.activeRequest = retry;
    this.inFlight = true;
    this.runActiveSynchronously();
  };

  private switchToSynchronousHost(reason: unknown): void {
    if (this.useSynchronousHost) {
      return;
    }

    this.useSynchronousHost = true;
    this.worker?.terminate();
    this.worker = null;
    this.onFallback?.(reason);
  }

  private runActiveSynchronously(): void {
    const request = this.activeRequest;

    if (!request) {
      return;
    }

    try {
      this.finish(computeGeometry(request));
    } catch (error) {
      this.activeRequest = null;
      this.inFlight = false;
      this.onError?.(error, request);
      this.schedulePendingAfterCompletion();
    }
  }

  private finish(result: ComputeResult): void {
    const request = this.activeRequest;

    if (!request || result.generation !== request.generation) {
      return;
    }

    this.activeRequest = null;
    this.inFlight = false;
    this.onResult(result);
    this.schedulePendingAfterCompletion();
  }

  private schedulePendingAfterCompletion(): void {
    const next = this.pending;
    this.pending = null;

    if (next && this.queuedForFrame === null) {
      this.queueForNextFrame(next);
    }
  }
}

export function createGeometryBridge(options: GeometryBridgeOptions): GeometryBridge {
  return new GeometryBridge(options);
}

export function computeExportGeometry(
  design: Design,
  options: ExportGeometryOptions = {},
): Promise<ComputeResult> {
  const request: ComputeRequest = {
    design: cloneDesign(design),
    needMesh: false,
    generation: options.generation ?? 1,
  };
  const createWorker = options.createWorker ?? defaultCreateWorker;

  return new Promise((resolve, reject) => {
    let worker: WorkerLike | null = null;
    let settled = false;

    const terminate = (): void => {
      worker?.terminate();
      worker = null;
    };

    const resolveOnce = (result: ComputeResult): void => {
      if (settled) {
        return;
      }

      settled = true;
      terminate();
      resolve(result);
    };

    const rejectOnce = (error: unknown): void => {
      if (settled) {
        return;
      }

      settled = true;
      terminate();
      reject(error);
    };

    const runSynchronously = (): void => {
      terminate();

      try {
        resolveOnce(computeGeometry(request));
      } catch (error) {
        rejectOnce(error);
      }
    };

    try {
      worker = createWorker();
      worker.onmessage = (event) => {
        if (event.data.generation === request.generation) {
          resolveOnce(event.data);
        }
      };
      worker.onerror = (event) => {
        event.preventDefault();
        runSynchronously();
      };
      worker.onmessageerror = () => {
        runSynchronously();
      };
      worker.postMessage(request);
    } catch {
      runSynchronously();
    }
  });
}
