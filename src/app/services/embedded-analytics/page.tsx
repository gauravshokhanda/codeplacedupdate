"use client";

import React from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
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
    <AppShell>
      <div className="bg-white">
        {/* 1. Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#ECFEFF]/25 to-white pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-slate-200/80">
          <div className="site-container relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs mb-6">
              <LayoutGrid className="w-3.5 h-3.5 text-[#0E7490]" /> Multi-Tenant Customer Analytics
            </div>

            <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-black tracking-tight text-[#082F49] leading-[1.1] mb-6">
              Embedded Customer Analytics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">
                Native To Your SaaS
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Deliver white-labeled, high-density interactive reporting views directly inside your product. Boost customer stickiness and unlock enterprise tier upselling.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#082F49] hover:bg-[#0B4F6C] text-white font-bold text-sm shadow-xl shadow-[#082F49]/15 flex items-center justify-center gap-2 transition-all"
              >
                <span>Scope Embedded Analytics</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#082F49] font-bold text-sm border border-slate-200 shadow-2xs flex items-center justify-center transition-all"
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
        <section className="bg-gradient-to-r from-[#082F49] via-[#083344] to-[#041E2A] text-white py-16 text-center">
          <div className="site-container max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black">
              Ready to Embed Analytics in Your Product?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Book a 30-minute scoping call with our Principal Product Architect.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white font-bold text-sm shadow-xl transition-all border border-[#14B8A6]/30"
            >
              <span>Schedule Analytics Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
