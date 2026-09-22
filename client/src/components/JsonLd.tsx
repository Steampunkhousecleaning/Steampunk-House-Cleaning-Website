/**
 * Injects JSON-LD into <head> so prerender captures structured data.
 */
import { useEffect } from "react";

type JsonLdProps = {
  id: string;
  data: object;
};

export function JsonLd({ id, data }: JsonLdProps) {
  useEffect(() => {
    const scriptId = `jsonld-${id}`;
    let el = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.id = scriptId;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [id, data]);

  return null;
}

export const BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://steampunkcleaning.com/#business",
  name: "Steampunk House Cleaning",
  alternateName: "Steampunk Cleaning Services",
  url: "https://steampunkcleaning.com",
  telephone: "+17252553688",
  email: "info@steampunkhousecleaning.com",
  image: "https://steampunkcleaning.com/logo.png",
  logo: "https://steampunkcleaning.com/logo.png",
  priceRange: "$$",
  description:
    "Professional house cleaning across Los Angeles / Orange County, Las Vegas & Reno / Nevada, and Sacramento. Background-checked cleaners, documented checklists, 4.9★ with 450+ Google reviews.",
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Los Angeles / Orange County, California",
    },
    {
      "@type": "AdministrativeArea",
      name: "Las Vegas & Reno / Nevada",
    },
    {
      "@type": "AdministrativeArea",
      name: "Sacramento, California",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "450",
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+17252553688",
    contactType: "customer service",
    email: "info@steampunkhousecleaning.com",
    areaServed: ["US-CA", "US-NV"],
    availableLanguage: ["English"],
  },
} as const;
