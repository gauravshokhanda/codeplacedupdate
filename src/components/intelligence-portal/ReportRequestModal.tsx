"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Loader2, FileText, ArrowRight, ShieldCheck } from "lucide-react";

interface ReportRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  websiteUrl: string;
  auditReference: string;
}

export function ReportRequestModal({
  isOpen,
  onClose,
  websiteUrl,
  auditReference,
}: ReportRequestModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [formStep, setFormStep] = useState<"form" | "generating" | "delivered">("form");
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid work email address.");
      return;
    }

    setError(null);
    setFormStep("generating");

    // Simulate lifecycle states for preview/staging
    setTimeout(() => {
      setFormStep("delivered");
    }, 1800);
  };

  const handleReset = () => {
    setFormStep("form");
    setFullName("");
    setEmail("");
    setMarketingConsent(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#090C10] border border-[#00BCD4]/40 p-6 sm:p-8 text-left space-y-6 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(0,188,212,0.15)]">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {formStep === "form" && (
          <>
            {/* Modal Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4]">
                <FileText className="w-3 h-3 text-[#00BCD4]" />
                <span>COMPREHENSIVE INTELLIGENCE REPORT</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Want to Explore the Complete Analysis?
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                Get a detailed breakdown of your website, competitor strategies, missing opportunities, SEO improvements and recommended business KPIs directly in your inbox.
              </p>
            </div>

            {/* Audit Reference Badge */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-300 flex items-center justify-between">
              <span>Target: {websiteUrl}</span>
              <span className="text-[#00BCD4]">Ref: {auditReference}</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="fullName"
                  className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300"
                >
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00BCD4] focus:ring-2 focus:ring-[#00BCD4]/30 transition-all font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="workEmail"
                  className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300"
                >
                  Work Email Address *
                </label>
                <input
                  id="workEmail"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="e.g. sarah@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00BCD4] focus:ring-2 focus:ring-[#00BCD4]/30 transition-all font-sans"
                />
              </div>

              <div className="pt-1 flex items-start gap-2.5">
                <input
                  id="marketingConsent"
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded bg-white/10 border-white/20 text-[#00BCD4] focus:ring-[#00BCD4] cursor-pointer"
                />
                <label
                  htmlFor="marketingConsent"
                  className="text-xs text-slate-400 leading-snug cursor-pointer select-none"
                >
                  Receive periodic architecture whitepapers, benchmarks, and product engineering case studies from CodePlaced. (Optional)
                </label>
              </div>

              {error && (
                <div className="text-xs text-rose-400 font-mono mt-1">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-[#00BCD4] hover:bg-[#20d7f5] text-[#06151C] font-extrabold text-sm tracking-tight transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#00BCD4]/30 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Get My Detailed Report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        )}

        {formStep === "generating" && (
          <div className="py-8 space-y-4 text-center">
            <Loader2 className="w-10 h-10 text-[#00BCD4] animate-spin mx-auto" />
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">
                Compiling Detailed Intelligence Report...
              </h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto font-mono">
                Assembling competitor matrices, technical SEO recommendations, and KPI benchmarks.
              </p>
            </div>
          </div>
        )}

        {formStep === "delivered" && (
          <div className="py-6 space-y-5 text-center">
            <div className="w-12 h-12 rounded-full bg-[#00BCD4]/10 border border-[#00BCD4]/30 flex items-center justify-center text-[#00BCD4] mx-auto">
              <CheckCircle2 className="w-6 h-6 text-[#00BCD4]" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-white">
                Report Request Registered!
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                Your report request for <strong>{websiteUrl}</strong> has been logged under audit reference <span className="font-mono text-[#00BCD4]">{auditReference}</span>.
              </p>
            </div>

            {/* Honest Backend Integration Disclosure */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11.5px] text-slate-400 leading-relaxed text-left flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00BCD4] shrink-0 mt-0.5" />
              <span>
                <strong>Backend Ready:</strong> This confirms the frontend validation pipeline. Once the email dispatch worker is wired to our mail server, the PDF bundle will trigger automatically.
              </span>
            </div>

            <button
              onClick={handleReset}
              className="py-2.5 px-6 rounded-full bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-semibold transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
