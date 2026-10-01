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

/** Site-wide service areas (used by the base service-page Service nodes). */
export const SERVICE_AREA_SERVED = [
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
] as const;

/**
 * Homepage-only graph: WebSite + Organization (official business name).
 * "GOOGLE_MAPS_PROFILE_URL" is an intentional placeholder; the owner will
 * supply the real Google Business Profile / Maps link.
 */
export const HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://steampunkcleaning.com/#website",
      name: "Steampunk House Cleaning",
      alternateName: ["Steampunk Cleaning"],
      url: "https://steampunkcleaning.com/",
    },
    {
      "@type": "Organization",
      "@id": "https://steampunkcleaning.com/#org",
      name: "Steampunk House Cleaning",
      url: "https://steampunkcleaning.com/",
      logo: "https://steampunkcleaning.com/logo.png",
      telephone: "+1-725-255-3688",
      email: "info@steampunkhousecleaning.com",
      sameAs: ["GOOGLE_MAPS_PROFILE_URL"],
    },
  ],
} as const;
