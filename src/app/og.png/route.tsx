export const dynamic = "force-static";
import { ImageResponse } from "next/og";
const size = { width: 1200, height: 630 };
export function GET() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#101517",
        color: "#F1EFE9",
        padding: "60px 70px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
          letterSpacing: 3,
        }}
      >
        <span>JEREMY KULL JAEGGLI</span>
        <span style={{ color: "#E18759" }}>PHYSICS · AI · ENGINEERING</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 66,
          letterSpacing: -4,
          lineHeight: 1.05,
        }}
      >
        <span>Jeremy Kull Jaeggli</span>
        <span style={{ color: "#E18759" }}>
          Machine learning. Scientific computing.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #526066",
          paddingTop: 24,
          fontSize: 23,
        }}
      >
        <span>EPFL Physics → Imperial Aeronautics</span>
        <span>London, UK / MSc 2027</span>
      </div>
    </div>,
    size,
  );
}
