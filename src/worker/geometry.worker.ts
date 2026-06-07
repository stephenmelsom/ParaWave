import type { ComputeRequest, ComputeResult } from '../core/types';
import { computeGeometry, resultTransferList } from './compute';

const workerScope = self as unknown as {
  addEventListener(
    type: 'message',
    listener: (event: MessageEvent<ComputeRequest>) => void,
  ): void;
  postMessage(message: ComputeResult, transfer: Transferable[]): void;
};

workerScope.addEventListener('message', (event) => {
  const result = computeGeometry(event.data);

  workerScope.postMessage(result, resultTransferList(result));
});
