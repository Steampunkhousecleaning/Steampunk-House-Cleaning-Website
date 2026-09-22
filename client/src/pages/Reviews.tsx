/**
 * Reviews.tsx — /reviews hub with metro filter chips
 * Quotes from Google Business 5★ reviews and existing site copy (see data/reviews.ts).
 */

import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Navbar, Footer } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import {
  METRO_CHIPS,
  REVIEW_STATS,
  SITE_REVIEWS,
  type MetroFilter,
} from "@/data/reviews";
import { Star, MapPin, ArrowRight, Search, Phone } from "lucide-react";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const ICE = "#B5E1F2";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill={TEAL} style={{ color: TEAL }} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [metro, setMetro] = useState<MetroFilter>("all");

  const filtered = useMemo(() => {
    const list =
      metro === "all"
        ? SITE_REVIEWS
        : SITE_REVIEWS.filter((r) => r.metro === metro);
    // Same Google quote may be tagged to multiple metros for filter depth —
    // show each unique text once on "All".
    if (metro !== "all") return list;
    const seen = new Set<string>();
    return list.filter((r) => {
      if (seen.has(r.text)) return false;
      seen.add(r.text);
      return true;
    });
  }, [metro]);

  const aggregateSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Steampunk House Cleaning",
    url: "https://steampunkcleaning.com/reviews",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(REVIEW_STATS.ratingValue),
      bestRating: "5",
      worstRating: "1",
      reviewCount: String(REVIEW_STATS.reviewCount),
    },
  };

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO
        title="Customer Reviews | Steampunk House Cleaning"
        description={`Read customer reviews of Steampunk House Cleaning across LA/OC, Las Vegas & Reno, and Sacramento. ${REVIEW_STATS.ratingValue}★ average from ${REVIEW_STATS.reviewCount}+ Google reviews.`}
        path="/reviews"
      />
      <JsonLd id="reviews-aggregate" data={aggregateSchema} />

      <section
        className="hero-pt"
        style={{
          paddingBottom: 36,
          background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fb 100%)",
          borderBottom: "1px solid #dde9f2",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              backgroundColor: ICE,
              color: NAVY,
              padding: "5px 14px",
              borderRadius: 100,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 20,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <Star size={12} fill={TEAL} style={{ color: TEAL }} />
            {REVIEW_STATS.ratingValue}★ · {REVIEW_STATS.reviewCount}+ Google reviews
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: NAVY,
              lineHeight: 1.15,
              marginBottom: 16,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            What homeowners say{" "}
            <span style={{ color: TEAL }}>across our metros</span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "#4a5e6e",
              lineHeight: 1.7,
              maxWidth: 640,
              margin: "0 auto",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            A selection of quotes already featured on our site from clients in Los Angeles /
            Orange County, Las Vegas & Reno / Nevada, and Sacramento. Filter by metro below — including Reno.
          </p>
        </div>
      </section>

      <section style={{ padding: "28px 0 8px", backgroundColor: "#fff" }}>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
          }}
          role="group"
          aria-label="Filter reviews by metro"
        >
          {METRO_CHIPS.map((chip) => {
            const active = metro === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                onClick={() => setMetro(chip.id)}
                aria-pressed={active}
                style={{
                  padding: "10px 18px",
                  borderRadius: 100,
                  border: active ? `2px solid ${TEAL}` : "1.5px solid #dde9f2",
                  backgroundColor: active ? `${TEAL}14` : "#fff",
                  color: active ? TEAL : NAVY,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
      </section>

      <section style={{ padding: "24px 0 40px", backgroundColor: "#fff" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {filtered.map((r) => (
            <article
              key={`${r.name}-${r.service}-${r.location}`}
              style={{
                backgroundColor: "#fff",
                border: "1.5px solid #dde9f2",
                borderRadius: 14,
                padding: "22px 20px",
                boxShadow: "0 2px 8px rgba(61,82,102,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <Stars />
              <p
                style={{
                  fontSize: 14.5,
                  color: "#4a5e6e",
                  lineHeight: 1.7,
                  margin: 0,
                  flex: 1,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                &ldquo;{r.text}&rdquo;
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  gap: 10,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: NAVY,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {r.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      color: "#6a7e8e",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      marginTop: 2,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    <MapPin size={12} /> {r.location}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 11.5,
                    fontWeight: 600,
                    color: TEAL,
                    backgroundColor: `${TEAL}12`,
                    padding: "4px 8px",
                    borderRadius: 6,
                    whiteSpace: "nowrap",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {r.service}
                </span>
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "#5a6e80",
              fontFamily: "'DM Sans', sans-serif",
              padding: "2rem",
            }}
          >
            No quotes for this metro yet — try All, or{" "}
            <Link href="/get-a-quote" style={{ color: TEAL, fontWeight: 600 }}>
              request a quote
            </Link>
            .
          </p>
        )}
      </section>

      <section style={{ padding: "8px 0 48px", backgroundColor: "#fff" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          <div
            style={{
              backgroundColor: "#f7fbff",
              border: "1.5px solid #dde9f2",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h2
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: NAVY,
                marginBottom: 8,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Search size={16} style={{ color: TEAL }} />
              Leave a Google review
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#5a6e80",
                lineHeight: 1.65,
                margin: "0 0 12px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Happy with your clean? Search{" "}
              <strong>Steampunk House Cleaning</strong> on Google and leave a review for your
              local listing — it helps neighbors find a reliable team.
            </p>
          </div>
          <Link href="/get-a-quote">
            <div
              style={{
                backgroundColor: "#f7fbff",
                border: "1.5px solid #dde9f2",
                borderRadius: 12,
                padding: 20,
                height: "100%",
                boxSizing: "border-box",
                cursor: "pointer",
              }}
            >
              <h2
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: NAVY,
                  marginBottom: 8,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                Get a free quote <ArrowRight size={14} style={{ color: TEAL }} />
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "#5a6e80",
                  lineHeight: 1.65,
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Two-minute form. We serve LA / OC, Las Vegas & Reno / Nevada, and Sacramento equally.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section style={{ padding: "40px 0", backgroundColor: NAVY }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 12,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Ready for your own clean?
          </h2>
          <a
            href="tel:7252553688"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#fff",
              fontSize: 18,
              fontWeight: 700,
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <Phone size={18} style={{ color: TEAL }} />
            (725) 255-3688
          </a>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.65)",
              marginTop: 10,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Licensed · Bonded · Insured · LA/OC · Las Vegas & Reno · Sacramento
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
