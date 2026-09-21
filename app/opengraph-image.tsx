import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "flex-start",
        background: "linear-gradient(135deg, #8cc9f2, #ddf3ff)",
        color: "#07121c",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        width: "100%",
      }}
    >
      <div style={{ color: "#f4511e", display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: 4 }}>
        SONU . CS_2004
      </div>
      <div style={{ display: "flex", fontSize: 92, fontWeight: 900, letterSpacing: -4, lineHeight: 1, marginTop: 24 }}>
        I BUILD SYSTEMS
      </div>
      <div style={{ color: "#f4511e", display: "flex", fontSize: 92, fontWeight: 900, letterSpacing: -4, lineHeight: 1 }}>
        THAT ACTUALLY WORK.
      </div>
      <div style={{ display: "flex", fontSize: 28, marginTop: 36 }}>
        Backend × AI · Building in public
      </div>
    </div>,
    size,
  );
}
