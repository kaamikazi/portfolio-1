import { ImageResponse } from "next/og";
import { site } from "@/data/site";

/*
 * Generates the social preview image (the picture shown when your link is
 * shared on LinkedIn, X, WhatsApp, Slack...). Next.js builds it automatically
 * and adds the right <meta> tags. Edit the text/colors below to change it.
 */
export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b0b0a",
          color: "#f3f2ec",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#c6f24e",
              color: "#0b0b0a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            {site.name.charAt(0)}
          </div>
          <div style={{ fontSize: 30, color: "#9b9a91" }}>
            {`${site.name} · ${site.role}`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3 }}>
            I turn your SaaS idea into a
          </div>
          <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3, color: "#c6f24e" }}>
            working product.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Next.js", "Supabase", "Stripe", "AI"].map((t) => (
            <div
              key={t}
              style={{
                border: "2px solid #2a2a26",
                borderRadius: 999,
                padding: "10px 24px",
                fontSize: 26,
                color: "#f3f2ec",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
