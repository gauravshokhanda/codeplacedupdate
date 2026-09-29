"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { FEATURED_CASE_STUDIES } from "@/lib/data";
import { CaseStudy } from "@/types";

interface FeaturedCaseStudiesProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
  onOpenBookAudit: (scope?: string) => void;
}

export function FeaturedCaseStudies({
  onSelectCaseStudy,
  onOpenBookAudit,
}: FeaturedCaseStudiesProps) {
  return (
    <section id="case-studies" className="section-py bg-white relative border-t border-slate-200/80">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] border border-[rgba(11,79,108,0.15)] shadow-xs">
              <Sparkles className="w-3.5 h-3.5" /> Proven Enterprise Deployments
            </div>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-black text-[#0F172A] tracking-tight leading-[1.15]">
              Featured <span className="bg-gradient-to-r from-[#0B4F6C] via-[#0284C7] to-[#06B6D4] bg-clip-text text-transparent">Case Studies</span>
            </h2>
            <p className="text-[18px] text-[#475569] leading-[1.6]">
              Explore how we engineer and deliver mission-critical AI systems and data platforms for industry frontrunners.
            </p>
          </div>

          <button
            onClick={() => onOpenBookAudit("Case Studies Architecture Review")}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0F172A] hover:bg-[#0B4F6C] text-white font-bold text-xs transition-colors self-start md:self-auto shadow-md"
          >
            <span>Request Custom Architecture Blueprint</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Cards: height 520px, image 240px, rounded 24px, hover scale(1.03) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FEATURED_CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
              className="group flex flex-col min-h-[520px] rounded-[24px] bg-white border border-slate-200 shadow-lg shadow-black/5 hover:shadow-2xl hover:border-[#0B4F6C]/40 transition-all duration-300 overflow-hidden"
            >
              {/* Large Image: 240px */}
              <div className="relative h-[240px] w-full overflow-hidden bg-slate-900">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Industry Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-[#0B4F6C] border border-white/60 shadow-sm">
                    {study.industry}
                  </span>
                </div>

                {/* Metrics Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <div className="text-[11px] text-cyan-300 font-bold uppercase tracking-wider">
                      {study.metrics[0].label}
                    </div>
                    <div className="text-2xl font-black text-white">
                      {study.metrics[0].value}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-cyan-300 font-bold uppercase tracking-wider">
                      {study.metrics[1].label}
                    </div>
                    <div className="text-2xl font-black text-white">
                      {study.metrics[1].value}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#0B4F6C] transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-[#475569] text-sm mt-3 line-clamp-3 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {study.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-slate-50 text-[#0B4F6C] text-xs font-semibold border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectCaseStudy(study)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0B4F6C] hover:underline transition-colors"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-xs text-slate-400 font-medium">
                    {study.client}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
