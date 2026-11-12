"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Target,
  Code2,
  ShieldCheck,
  CheckCircle2,
  Mic,
  Video,
  Monitor,
  AlertTriangle,
  Clock,
  Sparkles,
  Compass,
  Sliders,
  FileCheck,
  Eye,
  GraduationCap,
  Gamepad2,
  BarChart3,
  Users,
  Layers,
  Database,
  Globe2,
} from "lucide-react";
import { CaseStudyCard, CaseStudyData } from "@/components/case-studies/CaseStudyCard";

// =============================================================================
// VERIFIED DATA DEFINITIONS SOURCED EXCLUSIVELY FROM TOPPLACED AI PDF (2026)
// =============================================================================

// Three Feature Highlights on Hero
const HERO_CAPABILITIES = [
  {
    icon: Mic,
    title: "Voice-Led Interviews",
    desc: "Low-latency conversational voice evaluation with turn-taking AI.",
  },
  {
    icon: Target,
    title: "Role-Specific Assessments",
    desc: "Customized by seniority, functional specialty, and target company.",
  },
  {
    icon: Code2,
    title: "Integrated Coding Tools",
    desc: "In-browser runtime sandbox, language choice, and system-design workspace.",
  },
];

// The Challenge — Six Disconnected Pains (PDF Pages 2 & 3)
const CHALLENGE_ITEMS = [
  {
    icon: Compass,
    title: "Generic Interview Practice",
    desc: "Static question banks and generic chat bots cannot reflect discipline-specific expectations or company standards.",
  },
  {
    icon: FileCheck,
    title: "Unstructured Answers",
    desc: "Candidates struggle to formulate structured responses without live guidance or STAR methodology alignment.",
  },
  {
    icon: Code2,
    title: "Lack of Practical Coding",
    desc: "Purely verbal or text exercises lack an integrated runtime sandbox to validate practical software engineering skills.",
  },
  {
    icon: Bot,
    title: "Limited Interview Realism",
    desc: "Text-based simulators miss conversational turn-taking, spoken cadence, and the natural pressure of an interview.",
  },
  {
    icon: AlertTriangle,
    title: "Inconsistent Readiness Checks",
    desc: "Ambiguous audio, camera, or screen-sharing setups lead to technical derailments and interrupted sessions.",
  },
  {
    icon: ShieldCheck,
    title: "Unclear Session Integrity",
    desc: "Absence of transparent multi-signal integrity monitoring leaves candidates and evaluators uncertain about compliance.",
  },
];

// The Solution — Six Core Capabilities (PDF Pages 2, 3, 4)
const SOLUTION_CAPABILITIES = [
  {
    icon: Sliders,
    title: "Role, Seniority & Company Calibration",
    desc: "Configure seniority (Associate 0–2y, Mid-Level 2–5y, Senior/Principal 5+y), functional domain (Frontend, Backend, Full Stack, Mobile, DevOps), and target company evaluation lenses (Google, Amazon, Microsoft, Meta, Startups).",
  },
  {
    icon: Mic,
    title: "Conversational AI Voice Interviewer",
    desc: "Low-latency conversational voice evaluation with intelligent multi-turn cross-examination and spoken prompts that simulate an authentic interview exchange.",
  },
  {
    icon: Code2,
    title: "Embedded Coding Editor & Execution Controls",
    desc: "In-session code sandbox with multi-language execution controls, syntax validation, and a dedicated system-design architecture tab.",
  },
  {
    icon: Sparkles,
    title: "STAR Coaching & Explicit Scoring Rubrics",
    desc: "Real-time speech transcription, on-the-fly transcript editing, and explicit STAR (Situation, Task, Action, Result & Metrics) cues with transparent evaluation rubrics.",
  },
  {
    icon: Video,
    title: "Pre-Flight Device & Hardware Verification",
    desc: "Explicit step-by-step browser media checks for camera framing, microphone sensitivity, screen-sharing permissions, and optional secondary smartphone camera pairing.",
  },
  {
    icon: ShieldCheck,
    title: "Visible Proctoring Warnings & Session Monitoring",
    desc: "Transparent 1-of-3 warning progression providing actionable signals and stated triggers (such as secondary monitor detection) to protect candidate trust and session integrity.",
  },
];

