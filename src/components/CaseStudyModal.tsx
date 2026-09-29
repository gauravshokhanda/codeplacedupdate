"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, Cpu, ShieldCheck, TrendingUp, Layers } from "lucide-react";
import { CaseStudy } from "@/types";

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onBookCall: (scope?: string) => void;
}

export function CaseStudyModal({ study, onClose, onBookCall }: CaseStudyModalProps) {
  if (!study) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#082F49]/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 z-10"
        >
          {/* Header */}
          <div className="relative p-6 sm:p-8 border-b border-slate-100 bg-gradient-to-r from-[#082F49] via-[#083344] to-[#041E2A] text-white">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                {study.industry}
              </span>
              <span className="text-xs text-slate-300">Client: {study.client}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
              {study.title}
            </h2>
            <p className="text-slate-300 text-sm mt-2">{study.tagline}</p>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10">
              {study.metrics.map((m, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <div className="text-xl sm:text-2xl font-black text-[#38BDF8]">{m.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 text-slate-700">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#0B4F6C]" /> The Challenge
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {study.challenge}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#0B4F6C]" /> The CodePlaced Architecture
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {study.solution}
              </p>
            </div>

            {/* Impact Highlights */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" /> Quantified Business Outcomes
              </h3>
              <div className="space-y-2.5">
                {study.impact.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Badges */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Technologies & Standards Implemented
              </h4>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#F8FAFC] text-slate-800 rounded-lg text-xs font-medium border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer CTA in Modal */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Want similar architecture built for your systems in weeks?
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onBookCall(study.title);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white text-xs font-bold transition-all shadow-md shadow-[#0B4F6C]/20"
                >
                  Schedule Solution Architecture Call <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
