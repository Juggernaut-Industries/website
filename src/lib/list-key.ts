import { customRandom } from 'nanoid';

/**
 * Matches nanoid’s default URL-safe alphabet so generated keys look consistent
 * with other nanoid IDs in the project.
 */
const NANOID_URL_ALPHABET =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

const LIST_KEY_LENGTH = 10;

function fnv1a(fragments: readonly (string | number | undefined)[]): number {
  let h = 2166136261 >>> 0;
  for (const part of fragments) {
    const s = (part ?? '').toString();
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    h ^= 0x811c9dc5;
  }
  return h >>> 0;
}

function seededRandom(seed: number) {
  return (bytes: number): Uint8Array => {
    let state = seed >>> 0;
    const out = new Uint8Array(bytes);
    for (let i = 0; i < bytes; i++) {
      state =
        (Math.imul(state, 1664525) + 1013904223 + i * 7919) >>> 0;
      out[i] = state & 0xff;
    }
    return out;
  };
}

/**
 * Deterministic, URL-shaped key for React lists (SSR/hydration safe).
 *
 * Uses nanoid `customRandom` with a seeded byte stream derived from fragments,
 * never `nanoid()` at render/module scope — that can mismatch server vs browser.
 *
 * Prefer real domain IDs (`slug`, `project.id`) when you already have them.
 * Pass `positionalSalt` only to separate duplicate fragments in one list.
 */
export function listKey(
  fragments: readonly (string | number | undefined)[],
  positionalSalt?: string | number
): string {
  const seeded =
    positionalSalt === undefined
      ? fragments
      : [...fragments, '\u241e', positionalSalt];

  const h = fnv1a(seeded);
  const random = seededRandom(h);
  const shortId = customRandom(NANOID_URL_ALPHABET, LIST_KEY_LENGTH, random)();
  // Keep nanoid-shaped prefix; suffix encodes full 32‑bit digest so distinct
  // inputs never collide on the short string alone (fixes duplicate React keys).
  return `${shortId}-${h.toString(16).padStart(8, '0')}`;
}

export { nanoid } from 'nanoid';
