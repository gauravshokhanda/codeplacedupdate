"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AppShell } from "@/components/AppShell";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { FEATURED_CASE_STUDIES } from "@/lib/data";

const CASE_STUDIES_EXTENDED = [
  ...FEATURED_CASE_STUDIES,
  {
    id: "fintech-reconciliation",
    title: "Autonomous Financial Ledger Reconciliation Engine",
    client: "CapitalFlow FinTech",
    industry: "Finance & FinTech",
    tagline: "Zero-Error Real-Time Ledger Reconciliation & Anomaly Auditing",
    description: "Replaced 40 hours of manual end-of-month spreadsheet reconciliation with an automated dbt and Python pipeline matching 4M+ daily multi-currency transactions.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Ledger Accuracy", value: "99.999%" },
      { label: "Close Time", value: "15 Mins" },
      { label: "Audit Pass Rate", value: "100% SOC2" },
      { label: "Monthly Saved", value: "160 Hours" },
    ],
    technologies: ["PostgreSQL", "dbt Core", "Python", "Snowflake", "Docker", "AWS KMS"],
    challenge: "Complex cross-border payments between Stripe, Adyen, and local bank rails led to discrepancy backlogs and compliance audit delays.",
    solution: "Engineered a double-entry event streaming engine with cryptographic checksums and real-time slack exception routing.",
    impact: [
      "Month-end financial close accelerated from 4 business days to 15 minutes",
      "Zero audit discrepancies across $2.4B in annual transaction volume",
    ],
  },
  {
    id: "retail-attribution",
    title: "Unified Omnichannel Ad Attribution Lakehouse",
    client: "OmniRetail Direct",
    industry: "Retail & E-Commerce",
    tagline: "Sub-Second Multi-Touch Ad Spend & CAC Attribution",
    description: "Consolidated Meta, Google, TikTok, and Shopify purchase streams into a real-time ClickHouse lakehouse with first-party identity resolution.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Blended CAC", value: "-14%" },
      { label: "Data Latency", value: "< 50ms" },
      { label: "ROAS Gain", value: "+22%" },
      { label: "Daily Events", value: "45M" },
    ],
    technologies: ["ClickHouse", "Next.js 15", "Kafka", "TypeScript", "Tailwind CSS"],
    challenge: "Wasted ad budget due to 24-hour reporting delays from third-party pixel aggregators and broken attribution models.",
    solution: "Deployed a high-throughput ClickHouse telemetry collector and an executive growth command center with sub-second cohort drill-downs.",
    impact: [
      "Delivered live in 18 calendar days with unified attribution",
      "Immediate 14% reduction in blended customer acquisition costs",
    ],
  },
];

const INDUSTRIES_FILTER = [
  "All",
  "Healthcare & Life Sciences",
  "Legal Tech & Compliance",
  "Automotive & IoT",
  "Finance & FinTech",
  "Retail & E-Commerce",
];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredStudies =
    selectedIndustry === "All"
      ? CASE_STUDIES_EXTENDED
      : CASE_STUDIES_EXTENDED.filter((s) => s.industry === selectedIndustry);

  return (
    <AppShell>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#ECFEFF]/25 to-white pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-slate-200/80 text-center">
          <div className="site-container max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#0E7490]" /> Proven Enterprise Deliveries
            </div>

            <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-black tracking-tight text-[#082F49] leading-[1.1] mb-6">
              Verified Client Outcomes & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">
                Architecture Case Studies
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Explore how global enterprises and high-growth innovators partner with CodePlaced to ship production data platforms, AI copilots, and executive dashboards in 2–4 weeks.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {INDUSTRIES_FILTER.map((ind) => {
                const isSelected = selectedIndustry === ind;
                return (
                  <button
                    key={ind}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      isSelected
                        ? "bg-[#082F49] text-white shadow-md shadow-[#082F49]/20"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {ind}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="section-py site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="rounded-[28px] bg-[#F8FAFC] border border-slate-200/80 hover:border-[#0B4F6C]/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image Banner with Metrics Overlay */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/95 via-[#082F49]/40 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ECFEFF] text-[#082F49] shadow-sm">
                        {study.industry}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1">
                        Client: {study.client}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                        {study.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 space-y-6">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {study.description}
                    </p>

                    {/* Metrics 4-Box Ribbon */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {study.metrics.map((m, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
                          <div className="text-lg font-black text-[#0B4F6C]">{m.value}</div>
                          <div className="text-[10px] font-semibold text-slate-500 mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Technologies Implemented
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {study.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="p-7 pt-0">
                  <Link
                    href="/contact"
                    className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-[#0B4F6C] text-[#082F49] hover:text-white text-xs font-bold border border-slate-200 hover:border-[#0B4F6C] flex items-center justify-center gap-2 transition-all shadow-2xs group/btn"
                  >
                    <span>Request Architecture Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-[#082F49] via-[#083344] to-[#041E2A] text-white py-16 text-center">
          <div className="site-container max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black">
              Want Similar Outcomes for Your Enterprise?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Speak with a Principal Architect about your data, AI, or SaaS initiative.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white font-bold text-sm shadow-xl transition-all border border-[#14B8A6]/30"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
