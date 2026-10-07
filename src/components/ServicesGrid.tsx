"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  BrainCircuit,
  Database,
  BarChart3,
  Code2,
  CloudCog,
  Workflow,
  Search,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  X,
  ChevronDown,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";
import { SERVICES_LIST } from "@/lib/data";

interface ServicesGridProps {
  onOpenBookAudit: (scope?: string) => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  CloudCog: <CloudCog className="w-6 h-6" />,
  Workflow: <Workflow className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
};

export function ServicesGrid({ onOpenBookAudit }: ServicesGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      setTimeout(() => {
        const el = document.getElementById(`service-card-${id}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 70);
    }
  };

  return (
    <section id="services" className="section-py bg-white relative border-b border-slate-200/80">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0E7490]" /> Core Service Pillars
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-black text-[#082F49] tracking-tight leading-[1.15]">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">Technology & Growth Services</span>
          </h2>
          <p className="text-[18px] text-slate-600 leading-[1.6]">
            Click any service pillar to expand its complete architecture, specialized capabilities, and delivery methodology.
          </p>
        </div>

        {/* In-Page Expanding Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES_LIST.map((service, index) => {
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                layout
                transition={{
                  layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.3 },
                }}
                className={`scroll-mt-28 transition-colors duration-300 ${
                  isExpanded
                    ? "col-span-1 md:col-span-2 lg:col-span-3 rounded-[28px] bg-white border-2 border-[#0B4F6C] p-8 sm:p-10 shadow-[0_25px_70px_rgba(11,79,108,0.12)] ring-4 ring-[#14B8A6]/10"
                    : "rounded-[24px] bg-[#F8FAFC] hover:bg-white p-8 border border-slate-200/90 hover:border-[#0B4F6C]/40 shadow-xs hover:shadow-xl cursor-pointer flex flex-col justify-between group"
                }`}
                onClick={!isExpanded ? () => handleCardClick(service.id) : undefined}
              >
                <div>
                  {/* Header: Icon & Badge & Collapse Button */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 shadow-2xs ${
                          isExpanded
                            ? "bg-[#0B4F6C] text-white"
                            : "bg-[rgba(11,79,108,0.08)] border border-[rgba(11,79,108,0.15)] text-[#0B4F6C] group-hover:bg-[#0B4F6C] group-hover:text-white"
                        }`}
                      >
                        {serviceIcons[service.iconName] || <BrainCircuit className="w-6 h-6" />}
                      </div>

                      {isExpanded && (
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E7490] bg-[#ECFEFF] px-2.5 py-1 rounded-full border border-[#0B4F6C]/15">
                            {service.badge}
                          </span>
                          <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>In-Depth Architecture Specification</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {!isExpanded ? (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B4F6C] bg-[#ECFEFF] px-3 py-1 rounded-full border border-[#0B4F6C]/15 shadow-2xs">
                        {service.badge}
                      </span>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(service.id);
                        }}
                        className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#082F49] text-xs font-bold transition-all flex items-center gap-1.5"
                      >
                        <span>Collapse</span>
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    className={`font-black text-[#082F49] tracking-tight ${
                      isExpanded
                        ? "text-2xl sm:text-3xl text-[#0B4F6C] mb-2"
                        : "text-xl group-hover:text-[#0B4F6C] transition-colors"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0E7490] uppercase tracking-wide">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Collapsed Capabilities preview */}
                  {!isExpanded && (
                    <div className="mt-6 pt-5 border-t border-slate-200/70 space-y-2.5">
                      {service.capabilities.slice(0, 3).map((cap, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{cap}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* ========================================================= */}
                {/* EXPANDED IN-PAGE ARCHITECTURE DETAILS */}
                {/* ========================================================= */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-8 pt-8 border-t border-slate-200 space-y-8 overflow-hidden"
                    >
                      {/* Architecture & Guardrails Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Capabilities Checklist */}
                        <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
                          <div className="text-xs font-bold uppercase tracking-wider text-[#082F49] flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            <span>Core Capabilities</span>
                          </div>
                          <div className="space-y-2.5 pt-1">
                            {service.capabilities.map((cap, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                                <span>{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* SLA & Delivery Benchmark */}
                        <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
                          <div className="text-xs font-bold uppercase tracking-wider text-[#082F49] flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-[#0B4F6C]" />
                            <span>Delivery SLA & Performance</span>
                          </div>
                          <div className="space-y-3 pt-1 text-xs text-slate-700">
                            <div className="p-3 bg-white rounded-xl border border-slate-200">
                              <span className="font-bold text-[#082F49] block">Turnaround: 2–4 Weeks</span>
                              <span className="text-slate-500">Fixed-scope sprint delivery</span>
                            </div>
                            <div className="p-3 bg-white rounded-xl border border-slate-200">
                              <span className="font-bold text-emerald-600 block">SLA: 99.99% Guaranteed</span>
                              <span className="text-slate-500">Sub-20ms p99 query latency</span>
                            </div>
                          </div>
                        </div>

                        {/* Enterprise Guarantees */}
                        <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-[#082F49] flex items-center gap-2">
                              <Layers className="w-4 h-4 text-[#0B4F6C]" />
                              <span>IP & Private Deployment</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed pt-2">
                              100% intellectual property ownership. Deployed directly into your private cloud (AWS, Azure, GCP) or on-premise VPC with zero data retention.
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#0B4F6C]">
                            SOC2 Type II • HIPAA Ready
                          </div>
                        </div>
                      </div>

                      {/* In-Page Action CTA Bar */}
                      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#082F49] to-[#041E2A] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
                        <div>
                          <div className="text-xs font-bold text-cyan-300">
                            Ready to scope {service.title}?
                          </div>
                          <div className="text-xs text-slate-300">
                            Get a tailored technical milestone blueprint and timeline in 48 hours.
                          </div>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCardClick(service.id);
                            }}
                            className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                          >
                            Collapse
                          </button>
                          <button
                            onClick={() => onOpenBookAudit(service.title)}
                            className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-[#14B8A6] hover:bg-[#0D9488] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                          >
                            <span>Scope Architecture</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Collapsed Bottom Action */}
                {!isExpanded && (
                  <div className="mt-7 pt-5 border-t border-slate-200/70 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0B4F6C] group-hover:text-[#14B8A6] inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-all">
                      <span>Expand Architecture Details</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </span>

                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      2–4 Weeks SLA
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

