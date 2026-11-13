"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Bot,
  BarChart3,
  Code2,
  Database,
  TrendingUp,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES_DATA, ServiceDetailItem, getPrimaryServiceHref } from "@/lib/servicesData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DIGITAL_MARKETING_SERVICE: ServiceDetailItem = {
  slug: "digital-marketing",
  num: "04",
  title: "Digital Marketing",
  shortTitle: "Digital Marketing",
  tagline: "Visibility, Acquisition & Brand Growth",
  positioning:
    "Grow your online presence and attract the right customers through search optimization, performance advertising, analytics, social media, and brand strategy.",
  color: "#00BCD4",
  badge: "CONNECTED DIGITAL MARKETING",
  heroMetrics: [
    { value: "SEO + AEO", label: "Search Visibility", detail: "Organic & AI-powered discovery" },
    { value: "Paid Media", label: "Google & Meta Ads", detail: "High-intent lead generation" },
    { value: "GA4", label: "Performance Tracking", detail: "Full-funnel attribution" },
  ],
  capabilities: [
    { title: "Answer Engine Optimization (AEO)", desc: "Structure your content so AI assistants and answer engines can find, understand, and surface your business." },
    { title: "Search Engine Optimization (SEO)", desc: "Technical, on-page, and content SEO that builds lasting organic visibility for high-intent searches." },
    { title: "Google Ads & Meta Ads", desc: "Targeted search, display, and paid social campaigns designed to reach the right audience and generate qualified leads." },
    { title: "Google Analytics & Performance Tracking", desc: "GA4 implementation, conversion tracking, funnel analysis, and clear multi-channel performance reporting." },
    { title: "Social Media Management", desc: "Consistent content planning, publishing, and audience engagement across key digital platforms." },
    { title: "Branding & Digital Strategy", desc: "Clear brand positioning, visual consistency, and connected messaging across every digital touchpoint." },
  ],
  architectureNodes: [],
  techStack: [
    { name: "Google Analytics 4", tag: "Analytics", desc: "Event & conversion attribution" },
    { name: "Google Ads", tag: "Paid Search", desc: "High-intent search acquisition" },
    { name: "Meta Ads Manager", tag: "Paid Social", desc: "Audience & creative funnels" },
    { name: "Google Search Console", tag: "SEO & AEO", desc: "Search & answer visibility" },
    { name: "Schema & Entity Graph", tag: "AEO", desc: "AI answer engine optimization" },
  ],
  deliverables: [],
  faqs: [],
};

export const SHOWCASE_SERVICES_DATA: ServiceDetailItem[] = [
  ...SERVICES_DATA
    .filter((service) => service.slug !== "digital-social-marketing")
    .map((service) =>
      service.slug === "data-engineering-analytics"
        ? {
            ...service,
            num: "03",
            title: "Data Analytics & Engineering",
            shortTitle: "Data & Analytics",
            tagline: "Build Trusted Data Foundations & Insights",
            positioning:
              "We unite modern data engineering with business intelligence, building reliable pipelines, governed lakehouses, executive dashboards, and predictive models that turn operational data into decisions.",
            capabilities: [
              ...SERVICES_DATA.find(
                (item) => item.slug === "digital-social-marketing"
              )!.capabilities,
              ...service.capabilities,
            ],
          }
        : service
    ),
  DIGITAL_MARKETING_SERVICE,
];

// =========================================================================
// REALISTIC SERVICE VISUAL CONFIGURATION
// =========================================================================
interface ServiceVisualConfig {
  imageSrc: string;
  alt: string;
  badge: string;
  highlightTag: string;
  subMetric: string;
}

