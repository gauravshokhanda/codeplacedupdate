"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Cpu,
  BarChart3,
  Bot,
  Users,
  CheckCircle2,
  Workflow,
  Building2,
  Sliders,
  Database,
  GraduationCap,
  Gamepad2,
  Globe2,
} from "lucide-react";
import { CaseStudyCard, CaseStudyData } from "@/components/case-studies/CaseStudyCard";

// =============================================================================
// VERIFIED DATA DEFINITIONS SOURCED EXCLUSIVELY FROM COLLECTIQ PDF (2026)
// =============================================================================

// Three Feature Highlights on Hero (Page 1)
const HERO_CAPABILITIES = [
  {
    icon: Building2,
    title: "Collections Management",
    desc: "Consumer debt collections and commercial receivables unified in one workspace.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Event triggers, conditions, and linked actions across communication channels.",
  },
  {
    icon: Bot,
    title: "AI-Powered Insights",
    desc: "Conversational assistant answering operational questions with structured summaries.",
  },
];

// The Challenge — Four Disconnected Pains (Page 2)
const CHALLENGE_ITEMS = [
  {
    number: "01",
    title: "Fragmented Customer Information",
    desc: "Account balances, contact history, payment status and disputes live in separate systems.",
  },
  {
    number: "02",
    title: "Inconsistent Follow-Ups",
    desc: "Manual reminders and handoffs create gaps, repeated outreach and missed promises.",
  },
  {
    number: "03",
    title: "Low Operational Visibility",
    desc: "Teams struggle to identify urgent accounts, measure recovery and prioritize collectors.",
  },
  {
    number: "04",
    title: "SaaS Complexity",
    desc: "Different organizations need controlled access, flexible configuration, billing and auditability.",
  },
];

// The Solution — Three Operating Surfaces (Page 3)
const SOLUTION_SURFACES = [
  {
    number: "01",
    title: "ORGANIZATION WORKSPACE",
    desc: "Debtors, commercial invoices, collector workbench, communications, workflows, payments, disputes, reporting and AI.",
  },
  {
    number: "02",
    title: "CUSTOMER SELF-SERVICE",
    desc: "Balance visibility, payment actions, payment plans, document exchange, disputes and secure conversations.",
  },
  {
    number: "03",
    title: "PLATFORM ADMINISTRATION",
    desc: "Organization management, subscriptions, billing, system health, support, user roles and oversight.",
  },
];

// Beyond the Dashboard — Six Operations (Page 8)
const OPERATIONS_ITEMS = [
  {
    number: "1",
    title: "Commercial AR",
    desc: "Business accounts, invoice aging, overdue receivables, contact context and DSO reporting.",
  },
  {
    number: "2",
    title: "Collector Workbench",
    desc: "Assigned queues, follow-ups, notes, promises to pay and recommended next actions.",
  },
  {
    number: "3",
    title: "Communication Orchestration",
    desc: "Channel preferences, suppression rules, fallback handling and status visibility.",
  },
  {
    number: "4",
    title: "Payments & Plans",
    desc: "Payment links, installment arrangements, recorded payments and transaction history.",
  },
  {
    number: "5",
    title: "Disputes & Documents",
    desc: "Track exceptions, requested documents, review status and account-linked evidence.",
  },
  {
    number: "6",
    title: "Customer Portal",
    desc: "Enable balance checks, self-service payment actions, disputes and messaging.",
  },
];

// Engineering & Delivery Approach — Six Stages (Page 11)
const DELIVERY_STAGES = [
  {
    step: "01",
    title: "DISCOVER",
    desc: "Map user roles, account lifecycle, exception rules, integrations and success criteria.",
  },
  {
    step: "02",
    title: "DESIGN",
    desc: "Define UX flows, data relationships, permissions and workflow behavior.",
  },
  {
    step: "03",
    title: "BUILD",
    desc: "Deliver modules in vertical slices with reusable APIs and frontend components.",
  },
  {
    step: "04",
    title: "INTEGRATE",
    desc: "Connect communications, payment services and reporting with test cases.",
  },
  {
    step: "05",
    title: "VALIDATE",
    desc: "Test role access, edge cases, workflow outcomes, data handling and usability.",
  },
  {
    step: "06",
    title: "ITERATE",
    desc: "Refine using stakeholder feedback and production-readiness reviews.",
  },
];

