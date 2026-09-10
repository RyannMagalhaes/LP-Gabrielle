/**
 * Single source of truth for the Instagram profile link.
 * Never hardcode instagram.com URLs elsewhere - always go through buildInstagramProfileUrl().
 */

export const INSTAGRAM_HANDLE = 'gabriellefavere.psi';

export function buildInstagramProfileUrl(): string {
  return `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
}
