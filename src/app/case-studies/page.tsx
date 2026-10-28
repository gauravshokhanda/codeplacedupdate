"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Layers, GraduationCap, Gamepad2 } from "lucide-react";

type FilterCategory = "industries" | "services" | "regions";

interface FilterOption {
  id: string;
  label: string;
}

const CATEGORY_TABS: { id: FilterCategory; label: string }[] = [
  { id: "industries", label: "Industries" },
  { id: "services", label: "Services" },
  { id: "regions", label: "Regions" },
];

const FILTERS_BY_CATEGORY: Record<FilterCategory, FilterOption[]> = {
  industries: [
    { id: "all", label: "All" },
    { id: "edtech", label: "EdTech" },
    { id: "gaming", label: "Gaming" },
    { id: "saas", label: "SaaS" },
    { id: "ai", label: "AI" },
    { id: "healthcare", label: "Healthcare" },
    { id: "finance", label: "Finance" },
    { id: "logistics", label: "Logistics" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "retail", label: "Retail" },
    { id: "enterprise", label: "Enterprise" },
  ],
  services: [
    { id: "all", label: "All" },
    { id: "analytics", label: "Data Analytics & BI" },
    { id: "full-stack", label: "Full-Stack Development" },
    { id: "architecture", label: "Product Architecture" },
    { id: "automation", label: "Automation & Workflows" },
    { id: "seo", label: "Technical SEO" },
  ],
  regions: [
    { id: "all", label: "All" },
    { id: "north-america", label: "North America" },
    { id: "india-apac", label: "India & APAC" },
    { id: "middle-east", label: "Middle East" },
    { id: "europe", label: "Europe" },
    { id: "global", label: "Global" },
  ],
};

// Featured Case Studies
const FEATURED_CASE_STUDIES = [
  {
    id: "tuitionstime",
    slug: "tuitionstime",
    category: "Featured Case Study",
    brand: "Tuitionstime",
    brandIcon: GraduationCap,
    titlePrefix: "Engineering a Complete ",
    highlightWord: "EdTech Marketplace",
    description:
      "From tutor discovery to demos, classes, meetings, payments, learning resources and analytics.",
    image: "/images/case-studies/tuitionstime-featured-flagship.webp",
    imageAlt: "Tuitionstime EdTech Marketplace Platform",
    techTags: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Razorpay", "Twilio"],
    metrics: [
      { value: "10K+", label: "Active Students" },
      { value: "2K+", label: "Expert Tutors" },
      { value: "50K+", label: "Classes Completed" },
    ],
    matching: {
      industries: ["all", "edtech", "saas"],
      services: [
        "all",
        "full-stack",
        "architecture",
        "automation",
        "analytics",
        "seo",
      ],
      regions: ["all", "india-apac", "north-america", "global"],
    },
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
    image: "/images/case-studies/hoopwrld-featured-flagship.webp",
    imageAlt: "Hoopwrld Player Analytics & Business Intelligence Dashboard",
    techTags: ["Looker Studio", "PostgreSQL", "GA4", "Clerk", "Google Ads", "Windsor.ai"],
    metrics: [
      { value: "5 Sources", label: "Data Sources Integrated" },
      { value: "Daily Pulse", label: "Mobile-First Daily Checks" },
      { value: "Multi-Platform", label: "Media & Ad Reporting" },
    ],
    matching: {
      industries: ["all", "gaming", "saas"],
      services: [
        "all",
        "analytics",
        "architecture",
      ],
      regions: ["all", "north-america", "global"],
    },
  },
];

