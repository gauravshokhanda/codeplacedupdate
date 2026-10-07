import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CASE_STUDIES_DATA } from "@/lib/caseStudiesData";
import { CaseStudyDetailClient } from "./CaseStudyDetailClient";

export async function generateStaticParams() {
  return CASE_STUDIES_DATA.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES_DATA.find((item) => item.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found | CodePlaced",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${study.title} | CodePlaced Case Study`,
    description: study.shortDescription,
    openGraph: {
      title: `${study.title} | CodePlaced Case Study`,
      description: study.shortDescription,
      images: [study.heroImage],
    },
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const currentIndex = CASE_STUDIES_DATA.findIndex((item) => item.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const study = CASE_STUDIES_DATA[currentIndex];

  // Previous and Next navigation
  const prevStudy = currentIndex > 0 ? CASE_STUDIES_DATA[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < CASE_STUDIES_DATA.length - 1 ? CASE_STUDIES_DATA[currentIndex + 1] : null;

  // 3 Related Case Studies (excluding current)
  const relatedStudies = CASE_STUDIES_DATA.filter((item) => item.slug !== study.slug).slice(0, 3);

  return (
    <CaseStudyDetailClient
      study={study}
      prevStudy={prevStudy}
      nextStudy={nextStudy}
      relatedStudies={relatedStudies}
    />
  );
}
