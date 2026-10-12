"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Users,
  GraduationCap,
  Sparkles,
  BookOpen,
  FileText,
  Clock,
  Calendar,
  Layers,
  ShieldCheck,
  TrendingUp,
  Workflow,
  Search,
  ExternalLink,
  ChevronRight,
  Star,
  Award,
  Check,
  BarChart3,
  Building2,
  Bot,
  Activity,
} from "lucide-react";

export function TuitionstimeCaseStudy() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A] selection:bg-[#FEF08A] selection:text-[#0F172A] font-sans antialiased overflow-x-hidden">
      {/* ========================================================================= */}
      {/* HERO — ENHANCED EDITORIAL HERO WITH AUTHENTIC TUITIONSTIME PERSON & MOTION*/}
      {/* ========================================================================= */}
      <section className="relative w-full pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 bg-gradient-to-br from-[#FBBF24] via-[#FACC15] to-[#EAB308] text-[#0F172A] overflow-hidden">
        <style>{`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes floatMedium {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(8px); }
          }
          @keyframes floatGentle {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          @keyframes pulseRing {
            0%, 100% { transform: scale(1); opacity: 0.25; }
            50% { transform: scale(1.05); opacity: 0.45; }
          }
          @keyframes heroFadeIn {
            0% { opacity: 0; transform: scale(0.96) translateY(12px); }
            100% { opacity: 1; transform: scale(1) translateY(0px); }
          }
          .hero-person-anim {
            animation: heroFadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .hero-badge-1 {
            animation: floatSlow 5.2s ease-in-out infinite;
          }
          .hero-badge-2 {
            animation: floatMedium 5.8s ease-in-out 0.6s infinite;
          }
          .hero-badge-3 {
            animation: floatGentle 4.8s ease-in-out 1.2s infinite;
          }
          .hero-badge-4 {
            animation: floatSlow 6.2s ease-in-out 1.8s infinite;
          }
          .hero-ring-anim {
            animation: pulseRing 8s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-person-anim,
            .hero-badge-1,
            .hero-badge-2,
            .hero-badge-3,
            .hero-badge-4,
            .hero-ring-anim {
              animation: none !important;
              transform: none !important;
            }
          }
        `}</style>

        <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Editorial Headline, Narrative, CTA Buttons, and Metrics Strip */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              {/* Breadcrumbs & Client Meta Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#78350F] hover:text-[#0F172A] transition-colors"
                >
                  <span>CASE STUDIES</span>
                  <span>/</span>
                </Link>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F172A] text-white text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
                  <Image
                    src="/images/case-studies/tuitionstime/tuitionstime-logo.png"
                    alt="Tuitionstime Logo"
                    width={16}
                    height={16}
                    className="rounded-full object-contain"
                  />
                  <span>TUITIONSTIME • EDTECH</span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-[#0F172A] leading-[1.08]">
                  Engineering a Complete EdTech Marketplace
                </h1>
              </div>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg lg:text-xl text-[#334155] leading-relaxed font-medium max-w-2xl">
                From tutor discovery and matching to demo sessions, classes, digital resources,
                payments, and analytics, CodePlaced helped engineer a connected learning marketplace.
              </p>

              {/* Action Buttons (Restrained, Editorial Hover Transition) */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <a
                  href="#ecosystem-architecture"
                  className="px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://www.tuitionstime.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white/90 hover:bg-white text-[#0F172A] border border-amber-300 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs flex items-center gap-2"
                >
                  <span>Visit Tuitionstime</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Metrics Strip */}
              <div className="pt-4 sm:pt-6 border-t border-amber-300/90 grid grid-cols-3 gap-3 sm:gap-6">
                <div>
                  <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
                    10K+
                  </div>
                  <div className="text-xs sm:text-sm text-[#451A03] mt-1 font-semibold">
                    Active Students*
                  </div>
                </div>
                <div className="border-l border-amber-400/80 pl-3 sm:pl-6">
                  <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
                    2K+
                  </div>
                  <div className="text-xs sm:text-sm text-[#451A03] mt-1 font-semibold">
                    Expert Tutors*
                  </div>
                </div>
                <div className="border-l border-amber-400/80 pl-3 sm:pl-6">
                  <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight">
                    50K+
                  </div>
                  <div className="text-xs sm:text-sm text-[#451A03] mt-1 font-semibold">
                    Classes Completed*
                  </div>
                </div>
              </div>

              {/* Qualification footnote & Engineering Scope */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-mono text-[#78350F] font-semibold">
                  *Platform figures displayed by Tuitionstime.
                </div>
                <div className="text-xs font-semibold text-[#451A03]">
                  Full-stack product engineering • Admin operations • Meeting automation • Analytics • SEO
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Tuitionstime Hero Person with Floating Learning Feature Badges */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center pt-8 lg:pt-0">
              <div className="relative w-full max-w-[420px] sm:max-w-[460px] flex items-center justify-center">
                {/* Decorative Concentric Radial Aura & Accent Rings (Cinematic Depth) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
                  <div className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full bg-white/40 blur-2xl hero-ring-anim" />
                  <div className="w-[340px] h-[340px] sm:w-[410px] sm:h-[410px] rounded-full border border-amber-400/35 hero-ring-anim" />
                  <div className="w-[260px] h-[260px] sm:w-[310px] sm:h-[310px] rounded-full border border-amber-400/25 pointer-events-none" />
                </div>

                {/* Main Hero Person Image (Waist-Up Cutout of Student Holding Books) */}
                <div className="relative z-10 w-[240px] sm:w-[275px] h-[420px] sm:h-[480px] hero-person-anim flex items-end justify-center">
                  <Image
                    src="/images/case-studies/tuitionstime/tuitionstime-hero-person-clean.png"
                    alt="Tuitionstime Student Learner"
                    fill
                    priority
                    className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(180,83,9,0.22)]"
                    sizes="(max-width: 640px) 240px, 275px"
                  />
                </div>

                {/* Floating Feature Badge 1: Top-Left (Flexible Learning) */}
                <div className="absolute top-4 -left-3 sm:-left-8 z-20 hero-badge-1 bg-white/95 backdrop-blur-md rounded-2xl px-3 sm:px-3.5 py-2 sm:py-2.5 shadow-xl border border-amber-200/90 flex items-center gap-2.5 sm:gap-3 transition-transform hover:scale-105">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-[#B45309] shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">Flexible Learning</div>
                    <div className="text-[10px] text-[#64748B] font-medium">Online &amp; Offline</div>
                  </div>
                </div>

                {/* Floating Feature Badge 2: Bottom-Left (Expert Tutors) */}
                <div className="absolute bottom-10 -left-4 sm:-left-10 z-20 hero-badge-2 bg-white/95 backdrop-blur-md rounded-2xl px-3 sm:px-3.5 py-2 sm:py-2.5 shadow-xl border border-amber-200/90 flex items-center gap-2.5 sm:gap-3 transition-transform hover:scale-105">
                  <div className="w-8 h-8 rounded-xl bg-[#0F172A] flex items-center justify-center text-[#FEF08A] shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">Expert Tutors</div>
                    <div className="text-[10px] text-[#64748B] font-medium">Verified Credentials</div>
                  </div>
                </div>

                {/* Floating Feature Badge 3: Top-Right (Better Results) */}
                <div className="absolute top-10 -right-2 sm:-right-8 z-20 hero-badge-3 bg-white/95 backdrop-blur-md rounded-2xl px-3 sm:px-3.5 py-2 sm:py-2.5 shadow-xl border border-amber-200/90 flex items-center gap-2.5 sm:gap-3 transition-transform hover:scale-105">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">Better Results</div>
                    <div className="text-[10px] text-[#64748B] font-medium">Proven Progress</div>
                  </div>
                </div>

                {/* Floating Feature Badge 4: Bottom-Right (Learn Anytime) */}
                <div className="absolute bottom-14 -right-3 sm:-right-8 z-20 hero-badge-4 bg-white/95 backdrop-blur-md rounded-2xl px-3 sm:px-3.5 py-2 sm:py-2.5 shadow-xl border border-amber-200/90 flex items-center gap-2.5 sm:gap-3 transition-transform hover:scale-105">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-[#B45309] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">Learn Anytime</div>
                    <div className="text-[10px] text-[#64748B] font-medium">1-on-1 &amp; Batches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 1: ABOUT THE PRODUCT (REFERENCE: APPINVENTIV "ABOUT KFC")        */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Two-Column Editorial Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Strong Headline & Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-[#D97706] uppercase">
                ABOUT THE PRODUCT
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.12]">
                A three-sided learning ecosystem.
              </h2>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
                Tuitionstime is built as an end-to-end operating system for education in India,
                connecting students, expert tutors, and platform administrators. Rather than acting as a
                static classifieds directory, the platform coordinates discovery, structured matching,
                demo trials, live classroom meetings, group cohort batches, study material commerce,
                and automated financial settlements.
              </p>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
                By removing friction across discovery and billing, Tuitionstime empowers verified
                educators to build sustainable teaching businesses while giving parents and students
                guaranteed quality, verified credentials, and predictable scheduling.
              </p>

              {/* Clean Inline Stakeholder Pillars with Selective Yellow Accent */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/90 shadow-2xs">
                  <div className="text-xs font-mono font-black text-[#B45309] uppercase">STUDENTS</div>
                  <div className="text-sm font-bold text-[#0F172A] mt-1">Find • Demo • Learn</div>
                  <div className="text-xs text-[#64748B] mt-1">Home &amp; online tutoring</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90">
                  <div className="text-xs font-mono font-black text-[#D97706] uppercase">TUTORS</div>
                  <div className="text-sm font-bold text-[#0F172A] mt-1">Teach • Earn • Grow</div>
                  <div className="text-xs text-[#64748B] mt-1">Automated wallet payouts</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90">
                  <div className="text-xs font-mono font-black text-[#D97706] uppercase">PLATFORM</div>
                  <div className="text-sm font-bold text-[#0F172A] mt-1">Match • Verify • Scale</div>
                  <div className="text-xs text-[#64748B] mt-1">Central admin control</div>
                </div>
              </div>
            </div>

            {/* Right: Compact Project Information Table (Appinventiv Style) */}
            <div className="lg:col-span-5 bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/90 text-left space-y-4 shadow-sm">
              <div className="text-xs font-mono font-bold tracking-wider text-[#64748B] uppercase">
                PROJECT SPECIFICATIONS
              </div>

              <div className="divide-y divide-slate-200/80 text-sm">
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-[#64748B] font-medium">Industry</span>
                  <span className="font-bold text-[#0F172A]">Education Technology (EdTech)</span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-[#64748B] font-medium">Product</span>
                  <span className="font-bold text-[#0F172A]">Two-Sided Marketplace &amp; Learning OS</span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-[#64748B] font-medium">Engineering Scope</span>
                  <span className="font-bold text-[#0F172A]">Full-Stack Architecture &amp; APIs</span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-[#64748B] font-medium">Core Integrations</span>
                  <span className="font-bold text-[#0F172A]">Meeting Automation, Wallet &amp; Payouts</span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-[#64748B] font-medium">Platform Delivery</span>
                  <span className="font-bold text-[#0F172A]">Next.js, Node.js, Cloud Workflows</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: THE THREE-SIDED LEARNING ECOSYSTEM (BALANCED SIDE-BY-SIDE)     */}
      {/* ========================================================================= */}
      <section id="ecosystem-architecture" className="py-14 sm:py-20 bg-[#FFFFFF] scroll-mt-24">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Section Label, Heading, and Explanatory Narrative (~50%) */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#D97706] uppercase">
                  THREE-SIDED ECOSYSTEM ARCHITECTURE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0F172A] tracking-tight leading-[1.15]">
                  Connecting students, tutors, and parents through one unified platform.
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-[#475569] leading-relaxed">
                <p>
                  A tutoring marketplace must solve multiple operational bottlenecks at once: how students
                  discover qualified mentors, how parents monitor academic progress and billing, and how
                  educators receive scheduled sessions and guaranteed payouts.
                </p>
                <p>
                  CodePlaced engineered a connected architecture where student preferences match qualified
                  tutors, trial workflows convert into recurring classes, and payouts settle securely.
                </p>
              </div>
            </div>

            {/* Right Column: Three-Sided Marketplace Diagram (Enlarged by ~45-50%, Standalone & Transparent) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] sm:max-w-[500px] aspect-[745/648] flex items-center justify-center">
                <Image
                  src="/images/case-studies/tuitionstime/three-sided-ecosystem.png"
                  alt="Tuitionstime Three-Sided Learning Ecosystem Architecture connecting Students, Tutors, and Parents"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: PRODUCT SHOWCASE (2 LARGE CLEAR VISUALS SIDE BY SIDE)          */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          <div className="max-w-3xl mx-auto space-y-3 text-center">
            <span className="text-xs font-mono font-bold tracking-widest text-[#D97706] uppercase">
              PRODUCT SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.12]">
              One marketplace. Every step of the learning journey.
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
              Two core operational pillars of Tuitionstime: matching verified tutor leads in real time,
              and unlocking multi-student group cohorts for scalable learning.
            </p>
          </div>

          {/* Two Substantial, Sharp Visuals Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start text-left">
            {/* Visual 1: Tutors Find Students (Live Requirement Board) */}
            <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 overflow-hidden shadow-xl p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <span className="text-[11px] font-mono font-black text-[#D97706] uppercase">
                    01 / REQUIREMENT BOARD
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A]">Tutors Find Students</h3>
                </div>
                <span className="text-xs font-mono text-[#64748B]">Real-Time Leads</span>
              </div>
              <div className="relative w-full aspect-[4/3] bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <Image
                  src="/images/case-studies/tuitionstime/find-students-ui.png"
                  alt="Tutors Find Students Requirement Board"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Tutors discover active student requirements filtered by class, subject, location,
                preferred time slots, and hourly budget.
              </p>
            </div>

            {/* Visual 2: Group Batches & Cohort Learning */}
            <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 overflow-hidden shadow-xl p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <span className="text-[11px] font-mono font-black text-[#D97706] uppercase">
                    02 / SCALED LEARNING
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A]">Group Cohort Batches</h3>
                </div>
                <span className="text-xs font-mono text-[#64748B]">Batch Scheduling</span>
              </div>
              <div className="relative w-full aspect-[4/3] bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <Image
                  src="/images/case-studies/tuitionstime/group-batches-hd.png"
                  alt="Group Batches Learning Management Interface"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Tutors organize structured group classes with defined seat limits, syllabus milestones,
                and cohort pricing for expanded earning capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: STRUCTURED TUTOR MATCHING (LARGE SCREENSHOT + 7 CRITERIA)      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Large Genuine Preferences Form Screenshot */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xl p-3 sm:p-4">
                <div className="relative w-full aspect-[4/5] max-h-[620px]">
                  <Image
                    src="/images/case-studies/tuitionstime/matching-preferences-clean.png"
                    alt="Tuitionstime Structured Matching Preferences Form"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Right: 7 Matching Criteria Explained Concisely */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#D97706] uppercase">
                  MATCHING DATA
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                  Structured preferences improve matching.
                </h2>
                <p className="text-base text-[#475569] leading-relaxed">
                  Student requirements are structured into actionable data points rather than free-form
                  text, enabling accurate algorithmic matching and high demo conversion rates.
                </p>
              </div>

              <div className="space-y-2">
                {[
                  { id: "01", text: "Location & learning mode (Home Tuition or Live Online)", highlighted: true },
                  { id: "02", text: "School / college / competitive exam track", highlighted: false },
                  { id: "03", text: "Preferred subjects & specific board syllabus", highlighted: false },
                  { id: "04", text: "Tutor gender preference & language comfort", highlighted: false },
                  { id: "05", text: "Subject-wise weekly time slots & availability", highlighted: false },
                  { id: "06", text: "Subject-wise hourly & monthly budgets", highlighted: true },
                  { id: "07", text: "Target academic learning goals & timeline", highlighted: false },
                ].map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3.5 p-3 rounded-2xl border shadow-xs transition-colors ${
                      item.highlighted
                        ? "bg-amber-50/60 border-amber-200/90"
                        : "bg-white border-slate-200/90"
                    }`}
                  >
                    <span
                      className={`text-xs font-mono font-bold shrink-0 ${
                        item.highlighted
                          ? "text-[#B45309] bg-amber-100/90 px-2 py-0.5 rounded-md"
                          : "text-[#D97706] px-1"
                      }`}
                    >
                      {item.id}
                    </span>
                    <span className="text-sm font-semibold text-[#0F172A]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFBEB] border-l-4 border-[#F59E0B] text-xs font-bold text-[#92400E]">
                The user profile becomes useful marketplace intelligence—not just static account information.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: DEMO-TO-CLASS WORKFLOW (5-STEP HORIZONTAL PROCESS)             */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#D97706] uppercase">
              CONVERSION LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.12]">
              From free demo to regular learning.
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Demo requests are treated as a measurable conversion funnel with automated meeting
              generation, status synchronizations, and frictionless transition into regular classes.
            </p>
          </div>

          {/* Clean 5-Step Process with Selective Pale Yellow Accents */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Student Need",
                desc: "Requirements, subjects, syllabus, budget and preferred slots submitted.",
                highlighted: false,
              },
              {
                step: "02",
                title: "Tutor Match",
                desc: "Algorithmic matching routes the request to verified local & online tutors.",
                highlighted: false,
              },
              {
                step: "03",
                title: "Demo Request",
                desc: "Free 1-on-1 trial booked with confirmed mutual slot availability.",
                highlighted: true,
                badge: "KEY TRIAL",
              },
              {
                step: "04",
                title: "Meeting Sync",
                desc: "Automated video meeting generated with instant calendar & SMS links.",
                highlighted: false,
              },
              {
                step: "05",
                title: "Regular Class",
                desc: "Successful demo converts directly into recurring paid learning schedule.",
                highlighted: true,
                badge: "CONVERSION",
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className={`p-6 rounded-3xl border shadow-sm flex flex-col justify-between space-y-4 hover:border-amber-400 transition-colors ${
                  item.highlighted
                    ? "bg-amber-50/70 border-amber-300/90"
                    : "bg-white border-slate-200/90"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-black text-sm ${
                        item.highlighted
                          ? "bg-amber-200/90 text-[#92400E]"
                          : "bg-slate-100 text-[#B45309]"
                      }`}
                    >
                      {item.step}
                    </span>
                    {item.badge && (
                      <span className="text-[9px] font-mono font-bold tracking-wider uppercase bg-amber-200/80 text-[#78350F] px-1.5 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {idx < 4 && (
                    <ArrowRight className="w-4 h-4 text-slate-300 hidden md:block" />
                  )}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-xs font-medium text-[#64748B] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>Built with cost-efficient meeting room generation and bidirectional calendar reminders to eliminate student no-shows.</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: TRUST, VERIFICATION & WALLETS (LARGE PROMINENT SCREENSHOT)     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: One Prominent, Readable Wallet & Payouts Screenshot */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-slate-200/90 bg-[#F8FAFC] overflow-hidden shadow-xl p-3 sm:p-5">
                <div className="px-3 py-2 bg-white rounded-t-xl border-b border-slate-200 flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#64748B]">TUTOR WALLET &amp; PAYOUT AUDIT</span>
                  <span className="text-xs font-mono text-[#10B981] font-bold">VERIFIED ESCROW</span>
                </div>
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src="/images/case-studies/tuitionstime/wallet-payouts.jpg"
                    alt="Tutor Wallet Balances and Payouts History Interface"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Right: Trust, KYC & Multi-Stream Monetization Narrative */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#D97706] uppercase">
                  TRUST &amp; COMMERCE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                  Verification, wallets and multi-stream earnings.
                </h2>
                <p className="text-base text-[#475569] leading-relaxed">
                  Educator identity and payout ownership are audited through document and bank
                  verification. Earnings then flow through multi-state wallets (available, locked, and completed).
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/90 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-[#0F172A]">KYC &amp; Bank Account Verification</div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B45309] bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                      VERIFIED ESCROW
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B]">
                    Government ID checks, degree validation, and UPI/bank settlement audit before any withdrawal request can be submitted.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="text-sm font-bold text-[#0F172A]">Group Cohort Batches</div>
                  <p className="text-xs text-[#64748B]">
                    Tutors run group classes with defined seat capacities and batch pricing, unlocking higher hourly earnings.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="text-sm font-bold text-[#0F172A]">Digital Notes Marketplace</div>
                  <p className="text-xs text-[#64748B]">
                    Educators upload revision notes and study guides for passive digital sales with instant chapter previews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: PROGRAMMATIC SEO & ACQUISITION (CLEAN TEXT-LED EDITORIAL)     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#D97706] uppercase">
              SEO &amp; GROWTH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.12]">
              Building an organic acquisition engine.
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              We engineered a scalable programmatic SEO architecture to capture high-intent local and
              subject-specific tuition searches across India without ad spend dependency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-amber-50/50 border border-amber-200/90 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-[#B45309] uppercase">01 / PROGRAMMATIC TAXONOMY</span>
              <h3 className="text-lg font-bold text-[#0F172A]">Combinatorial Landing Architecture</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Dynamic combinations across Subject × Class × Board (CBSE/ICSE) × City generate
                thousands of search-targeted indexable landing pages with clean metadata.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-[#D97706] uppercase">02 / TECHNICAL PERFORMANCE</span>
              <h3 className="text-lg font-bold text-[#0F172A]">Sub-Second Page Experience</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Static server generation with ISR ensures instantaneous page loads, perfect Core Web Vitals,
                and high search ranking across mobile and desktop devices.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <span className="text-xs font-mono font-bold text-[#D97706] uppercase">03 / SCHEMA &amp; LOCAL INTENT</span>
              <h3 className="text-lg font-bold text-[#0F172A]">Structured Academic Data</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Automated JSON-LD schemas for verified tutors, reviews, subjects, and local coordinates
                render rich snippets directly within Google search results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: RESULTS & IMPACT (REFERENCE: APPINVENTIV KFC RESULTS)          */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Headline, Numbered Outcomes & Partnership */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#D97706] uppercase">
                  RESULTS &amp; IMPACT
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.12]">
                  Building a connected EdTech marketplace from discovery to learning.
                </h2>
                <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                  Tuitionstime transitioned from an uncoordinated local directory into a robust,
                  three-sided educational platform powering tens of thousands of learning sessions
                  across India.
                </p>
              </div>

              {/* Clean Numbered List with Fine Separators and Yellow Accent Badges */}
              <div className="divide-y divide-slate-200 border-y border-slate-200">
                <div className="py-6 flex items-start gap-5 sm:gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100/90 border border-amber-300/80 flex items-center justify-center text-xl font-black text-[#B45309] font-mono shrink-0 shadow-2xs">
                    01
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                      10K+ Active Students*
                    </div>
                    <p className="text-sm text-[#64748B] mt-1 leading-relaxed">
                      Learners actively finding home and online tutors across primary, secondary,
                      and competitive exam tracks.
                    </p>
                  </div>
                </div>

                <div className="py-6 flex items-start gap-5 sm:gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100/90 border border-amber-300/80 flex items-center justify-center text-xl font-black text-[#B45309] font-mono shrink-0 shadow-2xs">
                    02
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                      2K+ Expert Tutors*
                    </div>
                    <p className="text-sm text-[#64748B] mt-1 leading-relaxed">
                      Verified educators teaching, scheduling sessions, and earning predictable
                      livelihoods with automated payouts.
                    </p>
                  </div>
                </div>

                <div className="py-6 flex items-start gap-5 sm:gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100/90 border border-amber-300/80 flex items-center justify-center text-xl font-black text-[#B45309] font-mono shrink-0 shadow-2xs">
                    03
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                      50K+ Classes Completed*
                    </div>
                    <p className="text-sm text-[#64748B] mt-1 leading-relaxed">
                      Live sessions successfully scheduled, conducted, and logged through the platform
                      without operational bottlenecks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-[#64748B]">
                *Platform figures displayed by Tuitionstime.
              </div>

              {/* Ongoing Client Partnership Callout */}
              <div className="p-6 rounded-2xl bg-[#FFFBEB] border border-amber-200 space-y-2">
                <div className="text-xs font-mono font-bold text-[#D97706] uppercase tracking-wider">
                  CONTINUOUS PRODUCT PARTNERSHIP
                </div>
                <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed font-medium">
                  CodePlaced continues to support Tuitionstime across full-stack product engineering,
                  meeting automation, platform performance, and programmatic SEO.
                </p>
              </div>
            </div>

            {/* Right Column: Polished Tuitionstime Product Display in Clean Light Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-2xl p-3 sm:p-5">
                <div className="relative w-full aspect-[16/12] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                  <Image
                    src="/images/case-studies/tuitionstime/hero-tutor-listing-clean.png"
                    alt="Tuitionstime Marketplace Platform Interface"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: LARGE YELLOW CONVERSION CARD (REFERENCE: APPINVENTIV RED CARD) */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#FBBF24] via-[#FACC15] to-[#EAB308] p-8 sm:p-14 lg:p-16 text-[#0F172A] shadow-2xl overflow-hidden border border-amber-300">
            <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading, Supporting Copy, Action Buttons */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest uppercase bg-[#0F172A] text-[#FEF08A] px-4 py-2 rounded-full shadow-md">
                  <Image
                    src="/images/case-studies/tuitionstime/tuitionstime-logo.png"
                    alt="Tuitionstime"
                    width={18}
                    height={18}
                    className="rounded-full object-contain"
                  />
                  <span>CODEPLACED × TUITIONSTIME</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.12]">
                  Have a marketplace or SaaS idea that needs more than a frontend?
                </h2>

                <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-xl font-medium">
                  Let’s build a connected digital product that brings your users, workflows,
                  and business operations together.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-mono font-black text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                  >
                    <span>BUILD WITH CODEPLACED</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                  <Link
                    href="/services"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/95 hover:bg-white text-[#0F172A] border border-amber-300 font-mono text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>EXPLORE OUR SERVICES</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: One Large, Recognizable Platform Display in Clean Light Frame */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[480px] rounded-2xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden p-2 sm:p-3">
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src="/images/case-studies/tuitionstime/find-tutors-ui.png"
                      alt="Tuitionstime Marketplace Platform Interface"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-10 mt-10 border-t border-amber-300/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#78350F] font-bold gap-3">
              <span>Case Study • Tuitionstime EdTech Marketplace</span>
              <span>Full-Stack Engineering &amp; Architecture by CodePlaced</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: EXPLORE MORE CASE STUDIES (AUTHENTIC CLIENT WORK AFTER CTA)   */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#D97706] uppercase">
              RELATED CLIENT WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.12]">
              Explore More Case Studies
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              See how CodePlaced solves real business challenges through thoughtful engineering,
              automation, and data-driven systems.
            </p>
          </div>

          {/* Responsive Case Study Cards Grid (2 prominent, genuine cards side by side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Card 1 — Get My Course */}
            <Link
              href="/case-studies/get-my-course"
              className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Prominent Image Header */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                    alt="Get My Course Data Analytics Dashboard"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50/95 text-[#92400E] border border-amber-200/90 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-sm shadow-xs">
                    <BarChart3 className="w-3.5 h-3.5 text-amber-600" />
                    <span>EdTech / Data Analytics</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold text-[#D97706] uppercase tracking-wider">
                      GET MY COURSE
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#D97706] transition-colors leading-snug">
                      Scaling Data Analytics for a Growing EdTech Platform
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      Centralized fragmented marketing and sales data with BigQuery pipelines and Looker
                      Studio dashboards to improve reporting and course funnel visibility.
                    </p>
                  </div>

                  {/* Impact Metrics Strip */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-4 text-xs font-mono font-bold text-[#0F172A]">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#D97706]">4.2x</span>
                      <span className="text-[#64748B] font-medium font-sans">Faster Reporting</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#D97706]">100%</span>
                      <span className="text-[#64748B] font-medium font-sans">Lakehouse Sync</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0F172A] group-hover:text-[#D97706] transition-colors">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Card 2 — Amalfi Acquisition */}
            <Link
              href="/case-studies/amalfi-acquisition"
              className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Prominent Image Header */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                    alt="Amalfi Acquisition Commercial Real Estate Property Management"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50/95 text-[#92400E] border border-amber-200/90 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-sm shadow-xs">
                    <Building2 className="w-3.5 h-3.5 text-amber-600" />
                    <span>Real Estate Operations</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold text-[#D97706] uppercase tracking-wider">
                      AMALFI ACQUISITION
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#D97706] transition-colors leading-snug">
                      Centralizing Operations and Payroll for a Distributed Workforce
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      Automated payroll workflows and consolidated operational reporting to reduce manual
                      administration and improve workforce visibility across 24 properties.
                    </p>
                  </div>

                  {/* Impact Metrics Strip */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-4 text-xs font-mono font-bold text-[#0F172A]">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#D97706]">75%</span>
                      <span className="text-[#64748B] font-medium font-sans">Admin Time Saved</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#D97706]">24 Sites</span>
                      <span className="text-[#64748B] font-medium font-sans">Unified Operations</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0F172A] group-hover:text-[#D97706] transition-colors">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </Link>
          </div>

          {/* Direct Link to Portfolio Index */}
          <div className="pt-2 flex justify-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 hover:border-[#D97706] text-[#0F172A] hover:text-[#D97706] bg-slate-50/60 hover:bg-amber-50/40 font-mono text-xs font-bold transition-all shadow-sm"
            >
              <span>Explore All Case Studies &amp; Blueprints</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