// How TopPlaced AI Works — 5 Distinct Operating Stages (PDF Page 4)
const OPERATING_STAGES = [
  {
    step: "01",
    name: "Choose Track",
    desc: "Select technical architecture, behavioral leadership, strategic cases, or comprehensive multi-track simulations.",
    badge: "Evaluation Format",
  },
  {
    step: "02",
    name: "Calibrate",
    desc: "Configure career seniority tier, specialized engineering domain, and target organization evaluation presets.",
    badge: "Domain Calibration",
  },
  {
    step: "03",
    name: "Pre-Flight",
    desc: "Complete step-by-step device permissions, webcam framing calibration, screen sharing, and integrity checks.",
    badge: "Hardware & Trust",
  },
  {
    step: "04",
    name: "Interview",
    desc: "Engage in voice-based interactive simulation with live coding sandbox, STAR cues, and proctoring telemetry.",
    badge: "Simulation Room",
  },
  {
    step: "05",
    name: "Review",
    desc: "Inspect performance scores, competency breakdown matrices, transcript archives, and comprehensive session logs.",
    badge: "Evaluation Audit",
  },
];

// Section 7 — Conversational AI Workspace: 6 Live Multi-Surface Components (PDF Pages 15–16)
const WORKSPACE_COMPONENTS = [
  {
    icon: Bot,
    title: "AI Interviewer",
    desc: "An AI persona, voice status indicator, and prompt panel that guide the ongoing technical exchange.",
    tag: "Persona & Voice",
  },
  {
    icon: Sparkles,
    title: "Response & STAR Coaching",
    desc: "Speech-oriented response interface, live transcript editing, and real-time STAR coaching cues.",
    tag: "Spoken Response",
  },
  {
    icon: Code2,
    title: "Practical Coding Sandbox",
    desc: "Integrated code editor, language selector, execution run action, and a dedicated system-design tab.",
    tag: "Execution Runtime",
  },
  {
    icon: Eye,
    title: "Candidate Camera Preview",
    desc: "Live webcam preview with real-time eye-contact, posture, and voice-pace telemetry visible in the UI.",
    tag: "Behavioral Telemetry",
  },
  {
    icon: Monitor,
    title: "Screen Analysis",
    desc: "Active screen sharing state, capture interval (every 5s), on-demand scan action, and frame counter.",
    tag: "Display Monitoring",
  },
  {
    icon: Clock,
    title: "Timing & Conversation History",
    desc: "Question count tracker, auto-submitting countdown timer, and collapsible conversation-history log.",
    tag: "Session Flow",
  },
];

// Section 8 — Conceptual Product Architecture Blocks (PDF Page 17)
const ARCHITECTURE_BLOCKS = [
  {
    title: "Candidate UI",
    desc: "Dashboard, calibration wizard, session history, and profile management surfaces.",
    category: "Candidate Surface",
  },
  {
    title: "Session Orchestration",
    desc: "Track selection, role definition, duration timer, and state-machine transitions.",
    category: "Workflow Engine",
  },
  {
    title: "AI Evaluation",
    desc: "Question synthesis, speech processing, STAR cues, and explicit scoring rubrics.",
    category: "Intelligence Layer",
  },
  {
    title: "Interactive Tools",
    desc: "Coding sandbox, system-design tab, transcript editor, and syntax engine.",
    category: "Candidate Tools",
  },
  {
    title: "Browser Media",
    desc: "Webcam video feed, microphone audio, screen display stream, and optional smartphone WebRTC.",
    category: "Media Pipeline",
  },
  {
    title: "Observability",
    desc: "Telemetry events, proctoring warning progression, competency scores, and audit history.",
    category: "Telemetry & Logs",
  },
];

// Section 9 — Delivered Value Points (PDF Pages 2, 4, 19)
const VALUE_POINTS = [
  {
    title: "Targeted Interview Preparation",
    desc: "Calibrated directly to candidate seniority, functional discipline, and specific enterprise hiring styles.",
  },
  {
    title: "Repeatable Evaluation",
    desc: "Structured scoring rubrics and standardized criteria replace arbitrary, unstructured question generation.",
  },
  {
    title: "Actionable In-Flight Coaching",
    desc: "Live STAR methodology feedback and real-time transcript refinement help candidates hone communication on the spot.",
  },
  {
    title: "Role-Specific Configuration",
    desc: "Granular options spanning frontend, backend, full stack, mobile, and cloud/DevOps roles.",
  },
  {
    title: "Integrated Practical Assessments",
    desc: "Hands-on coding editor and execution controls seamlessly paired with conversational voice questioning.",
  },
  {
    title: "A Cohesive Candidate Journey",
    desc: "Unified experience covering pre-flight hardware checks, live proctored simulation, and post-interview review.",
  },
];

// Related Case Studies for Section 10
const RELATED_STUDIES: CaseStudyData[] = [
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
    mobileImage: "/images/case-studies/tuitionstime/tuitionstime-photorealistic-laptop-hero.webp",
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
  },
];

