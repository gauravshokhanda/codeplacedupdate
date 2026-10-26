import React from "react";
import { Metadata } from "next";
import { HoopwrldCaseStudy } from "@/components/case-studies/HoopwrldCaseStudy";

export const metadata: Metadata = {
  title: "Hoopwrld Data Analytics Case Study | CodePlaced",
  description:
    "How CodePlaced helped Hoopwrld bring gameplay, player activity, retention, and marketing data into a reliable, mobile-friendly reporting experience.",
  openGraph: {
    title: "Hoopwrld Data Analytics Case Study | CodePlaced",
    description:
      "Turning fragmented gaming data into reliable player analytics across Looker Studio, PostgreSQL, GA4, Clerk, and Google Ads.",
    images: ["/images/case-studies/hoopwrld-featured-flagship.webp"],
  },
};

export default function HoopwrldCaseStudyPage() {
  return <HoopwrldCaseStudy />;
}