// Project Outcomes — Four Value Pillars (Page 12)
const PROJECT_OUTCOMES = [
  {
    title: "Unified Context",
    desc: "Customer, invoice, payment and communication records are accessible in one operational workspace.",
  },
  {
    title: "Standardized Execution",
    desc: "Collection journeys can be configured as reusable workflows rather than repeated manual tasks.",
  },
  {
    title: "Better Prioritization",
    desc: "Risk indicators, overdue data, assigned queues and analytics inform team focus.",
  },
  {
    title: "Self-Service Experience",
    desc: "Customers can act on balances, plans, disputes and document needs through a portal.",
  },
];

// Related Case Studies to Display in Explore Section
const RELATED_STUDIES: CaseStudyData[] = [
  {
    id: "topplaced-ai",
    slug: "topplaced-ai",
    category: "AI INTERVIEW INTELLIGENCE / SAAS",
    brand: "TopPlaced AI",
    brandIcon: Cpu,
    titlePrefix: "Building an AI-Powered ",
    highlightWord: "Interview Simulation Platform",
    description:
      "An interview simulator that adapts, evaluates and monitors the complete candidate journey with voice-led interviews, coding editor and proctoring.",
    image: "/images/case-studies/topplaced-ai/topplaced-hero-live-interview-v2.webp",
    imageAlt: "TopPlaced AI Interview Workspace",
    techTags: ["Voice AI", "STAR Rubrics", "Proctoring", "Code Sandbox"],
    metrics: [
      { value: "Voice-Led", label: "Voice-Led Interviews", icon: Bot },
      { value: "Role-Specific", label: "Role-Specific Assessments", icon: Sliders },
      { value: "Coding Tools", label: "Integrated Coding Tools", icon: Workflow },
    ],
  },
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
    imageAlt: "Tuitionstime Marketplace Platform",
    techTags: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Razorpay"],
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
    highlightWord: "Reliable Player Analytics",
    description:
      "A unified reporting solution that helps Hoopwrld understand player activity, game completion, retention, and acquisition performance.",
    image: "/images/case-studies/hoopwrld-hero-basketball-laptop-perfect.webp",
    imageAlt: "Hoopwrld Player Analytics Dashboard",
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
    highlightWord: "Clearer Growth Decisions",
    description:
      "We helped Progress Partners turn complex marketing, subscription and payment data into reliable KPIs for tracking revenue growth, customer retention and advertising performance.",
    image: "/images/case-studies/progress-partners/hero-dashboard.webp",
    imageAlt: "Progress Partners Revenue Dashboard",
    techTags: ["BigQuery", "SQL", "Preset", "GA4", "Stripe", "Amplitude"],
    metrics: [
      { value: "8 Sources", label: "Data Sources Unified", icon: Database },
      { value: "Daily KPIs", label: "Daily Dashboard Usage", icon: BarChart3 },
      { value: "LTV + Churn", label: "Customer Retention Insights", icon: Users },
    ],
  },
];

// Lightweight smooth animation preset (viewport once, no scroll jitter)
const fadeInView = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

