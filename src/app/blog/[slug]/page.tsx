import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  CheckCircle2,
  Tag,
  BookOpen,
  User,
  ChevronRight,
  Bookmark,
  Lightbulb,
  Terminal,
} from "lucide-react";
import {
  BLOG_POSTS,
  getBlogPostBySlug,
  getRelatedBlogPosts,
  getAllBlogSlugs,
} from "@/lib/blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | CodePlaced",
      description: "The requested article could not be found.",
    };
  }

  const url = `https://codeplaced.com/blog/${post.slug}`;

  return {
    title: `${post.title} | CodePlaced Insights`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    creator: post.author.name,
    publisher: "CodePlaced",
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url,
      title: post.title,
      description: post.excerpt,
      siteName: "CodePlaced",
      publishedTime: post.dateISO,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      creator: "@codeplaced",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, 3);

  // Structured Schema for AI Search & Google Rich Snippets
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [post.coverImage],
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      url: post.author.linkedin || "https://codeplaced.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "CodePlaced",
      url: "https://codeplaced.com",
      logo: {
        "@type": "ImageObject",
        url: "https://codeplaced.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://codeplaced.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  return (
    <div className="text-[#0F172A] selection:bg-[#0B4F6C] selection:text-white font-sans min-h-screen relative">
      {/* JSON-LD Schema for AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero / Article Header Section */}
      <section className="relative pt-28 pb-10 sm:pt-36 sm:pb-14 border-b border-slate-200/60 overflow-hidden">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[500px] pointer-events-none -z-0">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at center, rgba(19,191,234,0.12), rgba(11,79,108,0.04), transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-[1020px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#0f4c81] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/blog" className="hover:text-[#0f4c81] transition-colors">
              Insights & Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0f4c81] font-bold truncate max-w-[240px] sm:max-w-none">
              {post.category}
            </span>
          </nav>

          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/30 shadow-2xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00b7c2]" />
            <span>{post.category}</span>
          </div>

          {/* Article Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F49] tracking-tight leading-[1.14] mb-4 [text-wrap:balance]">
            {post.title}
          </h1>

          {/* Subtitle / Excerpt */}
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal mb-8">
            {post.subtitle || post.excerpt}
          </p>

          {/* Author Bar & Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200/80 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-sky-100 shadow-xs"
              />
              <div>
                <div className="font-bold text-[#082F49] flex items-center gap-1.5">
                  <span>{post.author.name}</span>
                  {post.author.linkedin && (
                    <a
                      href={post.author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0077B5] hover:opacity-80 transition-opacity"
                      aria-label={`${post.author.name} on LinkedIn`}
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {post.author.role}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 text-slate-500 font-medium text-xs sm:text-sm">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#00b7c2]" />
                <span>{post.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#00b7c2]" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Table of Contents */}
      <section className="py-12 sm:py-16 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Article Body (8 Cols) */}
          <article className="lg:col-span-8 space-y-10">
            {/* Featured Image */}
            <div className="rounded-[28px] overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900 max-h-[440px]">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover max-h-[440px] hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Key Takeaways Box */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(236, 254, 255, 0.7))",
                  boxShadow: "0 12px 36px rgba(2, 132, 199, 0.06)",
                }}
                className="rounded-[24px] p-6 sm:p-8 border border-[#00b7c2]/30 space-y-4"
              >
                <div className="flex items-center gap-2.5 text-[#0f4c81] font-black text-sm uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-[#00b7c2]" />
                  <span>Executive Summary & Key Takeaways</span>
                </div>
                <ul className="space-y-2.5">
                  {post.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#00b7c2] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Structured Content Sections */}
            <div className="space-y-12 text-slate-700">
              {post.sections.map((section, sIdx) => (
                <div key={section.id || sIdx} id={section.id} className="space-y-4 scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082F49] tracking-tight">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                      {para}
                    </p>
                  ))}

                  {/* Optional Callout */}
                  {section.callout && (
                    <div className="p-5 rounded-2xl bg-white border border-[#00b7c2]/30 shadow-xs space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0f4c81] block">
                        {section.callout.title}
                      </span>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        {section.callout.text}
                      </p>
                    </div>
                  )}

                  {/* Optional Code Snippet */}
                  {section.codeSnippet && (
                    <div className="rounded-2xl overflow-hidden bg-[#0A192F] text-cyan-200 border border-slate-800 shadow-md">
                      <div className="px-4 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                        <div className="flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{section.codeSnippet.language.toUpperCase()}</span>
                        </div>
                        <span>Reference Blueprint</span>
                      </div>
                      <pre className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-slate-200">
                        <code>{section.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}

                  {/* Optional Takeaway Footnote */}
                  {section.takeaway && (
                    <div className="pl-4 border-l-3 border-[#00b7c2] italic text-sm text-slate-600 font-medium">
                      {section.takeaway}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tags Strip */}
            <div className="pt-8 border-t border-slate-200/80 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" />
                Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-xl text-xs font-bold bg-[#ECFEFF] text-[#0f4c81] border border-[#00b7c2]/20 shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author Profile Bio Box */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-white border border-sky-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#00b7c2]/30 shadow-xs shrink-0"
              />
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#082F49]">
                    Written by {post.author.name}
                  </h3>
                  {post.author.linkedin && (
                    <a
                      href={post.author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0f4c81] hover:text-[#00b7c2] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                      </svg>
                      <span>Connect</span>
                    </a>
                  )}
                </div>
                <p className="text-xs font-semibold text-[#00b7c2]">
                  {post.author.role}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {post.author.bio || "Technology strategist and engineer helping businesses build scalable, data-driven software systems."}
                </p>
              </div>
            </div>

            {/* Back to Blog Action */}
            <div className="pt-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0f4c81] hover:text-[#00b7c2] transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to All Articles</span>
              </Link>
            </div>
          </article>

          {/* Sticky Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Table of Contents Card */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="p-6 rounded-[24px] bg-white/90 backdrop-blur-sm border border-sky-100 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0f4c81]">
                  <Bookmark className="w-4 h-4 text-[#00b7c2]" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-2">
                  {post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-xs sm:text-sm font-medium text-slate-600 hover:text-[#0f4c81] hover:translate-x-1 transition-all leading-snug py-1 border-l-2 border-transparent hover:border-[#00b7c2] pl-2.5"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Newsletter Subscription Card in Sidebar */}
            <div className="p-6 rounded-[24px] bg-gradient-to-b from-white to-[#edf7fb] border border-sky-100 shadow-sm space-y-4 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-cyan-50 text-[#0f4c81] border border-cyan-200/80">
                <Sparkles className="w-3 h-3 text-[#00b7c2]" />
                <span>WEEKLY BRIEFING</span>
              </div>
              <h3 className="text-base font-bold text-[#082F49] leading-snug">
                Get Engineering & AI Insights
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Join founders and engineers receiving our latest architectural benchmarks and playbooks.
              </p>
              <form
                action="#"
                method="GET"
                className="space-y-2 pt-1"
              >
                <input
                  type="email"
                  placeholder="Enter work email"
                  className="w-full h-10 px-3.5 rounded-xl bg-white border border-slate-200 text-xs text-[#082F49] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#00b7c2]"
                />
                <button
                  type="submit"
                  className="w-full h-10 rounded-xl text-white font-bold text-xs tracking-tight shadow-md hover:shadow-cyan-500/20 transition-all cursor-pointer"
                  style={{
                    background: "linear-gradient(90deg, #0f4c81, #00b7c2)",
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-20 border-t border-slate-200/60 bg-white/50">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0f4c81]">
                  CONTINUE READING
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082F49] tracking-tight mt-1">
                  Related Insights & Technical Guides
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0f4c81] hover:text-[#00b7c2] transition-colors group"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="rounded-[22px] bg-white border border-slate-200/80 p-5 shadow-xs hover:shadow-lg hover:border-[#00b7c2]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="relative h-[180px] rounded-xl overflow-hidden bg-slate-900">
                      <img
                        src={relPost.coverImage}
                        alt={relPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-white/95 text-[#0f4c81] shadow-xs">
                        {relPost.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#082F49] group-hover:text-[#0f4c81] transition-colors leading-snug line-clamp-2">
                      {relPost.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
                      {relPost.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span>{relPost.publishedAt}</span>
                    <span className="text-[#0f4c81] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Read Article <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
