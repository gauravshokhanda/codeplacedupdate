"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  GraduationCap,
  Gamepad2,
  BarChart3,
  Database,
  Users,
  Layers,
  Globe2,
} from "lucide-react";

export type CaseStudySlug = "tuitionstime" | "hoopwrld" | "progress-partners";

interface RelatedCaseStudyItem {
  id: CaseStudySlug;
  slug: string;
  category: string;
  brand: string;
  brandIcon: React.ElementType;
  titlePrefix: string;
  highlightWord: string;
  description: string;
  image: string;
  imageAlt: string;
  techTags: string[];
  metrics: {
    value: string;
    label: string;
    icon: React.ElementType;
  }[];
}

const ALL_CASE_STUDIES: RelatedCaseStudyItem[] = [
  {
    id: "tuitionstime",
    slug: "tuitionstime",
    category: "EDTECH & SAAS PLATFORM",
    brand: "Tuitionstime",
    brandIcon: GraduationCap,
    titlePrefix: "Engineering a Complete ",
    highlightWord: "EdTech Marketplace",
    description:
      "From tutor discovery to demos, classes, meetings, payments, learning resources and analytics — a connected digital platform built for scale.",
    image: "/images/case-studies/tuitionstime-featured-flagship.webp",
    imageAlt: "Tuitionstime EdTech Marketplace Platform by CodePlaced",
    techTags: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Razorpay", "Twilio"],
    metrics: [
      { value: "10K+", label: "Active Students", icon: Users },
      { value: "2K+", label: "Expert Tutors", icon: GraduationCap },
      { value: "50K+", label: "Classes Completed", icon: Layers },
    ],
  },
  {
    id: "hoopwrld",
    slug: "hoopwrld",
    category: "DATA ANALYTICS & BUSINESS INTELLIGENCE",
    brand: "Hoopwrld",
    brandIcon: Gamepad2,
    titlePrefix: "Turning Gameplay Data Into ",
    highlightWord: "Reliable Player Analytics.",
    description:
      "A unified reporting solution that helps Hoopwrld understand player activity, game completion, retention, and acquisition performance.",
    image: "/images/case-studies/hoopwrld-hero-basketball-laptop-perfect.webp",
    imageAlt: "Hoopwrld Player Analytics & Business Intelligence Dashboard",
    techTags: ["Looker Studio", "PostgreSQL", "GA4", "Clerk", "Google Ads"],
    metrics: [
      { value: "5 Sources", label: "Data Sources Integrated", icon: Database },
      { value: "Daily Pulse", label: "Mobile-First Daily Checks", icon: BarChart3 },
      { value: "Multi-Platform", label: "Web + Media Reporting", icon: Globe2 },
    ],
  },
  {
    id: "progress-partners",
    slug: "progress-partners",
    category: "DATA ANALYTICS & BUSINESS INTELLIGENCE",
    brand: "Progress Partners",
    brandIcon: BarChart3,
    titlePrefix: "Turning Complex Data Into ",
    highlightWord: "Clearer Growth Decisions.",
    description:
      "We helped Progress Partners turn complex marketing, subscription and payment data into reliable KPIs for tracking revenue growth, customer retention and advertising performance.",
    image: "/images/case-studies/progress-partners/hero-dashboard.webp",
    imageAlt: "Progress Partners Business Intelligence & Revenue Analytics Dashboard",
    techTags: ["BigQuery", "SQL", "Preset", "GA4", "Stripe", "Solidgate", "Amplitude", "AnyTrack"],
    metrics: [
      { value: "8 Sources", label: "Data Sources Unified", icon: Database },
      { value: "Daily KPIs", label: "Daily Dashboard Usage", icon: BarChart3 },
      { value: "LTV + Churn", label: "Customer Retention Insights", icon: Users },
    ],
  },
];

interface RelatedCaseStudiesProps {
  currentSlug: CaseStudySlug | string;
  className?: string;
}