const APPROACH_STEPS = [
  {
    step: "01",
    title: "Understand",
    description:
      "Identify the business problem, clarify requirements, and establish what success should look like.",
  },
  {
    step: "02",
    title: "Engineer",
    description:
      "Bring together development, data, and AI capabilities to build practical, scalable solutions.",
  },
  {
    step: "03",
    title: "Improve",
    description:
      "Refine solutions through testing, feedback, and evolving business requirements.",
  },
];

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState<FilterCategory>("industries");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const currentFilters = FILTERS_BY_CATEGORY[activeTab];

  const handleTabChange = (tab: FilterCategory) => {
    setActiveTab(tab);
    setActiveFilter("all");
  };

  const matchingStudies = FEATURED_CASE_STUDIES.filter((study) =>
    study.matching[activeTab].includes(activeFilter)
  );

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] selection:bg-[#00C7E8] selection:text-black font-sans relative antialiased overflow-x-hidden">
      {/* Restrained Ambient Radial Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[460px] pointer-events-none opacity-25 -z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 12%, rgba(0, 199, 232, 0.14) 0%, rgba(8, 127, 165, 0.06) 45%, transparent 70%)",
        }}
      />

      <main className="pt-28 sm:pt-36 lg:pt-40 relative z-10">
        {/* Top Dark Showcase: Hero + Filters + Featured Case Study */}
        <div className="space-y-10 sm:space-y-12 pb-20 sm:pb-24">
        {/* ========================================================================= */}
        {/* 1. CENTERED HERO SECTION (SINGLE-LINE HEADING ON DESKTOP) */}
        {/* ========================================================================= */}
        <section className="text-center mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Eyebrow Label */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#07090D] border border-[#00C7E8]/40 text-[#00C7E8]"
            >
              CASE STUDIES
            </motion.div>
          </div>

          {/* Single-Line Heading on Desktop & Laptop: "Optimize. Innovate. Disrupt." */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] font-black tracking-tight text-white leading-none whitespace-normal md:whitespace-nowrap">
              Optimize. Innovate.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #00C7E8 0%, #087FA5 100%)",
                }}
              >
                Disrupt.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#A1A1AA] font-normal leading-relaxed max-w-2xl mx-auto">
              Explore how CodePlaced engineers scalable digital products,
              intelligent platforms, and enterprise solutions that turn ambitious
              ideas into measurable business impact.
            </p>
          </motion.div>

          {/* ========================================================================= */}
          {/* 2. CASE STUDY NAVIGATION & FILTERS (COMPACT & CENTERED) */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-3 space-y-5"
          >
            {/* Category Tabs: Industries | Services | Regions */}
            <div className="flex items-center justify-center gap-8 sm:gap-12">
              {CATEGORY_TABS.map((tab) => {
                const isTabActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative pb-2 text-sm sm:text-base font-semibold transition-colors duration-200 cursor-pointer ${
                      isTabActive
                        ? "text-white font-bold"
                        : "text-[#71717A] hover:text-[#E2E8F0]"
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isTabActive && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00C7E8] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Outlined Filter Chips Under Active Tab */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto pt-1">
              {currentFilters.map((chip) => {
                const isActive = activeFilter === chip.id;
                return (
                  <button
                    key={chip.id}
                    onClick={() => setActiveFilter(chip.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-white font-bold border border-[#00C7E8] shadow-md shadow-[#00C7E8]/20"
                        : "bg-[#07090D]/80 text-[#A1A1AA] border border-white/[0.08] hover:border-[#00C7E8]/40 hover:text-white"
                    }`}
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, rgba(8, 127, 165, 0.45) 0%, rgba(0, 199, 232, 0.35) 100%)"
                        : undefined,
                    }}
                  >
                    {chip.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* 3. FEATURED CASE STUDY CARDS (APPINVENTIV KFC-STYLE SHOWCASE CARDS) */}
        {/* ~90% Viewport Width, 380-450px Height, Left HTML Content, Right Product Artwork */}
        {/* ========================================================================= */}
        <section id="featured-case-study" className="pt-2 px-4 sm:px-6 scroll-mt-20">
          <AnimatePresence mode="wait">
            {matchingStudies.length > 0 ? (
              <div className="space-y-8 lg:space-y-10 w-[92%] max-w-[1400px] mx-auto">
                {matchingStudies.map((study) => {
                  const BrandIcon = study.brandIcon;

                  // -------------------------------------------------------------
                  // HOOPWRLD CASE STUDY CARD (50% Content / 50% Visual Split)
                  // Matches Tuitionstime structure, dimensions, border & styling
                  // Completely solid black left half with ZERO text-image overlap
                  // -------------------------------------------------------------
                  // -------------------------------------------------------------
                  // HOOPWRLD CASE STUDY CARD (50% Content / 50% Visual Split)
                  // Matches Tuitionstime structure, dimensions, border & styling
                  // Completely solid black left half with ZERO text-image overlap
                  // -------------------------------------------------------------
                  if (study.id === "hoopwrld") {
                    return (
                      <motion.div
                        key={study.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Link
                          href={`/case-studies/${study.slug}`}
                          aria-label={`View case study: ${study.brand}`}
                          className="block relative rounded-[20px] border border-[#00C7E8]/25 hover:border-[#00C7E8]/60 bg-[#050505] overflow-hidden min-h-[420px] lg:h-[450px] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(0,199,232,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(0,199,232,0.14)] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C7E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                        >
                          <div className="flex flex-col md:flex-row h-full">
                            {/* Left Side (50%) — Solid pure black background, zero image behind text */}
                            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-6 lg:p-8 xl:p-10 flex flex-col justify-between bg-[#050505] z-10">
                              {/* Upper Left: Badge, Brand, Title, Description, Tech Tags, and CTA */}
                              <div className="space-y-3.5 max-w-md xl:max-w-[500px] text-left">
                                {/* Eyebrow Tag */}
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00C7E8]/10 border border-[#00C7E8]/30 text-[#00C7E8] w-fit">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C7E8] animate-pulse" />
                                  <span>{study.category}</span>
                                </div>

                                {/* Brand Logo & Name */}
                                <div className="flex items-center gap-2.5">
                                  <div className="w-8 h-8 rounded-lg bg-[#00C7E8]/15 border border-[#00C7E8]/35 flex items-center justify-center text-[#00C7E8]">
                                    <BrandIcon className="w-4 h-4" />
                                  </div>
                                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                                    {study.brand}
                                  </span>
                                </div>

                                {/* Title with Cyan Highlight */}
                                <h2 className="text-2xl sm:text-2xl md:text-[22px] lg:text-[28px] xl:text-[32px] font-extrabold text-white tracking-tight leading-[1.18] max-w-[460px]">
                                  {study.titlePrefix}
                                  <span className="text-[#00C7E8]">{study.highlightWord}</span>
                                </h2>

                                {/* Short Description */}
                                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-sm sm:max-w-md">
                                  {study.description}
                                </p>

                                {/* Technology Tags */}
                                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                                  {study.techTags.map((tech, tIdx) => (
                                    <span
                                      key={tIdx}
                                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8]"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>

                                {/* View Case Study CTA Button */}
                                <div className="pt-1.5">
                                  <span
                                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00C7E8] text-[#00C7E8] group-hover:bg-[#00C7E8] group-hover:text-black font-mono text-xs font-bold transition-all duration-200 shadow-sm"
                                  >
                                    <span>View Case Study</span>
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                                  </span>
                                </div>
                              </div>

                              {/* Bottom Row: Metrics Strip with Divider Lines */}
                              <div className="pt-6 mt-4 sm:mt-0 border-t border-white/[0.08] md:border-t-0 flex flex-wrap items-center gap-5 sm:gap-8 md:gap-4 lg:gap-8 xl:gap-10">
                                {study.metrics.map((metric, idx) => (
                                  <div
                                    key={idx}
                                    className={`text-left ${
                                      idx !== 0 ? "border-l border-white/15 pl-4 sm:pl-6 md:pl-4 lg:pl-8" : ""
                                    }`}
                                  >
                                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-mono tracking-tight">
                                      {metric.value}
                                    </div>
                                    <div className="text-[11px] text-[#A1A1AA] mt-0.5 font-medium whitespace-nowrap">
                                      {metric.label}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Right side (50%) — Controlled Product Mockup in Clean Black Studio */}
                            <div className="w-full md:w-1/2 bg-[#050505] relative flex items-center justify-center md:justify-end p-6 sm:p-8 md:p-4 lg:p-6 xl:p-10 select-none overflow-hidden min-h-[260px] sm:min-h-[300px] md:min-h-0">
                              {/* Ambient Cyan Glow Behind Display */}
                              <div
                                className="absolute top-[35%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(0,199,232,0.16)_0%,rgba(8,127,165,0.03)_45%,transparent_70%)] blur-3xl -z-0 pointer-events-none"
                                aria-hidden="true"
                              />

                              {/* Realistic MacBook Pro Mockup (takes 80-85% of its 50% image area) */}
                              <div className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[440px] lg:max-w-[530px] xl:max-w-[580px] aspect-[2040/1380] drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] z-10 transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
                                <Image
                                  src="/images/case-studies/hoopwrld-hero-laptop.webp"
                                  alt={study.imageAlt}
                                  fill
                                  priority
                                  className="object-contain object-center md:object-right"
                                  sizes="(max-width: 768px) 90vw, (max-width: 1400px) 50vw, 580px"
                                />
                                {/* Floor contact shadow for grounding */}
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[85%] h-3 bg-black/80 blur-md rounded-full pointer-events-none" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  }

                  // Default / Tuitionstime Card — Exactly Unchanged
                  return (
                    <motion.div
                      key={study.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Link
                        href={`/case-studies/${study.slug}`}
                        aria-label={`View case study: ${study.brand}`}
                        className="block relative rounded-[20px] border border-[#00C7E8]/25 hover:border-[#00C7E8]/60 bg-[#050505] overflow-hidden min-h-[420px] lg:h-[450px] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(0,199,232,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(0,199,232,0.14)] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C7E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                      >
                        {/* Product Imagery (Right-Aligned, Subtle Hover Shift, Seamlessly Blended into Dark Card) */}
                        <div className="absolute inset-0 z-0 overflow-hidden">
                          <Image
                            src={study.image}
                            alt={study.imageAlt}
                            fill
                            priority
                            className="object-cover object-right md:object-[80%_center] lg:object-right transition-transform duration-500 ease-out group-hover:-translate-y-1.5"
                            sizes="(max-width: 1400px) 92vw, 1400px"
                          />

                          {/* Dark Vignette Overlay on Left (Guarantees Razor-Sharp Readability of HTML Text on all devices) */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 md:via-[#050505]/90 to-transparent w-full md:w-[68%] lg:w-[54%] xl:w-[48%] pointer-events-none" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent md:hidden pointer-events-none" />
                        </div>

                        {/* Real HTML Content Layer (Left-Aligned Content + Bottom Metrics) */}
                        <div className="relative z-10 h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                          {/* Upper Left: Badge, Brand, Title, Description, Tech Tags, and CTA */}
                          <div className="space-y-3.5 max-w-md xl:max-w-[500px] text-left">
                            {/* Eyebrow Tag */}
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00C7E8]/10 border border-[#00C7E8]/30 text-[#00C7E8] w-fit">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00C7E8] animate-pulse" />
                              <span>{study.category}</span>
                            </div>

                            {/* Brand Logo & Name */}
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-[#00C7E8]/15 border border-[#00C7E8]/35 flex items-center justify-center text-[#00C7E8]">
                                <BrandIcon className="w-4 h-4" />
                              </div>
                              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                                {study.brand}
                              </span>
                            </div>

                            {/* Title with Cyan Highlight */}
                            <h2 className="text-2xl sm:text-3xl lg:text-[30px] xl:text-[32px] font-extrabold text-white tracking-tight leading-[1.18] max-w-[460px]">
                              {study.titlePrefix}
                              <span className="text-[#00C7E8]">{study.highlightWord}</span>
                            </h2>

                            {/* Short Description */}
                            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-sm sm:max-w-md">
                              {study.description}
                            </p>

                            {/* Technology Tags */}
                            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                              {study.techTags.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {/* View Case Study CTA Button */}
                            <div className="pt-1.5">
                              <span
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00C7E8] text-[#00C7E8] group-hover:bg-[#00C7E8] group-hover:text-black font-mono text-xs font-bold transition-all duration-200 shadow-sm"
                              >
                                <span>View Case Study</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                              </span>
                            </div>
                          </div>

                          {/* Bottom Row: Metrics Strip with Divider Lines (Appinventiv Style) */}
                          <div className="pt-6 mt-4 sm:mt-0 border-t border-white/[0.08] lg:border-t-0 flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10">
                            {study.metrics.map((metric, idx) => (
                              <div
                                key={idx}
                                className={`text-left ${
                                  idx !== 0 ? "lg:border-l lg:border-white/15 lg:pl-8" : ""
                                }`}
                              >
                                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-mono tracking-tight">
                                  {metric.value}
                                </div>
                                <div className="text-[11px] text-[#A1A1AA] mt-0.5 font-medium whitespace-nowrap">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <motion.div
                key="filter-empty-state"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-10 sm:p-14 rounded-[20px] bg-[#07090D] border border-white/[0.08] text-center space-y-5 max-w-xl mx-auto shadow-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-[#050505] border border-[#00C7E8]/30 text-[#00C7E8] flex items-center justify-center mx-auto">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#00C7E8]">
                    ENTERPRISE PORTFOLIO
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Case Studies Under Client NDA
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-md mx-auto">
                    We have engineered and deployed mission-critical architectures in
                    this sector. Detailed blueprints, schema designs, and live
                    walk-throughs are presented during strategy sessions under mutual
                    NDA.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveFilter("all")}
                    className="px-5 py-2.5 rounded-full text-xs font-mono font-bold text-white cursor-pointer transition-opacity hover:opacity-90"
                    style={{
                      background:
                        "linear-gradient(135deg, #087FA5 0%, #00C7E8 100%)",
                    }}
                  >
                    Show All Case Studies
                  </button>
                  <Link
                    href="/contact#contact-hero"
                    className="px-5 py-2.5 rounded-full text-xs font-mono font-bold text-[#A1A1AA] hover:text-white border border-white/10 hover:border-[#00C7E8]/40 transition-colors"
                  >
                    Book Strategy Call
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
        </div>

        {/* ========================================================================= */}
        {/* 3. APPROACH / EDITORIAL SECTION — PURE WHITE BACKGROUND */}
        {/* ========================================================================= */}
        <section id="project-approach" className="bg-[#FFFFFF] text-[#101820] py-20 lg:py-24 border-t border-slate-200 relative z-20">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-12 sm:mb-16"
            >
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#087FA5] mb-4">
                BEHIND EVERY PROJECT
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-[#101820] leading-[1.14]">
                From Business Challenges to Working Solutions.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#566171] leading-relaxed">
                We focus on understanding the challenge, engineering the right solution, and continuously improving what we build.
              </p>
            </motion.div>

            {/* Three-Column Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t border-b border-slate-200">
              {APPROACH_STEPS.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className={`py-8 sm:py-10 ${
                    idx === 0
                      ? "md:pr-8 lg:pr-10"
                      : idx === 1
                      ? "md:px-8 lg:px-10"
                      : "md:pl-8 lg:pl-10"
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-mono font-black text-[#087FA5] mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#101820] tracking-tight mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#566171] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. COMPACT BLACK CTA SECTION */}
        {/* ========================================================================= */}
        <section id="case-studies-cta" className="bg-[#050505] border-t border-[#1B242B] text-white py-16 sm:py-20 lg:py-24 relative z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Have a Project in Mind? Let&apos;s Build It Together.
              </h2>
              <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl mx-auto leading-relaxed">
                Partner with our engineering team to architect, build, and deploy high-performance software tailored to your goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2"
            >
              <Link
                href="/contact#contact-hero"
                className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-sm sm:text-base shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 group"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto h-12 px-8 rounded-full bg-transparent hover:bg-white/10 text-white font-bold text-sm sm:text-base border border-neutral-700 flex items-center justify-center transition-all"
              >
                <span>Explore Our Services</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
