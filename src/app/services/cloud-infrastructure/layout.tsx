import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Infrastructure — DevOps, Kubernetes & Reliability Engineering",
  description:
    "High-availability cloud architecture, CI/CD automation, observability, and cost-optimized infrastructure on AWS, GCP, and Azure.",
};

export default function CloudInfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

