import React from "react";
import { Metadata } from "next";
import { ProgressPartnersCaseStudy } from "@/components/case-studies/ProgressPartnersCaseStudy";

export const metadata: Metadata = {
  title: "Progress Partners Data Analytics Case Study | CodePlaced",
  description:
    "How CodePlaced helped Progress Partners turn complex marketing, subscription and payment data into reliable KPIs for tracking revenue growth, customer retention and advertising performance.",
  openGraph: {
    title: "Progress Partners Data Analytics Case Study | CodePlaced",
    description:
      "Turning complex data into clearer growth decisions across Google BigQuery, SQL, Preset, GA4, Stripe, Solidgate, Amplitude, and AnyTrack.",
    images: ["/images/case-studies/progress-partners/hero-dashboard.webp"],
  },
};

export default function ProgressPartnersCaseStudyPage() {
  return <ProgressPartnersCaseStudy />;
}

