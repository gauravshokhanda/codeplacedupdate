"use client";

import React from "react";
import {
  MessageSquare,
  Layers,
  Magnet,
  FileText,
  Shield,
  TrendingUp,
  Monitor,
  Zap,
  Check,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";
import { ComparisonDimensionRow } from "@/types/intelligencePortal";

interface ComparisonTableProps {
  rows: ComparisonDimensionRow[];
  visitorDomain: string;
}

const ROW_ICONS: Record<string, React.ReactNode> = {
  "Homepage Messaging": <MessageSquare className="w-4 h-4 text-[#00838F]" />,
  "Service Presentation": <Layers className="w-4 h-4 text-[#00838F]" />,
  "Lead Generation": <Magnet className="w-4 h-4 text-[#00838F]" />,
  "Content Strategy": <FileText className="w-4 h-4 text-[#00838F]" />,
  "Trust Signals": <Shield className="w-4 h-4 text-[#00838F]" />,
  SEO: <TrendingUp className="w-4 h-4 text-[#00838F]" />,
  "User Experience": <Monitor className="w-4 h-4 text-[#00838F]" />,
  "Conversion Opportunities": <Zap className="w-4 h-4 text-[#00838F]" />,
};

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <section className="w-full relative bg-[#FFFFFF] text-[#101214] py-20 sm:py-24 lg:py-28 border-b border-black/[0.08]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-left space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-black/[0.04] border border-black/10 text-[#00838F]">
            <span>DETAILED COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#101214] tracking-tight leading-tight">
            Side-by-Side Comparison
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
            A focused comparison across key areas to show where your website stands and what competitors are doing differently.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. DESKTOP VIEW: CLEAN WHITE TABLE (>= 768px)                             */}
        {/* ========================================================================= */}
        <div className="hidden md:block rounded-2xl border border-slate-200 bg-[#FFFFFF] shadow-xs overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-[#F1F3F5]">
                <th className="py-3.5 px-6 text-xs font-mono font-bold uppercase tracking-wider text-[#101214] w-[28%]">
                  Area
                </th>
                <th className="py-3.5 px-6 text-xs font-mono font-bold uppercase tracking-wider text-[#101214] w-[32%]">
                  Your Website
                </th>
                <th className="py-3.5 px-6 text-xs font-mono font-bold uppercase tracking-wider text-[#101214] w-[40%]">
                  Competitor Insights
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {rows.map((row) => (
                <tr
                  key={row.dimension}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  {/* Column 1: Area with Icon */}
                  <td className="py-4 px-6 align-middle">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">
                        {ROW_ICONS[row.dimension] || (
                          <Layers className="w-4 h-4 text-[#00838F]" />
                        )}
                      </div>
                      <span className="font-bold text-[#101214] text-sm">
                        {row.dimension}
                      </span>
                    </div>
                  </td>

                  {/* Column 2: Your Website */}
                  <td className="py-4 px-6 align-middle">
                    {row.visitorStatus === "strong" ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{row.visitorDetail}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                        {row.visitorStatus === "moderate" ? (
                          <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                        ) : (
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        )}
                        <span>{row.visitorDetail}</span>
                      </span>
                    )}
                  </td>

                  {/* Column 3: Competitor Insights */}
                  <td className="py-4 px-6 align-middle">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#27272A]">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{row.competitorDetail}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ========================================================================= */}
        {/* 2. MOBILE VIEW: RESPONSIVE CARDS (< 768px)                                */}
        {/* ========================================================================= */}
        <div className="block md:hidden space-y-3.5">
          {rows.map((row) => (
            <div
              key={row.dimension}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-3"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">
                  {ROW_ICONS[row.dimension] || (
                    <Layers className="w-3.5 h-3.5 text-[#00838F]" />
                  )}
                </div>
                <h4 className="font-bold text-[#101214] text-sm">
                  {row.dimension}
                </h4>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                    Your Website:
                  </span>
                  {row.visitorStatus === "strong" ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>{row.visitorDetail}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                      <AlertTriangle className="w-3 h-3 text-amber-600" />
                      <span>{row.visitorDetail}</span>
                    </span>
                  )}
                </div>

                <div className="pt-1 border-t border-slate-200">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                    Competitor Insights:
                  </span>
                  <div className="flex items-start gap-1.5 text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{row.competitorDetail}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
