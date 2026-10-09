/**
 * LocalMoveOut.tsx — DRAFT local move-out pages
 *   /locations/las-vegas-nevada/move-out-cleaning
 *   /locations/sacramento/move-out-cleaning
 * Data: data/localMoveOut.ts. Not in sitemap until the owner approves.
 */
import { Link } from "wouter";
import { CheckCircle, PlusCircle, MapPin, Quote } from "lucide-react";
import { Navbar, Footer } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import { PricingPlaceholderBlock } from "@/components/PricingPlaceholderBlock";
import {
  NAVY, TEAL, ICE, BODY, h2Style, pStyle,
  OwnerText, Section, CtaButtons, FaqList, LinkList, faqPageSchema,
} from "@/components/LocalPageParts";
import { breadcrumbSchema, localBusinessSchemaForAreas } from "@/lib/schema";
import type { LocalMoveOutPage } from "@/data/localMoveOut";

export function localMoveOutQuoteHref(page: Pick<LocalMoveOutPage, "quoteService" | "quoteCity">): string {
  return `/get-a-quote?service=${encodeURIComponent(page.quoteService)}&city=${encodeURIComponent(page.quoteCity)}`;
}

export default function LocalMoveOut({ page }: { page: LocalMoveOutPage }) {
  const quoteHref = localMoveOutQuoteHref(page);
  const idBase = `moveout-${page.metroSlug}`;

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO title={page.title} description={page.description} path={page.path} />
      <JsonLd id={`${idBase}-localbusiness`} data={localBusinessSchemaForAreas(page.path, page.areaServed)} />
      <JsonLd
        id={`${idBase}-breadcrumb`}
        data={breadcrumbSchema([
          { name: "Locations", path: "/locations" },
          { name: page.metroName, path: page.metroPath },
          { name: page.h1, path: page.path },
        ])}
      />
      <JsonLd id={`${idBase}-faq`} data={faqPageSchema(page.faqs)} />

      <section className="hero-pt" style={{ paddingBottom: 44, background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fb 100%)", borderBottom: "1px solid #dde9f2" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: ICE, color: NAVY, padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
            <MapPin size={12} />
            {page.city} · Move-Out Cleaning
          </div>
          <p style={{ marginBottom: 12, fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
            <Link href={page.metroPath} style={{ color: TEAL, fontWeight: 700, textDecoration: "none" }}>
              ← {page.metroName} locations
            </Link>
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: NAVY, lineHeight: 1.15, marginBottom: 20, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {page.h1}
          </h1>
          {page.intro.map((p) => (
            <p key={p.slice(0, 40)} style={{ fontSize: 17, color: "#4a5e6e", lineHeight: 1.75, maxWidth: 760, margin: "0 auto 24px", textAlign: "left", fontFamily: "'DM Sans', sans-serif" }}>
              <OwnerText text={p} />
            </p>
          ))}
          <CtaButtons quoteHref={quoteHref} />
        </div>
      </section>

      <Section>
        <h2 style={h2Style}>What our {page.city} move-out clean includes</h2>
        <p style={pStyle}>{page.checklistIntro}</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "grid", gap: 10 }}>
          {page.included.map((c) => (
            <li key={c.item} style={{ display: "flex", gap: 12, alignItems: "flex-start", backgroundColor: "#f7fbff", border: "1px solid #dde9f2", borderRadius: 10, padding: "12px 14px" }}>
              <CheckCircle size={18} style={{ color: TEAL, flexShrink: 0, marginTop: 3 }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: BODY, lineHeight: 1.6 }}>
                <strong style={{ color: NAVY }}>{c.item}.</strong> <OwnerText text={c.note} />
              </span>
            </li>
          ))}
        </ul>
        <h3 style={{ fontSize: 18, fontWeight: 800, color: NAVY, marginBottom: 10, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Paid add-ons (not included)</h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
          {page.addOns.map((c) => (
            <li key={c.item} style={{ display: "flex", gap: 12, alignItems: "flex-start", backgroundColor: "#fff", border: "1.5px dashed #c9d8e4", borderRadius: 10, padding: "12px 14px" }}>
              <PlusCircle size={18} style={{ color: NAVY, flexShrink: 0, marginTop: 3 }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: BODY, lineHeight: 1.6 }}>
                <strong style={{ color: NAVY }}>{c.item}.</strong> {c.note}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section bg="#f7fbff">
        <h2 style={h2Style}>Getting your deposit back in {page.city}</h2>
        <p style={pStyle}>{page.depositIntro}</p>
        <ul style={{ ...pStyle, paddingLeft: 22 }}>
          {page.depositTips.map((t) => (
            <li key={t.slice(0, 40)} style={{ marginBottom: 8 }}>{t}</li>
          ))}
        </ul>
        <p style={{ ...pStyle, fontSize: 14, borderLeft: `3px solid ${ICE}`, paddingLeft: 14 }}>
          <OwnerText text={page.depositLegal} />
        </p>
        <p style={{ ...pStyle, fontSize: 14, marginBottom: 0 }}>
          We clean to your landlord's checklist, but the deposit decision is theirs, so we cannot guarantee a specific outcome.
        </p>
      </Section>

      <PricingPlaceholderBlock serviceLabel={`Move-out cleaning in ${page.city}`} />

      {page.reviews.length > 0 && (
        <Section>
          <h2 style={{ ...h2Style, textAlign: "center" }}>What {page.city} customers said</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 12 }}>
            {page.reviews.map((r) => (
              <figure key={r.name + r.location} style={{ margin: 0, backgroundColor: "#fff", border: "1.5px solid #dde9f2", borderRadius: 12, padding: 18 }}>
                <Quote size={18} style={{ color: TEAL }} />
                <blockquote style={{ margin: "8px 0 12px", fontSize: 15, color: BODY, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>{r.text}</blockquote>
                <figcaption style={{ fontSize: 14, fontWeight: 700, color: NAVY, fontFamily: "'DM Sans', sans-serif" }}>
                  {r.name} · {r.location}
                  <span style={{ display: "block", fontWeight: 500, color: "#8a9baa", fontSize: 13 }}>{r.service}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      )}

      <Section bg="#fff">
        <h2 style={{ ...h2Style, textAlign: "center" }}>{page.city} move-out cleaning FAQs</h2>
        <FaqList faqs={page.faqs} />
      </Section>

      <Section bg="#f7fbff">
        <h2 style={h2Style}>More for {page.city} movers</h2>
        <p style={pStyle}>
          Back to the <Link href={page.metroPath} style={{ color: TEAL, fontWeight: 700 }}>{page.metroName} hub</Link>, see nearby city pages, read{" "}
          <Link href={page.blog.href} style={{ color: TEAL, fontWeight: 700 }}>{page.blog.label}</Link>, or compare our sitewide{" "}
          <Link href="/move-in-move-out" style={{ color: TEAL, fontWeight: 700 }}>move-in / move-out cleaning</Link> page.
        </p>
        <LinkList links={page.nearby} />
      </Section>

      <section style={{ padding: "48px 0", backgroundColor: NAVY }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#fff", marginBottom: 12, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Book your {page.city} move-out clean
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 24, fontFamily: "'DM Sans', sans-serif" }}>
            {page.city} and move-in / move-out are already selected on the quote form. It takes about 2 minutes, or call us.
          </p>
          <CtaButtons quoteHref={quoteHref} dark />
        </div>
      </section>

      <Footer />
    </div>
  );
}
