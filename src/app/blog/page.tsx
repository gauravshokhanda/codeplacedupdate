"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Search,
} from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { ArticleModal } from "@/components/ArticleModal";
import { BlogPost } from "@/types";

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#ECFEFF]/25 to-white pt-28 pb-20 lg:pt-36 lg:pb-28 border-b border-slate-200/80 text-center">
          <div className="site-container max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFEFF] text-[#0B4F6C] border border-[#0B4F6C]/20 shadow-xs mb-6">
              <BookOpen className="w-3.5 h-3.5 text-[#0E7490]" /> Engineering Notes & Field Reports
            </div>

            <h1 className="text-[36px] sm:text-[52px] lg:text-[64px] font-black tracking-tight text-[#082F49] leading-[1.1] mb-6">
              Latest Insights & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4F6C] via-[#0E7490] to-[#14B8A6]">
                Architecture Research
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Field reports, benchmarks, and production lakehouse post-mortems authored by our Principal AI and Data Engineers.
            </p>

            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search technical papers (RAG, lakehouse, ClickHouse)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]/30 focus:border-[#0B4F6C] shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* Blog Post Grid */}
        <section className="section-py site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedArticle(post)}
                className="group cursor-pointer rounded-[24px] bg-white border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-[#0B4F6C]/30 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
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

                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  </div>

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
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-[#082F49] via-[#083344] to-[#041E2A] text-white py-16 text-center">
          <div className="site-container max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black">
              Need Architectural Advisory for Your Team?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Our Principal Engineers can audit your pipelines and ship production solutions in 2–4 weeks.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B4F6C] hover:bg-[#0E7490] text-white font-bold text-sm shadow-xl transition-all border border-[#14B8A6]/30"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Reading Modal */}
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          onBookCall={() => setSelectedArticle(null)}
        />
      </div>
  );
}
