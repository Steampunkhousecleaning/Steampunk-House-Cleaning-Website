/**
 * costFaq.ts — reusable "How much does [service] cost in [City]?" FAQ item.
 *
 * Owner rule: NO prices, dollar figures, ranges, or "starting at" numbers —
 * ever. The answer explains what drives the price (home size, service type,
 * how often you book) and points to the free ~2-minute quote by form or
 * phone. Use it as the FIRST FAQ on new city/service pages, and feed the same
 * object to both the visible FAQ list and the FAQPage JSON-LD so they match.
 *
 * Wording rotates between a few natural variants (picked deterministically
 * from the city + service, so a page always renders the same text) and can
 * take an optional page-specific `localNote` sentence so answers are not
 * identical boilerplate across pages.
 *
 * Example:
 *   costFaq({ service: "deep cleaning", city: "Henderson",
 *     localNote: "Hard-water buildup in showers is the most common extra we plan for." })
 */
import { MAIN_PHONE } from "@/lib/phones";

export type CostFaqInput = {
  /** Lower-case service phrase as it reads mid-sentence, e.g. "house cleaning", "move-out cleaning". */
  service: string;
  /** City or area name, e.g. "Irvine", "Las Vegas". */
  city: string;
  /** Optional one-sentence local/service detail (no prices). */
  localNote?: string;
  /** Add the inside-oven add-on note (useful for move-out / deep cleaning). */
  mentionOvenAddOn?: boolean;
};

export type FaqItem = { q: string; a: string };

const PHONE = MAIN_PHONE.display;

const VARIANTS: ((service: string, city: string) => string)[] = [
  (service, city) =>
    `The price of ${service} in ${city} depends on your home's size, the type of service, and how often you book — a recurring visit is priced differently from a one-time clean. A free quote takes about 2 minutes: fill out our quote form or call ${PHONE}.`,
  (service, city) =>
    `Every ${city} home is different, so we quote ${service} based on the size of your home, the service you choose, and how often you want us to come. Getting a free quote takes about 2 minutes by our online form or a quick call to ${PHONE}.`,
  (service, city) =>
    `It comes down to three things: how big your home is, which service you need, and how often you book. Tell us about your ${city} home on the quote form or call ${PHONE} — a free ${service} quote takes about 2 minutes.`,
];

function pick(key: string): number {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return h % VARIANTS.length;
}

/** Guard: throws in dev/build if anything that looks like a price slips in. */
function assertNoPrices(text: string): string {
  if (/[$€£]|\d+\s*(dollars|usd)\b|starting at|from just/i.test(text)) {
    throw new Error(`costFaq: price-like text is not allowed: "${text}"`);
  }
  return text;
}

export function costFaq({ service, city, localNote, mentionOvenAddOn }: CostFaqInput): FaqItem {
  const parts = [VARIANTS[pick(`${city}|${service}`)](service, city)];
  if (localNote) parts.push(localNote.trim());
  if (mentionOvenAddOn) parts.push("Inside-oven cleaning is not included; it is a paid add-on you can request with your quote.");
  return {
    q: assertNoPrices(`How much does ${service} cost in ${city}?`),
    a: assertNoPrices(parts.join(" ")),
  };
}
