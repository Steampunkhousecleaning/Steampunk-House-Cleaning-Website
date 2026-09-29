import { getActivePromo } from "@/lib/promo";

const TEAL = "#1A9E8F";
const NAVY = "#3D5266";

type Props = {
  /** "pill" = compact hero badge; "note" = box beside a form or CTA. */
  variant?: "pill" | "note" | "dark";
  showTerms?: boolean;
};

/** Renders nothing once the offer expires (see lib/promo.ts). */
export function PromoBadge({ variant = "note", showTerms = true }: Props) {
  const promo = getActivePromo();
  if (!promo) return null;

  if (variant === "pill") {
    return (
      <div
        data-promo="q4-15"
        style={{
          display: "inline-block",
          backgroundColor: TEAL,
          color: "#fff",
          fontWeight: 700,
          fontSize: 13,
          padding: "6px 14px",
          borderRadius: 999,
          marginBottom: 14,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {promo.shortLabel}
      </div>
    );
  }

  const dark = variant === "dark";
  return (
    <div
      data-promo="q4-15"
      style={{
        backgroundColor: dark ? "rgba(255,255,255,0.1)" : `${TEAL}12`,
        border: dark ? "1px solid rgba(255,255,255,0.3)" : `1px solid ${TEAL}55`,
        borderRadius: 8,
        padding: "10px 14px",
        margin: "0 auto 16px",
        maxWidth: 520,
        textAlign: "center",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <p style={{ margin: 0, fontWeight: 800, fontSize: 15, color: dark ? "#fff" : TEAL }}>
        {promo.blogLine}
      </p>
      {showTerms && (
        <p style={{ margin: "4px 0 0", fontSize: 12, lineHeight: 1.5, color: dark ? "rgba(255,255,255,0.8)" : "#5a6e80" }}>
          {promo.terms}
        </p>
      )}
    </div>
  );
}
