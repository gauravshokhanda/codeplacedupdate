"use client";

import React, { useState } from "react";
import {
  Globe,
  Building2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Target,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import { WebsiteAnalysisSubmission } from "@/types/intelligencePortal";

interface AnalysisFormProps {
  onSubmit: (data: WebsiteAnalysisSubmission) => void;
  isLoading: boolean;
  onLoadSampleTemplate: () => void;
  isSampleActive: boolean;
}

const INDUSTRY_OPTIONS = [
  "IT Services & Software Consulting",
  "FinTech & Financial Services",
  "HealthTech & Life Sciences",
  "B2B SaaS & Cloud Platforms",
  "E-Commerce & DTC Brands",
  "EdTech & Higher Education",
  "Legal, Accounting & Advisory",
  "Manufacturing & Industrial Supply",
  "Other / Custom Vertical",
];

const TARGET_MARKET_OPTIONS = [
  "United States (US)",
  "United Kingdom (UK)",
  "European Union (EU)",
  "Canada (CA)",
  "Australia & New Zealand",
  "India & South Asia",
  "Global / Multi-Region",
];

export function AnalysisForm({
  onSubmit,
  isLoading,
}: AnalysisFormProps) {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [industry, setIndustry] = useState("");
  const [targetMarket, setTargetMarket] = useState("");
  const [urlError, setUrlError] = useState<string | null>(null);

  const validateUrl = (raw: string): boolean => {
    const trimmed = raw.trim();
    if (!trimmed) {
      setUrlError("Please enter your website URL.");
      return false;
    }
    const clean = trimmed.replace(/^https?:\/\//i, "");
    if (!clean || !clean.includes(".")) {
      setUrlError("Please enter a valid domain (e.g. yourwebsite.com).");
      return false;
    }
    setUrlError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateUrl(websiteUrl)) return;

    let normalizedUrl = websiteUrl.trim();
    if (!/^https?:\/\//i.test(normalizedUrl)) {
      normalizedUrl = `https://${normalizedUrl}`;
    }

    onSubmit({
      websiteUrl: normalizedUrl,
      industry: industry || "Technology & Software",
      targetMarket: targetMarket || "United States",
      competitorCount: 3,
    });
  };

  return (
    <section
      id="analyze-form"
      className="w-full relative bg-[#FFFFFF] text-[#101214] py-20 sm:py-24 lg:py-28 border-b border-black/[0.08]"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* ========================================================================= */}
          {/* LEFT SIDE: (5 of 12 cols) — GET A COMPETITIVE ANALYSIS                    */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00838F]">
                GET A COMPETITIVE ANALYSIS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#101214] tracking-tight leading-[1.15]">
                Start Your Competitive Benchmark
              </h2>
              <p className="text-base text-[#52525B] leading-relaxed pt-1">
                Enter your website details and get an instant analysis of your website,
                relevant competitors and key opportunities for improvement.
              </p>
            </div>

            {/* 3 Value Pillars with Cyan Icons */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-cyan-50 border border-cyan-200/80 flex items-center justify-center shrink-0 mt-0.5">
                  <Target className="w-4 h-4 text-[#00838F]" />
                </div>
                <p className="text-sm font-medium text-[#27272A] leading-relaxed">
                  See how your website compares in your industry
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-cyan-50 border border-cyan-200/80 flex items-center justify-center shrink-0 mt-0.5">
                  <BarChart3 className="w-4 h-4 text-[#00838F]" />
                </div>
                <p className="text-sm font-medium text-[#27272A] leading-relaxed">
                  Discover what competitors are doing better
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-cyan-50 border border-cyan-200/80 flex items-center justify-center shrink-0 mt-0.5">
                  <Lightbulb className="w-4 h-4 text-[#00838F]" />
                </div>
                <p className="text-sm font-medium text-[#27272A] leading-relaxed">
                  Get clear, practical improvement opportunities
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: (7 of 12 cols) — BENCHMARK INPUT PANEL                       */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#F9FAFB] border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)] text-left space-y-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 1. Website URL (Full Width) */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="websiteUrl"
                    className="block text-xs font-bold text-[#101214]"
                  >
                    Website URL <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Globe className="w-4 h-4" />
                    </div>
                    <input
                      id="websiteUrl"
                      type="text"
                      value={websiteUrl}
                      onChange={(e) => {
                        setWebsiteUrl(e.target.value);
                        if (urlError) setUrlError(null);
                      }}
                      placeholder="https://www.yourwebsite.com"
                      disabled={isLoading}
                      className={`w-full pl-10 pr-4 py-3.5 rounded-xl border bg-white text-sm text-[#101214] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        urlError
                          ? "border-rose-300 focus:ring-rose-200"
                          : "border-slate-200 focus:border-[#00838F] focus:ring-cyan-100"
                      }`}
                    />
                  </div>
                  {urlError && (
                    <p className="text-xs text-rose-600 font-medium">{urlError}</p>
                  )}
                </div>

                {/* 2. Industry & Target Market Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Industry Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="industrySelect"
                      className="block text-xs font-bold text-[#101214]"
                    >
                      Industry / Business Category
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <select
                        id="industrySelect"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        disabled={isLoading}
                        aria-label="Industry / Business Category"
                        className="w-full pl-10 pr-9 py-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-[#101214] focus:outline-none focus:border-[#00838F] focus:ring-2 focus:ring-cyan-100 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">e.g. IT Services</option>
                        {INDUSTRY_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Target Market Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="targetMarketSelect"
                      className="block text-xs font-bold text-[#101214]"
                    >
                      Target Market / Location
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <select
                        id="targetMarketSelect"
                        value={targetMarket}
                        onChange={(e) => setTargetMarket(e.target.value)}
                        disabled={isLoading}
                        aria-label="Target Market / Location"
                        className="w-full pl-10 pr-9 py-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-[#101214] focus:outline-none focus:border-[#00838F] focus:ring-2 focus:ring-cyan-100 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">e.g. United States</option>
                        {TARGET_MARKET_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary Submit Button: Analyze & Compare -> */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 px-6 rounded-xl bg-[#000000] hover:bg-[#1A1A1A] text-white font-extrabold text-sm sm:text-base tracking-tight transition-all duration-200 shadow-md flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 active:scale-[0.99]"
                  >
                    <span>Analyze &amp; Compare</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Below Button Notice */}
              <div className="pt-1 flex items-center justify-center gap-2 text-xs text-slate-500 text-center font-normal">
                <ShieldCheck className="w-4 h-4 text-[#00838F] shrink-0" />
                <span>No registration required for the initial analysis.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
