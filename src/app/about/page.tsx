"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Cpu,
  Eye,
  Handshake,
  Minus,
  Plus,
  ShieldCheck,
  Users,
} from "lucide-react";

const EASING = [0.22, 1, 0.36, 1] as const;

const STUDIO_METRICS = [
  {
    value: "20+",
    title: "Trusted Clients",
    subtitle: "Startups & Enterprises",
  },
  {
    value: "10+",
    title: "Countries Reached",
    subtitle: "Global Delivery",
  },
];

const ABOUT_CHAPTERS = [
  {
    num: "01.",
    title: "Our Story & Problem-First Approach",
    targetId: "our-story",
  },
  {
    num: "02.",
    title: "Mission & Vision",
    targetId: "mission-vision",
  },
  {
    num: "03.",
    title: "The Principles Behind Every Project",
    targetId: "principles",
  },
  {
    num: "04.",
    title: "Leadership & Core Team",
    targetId: "leadership",
  },
];

const CORE_VALUES = [
  {
    num: "01",
    title: "Ownership",
    desc: "We take complete end-to-end accountability for project success, treating every system as if it were our own business.",
    icon: ShieldCheck,
  },
  {
    num: "02",
    title: "Transparency",
    desc: "Clear sprint milestones, open progress visibility, and honest communication with no hidden surprises.",
    icon: Eye,
  },
  {
    num: "03",
    title: "Innovation",
    desc: "Engineering modern, future-proof architectures and AI solutions that create a genuine competitive moat.",
    icon: Cpu,
  },
  {
    num: "04",
    title: "Quality",
    desc: "Enterprise-grade code quality, robust security testing, and reliable performance across every release.",
    icon: Award,
  },
  {
    num: "05",
    title: "Collaboration",
    desc: "Partnering directly with your leadership and engineering pods as a cohesive, high-velocity team.",
    icon: Users,
  },
  {
    num: "06",
    title: "Long-Term Partnership",
    desc: "We focus on sustainable architectures, continuous improvements, and compounding long-term value.",
    icon: Handshake,
  },
];

const LEADERSHIP_TEAM = [
  {
    name: "Manya Tyagi",
    role: "Founder",
    bio: "Manya leads business intelligence, analytics, AI initiatives, and growth strategies at CodePlaced. She specializes in turning complex datasets into actionable insights that help organizations make smarter decisions, streamline operations, and unlock scalable revenue growth.",
    image: "/team/Manya.png",
    imagePosition: "object-center",
    focusAreas: [
      "AI Strategy",
      "Business Intelligence",
      "Analytics",
      "Product Innovation",
    ],
    linkedin: "https://www.linkedin.com/in/manya-tyagi-626a421b2/",
  },
  {
    name: "Gaurav Shokhanda",
    role: "Co-Founder & Tech Lead",
    bio: "Gaurav oversees technology strategy, software architecture, cloud infrastructure, and product engineering at CodePlaced. He helps businesses build scalable, cloud-native systems and AI automation workflows that support long-term enterprise growth.",
    image: "/team/gaurav.jpg",
    imagePosition: "object-center",
    focusAreas: [
      "Cloud Architecture",
      "Full-Stack Engineering",
      "Enterprise Systems",
      "Technical Leadership",
    ],
    linkedin: "https://www.linkedin.com/in/gaurav-shokhanda-b5ba12194/",
  },
];

const ENGINEERING_TEAM = [
  {
    name: "Ankit",
    role: "Data Analyst Manager",
    image: "/team/team-2.jpg",
  },
  {
    name: "Prajwal Kumar Rathi",
    role: "Data Analyst",
    image: "/team/team-7.jpg",
  },
  {
    name: "Naman",
    role: "Data Analyst",
    image: "/team/team-5.jpg",
  },
  {
    name: "Jivika",
    role: "Content & Growth",
    image: "/team/team-3.jpg",
  },
  {
    name: "Sadiya Ansari",
    role: "Growth & Editing Specialist",
    image: "/team/team-6.jpg",
  },
  {
    name: "Tanya Gupta",
    role: "Marketing Specialist",
    image: "/team/tanya-gupta.webp",
  },
  {
    name: "Aditya Kumar",
    role: "Data Analyst",
    image: "/team/aditya-kumar.webp",
  },
];

