"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Database,
  Cpu,
  Bot,
  Layers,
  ArrowRight,
  CheckCircle2,
  Activity,
} from "lucide-react";
import { ENGAGEMENT_STEPS } from "@/lib/data";

interface EngagementModelsProps {
  onOpenBookAudit: (scope?: string) => void;
}

export function EngagementModels({ onOpenBookAudit }: EngagementModelsProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = ENGAGEMENT_STEPS[activeStepIndex];

  return (
    <section id="process" className="section-py bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] border border-[rgba(11,79,108,0.15)] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" /> 2-4 Week Delivery Framework
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-black text-[#0F172A] tracking-tight leading-[1.15]">
            How We Deliver <span className="bg-gradient-to-r from-[#0B4F6C] via-[#0284C7] to-[#06B6D4] bg-clip-text text-transparent">Intelligent Systems</span> in Weeks
          </h2>
          <p className="text-[18px] text-[#475569] leading-[1.6]">
            Our proprietary execution model pairs modular architecture templates with autonomous AI workflow pipelines.
          </p>
        </div>

        {/* Two-Column Layout: Left Process Panel, Right Modern AI Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Process Panel */}
          <div className="lg:col-span-5 space-y-3">
            {ENGAGEMENT_STEPS.map((step, index) => {
              const isActive = index === activeStepIndex;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(index)}
                  className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 border ${
                    isActive
                      ? "bg-[#F8FAFC] border-[#0B4F6C] shadow-lg shadow-[#0B4F6C]/10 ring-1 ring-[#0B4F6C]"
                      : "bg-white hover:bg-[#F8FAFC]/70 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-black px-2.5 py-1 rounded-lg ${
                          isActive
                            ? "bg-[#0B4F6C] text-white"
                            : "bg-[rgba(11,79,108,0.08)] text-[#0B4F6C]"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <h3
                        className={`text-base font-bold ${
                          isActive ? "text-[#0F172A]" : "text-slate-700"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-[rgba(11,79,108,0.1)] text-[#0B4F6C]"
                          : "text-slate-400"
                      }`}
                    >
                      {step.duration}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-3.5 pt-3.5 border-t border-slate-200/80 space-y-2.5 overflow-hidden"
                      >
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="space-y-1.5 pt-1">
                          {step.deliverables.map((d, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-xs font-semibold text-[#0F172A]"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0B4F6C] flex-shrink-0" />
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: AI Workflow Visualization */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#F8FAFC] p-7 sm:p-10 border border-slate-200 shadow-xl overflow-hidden min-h-[500px] flex flex-col justify-between">
              {/* Background ambient mesh */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0284C7]/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Status Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    AI AGENTIC PIPELINE WORKFLOW
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold bg-[#0B4F6C]/10 text-[#0B4F6C] px-2.5 py-0.5 rounded-full border border-[#0B4F6C]/20">
                  Latency: 35ms
                </span>
              </div>

              {/* Connected Nodes Diagram */}
              <div className="relative my-8 h-[320px] flex items-center justify-center">
                {/* SVG Animated Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 320">
                  <defs>
                    <linearGradient id="lineGradTeal" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0B4F6C" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#0284C7" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>

                  <path d="M 100 60 Q 175 60 250 160" fill="none" stroke="url(#lineGradTeal)" strokeWidth="2.5" strokeDasharray="6,4" />
                  <path d="M 400 60 Q 325 60 250 160" fill="none" stroke="url(#lineGradTeal)" strokeWidth="2.5" strokeDasharray="6,4" />
                  <path d="M 100 260 Q 175 260 250 160" fill="none" stroke="url(#lineGradTeal)" strokeWidth="2.5" strokeDasharray="6,4" />
                  <path d="M 400 260 Q 325 260 250 160" fill="none" stroke="url(#lineGradTeal)" strokeWidth="2.5" strokeDasharray="6,4" />
                </svg>

                {/* Node 1: Top-Left Floating Pill */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-2 left-4 sm:left-10 bg-white shadow-md border border-slate-200 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 z-10"
                >
                  <div className="w-8 h-8 rounded-xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center font-bold">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">Data Ingestion</div>
                    <div className="text-[10px] text-slate-400">Kafka • PostgreSQL • CDC</div>
                  </div>
                </motion.div>

                {/* Node 2: Top-Right Floating Pill */}
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-2 right-4 sm:right-10 bg-white shadow-md border border-slate-200 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 z-10"
                >
                  <div className="w-8 h-8 rounded-xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center font-bold">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">Vector Index</div>
                    <div className="text-[10px] text-slate-400">Hybrid Search • Qdrant</div>
                  </div>
                </motion.div>

                {/* Center Hub: Glowing Teal/Slate Center Hub */}
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="relative z-20 w-32 h-32 rounded-full bg-gradient-to-tr from-[#0B4F6C] via-[#0284C7] to-[#06B6D4] p-1.5 shadow-2xl shadow-[#0B4F6C]/30 flex items-center justify-center"
                >
                  <div className="absolute -inset-3 rounded-full border-2 border-[#0B4F6C]/30 animate-ping pointer-events-none" />

                  <div className="w-full h-full rounded-full bg-[#082F49] flex flex-col items-center justify-center text-center p-2 text-white">
                    <Bot className="w-6 h-6 text-cyan-300 mb-1" />
                    <div className="text-[11px] font-black tracking-tight leading-tight">
                      CodePlaced
                    </div>
                    <div className="text-[9px] text-cyan-200 font-semibold">
                      AI Agent Hub
                    </div>
                  </div>
                </motion.div>

                {/* Node 3: Bottom-Left Floating Pill */}
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.2 }}
                  className="absolute bottom-2 left-4 sm:left-10 bg-white shadow-md border border-slate-200 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 z-10"
                >
                  <div className="w-8 h-8 rounded-xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center font-bold">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">Decision Engine</div>
                    <div className="text-[10px] text-slate-400">Claude 3.5 • GPT-4o</div>
                  </div>
                </motion.div>

                {/* Node 4: Bottom-Right Floating Pill */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.7 }}
                  className="absolute bottom-2 right-4 sm:right-10 bg-white shadow-md border border-slate-200 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 z-10"
                >
                  <div className="w-8 h-8 rounded-xl bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] flex items-center justify-center font-bold">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">Executive UI</div>
                    <div className="text-[10px] text-slate-400">Real-Time Dashboards</div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 z-10">
                <span>
                  Currently in focus: <strong className="text-[#0B4F6C]">{activeStep.title}</strong>
                </span>
                <button
                  onClick={() => onOpenBookAudit(activeStep.title)}
                  className="text-xs font-bold text-[#0B4F6C] hover:underline inline-flex items-center gap-1"
                >
                  Explore Phase Plan <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
