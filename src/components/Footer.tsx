"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUp, ShieldCheck, Mail, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { CodePlacedLogo } from "./CodePlacedLogo";

interface FooterProps {
  onOpenBookAudit?: (scope?: string) => void;
}

export function Footer({ onOpenBookAudit }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F2940] text-slate-300 pt-10 sm:pt-12 pb-12 border-t border-[#1E3A5F] relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#06B6D4]/10 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="site-container relative z-10">
        {/* ========================================================================= */}
        {/* 1. NEWSLETTER CARD (High-Prominence Glassmorphism, Linear/Vercel style) */}
        {/* ========================================================================= */}
        <div className="mb-14 p-7 sm:p-9 lg:p-10 rounded-[28px] bg-white/[0.04] backdrop-blur-xl border border-white/15 ring-1 ring-cyan-400/20 shadow-[0_20px_60px_rgba(4,30,42,0.6)] flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle inner highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#0B4F6C]/40 text-cyan-300 border border-cyan-400/30">
              <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>Engineering Dispatch</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black text-white tracking-tight leading-snug">
              Get weekly production AI & Lakehouse architecture blueprints.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Zero marketing fluff. Read by 14,000+ senior architects and Heads of Data Engineering.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:w-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter work email..."
                className="w-full sm:w-[300px] h-[50px] px-4 rounded-xl bg-white/[0.08] border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 transition-all shadow-inner"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto h-[50px] px-6 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white text-xs font-bold transition-all whitespace-nowrap shadow-md shadow-[#0B4F6C]/30 border border-[#14B8A6]/30 flex items-center justify-center gap-2 active:scale-95"
            >
              {subscribed ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Subscribe Dispatch</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN 5-COLUMN ENTERPRISE FOOTER DIRECTORY */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-10 pb-14 border-b border-white/10 text-xs sm:text-sm">
          {/* Brand Info Column (Span 4) */}
          <div className="col-span-2 lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <CodePlacedLogo variant="white" size="md" />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              We turn messy data into reliable pipelines, executive dashboards, and practical AI copilots. Production delivered in 2–4 weeks.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-300" />
                <a href="mailto:hello@codeplaced.com" className="hover:text-white transition-colors">
                  hello@codeplaced.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Enterprise Security & SOC2 Type II Certified</span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white text-xs font-bold transition-all shadow-sm border border-[#14B8A6]/30"
              >
                <span>Schedule Architecture Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 1: Company (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">Track Record & Metrics</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">2-4 Wk Methodology</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">Industry Blueprints</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Leadership</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/services/data-platforms" className="hover:text-white transition-colors">Data Platforms & Pipelines</Link>
              </li>
              <li>
                <Link href="/services/ai-copilots" className="hover:text-white transition-colors">AI Copilots (RAG + Agents)</Link>
              </li>
              <li>
                <Link href="/services/executive-dashboards" className="hover:text-white transition-colors">Executive Dashboards</Link>
              </li>
              <li>
                <Link href="/services/embedded-analytics" className="hover:text-white transition-colors">Embedded Customer Analytics</Link>
              </li>
              <li>
                <Link href="/services/cloud-infrastructure" className="hover:text-white transition-colors">Cloud & FinOps Optimization</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Socials (Span 3) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Resources & Socials
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 mb-6">
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">Verified Case Studies</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Engineering Research Papers</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">Industry Architecture Blueprints</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Request Technical Audit</Link>
              </li>
            </ul>

            <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
              Connect
            </h5>
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0B4F6C] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="CodePlaced LinkedIn"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0B4F6C] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="CodePlaced Twitter X"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0B4F6C] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="CodePlaced GitHub"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 CodePlaced Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Certifications</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
