"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/lib/data";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = TESTIMONIALS_DATA.length;

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="min-h-[650px] py-20 lg:py-24 relative flex flex-col justify-center bg-gradient-to-b from-[#082F49] via-[#083344] to-[#041d27] text-white overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0284C7]/15 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="site-container w-full relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Client Validation
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-black tracking-tight text-white">
            Trusted by Builders & Leaders
          </h2>
          <p className="text-slate-300 text-base">
            What technical founders, CTOs, and product leaders say about partnering with CodePlaced.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="bg-white/[0.05] backdrop-blur-[20px] rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl relative"
            >
              <Quote className="w-12 h-12 text-cyan-400/20 absolute top-8 right-8" />

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed mb-8">
                “{current.quote}”
              </blockquote>

              {/* Key Outcome Highlight Banner */}
              <div className="mb-8 p-3 rounded-xl bg-[#0B4F6C]/30 border border-cyan-400/30 inline-flex items-center gap-2 text-xs sm:text-sm text-cyan-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Impact: {current.highlight}</span>
              </div>

              {/* Profile */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400/40"
                  />
                  <div>
                    <div className="text-lg font-bold text-white">{current.name}</div>
                    <div className="text-xs sm:text-sm text-slate-300">
                      {current.role} • <span className="text-cyan-400 font-semibold">{current.company}</span>
                    </div>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Key Benchmark
                  </div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">
                    {current.metricsResult}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-[#38BDF8]"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
