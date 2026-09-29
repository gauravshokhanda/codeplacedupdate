"use client";

import React from "react";
import { motion } from "framer-motion";
import { TRUSTED_BRANDS } from "@/lib/data";

export function TrustedBy() {
  // Duplicate array twice for seamless continuous loop
  const brands = [...TRUSTED_BRANDS, ...TRUSTED_BRANDS, ...TRUSTED_BRANDS];

  return (
    <section className="py-8 bg-white border-y border-slate-200/80 overflow-hidden select-none relative z-10">
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="flex items-center gap-14 sm:gap-20 w-max cursor-pointer hover:[animation-play-state:paused]"
        >
          {brands.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center gap-3 opacity-65 hover:opacity-100 transition-opacity duration-300 flex-shrink-0 group"
            >
              <div className="w-8 h-8 rounded-xl bg-[#0B4F6C]/[0.08] border border-[#0B4F6C]/15 flex items-center justify-center font-bold text-xs text-[#0B4F6C] group-hover:bg-[#0B4F6C] group-hover:text-white transition-colors">
                {brand.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight group-hover:text-[#0B4F6C] transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] text-slate-400 block -mt-1 font-medium">
                  {brand.subtitle}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
