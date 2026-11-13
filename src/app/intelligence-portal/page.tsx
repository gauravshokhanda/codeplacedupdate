import React from "react";
import type { Metadata } from "next";
import { IntelligencePortalClient } from "./IntelligencePortalClient";

export const metadata: Metadata = {
  title: "CodePlaced Intelligence Portal — Website & Competitor Benchmark",
  description:
    "How does your website compare with your competitors? Analyze your digital footprint, discover missing opportunities, review SEO and conversion gaps, and download a detailed report or book a strategy session.",
  keywords: [
    "Website Benchmark",
    "Competitor Analysis",
    "UX Opportunities",
    "Conversion Rate Optimization",
    "SEO Gap Analysis",
    "CodePlaced Intelligence",
  ],
  openGraph: {
    title: "CodePlaced Intelligence Portal — Website & Competitor Benchmark",
    description:
      "How does your website compare with your competitors? Analyze your digital footprint, discover missing opportunities, and prioritize your digital growth.",
    type: "website",
    url: "https://codeplaced.com/intelligence-portal",
  },
};

export default function IntelligencePortalPage() {
  return <IntelligencePortalClient />;
}

