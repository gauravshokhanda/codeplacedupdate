"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Layers,
  Terminal,
  Database,
  Cloud,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Code2,
  Zap,
} from "lucide-react";
import { TECH_CATEGORIES } from "@/lib/data";

interface TechStackProps {
  onOpenBookAudit: (scope?: string) => void;
}

export function TechStack({ onOpenBookAudit }: TechStackProps) {
  const [selectedCatId, setSelectedCatId] = useState("ai");

  const currentCategory =
    TECH_CATEGORIES.find((c) => c.id === selectedCatId) || TECH_CATEGORIES[0];

  return (
    <section id="tech-stack" className="section-py bg-[#F8FAFC] relative overflow-hidden">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-[#0E7490]" /> Modern Tooling & Infrastructure
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-black text-[#082F49] tracking-tight leading-[1.15]">
            Our Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">Technology Stack</span>
          </h2>
          <p className="text-[18px] text-slate-600 leading-[1.6]">
            We don&apos;t experiment on your dime. We build on battle-tested frameworks proven for high concurrency, petabyte data throughput, and low-latency AI inference.
          </p>
        </div>

        {/* Split Layout: Left Categories / Right Visual Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Categories */}
          <div className="lg:col-span-4 space-y-3">
            {TECH_CATEGORIES.map((cat) => {
              const isSelected = cat.id === selectedCatId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCatId(cat.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? "bg-[#082F49] text-white border-[#082F49] shadow-xl shadow-[#082F49]/25 ring-1 ring-[#14B8A6]"
                      : "bg-white hover:bg-slate-50 text-[#082F49] border-slate-200/80 shadow-xs"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${
                        isSelected
                          ? "bg-[#0B4F6C] text-white"
                          : "bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] border border-[rgba(11,79,108,0.15)]"
                      }`}
                    >
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-base">{cat.name}</div>
                      <div
                        className={`text-xs ${
                          isSelected ? "text-cyan-300" : "text-slate-400"
                        }`}
                      >
                        {cat.tools.length} Production Technologies
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-[#38BDF8] translate-x-1" : "text-slate-300"
                    }`}
                  />
                </button>
              );
            })}

            {/* Custom Stack Advice Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 mt-6 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#082F49] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#0B4F6C]" /> Custom Tech Stack Migration
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Have legacy on-prem databases, specific cloud contracts, or air-gapped security needs?
              </p>
              <button
                onClick={() => onOpenBookAudit("Custom Tech Stack Migration")}
                className="mt-3 text-xs font-bold text-[#0B4F6C] hover:text-[#0E7490] inline-flex items-center gap-1"
              >
                Discuss Custom Architecture →
              </button>
            </div>
          </div>

          {/* Right Column: Visual Workspace with Code Preview & Floating Cards */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-900/5"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-3">
                  <div>
                    <h3 className="text-2xl font-black text-[#082F49]">
                      {currentCategory.name} Ecosystem
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      {currentCategory.description}
                    </p>
                  </div>
                  <span className="self-start sm:self-auto px-3.5 py-1 rounded-full text-xs font-bold bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20">
                    Production Standard
                  </span>
                </div>

                {/* Grid of Tools */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {currentCategory.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="p-4 rounded-2xl bg-[#F8FAFC] hover:bg-[#F0F9FF] border border-slate-200/80 hover:border-[#0B4F6C]/30 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-[#0B4F6C]">
                          {tool.level}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <h4 className="font-extrabold text-[#082F49] text-sm group-hover:text-[#0B4F6C] transition-colors">
                        {tool.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-snug">
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Code & Architectural Benchmark Preview */}
                <div className="mt-8 p-6 rounded-2xl bg-[#082F49] text-slate-200 font-mono text-xs overflow-x-auto shadow-xl">
                  <div className="flex items-center justify-between text-slate-400 pb-3 mb-3 border-b border-white/10 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      <span className="ml-2 text-slate-300 font-sans font-semibold">
                        runtime_contract.json
                      </span>
                    </div>
                    <span className="text-[#38BDF8] font-sans font-bold">
                      ✓ Uptime SLA 99.99%
                    </span>
                  </div>
                  <pre className="text-cyan-200 leading-relaxed">
{`{
  "ecosystem": "CodePlaced_Enterprise_Core",
  "category": "${currentCategory.name}",
  "delivery_guarantee": "2-4 calendar weeks",
  "concurrency_capacity": "150,000 req/sec",
  "vector_search_latency": "< 18ms (p99)",
  "data_integrity_check": "Zero-Loss Stream Verified"
}`}
                  </pre>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