const SERVICE_VISUAL_MAP: Record<string, ServiceVisualConfig> = {
  "ai-services": {
    imageSrc: "/images/services/ai-automation-service.jpg",
    alt: "CodePlaced Enterprise AI & Automation multi-agent supervisor operations workflow",
    badge: "AUTONOMOUS AGENT WORKFLOWS",
    highlightTag: "Private VPC RAG • Sub-400ms Vectors",
    subMetric: "10x Operational Velocity",
  },
  "app-web-development": {
    imageSrc: "/images/services/software-development-team.jpg",
    alt: "CodePlaced Full-stack software development SaaS web and mobile platform",
    badge: "ENTERPRISE SAAS & MOBILE PLATFORMS",
    highlightTag: "Next.js 15 • React 19 • Flutter",
    subMetric: "Sub-25ms SSR SLA",
  },
  "digital-social-marketing": {
    imageSrc: "/images/services/data-analytics-team.jpg",
    alt: "CodePlaced Executive BI telemetry cockpit and KPI analytics dashboard",
    badge: "EXECUTIVE BI & KPI TELEMETRY",
    highlightTag: "Power BI • Tableau • Real-Time",
    subMetric: "Single Source of Truth",
  },
  "data-engineering-analytics": {
    imageSrc: "/images/services/data-engineering-team.jpg",
    alt: "CodePlaced Cloud data engineering pipelines and lakehouse architecture",
    badge: "PETABYTE PIPELINES & LAKEHOUSE",
    highlightTag: "Snowflake • dbt • Apache Kafka",
    subMetric: "1.4M rows/s Throughput",
  },
  "digital-marketing": {
    imageSrc: "/images/services/data-analytics-bi-cockpit.webp",
    alt: "CodePlaced Digital Marketing conversion funnel, AEO, SEO, and paid media analytics dashboard",
    badge: "FULL-FUNNEL DIGITAL MARKETING",
    highlightTag: "AEO • SEO • Google & Meta Ads • GA4",
    subMetric: "Connected Growth Strategy",
  },
};

