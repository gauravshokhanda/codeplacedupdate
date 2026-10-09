"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Layers, GraduationCap } from "lucide-react";

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
    { id: "full-stack", label: "Full-Stack Development" },
    { id: "architecture", label: "Product Architecture" },
    { id: "automation", label: "Automation & Workflows" },
    { id: "analytics", label: "Data & Analytics" },
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

// Featured Case Study: Tuitionstime EdTech Marketplace
const FEATURED_CASE_STUDY = {
  id: "tuitionstime",
  slug: "tuitionstime",
  brand: "Tuitionstime",
  title: "Engineering a Complete EdTech Marketplace",
  highlightWord: "EdTech Marketplace",
  description:
    "From tutor discovery to demos, classes, meetings, payments, learning resources and analytics.",
  image: "/images/case-studies/tuitionstime-hero.webp",
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
};

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState<FilterCategory>("industries");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const currentFilters = FILTERS_BY_CATEGORY[activeTab];

  const handleTabChange = (tab: FilterCategory) => {
    setActiveTab(tab);
    setActiveFilter("all");
  };

  const isMatch = FEATURED_CASE_STUDY.matching[activeTab].includes(activeFilter);

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

      <main className="pt-28 sm:pt-36 lg:pt-40 pb-24 space-y-10 sm:space-y-12 relative z-10">
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
        {/* 3. FEATURED CASE STUDY CARD (APPINVENTIV KFC-STYLE SHOWCASE CARD) */}
        {/* ~90% Viewport Width, 380-450px Height, Left HTML Content, Right Product Artwork */}
        {/* ========================================================================= */}
        <section className="pt-2 px-4 sm:px-6">
          <AnimatePresence mode="wait">
            {isMatch ? (
              <motion.div
                key={FEATURED_CASE_STUDY.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="w-[92%] max-w-[1400px] mx-auto"
              >
                <Link
                  href={`/case-studies/${FEATURED_CASE_STUDY.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View case study: ${FEATURED_CASE_STUDY.title}`}
                  className="block relative rounded-[20px] border border-[#00C7E8]/25 hover:border-[#00C7E8]/60 bg-[#050505] overflow-hidden min-h-[420px] lg:h-[450px] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(0,199,232,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(0,199,232,0.14)] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C7E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                >
                  {/* Generated Product Imagery (Right-Aligned, Seamlessly Blended into Dark Background) */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={FEATURED_CASE_STUDY.image}
                      alt="Tuitionstime EdTech Marketplace Platform"
                      fill
                      priority
                      className="object-cover object-right md:object-[75%_center] lg:object-right transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 1400px) 92vw, 1400px"
                    />

                    {/* Dark Vignette Overlay on Left (Guarantees Razor-Sharp Readability of HTML Text) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent w-full md:w-[65%] lg:w-[58%] pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent md:hidden pointer-events-none" />
                  </div>

                  {/* Real HTML Content Layer (Left-Aligned Content + Bottom Metrics) */}
                  <div className="relative z-10 h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    {/* Upper Left: Badge, Brand, Title, Description, and CTA */}
                    <div className="space-y-4 max-w-xl text-left">
                      {/* Eyebrow Tag */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00C7E8]/10 border border-[#00C7E8]/30 text-[#00C7E8] w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00C7E8] animate-pulse" />
                        <span>Featured Case Study</span>
                      </div>

                      {/* Brand Logo & Name */}
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#00C7E8]/15 border border-[#00C7E8]/35 flex items-center justify-center text-[#00C7E8]">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <span className="text-xl sm:text-2xl font-bold tracking-tight text-white lowercase">
                          {FEATURED_CASE_STUDY.brand}
                        </span>
                      </div>

                      {/* Title with Cyan Highlight */}
                      <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-[1.15]">
                        Engineering a Complete{" "}
                        <span className="text-[#00C7E8]">EdTech Marketplace</span>
                      </h2>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-md pt-0.5">
                        {FEATURED_CASE_STUDY.description}
                      </p>

                      {/* View Case Study CTA Button */}
                      <div className="pt-2">
                        <span
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#00C7E8] text-[#00C7E8] group-hover:bg-[#00C7E8] group-hover:text-black font-mono text-xs font-bold transition-all duration-200 shadow-sm"
                        >
                          <span>View Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>

                    {/* Bottom Row: Metrics Strip with Divider Lines (Appinventiv Style) */}
                    <div className="pt-6 mt-4 sm:mt-0 border-t border-white/[0.08] lg:border-t-0 flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10">
                      {FEATURED_CASE_STUDY.metrics.map((metric, idx) => (
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
                    href="/contact"
                    className="px-5 py-2.5 rounded-full text-xs font-mono font-bold text-[#A1A1AA] hover:text-white border border-white/10 hover:border-[#00C7E8]/40 transition-colors"
                  >
                    Book Strategy Call
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}
