"use client";

import React from "react";
import Image from "next/image";

interface TuitionstimeLaptopMockupProps {
  className?: string;
  priority?: boolean;
  tilted?: boolean;
}

export function TuitionstimeLaptopMockup({
  className = "",
  priority = true,
}: TuitionstimeLaptopMockupProps) {
  return (
    <div
      className={`relative w-full max-w-[720px] lg:max-w-[880px] xl:max-w-[950px] 2xl:max-w-[990px] select-none ${className}`}
    >
      {/* Studio Atmosphere: CodePlaced Cyan Ambient Glow Behind Display */}
      <div
        className="absolute top-[28%] left-[56%] -translate-x-1/2 -translate-y-1/2 w-[82%] h-[82%] bg-[radial-gradient(ellipse_at_center,rgba(0,199,232,0.18)_0%,rgba(8,127,165,0.05)_45%,transparent_70%)] blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Secondary Soft Depth Base Lighting */}
      <div
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[85%] h-12 bg-black/80 blur-2xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Photorealistic MacBook Studio Showcase */}
      <div className="relative w-full transition-transform duration-500 hover:scale-[1.01]">
        <div className="relative w-full aspect-[2040/1380] overflow-hidden">
          <Image
            src="/images/case-studies/tuitionstime/tuitionstime-photorealistic-laptop-hero.webp"
            alt="Tuitionstime Official Website Platform — Authentic Homepage featuring Learn Smarter Teach Better displayed on a photorealistic MacBook Pro"
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 850px"
            className="object-contain object-center drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
          />
        </div>
      </div>
    </div>
  );
}
