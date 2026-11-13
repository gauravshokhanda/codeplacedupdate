import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embedded Analytics — Customer-Facing Reporting & White-Label BI",
  description:
    "Multi-tenant, white-label interactive analytics and reporting embedded directly inside SaaS products with row-level security.",
};

export default function EmbeddedAnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

