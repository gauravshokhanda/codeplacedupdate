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
  { value: "250+", label: "Projects Delivered", detail: "Startups & Enterprises" },
  { value: "150+", label: "Clients Served", detail: "Global Deployments" },
  { value: "1200+", label: "Automated Workflows", detail: "Live Production Systems" },
  { value: "15+", label: "Industries Supported", detail: "Domain-Specific Blueprints" },
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
    <div
      style={{
        background: "linear-gradient(180deg, #f8fcff 0%, #edf7fb 40%, #eaf5f9 100%)",
      }}
      className="text-[#0F2B46] selection:bg-[#0D3B66] selection:text-white font-sans min-h-screen relative"
    >
      {/* ========================================================================= */}
      {/* 1. HERO SECTION & PROVEN OUTCOME METRICS */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-8 sm:pt-36 sm:pb-12 lg:pt-40 lg:pb-16 text-center overflow-hidden">
        {/* Soft Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] pointer-events-none -z-0">
          <div
            className="absolute inset-0 rounded-full blur-[90px] opacity-35"
            style={{
              background: "radial-gradient(circle at center, rgba(28,200,229,0.2), rgba(15,43,70,0.08), transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[#0D3B66] border border-[#1CC8E5]/30 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#1CC8E5]" />
            <span>PROVEN BUSINESS OUTCOMES</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASING }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-[#0F2B46] max-w-4xl mx-auto [text-wrap:balance]"
          >
            Real Projects.{" "}
            <span
              className="bg-clip-text text-transparent font-black inline-block"
              style={{
                backgroundImage: "linear-gradient(90deg, #0F2B46 0%, #1CC8E5 50%, #0D3B66 100%)",
              }}
            >
              Real Results.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASING }}
            className="text-base sm:text-lg lg:text-xl text-[#5B6B7C] max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Explore how CodePlaced helps businesses solve complex challenges, improve operations, and create measurable impact through scalable technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: EASING }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <a
              href="#portfolio-showcase"
              className="w-full sm:w-auto h-[50px] px-8 rounded-full text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 group"
              style={{
                background: "linear-gradient(90deg, #0F2B46, #1CC8E5)",
              }}
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto h-[50px] px-8 rounded-full bg-white hover:bg-slate-50 text-[#0F2B46] font-bold text-sm border border-slate-200 shadow-xs flex items-center justify-center transition-all duration-300 hover:border-[#1CC8E5]/50"
            >
              <span>Book Strategy Call</span>
            </Link>
          </motion.div>

          {/* Unified Horizontal Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASING }}
            className="pt-6 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {HERO_OUTCOME_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-sky-100 shadow-xs text-center space-y-1"
                >
                  <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0F2B46] to-[#1CC8E5] tracking-tight leading-none">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold text-[#0F2B46] leading-tight">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-[#5B6B7C] font-medium hidden sm:block">
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
            transition={{ duration: 0.7, delay: 0.45, ease: EASING }}
            className="pt-4 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto"
          >
            {INDUSTRIES_FILTER.map((ind) => {
              const isSelected = selectedIndustry === ind;
              return (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#0F2B46] text-white shadow-xs scale-105"
                      : "bg-white text-[#5B6B7C] hover:text-[#0F2B46] hover:bg-slate-50 border border-slate-200/80 shadow-2xs"
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
      {/* 2. EDITORIAL CASE STUDIES SHOWCASE */}
      {/* ========================================================================= */}
      <section
        id="portfolio-showcase"
        className="py-16 sm:py-24 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28"
      >
        <AnimatePresence mode="popLayout">
          {filteredStudies.map((study: CaseStudyItem, idx: number) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASING }}
                className="group"
              >
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="block group cursor-pointer focus:outline-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    {/* Visual Container */}
                    <div
                      className={`lg:col-span-7 relative ${
                        isEven ? "order-1" : "order-1 lg:order-2"
                      }`}
                    >
                      <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-sky-950/8 bg-slate-950 min-h-[340px] sm:min-h-[420px] lg:min-h-[460px]">
                        <img
                          src={study.heroImage}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B46]/95 via-[#0F2B46]/35 to-transparent" />

                        <div className="absolute top-5 left-5 z-10">
                          <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/95 text-[#0D3B66] shadow-xs backdrop-blur-md">
                            {study.industry}
                          </span>
                        </div>

                        <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between text-white">
                          <div>
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1CC8E5] block mb-0.5">
                              {study.clientType}
                            </span>
                            <h4 className="text-lg sm:text-xl font-bold text-white drop-shadow-sm line-clamp-1">
                              {study.tagline}
                            </h4>
                          </div>

                          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold text-cyan-300">
                            <span className="w-2 h-2 rounded-full bg-[#1CC8E5] animate-pulse" />
                            <span>Verified Story</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text Narrative */}
                    <div
                      className={`lg:col-span-5 flex flex-col justify-center space-y-5 ${
                        isEven ? "order-2" : "order-2 lg:order-1"
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-[#0D3B66] uppercase tracking-wider">
                        <span>Case Study 0{idx + 1}</span>
                        <span>•</span>
                        <span>{study.industry}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B46] leading-snug group-hover:text-[#0D3B66] transition-colors">
                        {study.title}
                      </h2>

                      <p className="text-[#5B6B7C] text-sm sm:text-base leading-relaxed font-normal">
                        {study.shortDescription}
                      </p>

                      {/* 3 Outcome Metrics */}
                      <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-3 border-t border-slate-200/80">
                        {study.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="pl-3 border-l-2 border-[#1CC8E5]">
                            <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#0F2B46] tracking-tight leading-none mb-1">
                              {m.value}
                            </div>
                            <div className="text-xs font-bold text-[#5B6B7C] leading-tight">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
                          TECHNOLOGY STACK
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {study.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1 rounded-lg text-xs font-bold bg-[#F4FAFC] text-[#0F2B46] border border-sky-100 shadow-2xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0D3B66] group-hover:text-[#1CC8E5] transition-colors">
                          <span>View Case Study</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
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
      {/* 3. FINAL STRATEGY CTA */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-[1100px] mx-auto rounded-[32px] p-10 sm:p-14 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #0F2B46 0%, #0D3B66 50%, #1CC8E5 100%)",
          }}
        >
          <div className="max-w-[780px] mx-auto relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white/15 text-white border border-white/25">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>START A CONVERSATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Ready To Engineer Your Next High-Impact System?
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-normal">
              Speak directly with technical founders and principal architects to scope your roadmap with fixed sprints.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto h-[50px] px-8 rounded-full bg-white hover:bg-slate-50 text-[#0F2B46] font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 group"
              >
                <span>Schedule Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto h-[50px] px-8 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/30 shadow-xs flex items-center justify-center transition-all duration-300"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
