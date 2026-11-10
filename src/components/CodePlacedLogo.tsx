import React from "react";
import Image from "next/image";

interface CodePlacedLogoProps {
  className?: string;
  variant?: "dark" | "light" | "white";
  size?: "sm" | "md" | "lg";
}

export function CodePlacedLogo({
  className = "",
  variant = "light",
  size = "md",
}: CodePlacedLogoProps) {
  // Height classes designed to keep natural aspect ratio (824 x 303)
  // Ensures crisp visibility and seamless vertical alignment in navbars and footers
  const sizeClasses = {
    sm: "h-8 sm:h-9",
    md: "h-9 sm:h-10 md:h-11",
    lg: "h-12 sm:h-14",
  };

  // Background compatibility:
  // On black sections (header, footer), the transparent PNG blends seamlessly with zero border.
  // On white sections (variant="dark"), wraps in a clean dark container.
  const isDarkContainerNeeded = variant === "dark";

  return (
    <div
      className={`inline-flex items-center transition-all duration-200 select-none ${
        isDarkContainerNeeded
          ? "bg-[#050505] px-2.5 py-1 rounded-xl border border-white/10"
          : ""
      } ${className}`}
    >
      <Image
        src="/images/codeplaced-official-logo.png"
        alt="CodePlaced"
        width={824}
        height={303}
        priority
        className={`w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] ${sizeClasses[size]}`}
      />
    </div>
  );
}
