"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  RefreshCw,
  CheckCircle,
  Zap,
  Layout,
  Search,
  Target,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { CompetitorData } from "@/types/intelligencePortal";

interface CompetitorCardProps {
  competitor: CompetitorData;
  index: number;
  onReplaceRequest: (competitor: CompetitorData) => void;
  isCompact?: boolean;
  defaultExpanded?: boolean;
}

export function CompetitorCard({
  competitor,
  index,
  onReplaceRequest,
  isCompact = false,
  defaultExpanded = false,
}: CompetitorCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="rounded-2xl bg-[#090C10] border border-white/[0.08] hover:border-[#00BCD4]/40 transition-all duration-300 text-left overflow-hidden shadow-lg group flex flex-col justify-between">
      <div>
        {/* Browser-Style Top Header Bar */}
        <div className="px-4 sm:px-5 py-3 bg-white/[0.03] border-b border-white/[0.06] flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00BCD4] ml-2">
              COMPETITOR 0{index + 1}
            </span>
          </div>

          {/* Replace Action Button */}
          <button
            onClick={() => onReplaceRequest(competitor)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-white/10 hover:border-[#00BCD4]/40 bg-white/[0.04] text-[10.5px] font-mono text-slate-300 hover:text-[#00BCD4] transition-all cursor-pointer shrink-0"
            title="Replace with custom competitor domain"
          >
            <RefreshCw className="w-3 h-3 text-[#00BCD4]" />
            <span>Replace</span>
          </button>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 space-y-3.5">
          {/* Competitor Name & Domain */}
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#00BCD4] transition-colors truncate">
                {competitor.name}
              </h4>
              <a
                href={competitor.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white transition-colors mt-0.5 truncate max-w-full"
              >
                <span className="truncate">{competitor.domain}</span>
                <ExternalLink className="w-2.5 h-2.5 text-slate-500 shrink-0" />
              </a>
            </div>

            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[9.5px] font-mono font-bold text-emerald-400 shrink-0">
              BENCHMARK
            </span>
          </div>

          {/* Primary Differentiator / Advantage Box */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00BCD4] flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#00BCD4] shrink-0" />
              <span>Key Advantage</span>
            </span>
            <ul className="space-y-1">
              {competitor.advantagesComparedWithVisitor.slice(0, isCompact ? 1 : 2).map((adv, idx) => (
                <li
                  key={idx}
                  className="text-xs text-slate-300 flex items-start gap-1.5 leading-relaxed"
                >
                  <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{adv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Positioning */}
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
              Market Positioning
            </span>
            <p className="text-xs text-[#A1A1AA] leading-relaxed font-sans line-clamp-2">
              {competitor.servicePositioning}
            </p>
          </div>
        </div>
      </div>

      {/* Expandable Details Drawer */}
      <div className="px-4 sm:px-5 pb-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between py-2 text-[11px] font-mono font-bold text-slate-400 hover:text-[#00BCD4] border-t border-white/[0.06] transition-colors cursor-pointer"
        >
          <span>{isExpanded ? "Hide Breakdown" : "View UX & SEO Breakdown"}</span>
          {isExpanded ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>

        {isExpanded && (
          <div className="pt-3 pb-2 space-y-3 border-t border-white/[0.04] text-xs animate-in fade-in duration-200">
            {/* Website Experience */}
            <div className="space-y-0.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <Layout className="w-3 h-3 text-[#00BCD4]" />
                <span>Website &amp; UX</span>
              </span>
              <p className="text-slate-300 leading-relaxed pl-4 font-sans text-xs">
                {competitor.websiteExperience}
              </p>
            </div>

            {/* SEO & Content */}
            <div className="space-y-0.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <Search className="w-3 h-3 text-[#00BCD4]" />
                <span>SEO &amp; Content</span>
              </span>
              <p className="text-slate-300 leading-relaxed pl-4 font-sans text-xs">
                {competitor.seoContentPractices}
              </p>
            </div>

            {/* Conversion Strategies */}
            <div className="space-y-0.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <Target className="w-3 h-3 text-[#00BCD4]" />
                <span>Conversion Strategy</span>
              </span>
              <p className="text-slate-300 leading-relaxed pl-4 font-sans text-xs">
                {competitor.conversionStrategies}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
