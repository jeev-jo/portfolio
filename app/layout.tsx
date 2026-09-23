import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});
const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = "Ajay Jeevan Jose — AI Engineer";
const description =
  "AI/ML engineer building multi-agent LLM pipelines, hybrid RAG and LLM evaluation for regulated pharma and life sciences.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Ajay Jeevan Jose" }],
  keywords: ["AI Engineer", "LLM", "RAG", "LangGraph", "MCP", "Multi-agent", "Pharma", "GxP", "Portfolio"],
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/ajay.jpg", width: 864, height: 724, alt: "Ajay Jeevan Jose" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/ajay.jpg"] },
};

export const viewport: Viewport = { themeColor: "#F3F0E8" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
