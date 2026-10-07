"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Search,
  BookOpen,
  Calendar,
  Clock,
  CheckCircle2,
  Mail,
  Filter,
} from "lucide-react";
import {
  BLOG_POSTS,
  BLOG_CATEGORIES,
  BlogPostItem,
} from "@/lib/blogData";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  // Identify featured article (either explicitly marked or first post)
  const featuredArticle: BlogPostItem = useMemo(() => {
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, []);

  // Filter remaining articles
  const filteredArticles = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
      }, 3000);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #f8fcff 0%, #edf7fb 40%, #eaf5f9 100%)",
      }}
      className="text-[#0F172A] selection:bg-[#0f4c81] selection:text-white font-sans min-h-screen relative"
    >
      {/* ========================================================================= */}
      {/* SECTION 1 — EDITORIAL HERO (Centered, Clean, Appinventiv Style) */}
      {/* ========================================================================= */}
      <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 overflow-hidden text-center">
        {/* Soft Radial Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-0"
          style={{
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle, rgba(18, 207, 208, 0.15) 0%, rgba(15, 79, 108, 0.07) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#0f4c81] border border-[#00b7c2]/30 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00b7c2]" />
            <span>BLOGS & INSIGHTS</span>
          </motion.div>

          {/* Centered Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#082F49] leading-[1.1]"
          >
            Engineering. Data.{" "}
            <span
              className="bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #0f4c81 0%, #00b7c2 50%, #0284c7 100%)",
              }}
            >
              Growth.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Thoughts, case studies, engineering learnings, AI implementation
            guides, and industry insights from the CodePlaced team.
          </motion.p>

          {/* Action Button & Search */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 max-w-lg mx-auto"
          >
            <a
              href="#articles-feed"
              className="w-full sm:w-auto h-[46px] px-7 rounded-full bg-[#082F49] hover:bg-[#0f4c81] text-white font-bold text-sm shadow-md shadow-[#082F49]/15 flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 group flex-shrink-0"
            >
              <span>Browse Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics..."
                className="w-full h-[46px] pl-10 pr-4 rounded-full bg-white border border-slate-200 shadow-xs focus:outline-hidden focus:ring-2 focus:ring-[#00b7c2] text-xs sm:text-sm text-[#082F49]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4 — CATEGORY FILTER TABS (Sticky Top Bar) */}
      {/* ========================================================================= */}
      <section className="sticky top-[72px] sm:top-[76px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-xs">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider pr-2 flex-shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#00b7c2]" />
              Topic:
            </span>
            {BLOG_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex-shrink-0 ${
                    isActive
                      ? "bg-[#082F49] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-[#082F49]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2 — FEATURED ARTICLE (Horizontal Card) */}
      {/* ========================================================================= */}
      {selectedCategory === "All" && searchQuery === "" && (
        <section className="py-12 sm:py-16">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#00b7c2]" />
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#0f4c81]">
                Featured Story
              </h2>
            </div>

            <div className="rounded-3xl bg-white border border-sky-100 shadow-xl shadow-sky-950/5 hover:shadow-2xl hover:shadow-sky-900/10 transition-all duration-300 overflow-hidden group hover:-translate-y-1">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Cover Image */}
                <div className="lg:col-span-7 relative h-[260px] sm:h-[340px] lg:h-full min-h-[300px] overflow-hidden bg-slate-900">
                  <Image
                    src={featuredArticle.coverImage}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/40 text-xs font-bold text-[#0f4c81] shadow-md">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#00b7c2]" />
                        {featuredArticle.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#00b7c2]" />
                        {featuredArticle.readTime}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${featuredArticle.slug}`}
                      className="block group/link"
                    >
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#082F49] tracking-tight leading-snug group-hover/link:text-[#0f4c81] transition-colors">
                        {featuredArticle.title}
                      </h3>
                    </Link>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-4">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {featuredArticle.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Author and CTA */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-sky-100 border border-sky-200 flex-shrink-0 relative">
                        <Image
                          src={featuredArticle.author.avatar}
                          alt={featuredArticle.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-[#082F49]">
                          {featuredArticle.author.name}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {featuredArticle.author.role}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredArticle.slug}`}
                      className="inline-flex items-center justify-center px-5 h-10 rounded-full text-white font-bold text-xs tracking-tight transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5"
                      style={{
                        background:
                          "linear-gradient(90deg, #0f4c81, #00b7c2)",
                      }}
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 3 — LATEST ARTICLES (3 Columns Desktop, 2 Tablet, 1 Mobile) */}
      {/* ========================================================================= */}
      <section id="articles-feed" className="py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#00b7c2] mb-1">
                Resource Center
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082F49] tracking-tight">
                {selectedCategory === "All"
                  ? "Latest Articles & Engineering Guides"
                  : `${selectedCategory} Articles`}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-500">
              Showing {filteredArticles.length} publication
              {filteredArticles.length === 1 ? "" : "s"}
            </p>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 p-8">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#082F49] mb-1">
                No articles found
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-4">
                We couldn&apos;t find any posts matching &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-full bg-[#082F49] text-white text-xs font-bold shadow-xs hover:bg-[#0f4c81] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map((post) => (
                <article
                  key={post.id}
                  className="rounded-2xl bg-white border border-sky-100 shadow-xs hover:shadow-xl hover:shadow-sky-950/8 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
                >
                  <div>
                    {/* Card Cover Image */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/50 text-[11px] font-bold text-[#0f4c81] shadow-xs">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 z-10">
                        <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#00b7c2]" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-6 space-y-3">
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400">
                        <Calendar className="w-3 h-3 text-[#00b7c2]" />
                        <span>{post.publishedAt}</span>
                      </div>

                      <Link href={`/blog/${post.slug}`} className="block">
                        <h3 className="text-lg font-bold text-[#082F49] tracking-tight group-hover:text-[#0f4c81] transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer with Author & Read More */}
                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-full overflow-hidden bg-sky-100 border border-sky-200 flex-shrink-0 relative">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs font-bold text-[#082F49] truncate">
                        {post.author.name}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0f4c81] hover:text-[#00b7c2] transition-colors group/btn flex-shrink-0"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 — NEWSLETTER (Compact) */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-t border-sky-100/70">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/80 text-xs font-bold text-[#0f4c81]">
            <Mail className="w-3.5 h-3.5 text-[#00b7c2]" />
            <span>Weekly Technology Briefing</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082F49] tracking-tight">
            Get engineering, AI and growth insights.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Join engineering leaders and tech executives who receive our latest
            architectural blueprints, data frameworks, and product strategies
            weekly.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-sm font-bold shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Thank you for subscribing! Check your inbox shortly.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your work email"
                className="w-full sm:w-72 h-11 px-4 rounded-full bg-white border border-slate-300 text-sm text-[#082F49] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#00b7c2] focus:border-transparent shadow-xs"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 h-11 rounded-full text-white font-bold text-sm tracking-tight transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 cursor-pointer flex-shrink-0"
                style={{
                  background: "linear-gradient(90deg, #0f4c81, #00b7c2)",
                }}
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-[11px] text-slate-400">
            Zero spam. Unsubscribe with 1-click anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
