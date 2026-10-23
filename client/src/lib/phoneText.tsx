import { Fragment, type ReactNode } from "react";
import { MAIN_PHONE } from "@/lib/phones";

/** Plain-text "(725) 255-3688" (also 725-255-3688 / 725.255.3688) in body copy. */
const PHONE_RE = /\(?725\)?[\s.-]?255[\s.-]?3688/g;

/**
 * Render body copy with every plain-text main phone number turned into a tappable
 * tel: link. data-ga-location="body" makes click_to_call report link_location=body.
 * Keep the source strings plain (they are reused in FAQPage JSON-LD).
 */
export function PhoneText({ text }: { text: string }): ReactNode {
  if (!text) return text;
  const parts: ReactNode[] = [];
  let last = 0;
  let key = 0;
  const re = new RegExp(PHONE_RE.source, "g");
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    const i = m.index;
    if (i > last) parts.push(<Fragment key={key++}>{text.slice(last, i)}</Fragment>);
    parts.push(
      <a
        key={key++}
        href={`tel:${MAIN_PHONE.tel}`}
        data-ga-location="body"
        style={{ color: "inherit", fontWeight: 600, textDecoration: "underline" }}
      >
        {m[0]}
      </a>,
    );
    last = i + m[0].length;
  }
  if (last === 0) return text;
  if (last < text.length) parts.push(<Fragment key={key++}>{text.slice(last)}</Fragment>);
  return <>{parts}</>;
}
