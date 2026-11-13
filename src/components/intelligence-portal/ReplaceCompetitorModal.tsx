"use client";

import React, { useState } from "react";
import { X, RefreshCw, Globe, AlertCircle } from "lucide-react";
import { CompetitorData } from "@/types/intelligencePortal";

interface ReplaceCompetitorModalProps {
  competitor: CompetitorData | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirmReplace: (competitorId: string, newDomainOrName: string) => void;
}

export function ReplaceCompetitorModal({
  competitor,
  isOpen,
  onClose,
  onConfirmReplace,
}: ReplaceCompetitorModalProps) {
  const [newCompetitor, setNewCompetitor] = useState("");
  const [error, setError] = useState<string | null>(null);

  if (!isOpen || !competitor) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newCompetitor.trim();
    if (!trimmed) {
      setError("Please enter a competitor domain or business name.");
      return;
    }
    setError(null);
    onConfirmReplace(competitor.id, trimmed);
    setNewCompetitor("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#090C10] border border-[#00BCD4]/40 p-6 sm:p-8 text-left space-y-6 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(0,188,212,0.15)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#00BCD4]/10 border border-[#00BCD4]/30 text-[#00BCD4]">
            <RefreshCw className="w-3 h-3 text-[#00BCD4]" />
            <span>REPLACE COMPETITOR</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Replace {competitor.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
            If this competitor is not directly relevant to your market, enter a custom competitor URL or domain name to benchmark instead.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="newCompetitorInput"
              className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block"
            >
              New Competitor Domain or Name
            </label>
            <div className="relative">
              <input
                id="newCompetitorInput"
                type="text"
                value={newCompetitor}
                onChange={(e) => {
                  setNewCompetitor(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="e.g. competitor.com or Acme Labs"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00BCD4] focus:ring-2 focus:ring-[#00BCD4]/30 transition-all font-mono"
                autoFocus
              />
            </div>
            {error && (
              <div className="flex items-center gap-1.5 text-xs text-rose-400 font-mono">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11.5px] text-slate-400 leading-relaxed flex items-start gap-2">
            <Globe className="w-4 h-4 text-[#00BCD4] shrink-0 mt-0.5" />
            <span>
              Once connected to the real engine, submitting will trigger an asynchronous crawler audit for this specific target domain.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#00BCD4] hover:bg-[#20d7f5] text-[#06151C] font-mono text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              Confirm Replacement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

