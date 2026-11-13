import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Production AI, SaaS & Data Platforms",
  description:
    "Real client case studies from CodePlaced across EdTech marketplaces, player & revenue analytics, AI interview simulators, and fintech operating systems.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

