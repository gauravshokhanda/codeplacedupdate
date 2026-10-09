import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  CASE_STUDIES_DATA,
  CASE_STUDY_SLUG_ALIASES,
  getCaseStudyBySlug,
} from "@/lib/caseStudiesData";
import { CaseStudyDetailClient } from "./CaseStudyDetailClient";

export async function generateStaticParams() {
  const canonicalSlugs = CASE_STUDIES_DATA.map((study) => ({
    slug: study.slug,
  }));
  const aliasSlugs = Object.keys(CASE_STUDY_SLUG_ALIASES).map((alias) => ({
    slug: alias,
  }));
  return [...canonicalSlugs, ...aliasSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | CodePlaced",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${study.title} | CodePlaced Engineering Case Study`,
    description: study.shortDescription,
    openGraph: {
      title: `${study.title} | CodePlaced Engineering Case Study`,
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
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const currentIndex = CASE_STUDIES_DATA.findIndex((item) => item.slug === study.slug);

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
