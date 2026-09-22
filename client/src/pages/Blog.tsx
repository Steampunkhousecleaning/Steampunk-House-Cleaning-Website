/**
 * Blog.tsx — /blog index of published posts
 */

import { Link } from "wouter";
import { Navbar, Footer } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, BookOpen, MapPin, Calendar } from "lucide-react";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";
const ICE = "#B5E1F2";

function formatDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <SEO
        title="Blog | House Cleaning Tips by Metro | Steampunk"
        description="Practical house cleaning guides for Las Vegas, LA/OC, Reno, and Sacramento — hard water, deep cleans, move-outs, Airbnb turnovers, and more from Steampunk House Cleaning."
        path="/blog"
      />

      <section
        className="hero-pt"
        style={{
          paddingBottom: 40,
          background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fb 100%)",
          borderBottom: "1px solid #dde9f2",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 1.5rem",
            textAlign: "center",
          }}
        >
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
            <BookOpen size={12} />
            Resources
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
            Cleaning insights by{" "}
            <span style={{ color: TEAL }}>metro</span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "#4a5e6e",
              lineHeight: 1.7,
              maxWidth: 620,
              margin: "0 auto",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Local guides on hard water, deep cleans, turnovers, and move-outs —
            written for homes we actually clean in Las Vegas, LA/OC, Reno, and
            Sacramento.
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 0 64px", backgroundColor: "#fff" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {blogPosts.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "#5a6e80",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              New posts land here weekly. Check back soon.
            </p>
          ) : (
            blogPosts.map((post) => (
              <article
                key={post.slug}
                style={{
                  border: "1px solid #e8edf2",
                  borderRadius: 12,
                  padding: "24px 28px",
                  backgroundColor: "#fff",
                  boxShadow: "0 1px 3px rgba(61,82,102,0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px 20px",
                    marginBottom: 12,
                    fontSize: 13,
                    color: "#5a6e80",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Calendar size={14} style={{ color: TEAL }} />
                    {formatDate(post.date)}
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <MapPin size={14} style={{ color: TEAL }} />
                    {post.metro}
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                    fontWeight: 800,
                    color: NAVY,
                    lineHeight: 1.3,
                    marginBottom: 10,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {post.title}
                  </Link>
                </h2>
                <p
                  style={{
                    fontSize: 15,
                    color: "#5a6e80",
                    lineHeight: 1.7,
                    marginBottom: 16,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: TEAL,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Read article
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))
          )}
        </div>
      </section>

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
            Need a clean, not just advice?
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.8)",
              marginBottom: 20,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Get a free quote or call{" "}
            <a
              href="tel:7252553688"
              style={{ color: ICE, fontWeight: 700, textDecoration: "none" }}
            >
              (725) 255-3688
            </a>
          </p>
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
