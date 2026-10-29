"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Layers,
  TrendingUp,
  Database,
  Unplug,
  FileQuestion,
  UserMinus,
  AlertTriangle,
  DollarSign,
  Users,
  LineChart,
  ShieldCheck,
  CheckCircle2,
  LayoutDashboard,
  Target,
  GraduationCap,
  Gamepad2,
} from "lucide-react";

// =============================================================================
// VERIFIED DATA DEFINITIONS (PROGRESS PARTNERS CASE STUDY)
// =============================================================================

// Hero Technologies with official custom brand icon types
const HERO_TECH = [
  { name: "Google BigQuery", type: "bigquery" },
  { name: "SQL", type: "sql" },
  { name: "Preset", type: "preset" },
  { name: "Google Analytics 4", type: "ga4" },
  { name: "Stripe", type: "stripe" },
  { name: "Solidgate", type: "solidgate" },
  { name: "Amplitude", type: "amplitude" },
  { name: "AnyTrack", type: "anytrack" },
];

// Project Overview 3 Highlights
const OVERVIEW_HIGHLIGHTS = [
  {
    icon: Layers,
    title: "Multiple Digital Products",
    description:
      "Analytics across different products, each with unique acquisition channels and subscription models.",
  },
  {
    icon: TrendingUp,
    title: "Revenue & Retention Visibility",
    description:
      "Clearer visibility into campaign performance, customer lifetime value and subscriber retention.",
  },
  {
    icon: Database,
    title: "Built on Existing Infrastructure",
    description:
      "Improved reporting using their current data stack.",
  },
];

// The Challenge 4 Items
const CHALLENGE_ITEMS = [
  {
    icon: Unplug,
    title: "Disconnected Data Sources",
    description:
      "Data spread across advertising, analytics, payment systems and internal databases.",
  },
  {
    icon: FileQuestion,
    title: "Inconsistent Metrics",
    description:
      "Different definitions for campaign revenue, recurring revenue and customer lifetime value.",
  },
  {
    icon: UserMinus,
    title: "Limited Retention Insights",
    description:
      "Lack of detailed churn and trial-to-paid conversion reporting at the product level.",
  },
  {
    icon: AlertTriangle,
    title: "Tracking Discrepancies",
    description:
      "Differences between analytics platforms and payment systems required careful validation.",
  },
];

