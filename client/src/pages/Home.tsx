/**
 * STEAMPUNK CLEANING — HOMEPAGE
 * Design: Clean, Trust-Forward, Water & Freshness
 * Colors: Navy (#3D5266), Teal (#1A9E8F) for CTAs, Sky Blue (#72B5D3), Ice Blue (#B5E1F2), White (#FFFFFF)
 * Fonts: Playfair Display (headlines) + DM Sans (body)
 * CRO Structure (Meta traffic → lead form):
 *   1. Sticky Nav (phone + teal CTA always visible)
 *   2. Hero (headline + trust strip + embedded lead form, tight spacing)
 *   3. Social Proof Stats Bar (navy)
 *   4. Mini Review Carousel (3 cards, just below stats)
 *   5. The Permission Slip (shortened copy)
 *   6. Services Grid (Lucide icons, no emojis)
 *   7. How It Works (3-step)
 *   8. Our Work Gallery (real photos)
 *   9. Full Testimonials Grid
 *   9. Why Steampunk (trust signals)
 *  10. Founder Story
 *  11. How Quotes Work
 *  12. Google Review Strip (replaces kitchen banner)
 *  13. FAQ
 *  14. Final CTA
 *  15. Footer
 */

import { useEffect, useRef, useState } from "react";
import WorkGallery from "@/components/WorkGallery";
import { useLocation } from "wouter";
import {
  Phone, Star, Shield, CheckCircle2, ChevronDown, ArrowRight,
  MapPin, Clock, Award, Users, Home as HomeIcon, Sparkles,
  RefreshCw, PackageOpen, Building2, CalendarCheck, Quote
} from "lucide-react";
import { Navbar, Footer } from "@/components/Layout";
import { submitLead } from "@/lib/webhook";
import { SEO } from "@/components/SEO";
import { JsonLd, BUSINESS_JSON_LD } from "@/components/JsonLd";

// ─── Asset URLs ────────────────────────────────────────────────────────────────
const HERO_HOME = "https://d2xsxph8kpxj0f.cloudfront.net/310519663372141965/eBTa9t88Gofgi7UbPusL8G/hero-clean-home_4649079f.jpg";
const WOMAN_RELAXING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663372141965/eBTa9t88Gofgi7UbPusL8G/hero-woman-relaxing_11117721.jpg";
const CLEANER_PRO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663372141965/eBTa9t88Gofgi7UbPusL8G/cleaner-professional_6fe3cab5.jpg";
const FOUNDERS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663372141965/eBTa9t88Gofgi7UbPusL8G/trust-founders_a793d066.jpg";
const LOGO_URL = "/logo.png";

// ─── Brand Colors ──────────────────────────────────────────────────────────────
const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const TEAL_DARK = "#157d71";
const SKY = "#72B5D3";
const ICE = "#EEF6FB";
const MUTED = "#5a7080";
const WHITE = "#ffffff";
const DARK_FOOTER = "#1e2d3d";

// ─── Scroll animation hook ─────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".animate-fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Counter animation hook ────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800) {
  // Initialize to target so prerendered / crawler HTML shows real stats (370+, 100+, 3), not 0.
  const [count, setCount] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            // Animate up from ~60% so prerendered value never collapses to 0
            const from = Math.floor(target * 0.6);
            setCount(Math.floor(from + eased * (target - from)));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { count, ref };
}

