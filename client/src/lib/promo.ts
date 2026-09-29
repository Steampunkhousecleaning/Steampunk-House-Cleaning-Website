/**
 * Single source of truth for the current limited-time offer.
 * To change or remove: edit this file (or set PROMO to null). The offer
 * auto-hides in the browser once `endsAt` passes. No prices are ever shown —
 * conversion is the quote form or a phone call only.
 *
 * Note: pages are prerendered at build time, so crawlers see the offer text
 * until the next deploy after expiry; visitors' browsers hide it immediately.
 */
export type Promo = {
  /** Sent with form submissions as `promo` and appended to notes. */
  code: string;
  percentOff: number;
  /** ISO instant; offer shows before this. Jan 1 2027 00:00 PST (UTC-8) = Dec 31, 2026 11:59:59 PM PT + 1s. */
  endsAt: string;
  /** Optional ISO instant when the offer starts showing (null = immediately). */
  startsAt: string | null;
  shortLabel: string;
  blogLine: string;
  terms: string;
};

export const PROMO: Promo | null = {
  code: "Q4-15",
  percentOff: 15,
  endsAt: "2027-01-01T08:00:00Z", // PST after Nov 1, 2026 (DST ends) => UTC-8
  startsAt: null,
  shortLabel: "Book by Dec 31 and save 15%",
  blogLine: "Book by Dec 31 and save 15%.",
  terms:
    "Offer for new bookings made Oct 1 – Dec 31, 2026. Mention it when you call or add it to your quote request.",
};

export function getActivePromo(now: Date = new Date()): Promo | null {
  if (!PROMO) return null;
  const t = now.getTime();
  if (PROMO.startsAt && t < new Date(PROMO.startsAt).getTime()) return null;
  if (t >= new Date(PROMO.endsAt).getTime()) return null;
  return PROMO;
}

/** Text appended to lead notes so the offer is captured even if the sheet ignores `promo`. */
export function promoNote(): string {
  const p = getActivePromo();
  return p ? `Promo: ${p.code} (${p.percentOff}% off, new bookings Oct 1 – Dec 31, 2026)` : "";
}
