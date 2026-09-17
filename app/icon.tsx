import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(145deg, #f4511e, #ee457d 48%, #655ad5)" }}><div style={{ width: 39, height: 39, border: "4px solid white", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}><div style={{ width: 14, height: 14, border: "4px solid white", borderRadius: "50%" }} /><div style={{ width: 5, height: 5, background: "white", borderRadius: "50%", position: "absolute", top: 5, right: 5 }} /></div></div>, size);
}
