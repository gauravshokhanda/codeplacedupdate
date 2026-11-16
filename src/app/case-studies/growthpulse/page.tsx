import React from "react";
import { Metadata } from "next";
import { GrowthPulseCaseStudy } from "@/components/case-studies/GrowthPulseCaseStudy";

export const metadata: Metadata = {
  title: "GrowthPulse Data Analytics Case Study | CodePlaced",
  description:
    "How CodePlaced helped GrowthPulse turn complex marketing, subscription and payment data into reliable KPIs for tracking revenue growth, customer retention and advertising performance.",
  openGraph: {
    title: "GrowthPulse Data Analytics Case Study | CodePlaced",
    description:
      "Turning complex data into clearer growth decisions across Google BigQuery, SQL, Preset, GA4, Stripe, Solidgate, Amplitude, and AnyTrack.",
    images: ["/images/case-studies/growthpulse/hero-dashboard.webp"],
  },
};

export default function GrowthPulseCaseStudyPage() {
  return <GrowthPulseCaseStudy />;
}

