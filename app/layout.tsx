import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sonu Sharma — Backend × AI",
    template: "%s | Sonu Sharma",
  },
  description: "The build log of Sonu Sharma, a backend and AI engineer.",
  keywords: ["Sonu Sharma", "backend developer", "AI", "RAG", "Next.js", "build in public"],
  openGraph: {
    title: "Sonu Sharma — Backend × AI",
    description: "The build log of Sonu Sharma, a backend and AI engineer.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonu Sharma — Backend × AI",
    description: "The build log of Sonu Sharma, a backend and AI engineer.",
  },
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
