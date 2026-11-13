"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BookAuditModal } from "./BookAuditModal";
import { CaseStudyModal } from "./CaseStudyModal";
import { CaseStudy } from "@/types";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isPopStateRef = React.useRef(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const handlePopState = () => {
      isPopStateRef.current = true;
    };

    const handleDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;
      const hrefAttr = anchor.getAttribute("href");
      if (!hrefAttr || anchor.target === "_blank" || hrefAttr.startsWith("http") || hrefAttr.startsWith("mailto:") || hrefAttr.startsWith("tel:")) {
        return;
      }

      if (hrefAttr.startsWith("#")) {
        return;
      }

      try {
        const destUrl = new URL(anchor.href, window.location.origin);
        if (destUrl.origin === window.location.origin && destUrl.pathname === pathname && !destUrl.hash) {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      } catch {
        // Ignore malformed relative hrefs
      }
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [pathname]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const isBackForward = isPopStateRef.current;
    isPopStateRef.current = false;

    const rawHash = window.location.hash;
    if (rawHash && rawHash.length > 1) {
      const targetId = decodeURIComponent(rawHash.slice(1));
      let attempts = 0;
      let timerId: number | undefined;

      const tryScrollToHash = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }
        attempts += 1;
        if (attempts < 10) {
          timerId = window.setTimeout(tryScrollToHash, 50);
        }
      };

      const rafId = window.requestAnimationFrame(tryScrollToHash);
      return () => {
        window.cancelAnimationFrame(rafId);
        if (timerId !== undefined) window.clearTimeout(timerId);
      };
    }

    if (isBackForward) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const rafId = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });

    return () => window.cancelAnimationFrame(rafId);
  }, [pathname]);
  const isCaseStudyDetail =
    Boolean(pathname && pathname.startsWith("/case-studies/") && pathname !== "/case-studies");

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
    <div className="min-h-screen flex flex-col justify-between text-[#0F172A] relative">
      <Header onOpenBookAudit={handleOpenBookAudit} />

      <main className="flex-1">
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
