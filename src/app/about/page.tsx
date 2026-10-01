"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Lock,
  Star,
  Users,
  CheckCircle2,
  Zap,
  Globe,
} from "lucide-react";
import { METRICS_DATA, AWARDS_LIST } from "@/lib/data";

const awardIcons: Record<string, React.ReactNode> = {
  Award: <Award className="w-8 h-8 text-[#38BDF8]" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#38BDF8]" />,
  Lock: <Lock className="w-8 h-8 text-[#38BDF8]" />,
  Star: <Star className="w-8 h-8 text-[#38BDF8] fill-[#38BDF8]" />,
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#ECFEFF]/25 to-white pt-28 pb-20 lg:pt-36 lg:pb-28 border-b border-slate-200/80 text-center">
          <div className="site-container max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#0E7490]" /> About CodePlaced Inc.
            </div>

            <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-black tracking-tight text-[#082F49] leading-[1.1] mb-6">
              Turning Enterprise Data Chaos Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">
                Competitive AI Engines
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
              We are a specialized data engineering and AI consultancy that guarantees production-ready systems in 2–4 weeks. No bureaucratic bloat. No vendor lock-in. Just elite software engineering.
            </p>
          </div>
        </section>

        {/* Numbers Section */}
        <section className="section-py bg-[#082F49] text-white">
          <div className="site-container">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
                Verifiable Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Engineering Velocity in Numbers
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {METRICS_DATA.map((metric) => (
                <div key={metric.id} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl sm:text-4xl font-black text-[#38BDF8]">
                    {metric.value}{metric.suffix}
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {metric.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#082F49] tracking-tight">
              The Four CodePlaced Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "100% Client IP & Code Ownership",
                desc: "Every line of code, dbt transformation, and AI model we write is committed directly into your private GitHub/GitLab repositories. Zero vendor lock-in.",
              },
              {
                title: "Fixed-Scope 2–4 Week Delivery",
                desc: "We skip the 6-month consulting bloat. By utilizing pre-tested architectural blueprints and dedicated senior engineers, we deploy working production code in weeks.",
              },
              {
                title: "Zero Hallucination AI Guardrails",
                desc: "We hold AI to deterministic engineering standards. Multi-layered evaluations, hybrid reciprocal rank fusion, and verified source citations are mandatory.",
              },
              {
                title: "SOC2 & Enterprise Security Ready",
                desc: "We sign strict bilateral NDAs upfront. All deployments adhere to HIPAA, SOC2 Type II, and PCI-DSS compliance frameworks with cryptographic audit logs.",
              },
            ].map((p, idx) => (
              <div key={p.title} className="p-8 rounded-[24px] bg-[#F8FAFC] border border-slate-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#082F49]">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section className="section-py bg-[#082F49] text-white">
          <div className="site-container">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
                Industry Trust
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Awards & Accreditations
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {AWARDS_LIST.map((award) => (
                <div
                  key={award.id}
                  className="p-7 rounded-[24px] bg-white/[0.04] border border-white/15 text-center flex flex-col items-center justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#0B4F6C]/60 border border-[#38BDF8]/30 flex items-center justify-center mb-4">
                      {awardIcons[award.iconName]}
                    </div>
                    <div className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-wider mb-1">
                      {award.organization}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {award.badgeTitle}
                    </h3>
                    <div className="text-xs text-cyan-300 font-semibold mb-3">
                      {award.category}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {award.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 w-full text-[11px] text-emerald-400 font-semibold flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Audit
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-[#082F49] via-[#083344] to-[#041E2A] text-white py-16 text-center">
          <div className="site-container max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black">
              Let&apos;s Build Something Extraordinary
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Speak directly with our technical leadership.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white font-bold text-sm shadow-xl transition-all border border-[#14B8A6]/30"
            >
              <span>Book Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
  );
}
