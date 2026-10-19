"use client";

import React from "react";
import Link from "next/link";
import {
  LayoutGrid,
  Globe,
  TrendingUp,
  ShieldCheck,
  FileText,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Lock,
} from "lucide-react";

export default function EmbeddedAnalyticsPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-[#050505] text-white pt-28 pb-20 lg:pt-36 lg:pb-28">
          {/* Subtle radial glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none -z-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,200,232,0.12), rgba(0,127,156,0.06), transparent 70%)",
            }}
          />

          <div className="site-container relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#07090D] text-[#00C8E8] border border-[#00C8E8]/40 shadow-xs mb-6">
              <LayoutGrid className="w-3.5 h-3.5 text-[#00C8E8]" /> Multi-Tenant Customer Analytics
            </div>

            <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-black tracking-tight text-white leading-[1.1] mb-6">
              Embedded Customer Analytics <br />
              <span className="text-[#00C8E8]">
                Native To Your SaaS
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#A1AAB7] leading-relaxed max-w-2xl mx-auto mb-10">
              Deliver white-labeled, high-density interactive reporting views directly inside your product. Boost customer stickiness and unlock enterprise tier upselling.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#00C8E8] hover:bg-[#00B4D2] text-black font-bold text-sm shadow-xl shadow-[#00C8E8]/20 flex items-center justify-center gap-2 transition-all"
              >
                <span>Scope Embedded Analytics</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#101820] hover:bg-white/10 text-white font-bold text-sm border border-[#1B242B] shadow-2xs flex items-center justify-center transition-all"
              >
                <span>View SaaS Case Studies</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Capabilities */}
        <section className="section-py site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E7490]">
              Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#082F49] tracking-tight">
              Architectural Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "White-Label Customer Portals",
                description: "Seamless brand theme matching, custom domains, and native iframe/component embedding.",
                icon: Globe,
              },
              {
                title: "Multi-Tenant Row Level Security",
                description: "Strict cryptographic tenant isolation ensuring clients only ever query their own dataset.",
                icon: ShieldCheck,
              },
              {
                title: "Interactive High-Density Visuals",
                description: "Custom date filtering, drill-down charts, and instant aggregate calculations.",
                icon: TrendingUp,
              },
              {
                title: "Automated PDF & CSV Export",
                description: "Scheduled recurring customer report emails and high-resolution PDF download engines.",
                icon: FileText,
              },
            ].map((card) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={card.title}
                  className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#0B4F6C]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center mb-5 group-hover:bg-[#0B4F6C] group-hover:text-white transition-colors">
                    <CardIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#082F49] group-hover:text-[#0B4F6C] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Bottom CTA */}
        <section className="bg-[#050505] border-t border-[#1B242B] text-white py-16 text-center">
          <div className="site-container max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black">
              Ready to Embed Analytics in Your Product?
            </h2>
            <p className="text-[#A1AAB7] text-sm sm:text-base">
              Book a 30-minute scoping call with our Principal Product Architect.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00C8E8] hover:bg-[#00B4D2] text-black font-bold text-sm shadow-xl transition-all"
            >
              <span>Schedule Analytics Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
  );
}
