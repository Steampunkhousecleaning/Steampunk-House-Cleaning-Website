/**
 * QuoteForm.tsx — Reusable lead form for all service pages
 * Design: White card with navy/teal accents
 */

import { useState } from "react";
import { CheckCircle, Loader2, Phone } from "lucide-react";
import { submitLead } from "@/lib/webhook";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";

interface QuoteFormProps {
  defaultService?: string;
  compact?: boolean;
}

const services = [
  "Standard Cleaning",
  "Deep Cleaning",
  "Recurring (Weekly / Bi-weekly)",
  "Move-In / Move-Out",
  "Airbnb / Short-Term Rental",
  "Commercial / Office",
];

const cities = [
  "Los Angeles / Orange County",
  "Nevada",
  "Sacramento",
  "Other",
];

export function QuoteForm({ defaultService = "", compact = false }: QuoteFormProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: defaultService,
    size: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitLead({
        name: form.name,
        phone: form.phone,
        email: form.email,
        city: form.city,
        serviceType: form.service,
        bedrooms: form.size,
        sourcePage: window.location.pathname,
      });
    } catch (err) {
      console.error("[Webhook] Submit error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    border: "1.5px solid #dde4ea",
    borderRadius: 8,
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
    color: NAVY,
    backgroundColor: "#fff",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: NAVY,
    marginBottom: 5,
    fontFamily: "'DM Sans', sans-serif",
  };

  if (submitted) {
    return (
      <div
        style={{
          backgroundColor: "#f0faf8",
          border: "2px solid " + TEAL,
          borderRadius: 12,
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <CheckCircle size={48} style={{ color: TEAL, margin: "0 auto 16px" }} />
        <h3
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: NAVY,
            marginBottom: 8,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          We'll call you within minutes.
        </h3>
        <p
          style={{
            fontSize: 15,
            color: "#5a6e80",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.6,
          }}
        >
          A real person from our team is reviewing your request right now. Check your phone.
        </p>

        {/* Immediate contact CTA */}
        <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1.5px solid #c8e8e4" }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#8a9baa", marginBottom: 10, fontFamily: "'DM Sans', sans-serif" }}>
            Want to talk right now?
          </p>
          <a
            href="tel:7252553688"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
              padding: "12px 16px",
              backgroundColor: `${TEAL}15`,
              color: TEAL,
              border: `1.5px solid ${TEAL}50`,
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: "none",
              boxSizing: "border-box" as const,
            }}
          >
            <Phone size={15} />
            Call us now: (725) 255-3688
          </a>
          <p style={{ fontSize: 12, color: "#8a9baa", marginTop: 8, fontFamily: "'DM Sans', sans-serif" }}>Skip the wait — we pick up.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "grid",
          gap: "14px",
        }}
        className={compact ? "quote-form-grid quote-form-grid-compact" : "quote-form-grid"}
      >
        <div>
          <label style={labelStyle}>Your name *</label>
          <input
            type="text"
            placeholder="Sarah Johnson"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
            onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = TEAL)}
            onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#dde4ea")}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone number *</label>
          <input
            type="tel"
            placeholder="(310) 555-0100"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            style={inputStyle}
            onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = TEAL)}
            onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#dde4ea")}
          />
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Email address</label>
          <input
            type="email"
            placeholder="sarah@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
            onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = TEAL)}
            onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#dde4ea")}
          />
        </div>
        <div>
          <label style={labelStyle}>Your city *</label>
          <select
            required
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            style={{ ...inputStyle, appearance: "none" }}
            onFocus={(e) => ((e.target as HTMLSelectElement).style.borderColor = TEAL)}
            onBlur={(e) => ((e.target as HTMLSelectElement).style.borderColor = "#dde4ea")}
          >
            <option value="">Select your city</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Service type *</label>
          <select
            required
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            style={{ ...inputStyle, appearance: "none" }}
            onFocus={(e) => ((e.target as HTMLSelectElement).style.borderColor = TEAL)}
            onBlur={(e) => ((e.target as HTMLSelectElement).style.borderColor = "#dde4ea")}
          >
            <option value="">What do you need?</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Home size</label>
          <input
            type="text"
            placeholder="Bedrooms / sq ft (optional)"
            value={form.size}
            onChange={(e) => setForm({ ...form, size: e.target.value })}
            style={inputStyle}
            onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = TEAL)}
            onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#dde4ea")}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          marginTop: 18,
          backgroundColor: TEAL,
          color: "#fff",
          padding: "15px 24px",
          borderRadius: 10,
          border: "none",
          fontSize: 16,
          fontWeight: 700,
          cursor: loading ? "not-allowed" : "pointer",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          transition: "transform 0.2s, box-shadow 0.2s",
          boxShadow: "0 4px 16px rgba(26,158,143,0.3)",
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(26,158,143,0.4)";
          }
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(26,158,143,0.3)";
        }}
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Get My Free Quote →"
        )}
      </button>
      <p
        style={{
          textAlign: "center",
          fontSize: 12,
          color: "#8a9baa",
          marginTop: 10,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        No commitment. We'll call you within minutes.
      </p>
    </form>
  );
}
