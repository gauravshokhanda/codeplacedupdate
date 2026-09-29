import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B4F6C",
};

export const metadata: Metadata = {
  title: "CodePlaced | Data Systems That Scale. Delivered in Weeks.",
  description:
    "We turn messy data into reliable pipelines, executive dashboards, and practical AI copilots. Enterprise-grade AI native development, lakehouse architectures, and full-stack software delivered in 2-4 weeks.",
  keywords: [
    "AI Development",
    "Data Engineering",
    "Executive Dashboards",
    "AI Copilot",
    "Lakehouse Architecture",
    "RAG Systems",
    "Agentic Workflows",
    "Next.js Enterprise",
    "CodePlaced",
  ],
  authors: [{ name: "CodePlaced Engineering Team" }],
  creator: "CodePlaced",
  publisher: "CodePlaced Inc.",
  metadataBase: new URL("https://codeplaced.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codeplaced.com",
    title: "CodePlaced | Data Systems That Scale. Delivered in Weeks.",
    description:
      "Enterprise AI & Data Systems engineered for speed and scale. Reliable pipelines, executive dashboards, and practical AI copilots delivered in 2-4 weeks.",
    siteName: "CodePlaced",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodePlaced - Data Systems That Scale. Delivered in Weeks.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodePlaced | Data Systems That Scale. Delivered in Weeks.",
    description:
      "We turn messy data into reliable pipelines, executive dashboards, and practical AI copilots.",
    creator: "@codeplaced",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth font-sans`}>
      <body className="min-h-screen bg-white text-[#0F172A] antialiased selection:bg-[#0B4F6C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
