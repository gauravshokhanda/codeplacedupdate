"use client";

import React, { useState } from "react";
import {
  Layers,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { MissingOpportunityData } from "@/types/intelligencePortal";

interface MissingOpportunitiesSectionProps {
  opportunities: MissingOpportunityData[];
}

export function MissingOpportunitiesSection({
  opportunities,
}: MissingOpportunitiesSectionProps) {
  const [activeOpportunityId, setActiveOpportunityId] = useState<string>("opp-1");

  const featured =
    opportunities.find((o) => o.id === activeOpportunityId) ||
    opportunities[0] || {
      id: "opp-1",
      title: "Strengthen Your Service Presentation",
      category: "TOP OPPORTUNITY",
      whatIsMissing:
        "Your competitors provide dedicated, in-depth service pages that clearly explain their offerings, benefits and industry use cases.",
      whatCanBeImproved:
        "Deploy dedicated in-depth service pages with clear benefit breakdowns, deliverables, and industry use cases.",
    };

  const supportingCards = [
    {
      id: "opp-2",
      icon: <ShieldCheck className="w-5 h-5 text-slate-400 group-hover:text-[#00D5E5] transition-colors" />,
      title: "Add Trust & Credibility",
      description: "Include client testimonials, case studies and measurable results.",
    },
    {
      id: "opp-3",
      icon: <BookOpen className="w-5 h-5 text-slate-400 group-hover:text-[#00D5E5] transition-colors" />,
      title: "Improve Content Coverage",
      description: "Create relevant educational content to build authority and SEO visibility.",
    },
    {
      id: "opp-4",
      icon: <Target className="w-5 h-5 text-slate-400 group-hover:text-[#00D5E5] transition-colors" />,
      title: "Enhance Lead Capture",
      description: "Use stronger, well-placed CTAs across key pages.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#000000] text-white border-b border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-left space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-[#00D5E5]/10 border border-[#00D5E5]/30 text-[#00D5E5]">
            <span>KEY IMPROVEMENT AREAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-tight">
            What Are You Missing?
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            The biggest opportunities to close the gap with your competitors and get better results from your website.
          </p>
        </div>

        {/* Asymmetric Layout: Left Featured (~58%) / Right Stacked Cards (~42%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* ========================================================================= */}
          {/* LEFT: FEATURED OPPORTUNITY CARD                                           */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 rounded-3xl bg-[#090D14] border border-white/15 p-6 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Text side of featured card */}
              <div className="sm:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00D5E5]/15 border border-[#00D5E5]/40 flex items-center justify-center">
                    <Layers className="w-4 h-4 text-[#00D5E5]" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#00D5E5]/10 text-[#00D5E5] border border-[#00D5E5]/25">
                    TOP OPPORTUNITY
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                  {featured.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-sans">
                  {featured.whatIsMissing}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      const el = document.getElementById("take-action");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00D5E5] hover:bg-[#25e5f5] text-[#051116] font-bold text-xs tracking-tight transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>Recommended Action</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Realistic High-Fidelity Service Architecture Wireframe Mockup */}
              <div className="sm:col-span-5 relative flex items-center justify-center select-none pt-2 sm:pt-0">
                <div className="relative w-full max-w-[240px] sm:max-w-none space-y-3">
                  {/* Detailed Service Page Card Mockup */}
                  <div className="rounded-2xl bg-[#111722] border border-white/20 p-4 space-y-3 shadow-2xl text-left">
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[10px] font-mono">
                      <span className="text-[#00D5E5] font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Dedicated Service Hub</span>
                      </span>
                      <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.2 rounded">
                        High Converting
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-bold text-white">
                        Cloud &amp; Platform Architecture
                      </div>
                      <div className="h-1.5 w-full rounded bg-white/10" />
                      <div className="h-1.5 w-4/5 rounded bg-white/10" />
                    </div>

                    {/* 3 Value Tiers in the preview */}
                    <div className="space-y-1.5 pt-1 text-[9.5px] font-mono">
                      <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-slate-300">Technical Scope</span>
                        <span className="text-[#00D5E5] font-bold">Documented</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-between">
                        <span className="text-slate-300">Sprint Milestones</span>
                        <span className="text-[#00D5E5] font-bold">Clear SLAs</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-emerald-400">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Proof Metrics</span>
                        </span>
                        <span className="font-bold">+4.2x Conversion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT: 3 STACKED SUPPORTING OPPORTUNITY CARDS                             */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
            {supportingCards.map((card) => (
              <div
                key={card.id}
                onClick={() => setActiveOpportunityId(card.id)}
                className={`p-4 sm:p-5 rounded-2xl bg-[#090D14] border transition-all text-left flex items-center justify-between gap-4 cursor-pointer group ${
                  activeOpportunityId === card.id
                    ? "border-[#00D5E5] shadow-[0_0_20px_rgba(0,213,229,0.15)]"
                    : "border-white/10 hover:border-white/25"
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#00D5E5]/40 transition-colors">
                    {card.icon}
                  </div>
                  <div className="min-w-0 space-y-0.5">
                    <h4 className="text-sm font-bold text-white group-hover:text-[#00D5E5] transition-colors truncate">
                      {card.title}
                    </h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#00D5E5] group-hover:border-[#00D5E5] transition-colors">
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#051116] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
