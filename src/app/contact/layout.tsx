import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CodePlaced — Start Your Project or Architecture Inquiry",
  description:
    "Get in touch with CodePlaced's engineering leadership to discuss AI automation, custom software development, data platforms, BI dashboards, or digital growth.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

