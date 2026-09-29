"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Calendar, ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";

interface ArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
  onBookCall: () => void;
}

export function ArticleModal({ article, onClose, onBookCall }: ArticleModalProps) {
  if (!article) return null;

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
          {/* Cover Header */}
          <div className={`relative p-6 sm:p-8 bg-gradient-to-br ${article.coverGradient} text-white`}>
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-white/80">
                <Clock className="w-3.5 h-3.5" /> {article.readTime}
              </span>
              <span className="flex items-center gap-1 text-xs text-white/80">
                <Calendar className="w-3.5 h-3.5" /> {article.date}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
              {article.title}
            </h2>

            {/* Author info */}
            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/15">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full border-2 border-white/50 object-cover"
              />
              <div>
                <div className="text-sm font-bold text-white">{article.author.name}</div>
                <div className="text-xs text-white/70">{article.author.role}</div>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-8 space-y-5 text-slate-700">
            <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed border-l-4 border-[#0B4F6C] pl-4 py-1 bg-[#ECFEFF]/60 rounded-r-lg">
              {article.excerpt}
            </p>

            {article.content.map((paragraph, idx) => (
              <p key={idx} className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {paragraph}
              </p>
            ))}

            <div className="p-5 rounded-xl bg-[#082F49] text-white mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white">Need an implementation plan for your stack?</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Our engineering team can audit your pipelines and ship production solutions in 2-4 weeks.
                </div>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onBookCall();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white text-xs font-bold transition-colors flex-shrink-0"
              >
                Book Technical Audit <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
