/**
 * phones.ts — phone numbers used by the sticky mobile call bar.
 *
 * Metro-specific local numbers do not exist yet. When the owner gets them,
 * fill in METRO_PHONES below (keys are metro slugs from data/locations.ts);
 * any metro without an entry falls back to MAIN_PHONE.
 */

export type PhoneNumber = {
  /** Shown to the visitor, e.g. "(725) 255-3688" */
  display: string;
  /** Digits for the tel: link, e.g. "7252553688" */
  tel: string;
};

export const MAIN_PHONE: PhoneNumber = {
  display: "(725) 255-3688",
  tel: "7252553688",
};

/** Per-metro numbers. Leave empty until the owner supplies local numbers. */
export const METRO_PHONES: Partial<Record<string, PhoneNumber>> = {
  // "los-angeles-orange-county": { display: "(xxx) xxx-xxxx", tel: "xxxxxxxxxx" },
  // "las-vegas-nevada": { display: "(xxx) xxx-xxxx", tel: "xxxxxxxxxx" },
  // "sacramento": { display: "(xxx) xxx-xxxx", tel: "xxxxxxxxxx" },
};

/** Metro slug for /locations/<metro>[/...] paths, else undefined. */
export function metroSlugFromPath(pathname: string): string | undefined {
  const m = pathname.match(/^\/locations\/([^/]+)/);
  return m ? m[1] : undefined;
}

export function getPhoneForPath(pathname: string): PhoneNumber {
  const slug = metroSlugFromPath(pathname);
  return (slug && METRO_PHONES[slug]) || MAIN_PHONE;
}
