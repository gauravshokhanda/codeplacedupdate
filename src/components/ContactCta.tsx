"use client";

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Clock, CheckCircle2, PhoneCall } from "lucide-react";

interface ContactCtaProps {
  onOpenBookAudit: (scope?: string) => void;
}

export function ContactCta({ onOpenBookAudit }: ContactCtaProps) {
  return (
    <section id="contact" className="section-py relative overflow-hidden bg-white">
      <div className="site-container">
        {/* Dark enterprise cyan/navy gradient container with border-radius: 32px */}
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#082F49] via-[#083344] to-[#041E2A] text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-cyan-900/40 text-center">
          {/* Floating glow effects */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#0B4F6C]/40 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#14B8A6]/25 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0E7490]/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/15 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" /> Start Your 2-4 Week Engagement
            </div>

            {/* Heading */}
            <h2 className="text-[32px] sm:text-[44px] lg:text-[60px] font-black tracking-tight text-white leading-[1.1]">
              Ready to Build Something Intelligent?
            </h2>

            {/* Subtext */}
            <p className="text-[18px] text-slate-300 max-w-2xl mx-auto leading-[1.6]">
              Let&apos;s discuss your next AI, data, or software initiative. Turn messy data into reliable pipelines, executive dashboards, and practical AI copilots.
            </p>

            {/* Buttons: Book Audit Call & Schedule Consultation */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenBookAudit()}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-xl shadow-[#0B4F6C]/30 active:scale-95 border border-[#14B8A6]/30"
              >
                <span>Book Audit Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenBookAudit("General Consultation")}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-cyan-300" />
                <span>Schedule Consultation</span>
              </button>
            </div>

            {/* Guarantees */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>30-Min Principal Review</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                <span>NDA Signed Upfront</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#14B8A6]" />
                <span>Production in 2–4 Weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
