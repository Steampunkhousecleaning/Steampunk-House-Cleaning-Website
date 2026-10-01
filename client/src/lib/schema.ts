/**
 * Shared JSON-LD builders (pure functions, no React).
 *
 * Entity ids used across the site:
 *  - ORG_ID       (#org)          the brand Organization (defined in the home page graph; also
 *                                 referenced by blog author/publisher, About page, Service providers,
 *                                 and the metro-hub LocalBusiness parentOrganization)
 *  - WEBSITE_ID   (#website)      the WebSite (defined in the home page graph)
 * Every block only states things that are visible on the page it ships on.
 * No prices/offers and no rating/review markup are produced here.
 */
import { SERVICE_AREA_SERVED } from "@/components/JsonLd";
import { SITE_ORIGIN } from "@/components/SEO";

export const ORG_ID = `${SITE_ORIGIN}/#org`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
export const BRAND_NAME = "Steampunk House Cleaning";
const LOGO_URL = `${SITE_ORIGIN}/logo.png`;
const CONTEXT = "https://schema.org";

/** Absolute, trailing-slash URL (matches canonical / sitemap). */
export function absUrl(path: string): string {
  if (path === "/" || path === "") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path.replace(/\/+$/, "")}/`;
}

/** Service provider reference: the brand Organization defined on the home page. */
export const PROVIDER_REF = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: BRAND_NAME,
} as const;

export const ORG_REF = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: BRAND_NAME,
  url: `${SITE_ORIGIN}/`,
  logo: { "@type": "ImageObject", url: LOGO_URL },
} as const;

const WEBSITE_REF = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: BRAND_NAME,
  url: `${SITE_ORIGIN}/`,
} as const;

export type Crumb = { name: string; path: string };

/** BreadcrumbList; "Home" is prepended automatically. */
export function breadcrumbSchema(trail: Crumb[]) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absUrl(c.path),
    })),
  };
}

type PageType =
  | "WebPage"
  | "AboutPage"
  | "ContactPage"
  | "CollectionPage";

export function webPageSchema(opts: {
  type?: PageType;
  path: string;
  name: string;
  description: string;
  extra?: Record<string, unknown>;
}) {
  const url = absUrl(opts.path);
  return {
    "@context": CONTEXT,
    "@type": opts.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: "en-US",
    isPartOf: WEBSITE_REF,
    ...opts.extra,
  };
}

/** Service schema for the base service pages. No price / offers. */
export function serviceSchema(opts: {
  path: string;
  name: string;
  serviceType: string;
  description: string;
}) {
  const url = absUrl(opts.path);
  return {
    "@context": CONTEXT,
    "@type": "Service",
    "@id": `${url}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url,
    provider: PROVIDER_REF,
    // The three real markets we serve.
    areaServed: SERVICE_AREA_SERVED.map((a) => ({ ...a })),
  };
}

export function aboutPageSchema(opts: {
  path: string;
  name: string;
  description: string;
}) {
  return webPageSchema({
    type: "AboutPage",
    ...opts,
    extra: { about: { "@id": ORG_ID } },
  });
}

/** Brand Organization with founders (first names only, as shown on /about). */
export function organizationSchema(founders: string[]) {
  return {
    "@context": CONTEXT,
    "@type": "Organization",
    "@id": ORG_ID,
    name: BRAND_NAME,
    alternateName: "Steampunk Cleaning",
    url: `${SITE_ORIGIN}/`,
    logo: { "@type": "ImageObject", url: LOGO_URL },
    telephone: "+17252553688",
    email: "info@steampunkhousecleaning.com",
    founder: founders.map((name) => ({ "@type": "Person", name })),
  };
}

export type BlogPostLike = {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  dateModified?: string;
};

export function blogPostingSchema(post: BlogPostLike) {
  const url = absUrl(`/blog/${post.slug}`);
  return {
    "@context": CONTEXT,
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    inLanguage: "en-US",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: ORG_REF,
    publisher: ORG_REF,
    isPartOf: { "@id": `${absUrl("/blog")}#blog` },
  };
}

export function blogSchema(opts: {
  name: string;
  description: string;
  posts: BlogPostLike[];
}) {
  const url = absUrl("/blog");
  return {
    "@context": CONTEXT,
    "@type": "Blog",
    "@id": `${url}#blog`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: "en-US",
    publisher: ORG_REF,
    blogPost: opts.posts.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${absUrl(`/blog/${p.slug}`)}#article`,
      headline: p.title,
      url: absUrl(`/blog/${p.slug}`),
      datePublished: p.date,
    })),
  };
}

/**
 * One LocalBusiness block per metro hub (server-rendered into <head> by the
 * prerender). No street address, no rating markup.
 */
const LOCATION_AREAS: Record<string, string[]> = {
  "/locations/los-angeles-orange-county": [
    "Los Angeles", "Santa Monica", "Pasadena", "Glendale", "Burbank", "Long Beach",
    "Torrance", "Irvine", "Anaheim", "Newport Beach", "Huntington Beach",
    "Costa Mesa", "Santa Ana",
  ],
  "/locations/las-vegas-nevada": [
    "Las Vegas", "Henderson", "Summerlin", "North Las Vegas", "Paradise",
    "Spring Valley", "Enterprise", "Boulder City",
  ],
  "/locations/las-vegas-nevada/reno": ["Reno", "Sparks"],
  "/locations/sacramento": [
    "Sacramento", "Roseville", "Elk Grove", "Folsom", "Rancho Cordova",
    "Citrus Heights", "Carmichael", "Davis", "West Sacramento",
  ],
};

export function locationBusinessSchema(path: string) {
  const areaServed = LOCATION_AREAS[path.replace(/\/+$/, "")];
  if (!areaServed) return null;
  return {
    "@context": CONTEXT,
    "@type": "LocalBusiness",
    name: BRAND_NAME,
    url: absUrl(path),
    telephone: "+1-725-255-3688",
    image: LOGO_URL,
    parentOrganization: { "@id": ORG_ID },
    areaServed,
    openingHours: "Mo-Sa 08:00-18:00",
  };
}
