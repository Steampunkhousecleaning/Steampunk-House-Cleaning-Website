/**
 * RenoHub.tsx — DRAFT standalone Reno & Sparks hub (/locations/reno).
 * Data: data/renoHub.ts. Not in sitemap; /locations/las-vegas-nevada/reno untouched.
 * No reviews section (no real Reno reviews exist).
 */
import { Link } from "wouter";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Navbar, Footer } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import { PricingPlaceholderBlock } from "@/components/PricingPlaceholderBlock";
import {
  NAVY, TEAL, ICE, BODY, h2Style, pStyle,
  OwnerText, Section, CtaButtons, FaqList, LinkList, faqPageSchema,
} from "@/components/LocalPageParts";
import { breadcrumbSchema, localBusinessSchemaForAreas } from "@/lib/schema";
import { RENO_HUB as R } from "@/data/renoHub";

export const RENO_QUOTE_HREF = `/get-a-quote?city=${encodeURIComponent(R.quoteCity)}`;

export default function RenoHub() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO title={R.title} description={R.description} path={R.path} />
      <JsonLd id="reno-hub-localbusiness" data={localBusinessSchemaForAreas(R.path, R.areaServed)} />
      <JsonLd
        id="reno-hub-breadcrumb"
        data={breadcrumbSchema([
          { name: "Locations", path: "/locations" },
          { name: "Reno & Sparks", path: R.path },
        ])}
      />
      <JsonLd id="reno-hub-faq" data={faqPageSchema(R.faqs)} />

      <section className="hero-pt" style={{ paddingBottom: 44, background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fb 100%)", borderBottom: "1px solid #dde9f2" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: ICE, color: NAVY, padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
            <MapPin size={12} />
            Reno · Sparks · Northern Nevada
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: NAVY, lineHeight: 1.15, marginBottom: 20, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {R.h1}
          </h1>
          {R.intro.map((p) => (
            <p key={p.slice(0, 40)} style={{ fontSize: 17, color: "#4a5e6e", lineHeight: 1.75, maxWidth: 760, margin: "0 auto 24px", textAlign: "left", fontFamily: "'DM Sans', sans-serif" }}>
              {p}
            </p>
          ))}
          <CtaButtons quoteHref={RENO_QUOTE_HREF} />
        </div>
      </section>

      <Section>
        <h2 style={h2Style}>Reno and Sparks neighborhoods we serve</h2>
        <p style={{ ...pStyle, fontSize: 14 }}><OwnerText text={R.areasNote} /></p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
          {R.areas.map((a) => (
            <div key={a.name} style={{ backgroundColor: "#f7fbff", border: "1px solid #dde9f2", borderRadius: 10, padding: "14px 16px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{a.name}</h3>
              <p style={{ ...pStyle, fontSize: 14, marginBottom: 0, lineHeight: 1.6 }}>{a.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="#f7fbff">
        <h2 style={h2Style}>Cleaning for Reno conditions</h2>
        {R.conditions.map((c) => (
          <div key={c.heading} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
            <CheckCircle size={18} style={{ color: TEAL, flexShrink: 0, marginTop: 5 }} />
            <p style={{ ...pStyle, marginBottom: 0 }}><strong style={{ color: NAVY }}>{c.heading}.</strong> {c.text}</p>
          </div>
        ))}
        <p style={{ ...pStyle, marginTop: 8, marginBottom: 0 }}>{R.founders}</p>
      </Section>

      <Section>
        <h2 style={h2Style}>House cleaning services in Reno and Sparks</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
          {R.services.map((s) => (
            <Link key={s.href} href={s.href} style={{ textDecoration: "none" }}>
              <div style={{ height: "100%", backgroundColor: "#fff", border: "1.5px solid #dde9f2", borderRadius: 12, padding: 18, boxSizing: "border-box" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.label}</h3>
                <p style={{ fontSize: 14, color: BODY, lineHeight: 1.6, marginBottom: 10, fontFamily: "'DM Sans', sans-serif" }}>{s.blurb}</p>
                <span style={{ fontSize: 13, fontWeight: 700, color: TEAL, display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "'DM Sans', sans-serif" }}>
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <PricingPlaceholderBlock serviceLabel="House cleaning in Reno & Sparks" />

      <Section bg="#fff">
        <h2 style={{ ...h2Style, textAlign: "center" }}>Reno and Sparks house cleaning FAQs</h2>
        <FaqList faqs={R.faqs} />
      </Section>

      <Section bg="#f7fbff">
        <h2 style={h2Style}>Nearby pages</h2>
        <LinkList links={R.links} />
      </Section>

      <section style={{ padding: "48px 0", backgroundColor: NAVY }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#fff", marginBottom: 12, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Get a Reno or Sparks cleaning quote
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 24, fontFamily: "'DM Sans', sans-serif" }}>
            Reno, NV is already selected on the quote form. It takes about 2 minutes, or call us.
          </p>
          <CtaButtons quoteHref={RENO_QUOTE_HREF} dark />
        </div>
      </section>

      <Footer />
    </div>
  );
}
