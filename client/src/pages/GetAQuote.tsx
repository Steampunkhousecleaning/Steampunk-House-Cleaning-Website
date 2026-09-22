/**
 * GetAQuote.tsx — /get-a-quote
 * Design: Navy + Sky Blue + Teal CTA + White bg
 * CRO focus: Frictionless form, trust signals, reduce anxiety about commitment
 */

import { Navbar, Footer } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { CheckCircle, Star, Shield, Clock, Phone, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { submitLead } from "@/lib/webhook";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const ICE = "#B5E1F2";

const SERVICES = [
  "Standard Cleaning",
  "Deep Cleaning",
  "Recurring Cleaning (Weekly)",
  "Recurring Cleaning (Bi-Weekly)",
  "Recurring Cleaning (Monthly)",
  "Move-In / Move-Out",
  "Airbnb / Short-Term Rental",
  "Commercial / Office",
  "Not sure yet",
];

const CITIES = [
  "Los Angeles / Orange County",
  "Las Vegas, NV",
  "Reno, NV",
  "Sacramento, CA",
  "Other",
];

const BEDROOMS = ["Studio", "1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4 Bedrooms", "5+ Bedrooms"];

export default function GetAQuote() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", service: "", bedrooms: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);
  const [verified, setVerified] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Preselect service/city from ?service= / ?city= query if present
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    const city = params.get("city");
    if (service || city) {
      setForm((prev) => ({
        ...prev,
        service: prev.service || service || "",
        city: prev.city || city || "",
      }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(false);
    try {
      const result = await submitLead({
        name: form.name,
        phone: form.phone,
        email: form.email,
        city: form.city,
        serviceType: form.service,
        bedrooms: form.bedrooms,
        notes: form.notes,
        sourcePage: window.location.pathname,
      });
      setVerified(result.verified);
      setSubmitted(true);
    } catch (err) {
      console.error("[Webhook] Submit error:", err);
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    border: "1.5px solid #dde9f2",
    borderRadius: 8,
    fontSize: 15,
    color: NAVY,
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: NAVY,
    marginBottom: 6,
    fontFamily: "'DM Sans', sans-serif",
  };

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO
        title="Get a Free Cleaning Quote | Steampunk House Cleaning"
        description="Request a free house cleaning quote for LA/OC, Las Vegas, Reno, or Sacramento. No commitment — we call you within minutes. Takes about 2 minutes."
        path="/get-a-quote"
      />

      <section className="hero-pt" style={{ paddingBottom: 40, backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="hero-grid-wide">

            {/* Left: Trust content */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: ICE, color: NAVY, padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>
                Takes 2 minutes
              </div>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: NAVY, lineHeight: 1.15, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Get your free quote.{" "}
                <span style={{ color: TEAL }}>We'll call you right away.</span>
              </h1>
              <p style={{ fontSize: 17, color: "#5a6e80", lineHeight: 1.7, marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
                No commitment. No pressure. Just a quick call to understand what you need and give you an accurate price. Most quotes take under 5 minutes.
              </p>

              {/* Trust badges */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {[
                  { icon: <Shield size={18} />, title: "Google Guaranteed", body: "Verified and backed by Google's guarantee program." },
                  { icon: <Star size={18} fill={TEAL} />, title: "4.9 Stars / 450+ Reviews", body: "Hundreds of verified Google reviews across all markets." },
                  { icon: <CheckCircle size={18} />, title: "Background-Checked Team", body: "Every cleaner is vetted, trained, and insured." },
                  { icon: <Clock size={18} />, title: "Same-Day Response", body: "We call back fast. Usually within minutes." },
                ].map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 16px", backgroundColor: "#f7fbff", border: "1.5px solid #dde9f2", borderRadius: 10 }}>
                    <div style={{ color: TEAL, flexShrink: 0, marginTop: 1 }}>{b.icon}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, fontFamily: "'DM Sans', sans-serif", marginBottom: 2 }}>{b.title}</div>
                      <div style={{ fontSize: 13, color: "#8a9baa", fontFamily: "'DM Sans', sans-serif" }}>{b.body}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Phone CTA */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", backgroundColor: NAVY, borderRadius: 12 }}>
                <Phone size={20} style={{ color: TEAL, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif" }}>Prefer to call?</div>
                  <a href="tel:7252553688" style={{ fontSize: 17, fontWeight: 700, color: "#fff", textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    (725) 255-3688
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: "36px 32px", boxShadow: "0 8px 48px rgba(61,82,102,0.12)", border: "1.5px solid #dde9f2" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "20px 0" }} role="status" aria-live="polite">
                  <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: "#e6f7f5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <CheckCircle size={32} style={{ color: TEAL }} />
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: NAVY, marginBottom: 12, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {verified ? "You're all set!" : "Request sent"}
                  </h3>
                  <p style={{ fontSize: 15, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
                    {verified
                      ? "We received your request. Expect a call from us within minutes. We'll get you a quote and answer any questions."
                      : "Your quote request left this browser. Because our form endpoint cannot confirm delivery in the browser (Apps Script CORS), please watch for our call — and if you don't hear from us within a few minutes, call us so we can help right away."}
                  </p>

                  {/* Immediate contact CTA */}
                  <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1.5px solid #c8e8e4" }}>
                    <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#8a9baa", marginBottom: 10, fontFamily: "'DM Sans', sans-serif" }}>
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
                        padding: "13px 16px",
                        backgroundColor: `${TEAL}15`,
                        color: TEAL,
                        border: `1.5px solid ${TEAL}50`,
                        borderRadius: 8,
                        fontSize: 15,
                        fontWeight: 700,
                        fontFamily: "'DM Sans', sans-serif",
                        textDecoration: "none",
                        boxSizing: "border-box" as const,
                      }}
                    >
                      <Phone size={16} />
                      Call us now: (725) 255-3688
                    </a>
                    <p style={{ fontSize: 12, color: "#8a9baa", marginTop: 8, fontFamily: "'DM Sans', sans-serif" }}>Skip the wait — we pick up.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate={false}>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: NAVY, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Request your free quote
                  </h2>
                  <p style={{ fontSize: 13, color: "#8a9baa", marginBottom: 24, fontFamily: "'DM Sans', sans-serif" }}>
                    No commitment. We'll call you within minutes.
                  </p>

                  {submitError && (
                    <div
                      role="alert"
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "flex-start",
                        marginBottom: 16,
                        padding: "12px 14px",
                        backgroundColor: "#fff5f5",
                        border: "1.5px solid #f5c2c2",
                        borderRadius: 8,
                      }}
                    >
                      <AlertCircle size={18} style={{ color: "#c53030", flexShrink: 0, marginTop: 1 }} />
                      <div style={{ fontSize: 13, color: "#5a6e80", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
                        We couldn't confirm your submission. Please try again or call us at{" "}
                        <a href="tel:7252553688" style={{ color: TEAL, fontWeight: 700 }}>(725) 255-3688</a>.
                      </div>
                    </div>
                  )}

                  <div className="grid-2col" style={{ gap: "1rem", marginBottom: "1rem" }}>
                    <div>
                      <label htmlFor="quote-name" style={labelStyle}>Your name *</label>
                      <input
                        id="quote-name"
                        name="name"
                        autoComplete="name"
                        required
                        style={inputStyle}
                        placeholder="Sarah Johnson"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-phone" style={labelStyle}>Phone number *</label>
                      <input
                        id="quote-phone"
                        name="phone"
                        autoComplete="tel"
                        required
                        style={inputStyle}
                        placeholder="(310) 555-0100"
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="quote-email" style={labelStyle}>Email address</label>
                    <input
                      id="quote-email"
                      name="email"
                      autoComplete="email"
                      style={inputStyle}
                      placeholder="sarah@email.com"
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div className="grid-2col" style={{ gap: "1rem", marginBottom: "1rem" }}>
                    <div>
                      <label htmlFor="quote-city" style={labelStyle}>Your city *</label>
                      <select
                        id="quote-city"
                        name="city"
                        autoComplete="address-level2"
                        required
                        style={{ ...inputStyle, appearance: "none" }}
                        value={form.city}
                        onChange={e => setForm({ ...form, city: e.target.value })}
                      >
                        <option value="">Select your city</option>
                        {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quote-service" style={labelStyle}>Service type *</label>
                      <select
                        id="quote-service"
                        name="service"
                        required
                        style={{ ...inputStyle, appearance: "none" }}
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                      >
                        <option value="">What do you need?</option>
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="quote-bedrooms" style={labelStyle}>Home size</label>
                    <select
                      id="quote-bedrooms"
                      name="bedrooms"
                      style={{ ...inputStyle, appearance: "none" }}
                      value={form.bedrooms}
                      onChange={e => setForm({ ...form, bedrooms: e.target.value })}
                    >
                      <option value="">Number of bedrooms (optional)</option>
                      {BEDROOMS.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label htmlFor="quote-notes" style={labelStyle}>Anything else we should know?</label>
                    <textarea
                      id="quote-notes"
                      name="notes"
                      autoComplete="off"
                      style={{ ...inputStyle, minHeight: 80, resize: "vertical" }}
                      placeholder="Pets, specific areas of concern, preferred schedule..."
                      value={form.notes}
                      onChange={e => setForm({ ...form, notes: e.target.value })}
                    />
                  </div>

                  <button type="submit" disabled={loading} style={{ width: "100%", padding: "14px", backgroundColor: TEAL, color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "all 0.2s", opacity: loading ? 0.8 : 1 }}>
                    {loading ? "Sending..." : "Get My Free Quote"}
                  </button>
                  <p style={{ textAlign: "center", fontSize: 12, color: "#8a9baa", marginTop: 10, fontFamily: "'DM Sans', sans-serif" }}>
                    No commitment. We'll call you within minutes.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
