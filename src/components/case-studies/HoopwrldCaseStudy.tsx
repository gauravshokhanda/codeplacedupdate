"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Gamepad2,
} from "lucide-react";

// =============================================================================
// VERIFIED DATA DEFINITIONS (AUTHENTIC CLIENT PROJECT MATERIAL)
// =============================================================================

const OVERVIEW_OUTCOMES = [
  {
    number: "01",
    title: "Unified Reporting Across Touchpoints",
    description:
      "Reconciled server-side game events, web telemetry, user authentication, and multi-channel marketing into a single coherent data architecture.",
  },
  {
    number: "02",
    title: "Actionable Insights for Growth",
    description:
      "Clear visibility into game starts, completion ratios, and mode segmentation allows the product team to optimize gameplay balance and retention flow.",
  },
  {
    number: "03",
    title: "Player-First Data Experience",
    description:
      "First-Touch Cohorts and mobile-accessible dashboards ensure both leadership and engineering monitor real player habits as they happen.",
  },
];

const CHALLENGES = [
  {
    number: "01",
    title: "Inconsistent Metrics",
    description:
      "GA4 client events and PostgreSQL records diverged, producing conflicting start and completion counts.",
  },
  {
    number: "02",
    title: "Fragmented Reporting",
    description:
      "Evaluating daily game health required navigating multiple scattered dashboard tabs and manual database queries.",
  },
  {
    number: "03",
    title: "Unclear Retention",
    description:
      "Overlapping time windows and undefined user cohorts obscured genuine drop-off points during player onboarding.",
  },
  {
    number: "04",
    title: "Dashboard Complexity",
    description:
      "Duplicate charts and mixed ad data created confusion over which performance indicators drove actual game decisions.",
  },
];

const DAILY_PULSE_BENEFITS = [
  "Previous-day game starts and completions",
  "Completion rate percentage and trend line",
  "Unique player counts and daily return rates",
  "Clerk account registrations and mode splits",
];

const GAMEPLAY_CAPABILITIES = [
  "Authoritative PostgreSQL database views for starts and completions",
  "Direct mode-level comparison between Open Gym and The League",
  "First-Touch Cohort tracking following player progression",
  "Weekly game-health indicators and session duration tracking",
];

const SOLUTION_PILLARS = [
  {
    number: "01",
    title: "Mobile-First Daily Pulse",
    description:
      "Engineered specifically for executive smartphones to review yesterday's starts, completions, conversion rate, and user registrations in seconds without opening desktop tools.",
  },
  {
    number: "02",
    title: "Gameplay Analytics",
    description:
      "Restructured around PostgreSQL reporting views so product engineers can evaluate mode health (Open Gym vs The League), completion drop-off, and recurring player activity.",
  },
  {
    number: "03",
    title: "Unified Performance Reporting",
    description:
      "Decoupled marketing traffic into dedicated platform views for Google Ads, Meta, TikTok, and Reddit, protecting gameplay metrics from advertising clutter.",
  },
];

const RESULTS_ITEMS = [
  {
    title: "More Consistent Reporting",
    description:
      "Eliminated discrepancy between GA4 events and backend records by anchoring all gameplay analytics in authoritative PostgreSQL views.",
  },
  {
    title: "Better Visibility Into Gameplay",
    description:
      "Immediate insight into starts, completions, and completion rates segmented by Open Gym, The League, and daily challenge modes.",
  },
  {
    title: "Clearer Player Engagement Analysis",
    description:
      "First-Touch Cohort modeling clarifies true drop-off points during initial gameplay and tracks habit formation over multi-week windows.",
  },
  {
    title: "Easier Access to Key Metrics",
    description:
      "Executive leadership can assess previous-day performance on mobile in seconds, removing reliance on ad-hoc engineering queries.",
  },
  {
    title: "More Structured Decision-Making",
    description:
      "Common metric definitions across teams enable confident decisions on feature releases, game balance, and acquisition spend.",
  },
];

