"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  BarChart3,
  Building2,
} from "lucide-react";

import { TuitionstimeLaptopMockup } from "./TuitionstimeLaptopMockup";

export function TuitionstimeCaseStudy() {
  return (
    <div className="min-h-screen bg-[#08090B] text-slate-100 selection:bg-[#FACC15] selection:text-[#08090B] font-sans antialiased overflow-x-hidden">
      {/* ========================================================================= */}
      {/* HERO — CINEMATIC DARK 2-COLUMN LAYOUT WITH TILTED LAPTOP ON RIGHT        */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 bg-[#08090B] text-white overflow-hidden">
        {/* Studio-Lit Atmosphere: Restrained Yellow Glow Behind Right Laptop Area */}
        <div className="absolute top-1/4 right-[2%] w-[840px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(255,201,40,0.18)_0%,rgba(217,119,6,0.04)_45%,transparent_70%)] pointer-events-none -z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.025] pointer-events-none" />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6 xl:gap-8">
            {/* Left Column — Prominent Case Study Content (~43% width on desktop, generous breathing room) */}
            <div className="w-full lg:w-[44%] xl:w-[42%] space-y-6 sm:space-y-8 text-left z-10 lg:pr-2">
              {/* Outlined Pill Above Heading */}
              <div>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111317] border border-[#2A2E38] text-xs font-mono font-bold tracking-wider uppercase text-slate-300 shadow-sm">
                  <Image
                    src="/images/case-studies/tuitionstime/tuitionstime-logo.png"
                    alt="Tuitionstime Logo"
                    width={16}
                    height={16}
                    className="rounded-full object-contain"
                  />
                  <span className="text-white">CODEPLACED</span>
                  <span className="text-[#FFC928]">×</span>
                  <span className="text-[#FFC928]">TUITIONSTIME</span>
                </div>
              </div>

              {/* Main Heading: Large, Bold, Left-Aligned */}
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[60px] font-black tracking-tight text-white leading-[1.08]">
                Engineering a Complete{" "}
                <span className="text-[#FFC928] block sm:inline">
                  EdTech Marketplace
                </span>
              </h1>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal max-w-xl">
                From tutor discovery and trial classes to scheduling, payments, and learning progress, we built a connected platform for students, tutors, and parents.
              </p>

              {/* Three Metrics in One Clean Horizontal Row */}
              <div className="pt-1">
                <div className="flex flex-row items-center gap-4 sm:gap-6 lg:gap-8 py-3.5 sm:py-4 px-4 sm:px-6 rounded-2xl bg-[#111317] border border-[#22262F]">
                  <div className="flex-1 sm:flex-initial">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FFC928] tracking-tight">
                      10K+
                    </div>
                    <div className="text-[11px] sm:text-xs text-white/90 mt-0.5 font-medium whitespace-nowrap">
                      Active Students
                    </div>
                  </div>
                  <div className="h-10 w-[1px] bg-[#22262F]" />
                  <div className="flex-1 sm:flex-initial">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FFC928] tracking-tight">
                      2K+
                    </div>
                    <div className="text-[11px] sm:text-xs text-white/90 mt-0.5 font-medium whitespace-nowrap">
                      Expert Tutors
                    </div>
                  </div>
                  <div className="h-10 w-[1px] bg-[#22262F]" />
                  <div className="flex-1 sm:flex-initial">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FFC928] tracking-tight">
                      50K+
                    </div>
                    <div className="text-[11px] sm:text-xs text-white/90 mt-0.5 font-medium whitespace-nowrap">
                      Classes Completed
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <a
                  href="#ecosystem-architecture"
                  className="px-7 py-3.5 rounded-full bg-[#FFC928] hover:bg-[#FBBF24] text-[#08090B] font-mono text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-amber-400/20 flex items-center gap-2 group"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://www.tuitionstime.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-[#111317] hover:bg-[#181B22] text-white border border-[#262B35] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs flex items-center gap-2"
                >
                  <span>Visit Tuitionstime</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Column — 15–20% Larger Photorealistic Laptop Shifted to Right (~57% width on desktop) */}
            <div className="w-full lg:w-[56%] xl:w-[58%] flex items-center justify-center lg:justify-end pt-8 lg:pt-0 lg:translate-x-2 xl:translate-x-5">
              <TuitionstimeLaptopMockup priority />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 1: ABOUT THE PRODUCT                                              */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#08090B]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Two-Column Editorial Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Strong Headline & Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00C7E8] uppercase">
                ABOUT THE PRODUCT
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
                A three-sided learning ecosystem.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Tuitionstime is built as an end-to-end operating system for education in India,
                connecting students, expert tutors, and platform administrators. Rather than acting as a
                static classifieds directory, the platform coordinates discovery, structured matching,
                demo trials, live classroom meetings, group cohort batches, study material commerce,
                and automated financial settlements.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                By removing friction across discovery and billing, Tuitionstime empowers verified
                educators to build sustainable teaching businesses while giving parents and students
                guaranteed quality, verified credentials, and predictable scheduling.
              </p>

              {/* Stakeholder Pillars with Yellow and Cyan Accents */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
                <div className="p-4 rounded-2xl bg-[#111317] border border-[#FACC15]/25 shadow-md">
                  <div className="text-xs font-mono font-black text-[#FACC15] uppercase">STUDENTS</div>
                  <div className="text-sm font-bold text-white mt-1">Find • Demo • Learn</div>
                  <div className="text-xs text-slate-400 mt-1">Home &amp; online tutoring</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#111317] border border-[#22262F] shadow-md">
                  <div className="text-xs font-mono font-black text-[#00C7E8] uppercase">TUTORS</div>
                  <div className="text-sm font-bold text-white mt-1">Teach • Earn • Grow</div>
                  <div className="text-xs text-slate-400 mt-1">Automated wallet payouts</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#111317] border border-[#22262F] shadow-md">
                  <div className="text-xs font-mono font-black text-amber-400 uppercase">PLATFORM</div>
                  <div className="text-sm font-bold text-white mt-1">Match • Verify • Scale</div>
                  <div className="text-xs text-slate-400 mt-1">Central admin control</div>
                </div>
              </div>
            </div>

            {/* Right: Project Specifications Table */}
            <div className="lg:col-span-5 bg-[#111317] rounded-3xl p-6 sm:p-8 border border-[#22262F] text-left space-y-4 shadow-xl">
              <div className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                PROJECT SPECIFICATIONS
              </div>

              <div className="divide-y divide-[#1F232B] text-sm">
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-slate-400 font-medium">Industry</span>
                  <span className="font-bold text-white">Education Technology (EdTech)</span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-slate-400 font-medium">Product</span>
                  <span className="font-bold text-white">Two-Sided Marketplace &amp; Learning OS</span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-slate-400 font-medium">Engineering Scope</span>
                  <span className="font-bold text-white">Full-Stack Architecture &amp; APIs</span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-slate-400 font-medium">Core Integrations</span>
                  <span className="font-bold text-white">Meeting Automation, Wallet &amp; Payouts</span>
                </div>
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-slate-400 font-medium">Platform Delivery</span>
                  <span className="font-bold text-white">Next.js, Node.js, Cloud Workflows</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: THE THREE-SIDED LEARNING ECOSYSTEM                             */}
      {/* ========================================================================= */}
      <section id="ecosystem-architecture" className="py-14 sm:py-20 bg-[#08090B] scroll-mt-24">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Section Label, Heading, and Explanatory Narrative (~50%) */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#FACC15] uppercase">
                  THREE-SIDED ECOSYSTEM ARCHITECTURE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white tracking-tight leading-[1.15]">
                  Connecting students, tutors, and parents through one unified platform.
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
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

            {/* Right Column: Three-Sided Marketplace Diagram (Enlarged, Standalone & Transparent) */}
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
      <section className="py-14 sm:py-20 bg-[#08090B]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
          <div className="max-w-3xl mx-auto space-y-3 text-center">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00C7E8] uppercase">
              PRODUCT SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
              One marketplace. Every step of the learning journey.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Two core operational pillars of Tuitionstime: matching verified tutor leads in real time,
              and unlocking multi-student group cohorts for scalable learning.
            </p>
          </div>

          {/* Two Substantial, Sharp Visuals Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start text-left">
            {/* Visual 1: Tutors Find Students (Live Requirement Board) */}
            <div className="bg-[#111317] rounded-3xl border border-[#22262F] overflow-hidden shadow-xl p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#1F232B] pb-3">
                <div>
                  <span className="text-[11px] font-mono font-black text-[#FACC15] uppercase">
                    01 / REQUIREMENT BOARD
                  </span>
                  <h3 className="text-lg font-bold text-white">Tutors Find Students</h3>
                </div>
                <span className="text-xs font-mono text-slate-400">Real-Time Leads</span>
              </div>
              <div className="relative w-full aspect-[4/3] bg-[#0D0E11] rounded-2xl border border-[#1F232B] overflow-hidden">
                <Image
                  src="/images/case-studies/tuitionstime/find-students-ui.png"
                  alt="Tutors Find Students Requirement Board"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tutors discover active student requirements filtered by class, subject, location,
                preferred time slots, and hourly budget.
              </p>
            </div>

            {/* Visual 2: Group Batches & Cohort Learning */}
            <div className="bg-[#111317] rounded-3xl border border-[#22262F] overflow-hidden shadow-xl p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#1F232B] pb-3">
                <div>
                  <span className="text-[11px] font-mono font-black text-[#00C7E8] uppercase">
                    02 / SCALED LEARNING
                  </span>
                  <h3 className="text-lg font-bold text-white">Group Cohort Batches</h3>
                </div>
                <span className="text-xs font-mono text-slate-400">Batch Scheduling</span>
              </div>
              <div className="relative w-full aspect-[4/3] bg-[#0D0E11] rounded-2xl border border-[#1F232B] overflow-hidden">
                <Image
                  src="/images/case-studies/tuitionstime/group-batches-hd.png"
                  alt="Group Batches Learning Management Interface"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
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
      <section className="py-14 sm:py-20 bg-[#08090B]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Large Genuine Preferences Form Screenshot */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-[#22262F] bg-[#111317] overflow-hidden shadow-xl p-3 sm:p-4">
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
                <span className="text-xs font-mono font-bold tracking-widest text-[#FACC15] uppercase">
                  MATCHING DATA
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Structured preferences improve matching.
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
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
                    className={`flex items-center gap-3.5 p-3 rounded-2xl border shadow-sm transition-colors ${
                      item.highlighted
                        ? "bg-[#161920] border-[#FACC15]/30"
                        : "bg-[#111317] border-[#22262F]"
                    }`}
                  >
                    <span
                      className={`text-xs font-mono font-bold shrink-0 ${
                        item.highlighted
                          ? "text-[#FACC15] bg-[#FACC15]/15 px-2 py-0.5 rounded-md"
                          : "text-slate-400 px-1"
                      }`}
                    >
                      {item.id}
                    </span>
                    <span className="text-sm font-semibold text-slate-200">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#161920] border-l-4 border-[#FACC15] text-xs font-bold text-amber-300">
                The user profile becomes useful marketplace intelligence—not just static account information.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: DEMO-TO-CLASS WORKFLOW (5-STEP HORIZONTAL PROCESS)             */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#08090B]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00C7E8] uppercase">
              CONVERSION LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
              From free demo to regular learning.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Demo requests are treated as a measurable conversion funnel with automated meeting
              generation, status synchronizations, and frictionless transition into regular classes.
            </p>
          </div>

          {/* 5-Step Process with Unified Dark Charcoal Cards and Yellow/Cyan Accents */}
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
                className={`p-6 rounded-3xl border shadow-md flex flex-col justify-between space-y-4 hover:border-[#FACC15]/60 transition-colors ${
                  item.highlighted
                    ? "bg-[#161920] border-[#FACC15]/35"
                    : "bg-[#111317] border-[#22262F]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-black text-sm ${
                        item.highlighted
                          ? "bg-[#FACC15]/15 text-[#FACC15]"
                          : "bg-white/5 text-slate-300"
                      }`}
                    >
                      {item.step}
                    </span>
                    {item.badge && (
                      <span className="text-[9px] font-mono font-bold tracking-wider uppercase bg-[#FACC15]/15 text-[#FACC15] border border-[#FACC15]/30 px-1.5 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {idx < 4 && (
                    <ArrowRight className="w-4 h-4 text-slate-600 hidden md:block" />
                  )}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#111317] border border-[#22262F] shadow-sm text-xs font-medium text-slate-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>Built with cost-efficient meeting room generation and bidirectional calendar reminders to eliminate student no-shows.</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: TRUST, VERIFICATION & WALLETS (LARGE PROMINENT SCREENSHOT)     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#08090B]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: One Prominent, Readable Wallet & Payouts Screenshot */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-[#22262F] bg-[#111317] overflow-hidden shadow-xl p-3 sm:p-5">
                <div className="px-3 py-2 bg-[#0D0E11] rounded-t-xl border-b border-[#1F232B] flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-slate-400">TUTOR WALLET &amp; PAYOUT AUDIT</span>
                  <span className="text-xs font-mono text-[#10B981] font-bold">VERIFIED ESCROW</span>
                </div>
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#0D0E11]">
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
                <span className="text-xs font-mono font-bold tracking-widest text-[#FACC15] uppercase">
                  TRUST &amp; COMMERCE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Verification, wallets and multi-stream earnings.
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  Educator identity and payout ownership are audited through document and bank
                  verification. Earnings then flow through multi-state wallets (available, locked, and completed).
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-2xl bg-[#161920] border border-[#FACC15]/30 space-y-1.5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-white">KYC &amp; Bank Account Verification</div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FACC15] bg-[#FACC15]/15 px-2 py-0.5 rounded-full border border-[#FACC15]/30">
                      VERIFIED ESCROW
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Government ID checks, degree validation, and UPI/bank settlement audit before any withdrawal request can be submitted.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#111317] border border-[#22262F] space-y-1">
                  <div className="text-sm font-bold text-white">Group Cohort Batches</div>
                  <p className="text-xs text-slate-400">
                    Tutors run group classes with defined seat capacities and batch pricing, unlocking higher hourly earnings.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#111317] border border-[#22262F] space-y-1">
                  <div className="text-sm font-bold text-white">Digital Notes Marketplace</div>
                  <p className="text-xs text-slate-400">
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
      <section className="py-14 sm:py-20 bg-[#08090B]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00C7E8] uppercase">
              SEO &amp; GROWTH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Building an organic acquisition engine.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We engineered a scalable programmatic SEO architecture to capture high-intent local and
              subject-specific tuition searches across India without ad spend dependency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#111317] border border-[#FACC15]/25 shadow-xl space-y-3">
              <span className="text-xs font-mono font-bold text-[#FACC15] uppercase">01 / PROGRAMMATIC TAXONOMY</span>
              <h3 className="text-lg font-bold text-white">Combinatorial Landing Architecture</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dynamic combinations across Subject × Class × Board (CBSE/ICSE) × City generate
                thousands of search-targeted indexable landing pages with clean metadata.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#111317] border border-[#22262F] shadow-xl space-y-3">
              <span className="text-xs font-mono font-bold text-[#00C7E8] uppercase">02 / TECHNICAL PERFORMANCE</span>
              <h3 className="text-lg font-bold text-white">Sub-Second Page Experience</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Static server generation with ISR ensures instantaneous page loads, perfect Core Web Vitals,
                and high search ranking across mobile and desktop devices.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#111317] border border-[#22262F] shadow-xl space-y-3">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">03 / SCHEMA &amp; LOCAL INTENT</span>
              <h3 className="text-lg font-bold text-white">Structured Academic Data</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Automated JSON-LD schemas for verified tutors, reviews, subjects, and local coordinates
                render rich snippets directly within Google search results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: RESULTS & IMPACT                                               */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#08090B]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Headline, Numbered Outcomes & Partnership */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#FACC15] uppercase">
                  RESULTS &amp; IMPACT
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
                  Building a connected EdTech marketplace from discovery to learning.
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Tuitionstime transitioned from an uncoordinated local directory into a robust,
                  three-sided educational platform powering tens of thousands of learning sessions
                  across India.
                </p>
              </div>

              {/* Numbered List with Dark Surfaces and Yellow Badges */}
              <div className="divide-y divide-[#1F232B] border-y border-[#1F232B]">
                <div className="py-6 flex items-start gap-5 sm:gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FACC15]/15 border border-[#FACC15]/30 flex items-center justify-center text-xl font-black text-[#FACC15] font-mono shrink-0 shadow-md">
                    01
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      10K+ Active Students*
                    </div>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      Learners actively finding home and online tutors across primary, secondary,
                      and competitive exam tracks.
                    </p>
                  </div>
                </div>

                <div className="py-6 flex items-start gap-5 sm:gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FACC15]/15 border border-[#FACC15]/30 flex items-center justify-center text-xl font-black text-[#FACC15] font-mono shrink-0 shadow-md">
                    02
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      2K+ Expert Tutors*
                    </div>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      Verified educators teaching, scheduling sessions, and earning predictable
                      livelihoods with automated payouts.
                    </p>
                  </div>
                </div>

                <div className="py-6 flex items-start gap-5 sm:gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FACC15]/15 border border-[#FACC15]/30 flex items-center justify-center text-xl font-black text-[#FACC15] font-mono shrink-0 shadow-md">
                    03
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      50K+ Classes Completed*
                    </div>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      Live sessions successfully scheduled, conducted, and logged through the platform
                      without operational bottlenecks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-slate-500">
                *Platform figures displayed by Tuitionstime.
              </div>

              {/* Ongoing Client Partnership Callout */}
              <div className="p-6 rounded-2xl bg-[#111317] border border-[#22262F] space-y-2">
                <div className="text-xs font-mono font-bold text-[#00C7E8] uppercase tracking-wider">
                  CONTINUOUS PRODUCT PARTNERSHIP
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  CodePlaced continues to support Tuitionstime across full-stack product engineering,
                  meeting automation, platform performance, and programmatic SEO.
                </p>
              </div>
            </div>

            {/* Right Column: Polished Tuitionstime Product Display */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-[#22262F] bg-[#111317] overflow-hidden shadow-xl p-3 sm:p-5">
                <div className="relative w-full aspect-[16/12] rounded-2xl overflow-hidden bg-[#0D0E11] border border-[#1F232B]">
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
      {/* SECTION 9: DARK PREMIUM CONVERSION CARD                                   */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#08090B]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-[#111317] p-8 sm:p-14 lg:p-16 text-white shadow-2xl overflow-hidden border border-[#262B35]">
            {/* Ambient Lighting Accents */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FACC15]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#00C7E8]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading, Supporting Copy, Action Buttons */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest uppercase bg-[#08090B] text-[#FACC15] border border-[#FACC15]/30 px-4 py-2 rounded-full shadow-md">
                  <Image
                    src="/images/case-studies/tuitionstime/tuitionstime-logo.png"
                    alt="Tuitionstime"
                    width={18}
                    height={18}
                    className="rounded-full object-contain"
                  />
                  <span>CODEPLACED × TUITIONSTIME</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
                  Have a marketplace or SaaS idea that needs more than a frontend?
                </h2>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                  Let’s build a connected digital product that brings your users, workflows,
                  and business operations together.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#FACC15] hover:bg-[#FBBF24] text-[#08090B] font-mono font-black text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-amber-400/20 flex items-center justify-center gap-2"
                  >
                    <span>BUILD WITH CODEPLACED</span>
                    <ArrowRight className="w-4 h-4 text-[#08090B]" />
                  </Link>
                  <Link
                    href="/services"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#161920] hover:bg-[#1D212A] text-white border border-[#2D3340] font-mono text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>EXPLORE OUR SERVICES</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Platform Display in Sleek Dark Frame */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[480px] rounded-2xl bg-[#0D0E11] border border-[#22262F] shadow-xl overflow-hidden p-2 sm:p-3">
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

            <div className="relative z-10 pt-10 mt-10 border-t border-[#1F232B] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 font-medium gap-3">
              <span>Case Study • Tuitionstime EdTech Marketplace</span>
              <span>Full-Stack Engineering &amp; Architecture by CodePlaced</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: EXPLORE MORE CASE STUDIES                                     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#08090B]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00C7E8] uppercase">
              RELATED CLIENT WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Explore More Case Studies
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              See how CodePlaced solves real business challenges through thoughtful engineering,
              automation, and data-driven systems.
            </p>
          </div>

          {/* Responsive Case Study Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Card 1 — Get My Course */}
            <Link
              href="/case-studies/get-my-course"
              className="group rounded-3xl bg-[#111317] border border-[#22262F] overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#FACC15]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0D0E11]">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                    alt="Get My Course Data Analytics Dashboard"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111317]/90 text-amber-300 border border-[#FACC15]/30 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-sm shadow-xs">
                    <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                    <span>EdTech / Data Analytics</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold text-[#FACC15] uppercase tracking-wider">
                      GET MY COURSE
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#FACC15] transition-colors leading-snug">
                      Scaling Data Analytics for a Growing EdTech Platform
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Centralized fragmented marketing and sales data with BigQuery pipelines and Looker
                      Studio dashboards to improve reporting and course funnel visibility.
                    </p>
                  </div>

                  {/* Impact Metrics Strip */}
                  <div className="pt-3 border-t border-[#1F232B] flex items-center gap-4 text-xs font-mono font-bold text-white">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#FACC15]">4.2x</span>
                      <span className="text-slate-400 font-medium font-sans">Faster Reporting</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#FACC15]">100%</span>
                      <span className="text-slate-400 font-medium font-sans">Lakehouse Sync</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#FACC15] transition-colors">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Card 2 — Amalfi Acquisition */}
            <Link
              href="/case-studies/amalfi-acquisition"
              className="group rounded-3xl bg-[#111317] border border-[#22262F] overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#FACC15]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0D0E11]">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                    alt="Amalfi Acquisition Commercial Real Estate Property Management"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111317]/90 text-amber-300 border border-[#FACC15]/30 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-sm shadow-xs">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Real Estate Operations</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs font-mono font-bold text-[#FACC15] uppercase tracking-wider">
                      AMALFI ACQUISITION
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#FACC15] transition-colors leading-snug">
                      Centralizing Operations and Payroll for a Distributed Workforce
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Automated payroll workflows and consolidated operational reporting to reduce manual
                      administration and improve workforce visibility across 24 properties.
                    </p>
                  </div>

                  {/* Impact Metrics Strip */}
                  <div className="pt-3 border-t border-[#1F232B] flex items-center gap-4 text-xs font-mono font-bold text-white">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#FACC15]">75%</span>
                      <span className="text-slate-400 font-medium font-sans">Admin Time Saved</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#FACC15]">24 Sites</span>
                      <span className="text-slate-400 font-medium font-sans">Unified Operations</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#FACC15] transition-colors">
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#262B35] hover:border-[#FACC15] text-slate-200 hover:text-[#FACC15] bg-[#111317] hover:bg-[#181B22] font-mono text-xs font-bold transition-all shadow-sm"
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
