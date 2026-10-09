/**
 * draftFlags.ts — build-time switches for owner-review drafts.
 *
 * SHOW_DRAFT_PRICING: "Starting at" pricing blocks only contain
 * [OWNER: add price] placeholders until the owner supplies real prices, so
 * they are HIDDEN by default (production / Netlify builds render nothing).
 * To preview the placeholder block locally:
 *   VITE_SHOW_DRAFT_PRICING=true pnpm run build:static
 * Never set this on Netlify until real, owner-approved prices replace the
 * placeholders.
 */
export const SHOW_DRAFT_PRICING: boolean =
  import.meta.env.VITE_SHOW_DRAFT_PRICING === "true";
