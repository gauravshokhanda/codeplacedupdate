"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Sparkles,
  SlidersHorizontal,
  ExternalLink,
  Globe,
  Check,
  Lock,
} from "lucide-react";
import { WebsiteOverviewData, CompetitorData } from "@/types/intelligencePortal";
import { ReplaceCompetitorModal } from "./ReplaceCompetitorModal";

interface ComparisonDashboardProps {
  overview: WebsiteOverviewData;
  competitors: CompetitorData[];
  isSampleActive: boolean;
  onReplaceCompetitor: (competitorId: string, newDomainOrName: string) => void;
}

export function ComparisonDashboard({
  overview,
  competitors,
  onReplaceCompetitor,
}: ComparisonDashboardProps) {
  const [selectedCompetitorForReplace, setSelectedCompetitorForReplace] =
    useState<CompetitorData | null>(null);

  // Fallback to ensure 4 competitors match the reference design layout
  const competitorCards = competitors.length >= 4 ? competitors.slice(0, 4) : competitors;

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#000000] text-white border-b border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left border-b border-white/[0.08] pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-[#00D5E5]/10 border border-[#00D5E5]/30 text-[#00D5E5]">
              <span>YOUR WEBSITE VS. COMPETITORS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-tight">
              Website Comparison Dashboard
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              A focused comparison of your website with the top competitors in your space, highlighting key strengths, gaps and opportunities.
            </p>
          </div>

          {/* Manage Competitors Button */}
          <div className="shrink-0">
            <button
              onClick={() => setSelectedCompetitorForReplace(competitors[0] || null)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/20 hover:border-[#00D5E5]/50 bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono font-bold text-white transition-all cursor-pointer shadow-sm"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#00D5E5]" />
              <span>Manage Competitors</span>
            </button>
          </div>
        </div>

        {/* 40% / 60% Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* ========================================================================= */}
          {/* LEFT SIDE: ~40% (5 of 12 cols on lg) — YOUR WEBSITE CARD                  */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 text-left">
            <div className="rounded-3xl bg-[#090D14] border-2 border-[#00D5E5]/80 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(0,213,229,0.12)] p-6 space-y-6">
              {/* Header: Cyan circle + "Your Website" */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#00D5E5]/20 border border-[#00D5E5] flex items-center justify-center">
                    <Globe className="w-4 h-4 text-[#00D5E5]" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Your Website
                  </h3>
                </div>
                <span className="text-[10.5px] font-mono text-cyan-300 font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                  Target Audit
                </span>
              </div>

              {/* Realistic Website Preview Browser Mockup */}
              <div className="rounded-2xl bg-white text-[#101214] border border-white/20 overflow-hidden shadow-md">
                <div className="px-3.5 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="px-3 py-0.5 rounded bg-white text-[10.5px] font-mono text-slate-600 border border-slate-200 flex items-center gap-1.5">
                    <Lock className="w-2.5 h-2.5 text-[#00838F]" />
                    <span>{overview.domain}</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-5 h-1 rounded-full bg-slate-300" />
                    <span className="w-5 h-1 rounded-full bg-slate-300" />
                  </div>
                </div>

                <div className="p-4 sm:p-5 grid grid-cols-12 gap-3.5 items-center bg-[#FAFAFA]">
                  <div className="col-span-7 space-y-2 text-left">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#00838F]">
                      YOUR BUSINESS PLATFORM
                    </span>
                    <h4 className="text-sm font-black text-[#101214] tracking-tight leading-snug">
                      Modern Solutions for Your Business
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-sans line-clamp-2">
                      Reliable engineering, digital consulting and custom enterprise infrastructure.
                    </p>
                    <div className="pt-0.5">
                      <span className="inline-block px-2.5 py-1 rounded bg-[#101214] text-white text-[9.5px] font-bold">
                        Contact Us
                      </span>
                    </div>
                  </div>

                  {/* Architecture Graphic */}
                  <div className="col-span-5 h-24 rounded-xl bg-gradient-to-br from-slate-200 via-cyan-100/50 to-slate-300 border border-slate-200 p-2.5 flex flex-col justify-end text-left relative overflow-hidden">
                    <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,#00838F,#00838F_2px,transparent_2px,transparent_6px)]" />
                    <span className="relative z-10 text-[8.5px] font-mono font-bold text-slate-800 bg-white/90 px-1.5 py-0.5 rounded shadow-xs">
                      Enterprise HQ
                    </span>
                  </div>
                </div>
              </div>

              {/* URL Bar */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.03] p-2.5 rounded-xl border border-white/[0.06]">
                <Globe className="w-3.5 h-3.5 text-[#00D5E5]" />
                <span className="text-white font-medium">{overview.domain}</span>
                <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
              </div>

              {/* 3 Core Points from Reference Image */}
              <div className="space-y-3.5 pt-1 text-xs">
                {/* 1. What You're Doing Well */}
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">
                      What You&apos;re Doing Well
                    </span>
                    <span className="text-slate-300 leading-relaxed font-sans text-xs">
                      Clean design and clear navigation.
                    </span>
                  </div>
                </div>

                {/* 2. What's Missing */}
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">
                      What&apos;s Missing
                    </span>
                    <span className="text-slate-300 leading-relaxed font-sans text-xs">
                      Limited service depth and fewer trust signals.
                    </span>
                  </div>
                </div>

                {/* 3. Key Opportunities */}
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#00D5E5]/20 border border-[#00D5E5]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#00D5E5]" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">
                      Key Opportunities
                    </span>
                    <span className="text-slate-300 leading-relaxed font-sans text-xs">
                      Add detailed service pages, case studies and stronger conversion CTAs.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: ~60% (7 of 12 cols on lg) — YOUR COMPETITORS (4)             */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-300">
              Your Competitors ({competitorCards.length})
            </h3>

            {/* 2x2 Grid on sm and desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {competitorCards.map((comp, idx) => (
                <div
                  key={comp.id}
                  className="rounded-2xl bg-[#090D14] border border-white/10 hover:border-[#00D5E5]/50 p-4 sm:p-5 space-y-3.5 transition-all text-left group shadow-lg"
                >
                  {/* Name and URL */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00D5E5] transition-colors">
                        {comp.name}
                      </h4>
                      <a
                        href={comp.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white transition-colors"
                      >
                        <span>{comp.domain}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                      </a>
                    </div>

                    <button
                      onClick={() => setSelectedCompetitorForReplace(comp)}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 hover:text-[#00D5E5] hover:bg-white/5 border border-transparent hover:border-[#00D5E5]/30 transition-all cursor-pointer"
                      title="Replace competitor"
                    >
                      Swap
                    </button>
                  </div>

                  {/* Thumbnail Mockup + 3 Strengths */}
                  <div className="space-y-3">
                    {/* Realistic Website Preview Mockup */}
                    <div className="h-20 rounded-xl bg-gradient-to-br from-[#121824] via-[#0D121B] to-[#0A0D13] border border-white/10 overflow-hidden relative p-2.5 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                        <span className="text-[#00D5E5] font-bold">
                          {idx === 0
                            ? "Apex Platform"
                            : idx === 1
                            ? "Vertex Architecture"
                            : idx === 2
                            ? "Nexora Cloud"
                            : "CloudFrame Studio"}
                        </span>
                        <span className="text-[8.5px] px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-300">
                          {idx === 0 ? "SaaS" : idx === 1 ? "Enterprise" : idx === 2 ? "FinTech" : "Cloud"}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1.5 w-3/4 rounded bg-white/20" />
                        <div className="h-1 w-1/2 rounded bg-white/10" />
                      </div>
                      <div className="flex items-center justify-between text-[8.5px] font-mono text-slate-400">
                        <span className="text-emerald-400 font-bold">Verified Conversion</span>
                        <span>Responsive UI</span>
                      </div>
                    </div>

                    {/* 3 Key Strengths with Cyan Checkmarks */}
                    <ul className="space-y-1.5 pt-1">
                      {comp.strengths.slice(0, 3).map((str, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-start gap-1.5 text-[11px] text-slate-300 leading-snug"
                        >
                          <Check className="w-3.5 h-3.5 text-[#00D5E5] shrink-0 mt-0.5" />
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal for replacing a competitor */}
        <ReplaceCompetitorModal
          competitor={selectedCompetitorForReplace}
          isOpen={!!selectedCompetitorForReplace}
          onClose={() => setSelectedCompetitorForReplace(null)}
          onConfirmReplace={onReplaceCompetitor}
        />
      </div>
    </section>
  );
}
