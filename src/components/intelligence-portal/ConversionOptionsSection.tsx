"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  FileSpreadsheet,
  CalendarDays,
  UserCheck,
} from "lucide-react";
import { ReportRequestModal } from "./ReportRequestModal";
import { DiscoveryCallBookingModal } from "./DiscoveryCallBookingModal";

interface ConversionOptionsSectionProps {
  websiteUrl: string;
  auditReference: string;
}

export function ConversionOptionsSection({
  websiteUrl,
  auditReference,
}: ConversionOptionsSectionProps) {
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <section
      id="take-action"
      className="w-full relative bg-[#FFFFFF] text-[#101214] py-20 sm:py-24 lg:py-28 border-b border-black/[0.08]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Centered Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-black/[0.04] border border-black/10 text-[#00838F]">
            <span>NEXT STEPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#101214] tracking-tight leading-tight">
            Take Action On Your Findings
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
            Choose how you&apos;d like to move forward and turn these insights into real business results.
          </p>
        </div>

        {/* 2 Equal Side-by-Side Action Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* ========================================================================= */}
          {/* LEFT PANEL: WANT TO EXPLORE THE COMPLETE ANALYSIS?                        */}
          {/* ========================================================================= */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all flex flex-col sm:flex-row items-center gap-6 text-left group">
            {/* Premium Report Document Illustration (Left side of card) */}
            <div className="w-full sm:w-44 h-44 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-4 flex flex-col justify-between shrink-0 shadow-sm relative overflow-hidden select-none">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div className="flex items-center gap-1.5">
                  <FileSpreadsheet className="w-4 h-4 text-[#00838F]" />
                  <span className="text-[10px] font-mono font-bold text-[#101214] uppercase">
                    AUDIT DOSSIER
                  </span>
                </div>
                <span className="text-[9px] font-mono text-[#00838F] font-bold">
                  PDF + SHEET
                </span>
              </div>

              {/* Realistic Comparative Bar Chart Visual */}
              <div className="space-y-1.5 py-1">
                <div className="flex items-center justify-between text-[8.5px] font-mono text-slate-500">
                  <span>8-Area Matrix</span>
                  <span className="text-emerald-600 font-bold">Comprehensive</span>
                </div>
                <div className="flex items-end justify-between gap-1.5 h-14 bg-white/70 p-2 rounded-lg border border-slate-200/80">
                  <div className="flex-1 bg-slate-300 h-6 rounded-t-xs" />
                  <div className="flex-1 bg-[#101214] h-10 rounded-t-xs" />
                  <div className="flex-1 bg-[#00838F] h-12 rounded-t-xs shadow-xs" />
                  <div className="flex-1 bg-cyan-400 h-8 rounded-t-xs" />
                </div>
              </div>

              <div className="flex items-center justify-between text-[8px] font-mono text-slate-500 pt-1 border-t border-slate-200">
                <span>Ref: CP-AUDIT</span>
                <span className="text-[#00838F] font-semibold">Zero Sales Pressure</span>
              </div>
            </div>

            {/* Content & Action (Right side of card) */}
            <div className="space-y-4 flex-1">
              <h3 className="text-lg sm:text-xl font-black text-[#101214] tracking-tight leading-snug">
                Want to Explore the Complete Analysis?
              </h3>

              <ul className="space-y-2 text-xs sm:text-sm text-[#52525B]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00838F] shrink-0 mt-0.5" />
                  <span>Detailed website and competitor breakdown</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00838F] shrink-0 mt-0.5" />
                  <span>SEO and content improvement recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00838F] shrink-0 mt-0.5" />
                  <span>Business KPIs and a prioritized action plan</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => setReportModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#000000] hover:bg-[#1A1A1A] text-white font-extrabold text-xs sm:text-sm tracking-tight transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                >
                  <span>Get My Detailed Report</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT PANEL: WOULD YOU RATHER DISCUSS THESE OPPORTUNITIES?                */}
          {/* ========================================================================= */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all flex flex-col sm:flex-row items-center gap-6 text-left group">
            {/* Professional Calendar / Booking Visual (Left side of card) */}
            <div className="w-full sm:w-44 h-44 rounded-2xl bg-gradient-to-br from-cyan-50/70 to-slate-50 border border-slate-200 p-4 flex flex-col justify-between shrink-0 shadow-sm relative overflow-hidden select-none">
              <div className="flex items-center justify-between border-b border-cyan-200/80 pb-2">
                <div className="flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4 text-[#00838F]" />
                  <span className="text-[10px] font-mono font-bold text-[#101214] uppercase">
                    STRATEGY SESSION
                  </span>
                </div>
                <span className="text-[9px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                  LIVE SLOTS
                </span>
              </div>

              {/* Realistic Time Slots Mockup */}
              <div className="space-y-1.5 py-1">
                <div className="flex items-center justify-between text-[8.5px] font-mono text-slate-500">
                  <span>Next Available:</span>
                  <span className="text-[#00838F] font-bold">Tomorrow</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="p-1.5 rounded bg-white border border-slate-200 text-center text-[10px] font-bold text-[#101214]">
                    10:00 AM
                  </div>
                  <div className="p-1.5 rounded bg-[#101214] text-white text-center text-[10px] font-bold shadow-xs">
                    02:30 PM
                  </div>
                  <div className="p-1.5 rounded bg-white border border-slate-200 text-center text-[10px] font-bold text-[#101214]">
                    04:15 PM
                  </div>
                  <div className="p-1.5 rounded bg-cyan-100 text-[#00838F] text-center text-[10px] font-bold">
                    30 Mins
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[8px] font-mono text-slate-500 pt-1 border-t border-slate-200">
                <span className="flex items-center gap-1">
                  <UserCheck className="w-2.5 h-2.5 text-emerald-600" />
                  <span>Lead Architect</span>
                </span>
                <span className="text-[#101214] font-semibold">1-on-1 Call</span>
              </div>
            </div>

            {/* Content & Action (Right side of card) */}
            <div className="space-y-4 flex-1">
              <h3 className="text-lg sm:text-xl font-black text-[#101214] tracking-tight leading-snug">
                Would You Rather Discuss These Opportunities With an Expert?
              </h3>

              <ul className="space-y-2 text-xs sm:text-sm text-[#52525B]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00838F] shrink-0 mt-0.5" />
                  <span>Review your findings with the CodePlaced team</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00838F] shrink-0 mt-0.5" />
                  <span>Discuss your business requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00838F] shrink-0 mt-0.5" />
                  <span>Get tailored recommendations and next steps</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#101214] bg-white hover:bg-[#101214] text-[#101214] hover:text-white font-extrabold text-xs sm:text-sm tracking-tight transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modals */}
        <ReportRequestModal
          isOpen={reportModalOpen}
          onClose={() => setReportModalOpen(false)}
          websiteUrl={websiteUrl}
          auditReference={auditReference}
        />

        <DiscoveryCallBookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          websiteUrl={websiteUrl}
          auditReference={auditReference}
        />
      </div>
    </section>
  );
}
