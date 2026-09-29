"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  MonitorSmartphone,
  Truck,
  ShoppingBag,
  Building2,
  GraduationCap,
  Factory,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { INDUSTRIES_LIST } from "@/lib/data";

interface IndustriesSectionProps {
  onOpenBookAudit: (scope?: string) => void;
}

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

export function IndustriesSection({ onOpenBookAudit }: IndustriesSectionProps) {
  return (
    <section className="section-py bg-white border-t border-slate-100 relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0E7490]" /> Domain Specialization
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-black text-[#082F49] tracking-tight leading-[1.15]">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">Mission-Critical Industries</span>
          </h2>
          <p className="text-[18px] text-slate-600 leading-[1.6]">
            Every vertical has unique compliance constraints, data schemas, and latency SLAs. We bring battle-tested industry blueprints to every engagement.
          </p>
        </div>

        {/* 4 columns desktop, 2 tablet, 1 mobile = 8 industry cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_LIST.map((ind, index) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#F8FAFC] hover:bg-white rounded-[24px] p-6 border border-slate-200/80 hover:border-[#0B4F6C]/30 shadow-xs hover:shadow-xl hover:shadow-[#0B4F6C]/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[rgba(11,79,108,0.08)] border border-[rgba(11,79,108,0.15)] text-[#0B4F6C] flex items-center justify-center group-hover:bg-[#0B4F6C] group-hover:text-white transition-all duration-200 shadow-2xs">
                    {industryIcons[ind.iconName]}
                  </div>

                  {ind.compliance && (
                    <span className="text-[10px] font-bold text-slate-600 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 flex items-center gap-1 shadow-2xs">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      {ind.compliance}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#082F49] group-hover:text-[#0B4F6C] transition-colors">
                  {ind.name}
                </h3>

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {ind.useCase}
                </p>
              </div>

              {/* Impact Stat & Trigger */}
              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    Typical Impact
                  </div>
                  <div className="text-xs font-bold text-emerald-600 mt-0.5">
                    {ind.impactStat}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBookAudit(`${ind.name} Architecture`)}
                  className="w-8 h-8 rounded-full bg-white hover:bg-[#0B4F6C] text-slate-600 hover:text-white flex items-center justify-center transition-colors border border-slate-200 shadow-2xs"
                  aria-label={`Inquire about ${ind.name}`}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
