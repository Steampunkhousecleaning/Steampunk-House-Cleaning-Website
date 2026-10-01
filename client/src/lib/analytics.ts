/**
 * analytics.ts — GA4 helpers (Measurement ID G-JZ2CGFWDZR, loaded in client/index.html).
 *
 * Everything here is a safe no-op if gtag is missing (blocked by an ad blocker,
 * prerender, SSR, tests). NEVER pass personal data (name, phone, email, address,
 * free-text notes) as event params.
 */

type GtagFn = (...args: unknown[]) => void;
type Params = Record<string, string | number | boolean>;

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const g = (window as unknown as { gtag?: unknown }).gtag;
  return typeof g === "function" ? (g as GtagFn) : null;
}

/** Fire a GA4 event; never throws. */
export function trackEvent(name: string, params: Params = {}): void {
  try {
    getGtag()?.("event", name, params);
  } catch {
    /* analytics must never break the site */
  }
}

/**
 * SPA page_view strategy
 * ----------------------
 * First load: gtag('config', ID) in index.html sends the page_view (the prerendered <title> is
 * already correct), so we never send a second one on mount.
 * Route changes: GA4 Enhanced Measurement ("Page changes based on browser history events",
 * ON by default for web streams) already emits a page_view on every history.pushState /
 * popstate. Sending our own as well would DOUBLE-COUNT, so manual SPA page_views are OFF.
 * If that Enhanced Measurement toggle is ever turned off in the GA4 stream settings, flip this to
 * true (it then sends exactly one page_view per route change, de-duplicated by URL).
 */
export const MANUAL_SPA_PAGE_VIEWS = false;

let lastPageViewKey = "";

/** Manual page_view for the current URL (only used when MANUAL_SPA_PAGE_VIEWS is true). */
export function trackPageView(): void {
  if (!MANUAL_SPA_PAGE_VIEWS) return;
  if (typeof window === "undefined") return;
  const key = window.location.pathname + window.location.search;
  if (key === lastPageViewKey) return; // guard against accidental double-fire
  lastPageViewKey = key;
  trackEvent("page_view", {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  });
}

/** "/" -> "home", "/get-a-quote/" -> "get-a-quote", "/locations/x/y/" -> "locations/x/y" */
export function formLocationFromPath(pathname: string): string {
  const p = pathname.replace(/^\/+|\/+$/g, "");
  return p === "" ? "home" : p;
}

const clean = (v?: string) => (v ? v.trim().slice(0, 100) : "");

/**
 * generate_lead — call ONLY after the lead webhook call resolved successfully.
 * city / service are the dropdown selections (not personal data).
 */
export function trackLead(opts: { formLocation?: string; city?: string; service?: string } = {}): void {
  const params: Params = {
    form_location: opts.formLocation || formLocationFromPath(window.location.pathname),
  };
  const city = clean(opts.city);
  const service = clean(opts.service);
  if (city) params.city = city;
  if (service) params.service = service;
  trackEvent("generate_lead", params);
}

/** Where on the page a tel: link lives. Explicit data-ga-location wins. */
function telLinkLocation(a: Element): string {
  const tagged = a.closest("[data-ga-location]")?.getAttribute("data-ga-location");
  if (tagged) return tagged;
  if (a.closest(".sticky-call-bar")) return "call_bar";
  if (a.closest("header")) return "header";
  if (a.closest("footer")) return "footer";
  if (a.closest(".hero-pt")) return "hero";
  return "page";
}

/**
 * click_to_call via event delegation: one document listener covers every current and
 * future tel: link (header, mobile menu, footer, hero, call bar, in-content links).
 * Returns a cleanup function.
 */
export function initTelClickTracking(): () => void {
  if (typeof document === "undefined") return () => {};
  const onClick = (e: MouseEvent) => {
    const target = e.target as Element | null;
    const a = target?.closest?.('a[href^="tel:" i]');
    if (!a) return;
    trackEvent("click_to_call", {
      link_location: telLinkLocation(a),
      page_path: window.location.pathname,
    });
  };
  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}
