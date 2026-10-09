/**
 * LocationMetro.tsx — /locations/:slug
 * Metro hubs for Los Angeles & Orange County, Las Vegas, and Sacramento (Reno has its own hub).
 */

import { useState, type CSSProperties } from "react";
import { Link, useParams } from "wouter";
import { Navbar, Footer } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import { PROVIDER_REF, breadcrumbSchema, locationBusinessSchema } from "@/lib/schema";
import { getMetroBySlug } from "@/data/locations";
import { getNeighborhoodsForMetro } from "@/data/neighborhoods";
import { getServiceMetrosForMetro, metroQuoteCity } from "@/data/serviceMetros";
import NotFound from "@/pages/NotFound";
import { MOVE_OUT_CARD_OVERRIDES } from "@/data/localMoveOut";
import { RENO_HUB } from "@/data/renoHub";
import {
  MapPin,
  CheckCircle,
  ArrowRight,
  Phone,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const ICE = "#B5E1F2";

function LocalFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      {faqs.map((faq, i) => (
        <div key={faq.q} style={{ borderBottom: "1px solid #e8edf2" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "18px 0",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              gap: 12,
            }}
            aria-expanded={open === i}
          >
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: NAVY,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                lineHeight: 1.4,
              }}
            >
              {faq.q}
            </span>
            {open === i ? (
              <ChevronUp size={18} style={{ color: TEAL, flexShrink: 0 }} />
            ) : (
              <ChevronDown size={18} style={{ color: TEAL, flexShrink: 0 }} />
            )}
          </button>
          {open === i && (
            <p
              style={{
                fontSize: 15,
                color: "#5a6e80",
                lineHeight: 1.75,
                margin: "0 0 18px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function LocationMetro() {
  const params = useParams<{ slug?: string }>();
  const metro = getMetroBySlug(params.slug);

  if (!metro) {
    return <NotFound />;
  }

  const neighborhoods = getNeighborhoodsForMetro(metro.slug);
  const serviceMetros = getServiceMetrosForMetro(metro.slug);
  const regionCity = metroQuoteCity(metro.slug);
  const quoteHref = regionCity ? `/get-a-quote?city=${encodeURIComponent(regionCity)}` : "/get-a-quote";
  const neighborhoodByName = new Map(
    neighborhoods.map((n) => [n.name.toLowerCase(), n]),
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: metro.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const localBusiness = locationBusinessSchema(metro.path);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `House Cleaning in ${metro.name}`,
    provider: PROVIDER_REF,
    areaServed: {
      "@type": "AdministrativeArea",
      name: metro.name.endsWith(metro.stateLabel)
        ? metro.name
        : `${metro.name}, ${metro.stateLabel}`,
    },
    url: `https://steampunkcleaning.com${metro.path}/`,
    description: metro.description,
  };

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO title={metro.title} description={metro.description} path={metro.path} />
      <JsonLd id={`faq-${metro.slug}`} data={faqSchema} />
      <JsonLd id={`service-${metro.slug}`} data={serviceSchema} />
      {localBusiness && <JsonLd id={`local-business-${metro.slug}`} data={localBusiness} />}
      <JsonLd
        id={`breadcrumb-${metro.slug}`}
        data={breadcrumbSchema([
          { name: "Locations", path: "/locations" },
          { name: metro.name, path: metro.path },
        ])}
      />

      <section
        className="hero-pt"
        style={{
          paddingBottom: 44,
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
            <MapPin size={12} />
            {metro.stateLabel} · {metro.shortName}
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: NAVY,
              lineHeight: 1.15,
              marginBottom: 20,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {metro.h1}{" "}
            <span style={{ color: TEAL }}>{metro.h1Accent}</span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "#4a5e6e",
              lineHeight: 1.7,
              maxWidth: 680,
              margin: "0 auto 24px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {metro.intro[0]}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link
              href={quoteHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: TEAL,
                color: "#fff",
                padding: "12px 22px",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:7252553688"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#fff",
                color: NAVY,
                padding: "12px 22px",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                border: "1.5px solid #dde9f2",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <Phone size={16} style={{ color: TEAL }} />
              (725) 255-3688
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>
          <p
            style={{
              fontSize: 16,
              color: "#5a6e80",
              lineHeight: 1.8,
              marginBottom: 24,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {metro.intro[1]}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {metro.highlights.map((h) => (
              <div
                key={h}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  backgroundColor: "#f7fbff",
                  border: "1px solid #dde9f2",
                  borderRadius: 10,
                  padding: "12px 14px",
                }}
              >
                <CheckCircle size={18} style={{ color: TEAL, flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: NAVY,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {h}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0", backgroundColor: "#f7fbff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                fontWeight: 800,
                color: NAVY,
                marginBottom: 10,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Services available in {metro.shortName}
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#5a6e80",
                fontFamily: "'DM Sans', sans-serif",
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              Same service menu in Los Angeles & Orange County, Las Vegas, Reno, and Sacramento.
              Pick what you need, then request a local quote.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {metro.services.map((s) => {
              const local = serviceMetros.find((sm) => sm.serviceLabel === s.label);
              // Hub Move-In / Move-Out card -> local move-out page where one exists
              const moveOutLocal =
                s.href === "/move-in-move-out" ? MOVE_OUT_CARD_OVERRIDES[metro.slug] : undefined;
              const href = moveOutLocal ?? (local ? local.path : s.href);
              return (
              <Link key={s.href} href={href}>
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "#fff",
                    border: "1.5px solid #dde9f2",
                    borderRadius: 12,
                    padding: "20px",
                    cursor: "pointer",
                    boxSizing: "border-box",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: NAVY,
                      marginBottom: 8,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {s.label}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#5a6e80",
                      lineHeight: 1.6,
                      marginBottom: 12,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {s.blurb}
                  </p>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: TEAL,
                      fontFamily: "'DM Sans', sans-serif",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {neighborhoods.length > 0 && (
        <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                  fontWeight: 800,
                  color: NAVY,
                  marginBottom: 10,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Featured cities in {metro.shortName}
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "#5a6e80",
                  fontFamily: "'DM Sans', sans-serif",
                  maxWidth: 560,
                  margin: "0 auto",
                }}
              >
                Deeper local pages for high-intent cities we commonly serve.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              {neighborhoods.map((n) => (
                <Link key={n.path} href={n.path}>
                  <div
                    style={{
                      backgroundColor: "#f7fbff",
                      border: "1.5px solid #dde9f2",
                      borderRadius: 12,
                      padding: "18px 20px",
                      cursor: "pointer",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: NAVY,
                        marginBottom: 6,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {n.name}
                    </h3>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: TEAL,
                        fontFamily: "'DM Sans', sans-serif",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      {n.name} cleaning <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: "40px 0", backgroundColor: neighborhoods.length ? "#f7fbff" : "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                fontWeight: 800,
                color: NAVY,
                marginBottom: 10,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {metro.areasHeading}
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#5a6e80",
                fontFamily: "'DM Sans', sans-serif",
                maxWidth: 640,
                margin: "0 auto",
                lineHeight: 1.65,
              }}
            >
              {metro.areasNote}
            </p>
            {metro.slug === "las-vegas-nevada" && (
              <p
                style={{
                  fontSize: 15,
                  color: "#5a6e80",
                  fontFamily: "'DM Sans', sans-serif",
                  maxWidth: 640,
                  margin: "10px auto 0",
                  lineHeight: 1.65,
                }}
              >
                In Reno or Sparks? See our{" "}
                <Link href={RENO_HUB.path} style={{ color: TEAL, fontWeight: 700 }}>
                  Reno &amp; Sparks house cleaning
                </Link>{" "}
                page.
              </p>
            )}
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: "0.65rem",
            }}
          >
            {metro.areas.map((area) => {
              const nbh = neighborhoodByName.get(area.toLowerCase());
              const itemStyle: CSSProperties = {
                display: "flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: neighborhoods.length ? "#fff" : "#f7fbff",
                border: "1px solid #dde9f2",
                borderRadius: 8,
                padding: "10px 12px",
                fontSize: 14,
                color: NAVY,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                textDecoration: "none",
              };
              return nbh ? (
                <li key={area} style={{ listStyle: "none" }}>
                  <Link href={nbh.path} style={itemStyle}>
                    <span style={{ color: TEAL, fontSize: 10 }}>●</span>
                    {area}
                  </Link>
                </li>
              ) : (
                <li key={area} style={itemStyle}>
                  <span style={{ color: TEAL, fontSize: 10 }}>●</span>
                  {area}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section style={{ padding: "40px 0", backgroundColor: "#f7fbff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
              fontWeight: 800,
              color: NAVY,
              marginBottom: 8,
              textAlign: "center",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {metro.shortName} cleaning FAQs
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#5a6e80",
              textAlign: "center",
              marginBottom: 28,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Local answers for {metro.name}. More sitewide questions on our{" "}
            <Link href="/faq" style={{ color: TEAL, fontWeight: 700 }}>
              FAQ page
            </Link>
            .
          </p>
          <LocalFaq faqs={metro.faqs} />
        </div>
      </section>

      <section style={{ padding: "48px 0", backgroundColor: NAVY }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 12,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Ready for a clean in {metro.shortName}?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              marginBottom: 24,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Tell us your city, home size, and service type. We call back with a clear quote — no
            commitment until you are ready.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link
              href={quoteHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: TEAL,
                color: "#fff",
                padding: "14px 24px",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Get a Free Quote
            </Link>
            <Link
              href="/locations"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "transparent",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.35)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              All locations
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
