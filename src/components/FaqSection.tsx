"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageSquareText, ArrowRight } from "lucide-react";
import { FAQS_LIST } from "@/lib/data";

interface FaqSectionProps {
  onOpenBookAudit: (scope?: string) => void;
}

export function FaqSection({ onOpenBookAudit }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="section-py bg-white border-t border-slate-100 relative">
      <div className="site-container">
        {/* Two-Column Layout: Left Heading + CTA card / Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-[#0E7490]" /> Direct Answers
            </div>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-black text-[#082F49] tracking-tight leading-[1.15]">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">Questions</span>
            </h2>

            <p className="text-[18px] text-slate-600 leading-[1.6]">
              Everything you need to know about our 2-4 week delivery model, engineering standards, and enterprise IP ownership.
            </p>

            {/* CTA Card */}
            <div className="p-7 rounded-[24px] bg-[#F8FAFC] border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(11,79,108,0.08)] border border-[rgba(11,79,108,0.15)] text-[#0B4F6C] flex items-center justify-center font-bold shadow-2xs">
                  <MessageSquareText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#082F49] text-base">Have a specific scenario?</h4>
                  <p className="text-xs text-slate-500">Speak directly with a Principal Architect</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                We sign NDAs upfront. Let us audit your schemas and outline a fixed milestone delivery plan.
              </p>

              <button
                onClick={() => onOpenBookAudit("Direct Architecture Question")}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#082F49] hover:bg-[#0B4F6C] text-white text-xs font-bold transition-colors shadow-sm"
              >
                <span>Ask an Architect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Shadcn Style Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQS_LIST.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-[20px] border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-[#F0F9FF]/70 border-[#0B4F6C]/30 shadow-md ring-1 ring-[#0B4F6C]/20"
                      : "bg-white hover:bg-slate-50/70 border-slate-200/80 shadow-2xs"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-2 h-2 rounded-full bg-[#0B4F6C] flex-shrink-0" />
                      <span className="font-bold text-[#082F49] text-base sm:text-lg">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 flex-shrink-0 ${
                        isOpen
                          ? "rotate-180 bg-[#0B4F6C] text-white"
                          : "bg-[rgba(11,79,108,0.08)] text-[#0B4F6C]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
