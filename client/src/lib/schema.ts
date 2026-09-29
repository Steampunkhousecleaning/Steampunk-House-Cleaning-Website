/**
 * Shared JSON-LD builders (pure functions, no React).
 *
 * Entity ids used across the site:
 *  - BUSINESS_ID  (#business)     the HomeAndConstructionBusiness defined in BUSINESS_JSON_LD (home page)
 *  - ORG_ID       (#organization) the brand Organization (blog author/publisher, About page)
 *  - WEBSITE_ID   (#website)      the WebSite
 * Every block only states things that are visible on the page it ships on.
 * No prices/offers and no rating/review markup are produced here.
 */
import { BUSINESS_JSON_LD } from "@/components/JsonLd";
import { SITE_ORIGIN } from "@/components/SEO";

export const BUSINESS_ID = `${SITE_ORIGIN}/#business`;
export const ORG_ID = `${SITE_ORIGIN}/#organization`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
export const BRAND_NAME = "Steampunk House Cleaning";
const LOGO_URL = `${SITE_ORIGIN}/logo.png`;
const CONTEXT = "https://schema.org";

/** Absolute, trailing-slash URL (matches canonical / sitemap). */
export function absUrl(path: string): string {
  if (path === "/" || path === "") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path.replace(/\/+$/, "")}/`;
}

/** Reference to the existing LocalBusiness entity (defined on the home page). */
const BUSINESS_REF = {
  "@type": "HomeAndConstructionBusiness",
  "@id": BUSINESS_ID,
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
    provider: BUSINESS_REF,
    // Same three real markets declared on the LocalBusiness entity.
    areaServed: BUSINESS_JSON_LD.areaServed.map((a) => ({ ...a })),
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
    alternateName: "Steampunk Cleaning Services",
    url: `${SITE_ORIGIN}/`,
    logo: { "@type": "ImageObject", url: LOGO_URL },
    telephone: "+17252553688",
    email: "info@steampunkhousecleaning.com",
    founder: founders.map((name) => ({ "@type": "Person", name })),
    subOrganization: { "@id": BUSINESS_ID },
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
