"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowDown,
  Workflow,
  ShieldCheck,
  TrendingUp,
  Users,
  DollarSign,
  CheckCircle2,
  BookOpen,
  FileText,
  Layers,
  Cpu,
  Globe2,
  Radio,
  GraduationCap,
  Video,
  Lock,
  Wallet,
  Check,
} from "lucide-react";

export function TuitionstimeCaseStudy() {
  return (
    <div className="min-h-screen bg-[#030608] text-[#FFFFFF] selection:bg-[#00D4F0] selection:text-black font-sans relative antialiased overflow-x-hidden">
      {/* Restrained Ambient Radial Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] pointer-events-none opacity-20 -z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 10%, rgba(0, 212, 240, 0.16) 0%, rgba(7, 143, 232, 0.06) 45%, transparent 70%)",
        }}
      />

      {/* ========================================================================= */}
      {/* 1. CINEMATIC VIDEO HERO SECTION (APPINVENTIV-INSPIRED, BOTTOM-LEFT ALIGNED) */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[660px] sm:min-h-[720px] lg:min-h-[820px] flex items-end overflow-hidden bg-[#030608] mb-16 sm:mb-24 pt-28 sm:pt-36">
        {/* Cinematic Video Background with Responsive 4K Poster Fallback */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/case-studies/tuitionstime-hero.webp"
            className="w-full h-full object-cover opacity-65 filter brightness-[0.85] contrast-[1.08]"
          >
            <source
              src="/videos/case-studies/tuitionstime-hero.mp4"
              type="video/mp4"
            />
            <source
              src="/videos/case-studies/tuitionstime-hero.webm"
              type="video/webm"
            />
          </video>

          {/* Carefully Balanced Dark Gradient Overlays for High Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030608] via-[#030608]/75 to-[#030608]/25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030608]/95 via-[#030608]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(3,6,8,0.92)_0%,transparent_75%)] pointer-events-none" />
        </div>

        {/* Bottom-Left Positioned Headline, Supporting Description, CTA & Metrics */}
        <div className="relative z-10 max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-3xl text-left space-y-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#071522]/90 backdrop-blur-md border border-[#00D4F0]/40 text-[#00D4F0]">
              <span className="w-2 h-2 rounded-full bg-[#00D4F0] animate-pulse" />
              <span>Case Study • EdTech Marketplace</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] break-words">
              How We Engineered Tuitionstime&apos;s Complete{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4F0] to-[#078FE8]">
                EdTech Marketplace
              </span>
            </h1>

            {/* Concise Supporting Description */}
            <p className="text-base sm:text-lg lg:text-xl text-[#94A3B8] leading-relaxed font-normal max-w-2xl break-words">
              An end-to-end learning platform connecting students, tutors, and
              administrators through discovery, live classes, learning resources,
              analytics, and payments.
            </p>

            {/* Subtle CTA & Left-Aligned Key Metrics */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <a
                href="#story"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00D4F0] to-[#078FE8] hover:opacity-95 text-black font-mono text-xs uppercase font-extrabold tracking-wider transition-all duration-300 shadow-lg shadow-[#00D4F0]/25 group shrink-0"
              >
                <span>Explore the Case Study</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* Key Metrics Strip Aligned on the Left */}
              <div className="grid grid-cols-3 gap-3 sm:gap-8 border-t sm:border-t-0 sm:border-l border-white/15 pt-4 sm:pt-0 sm:pl-8">
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl font-black font-mono text-white">
                    10K+
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#94A3B8] font-mono uppercase tracking-wider break-words leading-tight">
                    Active Students
                  </div>
                </div>
                <div className="border-l border-white/10 pl-3 sm:pl-8 min-w-0">
                  <div className="text-xl sm:text-2xl font-black font-mono text-white">
                    2K+
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#94A3B8] font-mono uppercase tracking-wider break-words leading-tight">
                    Expert Tutors
                  </div>
                </div>
                <div className="border-l border-white/10 pl-3 sm:pl-8 min-w-0">
                  <div className="text-xl sm:text-2xl font-black font-mono text-white">
                    50K+
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#94A3B8] font-mono uppercase tracking-wider break-words leading-tight">
                    Classes Done
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CASE STUDY NARRATIVE CONTENT */}
      {/* ========================================================================= */}
      <div
        id="story"
        className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28 pb-32 relative z-10 scroll-mt-24"
      >
        {/* ARCHITECTURE — THE THREE-SIDED LEARNING ECOSYSTEM */}
        <section className="space-y-8 text-left">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D4F0]">
              PLATFORM TOPOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight break-words">
              The Three-Sided Learning Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed break-words">
              Traditional directories fail because they decouple tutor discovery
              from execution. We architected a unified three-sided operating
              model connecting students, verified tutors, and platform administrators
              through automated state machines and shared event streams.
            </p>
          </div>

          {/* Full-width Screenshot Container with object-contain to prevent cropping */}
          <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00D4F0]/20 hover:border-[#00D4F0]/40 bg-[#03080E] transition-all duration-300">
            <div className="relative w-full aspect-[16/9] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/case-studies/tuitionstime/ecosystem.webp"
                alt="The Three-Sided Learning Ecosystem Architecture"
                fill
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 1400px) 95vw, 1360px"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/40 transition-colors flex flex-col justify-start space-y-3 min-w-0 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#00D4F0]/10 border border-[#00D4F0]/30 flex items-center justify-center text-[#00D4F0] shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white break-words leading-snug">Students &amp; Parents</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed break-words">
                Personalized tutor search, instant 1-click free demo bookings,
                in-app WebRTC classroom access, attendance verification, and notes download.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/40 transition-colors flex flex-col justify-start space-y-3 min-w-0 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#00D4F0]/10 border border-[#00D4F0]/30 flex items-center justify-center text-[#00D4F0] shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white break-words leading-snug">Verified Tutors</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed break-words">
                Credential verification vault, lead discovery feed, calendar sync,
                automated attendance logs, and instant escrow wallet payouts.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/40 transition-colors flex flex-col justify-start space-y-3 min-w-0 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#00D4F0]/10 border border-[#00D4F0]/30 flex items-center justify-center text-[#00D4F0] shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white break-words leading-snug">Platform Operations</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed break-words">
                Central moderation cockpit, tutor KYC approvals, automated dispute
                arbitration, financial reconciliation, and programmatic SEO telemetry.
              </p>
            </div>
          </div>
        </section>

        {/* MATCHING — SCALING THE RELATIONSHIP BETWEEN STUDENTS & TUTORS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-5 text-left min-w-0">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D4F0]">
              USER EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight break-words">
              Scaling the Relationship Between Students and Tutors
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed break-words">
              In tutoring marketplaces, trust is established in the initial discovery.
              We engineered rich tutor profiles that showcase verified educational
              credentials, subject specializations, hourly pricing tiers, and authentic
              student reviews.
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-[#94A3B8]">
              <li className="flex items-start gap-3 min-w-0">
                <CheckCircle2 className="w-4 h-4 text-[#00D4F0] shrink-0 mt-0.5" />
                <span className="flex-1 leading-relaxed break-words">Verified educator credentials with identity checks</span>
              </li>
              <li className="flex items-start gap-3 min-w-0">
                <CheckCircle2 className="w-4 h-4 text-[#00D4F0] shrink-0 mt-0.5" />
                <span className="flex-1 leading-relaxed break-words">Real-time availability matrix synced across timezones</span>
              </li>
              <li className="flex items-start gap-3 min-w-0">
                <CheckCircle2 className="w-4 h-4 text-[#00D4F0] shrink-0 mt-0.5" />
                <span className="flex-1 leading-relaxed break-words">Instant 1-click free demo request with zero friction</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-[#00D4F0]/20 hover:border-[#00D4F0]/40 bg-[#03080E] transition-all duration-300">
            <div className="relative w-full aspect-[16/9] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/case-studies/tuitionstime/tutor-discovery.webp"
                alt="Tutor Profile & Marketplace Interface"
                fill
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 1024px) 100vw, 750px"
              />
            </div>
          </div>
        </section>

        {/* ENGINEERING — PRODUCT ENGINEERING BEYOND THE FRONTEND */}
        <section className="space-y-8 text-left">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D4F0]">
              CORE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight break-words">
              Product Engineering Beyond the Frontend
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed break-words">
              Underneath the marketplace UI lies an enterprise infrastructure
              engineered for high concurrency, real-time audio/video streaming, and
              tamper-proof financial state machines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/40 transition-colors flex flex-col justify-start space-y-3 min-w-0 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#00D4F0]/10 border border-[#00D4F0]/30 flex items-center justify-center text-[#00D4F0] shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white break-words leading-snug">Marketplace Engine</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed break-words">
                Deterministic two-sided state machine handling matching, booking confirmations,
                rescheduling locks, and session expiration rules.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/40 transition-colors flex flex-col justify-start space-y-3 min-w-0 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#00D4F0]/10 border border-[#00D4F0]/30 flex items-center justify-center text-[#00D4F0] shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white break-words leading-snug">Backend Services</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed break-words">
                Node.js and PostgreSQL cluster with Redis caching, guaranteeing sub-250ms
                search response times across thousands of concurrent learners.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/40 transition-colors flex flex-col justify-start space-y-3 min-w-0 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#00D4F0]/10 border border-[#00D4F0]/30 flex items-center justify-center text-[#00D4F0] shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white break-words leading-snug">Secure Transactions</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed break-words">
                Double-entry escrow ledger architecture. Funds stay secure in escrow
                until sessions are verified complete and signed off.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/40 transition-colors flex flex-col justify-start space-y-3 min-w-0 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#00D4F0]/10 border border-[#00D4F0]/30 flex items-center justify-center text-[#00D4F0] shrink-0">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white break-words leading-snug">Real-Time Core</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed break-words">
                Automated calendar synchronization, dynamic meeting room generation,
                and WebRTC presence channels with instant attendance timestamps.
              </p>
            </div>
          </div>
        </section>

        {/* DISCOVERY — DISCOVERY WORKS IN BOTH DIRECTIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-[#00D4F0]/20 hover:border-[#00D4F0]/40 bg-[#03080E] transition-all duration-300 order-2 lg:order-1">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/case-studies/tuitionstime/discovery-engine-v2.webp"
                alt="Dual-Direction Discovery Engine Interface"
                fill
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 1024px) 100vw, 750px"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5 text-left order-1 lg:order-2 min-w-0">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D4F0]">
              BIDIRECTIONAL SEARCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight break-words">
              Discovery Works in Both Directions
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed break-words">
              Traditional marketplaces only let students browse tutors. Tuitionstime
              introduces bidirectional matching: students discover tutors through
              granular subject filters, while verified educators can browse open
              student tuition requests and offer introductory demos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 min-w-0">
              <div className="p-4 sm:p-5 rounded-xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors min-w-0 flex flex-col justify-start">
                <div className="text-sm sm:text-base font-bold text-white break-words">Student Discovery</div>
                <div className="text-xs sm:text-sm text-[#94A3B8] mt-1.5 leading-relaxed break-words">
                  Filter by board, grade, hourly budget, timing &amp; ratings.
                </div>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors min-w-0 flex flex-col justify-start">
                <div className="text-sm sm:text-base font-bold text-white break-words">Tutor Opportunity Feed</div>
                <div className="text-xs sm:text-sm text-[#94A3B8] mt-1.5 leading-relaxed break-words">
                  Discover student requirement postings and submit proposals.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROFILES — STRUCTURED PREFERENCES IMPROVE MATCHING */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-5 text-left min-w-0">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D4F0]">
              MATCHING ENGINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight break-words">
              Structured Preferences Improve Matching
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed break-words">
              Matching failure happens when critical criteria are missed early.
              We developed a 7-parameter matching ontology capturing education board
              (CBSE, ICSE, State, IB), subject, grade level, pricing bandwidth,
              preferred timeslots, and gender preference.
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#94A3B8] min-w-0">
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-lg bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors min-w-0">
                <Check className="w-4 h-4 text-[#00D4F0] shrink-0 mt-0.5" />
                <span className="flex-1 leading-relaxed break-words">Multi-board taxonomy: CBSE, ICSE, IB, State Boards</span>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-lg bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors min-w-0">
                <Check className="w-4 h-4 text-[#00D4F0] shrink-0 mt-0.5" />
                <span className="flex-1 leading-relaxed break-words">Dynamic budget matching preventing pricing mismatch</span>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-lg bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors min-w-0">
                <Check className="w-4 h-4 text-[#00D4F0] shrink-0 mt-0.5" />
                <span className="flex-1 leading-relaxed break-words">Automated calendar slot union across student &amp; tutor</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-[#00D4F0]/20 hover:border-[#00D4F0]/40 bg-[#03080E] transition-all duration-300">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/case-studies/tuitionstime/matching-preferences-v2.webp"
                alt="Structured Preferences Matching Architecture"
                fill
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 1024px) 100vw, 750px"
              />
            </div>
          </div>
        </section>

        {/* WORKFLOW — FROM FREE DEMO TO REGULAR LEARNING */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-[#00D4F0]/20 hover:border-[#00D4F0]/40 bg-[#03080E] transition-all duration-300 order-2 lg:order-1">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/case-studies/tuitionstime/demo-scheduling-v2.webp"
                alt="Conversion Workflow from Demo to Regular Classes"
                fill
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 1024px) 100vw, 750px"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5 text-left order-1 lg:order-2 min-w-0">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D4F0]">
              CONVERSION WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight break-words">
              From Free Demo to Regular Learning
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed break-words">
              Before CodePlaced, free demo coordination was handled manually via
              scattered chats. We replaced this with an automated lifecycle:
              1-click booking, calendar synchronization, automated video meeting
              generation, and automated package upgrade prompts following completion.
            </p>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 pt-2 text-center min-w-0">
              <div className="p-3 sm:p-4 rounded-xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors flex flex-col justify-center min-w-0">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-[#00D4F0] font-mono break-words">1-Click</div>
                <div className="text-[10px] sm:text-xs text-[#94A3B8] mt-1 leading-tight sm:leading-normal break-words">Demo Request</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors flex flex-col justify-center min-w-0">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-[#00D4F0] font-mono break-words">Auto</div>
                <div className="text-[10px] sm:text-xs text-[#94A3B8] mt-1 leading-tight sm:leading-normal break-words">Meeting Sync</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors flex flex-col justify-center min-w-0">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-[#00D4F0] font-mono break-words">88.4%</div>
                <div className="text-[10px] sm:text-xs text-[#94A3B8] mt-1 leading-tight sm:leading-normal break-words">Demo Conversion</div>
              </div>
            </div>
          </div>
        </section>

        {/* MONETIZATION — MORE THAN ONE-TO-ONE TUITION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-5 text-left min-w-0">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D4F0]">
              LEARNING MODALITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight break-words">
              More Than One-to-One Tuition
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed break-words">
              To maximize tutor monetization and student accessibility, we expanded
              beyond single private sessions. Tuitionstime supports group batch courses
              with seat limits, cohort discussions, and a digital notes marketplace
              where verified educators sell downloadable study guides.
            </p>
            <div className="space-y-3 pt-1 min-w-0">
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors min-w-0">
                <BookOpen className="w-5 h-5 text-[#00D4F0] shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm sm:text-base font-bold text-white break-words">Cohort Group Batches</div>
                  <div className="text-xs sm:text-sm text-[#94A3B8] mt-0.5 leading-relaxed break-words">
                    Shared video classrooms with dynamic participant limits and seat pricing.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors min-w-0">
                <FileText className="w-5 h-5 text-[#00D4F0] shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm sm:text-base font-bold text-white break-words">Digital Notes Commerce</div>
                  <div className="text-xs sm:text-sm text-[#94A3B8] mt-0.5 leading-relaxed break-words">
                    Secure PDF study materials with instant payment unlocks.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-[#00D4F0]/20 hover:border-[#00D4F0]/40 bg-[#03080E] transition-all duration-300">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/case-studies/tuitionstime/learning-batches-v2.webp"
                alt="Group Batches and Notes Commerce"
                fill
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 1024px) 100vw, 750px"
              />
            </div>
          </div>
        </section>

        {/* COMMERCE — VERIFICATION, WALLETS, AND TUTOR PAYOUTS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-[#00D4F0]/20 hover:border-[#00D4F0]/40 bg-[#03080E] transition-all duration-300 order-2 lg:order-1">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/case-studies/tuitionstime/wallet-payouts-v2.webp"
                alt="Trust, Verification Vault, and Escrow Payouts"
                fill
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 1024px) 100vw, 750px"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5 text-left order-1 lg:order-2 min-w-0">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D4F0]">
              FINTECH &amp; TRUST
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight break-words">
              Verification, Wallets, and Tutor Payouts
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed break-words">
              Tutors cannot earn without verified trust, and students cannot book
              without payment safety. We engineered a dual-tier identity verification
              vault and an automated escrow ledger: payments are held safely until classes
              are completed, then disbursed directly via automated bank transfers.
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#94A3B8] min-w-0">
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-lg bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors min-w-0">
                <ShieldCheck className="w-4 h-4 text-[#00D4F0] shrink-0 mt-0.5" />
                <span className="flex-1 leading-relaxed break-words">Government ID, qualification &amp; bank account KYC vault</span>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-lg bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors min-w-0">
                <Wallet className="w-4 h-4 text-[#00D4F0] shrink-0 mt-0.5" />
                <span className="flex-1 leading-relaxed break-words">Zero-dispute escrow wallet with automatic session settlement</span>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-lg bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors min-w-0">
                <DollarSign className="w-4 h-4 text-[#00D4F0] shrink-0 mt-0.5" />
                <span className="flex-1 leading-relaxed break-words">Scheduled automated payouts directly to tutor bank accounts</span>
              </div>
            </div>
          </div>
        </section>

        {/* TELEMETRY — ANALYTICS FOR TUTORS AND ADMINISTRATORS */}
        <section className="space-y-8 text-left">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D4F0]">
              INTELLIGENCE &amp; TELEMETRY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight break-words">
              Analytics for Tutors and Administrators
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed break-words">
              Continuous visibility into educator performance, demo-to-class
              conversion rates, student retention cohorts, and revenue streams.
              Tutors receive actionable feedback scorecards, while administrators
              monitor ecosystem health in real time.
            </p>
          </div>

          <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00D4F0]/20 hover:border-[#00D4F0]/40 bg-[#03080E] transition-all duration-300">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/case-studies/tuitionstime/analytics-dashboard-v2.webp"
                alt="Analytics and Performance Intelligence Dashboard"
                fill
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 1400px) 95vw, 1360px"
              />
            </div>
          </div>
        </section>

        {/* OPERATIONS — THE CONTROL LAYER BEHIND THE MARKETPLACE */}
        <section className="space-y-8 text-left">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D4F0]">
              OPERATIONS COCKPIT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight break-words">
              The Control Layer Behind the Marketplace
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed break-words">
              Operating a high-velocity marketplace requires unified operational
              oversight. The Tuitionstime administrative control layer empowers
              operators to verify educator KYC documents, arbitrate refund requests,
              audit attendance records, and adjust platform commissions.
            </p>
          </div>

          <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00D4F0]/20 hover:border-[#00D4F0]/40 bg-[#03080E] transition-all duration-300">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/case-studies/tuitionstime/admin-control-v2.webp"
                alt="Central Administrative Control Layer and Governance Cockpit"
                fill
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 1400px) 95vw, 1360px"
              />
            </div>
          </div>
        </section>

        {/* GROWTH — BUILDING AN ORGANIC ACQUISITION ENGINE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-5 text-left min-w-0">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D4F0]">
              PROGRAMMATIC SEO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight break-words">
              Building an Organic Acquisition Engine
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed break-words">
              Paid ads quickly become uneconomical for local tutor marketplaces.
              We architected a programmatic SEO engine that automatically indexes
              thousands of high-intent search landing pages spanning subjects, boards,
              and geographic localities with zero manual content creation.
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#94A3B8] min-w-0">
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-lg bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors min-w-0">
                <Globe2 className="w-4 h-4 text-[#00D4F0] shrink-0 mt-0.5" />
                <span className="flex-1 leading-relaxed break-words">Dynamic landing matrix: [Subject] + [Grade] + [Location]</span>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-lg bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors min-w-0">
                <Cpu className="w-4 h-4 text-[#00D4F0] shrink-0 mt-0.5" />
                <span className="flex-1 leading-relaxed break-words">Automated JSON-LD schema with live pricing &amp; review aggregates</span>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-lg bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/30 transition-colors min-w-0">
                <TrendingUp className="w-4 h-4 text-[#00D4F0] shrink-0 mt-0.5" />
                <span className="flex-1 leading-relaxed break-words">Sub-second page generation via Next.js ISR architecture</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-[#00D4F0]/20 hover:border-[#00D4F0]/40 bg-[#03080E] transition-all duration-300">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/case-studies/tuitionstime/organic-acquisition-v2.webp"
                alt="Programmatic SEO and Search Engine Architecture"
                fill
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 1024px) 100vw, 750px"
              />
            </div>
          </div>
        </section>

        {/* PARTNERSHIP — A CONTINUOUS PRODUCT PARTNERSHIP */}
        <section className="space-y-8 text-left">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D4F0]">
              ENGINEERING METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight break-words">
              A Continuous Product Partnership
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed break-words">
              We do not treat engineering as transactional handoffs. CodePlaced
              operates as an embedded product engineering partner, continuously
              improving core performance, deploying feature increments, and scaling
              platform architecture alongside marketplace growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 text-left">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/40 transition-colors flex flex-col justify-start space-y-3 min-w-0 h-full">
              <div className="text-xs font-mono font-bold text-[#00D4F0] tracking-wider uppercase">DISCOVERY</div>
              <h3 className="text-base sm:text-lg font-bold text-white break-words leading-snug">Product Blueprint</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed break-words">
                Marketplace ontology, user journeys, edge-case analysis, and complete
                system schema definition.
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/40 transition-colors flex flex-col justify-start space-y-3 min-w-0 h-full">
              <div className="text-xs font-mono font-bold text-[#00D4F0] tracking-wider uppercase">SPRINTING</div>
              <h3 className="text-base sm:text-lg font-bold text-white break-words leading-snug">Full-Stack Builds</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed break-words">
                Rapid two-week engineering cycles delivering verified, tested,
                and production-ready feature modules.
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/40 transition-colors flex flex-col justify-start space-y-3 min-w-0 h-full">
              <div className="text-xs font-mono font-bold text-[#00D4F0] tracking-wider uppercase">DEPLOYMENT</div>
              <h3 className="text-base sm:text-lg font-bold text-white break-words leading-snug">Resilient Cloud</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed break-words">
                Multi-region auto-scaling cloud cluster with sub-second database
                replication and 99.99% availability SLA.
              </p>
            </div>
            <div className="p-5 sm:p-6 rounded-2xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/40 transition-colors flex flex-col justify-start space-y-3 min-w-0 h-full">
              <div className="text-xs font-mono font-bold text-[#00D4F0] tracking-wider uppercase">GROWTH &amp; SCALE</div>
              <h3 className="text-base sm:text-lg font-bold text-white break-words leading-snug">Scale &amp; Optimizations</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed break-words">
                Ongoing telemetry monitoring, conversion rate optimization, and
                continuous architectural improvements.
              </p>
            </div>
          </div>
        </section>

        {/* CAPABILITIES — TECHNICAL CAPABILITIES */}
        <section className="space-y-8 text-left">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00D4F0]">
              TECHNICAL CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight break-words">
              Our Core Engineering Domains
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed break-words">
              The technical challenges solved in the Tuitionstime build showcase
              our production capabilities across marketplace architecture, real-time
              telecoms, and financial ledgers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/40 transition-colors flex flex-col justify-start space-y-3 min-w-0 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#00D4F0]/10 border border-[#00D4F0]/30 flex items-center justify-center text-[#00D4F0] shrink-0">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white break-words leading-snug">Digital Marketplaces</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed break-words">
                Multi-sided matching algorithms, supply onboarding pipelines,
                and conversion funnels.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/40 transition-colors flex flex-col justify-start space-y-3 min-w-0 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#00D4F0]/10 border border-[#00D4F0]/30 flex items-center justify-center text-[#00D4F0] shrink-0">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white break-words leading-snug">Real-Time Video &amp; WebSockets</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed break-words">
                Ultra-low latency audio/video classrooms, live whiteboard state sync,
                and attendance tracking.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#071522] border border-white/[0.08] hover:border-[#00D4F0]/40 transition-colors flex flex-col justify-start space-y-3 min-w-0 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#00D4F0]/10 border border-[#00D4F0]/30 flex items-center justify-center text-[#00D4F0] shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white break-words leading-snug">Escrow &amp; FinTech Ledgers</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed break-words">
                Double-entry transaction balances, payout scheduling, dispute
                resolution, and regulatory compliance.
              </p>
            </div>
          </div>
        </section>

        {/* CONVERSION — FINAL CTA */}
        <section className="relative rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-br from-[#071522] to-[#030608] border border-[#00D4F0]/30 shadow-2xl text-center space-y-6">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00D4F0]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-block text-xs font-mono font-bold tracking-widest uppercase text-[#00D4F0]">
              READY TO BUILD?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight break-words">
              Have a Marketplace or SaaS Idea That Needs More Than a Frontend?
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto break-words">
              From day-one architecture to multi-tenant scale, CodePlaced builds
              production platforms engineered for real business outcomes. Let&apos;s
              discuss your technical roadmap.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#078FE8] to-[#00D4F0] text-black font-mono font-extrabold text-sm uppercase tracking-wider hover:opacity-95 transition-opacity shadow-lg shadow-[#00D4F0]/20 flex items-center justify-center gap-2"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0D1117] hover:bg-[#141B22] text-[#94A3B8] hover:text-white border border-white/[0.1] font-mono text-xs transition-colors"
              >
                Explore All Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