// The Solution 4 Capabilities
const SOLUTION_CAPABILITIES = [
  {
    icon: DollarSign,
    title: "Marketing ROAS and Customer LTV",
    paragraphs: [
      "Campaign-level ROAS reporting to track advertising spend, attributed revenue, new users and acquisition efficiency.",
      "A separate customer LTV dashboard measures lifetime revenue, average customer value and current MRR across acquisition sources.",
    ],
  },
  {
    icon: Users,
    title: "Churn and Trial Conversion Analytics",
    paragraphs: [
      "Product-level churn cohort reporting using Stripe and Solidgate payment records.",
      "Tracks cumulative churn across monthly cohorts, with separate views for trial-inclusive and post-trial behavior. Trial-to-paid conversion analysis helps identify how effectively initial subscriptions turn into paying customers.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Subscription and Revenue Growth",
    paragraphs: [
      "Reporting to monitor MRR, paying customers, active subscriptions and revenue movement metrics.",
      "Helps explain changes in recurring revenue, including new business, reactivations, expansion, contraction and churn.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Data Validation and Reconciliation",
    paragraphs: [
      "SQL-based validation to investigate discrepancies across advertising, analytics, tracking and payment sources.",
      "Established clearer KPI definitions and identified potential reporting gaps.",
    ],
  },
];

// Results 5 Cards
const RESULTS_ITEMS = [
  {
    icon: LayoutDashboard,
    title: "Daily Usage",
    description:
      "Published dashboards now used daily by the Progress Partners team.",
  },
  {
    icon: Users,
    title: "Churn & Conversion",
    description:
      "Product-level churn and trial-to-paid conversion reporting across Stripe and Solidgate.",
  },
  {
    icon: Target,
    title: "Campaign Performance",
    description:
      "Campaign ROAS and customer lifetime value dashboards to measure acquisition efficiency.",
  },
  {
    icon: LineChart,
    title: "Subscription Growth",
    description:
      "Subscription-growth reporting covering MRR, active customers and paid subscriptions.",
  },
  {
    icon: CheckCircle2,
    title: "Reliable Data",
    description:
      "Data validation and reconciliation to improve the interpretation of marketing, customer and payment metrics.",
  },
];

// Technology Behind the Solution (8 items)
const TECH_STACK_ITEMS = [
  {
    name: "Google BigQuery",
    role: "Data warehouse",
    type: "bigquery",
  },
  {
    name: "SQL",
    role: "Data transformation",
    type: "sql",
  },
  {
    name: "Preset",
    role: "Business intelligence",
    type: "preset",
  },
  {
    name: "Google Analytics 4",
    role: "Web analytics",
    type: "ga4",
  },
  {
    name: "Stripe",
    role: "Payment processing",
    type: "stripe",
  },
  {
    name: "Solidgate",
    role: "Payment processing",
    type: "solidgate",
  },
  {
    name: "Amplitude",
    role: "Product analytics",
    type: "amplitude",
  },
  {
    name: "AnyTrack",
    role: "Attribution tracking",
    type: "anytrack",
  },
];

// Custom SVGs for Tech Brands
function TechIcon({ type, className = "w-4 h-4" }: { type: string; className?: string }) {
  switch (type) {
    case "bigquery":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#1A73E8" fillOpacity="0.14" />
          <path
            d="M12 4.5C7.86 4.5 4.5 7.86 4.5 12C4.5 16.14 7.86 19.5 12 19.5C13.84 19.5 15.53 18.83 16.83 17.72L18.41 19.3C18.6 19.49 18.92 19.49 19.11 19.3C19.3 19.11 19.3 18.79 19.11 18.6L17.55 17.04C18.76 15.68 19.5 13.93 19.5 12C19.5 7.86 16.14 4.5 12 4.5ZM12 17.5C8.96 17.5 6.5 15.04 6.5 12C6.5 8.96 8.96 6.5 12 6.5C15.04 6.5 17.5 8.96 17.5 12C17.5 15.04 15.04 17.5 12 17.5Z"
            fill="#1A73E8"
          />
          <path d="M12 8.5V12L14.5 14.5" stroke="#1A73E8" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "sql":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#00BCD4" fillOpacity="0.14" />
          <path
            d="M7 8L10 12L7 16M13 16H17"
            stroke="#00BCD4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "preset":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#0052CC" fillOpacity="0.14" />
          <circle cx="8" cy="12" r="3.5" stroke="#0052CC" strokeWidth="1.8" />
          <circle cx="16" cy="12" r="3.5" stroke="#0052CC" strokeWidth="1.8" />
          <path d="M8 15.5C10.5 15.5 13.5 8.5 16 8.5" stroke="#0052CC" strokeWidth="1.8" />
        </svg>
      );
    case "ga4":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#E37400" fillOpacity="0.14" />
          <rect x="6" y="13" width="3" height="6" rx="1.5" fill="#F9AB00" />
          <rect x="10.5" y="9" width="3" height="10" rx="1.5" fill="#E37400" />
          <rect x="15" y="5" width="3" height="14" rx="1.5" fill="#E37400" />
        </svg>
      );
    case "stripe":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#635BFF" fillOpacity="0.14" />
          <path
            d="M14.5 10.2C14.5 9.3 13.8 8.7 12.4 8.7C10.9 8.7 9.8 9.2 9.2 9.5V7.4C9.9 7.1 11.1 6.8 12.5 6.8C15.4 6.8 17.2 8.2 17.2 10.5C17.2 13.7 12.7 13.3 12.7 14.6C12.7 15.3 13.4 15.6 14.4 15.6C15.6 15.6 16.9 15.1 17.5 14.7V16.8C16.8 17.2 15.5 17.5 14.1 17.5C11.1 17.5 9.8 16 9.8 13.9C9.8 10.7 14.5 11.2 14.5 10.2Z"
            fill="#635BFF"
          />
        </svg>
      );
    case "solidgate":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#111827" fillOpacity="0.14" />
          <path
            d="M7 9C7 7.89543 7.89543 7 9 7H15C16.1046 7 17 7.89543 17 9V15C17 16.1046 16.1046 17 15 17H9C7.89543 17 7 16.1046 7 15V9Z"
            stroke="#111827"
            strokeWidth="1.8"
          />
          <path d="M10 12H14M12 10V14" stroke="#00BCD4" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "amplitude":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#1D4ED8" fillOpacity="0.14" />
          <path d="M6 17L12 7L18 17H14.5L12 12.8L9.5 17H6Z" fill="#1D4ED8" />
        </svg>
      );
    case "anytrack":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="5" fill="#00C7E8" fillOpacity="0.14" />
          <circle cx="12" cy="12" r="5" stroke="#00838F" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="2" fill="#00838F" />
          <path d="M12 5V7M12 17V19M5 12H7M17 12H19" stroke="#00838F" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return <Database className={className} />;
  }
}

