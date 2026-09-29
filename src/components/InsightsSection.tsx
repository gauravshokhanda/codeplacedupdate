"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { BlogPost } from "@/types";

interface InsightsSectionProps {
  onSelectArticle: (article: BlogPost) => void;
  onOpenBookAudit: (scope?: string) => void;
}

export function InsightsSection({ onSelectArticle, onOpenBookAudit }: InsightsSectionProps) {
  return (
    <section className="section-py bg-[#F8FAFC] relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#0E7490]" /> Engineering Notes
            </div>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-black text-[#082F49] tracking-tight leading-[1.15]">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">Insights & Research</span>
            </h2>
            <p className="text-[18px] text-slate-600 leading-[1.6]">
              Field reports and architectural guides authored by our Principal AI and Data Engineers.
            </p>
          </div>

          <button
            onClick={() => onOpenBookAudit("Architecture Consultation")}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0B4F6C] hover:text-[#0E7490] self-start md:self-auto group"
          >
            <span>Read all engineering papers</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Articles Grid with Gradient Thumbnails & Hover Scale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
              onClick={() => onSelectArticle(post)}
              className="group cursor-pointer rounded-[24px] bg-white border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-[#0B4F6C]/30 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Enterprise Dark Teal / Navy Gradient Thumbnail */}
                <div
                  className={`h-52 w-full bg-gradient-to-br ${post.coverGradient} p-6 flex flex-col justify-between text-white relative overflow-hidden`}
                >
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/30">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-white/90 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <div className="z-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                      CodePlaced Research
                    </span>
                  </div>

                  {/* Decorative glowing gradient ring in thumbnail */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none" />
                </div>

                {/* Article Info */}
                <div className="p-7 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-[#0B4F6C]" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#082F49] group-hover:text-[#0B4F6C] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & CTA */}
              <div className="p-7 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-9 h-9 rounded-full object-cover border-2 border-slate-200"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#082F49]">
                      {post.author.name}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {post.author.role}
                    </div>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#0B4F6C] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
