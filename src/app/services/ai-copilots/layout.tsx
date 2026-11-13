import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Automation — Copilots, RAG & Agentic Workflows",
  description:
    "Deploy production AI copilots, enterprise RAG knowledge pipelines, and intelligent workflow automation engineered by CodePlaced.",
};

export default function AiCopilotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