const FAQ_ITEMS = [
  {
    q: "What industries does CodePlaced work with?",
    a: "We partner with Ecommerce, EdTech, Insurance, Human Resources, Healthcare, and Real Estate enterprises. Our engineering pods tailor each architecture to industry-specific compliance requirements like HIPAA, SOC2, and GDPR.",
  },
  {
    q: "How long do projects typically take to deliver?",
    a: "Most scoped projects—such as executive dashboards, data lakehouses, MVP apps, and AI copilots—are delivered in fixed 2–4 week production cycles. Larger enterprise transformations are phased into predictable 2-week agile sprints.",
  },
  {
    q: "Do you provide AI consulting and production implementation?",
    a: "Yes. We offer end-to-end AI consulting and implementation, including domain-specific RAG architectures, multi-agent automated workflows, private LLM fine-tuning, and low-latency vector search systems with strict hallucination guardrails.",
  },
  {
    q: "Can you modernize our existing legacy systems and databases?",
    a: "Absolutely. We specialize in zero-downtime database migrations, monolith-to-microservices re-architectures, legacy CRM integrations, and cloud cost optimizations without causing downtime to live business operations.",
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="font-sans relative min-h-screen bg-[#070B0E] text-[#FFFFFF] selection:bg-[#06B6D4] selection:text-[#070B0E]">
      {/* ===================================================================== */}
      {/* 01. UPGRADED HERO — ASYMMETRIC ARCHITECTURAL LAYOUT + EDITORIAL LEDGER */}
      {/* ===================================================================== */}
      <section className="relative overflow-hidden bg-[#070B0E] text-[#FFFFFF] border-b border-white/10 pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Column (58%) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: EASING }}
              className="space-y-6 sm:space-y-7"
            >
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#06B6D4]">
                • ABOUT CODEPLACED
              </span>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-extrabold tracking-[-0.03em] leading-[1.07] text-[#FFFFFF] [text-wrap:balance]">
                Building Practical Technology Solutions That Deliver{" "}
                <span className="text-[#06B6D4]">Lasting Impact.</span>
              </h1>

              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl font-normal">
                CodePlaced is a technology and data consultancy helping
                businesses build scalable software, reliable data platforms, and
                practical AI solutions that drive measurable growth.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="#leadership"
                  onClick={(e) => scrollToSection(e, "leadership")}
                  className="h-12 px-7 rounded-full bg-[#06B6D4] hover:bg-[#06B6D4]/90 text-[#070B0E] font-bold text-sm sm:text-[15px] inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-[#06B6D4] focus-visible:outline-offset-2 group"
                >
                  <span>Meet Our Leaders</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="#our-story"
                  onClick={(e) => scrollToSection(e, "our-story")}
                  className="h-12 px-7 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-[#FFFFFF] font-semibold text-sm sm:text-[15px] border border-white/15 hover:border-[#06B6D4]/60 inline-flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#06B6D4] focus-visible:outline-offset-2"
                >
                  Read Our Story
                </a>
              </div>
            </motion.div>

            {/* Right Column (42%) — Minimalist Editorial Ledger */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.1,
                ease: EASING,
              }}
              className="w-full"
            >
              {/* Header Row */}
              <div className="flex items-center gap-2.5 pb-4 border-b border-[rgba(255,255,255,0.12)]">
                <span
                  aria-hidden="true"
                  className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse motion-reduce:animate-none shrink-0"
                />
                <span className="font-mono text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] text-white/75">
                  STUDIO SNAPSHOT // WHO WE ARE
                </span>
              </div>

              {/* 2-Column Big Metric Row */}
              <div className="grid grid-cols-2 gap-6 sm:gap-10 py-7 sm:py-8 border-b border-[rgba(255,255,255,0.12)]">
                {STUDIO_METRICS.map((metric) => (
                  <div key={metric.title} className="space-y-1.5">
                    <div className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-[#FFFFFF] leading-none">
                      {metric.value}
                    </div>
                    <div className="font-mono text-xs sm:text-[13px] font-semibold text-[#06B6D4] pt-1">
                      {metric.title}
                    </div>
                    <div className="text-xs text-white/60">{metric.subtitle}</div>
                  </div>
                ))}
              </div>

              {/* Interactive Chapter Index */}
              <nav aria-label="About page sections" className="pt-2">
                <ul className="divide-y divide-[rgba(255,255,255,0.12)] border-b border-[rgba(255,255,255,0.12)]">
                  {ABOUT_CHAPTERS.map((chapter) => (
                    <li key={chapter.num}>
                      <a
                        href={`#${chapter.targetId}`}
                        onClick={(e) => scrollToSection(e, chapter.targetId)}
                        className="py-3.5 flex items-center justify-between gap-4 group focus-visible:outline-2 focus-visible:outline-[#06B6D4] focus-visible:outline-offset-2"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <span className="font-mono text-xs font-semibold text-white/45 group-hover:text-[#06B6D4] group-focus-visible:text-[#06B6D4] transition-colors shrink-0">
                            {chapter.num}
                          </span>
                          <span className="text-sm sm:text-[15px] font-medium text-white/75 group-hover:text-[#FFFFFF] group-focus-visible:text-[#FFFFFF] transition-colors truncate">
                            {chapter.title}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#06B6D4] group-focus-visible:text-[#06B6D4] group-hover:translate-x-1 transition-all shrink-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 02. OUR STORY — EDITORIAL 2-COLUMN SPLIT (#FFFFFF)                    */}
      {/* ===================================================================== */}
      <section
        id="our-story"
        className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] text-[#070B0E] border-b border-[#070B0E]/10"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#06B6D4] block">
                OUR STORY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-[-0.03em] text-[#070B0E] leading-[1.14]">
                Great Solutions Start With Understanding the Problem.
              </h2>
              <p className="text-sm sm:text-base text-[#070B0E]/65 leading-relaxed">
                A modern technology consultancy built on business clarity,
                engineering discipline, and compounding long-term impact.
              </p>
            </div>

            <div className="lg:col-span-7 border-t-2 border-[#06B6D4] pt-6 lg:border-t-0 lg:pt-0 lg:border-l-2 lg:pl-10 space-y-5 text-base sm:text-[17px] text-[#070B0E]/80 leading-relaxed">
              <p>
                CodePlaced is built around a simple belief: technology should
                solve meaningful business problems.
              </p>
              <p>
                Businesses often deal with disconnected systems, repetitive
                processes, scattered data, or ideas that need the right
                technical direction.
              </p>
              <p>
                We bring together development, analytics, and AI capabilities to
                understand these challenges and build solutions that make
                everyday operations simpler, more connected, and more effective.
              </p>
              <p>
                Our approach begins with listening, understanding the business,
                and choosing technology that fits the problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 03. MISSION & VISION — MINIMAL DARK GLASS PANELS (#070B0E)            */}
      {/* ===================================================================== */}
      <section
        id="mission-vision"
        className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-[#070B0E] text-[#FFFFFF] border-b border-white/10"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#06B6D4] block">
              PURPOSE &amp; DIRECTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-[-0.03em] text-[#FFFFFF]">
              Mission &amp; Vision
            </h2>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed">
              The fundamental objectives that shape our engineering decisions
              and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl bg-white/[0.03] border border-white/15 hover:border-[#06B6D4]/50 transition-colors p-7 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#06B6D4]">
                    OUR MISSION
                  </span>
                </div>
                <p className="text-lg sm:text-xl font-semibold text-[#FFFFFF] leading-relaxed">
                  “To help businesses solve practical challenges through
                  thoughtful technology, connected data, and intelligent
                  automation.”
                </p>
              </div>
              <p className="text-sm text-white/65 leading-relaxed pt-5 border-t border-white/10">
                We measure our success not by code volume, but by measurable
                efficiency gained, manual bottlenecks removed, and revenue
                unlocked.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/15 hover:border-[#06B6D4]/50 transition-colors p-7 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#06B6D4]">
                    OUR VISION
                  </span>
                </div>
                <p className="text-lg sm:text-xl font-semibold text-[#FFFFFF] leading-relaxed">
                  “To make useful, scalable technology more accessible to
                  businesses, helping them operate smarter and grow with
                  confidence.”
                </p>
              </div>
              <p className="text-sm text-white/65 leading-relaxed pt-5 border-t border-white/10">
                We envision a future where modern software, data lakes, and AI
                automation are accessible and reliable for ambitious
                organizations worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 04. OUR VALUES — CLEAN 2-COL X 3-ROW ICON GRID (#FFFFFF)              */}
      {/* ===================================================================== */}
      <section
        id="principles"
        className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] text-[#070B0E] border-b border-[#070B0E]/10"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#06B6D4] block">
              OUR VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-[-0.03em] text-[#070B0E]">
              The Principles Behind Every Project
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {CORE_VALUES.map((value) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.num}
                  className="pt-6 border-t border-[#070B0E]/10 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#06B6D4]">
                        {value.num}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#070B0E] tracking-[-0.02em]">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#070B0E]/70 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 05. EXECUTIVE LEADERSHIP — WHITE-BOTTOMED CARDS ON OBSIDIAN (#070B0E) */}
      {/* ===================================================================== */}
      <div id="leadership-team" className="scroll-mt-20">
        <section
          id="leadership"
          className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-[#070B0E] text-[#FFFFFF] border-b border-white/10"
        >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#06B6D4] block">
              LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-[-0.03em] text-[#FFFFFF]">
              The People Leading CodePlaced.
            </h2>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed">
              Built by experienced professionals focused on technology,
              analytics, innovation, and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto items-stretch">
            {LEADERSHIP_TEAM.map((leader) => (
              <div
                key={leader.name}
                className="rounded-2xl bg-[#FFFFFF] border border-white/15 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[420px] bg-[#F8FAFC] overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className={`w-full h-full object-cover ${leader.imagePosition} grayscale contrast-[1.04] group-hover:scale-[1.02] transition-transform duration-500 ease-out`}
                    />
                  </div>

                  <div className="p-6 sm:p-8 space-y-4 text-[#070B0E]">
                    <div className="space-y-1">
                      <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#06B6D4]">
                        {leader.role}
                      </span>
                      <h3 className="text-2xl sm:text-[26px] font-extrabold tracking-[-0.02em] text-[#070B0E]">
                        {leader.name}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-[15px] text-[#070B0E]/75 leading-relaxed">
                      {leader.bio}
                    </p>

                    <div className="space-y-2 pt-1">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#070B0E]/45 block">
                        Focus Areas
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {leader.focusAreas.map((area) => (
                          <span
                            key={area}
                            className="px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#070B0E]/10 text-xs font-medium text-[#070B0E]/80"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                  <div className="pt-4 border-t border-[#070B0E]/10">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Connect on LinkedIn with ${leader.name} (opens in new tab)`}
                      className="h-11 w-full rounded-xl bg-[#070B0E] hover:bg-[#06B6D4] text-[#FFFFFF] hover:text-[#070B0E] font-bold text-sm flex items-center justify-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-[#06B6D4] focus-visible:outline-offset-2 group/btn"
                    >
                      <span>Connect on LinkedIn</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      </div>

      {/* ===================================================================== */}
      {/* 06. MEET OUR TEAM — 3-COLUMN GRID OF CIRCULAR AVATARS (#F8FAFC)       */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] text-[#070B0E] border-b border-[#070B0E]/10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#06B6D4] block">
              THE TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-[-0.03em] text-[#070B0E]">
              Meet Our Team
            </h2>
            <p className="text-sm sm:text-base text-[#070B0E]/70 leading-relaxed">
              A multidisciplinary squad of analysts, growth specialists, and
              engineers powering enterprise execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {ENGINEERING_TEAM.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-[#FFFFFF] border border-[#070B0E]/10 hover:border-[#06B6D4]/50 p-6 text-center flex flex-col items-center justify-center transition-colors group [&:nth-child(7)]:lg:col-start-2"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-[#06B6D4]/25 group-hover:ring-[#06B6D4] bg-[#F8FAFC] mb-4 shrink-0 transition-all">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#070B0E] tracking-[-0.01em]">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#06B6D4] mt-0.5">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 07. FAQ ACCORDION — INTERACTIVE CYAN +/- TOGGLES (#FFFFFF)            */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] text-[#070B0E] border-b border-[#070B0E]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#06B6D4] block">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-[-0.03em] text-[#070B0E]">
              Questions About Working With Us
            </h2>
            <p className="text-sm sm:text-base text-[#070B0E]/70 leading-relaxed">
              Clear answers on how we partner, scope, build, and support
              enterprise systems.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={item.q}
                  className="rounded-2xl bg-[#FFFFFF] border border-[#070B0E]/10 hover:border-[#06B6D4]/50 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#06B6D4] focus-visible:outline-offset-[-2px]"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#070B0E]">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#06B6D4] text-[#070B0E]"
                          : "bg-[#F8FAFC] text-[#06B6D4] border border-[#070B0E]/10"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={
                          shouldReduceMotion
                            ? false
                            : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={
                          shouldReduceMotion
                            ? { opacity: 0 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.28,
                          ease: EASING,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 text-sm text-[#070B0E]/75 leading-relaxed border-t border-[#070B0E]/10">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
