/**
 * Terms.tsx — /terms
 * Official Terms of Use for Steampunk House Cleaning
 */

import { Navbar, Footer } from "@/components/Layout";
import { Link } from "wouter";

const NAVY = "#3D5266";
const TEAL = "#1A9E8F";

const sectionStyle: React.CSSProperties = { marginBottom: 28 };
const h2Style: React.CSSProperties = {
  fontSize: "1.25rem",
  fontWeight: 800,
  color: NAVY,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  marginBottom: 12,
};
const pStyle: React.CSSProperties = {
  fontSize: 16,
  color: "#5a6e80",
  fontFamily: "'DM Sans', sans-serif",
  lineHeight: 1.8,
  marginBottom: 12,
};

export default function Terms() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Navbar />

      <section
        className="hero-pt"
        style={{
          paddingBottom: 24,
          background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fb 100%)",
          borderBottom: "1px solid #dde9f2",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem" }}>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: NAVY,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              marginBottom: 8,
            }}
          >
            Terms of Use
          </h1>
        </div>
      </section>

      <section style={{ padding: "40px 0 64px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={sectionStyle}>
            <p style={pStyle}>
              Please read these Terms of Use (&quot;Terms&quot;, &quot;Terms of
              Use&quot;) carefully before using the{" "}
              <a href="https://steampunkcleaning.com" style={{ color: TEAL }}>
                https://steampunkcleaning.com
              </a>{" "}
              website (the &quot;Service&quot;) operated by Steampunk House
              Cleaning (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
            </p>
            <p style={pStyle}>
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users and others who access or use the Service.
            </p>
            <p style={pStyle}>
              By accessing or using the Service you agree to be bound by these
              Terms. If you disagree with any part of the terms then you may not
              access the Service.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Accounts</h2>
            <p style={pStyle}>
              When you create an account with us, you must provide us
              information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may
              result in immediate termination of your account on our Service.
            </p>
            <p style={pStyle}>
              You are responsible for safeguarding the password that you use to
              access the Service and for any activities or actions under your
              password, whether your password is with our Service or a
              third-party service.
            </p>
            <p style={pStyle}>
              You agree not to disclose your password to any third party. You
              must notify us immediately upon becoming aware of any breach of
              security or unauthorized use of your account.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Intellectual Property</h2>
            <p style={pStyle}>
              The Service and its original content, features and functionality
              are and will remain the exclusive property of Steampunk House
              Cleaning and its licensors.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Links To Other Web Sites</h2>
            <p style={pStyle}>
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by Steampunk House Cleaning.
            </p>
            <p style={pStyle}>
              Steampunk House Cleaning has no control over, and assumes no
              responsibility for, the content, privacy policies, or practices of
              any third party web sites or services. You further acknowledge and
              agree that Steampunk House Cleaning shall not be responsible or
              liable, directly or indirectly, for any damage or loss caused or
              alleged to be caused by or in connection with use of or reliance
              on any such content, goods or services available on or through any
              such web sites or services.
            </p>
            <p style={pStyle}>
              We strongly advise you to read the terms and conditions and
              privacy policies of any third-party web sites or services that you
              visit.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Termination</h2>
            <p style={pStyle}>
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </p>
            <p style={pStyle}>
              All provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </p>
            <p style={pStyle}>
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms.
            </p>
            <p style={pStyle}>
              Upon termination, your right to use the Service will immediately
              cease. If you wish to terminate your account, you may simply
              discontinue using the Service.
            </p>
            <p style={pStyle}>
              All provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Disclaimer</h2>
            <p style={pStyle}>
              Your use of the Service is at your sole risk. The Service is
              provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;
              basis. The Service is provided without warranties of any kind,
              whether express or implied, including, but not limited to, implied
              warranties of merchantability, fitness for a particular purpose,
              non-infringement or course of performance.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Governing Law</h2>
            <p style={pStyle}>
              These Terms shall be governed and construed in accordance with the
              laws of United States without regard to its conflict of law
              provisions.
            </p>
            <p style={pStyle}>
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these Terms will remain in effect. These
              Terms constitute the entire agreement between us regarding our
              Service, and supersede and replace any prior agreements we might
              have between us regarding the Service.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Changes</h2>
            <p style={pStyle}>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will try to
              provide at least 30 days notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>
            <p style={pStyle}>
              By continuing to access or use our Service after those revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, please stop using the Service.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Contact Us</h2>
            <p style={pStyle}>
              If you have any questions about these Terms, please contact us.
            </p>
            <p style={pStyle}>
              Email:{" "}
              <a
                href="mailto:info@steampunkhousecleaning.com"
                style={{ color: TEAL }}
              >
                info@steampunkhousecleaning.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:7252553688" style={{ color: TEAL }}>
                (725) 255-3688
              </a>
            </p>
            <p style={pStyle}>
              See also our{" "}
              <Link href="/privacy" style={{ color: TEAL }}>
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
