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
 * sameAs: the two Google Maps profiles (Las Vegas/Nevada, LA/OC/Sacramento).
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
      sameAs: [
        "https://www.google.com/maps/place/Steampunk+House+Cleaning/@37.8099795,-117.4496316,7z/data=!3m1!4m6!3m5!1s0x8d2c4df7c357f579:0xc7f4d451e4317a4b!8m2!3d37.8099795!4d-117.4496316!16s%2Fg%2F11y5y03lkw",
        "https://www.google.com/maps/place/Steampunk+House+Cleaning/@36.2162789,-119.8579726,7z/data=!3m1!4m6!3m5!1s0x253fd4c9f81a325b:0xe857a2f5aa4cda2b!8m2!3d36.2162789!4d-119.8579726!16s%2Fg%2F11w813j9pr",
      ],
    },
  ],
} as const;
