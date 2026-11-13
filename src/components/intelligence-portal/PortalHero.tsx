"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  BarChart3,
  Users,
  CheckCircle2,
  Circle,
} from "lucide-react";

interface PortalHeroProps {
  onAnalyzeClick: () => void;
  onExploreSampleClick?: () => void;
  onSeeHowItWorksClick?: () => void;
}

export function PortalHero({
  onAnalyzeClick,
  onSeeHowItWorksClick,
}: PortalHeroProps) {
  // Smooth scroll to analysis form for "See How It Works"
  const handleSeeHowItWorks = () => {
    if (onSeeHowItWorksClick) {
      onSeeHowItWorksClick();
      return;
    }
    const el = document.getElementById("analyze-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      onAnalyzeClick();
    }
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-36 lg:pb-28 bg-[#000000] text-white overflow-hidden border-b border-white/[0.08]">
      {/* Background Cyan Ambient Glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,213,229,0.14)_0%,rgba(0,213,229,0.02)_60%,transparent_75%)] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Flowing Cyan Atmospheric Curved Wave Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M -100 650 C 200 780, 500 550, 750 680 C 1000 810, 1300 500, 1550 560"
          stroke="url(#cyanGlowGrad1)"
          strokeWidth="1.5"
        />
        <path
          d="M 400 120 C 650 40, 950 80, 1200 180 C 1350 240, 1480 200, 1550 160"
          stroke="url(#cyanGlowGrad2)"
          strokeWidth="1.5"
        />
        <path
          d="M -50 720 C 350 620, 650 780, 950 640 C 1200 520, 1400 620, 1500 600"
          stroke="url(#cyanGlowGrad1)"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        <defs>
          <linearGradient id="cyanGlowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D5E5" stopOpacity="0" />
            <stop offset="50%" stopColor="#00D5E5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00D5E5" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cyanGlowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D5E5" stopOpacity="0" />
            <stop offset="60%" stopColor="#00D5E5" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#00D5E5" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ========================================================================= */}
          {/* LEFT SIDE: 45% (5 of 12 cols on lg, or xl:col-span-5)                     */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 text-left space-y-6 lg:pr-2">
            {/* Small Cyan Outlined Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase border border-[#00D5E5] text-[#00D5E5] bg-[#00D5E5]/5 shadow-[0_0_15px_rgba(0,213,229,0.15)]">
              <span>CODEPLACED INTELLIGENCE PORTAL</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[54px] font-black tracking-tight text-white leading-[1.12]">
              How Does Your<br className="hidden sm:inline" />{" "}
              Website Compare With<br className="hidden sm:inline" />{" "}
              Your <span className="text-[#00D5E5]">Competitors?</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-[17px] text-[#A1A1AA] leading-relaxed max-w-xl font-normal">
              Discover what your competitors are doing right, where your website is
              missing opportunities and what you can improve to stay ahead.
            </p>

            {/* CTA Buttons Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onAnalyzeClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00D5E5] hover:bg-[#20e2f2] text-[#051116] font-extrabold text-sm sm:text-base tracking-tight transition-all duration-200 shadow-[0_0_25px_rgba(0,213,229,0.35)] hover:shadow-[0_0_35px_rgba(0,213,229,0.5)] active:scale-95 cursor-pointer"
              >
                <span>Analyze My Website</span>
                <ArrowRight className="w-4 h-4 text-[#051116]" />
              </button>

              <button
                onClick={handleSeeHowItWorks}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/30 bg-transparent hover:bg-white/[0.08] hover:border-white/50 text-white font-semibold text-sm sm:text-base tracking-tight transition-all cursor-pointer"
              >
                <span>See How It Works</span>
              </button>
            </div>

            {/* 3 Horizontal Feature Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-5 sm:gap-6 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#00D5E5]" />
                <span>Comparative Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#00D5E5]" />
                <span>Actionable Opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#00D5E5]" />
                <span>Expert Recommendations</span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: 55% (7 of 12 cols on lg) — OVERLAPPING BROWSER COMPOSITION    */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end select-none">
            <div className="relative w-full max-w-[620px] lg:max-w-none">
              {/* ------------------------------------------------------------- */}
              {/* BACK BROWSER: COMPETITOR WEBSITE (Top-Right)                  */}
              {/* ------------------------------------------------------------- */}
              <div className="relative ml-auto w-[88%] sm:w-[85%] z-10">
                {/* Floating "Competitor" Label */}
                <div className="flex justify-end mb-2 mr-6">
                  <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#0D131C] border border-slate-700/80 text-white text-xs font-semibold tracking-wide shadow-lg">
                    <span>Competitor</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#090D14] border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
                  {/* Dark Browser Top Bar */}
                  <div className="px-4 py-2.5 bg-[#12161F] border-b border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    </div>
                  </div>

                  {/* Competitor Website Interface Preview */}
                  <div className="bg-white text-[#101214]">
                    {/* Top Website Navigation */}
                    <div className="px-4 sm:px-6 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-extrabold text-sm text-[#101214] tracking-tight">
                        Competitor Co.
                      </span>
                      <div className="hidden sm:flex items-center gap-4 text-[11px] font-medium text-slate-600">
                        <span>Home</span>
                        <span>Services</span>
                        <span>Work</span>
                        <span>About</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#10141D] text-white text-[10px] font-bold">
                        Contact
                      </span>
                    </div>

                    {/* Competitor Hero Layout: Left Text / Right Mountain Image */}
                    <div className="grid grid-cols-12 items-stretch bg-gradient-to-r from-[#141B26] to-[#0E131C] min-h-[140px] sm:min-h-[160px] overflow-hidden">
                      <div className="col-span-6 p-4 sm:p-5 flex flex-col justify-center text-left space-y-1">
                        <h4 className="text-base sm:text-xl font-extrabold text-white leading-tight tracking-tight">
                          Enterprise Solutions<br />for Digital Growth
                        </h4>
                      </div>

                      {/* Mountain Photograph */}
                      <div className="col-span-6 relative overflow-hidden">
                        <Image
                          src="/images/intelligence-portal/competitor-mountain-clean.jpg"
                          alt="Competitor Mountain Showcase"
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* FRONT BROWSER: YOUR WEBSITE (Foreground, Overlapping)         */}
              {/* ------------------------------------------------------------- */}
              <div className="relative -mt-20 sm:-mt-24 w-[92%] sm:w-[90%] z-20 shadow-[0_35px_80px_rgba(0,0,0,0.98)]">
                {/* Floating "Your Website" Cyan Pill with Pointer */}
                <div className="flex justify-start mb-2 ml-8 relative">
                  <div className="relative inline-flex items-center px-4 py-1 rounded-full bg-[#00D5E5] text-[#06151C] text-xs font-black tracking-wider uppercase shadow-[0_0_20px_rgba(0,213,229,0.4)]">
                    <span>Your Website</span>
                    {/* Speech bubble pointer */}
                    <span className="absolute -bottom-1.5 left-6 w-3 h-3 bg-[#00D5E5] rotate-45" />
                  </div>
                </div>

                <div className="rounded-2xl bg-[#090D14] text-[#101214] border-2 border-white/30 overflow-hidden shadow-2xl">
                  {/* Dark Browser Top Bar */}
                  <div className="px-4 py-2.5 bg-[#12161F] border-b border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    </div>
                  </div>

                  {/* Clean White Website Interface Preview */}
                  <div className="bg-white text-[#101214] p-4 sm:p-5 text-left">
                    {/* Website Navigation */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
                      <div className="flex items-center gap-2">
                        {/* Cyan four-leaf / cross brand mark */}
                        <div className="w-4 h-4 text-[#00D5E5] flex items-center justify-center font-bold text-sm">
                          ❖
                        </div>
                        <span className="font-extrabold text-[#101214] text-xs sm:text-sm tracking-tight">
                          Your Business
                        </span>
                      </div>
                      <div className="hidden sm:flex items-center gap-4 text-[11px] font-medium text-slate-500">
                        <span>Home</span>
                        <span>Services</span>
                        <span>About</span>
                        <span>Contact</span>
                      </div>
                      <span className="px-3.5 py-1 rounded-full bg-[#10141D] text-white text-[10px] font-bold">
                        Get in Touch
                      </span>
                    </div>

                    {/* Website Hero Layout: Headline & Copy on Left / Glass Skyscraper on Right */}
                    <div className="grid grid-cols-12 gap-4 items-center pt-4">
                      <div className="col-span-7 space-y-2.5 text-left">
                        <h3 className="text-base sm:text-xl font-black text-[#101214] tracking-tight leading-[1.2]">
                          Modern Digital<br />
                          Solutions for<br />
                          Growing Businesses
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-sans max-w-xs">
                          Strategy, design and technology to build a stronger digital presence.
                        </p>
                        <div className="pt-1">
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00D5E5] text-[#06151C] text-[10px] font-extrabold tracking-tight shadow-sm">
                            <span>Explore Services</span>
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>

                      {/* Glass Skyscraper Architecture Image */}
                      <div className="col-span-5 relative h-28 sm:h-36 rounded-xl overflow-hidden shadow-sm border border-slate-200">
                        <Image
                          src="/images/intelligence-portal/visitor-skyscraper-clean.jpg"
                          alt="Modern Skyscraper Architecture"
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 240px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------- */}
              {/* KEY DIFFERENCES PANEL: FLOATING ON BOTTOM-RIGHT               */}
              {/* ------------------------------------------------------------- */}
              <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 z-30 rounded-2xl bg-[#090E16]/95 backdrop-blur-md border border-[#00D5E5]/50 shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-4 sm:p-5 text-left space-y-3 min-w-[260px] sm:min-w-[280px]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white">
                    KEY DIFFERENCES
                  </span>
                </div>

                {/* 4 Categorical Observations */}
                <div className="space-y-2 text-xs font-sans">
                  <div className="flex items-center gap-2.5 text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#00D5E5] shrink-0" />
                    <span>Stronger service presentation</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#00D5E5] shrink-0" />
                    <span>More trust &amp; credibility elements</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#00D5E5] shrink-0" />
                    <span>Broader content coverage</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-[#00D5E5] font-bold">
                    <Circle className="w-4 h-4 text-[#00D5E5] fill-[#00D5E5]/20 shrink-0" />
                    <span>More conversion opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
