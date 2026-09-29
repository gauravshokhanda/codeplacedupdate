"use client";

import React from "react";
import { motion } from "framer-motion";
import { MEDIA_OUTLETS } from "@/lib/data";

export function MediaRecognition() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-purple-100/70">
      <div className="site-container">
        {/* Centered Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] font-black text-[#0F0324] tracking-tight">
            Featured In
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Leading business and technology publications spotlighting our AI engineering delivery.
          </p>
        </div>

        {/* Large Logos Centered with 80px Spacing */}
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
          {MEDIA_OUTLETS.map((outlet, index) => (
            <motion.div
              key={outlet.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-700 group-hover:text-[#7C3AED] transition-colors">
                {outlet.logo}
              </span>
              <span className="text-[11px] text-slate-400 mt-1 max-w-[140px] opacity-0 group-hover:opacity-100 transition-opacity">
                {outlet.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