// =========================================================================
// MAIN INTERACTIVE SERVICES SHOWCASE COMPONENT
// =========================================================================
export function InteractiveServicesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedContentRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScrollRef = useRef(false);

  const activeService = SHOWCASE_SERVICES_DATA[activeIdx] || SHOWCASE_SERVICES_DATA[0];

  // GSAP ScrollTrigger for Desktop (> 1024px)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleHashSync = () => {
      if (typeof window === "undefined") return;
      const hash = window.location.hash.toLowerCase().replace("#", "");
      if (!hash) return;

      let targetIdx = -1;
      if (hash.includes("ai")) targetIdx = 0;
      else if (hash.includes("software") || hash.includes("web") || hash.includes("app")) targetIdx = 1;
      else if (hash.includes("analytics") || hash.includes("bi")) targetIdx = 2;
      else if (hash.includes("engineering") || hash.includes("platform")) targetIdx = 3;
      else if (hash.includes("marketing") || hash.includes("seo") || hash.includes("aeo")) targetIdx = 4;

      if (targetIdx !== -1) {
        setActiveIdx(targetIdx);
        isProgrammaticScrollRef.current = true;
        setTimeout(() => {
          const el = document.getElementById(hash) || document.getElementById("four-pillars-gateway");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          setTimeout(() => {
            isProgrammaticScrollRef.current = false;
          }, 800);
        }, 100);
      }
    };

    handleHashSync();
    window.addEventListener("hashchange", handleHashSync);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const triggerEl = containerRef.current;
      const pinnedEl = pinnedContentRef.current;
      if (!triggerEl || !pinnedEl) return;

      const totalServices = SHOWCASE_SERVICES_DATA.length;

      const st = ScrollTrigger.create({
        trigger: triggerEl,
        start: "top 80px",
        end: "+=1500",
        pin: pinnedEl,
        pinSpacing: true,
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (isProgrammaticScrollRef.current) return;
          const progress = self.progress;
          // Map progress 0.0 -> 1.0 into indices 0..totalServices-1
          const newIdx = Math.min(totalServices - 1, Math.floor(progress * totalServices));
          setActiveIdx(newIdx);
        },
      });

      return () => {
        st.kill();
      };
    });

    return () => {
      window.removeEventListener("hashchange", handleHashSync);
      mm.revert();
    };
  }, []);

  // Handle Manual Tab Click or Prev/Next Button
  const handleSelectService = (idx: number) => {
    setActiveIdx(idx);
    isProgrammaticScrollRef.current = true;
    setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 1200);
  };

  const handlePrev = () => {
    const nextIdx = (activeIdx - 1 + SHOWCASE_SERVICES_DATA.length) % SHOWCASE_SERVICES_DATA.length;
    handleSelectService(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIdx + 1) % SHOWCASE_SERVICES_DATA.length;
    handleSelectService(nextIdx);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div ref={pinnedContentRef} className="w-full">
        {/* Anchor Targets for Navbar Dropdown Deep Linking */}
        <div id="ai-automation" className="scroll-mt-24 sm:scroll-mt-28" />
        <div id="ai-services" className="scroll-mt-24 sm:scroll-mt-28" />
        <div id="software-development" className="scroll-mt-24 sm:scroll-mt-28" />
        <div id="app-web-development" className="scroll-mt-24 sm:scroll-mt-28" />
        <div id="data-analytics-bi" className="scroll-mt-24 sm:scroll-mt-28" />
        <div id="data-analytics" className="scroll-mt-24 sm:scroll-mt-28" />
        <div id="data-engineering" className="scroll-mt-24 sm:scroll-mt-28" />
        <div id="data-engineering-analytics" className="scroll-mt-24 sm:scroll-mt-28" />
        <div id="digital-marketing" className="scroll-mt-24 sm:scroll-mt-28" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00AFC8] block">
              CORE DISCIPLINES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold tracking-tight text-neutral-900 leading-tight">
              Our Pillars of Engineering Excellence
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-neutral-600 leading-relaxed font-normal">
              Explore our core technical practices, system architectures, and production delivery methodologies.
            </p>
          </div>

          {/* ========================================================================= */}
          {/* MOBILE: CORE PILLARS (5 COMPACT CLICKABLE CARDS) + DETAILED SHOWCASE       */}
          {/* ========================================================================= */}
          <div className="block lg:hidden space-y-5">
            {/* Compact 2-Col Core Pillars Navigation Grid (5th Card Centered/Full-Width) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
              {SHOWCASE_SERVICES_DATA.map((service, idx) => {
                const ServiceIcon =
                  service.num === "01"
                    ? Bot
                    : service.num === "02"
                    ? Code2
                    : service.num === "03"
                    ? BarChart3
                    : service.num === "04"
                    ? Database
                    : TrendingUp;

                return (
                  <Link
                    key={service.slug}
                    href={getPrimaryServiceHref(service.slug)}
                    className={`p-3 sm:p-4 rounded-xl text-left transition-all duration-200 border border-[#E5E7EB] hover:border-[#00BCD4] flex flex-col justify-between gap-2.5 group bg-white shadow-xs select-none ${
                      idx === 4 ? "col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FAFAFA] border border-[#E5E7EB] flex items-center justify-center text-[#101820] relative shrink-0 group-hover:border-[#00BCD4]/40 transition-colors">
                        <ServiceIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#101820]" />
                        <span className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#00BCD4] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>

                    <h3 className="text-[12px] min-[375px]:text-[13px] sm:text-sm font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-[#00BCD4] transition-colors">
                      {service.title}
                    </h3>
                  </Link>
                );
              })}
            </div>

            {/* Detailed Service Presentation Section */}
            <div className="pt-4 border-t border-[#E5E7EB] space-y-3">
              {/* Horizontally Scrollable Service Selector Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 scrollbar-none">
                {SHOWCASE_SERVICES_DATA.map((service, idx) => (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                      activeIdx === idx
                        ? "bg-[#00BCD4] text-neutral-950 font-bold shadow-xs"
                        : "bg-[#F3F4F6] text-neutral-600 border border-[#E5E7EB] hover:text-neutral-900"
                    }`}
                  >
                    {service.shortTitle}
                  </button>
                ))}
              </div>

              {/* Clean Editorial Detail Card */}
              <div className="rounded-2xl bg-white border border-[#E5E7EB] p-4 sm:p-5 shadow-xs space-y-3.5">
                {/* Header */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#00BCD4] px-2 py-0.5 rounded bg-[#00BCD4]/10 uppercase tracking-wider">
                      {`${activeService.num} • ${activeService.tagline}`}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 tracking-tight leading-tight pt-0.5">
                    {activeService.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-0.5">
                    {activeService.positioning}
                  </p>
                </div>

                {/* Responsive Service Visual Image (Mandatory: Visible on all mobile screens) */}
                <div className="rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#0A0D14] shadow-sm">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={
                        (SERVICE_VISUAL_MAP[activeService.slug] || SERVICE_VISUAL_MAP["ai-services"]).imageSrc
                      }
                      alt={
                        (SERVICE_VISUAL_MAP[activeService.slug] || SERVICE_VISUAL_MAP["ai-services"]).alt
                      }
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 600px"
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Top Badge */}
                    <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/80 border border-white/15 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
                      <span className="text-[9px] font-mono font-bold text-white tracking-wide">
                        {(SERVICE_VISUAL_MAP[activeService.slug] || SERVICE_VISUAL_MAP["ai-services"]).badge}
                      </span>
                    </div>

                    {/* Bottom Telemetry Info */}
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[9.5px] font-mono text-neutral-300">
                      <span className="truncate max-w-[70%]">
                        {(SERVICE_VISUAL_MAP[activeService.slug] || SERVICE_VISUAL_MAP["ai-services"]).highlightTag}
                      </span>
                      <span className="text-[#00BCD4] font-bold shrink-0">
                        {(SERVICE_VISUAL_MAP[activeService.slug] || SERVICE_VISUAL_MAP["ai-services"]).subMetric}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Clean Professional Business Visual (Performance & Engineering Highlights) */}
                <div className="rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] p-3.5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-neutral-800 pb-2 border-b border-[#E5E7EB]">
                    <span>Performance & Engineering Highlights</span>
                    <span className="text-[10px] font-mono font-bold text-[#00838F] px-2 py-0.5 rounded bg-[#00BCD4]/10">
                      Production Verified
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {activeService.heroMetrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-2 rounded-lg bg-white border border-[#E5E7EB] text-left">
                        <div className="text-[9.5px] font-mono text-neutral-500 truncate">{metric.label}</div>
                        <div className="text-sm font-black text-neutral-900 font-mono mt-0.5">{metric.value}</div>
                        <div className="text-[9px] text-[#00838F] font-mono truncate">{metric.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-2 pt-1 border-t border-[#E5E7EB]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                    {activeService.slug === "digital-marketing" ? "Key Offerings" : "Core Capabilities"}
                  </span>
                  <div className="grid grid-cols-1 min-[375px]:grid-cols-2 gap-2">
                    {(activeService.slug === "digital-marketing"
                      ? activeService.capabilities
                      : activeService.capabilities.slice(0, 4)
                    ).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-1.5 text-xs text-neutral-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0 mt-1.5" />
                        <span className="leading-snug">{cap.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="pt-2 border-t border-[#E5E7EB] space-y-1.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                    Technologies & Frameworks
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeService.techStack.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-[#F3F4F6] border border-[#E5E7EB] text-[10.5px] font-mono text-neutral-700 font-medium"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore CTA Row */}
                <div className="pt-3 border-t border-[#E5E7EB] flex items-center gap-2.5">
                  <Link
                    href={getPrimaryServiceHref(activeService.slug)}
                    className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-black font-extrabold text-xs tracking-tight shadow-xs transition-all active:scale-95 text-center"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/contact#contact-hero"
                    className="inline-flex items-center justify-center h-10 px-4 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 font-bold text-xs border border-[#E5E7EB] transition-all text-center"
                  >
                    <span>Send an Inquiry</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* DESKTOP INTERACTIVE SHOWCASE (1024px+): PRESERVED TABS & PINNED LAYOUT */}
          {/* ========================================================================= */}
          <div className="hidden lg:block space-y-8 sm:space-y-10">
            {/* Minimal Interactive Service Navigation Tabs + Counter Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-2 border-b border-[#E5E7EB]">
              {/* 5 Interactive Service Tabs */}
              <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                {SHOWCASE_SERVICES_DATA.map((service, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <button
                      key={service.slug}
                      onClick={() => handleSelectService(idx)}
                      className={`relative px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shrink-0 flex items-center gap-2 ${
                        isActive
                          ? "text-neutral-950 bg-[#F7F8FA] border border-[#E5E7EB] shadow-xs"
                          : "text-neutral-500 hover:text-neutral-900 hover:bg-[#F9FAFB] border border-transparent"
                      }`}
                    >
                      <span className={`font-mono text-xs ${isActive ? "text-[#00BCD4] font-black" : "text-neutral-400"}`}>
                        {service.num}
                      </span>
                      <span>{service.shortTitle}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#00BCD4] rounded-full"
                          transition={{ duration: 0.25 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Counter, Progress Bar & Prev/Next Arrows */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end shrink-0">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-500">
                  <span className="text-[#00BCD4] text-sm">0{activeIdx + 1}</span>
                  <span>/</span>
                  <span>0{SHOWCASE_SERVICES_DATA.length}</span>
                </div>

                {/* Progress Line */}
                <div className="w-24 h-1.5 bg-[#F0F2F5] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#00BCD4] rounded-full"
                    animate={{ width: `${((activeIdx + 1) / SHOWCASE_SERVICES_DATA.length) * 100}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>

                {/* Controls */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Service"
                    className="w-8 h-8 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB] hover:bg-[#00BCD4]/10 hover:border-[#00BCD4]/40 flex items-center justify-center text-neutral-700 hover:text-[#00BCD4] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Service"
                    className="w-8 h-8 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB] hover:bg-[#00BCD4]/10 hover:border-[#00BCD4]/40 flex items-center justify-center text-neutral-700 hover:text-[#00BCD4] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Two-Column Showcase Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (~55%): Typography, Content, Capabilities & CTAs */}
              <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="space-y-5"
                  >
                    {/* Category Pill + Eyebrow */}
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-black text-[#00BCD4] px-2.5 py-0.5 rounded bg-[#F7F8FA] border border-[#E5E7EB]">
                        {activeService.num} / 0{SHOWCASE_SERVICES_DATA.length}
                      </span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00AFC8]">
                        {activeService.tagline}
                      </span>
                    </div>

                    {/* Large 38-46px Service Heading */}
                    <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-neutral-900 tracking-tight leading-[1.12]">
                      {activeService.title}
                    </h3>

                    {/* Positioning Description */}
                    <p className="text-base sm:text-[17px] text-neutral-600 leading-relaxed font-normal">
                      {activeService.positioning}
                    </p>

                    {/* Core Capabilities / Key Offerings */}
                    <div className="pt-4 border-t border-[#E5E7EB] space-y-3">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                        {activeService.slug === "digital-marketing"
                          ? "Key Offerings"
                          : "Core Engineered Capabilities"}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {(activeService.slug === "digital-marketing"
                          ? activeService.capabilities
                          : activeService.capabilities.slice(0, 4)
                        ).map((cap, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-start gap-2 text-[13.5px] text-neutral-700 font-medium group/item"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0 mt-2" />
                            <span className="leading-snug group-hover/item:text-neutral-950 transition-colors">
                              {cap.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metric Highlight & Primary CTA Action */}
                    <div className="pt-5 border-t border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl sm:text-3xl font-black text-neutral-900 font-mono tracking-tight">
                          {activeService.heroMetrics[0]?.value}
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-neutral-800">
                            {activeService.heroMetrics[0]?.label}
                          </div>
                          <div className="text-[10px] font-mono text-neutral-400">
                            {activeService.heroMetrics[0]?.detail}
                          </div>
                        </div>
                      </div>

                      <Link
                        href={getPrimaryServiceHref(activeService.slug)}
                        className="inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-full bg-neutral-900 hover:bg-[#00BCD4] text-white hover:text-black font-extrabold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-sm group/btn shrink-0"
                      >
                        <span>Explore Dedicated Page</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column (~45%): Service-Specific Visual Mockup */}
              <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.slug}
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full"
                  >
                    <div className="relative aspect-[16/11] lg:aspect-[4/3] xl:aspect-[16/11] w-full rounded-2xl overflow-hidden border border-[#242A35] bg-[#0A0D14] shadow-2xl group">
                      <Image
                        src={
                          (SERVICE_VISUAL_MAP[activeService.slug] || SERVICE_VISUAL_MAP["ai-services"]).imageSrc
                        }
                        alt={
                          (SERVICE_VISUAL_MAP[activeService.slug] || SERVICE_VISUAL_MAP["ai-services"]).alt
                        }
                        fill
                        sizes="(max-width: 1280px) 50vw, 640px"
                        className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                        priority
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                      {/* Top Badge */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-white/15 backdrop-blur-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
                          <span className="text-[10px] font-mono font-bold text-white tracking-wide">
                            {(SERVICE_VISUAL_MAP[activeService.slug] || SERVICE_VISUAL_MAP["ai-services"]).badge}
                          </span>
                        </div>
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#00BCD4]/15 border border-[#00BCD4]/30 text-[10px] font-mono text-[#00BCD4] font-semibold">
                          {(SERVICE_VISUAL_MAP[activeService.slug] || SERVICE_VISUAL_MAP["ai-services"]).subMetric}
                        </div>
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                        <div className="text-[11.5px] font-mono text-neutral-300 font-medium">
                          {(SERVICE_VISUAL_MAP[activeService.slug] || SERVICE_VISUAL_MAP["ai-services"]).highlightTag}
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#00BCD4] font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
                          <span>PRODUCTION DEPLOYED</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