export function TopPlacedAICaseStudy() {
  const [configTab, setConfigTab] = useState<"seniority" | "role" | "company" | "preflight">("seniority");
  const [mediaTab, setMediaTab] = useState<"camera" | "readiness" | "secondary">("camera");

  return (
    <div className="w-full selection:bg-[#00BCD4] selection:text-black font-sans antialiased overflow-x-hidden">
      {/* ===================================================================== */}
      {/* ORDER 1 — HERO SECTION (BLACK BACKGROUND)                             */}
      {/* ===================================================================== */}
      <section className="w-full relative bg-[#000000] text-white pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 border-b border-white/[0.08] overflow-hidden flex items-center min-h-[640px] lg:min-h-[700px]">
        {/* Soft Ambient Radial Glow Behind Headline & Image */}
        <div
          className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[600px] h-[500px] pointer-events-none opacity-20 -z-0 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 188, 212, 0.28) 0%, rgba(8, 127, 165, 0.1) 45%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-10 xl:gap-14">
            {/* LEFT COLUMN — 45% EDITORIAL CONTENT */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full lg:w-[45%] xl:w-[44%] flex-none space-y-6 text-left z-10"
            >
              {/* Eyebrow Label */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#00BCD4]">
                  CASE STUDY / TOPPLACED AI
                </span>
                <span className="h-px w-10 bg-[#00BCD4]/40" />
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-black tracking-tight leading-[1.12] text-white">
                From Mock Questions to a{" "}
                <span className="text-[#00BCD4] block">
                  Full Simulation Engine.
                </span>
              </h1>

              {/* Supporting Description from PDF */}
              <p className="text-sm sm:text-base lg:text-[16px] text-[#A1A1AA] leading-relaxed max-w-xl">
                A configurable AI interview environment built around candidate context, not a one-size-fits-all question generator. TopPlaced AI combines voice-led mock interviews, role-specific assessments, integrated coding tools, configurable evaluation rubrics, and multi-signal proctoring into one candidate-facing experience.
              </p>

              {/* Metadata Details: Category & Lead */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] block">
                    Category
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">
                    AI Interview Intelligence / SaaS
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] block">
                    Product Showcase
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

            {/* RIGHT COLUMN — 55% DIRECT PROMINENT SCREENSHOT (NO GREY CONTAINER) */}
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="w-full lg:w-[55%] xl:w-[56%] flex-none relative"
            >
              {/* Direct Screenshot at Native Proportions with Minimal Single Border */}
              <div className="relative w-full overflow-hidden rounded-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(0,188,212,0.12)]">
                <Image
                  src="/images/case-studies/topplaced-ai/topplaced-hero-live-interview-v2.webp"
                  alt="TopPlaced AI Live Interview Workspace Interface"
                  width={2336}
                  height={1314}
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* ORDER 2 — THE CHALLENGE (WHITE BACKGROUND — SIX DISCONNECTED PAINS)   */}
      {/* ===================================================================== */}
      <section className="w-full bg-[#FFFFFF] text-[#101214] py-16 sm:py-20 lg:py-24 border-b border-[#E4E4E7] relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl text-left space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00838F]">
              PROBLEM TO BE SOLVED
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101214] tracking-tight">
              The Challenge.
            </h2>
            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
              Candidates often prepare with static question banks, generic AI chats, and scattered tools. They lack role-level calibration, consistent feedback, and realistic interview conditions.
            </p>
          </div>

          {/* 6 Challenge Cards (Light Cards on White) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CHALLENGE_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#00BCD4]/60 hover:shadow-md transition-all duration-300 space-y-3.5 group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#00838F] group-hover:bg-[#00BCD4]/10 group-hover:border-[#00BCD4]/40 transition-colors shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#101214] tracking-tight group-hover:text-[#00838F] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-2 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    PAIN POINT 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* ORDER 3 — THE SOLUTION (BLACK BACKGROUND — ONE CONNECTED WORKFLOW)    */}
      {/* ===================================================================== */}
      <section className="w-full bg-[#000000] text-white py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl text-left space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00BCD4]">
              ONE CONNECTED WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Solution.
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              TopPlaced combines interview configuration, guided voice sessions, coding and system-design practice, performance scoring, and session integrity controls.
            </p>
          </div>

          {/* 6 Capabilities Grid (Dark Cards on Black) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTION_CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0A0D12] border border-white/[0.08] hover:border-[#00BCD4]/50 transition-all duration-300 space-y-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#00BCD4] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* ORDER 4 — END-TO-END FLOW (WHITE BACKGROUND — OPERATING FLOW)         */}
      {/* ===================================================================== */}
      <section className="w-full bg-[#FFFFFF] text-[#101214] py-16 sm:py-20 lg:py-24 border-b border-[#E4E4E7] relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl text-left space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00838F]">
              THE CANDIDATE JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101214] tracking-tight">
              An End-to-End Interview Operating Flow.
            </h2>
            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
              These are the distinct stages visible in the supplied screens, not inferred backend functionality. Built for repeatable practice, clearer evaluation criteria and one cohesive candidate journey.
            </p>
          </div>

          {/* 5 Process Stages in Light Stepped Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {OPERATING_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#00BCD4]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-2xl font-black font-mono text-[#00838F]">
                      {stage.step}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-[#E2E8F0] text-slate-600 font-semibold">
                      {stage.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#101214] tracking-tight group-hover:text-[#00838F] transition-colors">
                    {stage.name}
                  </h3>
                  <p className="text-xs text-[#52525B] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* ORDER 5 — KEY PRODUCT FEATURES: SETUP & CALIBRATION (BLACK BG)        */}
      {/* ===================================================================== */}
      <section className="w-full bg-[#000000] text-white py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Section Header */}
          <div className="max-w-3xl text-left space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00BCD4]">
              KEY PRODUCT FEATURES &bull; PART 1
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Key Product Features: Setup &amp; Calibration.
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Explore the authentic interface screens across candidate setup, track configuration, and role intelligence.
            </p>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* FEATURE 01 — CANDIDATE DASHBOARD (TEXT LEFT, IMAGE RIGHT)         */}
          {/* ----------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content Column (45%) */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-xs font-mono font-bold text-[#00BCD4] uppercase tracking-wider block">
                01 &bull; COMMAND CENTER &bull; PDF PAGE 5
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Candidate Dashboard
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                A centralized candidate home base that unifies simulation launch entry points, live session telemetry, aggregate competency matrices, and recent evaluation audits into a single command view.
              </p>

              {/* The Challenge Block */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#F87171] block">
                  The Challenge
                </span>
                <p className="text-xs text-[#D4D4D8] leading-relaxed">
                  Candidates juggle fragmented tools, losing track of their preparation history, skill gaps, and readiness trajectory across different disciplines.
                </p>
              </div>

              {/* How TopPlaced AI Addresses It */}
              <div className="p-3.5 rounded-xl bg-[#00BCD4]/[0.06] border border-[#00BCD4]/25 space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00BCD4] block">
                  How TopPlaced AI Addresses It
                </span>
                <p className="text-xs text-[#D4D4D8] leading-relaxed">
                  Provides a unified command center displaying aggregate competency matrices, immediate interview launch controls, and an auditable record of past sessions and performance progression.
                </p>
              </div>

              {/* Relevant Capabilities */}
              <div className="space-y-2 pt-1 text-xs text-[#A1A1AA]">
                <div className="flex items-start gap-2">
                  <span className="text-[#00BCD4] font-bold">&bull;</span>
                  <span><strong className="text-white">Competency Breakdown:</strong> Real-time radar metrics for Delivery, Architecture, Communication, and Analytical Problem Solving.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00BCD4] font-bold">&bull;</span>
                  <span><strong className="text-white">Active Launch:</strong> One-click initiation for newly calibrated or saved interview tracks.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00BCD4] font-bold">&bull;</span>
                  <span><strong className="text-white">Audit History:</strong> Direct access to past interview recordings, transcripts, and evaluation logs.</span>
                </div>
              </div>
            </div>

            {/* Right Image Column (55%) — Clean Screen, No Grey Border */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full overflow-hidden rounded-xl border border-white/10 shadow-xl">
                <Image
                  src="/images/case-studies/topplaced-ai/topplaced-candidate-dashboard-v2.webp"
                  alt="Candidate Dashboard Command Center Interface"
                  width={1868}
                  height={1314}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* FEATURE 02 — TRACK SELECTION (IMAGE LEFT, TEXT RIGHT)             */}
          {/* ----------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-10 border-t border-white/[0.08]">
            {/* Left Image Column (55%) — Clean Screen, No Grey Border */}
            <div className="lg:col-span-7 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full overflow-hidden rounded-xl border border-white/10 shadow-xl">
                <Image
                  src="/images/case-studies/topplaced-ai/topplaced-track-selection-v2.webp"
                  alt="Interview Track Selection Interface"
                  width={1548}
                  height={1314}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>

            {/* Right Content Column (45%) */}
            <div className="lg:col-span-5 space-y-4 text-left order-1 lg:order-2">
              <span className="text-xs font-mono font-bold text-[#00BCD4] uppercase tracking-wider block">
                02 &bull; TRACK SELECTION &bull; PDF PAGE 6
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Interview Track Selection
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Supports distinct evaluation tracks rather than a single script: Technical Systems & Architecture, Behavioral & Leadership, Strategic Case, and Comprehensive Multi-Track simulations with selectable session durations.
              </p>

              {/* The Challenge Block */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#F87171] block">
                  The Challenge
                </span>
                <p className="text-xs text-[#D4D4D8] leading-relaxed">
                  Generic mock interview platforms ask standard trivia that fails to mirror the specialized expectations of distinct technical and behavioral loops.
                </p>
              </div>

              {/* How TopPlaced AI Addresses It */}
              <div className="p-3.5 rounded-xl bg-[#00BCD4]/[0.06] border border-[#00BCD4]/25 space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00BCD4] block">
                  How TopPlaced AI Addresses It
                </span>
                <p className="text-xs text-[#D4D4D8] leading-relaxed">
                  Separates evaluation into dedicated tracks with customized difficulty curves, duration timers (30 min / 45 min), and sample prompt previews before launching.
                </p>
              </div>

              {/* Relevant Capabilities */}
              <div className="space-y-2 pt-1 text-xs text-[#A1A1AA]">
                <div className="flex items-start gap-2">
                  <span className="text-[#00BCD4] font-bold">&bull;</span>
                  <span><strong className="text-white">Specialized Tracks:</strong> Technical Systems & Architecture, Behavioral Leadership, Strategic Case, and Multi-Track.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00BCD4] font-bold">&bull;</span>
                  <span><strong className="text-white">Scoring Preview:</strong> Transparent rubrics and evaluation weightings visible before starting.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00BCD4] font-bold">&bull;</span>
                  <span><strong className="text-white">Duration Timing:</strong> Choose between focused 30-minute or comprehensive 45-minute simulations.</span>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* FEATURE 03 — PERSONALIZED CONFIGURATION (TEXT LEFT, IMAGE RIGHT)  */}
          {/* ----------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-10 border-t border-white/[0.08]">
            {/* Left Content Column (45%) */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-xs font-mono font-bold text-[#00BCD4] uppercase tracking-wider block">
                03 &bull; GRANULAR CALIBRATION &bull; PDF PAGES 7–10
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Personalized Interview Configuration
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Granular pre-session wizard calibrating seniority levels, engineering domains, specialized tech stacks, and company-specific evaluation cultures.
              </p>

              {/* The Challenge Block */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#F87171] block">
                  The Challenge
                </span>
                <p className="text-xs text-[#D4D4D8] leading-relaxed">
                  An entry-level candidate and a staff architect face radically different evaluation standards; static question generators treat them identically.
                </p>
              </div>

              {/* How TopPlaced AI Addresses It */}
              <div className="p-3.5 rounded-xl bg-[#00BCD4]/[0.06] border border-[#00BCD4]/25 space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00BCD4] block">
                  How TopPlaced AI Addresses It
                </span>
                <p className="text-xs text-[#D4D4D8] leading-relaxed">
                  Calibrates every session to exact seniority tiers, functional engineering domains, and enterprise hiring presets before entering the simulation room.
                </p>
              </div>

              {/* Interactive Tabs to switch screenshot */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-mono text-white/70 block uppercase tracking-wider">
                  Select Calibration Step:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {(
                    [
                      { key: "seniority", label: "Seniority (Page 7)" },
                      { key: "role", label: "Domain & Role (Page 8)" },
                      { key: "company", label: "Target Company (Page 9)" },
                      { key: "preflight", label: "Session Launch (Page 10)" },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setConfigTab(tab.key)}
                      className={`px-3 py-2 rounded-lg text-xs font-mono font-bold transition-all text-left cursor-pointer border ${
                        configTab === tab.key
                          ? "bg-[#00BCD4] text-black border-[#00BCD4] shadow-md"
                          : "bg-white/[0.04] text-[#A1A1AA] hover:text-white border-white/10"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image Column (55%) — Clean Screen, No Grey Border */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full overflow-hidden rounded-xl border border-white/10 shadow-xl">
                <Image
                  src={
                    configTab === "seniority"
                      ? "/images/case-studies/topplaced-ai/topplaced-seniority-calibration-v2.webp"
                      : configTab === "role"
                      ? "/images/case-studies/topplaced-ai/topplaced-role-configuration-v2.webp"
                      : configTab === "company"
                      ? "/images/case-studies/topplaced-ai/topplaced-company-calibration-v2.webp"
                      : "/images/case-studies/topplaced-ai/topplaced-preflight-summary-v2.webp"
                  }
                  alt={`TopPlaced AI Configuration - ${configTab}`}
                  width={
                    configTab === "seniority" || configTab === "preflight"
                      ? 2672
                      : configTab === "role"
                      ? 2542
                      : 1862
                  }
                  height={1314}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* ORDER 6 — PRE-FLIGHT VERIFICATION & PROCTORING (WHITE BACKGROUND)     */}
      {/* ===================================================================== */}
      <section className="w-full bg-[#FFFFFF] text-[#101214] py-16 sm:py-20 lg:py-24 border-b border-[#E4E4E7] relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Section Header */}
          <div className="max-w-3xl text-left space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00838F]">
              INTEGRITY &amp; READINESS &bull; PART 2
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101214] tracking-tight">
              Pre-flight Verification &amp; Proctoring.
            </h2>
            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
              Pre-interview hardware checks, live camera framing, and transparent integrity controls designed to protect session validity and candidate trust.
            </p>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* FEATURE 04 — DEVICE READINESS (IMAGE LEFT, TEXT RIGHT)            */}
          {/* ----------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Image Column (55%) — Clean Screen, No Grey Border */}
            <div className="lg:col-span-7 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 shadow-xl">
                <Image
                  src={
                    mediaTab === "camera"
                      ? "/images/case-studies/topplaced-ai/topplaced-camera-verification-v2.webp"
                      : mediaTab === "readiness"
                      ? "/images/case-studies/topplaced-ai/topplaced-hardware-readiness-v2.webp"
                      : "/images/case-studies/topplaced-ai/topplaced-secondary-camera-v2.webp"
                  }
                  alt={`TopPlaced AI Hardware Verification - ${mediaTab}`}
                  width={
                    mediaTab === "camera"
                      ? 1558
                      : mediaTab === "readiness"
                      ? 1944
                      : 1422
                  }
                  height={1314}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>

            {/* Right Content Column (45%) */}
            <div className="lg:col-span-5 space-y-4 text-left order-1 lg:order-2">
              <span className="text-xs font-mono font-bold text-[#00838F] uppercase tracking-wider block">
                04 &bull; HARDWARE &amp; INTEGRITY SETUP &bull; PDF PAGES 11–13
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101214] tracking-tight">
                Device Readiness &amp; Verification
              </h3>
              <p className="text-sm text-[#52525B] leading-relaxed">
                Step-by-step browser media checks, live webcam framing guidance, and optional secondary smartphone camera pairing via peer-to-peer WebRTC QR-code.
              </p>

              {/* The Challenge Block */}
              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-600 block">
                  The Challenge
                </span>
                <p className="text-xs text-[#52525B] leading-relaxed">
                  Audio cutouts, poor camera angles, and unverified permissions cause technical derailments and interrupted sessions during high-stakes assessments.
                </p>
              </div>

              {/* How TopPlaced AI Addresses It */}
              <div className="p-3.5 rounded-xl bg-[#00838F]/[0.08] border border-[#00838F]/25 space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00838F] block">
                  How TopPlaced AI Addresses It
                </span>
                <p className="text-xs text-[#52525B] leading-relaxed">
                  Enforces an explicit pre-flight hardware gate validating media streams, face framing, and secondary camera pairing before any interview timer starts.
                </p>
              </div>

              {/* Interactive Tabs to switch screenshot (Light Styled) */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-mono text-slate-500 block uppercase tracking-wider">
                  Select Verification Step:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(
                    [
                      { key: "camera", label: "Camera (Page 12)" },
                      { key: "readiness", label: "Permissions (Page 11)" },
                      { key: "secondary", label: "3rd Eye (Page 13)" },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setMediaTab(tab.key)}
                      className={`px-3 py-2 rounded-lg text-xs font-mono font-bold transition-all text-center cursor-pointer border ${
                        mediaTab === tab.key
                          ? "bg-[#00838F] text-white border-[#00838F] shadow-sm"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* FEATURE 05 — PROCTORING & INTEGRITY (TEXT LEFT, IMAGE RIGHT)      */}
          {/* ----------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-10 border-t border-[#E4E4E7]">
            {/* Left Content Column (45%) */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-xs font-mono font-bold text-[#00838F] uppercase tracking-wider block">
                05 &bull; INTEGRITY &amp; PROCTORING &bull; PDF PAGE 14
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101214] tracking-tight">
                Explain &amp; Surface Proctoring Warnings
              </h3>
              <p className="text-sm text-[#52525B] leading-relaxed">
                Unexplained assessment interruptions damage candidate trust. TopPlaced incorporates a visible warning progression with actionable feedback and stated trigger reasons.
              </p>

              {/* The Challenge Block */}
              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-600 block">
                  The Challenge
                </span>
                <p className="text-xs text-[#52525B] leading-relaxed">
                  Opaque proctoring algorithms trigger silent disqualifications or sudden terminations, creating anxiety and destroying candidate trust.
                </p>
              </div>

              {/* How TopPlaced AI Addresses It */}
              <div className="p-3.5 rounded-xl bg-[#00838F]/[0.08] border border-[#00838F]/25 space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00838F] block">
                  How TopPlaced AI Addresses It
                </span>
                <p className="text-xs text-[#52525B] leading-relaxed">
                  Uses a visible, 3-stage warning progression (&quot;Warning 1 of 3&quot;) that names the specific anomaly detected (e.g. secondary monitor detected) and gives candidates a clear mechanism to resolve and continue.
                </p>
              </div>

              {/* Relevant Capabilities */}
              <div className="space-y-2 pt-1 text-xs text-[#52525B]">
                <div className="flex items-start gap-2">
                  <span className="text-[#00838F] font-bold">&bull;</span>
                  <span><strong className="text-[#101214]">Transparent Triggers:</strong> States exactly why the warning occurred (e.g. multiple display detection).</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00838F] font-bold">&bull;</span>
                  <span><strong className="text-[#101214]">Fair 3-Stage Progression:</strong> Non-punitive staged escalation with visible auto-dismiss timers.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00838F] font-bold">&bull;</span>
                  <span><strong className="text-[#101214]">Manual Continuation:</strong> Candidates verify adjustments and resume their session with confidence.</span>
                </div>
              </div>
            </div>

            {/* Right Image Column (55%) — Clean Screen, No Grey Border */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 shadow-xl">
                <Image
                  src="/images/case-studies/topplaced-ai/topplaced-proctoring-warning-v2.webp"
                  alt="Proctoring Warning Overlay Interface Screenshot"
                  width={2486}
                  height={1314}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* ORDER 7 — CONVERSATIONAL AI INTERVIEW (BLACK BACKGROUND)              */}
      {/* ===================================================================== */}
      <section className="w-full bg-[#000000] text-white py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Top Side-by-Side: IMAGE LEFT, TEXT RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Image Column (55%) — Clean Screen, No Grey Border */}
            <div className="lg:col-span-7 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/case-studies/topplaced-ai/topplaced-live-workspace-v2.webp"
                  alt="Full Multi-Surface Live Interview Workspace Interface"
                  width={2336}
                  height={1314}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>

            {/* Right Content Column (45%) */}
            <div className="lg:col-span-5 space-y-4 text-left order-1 lg:order-2">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00BCD4]">
                MULTI-SURFACE WORKSPACE &bull; PDF PAGES 15–16
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Conversational AI Meets Hands-On Evaluation.
              </h2>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                Purely text-based mock interviews miss real-time speaking and practical problem solving. The live interview is a multi-surface workspace designed to keep the candidate engaged while the assessment displays supporting tools and signals.
              </p>

              {/* The Challenge Block */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#F87171] block">
                  The Problem It Solves
                </span>
                <p className="text-xs text-[#D4D4D8] leading-relaxed">
                  Disconnecting technical coding from verbal explanation leads to disjointed evaluation. Candidates need to explain trade-offs while writing executable code.
                </p>
              </div>

              {/* How TopPlaced AI Addresses It */}
              <div className="p-3.5 rounded-xl bg-[#00BCD4]/[0.06] border border-[#00BCD4]/25 space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00BCD4] block">
                  Unified Multi-Surface Workflow
                </span>
                <p className="text-xs text-[#D4D4D8] leading-relaxed">
                  Integrates voice conversation, live transcript editing with STAR coaching, an in-browser code editor, candidate video preview, and background screen analysis.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Area: 6 Multi-Surface Workspace Component Cards */}
          <div className="space-y-6 pt-8 border-t border-white/[0.08]">
            <div className="text-left space-y-1">
              <h3 className="text-xl font-bold text-white tracking-tight">
                6 Multi-Surface Workspace Components
              </h3>
              <p className="text-xs text-[#A1A1AA]">
                Decomposition of the candidate-facing simulation room as documented on pages 15 and 16.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {WORKSPACE_COMPONENTS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0A0D12] border border-white/[0.08] hover:border-[#00BCD4]/50 transition-all space-y-3 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4] group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-[#00BCD4] px-2 py-0.5 rounded bg-white/[0.04] border border-white/10">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#00BCD4] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* ORDER 8 — PRODUCT ARCHITECTURE & ENGINEERING (WHITE BACKGROUND)       */}
      {/* ===================================================================== */}
      <section className="w-full bg-[#FFFFFF] text-[#101214] py-16 sm:py-20 lg:py-24 border-b border-[#E4E4E7] relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl text-left space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00838F]">
              IMPLEMENTATION THINKING &bull; PDF PAGE 17
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101214] tracking-tight">
              A Product Architecture That Supports the Journey.
            </h2>
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-[#52525B] space-y-1">
              <strong className="text-[#101214] block font-mono">Conceptual Architecture Disclosure:</strong>
              This represents a conceptual decomposition based on the UI surfaces and user journey. As explicitly documented in the product presentation, this is not an independently verified source-code or infrastructure diagram.
            </div>
          </div>

          {/* 6 Architecture Blocks in Light Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARCHITECTURE_BLOCKS.map((block, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#00838F]/40 transition-all space-y-3"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#00838F] block font-bold">
                  {block.category}
                </span>
                <h3 className="text-lg font-bold text-[#101214] tracking-tight">
                  {block.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Engineering Principles Ribbon from PDF */}
          <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
            <span className="text-[#101214] font-bold uppercase tracking-wider">
              Core Engineering Principles:
            </span>
            <div className="flex flex-wrap items-center gap-3 text-[#52525B]">
              <span className="text-[#00838F] font-semibold">&bull; Modular Feature Boundaries</span>
              <span className="text-[#00838F] font-semibold">&bull; Explicit State Transitions</span>
              <span className="text-[#00838F] font-semibold">&bull; Permission-First UX</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* ORDER 9 — FROM DISCONNECTED PRACTICE... (BLACK BACKGROUND)            */}
      {/* ===================================================================== */}
      <section className="w-full bg-[#000000] text-white py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl text-left space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00BCD4]">
              DELIVERED VALUE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Disconnected Practice to One Connected Workflow.
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              A product experience designed to make realistic, structured interview preparation more accessible across the full candidate journey.
            </p>
          </div>

          {/* 6 Value Cards on Black */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUE_POINTS.map((pt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0A0D12] border border-white/[0.08] hover:border-[#00BCD4]/50 transition-all space-y-2.5"
              >
                <div className="flex items-center gap-2 text-[#00BCD4]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {pt.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed pl-6">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Sourced Disclaimer Notice directly from PDF Pages 2 & 20 */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-[#A1A1AA] leading-relaxed">
            <strong className="text-white">Sourced Presentation Notice:</strong> Screens document interface features; actual implementation stack, model, security claims, and outcomes require separate verification. Actual improvement in hiring outcomes has not been measured here.
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* ORDER 10 — EXPLORE MORE CASE STUDIES (WHITE BACKGROUND)               */}
      {/* ===================================================================== */}
      <section className="w-full bg-[#FFFFFF] text-[#101214] py-16 sm:py-20 lg:py-24 border-b border-[#E4E4E7] relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section Header */}
          <div className="space-y-2 max-w-3xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00838F]">
              EXPLORE MORE CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101214] tracking-tight">
              Explore More Case Studies.
            </h2>
            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
              Discover how we turn complex business challenges into practical reporting and digital solutions across real-world projects.
            </p>
          </div>

          {/* Vertically Stacked Full-Width Cards */}
          <div className="space-y-6 lg:space-y-8 pt-2">
            {RELATED_STUDIES.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* ORDER 11 — FINAL CTA (BLACK BACKGROUND WITH CYAN GLOW)                */}
      {/* ===================================================================== */}
      <section className="w-full py-20 sm:py-24 lg:py-28 bg-[#000000] text-white relative overflow-hidden text-center">
        {/* Ambient Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0, 188, 212, 0.15) 0%, rgba(8, 127, 165, 0.05) 50%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Build Your Next AI Product With Clarity.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            Want to build an AI training platform, SaaS product, workflow-driven application, or feature-rich web experience? Let&apos;s discuss the user problem, scope, architecture, and delivery plan.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact#contact-hero"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#050505] font-extrabold text-sm sm:text-base tracking-tight transition-all duration-200 shadow-xl shadow-[#00BCD4]/30 hover:shadow-2xl hover:shadow-[#00BCD4]/40 hover:-translate-y-0.5 active:scale-95"
            >
              <span>Send an Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/15 transition-all duration-200"
            >
              <span>All Case Studies</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
