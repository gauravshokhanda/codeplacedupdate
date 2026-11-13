import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Engineering Insights",
  description:
    "Technical guides, architectural blueprints, and practical insights on AI systems, software engineering, analytics, and digital growth from CodePlaced.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

