/**
 * BlogPost.tsx — /blog/:slug
 */

import { Fragment, type ReactNode } from "react";
import { Link, useParams } from "wouter";
import { Navbar, Footer } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { getPostBySlug } from "@/data/blogPosts";
import NotFound from "@/pages/NotFound";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const ICE = "#B5E1F2";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

function formatDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Render paragraph text with [label](href) → Link or <a> */
function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(LINK_RE.source, "g");
  let key = 0;

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(
        <Fragment key={`t-${key++}`}>{text.slice(last, match.index)}</Fragment>,
      );
    }
    const label = match[1];
    const href = match[2];
    const isInternal = href.startsWith("/");
    const isTel = href.startsWith("tel:");
    if (isInternal) {
      nodes.push(
        <Link
          key={`l-${key++}`}
          href={href}
          style={{ color: TEAL, fontWeight: 600, textDecoration: "underline" }}
        >
          {label}
        </Link>,
      );
    } else {
      nodes.push(
        <a
          key={`a-${key++}`}
          href={href}
          style={{ color: TEAL, fontWeight: 600, textDecoration: "underline" }}
          {...(isTel ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        >
          {label}
        </a>,
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    nodes.push(<Fragment key={`t-${key++}`}>{text.slice(last)}</Fragment>);
  }
  return <>{nodes}</>;
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = params.slug ? getPostBySlug(params.slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const path = `/blog/${post.slug}`;

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        path={path}
      />

      <section
        className="hero-pt"
        style={{
          paddingBottom: 36,
          background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fb 100%)",
          borderBottom: "1px solid #dde9f2",
        }}
      >
        <div
          style={{ maxWidth: 760, margin: "0 auto", padding: "0 1.5rem" }}
        >
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              flexWrap: "wrap",
              fontSize: 13,
              color: "#5a6e80",
              marginBottom: 20,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <Link href="/" style={{ color: TEAL, textDecoration: "none" }}>
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/blog" style={{ color: TEAL, textDecoration: "none" }}>
              Blog
            </Link>
            <ChevronRight size={14} />
            <span style={{ color: NAVY }}>{post.metro}</span>
          </nav>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px 18px",
              marginBottom: 16,
              fontSize: 13,
              color: "#5a6e80",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <Calendar size={14} style={{ color: TEAL }} />
              {formatDate(post.date)}
            </span>
            <span
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <MapPin size={14} style={{ color: TEAL }} />
              {post.metro}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: NAVY,
              lineHeight: 1.2,
              marginBottom: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      <article style={{ padding: "40px 0 48px", backgroundColor: "#fff" }}>
        <div
          style={{ maxWidth: 760, margin: "0 auto", padding: "0 1.5rem" }}
        >
          {post.body.map((section, i) => (
            <div key={i} style={{ marginBottom: section.heading ? 28 : 8 }}>
              {section.heading && (
                <h2
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.45rem)",
                    fontWeight: 800,
                    color: NAVY,
                    lineHeight: 1.3,
                    marginBottom: 14,
                    marginTop: i === 0 ? 0 : 8,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {section.heading}
                </h2>
              )}
              {section.paragraphs?.map((p, j) => (
                <p
                  key={j}
                  style={{
                    fontSize: 16,
                    color: "#3d4f5f",
                    lineHeight: 1.8,
                    marginBottom: 16,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <RichText text={p} />
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul
                  style={{
                    margin: "0 0 20px",
                    paddingLeft: 22,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {section.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontSize: 16,
                        color: "#3d4f5f",
                        lineHeight: 1.7,
                        marginBottom: 8,
                      }}
                    >
                      <RichText text={b} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {post.relatedLinks.length > 0 && (
            <aside
              style={{
                marginTop: 36,
                padding: "24px 24px",
                backgroundColor: "#f5fafc",
                borderRadius: 12,
                border: "1px solid #dde9f2",
              }}
            >
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  color: NAVY,
                  marginBottom: 14,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                Related pages
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {post.relatedLinks.map((link) => (
                  <li key={link.href} style={{ marginBottom: 10 }}>
                    <Link
                      href={link.href}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: TEAL,
                        fontWeight: 600,
                        fontSize: 15,
                        textDecoration: "none",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      <ArrowRight size={14} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </article>

      <section style={{ padding: "40px 0", backgroundColor: NAVY }}>
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            padding: "0 1.5rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 12,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Ready for a hard-water reset?
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.8)",
              marginBottom: 20,
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: 1.6,
            }}
          >
            Get a free quote online or call us — real humans pick up.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              href="/get-a-quote"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: TEAL,
                color: "#fff",
                padding: "12px 24px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
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
                color: ICE,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <Phone size={16} />
              (725) 255-3688
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
