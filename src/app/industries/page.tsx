"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AppShell } from "@/components/AppShell";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Landmark,
  MonitorSmartphone,
  Truck,
  ShoppingBag,
  Building2,
  GraduationCap,
  Factory,
  CheckCircle2,
} from "lucide-react";
import { INDUSTRIES_LIST } from "@/lib/data";

const industryIcons: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  Landmark: <Landmark className="w-6 h-6" />,
  MonitorSmartphone: <MonitorSmartphone className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Factory: <Factory className="w-6 h-6" />,
};

export default function IndustriesPage() {
  return (
    <AppShell>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#ECFEFF]/25 to-white pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-slate-200/80 text-center">
          <div className="site-container max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#0E7490]" /> Vertical Specialization
            </div>

            <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-black tracking-tight text-[#082F49] leading-[1.1] mb-6">
              Engineered for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">
                Mission-Critical Industries
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Every vertical requires tailored data contracts, compliance guardrails, and latency SLAs. We bring battle-tested industry blueprints to accelerate your roadmap.
            </p>
          </div>
        </section>

        {/* 8 Industry Deep-Dive Cards */}
        <section className="section-py site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {INDUSTRIES_LIST.map((ind, idx) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="rounded-[24px] bg-[#F8FAFC] hover:bg-white border border-slate-200/80 hover:border-[#0B4F6C]/40 p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(11,79,108,0.08)] border border-[rgba(11,79,108,0.15)] text-[#0B4F6C] flex items-center justify-center group-hover:bg-[#0B4F6C] group-hover:text-white transition-all shadow-2xs">
                      {industryIcons[ind.iconName]}
                    </div>
                    {ind.compliance && (
                      <span className="text-[10px] font-bold text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        {ind.compliance}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#082F49] group-hover:text-[#0B4F6C] transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {ind.useCase}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200/70 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      Typical Impact
                    </div>
                    <div className="text-xs font-bold text-emerald-600 mt-0.5">
                      {ind.impactStat}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#0B4F6C] text-slate-600 hover:text-white flex items-center justify-center transition-colors border border-slate-200 shadow-2xs"
                  >
                    <ArrowRight className="w-4 h-4" />
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
              Need a Domain-Specific Architecture Audit?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Speak with a Principal Architect who understands your regulatory and schema constraints.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white font-bold text-sm shadow-xl transition-all border border-[#14B8A6]/30"
            >
              <span>Book Industry Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
