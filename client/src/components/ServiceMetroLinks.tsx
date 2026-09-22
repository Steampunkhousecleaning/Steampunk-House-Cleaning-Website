import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";

const METROS = [
  { label: "LA / Orange County", slug: "los-angeles-orange-county" },
  { label: "Las Vegas & Reno / Nevada", slug: "las-vegas-nevada" },
  { label: "Sacramento", slug: "sacramento" },
] as const;

type Props = {
  serviceSlug: "standard-cleaning" | "deep-cleaning" | "recurring-cleaning";
  serviceLabel: string;
};

/** Compact equal-weight metro deep links for base service pages (not a mega-menu). */
export function ServiceMetroLinks({ serviceSlug, serviceLabel }: Props) {
  return (
    <section style={{ padding: "36px 0", backgroundColor: "#f7fbff", borderTop: "1px solid #dde9f2" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
            fontWeight: 800,
            color: NAVY,
            marginBottom: 8,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {serviceLabel} by metro
        </h2>
        <p
          style={{
            fontSize: 14,
            color: "#5a6e80",
            marginBottom: 18,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Same service, local pages for each market we serve equally.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {METROS.map((m) => (
            <Link
              key={m.slug}
              href={`/locations/${m.slug}/${serviceSlug}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                backgroundColor: "#fff",
                border: "1.5px solid #dde9f2",
                borderRadius: 8,
                padding: "10px 14px",
                color: NAVY,
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
              }}
            >
              {m.label} <ArrowRight size={14} style={{ color: TEAL }} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
