"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Cpu,
  Layers,
  BarChart3,
  Calendar,
  Zap,
  Server,
  Cloud,
  Lock,
  Database,
  Users,
  Quote,
  Check,
  Search,
  Target,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Bot,
  Network,
  Workflow,
  Globe,
  Clock,
  Briefcase,
  Monitor,
  Smartphone,
  ExternalLink,
} from "lucide-react";
import { CaseStudyItem } from "@/lib/caseStudiesData";

const EASING = [0.22, 1, 0.36, 1] as const;

interface CaseStudyDetailClientProps {
  study: CaseStudyItem;
  prevStudy: CaseStudyItem | null;
  nextStudy: CaseStudyItem | null;
  relatedStudies: CaseStudyItem[];
}

const CHAPTERS = [
  { id: "chapter-hero", label: "Overview" },
  { id: "chapter-context", label: "Context" },
  { id: "chapter-challenge", label: "Challenge" },
  { id: "chapter-solution", label: "Solution" },
  { id: "chapter-architecture", label: "Architecture" },
  { id: "chapter-showcase", label: "Product Screens" },
  { id: "chapter-results", label: "Results" },
  { id: "chapter-testimonial", label: "Testimonial" },
];

export function CaseStudyDetailClient({
  study,
  prevStudy,
  nextStudy,
  relatedStudies,
}: CaseStudyDetailClientProps) {
  // Hero Carousel State
  const heroScreens = [
    {
      title: "Core Operating Interface",
      caption: "High-throughput live data feeds & real-time telemetry",
      image: study.heroImage,
    },
    ...study.galleryImages.map((img, idx) => ({
      title: `System Interface 0${idx + 1}`,
      caption: "Automated executive command center & analytics cockpit",
      image: img,
    })),
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeChapter, setActiveChapter] = useState("chapter-hero");

  // Lightbox State
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Auto slide
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroScreens.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, heroScreens.length]);

  // Scroll spy for chapters
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const chapter of CHAPTERS) {
        const el = document.getElementById(chapter.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveChapter(chapter.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Categorized tech stack helpers
  const categorizedTech = {
    "Frontend & UI": study.technologies.filter((t) =>
      ["React", "Next.js", "TypeScript", "TailwindCSS", "Mapbox", "Power BI", "Grafana"].includes(t)
    ),
    "Backend & AI": study.technologies.filter((t) =>
      ["Python", "FastAPI", "Node.js", "Go", "PyTorch", "LangChain", "OpenAI"].includes(t)
    ),
    "Data & Storage": study.technologies.filter((t) =>
      ["Snowflake", "Kafka", "Redis", "PostgreSQL", "TimescaleDB", "ClickHouse", "Pinecone", "dbt", "AWS HealthLake"].includes(t)
    ),
    "Cloud & DevOps": study.technologies.filter((t) =>
      ["AWS", "Google Cloud", "Azure", "Azure IoT Hub", "Kubernetes", "Docker", "AWS KMS"].includes(t)
    ),
  };

  const allCategorized = Object.values(categorizedTech).flat();
  const remainingTech = study.technologies.filter((t) => !allCategorized.includes(t));
  if (remainingTech.length > 0) {
    categorizedTech["Backend & AI"].push(...remainingTech);
  }

  return (
    <div
      style={{
        background: `
          radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.12) 0%, transparent 45%),
          radial-gradient(circle at 90% 25%, rgba(16, 185, 129, 0.07) 0%, transparent 35%),
          radial-gradient(circle at 10% 55%, rgba(14, 165, 233, 0.09) 0%, transparent 40%),
          radial-gradient(circle at 50% 85%, rgba(15, 76, 129, 0.06) 0%, transparent 40%),
          linear-gradient(180deg, #f8fcff 0%, #f2f9fd 30%, #edf7fb 70%, #f5fbff 100%)
        `,
      }}
      className="text-[#0F172A] selection:bg-[#0B4F6C] selection:text-white font-sans min-h-screen relative"
    >
      {/* ========================================================================= */}
      {/* FLOATING CHAPTER NAVIGATION BAR (Desktop Only) */}
      {/* ========================================================================= */}
      <div className="hidden xl:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-40 items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-sky-200/80 shadow-[0_12px_36px_rgba(2,132,199,0.15)]">
        {CHAPTERS.map((ch) => (
          <a
            key={ch.id}
            href={`#${ch.id}`}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeChapter === ch.id
                ? "bg-[#082F49] text-white shadow-xs"
                : "text-slate-600 hover:text-[#082F49] hover:bg-sky-50"
            }`}
          >
            {ch.label}
          </a>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 1. IMMERSIVE HERO SECTION (Massive Visual-First, 85-90vh) */}
      {/* ========================================================================= */}
      <section
        id="chapter-hero"
        className="relative min-h-[85vh] lg:min-h-[90vh] pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden flex flex-col justify-center"
      >
        {/* Soft Background Ambient Constellation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: "800px",
              height: "500px",
              background: "radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, rgba(0, 183, 194, 0.08) 50%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-12">
          {/* Top Breadcrumb & Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0f4c81] hover:text-[#00b7c2] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </Link>

            <div className="flex items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white text-[#0f4c81] border border-[#00b7c2]/30 shadow-2xs">
                {study.industry}
              </span>
              <span className="hidden sm:inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-[#ECFEFF] text-[#082F49] border border-[#00b7c2]/20">
                {study.clientType}
              </span>
            </div>
          </div>

          {/* Headline & High-Impact Summary */}
          <div className="max-w-4xl space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: EASING }}
              className="text-[34px] sm:text-[50px] lg:text-[64px] font-black leading-[1.05] tracking-[-0.035em] text-[#082F49]"
            >
              {study.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: EASING }}
              className="text-base sm:text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed"
            >
              {study.tagline}
            </motion.p>
          </div>

          {/* Key Outcome Highlights Bar (3-4 Big Impact Badges) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASING }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl"
          >
            {study.metrics.map((m, idx) => (
              <div
                key={idx}
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(244, 251, 255, 0.85))",
                  boxShadow: "0 10px 30px rgba(2, 132, 199, 0.05)",
                }}
                className="p-4 sm:p-5 rounded-[22px] border border-sky-100 flex flex-col justify-between"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#0f4c81] tracking-tight">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-[#082F49] mt-0.5 leading-snug">
                  {m.label}
                </div>
                {m.detail && (
                  <div className="text-[11px] text-slate-500 font-medium mt-1">
                    {m.detail}
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* MASSIVE PRODUCT MOCKUP HERO SHOWCASE (70% of Viewport Visual Centerpiece) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.3, ease: EASING }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative pt-4"
          >
            {/* Laptop / Browser Shell Frame */}
            <div className="rounded-[28px] sm:rounded-[36px] p-2.5 sm:p-4 bg-gradient-to-b from-white via-slate-50 to-white border border-sky-200 shadow-[0_30px_90px_rgba(2,132,199,0.18)]">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/80 rounded-t-[20px] sm:rounded-t-[28px] border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="hidden sm:inline-block ml-3 px-3 py-0.5 rounded-md bg-white text-[11px] font-semibold text-slate-500 border border-slate-200 shadow-2xs">
                    https://app.codeplaced.com/{study.slug}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Production Live Telemetry</span>
                </div>
              </div>

              {/* Main Active Image Screen */}
              <div className="relative h-[320px] sm:h-[480px] lg:h-[640px] w-full rounded-b-[20px] sm:rounded-b-[28px] overflow-hidden bg-slate-950">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSlide}
                    src={heroScreens[activeSlide].image}
                    alt={heroScreens[activeSlide].title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: EASING }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Ambient Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating Screenshot Badge */}
                <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#00b7c2]/40 backdrop-blur-md text-cyan-200 border border-[#00b7c2]/40">
                      Live Interface View
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black drop-shadow-md">
                      {heroScreens[activeSlide].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 max-w-lg font-normal">
                      {heroScreens[activeSlide].caption}
                    </p>
                  </div>

                  {/* Slider Controls */}
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      onClick={() =>
                        setActiveSlide((prev) =>
                          prev === 0 ? heroScreens.length - 1 : prev - 1
                        )
                      }
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors backdrop-blur-md cursor-pointer"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveSlide((prev) => (prev + 1) % heroScreens.length)
                      }
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors backdrop-blur-md cursor-pointer"
                      aria-label="Next Slide"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {heroScreens.map((_, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setActiveSlide(sIdx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === sIdx ? "w-10 bg-[#00b7c2]" : "w-2.5 bg-slate-300"
                  }`}
                  aria-label={`Slide ${sIdx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. BUSINESS CONTEXT & STORY (Chapter 01) */}
      {/* ========================================================================= */}
      <section id="chapter-context" className="py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0f4c81] border border-[#00b7c2]/25 shadow-2xs">
              <Briefcase className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>CHAPTER 01: THE CONTEXT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              The Business Background & Ambition
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {study.shortDescription}
            </p>
          </div>

          {/* Project Goals Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.businessGoals.map((goal, gIdx) => (
              <div
                key={gIdx}
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(244, 251, 255, 0.85))",
                  boxShadow: "0 10px 30px rgba(2, 132, 199, 0.05)",
                }}
                className="p-6 sm:p-7 rounded-[26px] border border-sky-100 flex flex-col justify-between space-y-4 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#ECFEFF] text-[#0f4c81] flex items-center justify-center font-black text-sm">
                  0{gIdx + 1}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#082F49] leading-snug">
                  {goal}
                </h3>
                <div className="pt-3 border-t border-sky-100 flex items-center gap-2 text-xs font-bold text-[#00b7c2]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Strategic Objective</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FULL-WIDTH VISUAL BREAK 01 (Cinematic Rhythm) */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            onClick={() => setLightboxImage(study.galleryImages[0] || study.heroImage)}
            className="rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl border-4 border-white bg-slate-900 h-[300px] sm:h-[450px] lg:h-[520px] relative group cursor-pointer"
          >
            <img
              src={study.galleryImages[0] || study.heroImage}
              alt="System Architecture Interface"
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
              <div>
                <span className="text-xs font-bold text-cyan-300 block mb-1">
                  Full-Scale Platform Architecture
                </span>
                <p className="text-lg sm:text-2xl font-bold">
                  Unified Data Flow & Production Telemetry Cockpit
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Click to Inspect</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE CHALLENGE & BEFORE vs AFTER (Chapter 02) */}
      {/* ========================================================================= */}
      <section id="chapter-challenge" className="py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0f4c81] border border-[#00b7c2]/25 shadow-2xs">
              <Target className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>CHAPTER 02: THE CHALLENGE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              The Engineering Problem We Set Out To Solve
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {study.problemStatement}
            </p>
          </div>

          {/* Before ❌ vs After ✅ Visual Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Before Card */}
            <div className="p-6 sm:p-8 rounded-[28px] bg-rose-50/50 border border-rose-200/70 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-rose-100 text-rose-700">
                  Legacy State ❌
                </span>
                <span className="text-xs font-bold text-rose-600">Prior to CodePlaced</span>
              </div>

              <div className="space-y-3.5">
                {study.challenges.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-rose-100 shadow-2xs">
                    <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* After Card */}
            <div className="p-6 sm:p-8 rounded-[28px] bg-emerald-50/50 border border-emerald-200/70 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                  Engineered State ✅
                </span>
                <span className="text-xs font-bold text-emerald-700">Deployed Production System</span>
              </div>

              <div className="space-y-3.5">
                {study.solutionHighlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-emerald-100 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. THE SOLUTION & ARCHITECTURE TOPOLOGY (Chapter 03) */}
      {/* ========================================================================= */}
      <section id="chapter-architecture" className="py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0f4c81] border border-[#00b7c2]/25 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>CHAPTER 03: ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              Technical Architecture & System Blueprint
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {study.solution}
            </p>
          </div>

          {/* Visual Architecture Diagram Box */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(240, 249, 255, 0.9))",
              boxShadow: "0 20px 50px rgba(2, 132, 199, 0.08)",
            }}
            className="p-6 sm:p-8 lg:p-10 rounded-[32px] border border-sky-200/80 space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-sky-100">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#00b7c2]">
                  HIGH-CONCURRENCY BLUEPRINT
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#082F49]">
                  Multi-Tier Production Pipeline Flow
                </h3>
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/20 w-fit">
                Zero Single Points of Failure
              </span>
            </div>

            {/* 5 Architecture Node Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4">
              {[
                { tier: "01. Client & Ingestion", name: "Edge & Webhooks", desc: "Sub-50ms ingestion buffer with TLS cryptographic verification", icon: Globe },
                { tier: "02. Event Streaming", name: "Kafka / Async Queue", desc: "Distributed partition topics routing 25K+ events/sec", icon: Workflow },
                { tier: "03. Compute Pods", name: "Microservices & AI", desc: "Autoscaling container pods running domain ML models", icon: Cpu },
                { tier: "04. Lakehouse Storage", name: "Snowflake & Redis", desc: "Sub-10ms in-memory cache & immutable analytics store", icon: Database },
                { tier: "05. Live Telemetry", name: "Executive Cockpit", desc: "Real-time WebSocket alerts & sub-second visual intelligence", icon: BarChart3 },
              ].map((node, nIdx) => {
                const NodeIcon = node.icon;
                return (
                  <div
                    key={nIdx}
                    className="p-4 sm:p-5 rounded-[22px] bg-white border border-sky-100 shadow-2xs hover:border-[#00b7c2]/50 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#00b7c2] uppercase tracking-wider block mb-1">
                        {node.tier}
                      </span>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-[#ECFEFF] text-[#0f4c81] flex items-center justify-center flex-shrink-0">
                          <NodeIcon className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#082F49] leading-snug">
                          {node.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {node.desc}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-sky-50 flex items-center gap-1.5 text-[10px] font-bold text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Verified Tier</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Categorized Stack Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(categorizedTech).map(([category, techs], cIdx) => (
              <div
                key={cIdx}
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(244, 251, 255, 0.85))",
                  boxShadow: "0 6px 20px rgba(2, 132, 199, 0.04)",
                }}
                className="p-5 sm:p-6 rounded-[24px] border border-sky-100 space-y-3"
              >
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#00b7c2] block">
                  {category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-xl bg-white border border-sky-100 text-xs font-bold text-[#082F49] shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PLATFORM DEVICE MOCKUP SHOWCASE (Chapter 04) */}
      {/* ========================================================================= */}
      <section id="chapter-showcase" className="py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0f4c81] border border-[#00b7c2]/25 shadow-2xs">
              <Monitor className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>CHAPTER 04: PLATFORM SCREENS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              Interactive System Gallery
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              High-concurrency user interfaces, executive command centers, and automated telemetry dashboards built for this implementation. Click to inspect high-resolution screens.
            </p>
          </div>

          {/* Interactive Screen Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {study.galleryImages.map((imgUrl, gIdx) => (
              <div
                key={gIdx}
                onClick={() => setLightboxImage(imgUrl)}
                className="rounded-[28px] overflow-hidden shadow-lg border-2 border-white bg-slate-900 h-[280px] sm:h-[340px] relative group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-400"
              >
                <img
                  src={imgUrl}
                  alt={`${study.title} interface ${gIdx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/90 via-[#082F49]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold text-cyan-300 block mb-0.5">
                    Click to Enlarge
                  </span>
                  <h4 className="text-sm sm:text-base font-bold">System View 0{gIdx + 1}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src={lightboxImage}
                alt="Enlarged screenshot"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 7. QUANTIFIABLE RESULTS DASHBOARD (Chapter 05 - The Star) */}
      {/* ========================================================================= */}
      <section id="chapter-results" className="py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0f4c81] border border-[#00b7c2]/25 shadow-2xs">
              <TrendingUp className="w-3.5 h-3.5 text-[#00b7c2]" />
              <span>CHAPTER 05: MEASURABLE IMPACT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight">
              Quantifiable Business Results
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {study.businessImpact}
            </p>
          </div>

          {/* GIANT KPI IMPACT DASHBOARD (Huge Numbers & Counter Animation) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.results.map((res, rIdx) => (
              <div
                key={rIdx}
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(240, 249, 255, 0.9))",
                  boxShadow: "0 20px 50px rgba(2, 132, 199, 0.08)",
                }}
                className="p-7 sm:p-8 rounded-[30px] border border-sky-100 hover:border-[#00b7c2]/50 hover:-translate-y-2 transition-all flex flex-col justify-between space-y-5 group"
              >
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#00b7c2] block mb-2">
                    {res.title}
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-[#082F49] tracking-tight">
                    {res.value}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-4 border-t border-sky-100 font-medium">
                  {res.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. EXECUTIVE CLIENT TESTIMONIAL (Chapter 06) */}
      {/* ========================================================================= */}
      {study.testimonial && (
        <section id="chapter-testimonial" className="py-12 sm:py-16 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(240, 249, 255, 0.92))",
                boxShadow: "0 25px 60px rgba(2, 132, 199, 0.1)",
              }}
              className="p-8 sm:p-12 lg:p-16 rounded-[36px] border border-[#00b7c2]/40 relative overflow-hidden space-y-8"
            >
              <Quote className="w-20 h-20 text-[#00b7c2]/15 absolute top-8 right-8 pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0f4c81] border border-[#00b7c2]/25 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00b7c2]" />
                <span>EXECUTIVE TESTIMONIAL</span>
              </div>

              <div className="max-w-4xl space-y-6 relative z-10">
                <p className="text-xl sm:text-3xl lg:text-4xl text-[#082F49] font-black leading-snug tracking-tight italic">
                  &ldquo;{study.testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-12 h-12 rounded-full bg-[#082F49] text-white flex items-center justify-center font-black text-lg">
                    {study.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black text-[#082F49]">
                      {study.testimonial.author}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 font-medium">
                      {study.testimonial.role} •{" "}
                      <span className="text-[#0f4c81] font-bold">
                        {study.testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 9. AGENCY PREVIOUS / NEXT PROJECT NAVIGATION BAR */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 border-t border-sky-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {prevStudy ? (
              <Link
                href={`/case-studies/${prevStudy.slug}`}
                className="p-5 sm:p-6 rounded-[24px] bg-white border border-sky-100 hover:border-[#00b7c2]/50 hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#ECFEFF] text-[#0f4c81] flex items-center justify-center flex-shrink-0 group-hover:-translate-x-1 transition-transform">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Previous Project
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#082F49] group-hover:text-[#00b7c2] transition-colors line-clamp-1">
                    {prevStudy.title}
                  </h4>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextStudy ? (
              <Link
                href={`/case-studies/${nextStudy.slug}`}
                className="p-5 sm:p-6 rounded-[24px] bg-white border border-sky-100 hover:border-[#00b7c2]/50 hover:shadow-md transition-all flex items-center justify-between gap-4 text-right group"
              >
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Next Project
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#082F49] group-hover:text-[#00b7c2] transition-colors line-clamp-1">
                    {nextStudy.title}
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#ECFEFF] text-[#0f4c81] flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. EXPLORE MORE CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0f4c81]">
                CONTINUE EXPLORING
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#082F49] tracking-tight">
                Explore More Success Stories
              </h2>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0f4c81] hover:text-[#00b7c2] transition-colors"
            >
              <span>View All 6 Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedStudies.map((rel) => (
              <Link
                key={rel.slug}
                href={`/case-studies/${rel.slug}`}
                className="rounded-[26px] bg-white border border-sky-100 shadow-xs overflow-hidden hover:-translate-y-2 hover:border-[#00b7c2]/50 hover:shadow-xl transition-all duration-400 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={rel.heroImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-[#0f4c81] shadow-2xs">
                        {rel.industry}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-xs font-black text-cyan-300 block mb-0.5">
                        {rel.metrics[0].value}
                      </span>
                      <h4 className="text-sm font-bold line-clamp-1">{rel.title}</h4>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {rel.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0f4c81] group-hover:text-[#00b7c2] transition-colors">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. PREMIUM FINAL STRATEGY CTA */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 text-center relative overflow-hidden">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0f4c81] border border-[#00b7c2]/25 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00b7c2]" />
            <span>TRANSFORM YOUR ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#082F49] leading-tight">
            Let&apos;s Build Your Competitive Advantage
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            From AI platforms to enterprise systems, we help businesses transform ideas into production-ready software.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto h-[48px] px-8 rounded-full bg-[#082F49] hover:bg-[#0f4c81] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#082F49]/15 transition-all active:scale-95 group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/case-studies"
              className="w-full sm:w-auto h-[48px] px-8 rounded-full bg-white hover:bg-slate-50 text-[#082F49] font-bold text-xs sm:text-sm border border-sky-200 transition-all flex items-center justify-center shadow-xs"
            >
              <span>View More Success Stories</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