export function RelatedCaseStudies({ currentSlug, className = "" }: RelatedCaseStudiesProps) {
  // Normalize slug to match canonical keys
  const normalizedSlug = currentSlug.toLowerCase().trim();

  // Exclude current case study, preserving canonical order of the other two
  const relatedStudies = ALL_CASE_STUDIES.filter(
    (study) => study.id !== normalizedSlug && study.slug !== normalizedSlug
  );

  return (
    <section
      className={`bg-[#000000] text-white py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] ${className}`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-2 max-w-3xl text-left">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00BCD4]">
            EXPLORE MORE CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore More Case Studies.
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Discover how we turn complex business challenges into practical reporting and digital solutions across real-world projects.
          </p>
        </div>

        {/* Vertically Stacked Full-Width Cards */}
        <div className="space-y-6 sm:space-y-8 pt-2">
          {relatedStudies.map((study) => {
            const BrandIcon = study.brandIcon;

            return (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View case study: ${study.brand}`}
                className="block relative rounded-[20px] border border-[#00BCD4]/25 hover:border-[#00BCD4]/60 bg-[#000000] overflow-hidden min-h-[460px] lg:min-h-[490px] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(0,188,212,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(0,188,212,0.14)] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#000000]"
              >
                <div className="flex flex-col lg:flex-row h-full items-center p-6 sm:p-8 lg:p-10 xl:p-12 gap-8 lg:gap-10">
                  {/* Left Column (~45%) — Editorial Information */}
                  <div className="w-full lg:w-[45%] xl:w-[46%] flex flex-col justify-between text-left z-10 space-y-6 lg:space-y-8">
                    {/* Top Content Block */}
                    <div className="space-y-4 max-w-xl">
                      {/* Eyebrow Tag */}
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
                        <span>{study.category}</span>
                      </div>

                      {/* Brand Logo & Name */}
                      <div className="flex items-center gap-2.5">
                        {study.id === "hoopwrld" ? (
                          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shrink-0 bg-[#00BCD4]/10 border border-[#00BCD4]/30">
                            <Image
                              src="/images/case-studies/hoopwrld-logo-badge.png"
                              alt="Hoopwrld Logo"
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4] shrink-0">
                            <BrandIcon className="w-4 h-4 text-[#00BCD4]" />
                          </div>
                        )}
                        <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                          {study.brand}
                        </span>
                      </div>

                      {/* Title with Cyan Highlight */}
                      <h3 className="text-2xl sm:text-3xl lg:text-[30px] xl:text-[34px] font-extrabold text-white tracking-tight leading-[1.18]">
                        {study.titlePrefix}
                        <span className="text-[#00BCD4] block sm:inline lg:block">
                          {study.highlightWord}
                        </span>
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                        {study.description}
                      </p>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {study.techTags.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View Case Study CTA Button */}
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00BCD4] text-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-black font-mono text-xs font-bold transition-all duration-200 shadow-sm">
                          <span>View Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                        </span>
                      </div>
                    </div>

                    {/* Bottom Metrics Row with Icons */}
                    <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-3 xl:gap-5">
                      {study.metrics.map((metric, idx) => {
                        const MetricIcon = metric.icon;
                        return (
                          <div key={idx} className="flex items-start gap-2.5">
                            <MetricIcon className="w-4 h-4 text-[#00BCD4] shrink-0 mt-0.5" />
                            <div className="text-left">
                              <div className="text-base sm:text-lg lg:text-xl font-black text-white font-mono tracking-tight whitespace-nowrap">
                                {metric.value}
                              </div>
                              <div className="text-[10px] sm:text-[11px] text-[#A1A1AA] mt-0.5 font-medium leading-tight">
                                {metric.label}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column (~55%) — Project Visual Identity */}
                  <div className="w-full lg:w-[55%] xl:w-[54%] relative flex items-center justify-center select-none overflow-hidden min-h-[260px] sm:min-h-[320px] lg:min-h-0">
                    {/* Subtle Ambient Cyan Glow Behind Display */}
                    <div
                      className="absolute top-[40%] right-[25%] -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(0,188,212,0.15)_0%,rgba(0,188,212,0.02)_45%,transparent_70%)] blur-2xl pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Project Specific Artwork Presentation */}
                    {study.id === "tuitionstime" && (
                      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                        <Image
                          src={study.image}
                          alt={study.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          className="object-contain object-center lg:object-right"
                        />
                      </div>
                    )}

                    {study.id === "hoopwrld" && (
                      <div className="relative w-full aspect-[2200/1350] transition-transform duration-500 ease-out group-hover:scale-[1.02] drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]">
                        <Image
                          src={study.image}
                          alt={study.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          className="object-contain object-center"
                        />
                      </div>
                    )}

                    {study.id === "progress-partners" && (
                      <div className="relative w-full aspect-[1071/712] rounded-2xl overflow-hidden border border-[#00BCD4]/35 bg-[#07090D] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(0,188,212,0.1)] p-2 sm:p-2.5 transition-transform duration-500 ease-out group-hover:scale-[1.01]">
                        <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0A0D12]">
                          <Image
                            src={study.image}
                            alt={study.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            className="object-contain object-center"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

