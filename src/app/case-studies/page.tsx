"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Layers, GraduationCap, Gamepad2, BarChart3, Database, Users, Globe2, Cpu, Bot, Target, Code2, Building2, Workflow } from "lucide-react";
import { CaseStudyCard, CaseStudyData } from "@/components/case-studies/CaseStudyCard";

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
    { id: "ecommerce", label: "Ecommerce" },
    { id: "edtech", label: "EdTech" },
    { id: "insurance", label: "Insurance" },
    { id: "human-resources", label: "Human Resources" },
    { id: "healthcare", label: "Healthcare" },
    { id: "real-estate", label: "Real Estate" },
    { id: "gaming", label: "Gaming" },
    { id: "saas", label: "SaaS" },
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
const FEATURED_CASE_STUDIES: (CaseStudyData & {
  matching: {
    industries: string[];
    services: string[];
    regions: string[];
  };
})[] = [
    {
      id: "tuitionstime",
      slug: "tuitionstime",
      category: "EDTECH & SAAS PLATFORM",
      brand: "Tuitionstime",
      brandIcon: GraduationCap,
      titlePrefix: "Engineering a Complete ",
      highlightWord: "EdTech Marketplace",
      description:
        "From tutor discovery to demos, classes, meetings, payments, learning resources and analytics.",
      image: "/images/case-studies/tuitionstime-featured-flagship.webp",
      mobileImage: "/images/case-studies/tuitionstime/tuitionstime-photorealistic-laptop-hero.webp",
      imageAlt: "Tuitionstime EdTech Marketplace Platform",
      techTags: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Razorpay", "Twilio"],
      metrics: [
        { value: "10K+", label: "Active Students", icon: Users },
        { value: "2K+", label: "Expert Tutors", icon: GraduationCap },
        { value: "50K+", label: "Classes Completed", icon: Layers },
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
      brandLogoUrl: "/images/case-studies/hoopwrld-logo-badge.png",
      titlePrefix: "Turning Gameplay Data Into ",
      highlightWord: "Reliable Player Analytics",
      description:
        "A unified reporting solution that helps Hoopwrld understand player activity, game completion, retention, and acquisition performance.",
      image: "/images/case-studies/hoopwrld-hero-basketball-laptop-perfect.webp",
      mobileImage: "/images/case-studies/hoopwrld-after-laptop-front.webp",
      imageAlt: "Hoopwrld Player Analytics & Business Intelligence Dashboard",
      techTags: ["Looker Studio", "PostgreSQL", "GA4", "Clerk", "Google Ads"],
      metrics: [
        { value: "5 Sources", label: "Data Sources Integrated", icon: Database },
        { value: "Daily Pulse", label: "Mobile-First Daily Checks", icon: BarChart3 },
        { value: "Multi-Platform", label: "Web + Media Reporting", icon: Globe2 },
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
    {
      id: "progress-partners",
      slug: "progress-partners",
      category: "DATA ANALYTICS & BUSINESS INTELLIGENCE",
      brand: "Progress Partners",
      brandIcon: BarChart3,
      titlePrefix: "Turning Complex Data Into ",
      highlightWord: "Clearer Growth Decisions",
      description:
        "We helped Progress Partners turn complex marketing, subscription and payment data into reliable KPIs for tracking revenue growth, customer retention and advertising performance.",
      image: "/images/case-studies/progress-partners/hero-dashboard.webp",
      mobileImage: "/images/case-studies/progress-partners/hero-dashboard.webp",
      imageAlt: "Progress Partners Business Intelligence & Revenue Analytics Dashboard",
      techTags: ["BigQuery", "SQL", "Preset", "GA4", "Stripe", "Solidgate", "Amplitude", "AnyTrack"],
      metrics: [
        { value: "8 Sources", label: "Data Sources Unified", icon: Database },
        { value: "Daily KPIs", label: "Daily Dashboard Usage", icon: BarChart3 },
        { value: "LTV + Churn", label: "Customer Retention Insights", icon: Users },
      ],
      matching: {
        industries: ["all", "ecommerce", "saas", "enterprise"],
        services: [
          "all",
          "analytics",
          "architecture",
        ],
        regions: ["all", "north-america", "global"],
      },
    },
    {
      id: "topplaced-ai",
      slug: "topplaced-ai",
      category: "AI INTERVIEW INTELLIGENCE / SAAS",
      brand: "TopPlaced AI",
      brandIcon: Cpu,
      titlePrefix: "Building an AI-Powered ",
      highlightWord: "Interview Simulation Platform",
      description:
        "An interview simulator that adapts, evaluates, and monitors the complete candidate journey. TopPlaced AI combines voice-led mock interviews, role-specific assessments, integrated coding tools, configurable evaluation rubrics, and multi-signal proctoring into one candidate-facing experience.",
      image: "/images/case-studies/topplaced-ai/topplaced-card-live-interview.webp",
      mobileImage: "/images/case-studies/topplaced-ai/topplaced-card-live-interview.webp",
      imageAlt: "TopPlaced AI - AI-Powered Interview Simulation Platform",
      techTags: ["Voice AI", "STAR Rubrics", "Proctoring", "Code Sandbox", "WebRTC"],
      metrics: [
        { value: "Voice-Led", label: "Voice-Led Interviews", icon: Bot },
        { value: "Role-Specific", label: "Role-Specific Assessments", icon: Target },
        { value: "Coding Tools", label: "Integrated Coding Tools", icon: Code2 },
      ],
      matching: {
        industries: ["all", "saas", "edtech", "enterprise"],
        services: [
          "all",
          "automation",
          "full-stack",
          "architecture",
        ],
        regions: ["all", "north-america", "india-apac", "global"],
      },
    },
    {
      id: "collectiq",
      slug: "collectiq",
      category: "SAAS / AI AUTOMATION / FINTECH OPERATIONS",
      brand: "CollectIQ",
      brandIcon: Building2,
      titlePrefix: "Building an AI-Powered ",
      highlightWord: "Collections Operating System",
      description:
        "A connected SaaS platform bringing together consumer debt collections, commercial receivables, intelligent workflows, account management, and collection intelligence in one operational ecosystem.",
      image: "/images/case-studies/collectiq/collectiq-hero-showcase.webp",
      mobileImage: "/images/case-studies/collectiq/collectiq-hero-showcase.webp",
      imageAlt: "CollectIQ - AI-Powered Collections Operating System",
      techTags: ["SaaS Architecture", "Workflow Builder", "AI Assistant", "CRM Operations", "Multi-Tenant"],
      metrics: [
        { value: "Collections", label: "Collections Management", icon: Building2 },
        { value: "Workflows", label: "Workflow Automation", icon: Workflow },
        { value: "AI Insights", label: "AI-Powered Insights", icon: Bot },
      ],
      matching: {
        industries: ["all", "saas", "enterprise"],
        services: [
          "all",
          "automation",
          "architecture",
          "full-stack",
          "analytics",
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
      "Analyze the core commercial bottleneck, audit technical constraints, and define quantifiable KPIs for delivery.",
    shortDesc: "Audit constraints and define quantifiable KPIs.",
  },
  {
    step: "02",
    title: "Engineer",
    description:
      "Deploy senior pods to architect and build high-performance software, data pipelines, and AI systems in rapid sprints.",
    shortDesc: "Build scalable, production-ready systems in rapid sprints.",
  },
  {
    step: "03",
    title: "Optimize",
    description:
      "Benchmark production telemetry, eliminate performance bottlenecks, and scale systems with proactive SLA support.",
    shortDesc: "Benchmark telemetry and scale with proactive SLA support.",
  },
];

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState<FilterCategory>("industries");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Temporarily display only categories containing published projects (e.g. hides empty Insurance, HR)
  // Preserves full FILTERS_BY_CATEGORY configuration for future additions
  const currentFilters = FILTERS_BY_CATEGORY[activeTab].filter(
    (chip) =>
      chip.id === "all" ||
      FEATURED_CASE_STUDIES.some((study) =>
        study.matching[activeTab].includes(chip.id)
      )
  );

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

      <main className="pt-20 sm:pt-28 lg:pt-40 relative z-10">
        {/* Top Dark Showcase: Hero + Filters + Featured Case Study */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-12 pb-8 sm:pb-14 lg:pb-24">
          {/* ========================================================================= */}
          {/* 1. CENTERED HERO SECTION (SINGLE-LINE HEADING ON DESKTOP) */}
          {/* ========================================================================= */}
          <section className="text-center mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-5 lg:space-y-6">
            {/* Eyebrow Label */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[9.5px] sm:text-xs font-mono font-bold tracking-widest uppercase bg-[#07090D] border border-[#00C7E8]/40 text-[#00C7E8]"
              >
                CASE STUDIES
              </motion.div>
            </div>

            {/* Single-Line Heading on Desktop & Laptop: "Optimize. Innovate. Disrupt." */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2 sm:space-y-4"
            >
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] sm:leading-[1.08] [text-wrap:balance]">
                Real Projects.{" "}
                <span
                  className="bg-clip-text text-transparent inline-block"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #00C7E8 0%, #087FA5 100%)",
                  }}
                >
                  Measurable Impact.
                </span>
              </h1>
              <p className="text-xs sm:text-base lg:text-lg text-[#A1A1AA] font-normal leading-relaxed max-w-2xl mx-auto">
                Explore how CodePlaced delivers production-grade applications, data platforms, and AI automation to help organizations achieve measurable business outcomes.
              </p>
            </motion.div>

            {/* ========================================================================= */}
            {/* 2. CASE STUDY NAVIGATION & FILTERS (COMPACT & CENTERED) */}
            {/* ========================================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-0.5 sm:pt-3 space-y-2.5 sm:space-y-4"
            >
              {/* Category Tabs: Industries | Services | Regions */}
              <div className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-12">
                {CATEGORY_TABS.map((tab) => {
                  const isTabActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={`relative pb-1.5 sm:pb-2 text-xs sm:text-base font-semibold transition-colors duration-200 cursor-pointer ${isTabActive
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
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 max-w-4xl mx-auto pt-0.5">
                {currentFilters.map((chip) => {
                  const isActive = activeFilter === chip.id;
                  return (
                    <button
                      key={chip.id}
                      onClick={() => setActiveFilter(chip.id)}
                      className={`px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10.5px] sm:text-xs font-mono transition-all duration-200 cursor-pointer ${isActive
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
          {/* 3. FEATURED CASE STUDY CARDS (STANDARDIZED REUSABLE CARD COMPONENT)       */}
          {/* Mobile: Standardized compact layout with identical heights & 16:10 visuals*/}
          {/* Desktop: Pinned 100% authentic showcase layouts                           */}
          {/* ========================================================================= */}
          <section id="featured-case-study" className="pt-1 sm:pt-2 px-3 sm:px-6 scroll-mt-20">
            <AnimatePresence mode="wait">
              {matchingStudies.length > 0 ? (
                <div className="space-y-3 sm:space-y-4 lg:space-y-10 w-[94%] sm:w-[92%] max-w-[1400px] mx-auto">
                  {matchingStudies.map((study) => (
                    <motion.div
                      key={study.id}
                      initial={{ opacity: 1, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.4 }}
                    >
                      <CaseStudyCard study={study} />
                    </motion.div>
                  ))}
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
                      Send an Inquiry
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>

        {/* ========================================================================= */}
        {/* 3. APPROACH / EDITORIAL SECTION — PURE WHITE BACKGROUND (COMPACT)         */}
        {/* ========================================================================= */}
        <section id="project-approach" className="bg-[#FFFFFF] text-[#101820] py-7 sm:py-10 md:py-16 lg:py-24 border-t border-slate-200 relative z-20">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-4 sm:mb-6 md:mb-12"
            >
              <div className="inline-flex items-center px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#087FA5] mb-2 sm:mb-3">
                BEHIND EVERY PROJECT
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[46px] font-black tracking-tight text-[#101820] leading-[1.15]">
                From Business Challenges to Working Solutions
              </h2>
              <p className="mt-1.5 sm:mt-3 text-xs sm:text-sm md:text-base text-[#566171] leading-relaxed">
                We focus on understanding the challenge, engineering the right solution, and continuously optimizing what we build.
              </p>
            </motion.div>

            {/* Three-Column Horizontal Process Row */}
            <div className="grid grid-cols-3 divide-x divide-slate-200 border-t border-b border-slate-200 py-3 sm:py-4 md:py-0">
              {APPROACH_STEPS.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`px-2 sm:px-4 md:px-8 py-0.5 md:py-8 lg:py-10 text-left ${idx === 0
                    ? "md:pr-8 lg:pr-10"
                    : idx === 1
                      ? "md:px-8 lg:px-10"
                      : "md:pl-8 lg:pl-10"
                    }`}
                >
                  <div className="text-xs sm:text-sm md:text-2xl lg:text-3xl font-mono font-black text-[#087FA5] mb-0.5 md:mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-xs sm:text-base md:text-xl lg:text-2xl font-bold text-[#101820] tracking-tight leading-tight mb-1 md:mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#566171] leading-tight sm:leading-snug md:leading-relaxed">
                    <span className="md:hidden line-clamp-2">{item.shortDesc}</span>
                    <span className="hidden md:inline">{item.description}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. COMPACT BLACK CTA SECTION */}
        {/* ========================================================================= */}
        <section id="case-studies-cta" className="bg-[#050505] border-t border-[#1B242B] text-white py-8 sm:py-12 md:py-16 lg:py-24 relative z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="space-y-2.5 sm:space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Build Something Exceptional?
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#A1A1AA] max-w-xl mx-auto leading-relaxed">
                Partner with our senior engineering pods to design, build, and deploy production software tailored to your commercial goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 pt-1 sm:pt-2"
            >
              <Link
                href="/contact#contact-hero"
                className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-xs sm:text-base shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 group"
              >
                <span>Send an Inquiry</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 rounded-full bg-transparent hover:bg-white/10 text-white font-bold text-xs sm:text-base border border-neutral-700 flex items-center justify-center transition-all"
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
