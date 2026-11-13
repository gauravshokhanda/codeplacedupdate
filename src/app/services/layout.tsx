import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — AI, Software Engineering, Data & Digital Growth",
  description:
    "Explore CodePlaced's end-to-end engineering capabilities across AI & Automation, Software Development, Data Analytics & BI, Data Engineering, and Digital Marketing.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

