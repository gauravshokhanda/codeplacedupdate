import React from "react";
import { Metadata } from "next";
import { CourtMetricsCaseStudy } from "@/components/case-studies/CourtMetricsCaseStudy";

export const metadata: Metadata = {
  title: "CourtMetrics Data Analytics Case Study | CodePlaced",
  description:
    "How CodePlaced helped CourtMetrics bring gameplay, player activity, retention, and marketing data into a reliable, mobile-friendly reporting experience.",
  openGraph: {
    title: "CourtMetrics Data Analytics Case Study | CodePlaced",
    description:
      "Turning fragmented gaming data into reliable player analytics across Looker Studio, PostgreSQL, GA4, Clerk, and Google Ads.",
    images: ["/images/case-studies/courtmetrics/featured-flagship.webp"],
  },
};

export default function CourtMetricsCaseStudyPage() {
  return <CourtMetricsCaseStudy />;
}

