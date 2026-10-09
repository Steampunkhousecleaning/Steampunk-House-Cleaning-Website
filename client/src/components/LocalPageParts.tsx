/**
 * LocalPageParts.tsx — small shared pieces for the local draft pages
 * (local move-out pages and the Reno hub).
 */
import { Fragment, type CSSProperties, type ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";
import { MAIN_PHONE } from "@/lib/phones";

export const NAVY = "#3D5266";
export const TEAL = "#1A9E8F";
export const ICE = "#B5E1F2";
export const BODY = "#5a6e80";

export const h2Style: CSSProperties = {
  fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
  fontWeight: 800,
  color: NAVY,
  marginBottom: 12,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  lineHeight: 1.2,
};

export const pStyle: CSSProperties = {
  fontSize: 16,
  color: BODY,
  lineHeight: 1.8,
  marginBottom: 16,
  fontFamily: "'DM Sans', sans-serif",
};

/** Renders text, highlighting any [OWNER: ...] placeholder so it is easy to spot in review. */
export function OwnerText({ text }: { text: string }) {
  const parts = text.split(/(\[OWNER:[^\]]*\])/g);
  return (
    <>
      {parts.map((p, i) =>
        /^\[OWNER:/.test(p) ? (
          <mark
            key={i}
            data-owner-placeholder="true"
            style={{ backgroundColor: "#fff1a8", color: "#6b5200", fontWeight: 700, padding: "0 3px", borderRadius: 3 }}
          >
            {p}
          </mark>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

export function Section({ children, bg = "#fff", id }: { children: ReactNode; bg?: string; id?: string }) {
  return (
    <section id={id} style={{ padding: "44px 0", backgroundColor: bg }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>{children}</div>
    </section>
  );
}

/** Quote + phone buttons. `quoteHref` must carry the city (and service) query. */
export function CtaButtons({ quoteHref, quoteLabel = "Get a Free Quote", dark = false }: { quoteHref: string; quoteLabel?: string; dark?: boolean }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
      <Link
        href={quoteHref}
        style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: TEAL, color: "#fff", padding: "12px 22px", borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}
      >
        {quoteLabel}
        <ArrowRight size={16} />
      </Link>
      <a
        href={`tel:${MAIN_PHONE.tel}`}
        style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: dark ? "transparent" : "#fff", color: dark ? "#fff" : NAVY, padding: "12px 22px", borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: "none", border: dark ? "1.5px solid rgba(255,255,255,0.5)" : "1.5px solid #dde9f2", fontFamily: "'DM Sans', sans-serif" }}
      >
        <Phone size={16} style={{ color: dark ? "#fff" : TEAL }} />
        {MAIN_PHONE.display}
      </a>
    </div>
  );
}

/** FAQ list with every answer in the HTML (no collapsed-only answers). */
export function FaqList({ faqs }: { faqs: readonly { q: string; a: string }[] }) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      {faqs.map((f) => (
        <div key={f.q} style={{ borderBottom: "1px solid #e8edf2", padding: "16px 0" }}>
          <h3 style={{ fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.4 }}>{f.q}</h3>
          <p style={{ ...pStyle, fontSize: 15, marginBottom: 0 }}>{f.a}</p>
        </div>
      ))}
    </div>
  );
}

export function faqPageSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function LinkList({ links }: { links: readonly { href: string; label: string }[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap", gap: 10 }}>
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: "#fff", border: "1.5px solid #dde9f2", borderRadius: 8, padding: "10px 16px", color: NAVY, fontWeight: 700, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}
          >
            {l.label} <ArrowRight size={14} style={{ color: TEAL }} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
