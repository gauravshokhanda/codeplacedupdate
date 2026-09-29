"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { MetricsSection } from "@/components/MetricsSection";
import { EngagementModels } from "@/components/EngagementModels";
import { FeaturedCaseStudies } from "@/components/FeaturedCaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { MediaRecognition } from "@/components/MediaRecognition";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AwardsSection } from "@/components/AwardsSection";
import { TechStack } from "@/components/TechStack";
import { IndustriesSection } from "@/components/IndustriesSection";
import { InsightsSection } from "@/components/InsightsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";
import { BookAuditModal } from "@/components/BookAuditModal";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { ArticleModal } from "@/components/ArticleModal";
import { CaseStudy, BlogPost } from "@/types";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedAuditScope, setSelectedAuditScope] = useState<string | undefined>(undefined);
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const handleOpenBookAudit = (scope?: string) => {
    setSelectedAuditScope(scope);
    setIsBookModalOpen(true);
  };

  const handleCloseBookAudit = () => {
    setIsBookModalOpen(false);
    setSelectedAuditScope(undefined);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#0F172A] selection:bg-[#0B4F6C] selection:text-white">
      {/* 1. Sticky Header */}
      <Header onOpenBookAudit={handleOpenBookAudit} />

      <main>
        {/* 2. Reference-Style Centered Hero (Eyebrow -> Headline -> Description -> CTAs -> Trusted Logos -> 1200px Showcase) */}
        <Hero onOpenBookAudit={handleOpenBookAudit} />

        {/* 3. Transforming Bold Ideas (6 feature cards) */}
        <WhyChooseUs onOpenBookAudit={handleOpenBookAudit} />

        {/* 4. Metrics Section (Dark Gradient #12042C -> #1A073A) */}
        <MetricsSection />

        {/* 5. Engagement Models (Process Panel & AI Workflow Visualization) */}
        <EngagementModels onOpenBookAudit={handleOpenBookAudit} />

        {/* 6. Featured Case Studies (3 cards, 520px height, 240px image) */}
        <FeaturedCaseStudies
          onSelectCaseStudy={(study) => setActiveCaseStudy(study)}
          onOpenBookAudit={handleOpenBookAudit}
        />

        {/* 7. Testimonials (650px height, dark radial gradient, glass cards) */}
        <Testimonials />

        {/* 8. Media Recognition (Featured In with 80px spacing) */}
        <MediaRecognition />

        {/* 9. Services Grid (3x3 grid = 9 cards with varied tones) */}
        <ServicesGrid onOpenBookAudit={handleOpenBookAudit} />

        {/* 10. Awards Section (We Don't Chase Awards. We Earn Trust.) */}
        <AwardsSection onOpenBookAudit={handleOpenBookAudit} />

        {/* 11. Technology Showcase (Split Categories / Visual Workspace) */}
        <TechStack onOpenBookAudit={handleOpenBookAudit} />

        {/* 12. Industries Section (4 cols desktop, 8 industry cards) */}
        <IndustriesSection onOpenBookAudit={handleOpenBookAudit} />

        {/* 13. Insights / Blog Section */}
        <div id="insights">
          <InsightsSection
            onSelectArticle={(article) => setActiveArticle(article)}
            onOpenBookAudit={handleOpenBookAudit}
          />
        </div>

        {/* 14. FAQ Section (2 columns: heading + CTA / accordion) */}
        <FaqSection onOpenBookAudit={handleOpenBookAudit} />

        {/* 15. Final CTA Section (32px radius container, dark gradient) */}
        <ContactCta onOpenBookAudit={handleOpenBookAudit} />
      </main>

      {/* 16. Footer (Newsletter card, 4 columns, partner badges) */}
      <Footer onOpenBookAudit={handleOpenBookAudit} />

      {/* Floating Action Trigger */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => handleOpenBookAudit()}
          className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#0F172A] hover:bg-[#0B4F6C] text-white font-bold text-xs shadow-2xl hover:shadow-cyan-900/30 transition-all duration-300 border border-slate-700/80 active:scale-95"
          aria-label="Book 30-min Technical Audit"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0284C7]" />
          </span>
          <span className="hidden sm:inline">Book Audit Call</span>
          <Sparkles className="w-3.5 h-3.5 text-[#06B6D4] group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Interactive Modals */}
      <BookAuditModal
        isOpen={isBookModalOpen}
        onClose={handleCloseBookAudit}
        defaultScope={selectedAuditScope}
      />

      <CaseStudyModal
        study={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onBookCall={handleOpenBookAudit}
      />

      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onBookCall={() => handleOpenBookAudit("Engineering Paper Follow-up")}
      />
    </div>
  );
}
