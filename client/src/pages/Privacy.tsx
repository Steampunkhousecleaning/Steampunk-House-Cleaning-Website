/**
 * Privacy.tsx — /privacy
 * Official Privacy Policy for Steampunk House Cleaning
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
const ulStyle: React.CSSProperties = {
  fontSize: 16,
  color: "#5a6e80",
  fontFamily: "'DM Sans', sans-serif",
  lineHeight: 1.8,
  paddingLeft: 22,
  marginBottom: 12,
};

export default function Privacy() {
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
            Privacy Policy
          </h1>
        </div>
      </section>

      <section style={{ padding: "40px 0 64px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={sectionStyle}>
            <p style={pStyle}>
              Steampunk House Cleaning (&quot;us&quot;, &quot;we&quot;, or
              &quot;our&quot;) operates the Steampunk House Cleaning website
              (the &quot;Service&quot;).
            </p>
            <p style={pStyle}>
              This page informs you of our policies regarding the collection,
              use and disclosure of Personal Information when you use our
              Service.
            </p>
            <p style={pStyle}>
              We will not use or share your information with anyone except as
              described in this Privacy Policy.
            </p>
            <p style={pStyle}>
              We use your Personal Information for providing and improving the
              Service. By using the Service, you agree to the collection and use
              of information in accordance with this policy. Unless otherwise
              defined in this Privacy Policy, terms used in this Privacy Policy
              have the same meanings as in our Terms and Conditions, accessible
              at{" "}
              <Link href="/terms" style={{ color: TEAL }}>
                https://steampunkcleaning.com/terms
              </Link>
              .
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Information Collection And Use</h2>
            <p style={pStyle}>
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you. Personally identifiable information (&quot;Personal
              Information&quot;) may include, but is not limited to:
            </p>
            <ul style={ulStyle}>
              <li>Name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Address</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Log Data</h2>
            <p style={pStyle}>
              We collect information that your browser sends whenever you visit
              our Service (&quot;Log Data&quot;). This Log Data may include
              information such as your computer&apos;s Internet Protocol
              (&quot;IP&quot;) address, browser type, browser version, the pages
              of our Service that you visit, the time and date of your visit,
              the time spent on those pages and other statistics.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Cookies</h2>
            <p style={pStyle}>
              Cookies are files with small amount of data, which may include an
              anonymous unique identifier. Cookies are sent to your browser from
              a web site and stored on your computer&apos;s hard drive.
            </p>
            <p style={pStyle}>
              We use &quot;cookies&quot; to collect information. You can
              instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent. However, if you do not accept cookies, you
              may not be able to use some portions of our service.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Service Providers</h2>
            <p style={pStyle}>
              We may employ third party companies and individuals to facilitate
              our Service, to provide the Service on our behalf, to perform
              Service-related services or to assist us in analyzing how our
              Service is used.
            </p>
            <p style={pStyle}>
              These third parties have access to your Personal Information only
              to perform these tasks on our behalf and are obligated not to
              disclose or use it for any other purpose.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Security</h2>
            <p style={pStyle}>
              The security of your Personal Information is important to us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While we strive to
              use commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Links To Other Sites</h2>
            <p style={pStyle}>
              Our Service may contain links to other sites that are not operated
              by us. If you click on a third party link, you will be directed to
              that third party&apos;s site. We strongly advise you to review the
              Privacy Policy of every site you visit.
            </p>
            <p style={pStyle}>
              We have no control over, and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Children&apos;s Privacy</h2>
            <p style={pStyle}>
              Our Service does not address anyone under the age of 18
              (&quot;Children&quot;).
            </p>
            <p style={pStyle}>
              We do not knowingly collect personally identifiable information
              from children under 18. If you are a parent or guardian and you
              are aware that your child has provided us with Personal
              Information, please contact us. If we discover that a child under
              18 has provided us with Personal Information, we will delete such
              information from our servers immediately.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Compliance With Laws</h2>
            <p style={pStyle}>
              We will disclose your Personal Information where required to do so
              by law or subpoena.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Changes To This Privacy Policy</h2>
            <p style={pStyle}>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p style={pStyle}>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>Contact Us</h2>
            <p style={pStyle}>
              If you have any questions about this Privacy Policy, please
              contact us.
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
