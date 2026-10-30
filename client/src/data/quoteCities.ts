import { NEIGHBORHOODS, neighborhoodQuoteCity } from "@/data/neighborhoods";

/** Metro hub options (top-level, ungrouped). */
export const HUB_CITIES = [
  "Los Angeles / Orange County",
  "Las Vegas, NV",
  "Reno, NV",
  "Sacramento, CA",
];

/** Every city with its own page, grouped by market. Values match neighborhoodQuoteCity (prefill). */
export const CITY_GROUPS: { label: string; cities: string[] }[] = [
  { label: "Los Angeles / Orange County", slug: "los-angeles-orange-county" },
  { label: "Las Vegas", slug: "las-vegas-nevada" },
  { label: "Reno & Sparks", slug: "reno" },
  { label: "Sacramento", slug: "sacramento" },
].map((g) => ({
  label: g.label,
  cities: Array.from(
    new Set(
      (g.slug === "reno"
        ? NEIGHBORHOODS.filter((n) => n.parentHub?.path === "/locations/reno" || (n.metroSlug === "reno" && !n.parentHub))
        : NEIGHBORHOODS.filter((n) => n.metroSlug === g.slug && !n.parentHub)
      )
        .map(neighborhoodQuoteCity)
        .filter((c) => !HUB_CITIES.includes(c)),
    ),
  ),
}));

export const ALL_CITY_VALUES = new Set<string>([...HUB_CITIES, ...CITY_GROUPS.flatMap((g) => g.cities), "Other"]);
