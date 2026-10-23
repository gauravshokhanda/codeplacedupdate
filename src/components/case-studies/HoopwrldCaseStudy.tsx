"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
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
      {/* SECTION 1 — PREMIUM HERO (STRONG EDITORIAL SPLIT — 43% / 57%) */}
      {/* ===================================================================== */}
      <section className="relative bg-[#000000] pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 border-b border-white/[0.08] overflow-hidden flex items-center min-h-[660px] lg:min-h-[720px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-14">
            {/* LEFT COLUMN — 43% EDITORIAL TYPOGRAPHY */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-[43%] flex-none space-y-6 text-left"
            >
              {/* Eyebrow with Subtle Rule */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#00BCD4]">
                  CASE STUDY / HOOPWRLD
                </span>
                <span className="h-px w-10 bg-[#00BCD4]/40" />
              </div>

              {/* Main Headline (54–64px on desktop, tight leading, max-width around 580px, 2 intentional balanced lines) */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-black tracking-tight leading-[1.08] max-w-[580px]">
                <span className="text-white block">Turning Gameplay Data Into</span>
                <span className="text-[#00BCD4] block">Decisions That Drive Growth.</span>
              </h1>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl">
                Bringing gameplay, player activity, retention, and growth reporting into one clearer analytics experience for Hoopwrld.
              </p>

              {/* Game Badge */}
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wide uppercase bg-white/[0.04] border border-white/10 text-white/90">
                  <span className="text-sm">🎮</span>
                  <span>Browser-Based Basketball Game</span>
                </div>
              </div>

              {/* Compact Project Metadata Row */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono font-bold uppercase tracking-wider text-[#71717A]">
                <span className="text-white hover:text-[#00BCD4] transition-colors">GAMING</span>
                <span className="text-white/20 select-none">|</span>
                <span className="text-white hover:text-[#00BCD4] transition-colors">GAMEPLAY ANALYTICS</span>
                <span className="text-white/20 select-none">|</span>
                <span className="text-[#00BCD4]">MOBILE-FIRST REPORTING</span>
              </div>
            </motion.div>

            {/* RIGHT COLUMN — 57%: LARGE REALISTIC LAPTOP DOMINATING THE VISUAL AREA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-[57%] flex-none relative"
            >
              <div className="relative w-full aspect-[1920/1330] select-none">
                <Image
                  src="/images/case-studies/hoopwrld-hero-laptop-cinematic.webp"
                  alt="Hoopwrld Analytics Platform on Realistic Laptop"
                  fill
                  priority
                  className="object-contain object-center scale-100 sm:scale-105 lg:scale-110 xl:scale-115 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 57vw"
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
              <div className="relative aspect-[1024/572] w-full bg-black">
                <Image
                  src="/images/case-studies/hoopwrld-challenge-before.png"
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
              <div className="relative aspect-[1024/765] w-full rounded-2xl overflow-hidden bg-white shadow-xl border border-[#E4E4E7]">
                <Image
                  src="/images/case-studies/hoopwrld-solution-mobile.png"
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
            {/* Left Column: Real Gameplay Analytics Screenshot */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[1024/572] w-full rounded-2xl border border-[#E4E4E7] bg-white shadow-xl overflow-hidden">
                <Image
                  src="/images/case-studies/hoopwrld-solution-gameplay.png"
                  alt="Hoopwrld Gameplay Metrics and Retention Reporting Dashboard"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>

            {/* Right Column: Heading, Explanation, Key Capabilities */}
            <div className="lg:col-span-5 space-y-4 text-left">
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
      {/* SECTION 5 — BEFORE VS. AFTER (AUTHENTIC COMPARISON VISUAL) */}
      {/* ===================================================================== */}
      <section className="bg-[#000000] text-white py-16 sm:py-20 border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3 max-w-3xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00BCD4]">
              TRANSFORMATION OVERVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight">
              From Fragmented Reports to a Clearer Picture.
            </h2>
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              A structured contrast highlighting how Hoopwrld shifted from unaligned metrics to reliable, decision-ready analytics.
            </p>
          </div>

          {/* Centered Before vs After Main Comparison Visual */}
          <div className="max-w-[1120px] mx-auto">
            <div className="relative aspect-[1024/571] w-full rounded-2xl border border-white/10 bg-[#07090D] shadow-2xl overflow-hidden select-none">
              <Image
                src="/images/case-studies/hoopwrld-before-after-supplied.webp"
                alt="Hoopwrld Before vs After Reporting Transformation"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1200px) 100vw, 1120px"
              />
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

          {/* Premium Black Featured Card Matching the Main Case Studies Page */}
          <div className="relative rounded-[20px] border border-[#00BCD4]/30 hover:border-[#00BCD4]/60 bg-[#000000] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(0,188,212,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_rgba(0,188,212,0.14)] transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-12">
              {/* Left Column: 45% Content */}
              <div className="lg:col-span-5 space-y-5 text-left z-10">
                <div className="space-y-3">
                  {/* Eyebrow */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4] w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] animate-pulse" />
                    <span>FEATURED CASE STUDY</span>
                  </div>

                  {/* Brand */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#00BCD4]/15 border border-[#00BCD4]/35 flex items-center justify-center text-[#00BCD4]">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                      Tuitionstime
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-[1.18]">
                    Engineering a Complete{" "}
                    <span className="text-[#00BCD4]">EdTech Marketplace</span>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    From tutor discovery to classes, bookings, payments, and learning experiences — a connected digital platform built for growth.
                  </p>
                </div>

                {/* Verified Metrics Row */}
                <div className="pt-2 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-white/10">
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-white font-mono">
                      10K+
                    </div>
                    <div className="text-[11px] text-[#A1A1AA] font-medium">
                      Active Students
                    </div>
                  </div>
                  <div className="border-l border-white/15 pl-6 sm:pl-8">
                    <div className="text-xl sm:text-2xl font-black text-white font-mono">
                      2K+
                    </div>
                    <div className="text-[11px] text-[#A1A1AA] font-medium">
                      Expert Tutors
                    </div>
                  </div>
                  <div className="border-l border-white/15 pl-6 sm:pl-8">
                    <div className="text-xl sm:text-2xl font-black text-white font-mono">
                      50K+
                    </div>
                    <div className="text-[11px] text-[#A1A1AA] font-medium">
                      Classes Completed
                    </div>
                  </div>
                </div>

                {/* Outlined Cyan CTA Button */}
                <div className="pt-2">
                  <Link
                    href="/case-studies/tuitionstime"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#00BCD4] text-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-black font-mono text-xs font-bold transition-all duration-200 shadow-sm"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 55% Tuitionstime Product Artwork */}
              <div className="lg:col-span-7 relative z-10">
                <div className="relative w-full aspect-[2040/1380] rounded-xl overflow-hidden select-none">
                  <Image
                    src="/images/case-studies/tuitionstime-featured-flagship.webp"
                    alt="Tuitionstime EdTech Marketplace Platform by CodePlaced"
                    fill
                    className="object-contain object-center transition-transform duration-500 ease-out group-hover:-translate-y-1"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </div>
            </div>
          </div>
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
