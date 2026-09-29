"use client";

import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BookAuditModal } from "./BookAuditModal";
import { CaseStudyModal } from "./CaseStudyModal";
import { CaseStudy } from "@/types";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [isBookAuditOpen, setIsBookAuditOpen] = useState(false);
  const [auditScope, setAuditScope] = useState<string | undefined>(undefined);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const handleOpenBookAudit = (scope?: string) => {
    setAuditScope(scope);
    setIsBookAuditOpen(true);
  };

  const handleCloseBookAudit = () => {
    setIsBookAuditOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-[#0F172A]">
      <Header onOpenBookAudit={handleOpenBookAudit} />

      <main className="flex-1 pt-[60px]">
        {children}
      </main>

      <Footer onOpenBookAudit={handleOpenBookAudit} />

      {/* Global Book Technical Audit Modal */}
      <BookAuditModal
        isOpen={isBookAuditOpen}
        onClose={handleCloseBookAudit}
        defaultScope={auditScope}
      />

      {/* Global Case Study Details Modal */}
      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onBookCall={handleOpenBookAudit}
      />
    </div>
  );
}