export function ProgressPartnersCaseStudy() {
  return (
    <div className="bg-[#000000] text-white selection:bg-[#00BCD4] selection:text-black font-sans antialiased overflow-x-hidden">
      {/* ===================================================================== */}
      {/* SECTION 1 — PREMIUM HERO (TWO-COLUMN EDITORIAL — 45% / 55%) */}
      {/* ===================================================================== */}
      <section className="relative bg-[#000000] pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20 border-b border-white/[0.08] overflow-hidden flex items-center min-h-[660px] lg:min-h-[740px]">
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute top-0 right-0 w-full lg:w-2/3 h-full pointer-events-none opacity-20 -z-0"
          style={{
            background:
              "radial-gradient(circle at 75% 35%, rgba(0, 188, 212, 0.16) 0%, rgba(8, 127, 165, 0.05) 50%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-12">
            {/* LEFT COLUMN — 45% EDITORIAL CONTENT */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full lg:w-[45%] flex-none space-y-6 text-left z-10"
            >
              {/* Eyebrow Label */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#00BCD4]">
                  CASE STUDY / PROGRESS PARTNERS
                </span>
                <span className="h-px w-10 bg-[#00BCD4]/40" />
              </div>

              {/* Main Heading: "Turning Complex Data Into \n Clearer Growth Decisions." */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-black tracking-tight leading-[1.12] text-white">
                Turning Complex Data Into{" "}
                <span className="text-[#00BCD4] block">
                  Clearer Growth Decisions.
                </span>
              </h1>

              {/* Supporting Description */}
              <p className="text-sm sm:text-base lg:text-[17px] text-[#A1A1AA] leading-relaxed max-w-xl">
                We helped Progress Partners turn complex marketing, subscription and payment data into reliable KPIs for tracking revenue growth, customer retention and advertising performance.
              </p>

              {/* Metadata Details: Industry & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] block">
                    Industry
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">
                    Digital Products &amp; Subscription Businesses
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] block">
                    Service
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#00BCD4] mt-0.5 block">
                    Data Analytics &amp; Business Intelligence
                  </span>
                </div>
              </div>

              {/* Technology Badges */}
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] block mb-2">
                  TECHNOLOGIES INTEGRATED
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {HERO_TECH.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8] hover:border-[#00BCD4]/40 transition-colors"
                    >
                      <TechIcon type={tech.type} className="w-3.5 h-3.5" />
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN — 55%: RECTANGULAR ANALYTICS FRAME WITH AUTHENTIC PDF DASHBOARD */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="w-full lg:w-[55%] flex-none relative flex items-center justify-center pt-2 lg:pt-0"
            >
              {/* Subtle Cyan Glow Aura Behind Frame */}
              <div
                className="absolute top-[40%] right-[20%] -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(0,188,212,0.18)_0%,rgba(8,127,165,0.05)_50%,transparent_70%)] blur-3xl -z-10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Premium Rectangular Analytics Frame (Preserves exact proportions, no laptop mockup) */}
              <div className="w-full max-w-[680px] lg:max-w-none rounded-2xl border border-[#00BCD4]/30 hover:border-[#00BCD4]/60 bg-[#07090D] shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(0,188,212,0.12)] p-2 sm:p-3 overflow-hidden transition-all duration-300">
                <div className="relative aspect-[1071/712] w-full rounded-xl overflow-hidden bg-[#0A0D12]">
                  <Image
                    src="/images/case-studies/progress-partners/hero-dashboard.webp"
                    alt="Progress Partners Business Dashboard with ROAS and LTV Analytics"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 2 — PROJECT OVERVIEW (WHITE BACKGROUND — EDITORIAL TWO-COLUMN) */}
      {/* ===================================================================== */}
      <section className="bg-[#FFFFFF] text-[#101214] py-16 sm:py-20 lg:py-24 border-b border-[#E4E4E7]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Eyebrow & Heading */}
          <div className="space-y-2 max-w-3xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#087FA5]">
              PROJECT OVERVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#101214] tracking-tight leading-tight">
              From Multiple Data Sources to One Unified View.
            </h2>
          </div>

          {/* Two-Column Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-2">
            {/* Left Column: Project Narrative */}
            <div className="lg:col-span-6 space-y-5 text-base sm:text-[17px] text-[#3F3F46] leading-relaxed text-left">
              <p>
                Progress Partners manages analytics across multiple digital products, each with its own acquisition channels, customer activity and subscription revenue. The team needed a clearer way to understand which campaigns were generating revenue, how much customers were worth over time and where paying subscribers were being lost.
              </p>
              <p>
                We worked with their existing data infrastructure to build and improve business reporting that supports ongoing performance monitoring and growth decisions.
              </p>
            </div>

            {/* Right Column: 3 Concise Feature Rows with Cyan Icons & Thin Separators */}
            <div className="lg:col-span-6 space-y-5">
              {OVERVIEW_HIGHLIGHTS.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 pb-5 text-left ${
                      idx !== OVERVIEW_HIGHLIGHTS.length - 1
                        ? "border-b border-[#E4E4E7]"
                        : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#087FA5] shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5 text-[#087FA5]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-[#101214] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 3 — THE CHALLENGE & BEFORE VS AFTER (BLACK BACKGROUND) */}
      {/* ===================================================================== */}
      <section className="bg-[#000000] text-white py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] pointer-events-none opacity-20 -z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 188, 212, 0.15) 0%, rgba(8, 127, 165, 0.05) 50%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
          {/* Eyebrow, Heading & Narrative */}
          <div className="space-y-3 max-w-3xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00BCD4]">
              THE CHALLENGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight">
              Fragmented Data and Unclear Metrics.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              Progress Partners&apos; data was spread across advertising platforms, GA4, Stripe, Solidgate and internal databases. These sources tracked different parts of the customer journey, making it difficult to connect marketing expenditure with revenue, subscription performance and customer value.
            </p>
          </div>

          {/* 4 Horizontally Aligned Challenge Cards (Compact 4-Column Grid, Equal Height) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left items-stretch">
            {CHALLENGE_ITEMS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0C1014] border border-white/10 hover:border-[#00BCD4]/35 transition-colors space-y-3 flex flex-col justify-start h-full"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4]">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* SECTION 4 — BEFORE VS AFTER: EQUAL-WIDTH VISUAL COMPARISON */}
          <div className="pt-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#71717A] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
              <span>VISUAL COMPARISON &bull; DATA TRANSFORMATION</span>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              {/* LEFT: BEFORE DASHBOARD CARD */}
              <div className="rounded-2xl border border-white/15 bg-[#FFFFFF] text-black shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden">
                <div className="space-y-3 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#EF4444] text-white">
                      BEFORE
                    </span>
                    <span className="text-[11px] font-mono text-[#71717A]">
                      Disconnected Sources
                    </span>
                  </div>
                  <div className="space-y-1 text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-[#101214] tracking-tight">
                      Fragmented data and unclear metrics
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                      Data was spread across multiple sources with different definitions, making it difficult to get a clear view of performance.
                    </p>
                  </div>
                </div>

                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#F8F9FA] border border-[#E4E4E7]">
                  <Image
                    src="/images/case-studies/progress-partners/before-dashboard.webp"
                    alt="Fragmented marketing, billing, GA4, and product analytics records before CodePlaced solution"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>

              {/* Desktop Transition Arrow Badge Between Cards */}
              <div
                className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#00BCD4] text-black items-center justify-center font-bold shadow-[0_0_25px_rgba(0,188,212,0.6)] z-20 pointer-events-none"
                aria-hidden="true"
              >
                <ArrowRight className="w-5 h-5" />
              </div>

              {/* RIGHT: AFTER DASHBOARD CARD */}
              <div className="rounded-2xl border border-[#00BCD4]/35 hover:border-[#00BCD4]/60 bg-[#0A0D12] text-white shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(0,188,212,0.12)] p-5 sm:p-6 flex flex-col justify-between overflow-hidden">
                <div className="space-y-3 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#00BCD4] text-black">
                      AFTER
                    </span>
                    <span className="text-[11px] font-mono text-[#00BCD4]/80">
                      Standardized Architecture
                    </span>
                  </div>
                  <div className="space-y-1 text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-[#00BCD4] tracking-tight">
                      One unified, easy-to-use view
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      All key business metrics in a single dashboard, with consistent definitions and clear insights for daily decision-making.
                    </p>
                  </div>
                </div>

                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#07090D] border border-white/10">
                  <Image
                    src="/images/case-studies/progress-partners/after-dashboard.webp"
                    alt="One unified easy-to-use business dashboard for Progress Partners after CodePlaced solution"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 5 — THE SOLUTION (WHITE BACKGROUND — 4 POLISHED CAPABILITIES) */}
      {/* ===================================================================== */}
      <section className="bg-[#FFFFFF] text-[#101214] py-16 sm:py-20 lg:py-24 border-b border-[#E4E4E7]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Eyebrow & Heading */}
          <div className="space-y-2 max-w-3xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#087FA5]">
              THE SOLUTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#101214] tracking-tight leading-tight">
              KPI-Driven Reporting for Smarter Decisions.
            </h2>
            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
              We developed KPI-driven reporting across marketing performance, customer value, subscription growth and retention.
            </p>
          </div>

          {/* 4 Capabilities Grid (4 Columns on Desktop, 2 on Tablet, 1 on Mobile, Equal Height) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left items-stretch pt-2">
            {SOLUTION_CAPABILITIES.map((cap, idx) => {
              const CapIcon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E4E4E7] hover:border-[#087FA5]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-start space-y-4 h-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#087FA5]">
                    <CapIcon className="w-5 h-5 text-[#087FA5]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#101214] tracking-tight leading-snug">
                    {cap.title}
                  </h3>
                  <div className="space-y-2.5 text-xs sm:text-[13px] text-[#52525B] leading-relaxed">
                    {cap.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 6 — RESULTS (BLACK BACKGROUND — 5 COMPACT PREMIUM CARDS) */}
      {/* ===================================================================== */}
      <section className="bg-[#000000] text-white py-16 sm:py-20 lg:py-24 border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3 max-w-3xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00BCD4]">
              THE RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight">
              Clearer Insights. Stronger Growth Decisions.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              Progress Partners now has a set of published dashboards that its team uses daily to monitor important business KPIs.
            </p>
          </div>

          {/* 5 Premium Cards (5 Columns on Desktop, 2-3 on Tablet, Equal Height) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch pt-2">
            {RESULTS_ITEMS.map((item, idx) => {
              const ResIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0C1014] border border-white/10 hover:border-[#00BCD4]/35 transition-colors text-left space-y-3 flex flex-col justify-start h-full"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4]">
                    <ResIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 7 — TECHNOLOGY BEHIND THE SOLUTION (WHITE BACKGROUND — 4 COLUMNS) */}
      {/* ===================================================================== */}
      <section className="bg-[#FFFFFF] text-[#101214] py-16 sm:py-20 border-b border-[#E4E4E7]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2 max-w-3xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#087FA5]">
              TECHNOLOGY BEHIND THE SOLUTION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101214] tracking-tight">
              Tools Powering the Insights.
            </h2>
            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
              We used a combination of data, analytics and reporting tools to build a reliable and scalable reporting solution.
            </p>
          </div>

          {/* 4-Column Responsive Grid (8 Cards total, 2 rows of 4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {TECH_STACK_ITEMS.map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#087FA5]/40 transition-colors flex items-center gap-3.5 text-left"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
                  <TechIcon type={tech.type} className="w-8 h-8" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="text-sm sm:text-base font-bold text-[#101214] tracking-tight truncate">
                    {tech.name}
                  </div>
                  <div className="text-xs font-mono text-[#087FA5]">
                    {tech.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 8 — RELATED CASE STUDIES (BLACK BACKGROUND — 2 CARDS) */}
      {/* ===================================================================== */}
      <section className="bg-[#000000] text-white py-16 sm:py-20 lg:py-24 border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2 max-w-3xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00BCD4]">
              EXPLORE MORE CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Explore More Case Studies.
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Discover how we turn complex business challenges into practical reporting solutions across real-world projects.
            </p>
          </div>

          {/* Two Large Horizontal Cards Stacked Vertically */}
          <div className="space-y-6 sm:space-y-8 pt-2">
            {/* CARD 1: TUITIONSTIME (HORIZONTAL SHOWCASE CARD) */}
            <Link
              href="/case-studies/tuitionstime"
              aria-label="View case study: Tuitionstime"
              className="block relative rounded-[16px] border border-[#00BCD4]/25 hover:border-[#00BCD4]/60 bg-[#000000] overflow-hidden min-h-[360px] lg:h-[380px] xl:h-[400px] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(0,188,212,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(0,188,212,0.14)] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4]"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Left Side (45%) — Project Information */}
                <div className="w-full md:w-[45%] p-7 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#000000] z-10 text-left">
                  <div className="space-y-3.5 max-w-md">
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
                      <span>EDTECH &amp; SAAS</span>
                    </div>

                    {/* Brand Logo & Name */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4] shrink-0">
                        <GraduationCap className="w-4 h-4 text-[#00BCD4]" />
                      </div>
                      <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                        Tuitionstime
                      </span>
                    </div>

                    {/* Heading with Cyan Highlight */}
                    <h3 className="text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-extrabold text-white tracking-tight leading-[1.2]">
                      Engineering a Complete{" "}
                      <span className="text-[#00BCD4]">EdTech Marketplace</span>
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-md">
                      A UK-based EdTech platform connecting students, parents, and tutors.
                    </p>
                  </div>

                  {/* View Case Study CTA Button */}
                  <div className="pt-4 md:pt-0">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00BCD4] text-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-black font-mono text-xs font-bold transition-all duration-200 shadow-sm">
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Right Side (55%) — Laptop & Mobile Mockup Imagery */}
                <div className="w-full md:w-[55%] bg-[#000000] relative flex items-center justify-center p-4 sm:p-6 lg:p-8 select-none overflow-hidden min-h-[240px] sm:min-h-[280px] md:min-h-0">
                  {/* Subtle Ambient Cyan Glow Behind Display */}
                  <div
                    className="absolute top-[40%] right-[25%] -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(0,188,212,0.14)_0%,rgba(0,188,212,0.02)_45%,transparent_70%)] blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Contained Artwork */}
                  <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[320px] transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                    <Image
                      src="/images/case-studies/tuitionstime-featured-flagship.webp"
                      alt="Tuitionstime EdTech Marketplace Platform"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 55vw, 700px"
                      className="object-contain object-center md:object-right"
                    />
                  </div>
                </div>
              </div>
            </Link>

            {/* CARD 2: HOOPWORLD (HORIZONTAL SHOWCASE CARD) */}
            <Link
              href="/case-studies/hoopwrld"
              aria-label="View case study: Hoopworld"
              className="block relative rounded-[16px] border border-[#00BCD4]/25 hover:border-[#00BCD4]/60 bg-[#000000] overflow-hidden min-h-[360px] lg:h-[380px] xl:h-[400px] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(0,188,212,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(0,188,212,0.14)] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD4]"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Left Side (45%) — Project Information */}
                <div className="w-full md:w-[45%] p-7 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#000000] z-10 text-left">
                  <div className="space-y-3.5 max-w-md">
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
                      <span>DATA ANALYTICS &amp; BI</span>
                    </div>

                    {/* Brand Logo & Name */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4] shrink-0">
                        <Gamepad2 className="w-4 h-4 text-[#00BCD4]" />
                      </div>
                      <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                        Hoopworld
                      </span>
                    </div>

                    {/* Heading with Cyan Highlight */}
                    <h3 className="text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-extrabold text-white tracking-tight leading-[1.2]">
                      Turning Gameplay Data Into{" "}
                      <span className="text-[#00BCD4]">Reliable Player Analytics.</span>
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-md">
                      A unified reporting solution for player performance.
                    </p>
                  </div>

                  {/* View Case Study CTA Button */}
                  <div className="pt-4 md:pt-0">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00BCD4] text-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-black font-mono text-xs font-bold transition-all duration-200 shadow-sm">
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Right Side (55%) — Dashboard & Basketball Visual Imagery */}
                <div className="w-full md:w-[55%] bg-[#000000] relative flex items-center justify-center p-4 sm:p-6 lg:p-8 select-none overflow-hidden min-h-[240px] sm:min-h-[280px] md:min-h-0">
                  {/* Subtle Ambient Cyan Glow Behind Display */}
                  <div
                    className="absolute top-[40%] right-[25%] -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(0,188,212,0.14)_0%,rgba(0,188,212,0.02)_45%,transparent_70%)] blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Contained Artwork */}
                  <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[320px] transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                    <Image
                      src="/images/case-studies/hoopwrld-hero-basketball-laptop-perfect.webp"
                      alt="Hoopworld Player Analytics & Business Intelligence Dashboard"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 55vw, 700px"
                      className="object-contain object-center md:object-right"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 9 — FINAL CTA (BLACK BACKGROUND) */}
      {/* ===================================================================== */}
      <section className="bg-[#000000] text-white py-20 sm:py-24 relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] pointer-events-none opacity-20 -z-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 188, 212, 0.2) 0%, rgba(8, 127, 165, 0.05) 50%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 relative z-10">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00BCD4]">
              READY TO TURN YOUR DATA INTO RESULTS?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Your Business Data Can Tell a Clearer Story.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
              Let&apos;s build a reporting solution that helps you track growth, improve retention, and make smarter decisions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            <Link
              href="/contact#contact-hero"
              className="px-7 py-3 rounded-full text-sm font-mono font-bold text-black bg-[#00BCD4] hover:bg-[#00C7E8] transition-all shadow-lg shadow-[#00BCD4]/25 hover:shadow-[#00BCD4]/40 cursor-pointer"
            >
              Book a Strategy Call &rarr;
            </Link>
            <Link
              href="/case-studies"
              className="px-7 py-3 rounded-full text-sm font-mono font-bold text-white bg-white/[0.05] border border-white/20 hover:border-[#00BCD4] hover:text-[#00BCD4] transition-all cursor-pointer"
            >
              Explore More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
