/**
 * ServiceMetro.tsx — /locations/:metro/:service
 */

import { useState } from "react";
import { Link } from "wouter";
import { Navbar, Footer } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import { getMetroBySlug } from "@/data/locations";
import type { ServiceMetro as ServiceMetroData } from "@/data/serviceMetros";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  ChevronDown,
  ChevronUp,
  MapPin,
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

export default function ServiceMetro({ page }: { page: ServiceMetroData }) {
  const metro = getMetroBySlug(page.metroSlug);
  const quoteHref = `/get-a-quote?service=${encodeURIComponent(page.quoteService)}&city=${encodeURIComponent(page.quoteCity)}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${page.serviceLabel} in ${page.metroName}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Steampunk House Cleaning",
      telephone: "+17252553688",
      url: "https://steampunkcleaning.com",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: page.metroName,
    },
    url: `https://steampunkcleaning.com${page.path}`,
    description: page.description,
  };

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO title={page.title} description={page.description} path={page.path} />
      <JsonLd id={`faq-sm-${page.metroSlug}-${page.serviceSlug}`} data={faqSchema} />
      <JsonLd id={`service-sm-${page.metroSlug}-${page.serviceSlug}`} data={serviceSchema} />

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
              marginBottom: 16,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <MapPin size={12} />
            {page.shortName} · {page.serviceLabel}
          </div>
          <p style={{ marginBottom: 12, fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
            <Link href={page.servicePath} style={{ color: TEAL, fontWeight: 700, textDecoration: "none" }}>
              ← All about {page.serviceLabel.toLowerCase()}
            </Link>
            {metro && (
              <>
                {" · "}
                <Link href={metro.path} style={{ color: TEAL, fontWeight: 700, textDecoration: "none" }}>
                  {metro.shortName} hub
                </Link>
              </>
            )}
          </p>
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
            {page.h1}{" "}
            <span style={{ color: TEAL }}>{page.h1Accent}</span>
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
            {page.intro[0]}
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
              marginBottom: 16,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {page.intro[1]}
          </p>
          {page.localAngle.map((p) => (
            <p
              key={p.slice(0, 48)}
              style={{
                fontSize: 16,
                color: "#5a6e80",
                lineHeight: 1.8,
                marginBottom: 16,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {p}
            </p>
          ))}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.75rem",
              marginTop: 8,
            }}
          >
            {page.highlights.map((h) => (
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
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
              fontWeight: 800,
              color: NAVY,
              marginBottom: 12,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Related pages
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            <Link
              href={page.servicePath}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                backgroundColor: "#fff",
                border: "1.5px solid #dde9f2",
                borderRadius: 8,
                padding: "12px 18px",
                color: NAVY,
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
              }}
            >
              {page.serviceLabel} overview <ArrowRight size={14} style={{ color: TEAL }} />
            </Link>
            {metro && (
              <Link
                href={metro.path}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  backgroundColor: "#fff",
                  border: "1.5px solid #dde9f2",
                  borderRadius: 8,
                  padding: "12px 18px",
                  color: NAVY,
                  fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                }}
              >
                {metro.shortName} locations <ArrowRight size={14} style={{ color: TEAL }} />
              </Link>
            )}
            <Link
              href={quoteHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                backgroundColor: TEAL,
                borderRadius: 8,
                padding: "12px 18px",
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
              }}
            >
              Quote with {page.serviceLabel.toLowerCase()} selected
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0", backgroundColor: "#fff" }}>
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
            {page.serviceLabel} FAQs — {page.shortName}
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
            Sitewide answers also live on our{" "}
            <Link href="/faq" style={{ color: TEAL, fontWeight: 700 }}>
              FAQ page
            </Link>
            .
          </p>
          <LocalFaq faqs={page.faqs} />
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
            Book {page.serviceLabel.toLowerCase()} in {page.shortName}
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
            Service and metro are preselected on the quote form. We call back with a clear price — no
            commitment until you are ready.
          </p>
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