export function CollectIQCaseStudy() {
  return (
    <div className="w-full selection:bg-[#00BCD4] selection:text-black font-sans antialiased overflow-x-hidden scroll-smooth">
      {/* ===================================================================== */}
      {/* 1. HERO SECTION (BLACK BACKGROUND)                                   */}
      {/* ===================================================================== */}
      <section
        id="hero"
        className="w-full relative bg-[#000000] text-white pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 border-b border-white/[0.08] overflow-hidden flex items-center min-h-[640px] lg:min-h-[700px]"
      >
        {/* Soft Ambient Radial Glow */}
        <div
          className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[600px] h-[500px] pointer-events-none opacity-20 -z-0 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 188, 212, 0.28) 0%, rgba(8, 127, 165, 0.1) 45%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* LEFT COLUMN — 5 COLS (~42%) */}
            <motion.div
              {...fadeInView}
              className="lg:col-span-5 space-y-6 text-left z-10"
            >
              {/* Eyebrow Label */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#00BCD4]">
                  SAAS / AI AUTOMATION / FINTECH OPERATIONS
                </span>
                <span className="h-px w-10 bg-[#00BCD4]/40" />
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-black tracking-tight leading-[1.12] text-white">
                CollectIQ — An AI-Powered{" "}
                <span className="text-[#00BCD4] block">
                  Collections Operating System
                </span>
              </h1>

              {/* Supporting Description from PDF */}
              <p className="text-sm sm:text-base lg:text-[16px] text-[#A1A1AA] leading-relaxed max-w-xl">
                A connected SaaS platform for consumer debt collections, commercial receivables, intelligent workflows, and collection intelligence.
              </p>

              {/* Metadata Details: Category & Lead */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] block">
                    Category
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">
                    Fintech Operations & SaaS
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] block">
                    Product Engineering Case Study
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">
                    Gaurav Shokhanda &bull; 2026
                  </span>
                </div>
              </div>

              {/* Three Product Capability Highlights */}
              <div className="pt-3 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {HERO_CAPABILITIES.map((cap, cIdx) => {
                  const Icon = cap.icon;
                  return (
                    <div key={cIdx} className="p-3 rounded-xl bg-[#07090D] border border-white/[0.08]">
                      <div className="flex items-center gap-1.5 text-[#00BCD4]">
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-[11.5px] font-bold text-white leading-tight">
                          {cap.title}
                        </span>
                      </div>
                      <p className="text-[10.5px] text-[#A1A1AA] mt-1 leading-snug">
                        {cap.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/contact#contact-hero"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-lg shadow-[#00BCD4]/25 hover:shadow-xl hover:shadow-[#00BCD4]/35 hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Send an Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT COLUMN — 7 COLS (~58%) COMPLETE PROMINENT SCREENSHOT */}
            <motion.div
              {...fadeInView}
              className="lg:col-span-7 relative z-10"
            >
              <div className="relative w-full rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(0,188,212,0.12)] p-1.5 sm:p-2 bg-[#07090D]">
                <Image
                  src="/images/case-studies/collectiq/collectiq-hero-showcase.webp"
                  alt="CollectIQ - Connected Collections Operating System Product Showcase"
                  width={2355}
                  height={1575}
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="w-full h-auto object-contain block rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. THE CHALLENGE (WHITE BACKGROUND)                                  */}
      {/* ===================================================================== */}
      <section
        id="challenge"
        className="w-full relative bg-[#FFFFFF] text-[#101214] py-20 sm:py-28 border-b border-black/[0.08]"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="max-w-3xl text-left space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-black/[0.05] border border-black/10 text-[#00BCD4]">
              <span>COLLECTIQ / PRODUCT CASE STUDY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight text-[#101214]">
              The Challenge: Disconnected Collections Operations
            </h2>
            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
              Why organizations need more than a spreadsheet, a dialer and a reporting dashboard.
            </p>
          </div>

          {/* 4 Challenge Cards in a 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {CHALLENGE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#F8F9FA] border border-black/[0.06] hover:border-[#00BCD4]/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-black/[0.04] border border-black/10 flex items-center justify-center text-sm font-mono font-black text-[#00BCD4]">
                    {item.number}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#101214]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. THE SOLUTION (BLACK BACKGROUND)                                   */}
      {/* ===================================================================== */}
      <section
        id="solution"
        className="w-full relative bg-[#000000] text-white py-20 sm:py-28 border-b border-white/[0.08]"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="max-w-3xl text-left space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white/[0.05] border border-white/10 text-[#00BCD4]">
              <span>ONE CONNECTED SAAS ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight text-white">
              The Solution: One Connected SaaS Ecosystem
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              Three operating surfaces linked by shared account context, automation and analytics.
            </p>
          </div>

          {/* Three Operating Surfaces (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {SOLUTION_SURFACES.map((surface, sIdx) => (
              <div
                key={sIdx}
                className="p-8 rounded-2xl bg-[#07090D] border border-white/[0.08] hover:border-[#00BCD4]/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="text-xs font-mono font-bold tracking-wider uppercase text-[#00BCD4] px-2.5 py-1 rounded bg-[#00BCD4]/10 border border-[#00BCD4]/30 w-fit">
                    {surface.number}
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-white uppercase">
                    {surface.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {surface.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Shared Foundation Bar */}
          <div className="p-6 rounded-2xl bg-[#07090D] border border-[#00BCD4]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-[#00BCD4]">
              <span className="w-2 h-2 rounded-full bg-[#00BCD4] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                SHARED FOUNDATION
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-[#D4D4D8]">
              <span>Permissions</span>
              <span className="text-[#00BCD4]">&bull;</span>
              <span>Integrations</span>
              <span className="text-[#00BCD4]">&bull;</span>
              <span>Auditability</span>
              <span className="text-[#00BCD4]">&bull;</span>
              <span>Branding</span>
              <span className="text-[#00BCD4]">&bull;</span>
              <span>Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. COLLECTIONS DASHBOARD (WHITE BACKGROUND)                           */}
      {/* Text Left (5 Cols), Screenshot Right (7 Cols)                         */}
      {/* ===================================================================== */}
      <section
        id="dashboard"
        className="w-full relative bg-[#FFFFFF] text-[#101214] py-20 sm:py-28 border-b border-black/[0.08]"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* TEXT LEFT (5 COLS) */}
            <motion.div
              {...fadeInView}
              className="lg:col-span-5 space-y-6 text-left order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-black/[0.05] border border-black/10 text-[#00BCD4]">
                <span>PRODUCT CAPABILITY &bull; 01</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-[#101214]">
                Visibility Across Collections Performance
              </h2>
              <p className="text-base text-[#52525B] leading-relaxed">
                Visibility across recovery, outstanding balances, risk and activity.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-black/[0.06]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#71717A] block">
                    THE PROBLEM
                  </span>
                  <p className="text-sm text-[#27272A] mt-1 leading-relaxed">
                    Leaders lack a unified, timely picture of recovery performance and at-risk accounts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-black/[0.06]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00BCD4] block">
                    WHAT WE BUILT
                  </span>
                  <p className="text-sm text-[#27272A] mt-1 leading-relaxed">
                    A collections overview with outstanding and recovered balances, recovery rates, overdue accounts, trends and activity feeds.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-black/[0.06]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16A34A] block">
                    BUSINESS VALUE
                  </span>
                  <p className="text-sm text-[#27272A] mt-1 leading-relaxed">
                    Makes performance review and prioritization easier without stitching together manual reports.
                  </p>
                </div>
              </div>

              {/* Capabilities Pill Strip */}
              <div className="pt-2 border-t border-black/[0.08] flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider mr-1">
                  Capabilities:
                </span>
                {["KPI cards", "Trend visualization", "Risk monitoring", "Operational activity"].map((cap, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.08] text-[#18181B]"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* SCREENSHOT RIGHT (7 COLS) */}
            <motion.div
              {...fadeInView}
              className="lg:col-span-7 order-2"
            >
              <div className="relative w-full rounded-2xl border border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.06)] bg-white p-1.5 sm:p-2">
                <Image
                  src="/images/case-studies/collectiq/collectiq-collections-dashboard.webp"
                  alt="CollectIQ Collections Dashboard Interface with Recovery Trends and KPI Cards"
                  width={1620}
                  height={1040}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="w-full h-auto object-contain block rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. CONSUMER ACCOUNT MANAGEMENT (BLACK BACKGROUND)                     */}
      {/* Screenshot Left (7 Cols), Text Right (5 Cols)                         */}
      {/* ===================================================================== */}
      <section
        id="accounts"
        className="w-full relative bg-[#000000] text-white py-20 sm:py-28 border-b border-white/[0.08]"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* SCREENSHOT LEFT (7 COLS) */}
            <motion.div
              {...fadeInView}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <div className="relative w-full rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-[#07090D] p-1.5 sm:p-2">
                <Image
                  src="/images/case-studies/collectiq/collectiq-consumer-account-management.webp"
                  alt="CollectIQ Consumer Account Management Profile with Activity Timeline and Quick Actions"
                  width={1715}
                  height={980}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="w-full h-auto object-contain block rounded-xl"
                />
              </div>
            </motion.div>

            {/* TEXT RIGHT (5 COLS) */}
            <motion.div
              {...fadeInView}
              className="lg:col-span-5 space-y-6 text-left order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white/[0.05] border border-white/10 text-[#00BCD4]">
                <span>PRODUCT CAPABILITY &bull; 02</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-white">
                A Complete View of Every Customer Account
              </h2>
              <p className="text-base text-[#A1A1AA] leading-relaxed">
                A complete account history from onboarding to next action.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#71717A] block">
                    THE PROBLEM
                  </span>
                  <p className="text-sm text-[#D4D4D8] mt-1 leading-relaxed">
                    Collectors switch between records and communication tools, losing context and repeating work.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00BCD4] block">
                    WHAT WE BUILT
                  </span>
                  <p className="text-sm text-[#D4D4D8] mt-1 leading-relaxed">
                    Account profiles with customer details, payment history, activity timelines, notes, workflow context and quick actions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00BCD4] block">
                    BUSINESS VALUE
                  </span>
                  <p className="text-sm text-[#D4D4D8] mt-1 leading-relaxed">
                    Helps collectors respond with the right action using one view of each account.
                  </p>
                </div>
              </div>

              {/* Capabilities Pill Strip */}
              <div className="pt-2 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider mr-1">
                  Capabilities:
                </span>
                {["CSV import", "Custom fields", "Timelines", "Payments", "Reminders", "Assignment"].map((cap, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. VISUAL WORKFLOW AUTOMATION (WHITE BACKGROUND)                      */}
      {/* Text Left (5 Cols), Screenshot Right (7 Cols)                         */}
      {/* ===================================================================== */}
      <section
        id="workflows"
        className="w-full relative bg-[#FFFFFF] text-[#101214] py-20 sm:py-28 border-b border-black/[0.08]"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* TEXT LEFT (5 COLS) */}
            <motion.div
              {...fadeInView}
              className="lg:col-span-5 space-y-6 text-left order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-black/[0.05] border border-black/10 text-[#00BCD4]">
                <span>PRODUCT CAPABILITY &bull; 03</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-[#101214]">
                From Manual Follow-Ups to Intelligent Workflows
              </h2>
              <p className="text-base text-[#52525B] leading-relaxed">
                Move from ad hoc reminders to repeatable collection journeys.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-black/[0.06]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#71717A] block">
                    THE PROBLEM
                  </span>
                  <p className="text-sm text-[#27272A] mt-1 leading-relaxed">
                    Human-led follow-up is hard to standardize and easy to forget as account volume grows.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-black/[0.06]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00BCD4] block">
                    WHAT WE BUILT
                  </span>
                  <p className="text-sm text-[#27272A] mt-1 leading-relaxed">
                    A visual workflow builder with event triggers, conditions and linked actions such as email, SMS, WhatsApp, calls and collector tasks.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-black/[0.06]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16A34A] block">
                    BUSINESS VALUE
                  </span>
                  <p className="text-sm text-[#27272A] mt-1 leading-relaxed">
                    Provides more consistent execution, clearer ownership and less manual coordination.
                  </p>
                </div>
              </div>

              {/* Capabilities Pill Strip */}
              <div className="pt-2 border-t border-black/[0.08] flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider mr-1">
                  Capabilities:
                </span>
                {["Triggers", "Condition nodes", "Channel actions", "Workflow testing", "Execution tracking"].map((cap, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.08] text-[#18181B]"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* SCREENSHOT RIGHT (7 COLS) */}
            <motion.div
              {...fadeInView}
              className="lg:col-span-7 order-2"
            >
              <div className="relative w-full rounded-2xl border border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.06)] bg-white p-1.5 sm:p-2">
                <Image
                  src="/images/case-studies/collectiq/collectiq-visual-workflow-automation.webp"
                  alt="CollectIQ Visual Workflow Builder Interface with Node Palette and Actions"
                  width={1860}
                  height={990}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="w-full h-auto object-contain block rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. AI COLLECTIONS ASSISTANT (BLACK BACKGROUND)                        */}
      {/* Screenshot Left (7 Cols), Text Right (5 Cols)                         */}
      {/* ===================================================================== */}
      <section
        id="assistant"
        className="w-full relative bg-[#000000] text-white py-20 sm:py-28 border-b border-white/[0.08]"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* SCREENSHOT LEFT (7 COLS) */}
            <motion.div
              {...fadeInView}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <div className="relative w-full rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-[#07090D] p-1.5 sm:p-2">
                <Image
                  src="/images/case-studies/collectiq/collectiq-ai-collections-assistant.webp"
                  alt="CollectIQ AI Collections Assistant with Chat History and Structured Metrics Table"
                  width={1740}
                  height={960}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="w-full h-auto object-contain block rounded-xl"
                />
              </div>
            </motion.div>

            {/* TEXT RIGHT (5 COLS) */}
            <motion.div
              {...fadeInView}
              className="lg:col-span-5 space-y-6 text-left order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white/[0.05] border border-white/10 text-[#00BCD4]">
                <span>PRODUCT CAPABILITY &bull; 04</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-white">
                Collection Intelligence Through Natural Language
              </h2>
              <p className="text-base text-[#A1A1AA] leading-relaxed">
                Natural-language questions over operational collections information.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#71717A] block">
                    THE PROBLEM
                  </span>
                  <p className="text-sm text-[#D4D4D8] mt-1 leading-relaxed">
                    Decision-makers spend time gathering metrics and interpreting account data from multiple screens.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00BCD4] block">
                    WHAT WE BUILT
                  </span>
                  <p className="text-sm text-[#D4D4D8] mt-1 leading-relaxed">
                    A conversational assistant for asking collection questions and receiving structured summaries, tables and operational insights.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00BCD4] block">
                    BUSINESS VALUE
                  </span>
                  <p className="text-sm text-[#D4D4D8] mt-1 leading-relaxed">
                    Faster access to context for account review and management decisions; human decisions remain in control.
                  </p>
                </div>
              </div>

              {/* Capabilities Pill Strip */}
              <div className="pt-2 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider mr-1">
                  Capabilities:
                </span>
                {["Chat history", "Plain-language queries", "Collection summaries", "Contextual insights"].map((cap, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 8. BEYOND THE DASHBOARD (WHITE BACKGROUND)                            */}
      {/* 6 Operational Modules in a 3x2 Grid                                   */}
      {/* ===================================================================== */}
      <section
        id="operations"
        className="w-full relative bg-[#FFFFFF] text-[#101214] py-20 sm:py-28 border-b border-black/[0.08]"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="max-w-3xl text-left space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-black/[0.05] border border-black/10 text-[#00BCD4]">
              <span>END-TO-END COLLECTIONS OPERATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight text-[#101214]">
              Beyond the Dashboard: End-to-End Operations
            </h2>
            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
              CollectIQ is designed as a working collections system, not a collection of disconnected screens.
            </p>
          </div>

          {/* 6 Operational Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {OPERATIONS_ITEMS.map((op, oIdx) => (
              <div
                key={oIdx}
                className="p-8 rounded-2xl bg-[#F8F9FA] border border-black/[0.06] hover:border-[#00BCD4]/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-lg bg-black/[0.04] border border-black/10 flex items-center justify-center text-xs font-mono font-bold text-[#00BCD4]">
                    {op.number}
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-[#101214]">
                    {op.title}
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    {op.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 9. PRODUCT ARCHITECTURE (BLACK BACKGROUND)                            */}
      {/* ===================================================================== */}
      <section
        id="architecture"
        className="w-full relative bg-[#000000] text-white py-20 sm:py-28 border-b border-white/[0.08]"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="max-w-3xl text-left space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white/[0.05] border border-white/10 text-[#00BCD4]">
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight text-white">
              Architecture: Connected Operations by Design
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              The product structure demonstrates reusable workflows across operational and customer-facing modules.
            </p>
          </div>

          {/* 5-Stage Conceptual Workflow Nodes with Direction Arrows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 lg:gap-4 mb-10">
            {[
              {
                step: "SOURCE RECORDS",
                subtitle: "Debtors / invoices / accounts",
              },
              {
                step: "OPERATIONAL LAYER",
                subtitle: "Workbench / roles / activity",
              },
              {
                step: "AUTOMATION LAYER",
                subtitle: "Triggers / conditions / actions",
              },
              {
                step: "CHANNEL + PAYMENT",
                subtitle: "Messages / payment records",
              },
              {
                step: "INTELLIGENCE",
                subtitle: "Reporting / AI assistant",
              },
            ].map((node, nIdx) => (
              <div
                key={nIdx}
                className="relative p-6 rounded-2xl bg-[#07090D] border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#00BCD4] block mb-2">
                    STAGE 0{nIdx + 1}
                  </span>
                  <h4 className="text-sm font-bold tracking-tight text-white uppercase mb-2">
                    {node.step}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] leading-snug">
                    {node.subtitle}
                  </p>
                </div>
                {nIdx < 4 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#00BCD4] font-black text-lg">
                    &gt;
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Cross-Cutting SaaS Concerns */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#07090D] border border-white/[0.08] mb-8">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#00BCD4] block mb-4">
              CROSS-CUTTING SAAS CONCERNS
            </span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-[#D4D4D8]">
              <span>Tenant boundaries</span>
              <span className="text-[#00BCD4]">&bull;</span>
              <span>Role-based permissions</span>
              <span className="text-[#00BCD4]">&bull;</span>
              <span>Tenant branding</span>
              <span className="text-[#00BCD4]">&bull;</span>
              <span>Data audit trails</span>
              <span className="text-[#00BCD4]">&bull;</span>
              <span>Integrations</span>
              <span className="text-[#00BCD4]">&bull;</span>
              <span>Platform billing</span>
              <span className="text-[#00BCD4]">&bull;</span>
              <span>Admin observability</span>
            </div>
          </div>

          {/* Technology Verification Note (From Page 10) */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-[#A1A1AA] leading-relaxed">
            <span className="font-bold text-white block mb-1">Technology Verification Note</span>
            Exact frontend, backend, database, cloud and LLM vendors were not established by the provided references and should be confirmed before presenting a named stack as implemented.
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 10. ENGINEERING & DELIVERY APPROACH (WHITE BACKGROUND)                */}
      {/* ===================================================================== */}
      <section
        id="engineering"
        className="w-full relative bg-[#FFFFFF] text-[#101214] py-20 sm:py-28 border-b border-black/[0.08]"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="max-w-3xl text-left space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-black/[0.05] border border-black/10 text-[#00BCD4]">
              <span>IMPLEMENTATION METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight text-[#101214]">
              How We Approach Complex SaaS Delivery
            </h2>
            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
              An implementation methodology shaped around real operational workflows and reviewable milestones.
            </p>
          </div>

          {/* 6 Delivery Stages */}
          <div className="space-y-4">
            {DELIVERY_STAGES.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8F9FA] border border-black/[0.06] hover:border-[#00BCD4]/40 transition-all duration-300 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono font-black text-[#00BCD4] px-3 py-1.5 rounded-lg bg-black/[0.04] border border-black/10">
                    {stage.step}
                  </span>
                  <span className="text-base font-bold text-[#101214] tracking-tight">
                    {stage.title}
                  </span>
                </div>
                <p className="text-sm text-[#52525B] leading-relaxed sm:max-w-xl text-left">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 11. PROJECT VALUE (BLACK BACKGROUND)                                  */}
      {/* ===================================================================== */}
      <section
        id="outcomes"
        className="w-full relative bg-[#000000] text-white py-20 sm:py-28 border-b border-white/[0.08]"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="max-w-3xl text-left space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-white/[0.05] border border-white/10 text-[#00BCD4]">
              <span>PRODUCT OUTCOMES & VALUE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight text-white">
              Outcomes: What the Platform Enables
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              Product outcomes and business opportunities &mdash; not unsupported claims of measured ROI.
            </p>
          </div>

          {/* 4 Outcome Pillars (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
            {PROJECT_OUTCOMES.map((out, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#07090D] border border-white/[0.08] hover:border-[#00BCD4]/40 transition-all duration-300 shadow-sm space-y-3 text-left"
              >
                <div className="flex items-center gap-2 text-[#00BCD4]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <h3 className="text-lg font-bold tracking-tight text-white">
                    {out.title}
                  </h3>
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {out.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Transparent Metric Note (Page 12) */}
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-[#71717A] leading-relaxed">
            <span className="font-bold text-[#A1A1AA] block mb-1">Important</span>
            Screens show sample account metrics. No verified before/after recovery increase, cost reduction or customer adoption figures were provided, so this case study does not invent them.
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 12. EXPLORE MORE CASE STUDIES (WHITE BACKGROUND)                      */}
      {/* ===================================================================== */}
      <section
        id="explore"
        className="w-full relative bg-[#FFFFFF] text-[#101214] py-20 sm:py-28 border-b border-black/[0.08]"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-black/[0.05] border border-black/10 text-[#00BCD4]">
                <span>PORTFOLIO &bull; CASE STUDIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-[#101214]">
                Explore More Case Studies
              </h2>
              <p className="text-base text-[#52525B]">
                Discover how CodePlaced architects and engineers mission-critical digital products.
              </p>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-mono font-bold text-[#101214] hover:text-[#00BCD4] transition-colors"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Related Case Studies Cards */}
          <div className="space-y-6">
            {RELATED_STUDIES.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 13. FINAL CTA (BLACK BACKGROUND)                                      */}
      {/* ===================================================================== */}
      <section
        id="cta"
        className="w-full relative bg-[#000000] text-white py-20 sm:py-28 border-b border-white/[0.08] overflow-hidden"
      >
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 188, 212, 0.28) 0%, rgba(8, 127, 165, 0.1) 45%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Build Systems That Solve Real Problems.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              CollectIQ demonstrates how account management, automation, AI, and operational reporting can come together in a connected SaaS product.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#contact-hero"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-sm tracking-tight transition-all duration-200 shadow-lg shadow-[#00BCD4]/25 hover:shadow-xl hover:shadow-[#00BCD4]/35 hover:-translate-y-0.5 active:scale-95"
              >
                Send an Inquiry
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 font-bold text-sm tracking-tight transition-all duration-200"
              >
                Back to Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
