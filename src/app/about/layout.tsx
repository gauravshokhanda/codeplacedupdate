import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CodePlaced — Senior AI, Data & Software Engineering Studio",
  description:
    "Meet the founders and engineering team behind CodePlaced. Learn how our senior engineering studio builds scalable AI, software, data, and growth systems.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

