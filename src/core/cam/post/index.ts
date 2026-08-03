/**
 * Post processor registry.
 *
 * The toolpath layer emits a machine-agnostic op list, so supporting another
 * controller means adding a `PostProcessor` here and nothing else. The id is
 * what `MachineConfig.post` stores and what the manifest records.
 */

import type { PostProcessor } from '../program';
import { ONEFINITY_POST } from './onefinity';

export { ONEFINITY_POST } from './onefinity';

export const POST_PROCESSORS: readonly PostProcessor[] = [ONEFINITY_POST];

export const DEFAULT_POST_ID = ONEFINITY_POST.id;

export type PostProcessorId = 'onefinity-buildbotics';

/** The named post, falling back to the default rather than throwing. */
export function postProcessorFor(id: string): PostProcessor {
  return POST_PROCESSORS.find((post) => post.id === id) ?? ONEFINITY_POST;
}
