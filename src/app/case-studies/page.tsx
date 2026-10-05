"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { CASE_STUDIES_DATA, CaseStudyItem } from "@/lib/caseStudiesData";

const EASING = [0.22, 1, 0.36, 1] as const;

const HERO_OUTCOME_METRICS = [
  { value: "60+", label: "Projects Delivered", detail: "Startups & Enterprises" },
  { value: "$10M+", label: "Revenue Impact", detail: "Client Growth Generated" },
  { value: "100+", label: "Automated Workflows", detail: "Live Production Systems" },
  { value: "99%", label: "Client Satisfaction", detail: "Long-Term Retention" },
  { value: "2–4 Weeks", label: "Average Delivery", detail: "Milestone-Driven Sprints" },
];

const INDUSTRIES_FILTER = [
  "All",
  "Healthcare",
  "Retail & E-Commerce",
  "Finance",
  "Logistics",
  "Enterprise AI",
  "Manufacturing",
];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredStudies =
    selectedIndustry === "All"
      ? CASE_STUDIES_DATA
      : CASE_STUDIES_DATA.filter((item) =>
        item.industry.toLowerCase().includes(selectedIndustry.toLowerCase())
      );

  return (
    <div className="text-[#0F172A] selection:bg-[#0B4F6C] selection:text-white font-sans min-h-screen relative">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION & PROVEN OUTCOME METRICS (Compact Spacing) */}
      {/* ========================================================================= */}
      <section className="relative pt-20 pb-6 sm:pt-28 sm:pb-8 border-b border-white/40 overflow-hidden">
        {/* Soft Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[550px] pointer-events-none -z-0">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at center, rgba(19,191,234,0.14), rgba(11,79,108,0.05), transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASING }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/25 shadow-xs mb-3.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00b7c2]" />
            <span>PROVEN BUSINESS OUTCOMES</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: EASING }}
            className="text-[34px] sm:text-[48px] lg:text-[58px] font-[800] leading-[1.08] tracking-[-0.035em] text-[#082F49] max-w-4xl mx-auto [text-wrap:balance]"
          >
            Case Studies That Deliver{" "}
            <span
              className="bg-clip-text text-transparent font-extrabold inline-block"
              style={{
                backgroundImage: "linear-gradient(90deg, #0f4c81, #00b7c2)",
              }}
            >
              Measurable Business Outcomes
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASING }}
            className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mt-3.5 font-normal"
          >
            Explore how CodePlaced helps organizations build scalable software products, modern data platforms,
            AI-powered solutions, and growth systems that create measurable business impact.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: EASING }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-5"
          >
            <a
              href="#portfolio-showcase"
              className="w-full sm:w-auto h-[48px] px-8 rounded-full bg-gradient-to-r from-[#0f4c81] to-[#00b7c2] hover:from-[#082F49] hover:to-[#0f4c81] text-white font-extrabold text-[15px] shadow-lg shadow-[#00b7c2]/20 flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 group"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto h-[48px] px-8 rounded-full bg-white hover:bg-slate-50 text-[#082F49] font-bold text-[15px] border border-slate-200/90 shadow-xs flex items-center justify-center transition-all duration-300 hover:border-[#00b7c2]/40"
            >
              <span>Book Strategy Call</span>
            </Link>
          </motion.div>

          {/* Below Hero: Slim Unified Horizontal Glassmorphism Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASING }}
            className="mt-6 sm:mt-7 max-w-5xl mx-auto rounded-[20px] p-2 sm:p-2.5"
            style={{
              background: "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(0, 196, 255, 0.18)",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.04), 0 0 20px rgba(0, 196, 255, 0.04)",
            }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/70">
              {HERO_OUTCOME_METRICS.map((metric, idx) => (
                <div key={idx} className="py-2 px-3 text-center flex flex-col justify-center">
                  <div className="text-xl sm:text-2xl font-black text-[#0f4c81] tracking-tight leading-none mb-1">
                    {metric.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#082F49] leading-tight">
                    {metric.label}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium hidden sm:block mt-0.5">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Industry Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASING }}
            className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto"
          >
            {INDUSTRIES_FILTER.map((ind) => {
              const isSelected = selectedIndustry === ind;
              return (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer ${isSelected
                      ? "bg-[#082F49] text-white shadow-md shadow-[#082F49]/20 scale-105"
                      : "bg-white/80 hover:bg-white text-slate-600 hover:text-[#0f4c81] border border-slate-200/80 shadow-2xs"
                    }`}
                >
                  {ind}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CONTINUOUS EDITORIAL SHOWCASE (Appinventiv Style, Cinematic, No Cards) */}
      {/* ========================================================================= */}
      <section
        id="portfolio-showcase"
        className="pt-10 sm:pt-14 pb-24 sm:pb-32 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-36"
      >
        <AnimatePresence mode="popLayout">
          {filteredStudies.map((study: CaseStudyItem, idx: number) => {
            // Alternating 70/30 layout: Even = Image Left, Text Right | Odd = Text Left, Image Right
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.0, ease: EASING }}
                className="group"
              >
                {/* Clickable entire block opening in a new tab */}
                <Link
                  href={`/case-studies/${study.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group cursor-pointer focus:outline-none"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* Visual Container (70% on desktop: 7 cols) - Cinematic, No Border, Deep Ambient Shadow */}
                    <div
                      className={`lg:col-span-7 relative ${isEven ? "order-1" : "order-1 lg:order-2"
                        }`}
                    >
                      <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.10)] bg-slate-950 min-h-[400px] sm:min-h-[480px] lg:min-h-[540px]">
                        <img
                          src={study.heroImage}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-1000 ease-out opacity-95"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020D1A]/95 via-[#082F49]/40 to-transparent" />

                        {/* Floating Industry Badge */}
                        <div className="absolute top-6 left-6 z-10">
                          <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/95 text-[#0f4c81] shadow-md backdrop-blur-md border border-white/80">
                            {study.industry}
                          </span>
                        </div>

                        {/* Client Type & Live Telemetry Pill on Visual */}
                        <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-white">
                          <div>
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#13BFEA] block mb-0.5">
                              {study.clientType}
                            </span>
                            <h4 className="text-lg sm:text-xl font-bold text-white drop-shadow-sm line-clamp-1">
                              {study.tagline}
                            </h4>
                          </div>

                          <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-xs font-bold text-cyan-300">
                            <span className="w-2 h-2 rounded-full bg-[#13BFEA] animate-pulse" />
                            <span>Verified Story</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text Narrative Living Directly on Page (30% on desktop: 5 cols, Vertically Centered with Image) */}
                    <div
                      className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${isEven ? "order-2" : "order-2 lg:order-1"
                        }`}
                    >
                      {/* Sub-label */}
                      <div className="flex items-center gap-2 text-xs font-bold text-[#0f4c81] uppercase tracking-wider">
                        <span>Case Study 0{idx + 1}</span>
                        <span>•</span>
                        <span>{study.industry}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#082F49] leading-snug group-hover:text-[#0f4c81] transition-colors">
                        {study.title}
                      </h2>

                      {/* Editorial Paragraph */}
                      <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                        {study.shortDescription}
                      </p>

                      {/* 3 Outcome Metrics (Clean Editorial Strip with Accent Border-Left, No Boxes) */}
                      <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-slate-200/80">
                        {study.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="pl-3.5 border-l-2 border-[#00b7c2]/60">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0f4c81] tracking-tight leading-none mb-1">
                              {m.value}
                            </div>
                            <div className="text-xs font-bold text-[#082F49] leading-tight">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="space-y-2 pt-1">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
                          TECHNOLOGY STACK
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/25 shadow-2xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Case Study CTA with Interactive Arrow */}
                      <div className="pt-2">
                        <div className="inline-flex items-center gap-2.5 text-base font-extrabold text-[#0f4c81] group-hover:text-[#00b7c2] transition-colors">
                          <span>View Case Study</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>

      {/* ========================================================================= */}
      {/* 3. FINAL STRATEGY CONSULTATION CTA */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#082F49] to-[#041E2A] text-white text-center relative overflow-hidden border-t border-white/10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none -z-0"
          style={{
            background: "radial-gradient(circle at center, rgba(0,183,194,0.18), transparent 70%)",
          }}
        />

        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Ready To Engineer Your Next High-Impact System?
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Speak directly with technical founders and principal architects to scope your roadmap with fixed sprints.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-[#38BDF8] hover:bg-[#0284C7] text-[#082F49] hover:text-white font-extrabold text-[15px] transition-all duration-300 shadow-xl shadow-[#38BDF8]/20 flex items-center justify-center gap-2.5 active:scale-95 group"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto h-[54px] px-8 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-[15px] border border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Capabilities</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>30-Min Scoping Session</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Bilateral NDA Upfront</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Senior Engineering Pods</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
