"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Lock, Star, Sparkles } from "lucide-react";
import { AWARDS_LIST } from "@/lib/data";

interface AwardsSectionProps {
  onOpenBookAudit: (scope?: string) => void;
}

const awardIcons: Record<string, React.ReactNode> = {
  Award: <Award className="w-8 h-8 text-[#38BDF8]" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#38BDF8]" />,
  Lock: <Lock className="w-8 h-8 text-[#38BDF8]" />,
  Star: <Star className="w-8 h-8 text-[#38BDF8] fill-[#38BDF8]" />,
};

export function AwardsSection({ onOpenBookAudit }: AwardsSectionProps) {
  return (
    <section id="awards" className="section-py bg-gradient-to-b from-[#082F49] via-[#083344] to-[#041E2A] text-white relative overflow-hidden">
      {/* Background ambient enterprise glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-[#0B4F6C]/30 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-[#14B8A6]/15 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="site-container relative z-10 text-center">
        {/* Section Header: Center Aligned */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" /> Proven Enterprise Excellence
          </div>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-black tracking-tight text-white leading-[1.15]">
            We Don&apos;t Chase Awards. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#14B8A6] to-[#10B981]">We Earn Trust.</span>
          </h2>

          <p className="text-[18px] text-slate-300 max-w-xl mx-auto leading-[1.6]">
            Recognized by independent benchmark boards, security audits, and enterprise clients worldwide for our engineering velocity.
          </p>
        </div>

        {/* 4 Award Cards: Badge Style, Glow Effect, Center Aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARDS_LIST.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative rounded-[24px] bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md p-8 border border-white/15 hover:border-[#14B8A6]/50 shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Glow Effect behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0B4F6C]/0 to-[#14B8A6]/0 group-hover:from-[#0B4F6C]/25 group-hover:to-[#14B8A6]/25 rounded-[26px] blur-sm -z-10 transition-all duration-300" />

              {/* Badge Icon Shield Style */}
              <div className="relative mb-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B4F6C]/60 to-[#0E7490]/40 border border-[#38BDF8]/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {awardIcons[award.iconName] || <Award className="w-8 h-8 text-[#38BDF8]" />}
                </div>
                <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#14B8A6] text-[#082F49] shadow-xs">
                  {award.year}
                </span>
              </div>

              {/* Organization */}
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#38BDF8] mb-1">
                {award.organization}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                {award.badgeTitle}
              </h3>

              {/* Category */}
              <div className="text-xs text-cyan-300 font-semibold mt-1">
                {award.category}
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                {award.description}
              </p>

              {/* Bottom Verified Badge */}
              <div className="mt-6 pt-4 border-t border-white/10 w-full flex items-center justify-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Independent Audit</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
