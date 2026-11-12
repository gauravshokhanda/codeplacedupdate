import React from "react";
import { Metadata } from "next";
import { CollectIQCaseStudy } from "@/components/case-studies/CollectIQCaseStudy";

export const metadata: Metadata = {
  title: "CollectIQ: AI-Powered Collections Operating System Case Study | CodePlaced",
  description:
    "A connected SaaS platform bringing together consumer debt collections, commercial receivables, intelligent workflows, account management, and collection intelligence in one operational ecosystem.",
  openGraph: {
    title: "CollectIQ: AI-Powered Collections Operating System Case Study | CodePlaced",
    description:
      "A connected SaaS platform for consumer debt collections, commercial receivables, intelligent workflows, and collection intelligence.",
    images: ["/images/case-studies/collectiq/collectiq-hero-showcase.webp"],
  },
};

export default function CollectIQCaseStudyPage() {
  return <CollectIQCaseStudy />;
}

