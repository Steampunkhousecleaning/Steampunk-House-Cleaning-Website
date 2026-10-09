/**
 * Context-aware /get-a-quote link for shared chrome (navbar + footer CTAs).
 * - City pages (/locations/:metro/:city): pre-fill that city, e.g. "Irvine, CA".
 * - Service x metro pages (/locations/:metro/:service): same service + region value
 *   as the page's own CTAs (no specific city on those pages).
 * - Everywhere else: plain /get-a-quote (unchanged).
 */
import { getNeighborhood, neighborhoodQuoteCity } from "@/data/neighborhoods";
import { getServiceMetro } from "@/data/serviceMetros";

export function quoteHrefForPath(pathname: string): string {
  const parts = pathname.split(/[?#]/)[0].split("/").filter(Boolean);
  if (parts.length === 3 && parts[0] === "locations") {
    const [, metroSlug, childSlug] = parts;
    const neighborhood = getNeighborhood(metroSlug, childSlug);
    if (neighborhood) {
      return `/get-a-quote?city=${encodeURIComponent(neighborhoodQuoteCity(neighborhood))}`;
    }
    const serviceMetro = getServiceMetro(metroSlug, childSlug);
    if (serviceMetro) {
      return `/get-a-quote?service=${encodeURIComponent(serviceMetro.quoteService)}&city=${encodeURIComponent(serviceMetro.quoteCity)}`;
    }
  }
  return "/get-a-quote";
}
