import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sonu Sharma — Backend × AI",
  description: "The build log of Sonu Sharma, a backend and AI engineer.",
  icons: { icon: "/icon" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
