"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  Layers,
  Cloud,
  Bot,
  Users,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data";

interface WhyChooseUsProps {
  onOpenBookAudit: (scope?: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-[#0B4F6C]" />,
  Database: <Database className="w-6 h-6 text-[#0B4F6C]" />,
  Layers: <Layers className="w-6 h-6 text-[#0B4F6C]" />,
  Cloud: <Cloud className="w-6 h-6 text-[#0B4F6C]" />,
  Bot: <Bot className="w-6 h-6 text-[#0B4F6C]" />,
  Users: <Users className="w-6 h-6 text-[#0B4F6C]" />,
};

export function WhyChooseUs({ onOpenBookAudit }: WhyChooseUsProps) {
  return (
    <section id="why-us" className="section-py bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/80">
      {/* Soft teal ambient background blob */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0B4F6C]/[0.06] rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="site-container relative z-10">
        {/* Large Centered Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[rgba(11,79,108,0.08)] text-[#0B4F6C] border border-[rgba(11,79,108,0.15)] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            The CodePlaced Advantage
          </div>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-black text-[#0F172A] tracking-tight leading-[1.15]">
            Transforming <span className="bg-gradient-to-r from-[#0B4F6C] via-[#0284C7] to-[#06B6D4] bg-clip-text text-transparent">Bold Ideas</span> Into Intelligent Systems
          </h2>

          <p className="text-[18px] text-[#475569] leading-[1.6]">
            Enterprise-grade reliability meets startup delivery speed. Build AI-native architectures that compound in value.
          </p>
        </div>

        {/* 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onClick={() => onOpenBookAudit(card.title)}
              className="group cursor-pointer min-h-[260px] rounded-[24px] p-8 bg-white border border-slate-200 hover:border-[#0B4F6C]/40 shadow-xs hover:shadow-xl hover:shadow-[#0B4F6C]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  {/* Standardized Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-[rgba(11,79,108,0.08)] border border-[rgba(11,79,108,0.15)] flex items-center justify-center group-hover:bg-[#0B4F6C] transition-colors duration-200">
                    <div className="group-hover:[&>svg]:text-white transition-colors">
                      {iconMap[card.iconName]}
                    </div>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B4F6C] bg-[rgba(11,79,108,0.06)] px-3 py-1 rounded-full border border-[rgba(11,79,108,0.12)]">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#0B4F6C] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[#475569] text-sm mt-2 line-clamp-3 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100 mt-4">
                <span className="text-xs font-bold text-[#0B4F6C] group-hover:underline inline-flex items-center gap-1">
                  Explore Architecture
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="text-[11px] text-slate-400 font-semibold">2-4 Wk Delivery</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