// ─── Lead Form Component ───────────────────────────────────────────────────────
function LeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", service: "", bedrooms: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitLead({
        name: form.name,
        phone: form.phone,
        email: form.email,
        city: form.location,
        serviceType: form.service,
        bedrooms: form.bedrooms,
        sourcePage: window.location.pathname,
      });
    } catch (err) {
      console.error("[Webhook] Submit error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-lg text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${TEAL}18` }}>
          <CheckCircle2 className="w-7 h-7" style={{ color: TEAL }} />
        </div>
        <h3 className="sp-display text-2xl font-semibold mb-2" style={{ color: NAVY }}>We'll call you in minutes.</h3>
        <p className="sp-body text-base mb-6" style={{ color: MUTED }}>
          A real person (not a bot) will reach out to confirm your details and lock in your clean.
        </p>
        <div className="space-y-3 text-left">
          {[
            { step: "1", title: "We call you", body: "Within minutes of your request." },
            { step: "2", title: "We confirm your clean", body: "Date, time, and details. No surprises." },
            { step: "3", title: "Walk in to a clean home", body: "Your vetted cleaner arrives on time, ready to go." },
          ].map((s) => (
            <div key={s.step} className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-semibold sp-body mt-0.5" style={{ backgroundColor: TEAL, color: "white" }}>
                {s.step}
              </div>
              <div>
                <span className="sp-body font-semibold text-sm" style={{ color: NAVY }}>{s.title}</span>
                <span className="sp-body text-sm ml-1" style={{ color: MUTED }}>{s.body}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Immediate contact CTA */}
        <div className="mt-6 pt-5 border-t" style={{ borderColor: "#d4e8f2" }}>
          <p className="sp-body text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: MUTED }}>Want to talk right now?</p>
          <a
            href="tel:7252553688"
            className="flex items-center justify-center gap-2 w-full rounded-lg py-3 sp-body font-bold text-sm transition-all duration-200"
            style={{ backgroundColor: `${TEAL}12`, color: TEAL, border: `1.5px solid ${TEAL}40` }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${TEAL}22`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${TEAL}12`; }}
          >
            <Phone className="w-4 h-4" />
            Call us now: (725) 255-3688
          </a>
          <p className="sp-body text-xs text-center mt-2" style={{ color: MUTED }}>Skip the wait — we pick up.</p>
        </div>
      </div>
    );
  }

  const inputStyle = {
    borderColor: "#d4e8f2",
    backgroundColor: WHITE,
    color: NAVY,
    borderRadius: "0.375rem",
    padding: "0.625rem 0.75rem",
    fontSize: "0.875rem",
    width: "100%",
    border: "1px solid #d4e8f2",
    outline: "none",
    transition: "border-color 0.15s ease",
    fontFamily: "'DM Sans', system-ui, sans-serif",
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-6 pt-5 pb-4" style={{ borderBottom: "1px solid #d4e8f2" }}>
        <p className="sp-display text-xl font-semibold" style={{ color: NAVY }}>Get your free quote</p>
        <p className="sp-body text-sm mt-0.5" style={{ color: MUTED }}>Takes 2 minutes. We'll call you right away.</p>
      </div>
      <div className={`p-6 ${compact ? "space-y-3" : "space-y-3.5"}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="sp-body text-xs font-medium mb-1 block" style={{ color: MUTED }}>Your name *</label>
            <input type="text" name="name" required placeholder="Sarah Johnson" value={form.name} onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = TEAL)}
              onBlur={(e) => (e.target.style.borderColor = "#d4e8f2")} />
          </div>
          <div>
            <label className="sp-body text-xs font-medium mb-1 block" style={{ color: MUTED }}>Phone number *</label>
            <input type="tel" name="phone" required placeholder="(310) 555-0100" value={form.phone} onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = TEAL)}
              onBlur={(e) => (e.target.style.borderColor = "#d4e8f2")} />
          </div>
        </div>
        <div>
          <label className="sp-body text-xs font-medium mb-1 block" style={{ color: MUTED }}>Email address</label>
          <input type="email" name="email" placeholder="sarah@email.com" value={form.email} onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = TEAL)}
            onBlur={(e) => (e.target.style.borderColor = "#d4e8f2")} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="sp-body text-xs font-medium mb-1 block" style={{ color: MUTED }}>Your city *</label>
            <select name="location" required value={form.location} onChange={handleChange}
              style={{ ...inputStyle, color: form.location ? NAVY : MUTED, appearance: "none" as const }}>
              <option value="" disabled>Select your city</option>
              <option value="Los Angeles, CA">Los Angeles, CA</option>
              <option value="Long Beach, CA">Long Beach, CA</option>
              <option value="Irvine, CA">Irvine, CA</option>
              <option value="Pasadena, CA">Pasadena, CA</option>
              <option value="Anaheim, CA">Anaheim, CA</option>
              <option value="Huntington Beach, CA">Huntington Beach, CA</option>
              <option value="Los Angeles / Orange County">Los Angeles / Orange County</option>
              <option value="Las Vegas, NV">Las Vegas, NV</option>
              <option value="Henderson, NV">Henderson, NV</option>
              <option value="Summerlin, NV">Summerlin, NV</option>
              <option value="Reno, NV">Reno, NV</option>
              <option value="Sparks, NV">Sparks, NV</option>
              <option value="Sacramento, CA">Sacramento, CA</option>
              <option value="Roseville, CA">Roseville, CA</option>
              <option value="Elk Grove, CA">Elk Grove, CA</option>
              <option value="Folsom, CA">Folsom, CA</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="sp-body text-xs font-medium mb-1 block" style={{ color: MUTED }}>Service type *</label>
            <select name="service" required value={form.service} onChange={handleChange}
              style={{ ...inputStyle, color: form.service ? NAVY : MUTED, appearance: "none" as const }}>
              <option value="" disabled>What do you need?</option>
              <option value="standard">Standard Cleaning</option>
              <option value="deep">Deep Cleaning</option>
              <option value="recurring">Recurring (Weekly / Bi-weekly)</option>
              <option value="move">Move-In / Move-Out</option>
              <option value="airbnb">Airbnb / Short-Term Rental</option>
              <option value="commercial">Commercial / Office</option>
            </select>
          </div>
        </div>
        <div>
          <label className="sp-body text-xs font-medium mb-1 block" style={{ color: MUTED }}>Home size</label>
          <select name="bedrooms" value={form.bedrooms} onChange={handleChange}
            style={{ ...inputStyle, color: form.bedrooms ? NAVY : MUTED, appearance: "none" as const }}>
            <option value="" disabled>Bedrooms (optional)</option>
            <option value="studio">Studio / 1 BR</option>
            <option value="2br">2 Bedrooms</option>
            <option value="3br">3 Bedrooms</option>
            <option value="4br">4 Bedrooms</option>
            <option value="5br+">5+ Bedrooms</option>
          </select>
        </div>
        <button type="submit" disabled={loading}
          className="w-full text-center sp-body font-semibold text-base text-white rounded-md py-3.5 transition-all duration-200"
          style={{ backgroundColor: loading ? TEAL_DARK : TEAL, boxShadow: `0 4px 14px ${TEAL}55` }}
          onMouseEnter={(e) => { if (!loading) (e.currentTarget.style.backgroundColor = TEAL_DARK); (e.currentTarget.style.transform = "translateY(-1px)"); }}
          onMouseLeave={(e) => { (e.currentTarget.style.backgroundColor = loading ? TEAL_DARK : TEAL); (e.currentTarget.style.transform = "translateY(0)"); }}>
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">Get My Free Quote <ArrowRight className="w-4 h-4" /></span>
          )}
        </button>
        <p className="sp-body text-xs text-center" style={{ color: MUTED }}>No commitment. We'll call you within minutes.</p>
      </div>
    </form>
  );
}

// ─── Star Rating ───────────────────────────────────────────────────────────────
function Stars({ count = 5, size = 14 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} fill="#D4A017" stroke="none" style={{ width: size, height: size }} />
      ))}
    </div>
  );
}

// ─── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b cursor-pointer" style={{ borderColor: "#d4e8f2" }} onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between py-5 gap-4">
        <span className="sp-body font-medium text-base" style={{ color: NAVY }}>{q}</span>
        <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
          style={{ color: NAVY, transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
      </div>
      <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? "300px" : "0px" }}>
        <p className="sp-body text-sm pb-5 leading-relaxed" style={{ color: MUTED }}>{a}</p>
      </div>
    </div>
  );
}

// ─── Teal CTA Button ───────────────────────────────────────────────────────────
function TealBtn({ onClick, children, fullWidth = false }: { onClick?: () => void; children: React.ReactNode; fullWidth?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`inline-flex items-center justify-center gap-2 sp-body font-semibold text-base text-white rounded-md py-3.5 px-7 transition-all duration-200${fullWidth ? " w-full" : ""}`}
      style={{
        backgroundColor: hovered ? TEAL_DARK : TEAL,
        boxShadow: hovered ? `0 6px 20px ${TEAL}55` : `0 3px 12px ${TEAL}40`,
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
      }}
    >
      {children}
    </button>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  const reviews = useCountUp(370);
  const jobs = useCountUp(100);
  const markets = useCountUp(3);

  const [, navigate] = useLocation();
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const SERVICE_PATHS: Record<string, string> = {
    "Standard Cleaning": "/standard-cleaning",
    "Deep Cleaning": "/deep-cleaning",
    "Recurring Cleaning": "/recurring-cleaning",
    "Move-In / Move-Out": "/move-in-move-out",
    "Airbnb / STR Turnover": "/airbnb-cleaning",
    "Commercial / Office": "/commercial-cleaning",
  };

  // Mini review data (shown just below stats)
  const miniReviews = [
    { name: "Jessica T.", location: "Los Angeles, CA", text: "Amazing service. Totally dependable and flexible. I don't know how I managed without them.", service: "Recurring Cleaning" },
    { name: "Michael R.", location: "Nevada", text: "Steampunk is the first company that actually does what they say they'll do. Same quality every single visit.", service: "Standard Cleaning" },
    { name: "Priya S.", location: "Sacramento, CA", text: "I come home on cleaning day and just exhale. Worth every penny.", service: "Bi-Weekly Recurring" },
  ];

  const allReviews = [
    { name: "Jessica T.", location: "Los Angeles, CA", text: "Amazing service. They did everything I asked for and more. Totally dependable and flexible. I don't know how I managed without them. Great work, thank you guys!", service: "Recurring Cleaning" },
    { name: "Michael R.", location: "Nevada", text: "We've tried three other cleaning companies. Steampunk is the first one that actually does what they say they'll do. Same quality every single visit. That consistency is everything.", service: "Standard Cleaning" },
    { name: "Amanda K.", location: "Sacramento, CA", text: "I was skeptical because I've been burned before. But they were on time, thorough, and the communication was excellent. My kitchen looked brand new. Already booked my next clean.", service: "Deep Cleaning" },
    { name: "David L.", location: "Los Angeles, CA", text: "As an Airbnb host, I need a team I can trust completely. Steampunk sends photos after every turnover. My cleanliness rating has been 5 stars for six months straight.", service: "Airbnb Turnover" },
    { name: "Priya S.", location: "Sacramento, CA", text: "I work full-time and have two kids. Booking with Steampunk was the best decision I made this year. I come home on cleaning day and just exhale. Worth every penny.", service: "Bi-Weekly Recurring" },
    { name: "Carlos M.", location: "Nevada", text: "Move-out clean was flawless. Got my full deposit back. The team was professional, fast, and thorough. I'll be using them at my new place too.", service: "Move-Out Cleaning" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: WHITE, color: NAVY }}>

      {/* ─── SHARED NAVBAR ─────────────────────────────────────────────────── */}
      <Navbar />
      <SEO
        title="Steampunk House Cleaning | Professional Cleaners in LA, OC, Las Vegas, Reno & Sacramento"
        description="Professional house cleaning across Los Angeles, Orange County, Las Vegas, Reno, and Sacramento. 4.9★ with 370+ reviews. Get a free quote in 2 minutes."
        path="/"
      />
      <JsonLd id="local-business" data={BUSINESS_JSON_LD} />

      {/* ─── HERO ────────────────────────────────────────────────────────────── */}
      {/* Reduced top padding so form is closer to nav — tighter above-the-fold */}
      <section className="hero-pt min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_HOME}
            alt="Immaculate clean living room"
            width={2752}
            height={1536}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.93) 45%, rgba(255,255,255,0.35) 100%)" }} />
        </div>

        <div className="container relative z-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left: Headline + Trust */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full sp-body text-xs font-semibold tracking-wide uppercase"
                style={{ backgroundColor: `${TEAL}15`, color: TEAL }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: TEAL }} />
                Serving LA · Orange County · Las Vegas · Reno · Sacramento
              </div>

              {/* Headline */}
              <h1 className="sp-display text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4" style={{ color: NAVY }}>
                Your home handled.{" "}
                <span style={{ color: TEAL, fontStyle: "italic" }}>Your time back.</span>
              </h1>

              {/* Subheadline — tightened */}
              <p className="sp-body text-lg leading-relaxed mb-6 max-w-lg" style={{ color: MUTED }}>
                You do everything else already. Let us take the one thing off your plate that follows you into the weekend.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2.5 mb-6 items-center">
                {/* Google Guaranteed badge image */}
                <div className="flex items-center px-2 py-1 rounded-full sp-body text-xs font-medium"
                  style={{ backgroundColor: WHITE, border: `1px solid #d4e8f2`, boxShadow: "0 1px 4px rgba(61,82,102,0.06)" }}>
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663372141965/ywAVprjqeLDoJZOs.svg"
                    alt="Google Guaranteed"
                    style={{ height: 36, width: "auto" }}
                  />
                </div>
                {[
                  { icon: <Star className="w-3.5 h-3.5" fill="currentColor" />, text: "4.9★ · 370+ Reviews" },
                  { icon: <CheckCircle2 className="w-3.5 h-3.5" />, text: "Licensed · Bonded · Insured" },
                  { icon: <Users className="w-3.5 h-3.5" />, text: "Background-Checked" },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full sp-body text-xs font-medium"
                    style={{ backgroundColor: WHITE, color: NAVY, border: `1px solid #d4e8f2`, boxShadow: "0 1px 4px rgba(61,82,102,0.06)" }}>
                    <span style={{ color: TEAL }}>{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="flex flex-col sm:flex-row gap-3 lg:hidden">
                <TealBtn onClick={scrollToForm}>Get My Free Quote <ArrowRight className="w-4 h-4" /></TealBtn>
                <a href="tel:7252553688"
                  className="inline-flex items-center justify-center gap-2 sp-body font-medium text-base rounded-md py-3.5 px-7 border transition-all duration-200"
                  style={{ color: NAVY, borderColor: NAVY }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${NAVY}10`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}>
                  <Phone className="w-4 h-4" /> Call Us Now
                </a>
              </div>
            </div>

            {/* Right: Lead Form */}
            <div id="lead-form" className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR (bonded / insured / three metros) ───────────────────────── */}
      <section style={{ backgroundColor: WHITE, borderBottom: "1px solid #d4e8f2" }} className="py-5">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-2.5 items-center justify-center md:justify-start">
              {[
                "Licensed · Bonded · Insured",
                "Background-checked cleaners",
                "Satisfaction-focused — we make it right",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full sp-body text-xs font-semibold"
                  style={{ backgroundColor: `${TEAL}10`, color: NAVY, border: `1px solid ${TEAL}33` }}
                >
                  <Shield className="w-3.5 h-3.5" style={{ color: TEAL }} />
                  {text}
                </div>
              ))}
            </div>
            <div className="sp-body text-sm font-semibold text-center md:text-right" style={{ color: MUTED }}>
              Serving <span style={{ color: NAVY }}>LA / OC</span>
              {" · "}
              <span style={{ color: NAVY }}>Las Vegas & Reno</span>
              {" · "}
              <span style={{ color: NAVY }}>Sacramento</span>
              {" equally"}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF STATS ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: NAVY }} className="py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { ref: reviews.ref, count: reviews.count, suffix: "+", label: "Verified Google Reviews" },
              { ref: jobs.ref, count: jobs.count, suffix: "+", label: "Homes Cleaned Per Month" },
              { ref: null, count: 4.9, suffix: "★", label: "Average Star Rating", isDecimal: true },
              { ref: markets.ref, count: markets.count, suffix: "", label: "Metro Markets Served" },
            ].map((stat, i) => (
              <div key={i} className="animate-fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="sp-display text-4xl lg:text-5xl font-extrabold mb-1 text-white">
                  {stat.isDecimal ? <span>4.9★</span> : <span ref={stat.ref as React.RefObject<HTMLSpanElement>}>{stat.count}{stat.suffix}</span>}
                </div>
                <div className="sp-body text-sm font-medium" style={{ color: SKY }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MINI REVIEW CAROUSEL (just below stats) ─────────────────────────── */}
      <section style={{ backgroundColor: ICE }} className="py-10">
        <div className="container">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Stars count={5} size={16} />
            <span className="sp-body text-sm font-medium" style={{ color: NAVY }}>4.9 stars · 370+ verified Google reviews</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {miniReviews.map((r, i) => (
              <div key={r.name} className={`animate-fade-up delay-${i + 1} bg-white rounded-xl p-5`}
                style={{ border: "1px solid #d4e8f2", boxShadow: "0 2px 8px rgba(61,82,102,0.06)" }}>
                <div className="flex items-start gap-2 mb-3">
                  <Quote className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: TEAL }} />
                  <p className="sp-body text-sm leading-relaxed" style={{ color: MUTED }}>"{r.text}"</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="sp-body font-semibold text-sm" style={{ color: NAVY }}>{r.name}</div>
                    <div className="sp-body text-xs flex items-center gap-1 mt-0.5" style={{ color: MUTED }}>
                      <MapPin className="w-3 h-3" /> {r.location}
                    </div>
                  </div>
                  <Stars count={5} size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PERMISSION SLIP — shortened ─────────────────────────────────────── */}
      <section className="py-10 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-up">
              <img
                src={WOMAN_RELAXING}
                alt="Woman relaxing in a clean home"
                width={2528}
                height={1696}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl object-cover shadow-xl"
                style={{ maxHeight: "480px", objectPosition: "center top" }}
              />
            </div>
            <div className="animate-fade-up delay-2">
              <div className="sp-body text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: TEAL }}>
                The permission slip you've been waiting for
              </div>
              <h2 className="sp-display text-3xl lg:text-4xl font-bold leading-tight mb-5" style={{ color: NAVY }}>
                If your time is worth $50 an hour, why are you spending it scrubbing floors?
              </h2>
              <p className="sp-body text-lg leading-relaxed mb-6" style={{ color: MUTED }}>
                You cook, drive the kids, show up fully at work. Hiring a cleaner isn't a luxury. It's the most obvious decision you haven't made yet. Our clients don't book a cleaning. They book an evening of peace.
              </p>
              <div className="p-5 rounded-xl mb-7" style={{ backgroundColor: `${TEAL}10`, borderLeft: `3px solid ${TEAL}` }}>
                <p className="sp-display text-lg italic font-medium" style={{ color: NAVY }}>
                  "The mess wasn't just mess. It was everything I hadn't gotten to. After the first clean, something shifted. I could breathe."
                </p>
                <p className="sp-body text-sm mt-2" style={{ color: MUTED }}>Sarah M., Los Angeles</p>
              </div>
              <TealBtn onClick={scrollToForm}>Get My Free Quote <ArrowRight className="w-4 h-4" /></TealBtn>
            </div>
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #d4e8f2" }} />

      {/* ─── SERVICES — Lucide icons, no emojis ──────────────────────────────── */}
      <section id="services" className="py-10">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8 animate-fade-up">
            <div className="sp-body text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: TEAL }}>What we do</div>
            <h2 className="sp-display text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: NAVY }}>
              Every service. Every standard. Documented.
            </h2>
            <p className="sp-body text-lg" style={{ color: MUTED }}>
              One-time reset or recurring routine. The same thorough standard, every single visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Standard Cleaning", desc: "Vetted cleaners, documented checklists, the same high standard on visit one and visit fifty.", tag: "Most Popular", icon: <HomeIcon className="w-6 h-6" />, copy: "When your home is handled, your head is free." },
              { title: "Deep Cleaning", desc: "A complete reset: inside appliances, behind fixtures, baseboards, grout, every corner.", tag: "Best for First-Timers", icon: <Sparkles className="w-6 h-6" />, copy: "This is where overwhelm turns into order." },
              { title: "Recurring Cleaning", desc: "Weekly or bi-weekly. Same cleaner, same standard, zero coordination. Your home just stays clean.", tag: "Best Value", icon: <RefreshCw className="w-6 h-6" />, copy: "Stop thinking about it. It's handled." },
              { title: "Move-In / Move-Out", desc: "We work to the standard your landlord expects, so you get your deposit back and move on.", tag: "Deposit Protection", icon: <PackageOpen className="w-6 h-6" />, copy: "Pivotal moments. We don't treat them like routine jobs." },
              { title: "Airbnb / STR Turnover", desc: "We built Steampunk as hosts. We know what a 3-star cleanliness review costs. Post-clean photos on every turnover.", tag: "Host Favorite", icon: <CalendarCheck className="w-6 h-6" />, copy: "Your guests will notice. So will your reviews." },
              { title: "Commercial / Office", desc: "Consistent, professional, insured cleaning across offices, clinics, and retail spaces.", tag: "Licensed & Bonded", icon: <Building2 className="w-6 h-6" />, copy: "Make sure what they notice is spotless." },
            ].map((service, i) => (
              <div key={service.title}
                className="animate-fade-up rounded-xl p-6 group cursor-pointer transition-all duration-300"
                style={{ backgroundColor: WHITE, border: "1px solid #d4e8f2", transitionDelay: `${(i % 3) * 0.08}s` }}
                onClick={() => navigate(SERVICE_PATHS[service.title] || "/get-a-quote")}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 28px rgba(26,158,143,0.14)"; e.currentTarget.style.borderColor = `${TEAL}60`; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#d4e8f2"; e.currentTarget.style.transform = "translateY(0)"; }}>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${TEAL}12`, color: TEAL }}>
                  {service.icon}
                </div>
                <div className="inline-block px-2 py-0.5 rounded text-xs sp-body font-semibold mb-3" style={{ backgroundColor: `${TEAL}12`, color: TEAL }}>
                  {service.tag}
                </div>
                <h3 className="sp-display text-xl font-bold mb-2" style={{ color: NAVY }}>{service.title}</h3>
                <p className="sp-body text-sm leading-relaxed mb-4" style={{ color: MUTED }}>{service.desc}</p>
                <p className="sp-display text-sm italic font-medium" style={{ color: TEAL }}>"{service.copy}"</p>
                <div className="flex items-center gap-1 mt-4 sp-body text-sm font-medium group-hover:gap-2 transition-all" style={{ color: TEAL }}>
                  Get a quote <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #d4e8f2" }} />

      {/* ─── HOW IT WORKS ────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-10" style={{ backgroundColor: ICE }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8 animate-fade-up">
            <div className="sp-body text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: TEAL }}>How it works</div>
            <h2 className="sp-display text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: NAVY }}>
              From quote to clean home. Three steps.
            </h2>
            <p className="sp-body text-lg" style={{ color: MUTED }}>No back-and-forth. No guessing. A real person calls you within minutes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5" style={{ backgroundColor: `${TEAL}30` }} />
            {[
              { step: "01", title: "You get a call within minutes", body: "Submit your request and a real person (not a bot) calls you right away. Ask anything before you commit.", icon: <Phone className="w-6 h-6" /> },
              { step: "02", title: "We confirm every detail", body: "We lock in your date, time, and exactly what's included. No hidden fees. No surprises.", icon: <CheckCircle2 className="w-6 h-6" /> },
              { step: "03", title: "Walk in to a clean home", body: "Your vetted, background-checked cleaner arrives on time. STR hosts get post-clean photos when the job is done.", icon: <Award className="w-6 h-6" /> },
            ].map((step, i) => (
              <div key={step.step} className={`animate-fade-up delay-${i + 1} text-center`}>
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: TEAL, color: "white" }}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center sp-body text-xs font-bold"
                    style={{ backgroundColor: WHITE, color: TEAL, border: `2px solid ${TEAL}` }}>
                    {step.step.replace("0", "")}
                  </div>
                </div>
                <h3 className="sp-display text-xl font-bold mb-3" style={{ color: NAVY }}>{step.title}</h3>
                <p className="sp-body text-base leading-relaxed" style={{ color: MUTED }}>{step.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 animate-fade-up">
            <TealBtn onClick={scrollToForm}>Start Now: Get My Free Quote <ArrowRight className="w-4 h-4" /></TealBtn>
          </div>
        </div>
      </section>

      {/* ─── OUR WORK GALLERY ─────────────────────────────────────────────────── */}
      <WorkGallery onCtaClick={scrollToForm} />

      {/* ─── FULL TESTIMONIALS ───────────────────────────────────────────────── */}
      <section id="reviews" className="py-10">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8 animate-fade-up">
            <div className="sp-body text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: TEAL }}>What our clients say</div>
            <h2 className="sp-display text-4xl lg:text-5xl font-extrabold mb-3" style={{ color: NAVY }}>4.9 stars across 370+ verified reviews.</h2>
            <p className="sp-body text-sm mt-2"><a href="/reviews" style={{ color: TEAL, fontWeight: 600 }}>See all customer reviews →</a></p>
            <div className="flex justify-center mb-2"><Stars count={5} size={22} /></div>
            <p className="sp-body text-base" style={{ color: MUTED }}>Real reviews from real homeowners across LA, Las Vegas, Reno, and Sacramento.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allReviews.slice(0, 3).map((review, i) => (
              <div key={review.name} className={`animate-fade-up delay-${(i % 3) + 1} rounded-xl p-6`}
                style={{ backgroundColor: WHITE, border: "1px solid #d4e8f2" }}>
                <Stars count={5} size={14} />
                <p className="sp-body text-sm leading-relaxed mt-3 mb-4" style={{ color: MUTED }}>"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="sp-body font-semibold text-sm" style={{ color: NAVY }}>{review.name}</div>
                    <div className="sp-body text-xs flex items-center gap-1 mt-0.5" style={{ color: MUTED }}>
                      <MapPin className="w-3 h-3" /> {review.location}
                    </div>
                  </div>
                  <div className="px-2 py-1 rounded text-xs sp-body" style={{ backgroundColor: `${TEAL}12`, color: TEAL }}>
                    {review.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
            <div className="text-center mt-8">
              <button
                type="button"
                className="inline-flex items-center gap-2 sp-body font-semibold text-sm"
                style={{ color: TEAL, background: "none", border: "none", cursor: "pointer" }}
                onClick={() => navigate("/reviews")}
              >
                See all reviews by metro <ArrowRight className="w-4 h-4" />
              </button>
            </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #d4e8f2" }} />

      {/* ─── WHY STEAMPUNK ───────────────────────────────────────────────────── */}
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-up order-2 lg:order-1">
              <div className="sp-body text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: TEAL }}>Why Steampunk</div>
              <h2 className="sp-display text-3xl lg:text-4xl font-bold leading-tight mb-8" style={{ color: NAVY }}>
                We're not a franchise. We're not a staffing agency. We answer the phone.
              </h2>
              <div className="space-y-5">
                {[
                  { title: "Background-checked & vetted cleaners", body: "Every cleaner goes through a thorough interview and background check before entering a client's home. Not a box-tick. A real standard." },
                  { title: "Higher pay = lower turnover = same cleaner", body: "We pay our cleaners better. That means they stay longer, care more, and you get the same familiar face, not a different stranger every visit." },
                  { title: "Documented checklists on every clean", body: "We don't guess what 'clean' means. Every service type has a documented checklist. You know exactly what's included before we arrive." },
                  { title: "Satisfaction guarantee, no questions asked", body: "Not happy? We come back and make it right. That's how we've built 370+ five-star reviews." },
                  { title: "Google Guaranteed: the highest trust badge in local search", body: "Licensed, bonded, and insured across our three metros. You're covered." },
                ].map((item, i) => (
                  <div key={item.title} className={`animate-fade-up delay-${i + 1} flex gap-4`}>
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ backgroundColor: `${TEAL}15` }}>
                      <CheckCircle2 className="w-4 h-4" style={{ color: TEAL }} />
                    </div>
                    <div>
                      <div className="sp-body font-semibold text-base mb-1" style={{ color: NAVY }}>{item.title}</div>
                      <div className="sp-body text-sm leading-relaxed" style={{ color: MUTED }}>{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-up delay-2 order-1 lg:order-2">
              <img
                src={CLEANER_PRO}
                alt="Professional Steampunk cleaner"
                width={1792}
                height={2400}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl object-cover shadow-xl"
                style={{ maxHeight: "600px", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER STORY ───────────────────────────────────────────────────── */}
      <section id="about" className="py-10 relative overflow-hidden" style={{ backgroundColor: ICE }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-up">
              <img
                src={FOUNDERS}
                alt="Ryan and Daniel, Steampunk Cleaning founders"
                width={2400}
                height={1792}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl object-cover shadow-xl"
                style={{ maxHeight: "480px" }}
              />
              <div className="mt-4 text-center">
                <p className="sp-body text-sm font-medium" style={{ color: NAVY }}>Ryan & Daniel</p>
                <p className="sp-body text-xs" style={{ color: MUTED }}>Co-founders, Steampunk Cleaning Services</p>
              </div>
            </div>
            <div className="animate-fade-up delay-2">
              <div className="sp-body text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: TEAL }}>Our story</div>
              <h2 className="sp-display text-3xl lg:text-4xl font-bold leading-tight mb-5" style={{ color: NAVY }}>
                We built Steampunk because we got burned. Just like you.
              </h2>
              <p className="sp-body text-lg leading-relaxed mb-5" style={{ color: MUTED }}>
                Ryan and Daniel started Steampunk as short-term rental hosts who couldn't find a cleaner they could actually trust. They know what it feels like to need a reliable team and get let down instead.
              </p>
              <p className="sp-body text-lg leading-relaxed mb-7" style={{ color: MUTED }}>
                Today, Steampunk serves 100+ homes every month across three equal metros — LA / OC, Las Vegas & Reno / Nevada, and Sacramento — with 370+ verified Google reviews and a 4.9-star average. The standard hasn't slipped, because we built it to hold.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 sp-body text-sm font-medium" style={{ color: NAVY }}>
                  <MapPin className="w-4 h-4" style={{ color: TEAL }} /> 3 markets · LA/OC, Las Vegas & Reno, Sacramento
                </div>
                <div className="flex items-center gap-2 sp-body text-sm font-medium" style={{ color: NAVY }}>
                  <Clock className="w-4 h-4" style={{ color: TEAL }} /> We call within minutes of your request
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW QUOTES WORK ─────────────────────────────────────────────────── */}
      <section className="py-10">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8 animate-fade-up">
            <div className="sp-body text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: TEAL }}>How Quotes Work</div>
            <h2 className="sp-display text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: NAVY }}>Every home is different. So is every quote.</h2>
            <p className="sp-body text-lg" style={{ color: MUTED }}>
              We don't post one-size-fits-all prices, because a two-bedroom condo and a five-bedroom house aren't the same job. Tell us about your home and we'll give you a clear, honest number on the call.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: <HomeIcon className="w-6 h-6" />, title: "Your home", note: "Size, layout, and how many bedrooms and bathrooms we're covering." },
              { icon: <Sparkles className="w-6 h-6" />, title: "The service", note: "Standard upkeep, a full deep-clean reset, or a move-out turnover." },
              { icon: <CalendarCheck className="w-6 h-6" />, title: "How often", note: "One-time or recurring. Regular visits bring the per-visit rate down." },
            ].map((item, i) => (
              <div key={item.title} className={`animate-fade-up delay-${i + 1} rounded-xl p-6`}
                style={{ backgroundColor: WHITE, border: "1px solid #d4e8f2" }}>
                <div className="mb-3" style={{ color: TEAL }}>{item.icon}</div>
                <h3 className="sp-display text-lg font-semibold mb-2" style={{ color: NAVY }}>{item.title}</h3>
                <p className="sp-body text-sm leading-relaxed" style={{ color: MUTED }}>{item.note}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 animate-fade-up">
            <p className="sp-body text-sm mb-4" style={{ color: MUTED }}>No hidden fees. No obligation. Just a straight answer, usually in under 5 minutes.</p>
            <TealBtn onClick={scrollToForm}>Get My Free Quote <ArrowRight className="w-4 h-4" /></TealBtn>
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #d4e8f2" }} />

      {/* ─── GOOGLE REVIEW STRIP (replaces kitchen banner) ───────────────────── */}
      <section style={{ backgroundColor: NAVY }} className="py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left: Google badge */}
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <svg viewBox="0 0 48 48" className="w-9 h-9">
                  <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.5 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z" />
                  <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.5 29.5 4 24 4 16.3 4 9.7 8.4 6.3 14.7z" />
                  <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.3 26.8 36 24 36c-5.3 0–9.7-3.4-11.3-8H6.4C9.7 35.5 16.3 44 24 44z" />
                  <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.2 5.2C41.3 35.5 44 30.2 44 24c0-1.3-.1-2.6-.4-3.9z" />
                </svg>
              </div>
              <div>
                <div className="sp-display text-3xl font-bold text-white">4.9 ★</div>
                <div className="sp-body text-sm" style={{ color: SKY }}>Google Rating · 370+ reviews</div>
              </div>
            </div>

            {/* Center: Featured review */}
            <div className="flex-1 max-w-xl">
              <div className="flex gap-2 mb-2"><Stars count={5} size={14} /></div>
              <p className="sp-display text-lg italic text-white leading-snug">
                "Steampunk is the first company that actually does what they say they'll do. Same quality every single visit."
              </p>
              <p className="sp-body text-sm mt-2" style={{ color: SKY }}>Michael R., Nevada</p>
            </div>

            {/* Right: CTA */}
            <div className="flex-shrink-0">
              <TealBtn onClick={scrollToForm}>Book Your Clean <ArrowRight className="w-4 h-4" /></TealBtn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 animate-fade-up">
              <div className="sp-body text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: TEAL }}>Common questions</div>
              <h2 className="sp-display text-4xl lg:text-5xl font-extrabold" style={{ color: NAVY }}>Everything you want to know before you book.</h2>
            </div>
            <div className="animate-fade-up">
              {[
                { q: "Do you serve my area?", a: "We serve three equal metros: Los Angeles / Orange County, Las Vegas & Reno / Nevada, and Sacramento. Select your city in the quote form and we'll confirm coverage when we call." },
                { q: "How quickly can you get someone to my home?", a: "We typically schedule within 1–3 business days depending on your location and availability. For urgent requests, call us directly at (725) 255-3688 and we'll do our best to accommodate you." },
                { q: "Are your cleaners background-checked?", a: "Yes. Every cleaner goes through a thorough interview process and background check before they're ever assigned to a client's home." },
                { q: "What if I'm not happy with the clean?", a: "We'll come back and make it right. No questions asked. Our satisfaction guarantee is how we've maintained a 4.9-star average across 370+ reviews." },
              ].map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
              <div className="mt-6 text-center">
                <a href="/faq" className="sp-body text-sm font-semibold underline-offset-4 hover:underline" style={{ color: TEAL }}>
                  See all FAQs →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────────────────── */}
      <section className="py-10 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="sp-display text-4xl lg:text-5xl font-extrabold leading-tight mb-5 text-white">
                Stop thinking about it.{" "}
                <span style={{ color: TEAL, fontStyle: "italic" }}>It's handled.</span>
              </h2>
              <p className="sp-body text-lg leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.88)" }}>
                You've been putting this off long enough. It takes 2 minutes to get a quote, and we'll call you right away. No commitment until you're ready.
              </p>
              <div className="flex flex-wrap gap-4 mb-7">
                {["4.9★ on Google", "370+ Verified Reviews", "Google Guaranteed", "Same-Day Response"].map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 sp-body text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                    <CheckCircle2 className="w-4 h-4" style={{ color: TEAL }} /> {badge}
                  </div>
                ))}
              </div>
              <a href="tel:7252553688" className="flex items-center gap-2 sp-body text-base font-medium" style={{ color: TEAL }}>
                <Phone className="w-5 h-5" /> Or call us directly: (725) 255-3688
              </a>
            </div>
            <div className="animate-fade-up delay-2">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

        {/* ─── SHARED FOOTER ───────────────────────────────────────────────── */}
      <Footer />
      {/* OLD FOOTER BELOW — kept for reference, will be removed */}
      <footer className="py-10 hidden" style={{ backgroundColor: DARK_FOOTER }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img src={LOGO_URL} alt="Steampunk Cleaning Services" className="w-auto object-contain" style={{ height: 52, maxWidth: 190, filter: "brightness(0) invert(1)" }} />
              </div>
              <p className="sp-body text-sm leading-relaxed max-w-xs" style={{ color: "#7a9bb0" }}>
                Professional, background-checked cleaning services across Los Angeles / Orange County, Las Vegas & Reno / Nevada, and Sacramento. Built by homeowners who got burned, so you don't have to.
              </p>
            </div>
            <div>
              <h4 className="sp-body text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#7a9bb0" }}>Services</h4>
              <ul className="space-y-2">
                {[
                    { label: "Standard Cleaning", path: "/standard-cleaning" },
                    { label: "Deep Cleaning", path: "/deep-cleaning" },
                    { label: "Recurring Cleaning", path: "/recurring-cleaning" },
                    { label: "Move-In / Move-Out", path: "/move-in-move-out" },
                    { label: "Airbnb / STR Turnover", path: "/airbnb-cleaning" },
                    { label: "Commercial / Office", path: "/commercial-cleaning" },
                  ].map(({ label, path }) => (
                  <li key={path}>
                    <a href={path} className="sp-body text-sm transition-colors hover:text-white" style={{ color: "#8fb5c8" }}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="sp-body text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#7a9bb0" }}>Locations</h4>
              <ul className="space-y-2">
                {["Los Angeles / Orange County", "Las Vegas, NV", "Reno, NV", "Sacramento, CA"].map((l) => (
                  <li key={l} className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 flex-shrink-0" style={{ color: TEAL }} />
                    <span className="sp-body text-sm" style={{ color: "#8fb5c8" }}>{l}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h4 className="sp-body text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#7a9bb0" }}>Contact</h4>
                <a href="tel:7252553688" className="flex items-center gap-2 sp-body text-sm font-medium" style={{ color: TEAL }}>
                  <Phone className="w-4 h-4" /> (725) 255-3688
                </a>
                <a href="mailto:info@steampunkhousecleaning.com" className="sp-body text-sm mt-2 block" style={{ color: "#8fb5c8" }}>
                  info@steampunkhousecleaning.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <p className="sp-body text-xs" style={{ color: "#4a6070" }}>© 2026 Steampunk Cleaning Services. All rights reserved. Licensed · Bonded · Insured.</p>
            <div className="flex items-center gap-4">
              <a href="/privacy" className="sp-body text-xs transition-colors hover:text-white" style={{ color: "#4a6070" }}>Privacy Policy</a>
              <a href="/terms" className="sp-body text-xs transition-colors hover:text-white" style={{ color: "#4a6070" }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
