import React from "react";

interface CodePlacedLogoProps {
  className?: string;
  variant?: "dark" | "light" | "white";
  size?: "sm" | "md" | "lg";
}

export function CodePlacedLogo({
  className = "",
  variant = "dark",
  size = "md",
}: CodePlacedLogoProps) {
  const sizeClasses = {
    sm: "h-7 text-base tracking-tight",
    md: "h-8 text-lg tracking-tight",
    lg: "h-10 text-xl tracking-tight",
  };

  const isLight = variant === "light" || variant === "white";

  return (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      {/* Data Dashboard Style Logo Icon with Teal Outline */}
      <div className="relative flex-shrink-0">
        <svg
          viewBox="0 0 40 40"
          className={size === "sm" ? "w-7 h-7" : size === "lg" ? "w-10 h-10" : "w-8 h-8"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Rounded border frame */}
          <rect
            x="1.5"
            y="1.5"
            width="37"
            height="37"
            rx="9"
            stroke={isLight ? "#14B8C5" : "#0B6B88"}
            strokeWidth="2.5"
            className="transition-colors duration-300"
          />
          {/* Internal Divider Lines */}
          <line
            x1="20"
            y1="4"
            x2="20"
            y2="36"
            stroke={isLight ? "#14B8C5" : "#0B6B88"}
            strokeWidth="1.6"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
          <line
            x1="4"
            y1="20"
            x2="36"
            y2="20"
            stroke={isLight ? "#14B8C5" : "#0B6B88"}
            strokeWidth="1.6"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />

          {/* Top Left: Code Brackets </> */}
          <path
            d="M9 13.5L7 15.5L9 17.5M15 13.5L17 15.5L15 17.5M13 13L11 18"
            stroke={isLight ? "#E0F7FA" : "#062B38"}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Top Right: Growth Trend / Bar Chart */}
          <path
            d="M24 18V15M28 18V12M32 18V9"
            stroke={isLight ? "#14B8C5" : "#0B6B88"}
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Bottom Left: Data Analytics Curve */}
          <path
            d="M7 32L11 28L14 30L17 25"
            stroke={isLight ? "#14B8C5" : "#14B8C5"}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bottom Right: Verified Checkmark */}
          <path
            d="M24 29.5L27 32.5L33 26.5"
            stroke={isLight ? "#10B981" : "#10B981"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Ambient Glow */}
        <div className="absolute -inset-1 bg-[#14B8C5]/20 rounded-xl blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Typography: CODEPLACED */}
      <span
        className={`font-[800] uppercase transition-colors duration-200 ${
          sizeClasses[size]
        } ${isLight ? "text-white" : "text-[#062B38]"}`}
      >
        Code<span className="text-[#14B8C5]">Placed</span>
      </span>
    </div>
  );
}
