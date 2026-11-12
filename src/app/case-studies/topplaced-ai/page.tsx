import React from "react";
import { Metadata } from "next";
import { TopPlacedAICaseStudy } from "@/components/case-studies/TopPlacedAICaseStudy";

export const metadata: Metadata = {
  title: "TopPlaced AI Simulation Platform Case Study | CodePlaced",
  description:
    "How TopPlaced AI combines voice-led mock interviews, role-specific assessments, integrated coding tools, configurable evaluation rubrics, and multi-signal proctoring into one candidate-facing experience.",
  openGraph: {
    title: "TopPlaced AI Simulation Platform Case Study | CodePlaced",
    description:
      "A configurable AI interview environment built around candidate context, from tailored setup through live interactive practice.",
    images: ["/images/case-studies/topplaced-ai/topplaced-hero-live-interview.webp"],
  },
};

export default function TopPlacedAICaseStudyPage() {
  return <TopPlacedAICaseStudy />;
}

