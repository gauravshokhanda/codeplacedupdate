import React from "react";
import { Metadata } from "next";
import { TuitionstimeCaseStudy } from "@/components/case-studies/TuitionstimeCaseStudy";

export const metadata: Metadata = {
  title: "Tuitionstime EdTech Marketplace Case Study | CodePlaced",
  description:
    "How CodePlaced engineered a complete EdTech marketplace connecting students, parents, and tutors with classes, bookings, payments, and learning tools.",
  openGraph: {
    title: "Tuitionstime EdTech Marketplace Case Study | CodePlaced",
    description:
      "Engineering a complete EdTech marketplace across Next.js, React Native, Node.js, PostgreSQL, Razorpay, and Twilio.",
    images: ["/images/case-studies/tuitionstime-featured-flagship.webp"],
  },
};

export default function TuitionstimeCaseStudyPage() {
  return <TuitionstimeCaseStudy />;
}

