/**
 * Light per-route document head helper for the SPA.
 * Sets title, description, canonical, Open Graph, and Twitter tags.
 */
import { useEffect } from "react";

export const SITE_ORIGIN = "https://steampunkcleaning.com";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/logo.png`;

export type SEOProps = {
  title: string;
  description: string;
  /** Path only, e.g. "/" or "/about" */
  path: string;
  noindex?: boolean;
  ogImage?: string;
};

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
) {
  let el = document.head.querySelector(
    `meta[${attr}="${key}"]`,
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function SEO({
  title,
  description,
  path,
  noindex = false,
  ogImage = DEFAULT_OG_IMAGE,
}: SEOProps) {
  useEffect(() => {
    const url =
      path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertLink("canonical", url);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:site_name", "Steampunk House Cleaning");

    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    upsertMeta(
      "name",
      "robots",
      noindex ? "noindex, follow" : "index, follow",
    );
  }, [title, description, path, noindex, ogImage]);

  return null;
}