const TECH_ITEMS = [
  { name: "PostgreSQL", role: "Gameplay Source of Truth" },
  { name: "Looker Studio", role: "Mobile Daily Pulse & BI Layer" },
  { name: "Google Analytics 4", role: "Web Telemetry & Discovery" },
  { name: "Clerk", role: "User Authentication & Accounts" },
  { name: "Google Ads", role: "Search Acquisition Telemetry" },
  { name: "Windsor.ai", role: "Multi-Platform Marketing Pipeline" },
];

export function HoopwrldCaseStudy() {
  return (
    <div className="bg-[#000000] text-white selection:bg-[#00BCD4] selection:text-black font-sans antialiased overflow-x-hidden">
      {/* ===================================================================== */}
      {/* SECTION 1 — PREMIUM HERO (TWO-COLUMN CINEMATIC EDITORIAL — 43% / 57%) */}
      {/* ===================================================================== */}
      <section className="relative bg-[#000000] pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20 border-b border-white/[0.08] overflow-hidden flex items-center min-h-[660px] lg:min-h-[740px]">
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute top-0 right-0 w-full lg:w-2/3 h-full pointer-events-none opacity-20 -z-0"
          style={{
            background:
              "radial-gradient(circle at 75% 35%, rgba(0, 188, 212, 0.15) 0%, rgba(8, 127, 165, 0.05) 50%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-12">
            {/* LEFT COLUMN — 43% EDITORIAL CONTENT */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full lg:w-[43%] flex-none space-y-6 text-left z-10"
            >
              {/* Eyebrow Label */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#00BCD4]">
                  CASE STUDY / HOOPWRLD
                </span>
                <span className="h-px w-10 bg-[#00BCD4]/40" />
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-black tracking-tight leading-[1.1] text-white">
                Turning Gameplay Data Into{" "}
                <span className="text-[#00BCD4] block">
                  Decisions That Drive Growth.
                </span>
              </h1>

              {/* Supporting Description */}
              <p className="text-sm sm:text-base lg:text-[17px] text-[#A1A1AA] leading-relaxed max-w-xl">
                Bringing gameplay, player activity, retention, and growth reporting into one clearer analytics experience for Hoopwrld.
              </p>

              {/* Game Badge Pill */}
              <div className="pt-1">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#D4D4D8]">
                  <Gamepad2 className="w-3.5 h-3.5 text-[#00BCD4]" />
                  <span className="tracking-wide uppercase font-semibold">BROWSER-BASED BASKETBALL GAME</span>
                </div>
              </div>

              {/* Bottom Tags Strip */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-3 text-xs font-mono font-semibold text-[#A1A1AA]">
                <span className="text-white tracking-wider">GAMING</span>
                <span className="text-white/20">|</span>
                <span className="text-white tracking-wider">GAMEPLAY ANALYTICS</span>
                <span className="text-white/20">|</span>
                <span className="text-[#00BCD4] tracking-wider">MOBILE-FIRST REPORTING</span>
              </div>
            </motion.div>

            {/* RIGHT COLUMN — 57%: PROMINENT PHOTOREALISTIC LAPTOP IN BASKETBALL COURT ENVIRONMENT */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="w-full lg:w-[57%] flex-none relative flex items-center justify-center pt-4 lg:pt-0"
            >
              {/* Soft Cinematic Background Aura */}
              <div
                className="absolute top-[35%] right-[20%] -translate-y-1/2 w-[75%] h-[75%] bg-[radial-gradient(ellipse_at_center,rgba(0,188,212,0.14)_0%,rgba(8,127,165,0.04)_50%,transparent_70%)] blur-3xl -z-10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Large Photorealistic Laptop Displaying Authentic AFTER Dashboard with Basketball */}
              <div className="relative w-full max-w-[580px] sm:max-w-[700px] md:max-w-[780px] lg:max-w-[880px] xl:max-w-[940px] aspect-[2200/1350] select-none drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
                <Image
                  src="/images/case-studies/hoopwrld-hero-basketball-laptop-perfect.webp"
                  alt="Hoopwrld Gameplay and Player Analytics Dashboard on Photorealistic Laptop in Basketball Court Environment"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 57vw, 940px"
                  className="object-contain object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 2 — PROJECT OVERVIEW (WHITE BACKGROUND — EDITORIAL DIVIDERS) */}
      {/* ===================================================================== */}
      <section className="bg-[#FFFFFF] text-[#101214] py-16 sm:py-20 border-b border-[#E4E4E7]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Eyebrow & Heading (36–42px) */}
          <div className="space-y-2 max-w-3xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#087FA5]">
              PROJECT OVERVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#101214] tracking-tight leading-tight">
              One Clear View of the Player Journey.
            </h2>
          </div>

          {/* Two-Column Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Project Narrative */}
            <div className="lg:col-span-6 space-y-4 text-base sm:text-[17px] text-[#3F3F46] leading-relaxed text-left">
              <p>
                <strong className="text-[#101214] font-semibold">Hoopwrld</strong> is an early-stage browser-based basketball gaming platform offering two distinct game experiences: <strong className="text-[#101214]">Open Gym</strong> and <strong className="text-[#101214]">The League</strong>.
              </p>
              <p>
                As player traffic scaled, the leadership team needed reliable visibility into how players initiated sessions, finished matches, returned for subsequent play, and responded to multi-platform ad spend across Google Ads, Meta, TikTok, and Reddit.
              </p>
              <p className="text-sm text-[#71717A] pt-1">
                CodePlaced was engaged to resolve disparate reporting across game servers, frontend telemetry, user authentication, and marketing channels into a dependable business intelligence system.
              </p>
            </div>

            {/* Right Column: Three Project Objectives with Thin Dividers */}
            <div className="lg:col-span-6 divide-y divide-[#E4E4E7] border-y border-[#E4E4E7]">
              {OVERVIEW_OUTCOMES.map((item, idx) => (
                <div key={idx} className="py-4 space-y-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#087FA5]">
                      {item.number}
                    </span>
                    <h3 className="text-base font-bold text-[#101214] tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 3 — THE CHALLENGE (BLACK BACKGROUND — IMAGE-LED PRESENTATION) */}
      {/* ===================================================================== */}
      <section className="bg-[#000000] text-white py-16 sm:py-20 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Top: Heading and Explanation */}
          <div className="space-y-3 max-w-3xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00BCD4]">
              THE CHALLENGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight">
              Multiple Data Sources. Conflicting Answers.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              Hoopwrld&apos;s data was divided across multiple platforms: PostgreSQL for game events, GA4 for web behavior, Clerk for accounts, and various ad channels.
            </p>
          </div>

          {/* Middle: Four Challenges in a Compact Horizontal Row (Minimal Separators, No Heavy Cards) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/10 text-left">
            {CHALLENGES.map((ch, idx) => (
              <div key={idx} className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-[#00BCD4]">
                  {ch.number}
                </span>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  {ch.title}
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {ch.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom: The Real BEFORE Dashboard Screenshot in Wide Visual Frame */}
          <div className="space-y-3 text-left">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#EF4444] font-bold">
                BEFORE &bull; FRAGMENTED REPORTING &amp; METRIC DISCREPANCIES
              </span>
              <span className="text-[#71717A] hidden sm:inline">
                Original Legacy Executive Report
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#07090D] shadow-2xl overflow-hidden">
              <div className="relative aspect-[1024/584] w-full bg-black">
                <Image
                  src="/images/case-studies/hoopwrld-challenge-before.webp"
                  alt="Hoopwrld Original Executive Report Showing Metric Discrepancies"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1240px) 100vw, 1240px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 4 — THE SOLUTION (WHITE BACKGROUND — TWO VISUAL STORIES) */}
      {/* ===================================================================== */}
      <section className="bg-[#FFFFFF] text-[#101214] py-16 sm:py-20 border-b border-[#E4E4E7]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Eyebrow & Heading */}
          <div className="space-y-2 max-w-3xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#087FA5]">
              THE SOLUTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#101214] tracking-tight leading-tight">
              A Reporting System Built Around Better Questions.
            </h2>
            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
              CodePlaced restructured Hoopwrld&apos;s analytics workflow into two dedicated experiences: a lightweight mobile pulse for daily oversight and an in-depth gameplay portal for product decisions.
            </p>
          </div>

          {/* STORY 1 — MOBILE-FIRST DAILY PULSE (45% / 55% SPLIT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
            {/* Left 45%: Label, Heading, Explanation, 4 Benefits */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-xs font-mono font-bold text-[#087FA5] px-2.5 py-1 rounded bg-[#087FA5]/10 border border-[#087FA5]/25 inline-block">
                STORY 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101214] tracking-tight">
                Mobile-First Daily Pulse
              </h3>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                A custom Looker Studio dashboard built from scratch specifically for leadership smartphones. It presents the previous day&apos;s essential metrics in seconds:
              </p>
              <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#27272A] font-medium">
                {DAILY_PULSE_BENEFITS.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#087FA5] shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right 55%: Real Mobile Reporting Image */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[1024/579] w-full rounded-2xl overflow-hidden bg-white shadow-xl border border-[#E4E4E7]">
                <Image
                  src="/images/case-studies/hoopwrld-solution-mobile.webp"
                  alt="Hoopwrld Mobile-First Gameplay Reporting Visual"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </div>
          </div>

          {/* Subtle Horizontal Divider Between Stories */}
          <div className="border-t border-[#E4E4E7]" />

          {/* STORY 2 — GAMEPLAY ANALYTICS & RETENTION (REVERSED: IMAGE LEFT / TEXT RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Real Gameplay Analytics Screenshot (Full 5-Panel Overview) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[912/1024] w-full max-w-[560px] mx-auto rounded-2xl border border-[#E4E4E7] bg-white shadow-xl overflow-hidden">
                <Image
                  src="/images/case-studies/hoopwrld-solution-gameplay.webp"
                  alt="Hoopwrld Gameplay Metrics and Retention Reporting Dashboard"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Column: Heading, Explanation, Key Capabilities */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-xs font-mono font-bold text-[#087FA5] px-2.5 py-1 rounded bg-[#087FA5]/10 border border-[#087FA5]/25 inline-block">
                STORY 02
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101214] tracking-tight">
                Gameplay Analytics &amp; Player Retention
              </h3>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                Standardized on authoritative database views rather than client-side event counters. The system tracks session starts, finishes, completion rates, and player progression across Open Gym and The League.
              </p>
              <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#27272A] font-medium">
                {GAMEPLAY_CAPABILITIES.map((cap, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#087FA5] shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 5 — BEFORE VS. AFTER (BALANCED COMPARISON LAYOUT) */}
      {/* ===================================================================== */}
      <section className="bg-[#000000] text-white py-16 sm:py-20 lg:py-24 border-b border-white/[0.08] relative overflow-hidden">
        {/* Subtle ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[500px] pointer-events-none opacity-20 -z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 188, 212, 0.15) 0%, rgba(8, 127, 165, 0.05) 50%, transparent 70%)",
          }}
        />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="space-y-3 max-w-3xl text-left">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#00BCD4] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00BCD4]">
                TRANSFORMATION OVERVIEW
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
              From Fragmented Reports to a Clearer Picture.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              A structured comparison showing how Hoopwrld transitioned from unaligned metrics across multiple platforms to a unified, decision-ready analytics experience.
            </p>
          </div>

          {/* Balanced Side-by-Side Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* LEFT: BEFORE DASHBOARD */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/10 hover:border-red-500/40 bg-[#07090D] shadow-2xl overflow-hidden transition-all duration-300">
              {/* Card Header with Solid Red Pill */}
              <div className="px-6 py-4 flex items-center justify-between border-b border-white/[0.06]">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#EF4444] text-white">
                  BEFORE
                </span>
                <span className="text-xs font-mono text-[#71717A] hidden sm:inline">
                  Legacy Architecture
                </span>
              </div>

              {/* Front-Facing Laptop Mockup */}
              <div className="relative aspect-[2000/1260] w-full p-3 sm:p-5 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/case-studies/hoopwrld-laptop-before-front.webp"
                    alt="Legacy Hoopwrld Report with Metric Discrepancies on Front-Facing Laptop Mockup"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Summary Caption Underneath */}
              <div className="p-6 bg-[#0A0D12] border-t border-white/[0.08] space-y-2 text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Fragmented And Manual Reports
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Data spread across multiple sources with inconsistent metrics, making it hard to get a clear view of player performance.
                </p>
              </div>
            </div>

            {/* RIGHT: AFTER DASHBOARD */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#00BCD4]/30 hover:border-[#00BCD4]/60 bg-[#07090D] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,188,212,0.08)] overflow-hidden transition-all duration-300">
              {/* Card Header with Solid Cyan Pill */}
              <div className="px-6 py-4 flex items-center justify-between border-b border-white/[0.06]">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#00BCD4] text-black">
                  AFTER
                </span>
                <span className="text-xs font-mono text-[#00BCD4]/70 hidden sm:inline">
                  Unified Analytics Experience
                </span>
              </div>

              {/* Matching Front-Facing Laptop Mockup */}
              <div className="relative aspect-[2000/1260] w-full p-3 sm:p-5 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/case-studies/hoopwrld-laptop-after-front.webp"
                    alt="Hoopwrld Standardized Looker Studio Player Analytics Dashboard on Matching Front-Facing Laptop"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Summary Caption Underneath */}
              <div className="p-6 bg-[#0A0D12] border-t border-white/[0.08] space-y-2 text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-[#00BCD4] tracking-tight">
                  A Unified, Interactive Dashboard
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Real-time, easy-to-understand reporting with key gameplay metrics, player cohorts, and growth insights in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 6 — BUILT FOR THE PEOPLE WHO USE THE DATA (EDITORIAL COLUMNS) */}
      {/* ===================================================================== */}
      <section className="bg-[#FFFFFF] text-[#101214] py-16 sm:py-20 border-b border-[#E4E4E7]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2 max-w-3xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#087FA5]">
              TAILORED VIEWS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#101214] tracking-tight leading-tight">
              Built for the People Who Use the Data.
            </h2>
            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
              Different teams need different angles on the data. Rather than forcing everyone into one bloated dashboard, we structured three focused reporting surfaces.
            </p>
          </div>

          {/* Three Premium Editorial Columns (No generic gray boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-left pt-4">
            {SOLUTION_PILLARS.map((pillar, idx) => (
              <div key={idx} className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#087FA5]">
                  {pillar.number}
                </span>
                <h3 className="text-xl font-bold text-[#101214] tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#52525B] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 7 — RESULTS (BLACK BACKGROUND — 3 TOP / 2 BOTTOM HIERARCHY) */}
      {/* ===================================================================== */}
      <section className="bg-[#000000] text-white py-16 sm:py-20 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3 max-w-3xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00BCD4]">
              RESULTS &amp; OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight">
              Reliable Reporting. Clearer Decisions.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              By shifting from conflicted exports to standardized database views, Hoopwrld gained reliable visibility into every stage of their player journey.
            </p>
          </div>

          {/* Clean 3 Columns Top / 2 Columns Bottom Grid in #0C1014 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
            {RESULTS_ITEMS.map((res, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0C1014] border border-white/10 text-left space-y-3 flex flex-col justify-between hover:border-[#00BCD4]/30 transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {res.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {res.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 8 — TECHNOLOGY BEHIND THE SOLUTION (COMPACT WHITE SECTION) */}
      {/* ===================================================================== */}
      <section className="bg-[#FFFFFF] text-[#101214] py-14 sm:py-16 border-b border-[#E4E4E7]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2 max-w-3xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#087FA5]">
              TECHNOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101214] tracking-tight">
              Technology Behind the Solution.
            </h2>
            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
              A curated technology stack connecting production gameplay databases, user authentication, web telemetry, and multi-channel acquisition pipelines.
            </p>
          </div>

          {/* Compact 3-Column Technology Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH_ITEMS.map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F6F7F8] border border-[#E4E4E7] space-y-1 text-left"
              >
                <div className="text-base font-bold text-[#101214] tracking-tight">
                  {tech.name}
                </div>
                <div className="text-xs font-mono text-[#087FA5]">
                  {tech.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 9 — EXPLORE MORE CASE STUDIES (FEATURED TUITIONSTIME CARD) */}
      {/* ===================================================================== */}
      <section className="bg-[#FFFFFF] text-[#101214] py-16 sm:py-20 border-b border-[#E4E4E7]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2 max-w-3xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#087FA5]">
              EXPLORE MORE CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101214] tracking-tight">
              Explore More Case Studies.
            </h2>
            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
              Discover how we turn complex business challenges into practical digital solutions.
            </p>
          </div>

          {/* Exact Featured Card Design from the Main Case Studies Page */}
          <Link
            href="/case-studies/tuitionstime"
            aria-label="View case study: Tuitionstime"
            className="block relative rounded-[20px] border border-[#00C7E8]/25 hover:border-[#00C7E8]/60 bg-[#050505] overflow-hidden min-h-[420px] lg:h-[450px] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(0,199,232,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(0,199,232,0.14)] transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C7E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            {/* Product Imagery (Right-Aligned, Subtle Hover Shift, Seamlessly Blended into Dark Card) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/case-studies/tuitionstime-featured-flagship.webp"
                alt="Tuitionstime EdTech Marketplace Platform by CodePlaced"
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
                  <span>FULL-STACK WEB &amp; MOBILE PLATFORM</span>
                </div>

                {/* Brand Logo & Name */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00C7E8]/15 border border-[#00C7E8]/35 flex items-center justify-center text-[#00C7E8]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    Tuitionstime
                  </span>
                </div>

                {/* Title with Cyan Highlight */}
                <h3 className="text-2xl sm:text-3xl lg:text-[30px] xl:text-[32px] font-extrabold text-white tracking-tight leading-[1.18] max-w-[460px]">
                  Engineering a Complete{" "}
                  <span className="text-[#00C7E8]">EdTech Marketplace</span>
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-sm sm:max-w-md">
                  From tutor discovery to classes, bookings, payments, and learning experiences — a connected digital platform built for growth.
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Stripe", "AWS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00C7E8] text-[#00C7E8] group-hover:bg-[#00C7E8] group-hover:text-black font-mono text-xs font-bold transition-all duration-200 shadow-sm shadow-[#00C7E8]/10">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Bottom Row: 3 Verified Metrics Separated by Subtle Vertical Dividers */}
              <div className="pt-6 mt-4 border-t border-white/[0.08] grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
                {[
                  { value: "10K+", label: "Active Students" },
                  { value: "2K+", label: "Expert Tutors" },
                  { value: "50K+", label: "Classes Completed" },
                ].map((metric, idx) => (
                  <div
                    key={metric.label}
                    className={`${
                      idx > 0 ? "border-l border-white/[0.08] pl-3 sm:pl-6" : ""
                    } text-left`}
                  >
                    <div className="text-lg sm:text-xl lg:text-2xl font-black text-white font-mono tracking-tight">
                      {metric.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-[#A1A1AA] font-mono uppercase tracking-wide line-clamp-1 mt-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECTION 10 — FINAL CTA (BLACK BACKGROUND) */}
      {/* ===================================================================== */}
      <section className="bg-[#000000] text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 relative z-10">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00BCD4]">
              LET&apos;S TALK ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Your Data Should Tell One Clear Story.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
              From fragmented reporting to meaningful insights, we help businesses build analytics systems they can actually use.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            <Link
              href="/contact#contact-hero"
              className="px-7 py-3 rounded-full text-sm font-mono font-bold text-black bg-[#00BCD4] hover:bg-[#00C7E8] transition-all shadow-lg shadow-[#00BCD4]/25 hover:shadow-[#00BCD4]/40 cursor-pointer"
            >
              Start a Project &rarr;
            </Link>
            <Link
              href="/services"
              className="px-7 py-3 rounded-full text-sm font-mono font-bold text-white bg-white/[0.05] border border-white/20 hover:border-[#00BCD4] hover:text-[#00BCD4] transition-all cursor-pointer"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
