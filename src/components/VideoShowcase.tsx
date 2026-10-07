"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Activity,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";

interface VideoShowcaseProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  videoSrc?: string;
  posterSrc?: string;
}

export function VideoShowcase({
  eyebrow = "INSIDE CODEPLACED",
  title = "See How We Engineer Scalable Digital Systems",
  subtitle = "Watch our engineering pods transform complex workflows, lakehouses, and product architectures into high-velocity commercial systems.",
  videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-41228-large.mp4",
  posterSrc = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
}: VideoShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {
        // Fallback if browser blocks autoplay
      });
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * (videoRef.current.duration || 1);
    videoRef.current.currentTime = newTime;
    setProgress((clickX / width) * 100);
  };

  return (
    <section className="py-20 sm:py-24 border-b border-slate-200/60 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] pointer-events-none -z-0">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 183, 194, 0.12), rgba(15, 76, 129, 0.05), transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-[800px] mx-auto text-center mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/80 backdrop-blur-sm text-[#0f4c81] border border-[#00b7c2]/25 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00b7c2]" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#082F49] tracking-tight [text-wrap:balance]">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-[680px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Video Player Container */}
        <div className="max-w-5xl mx-auto">
          <div
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 249, 255, 0.85))",
              boxShadow: "0 25px 70px rgba(2, 132, 199, 0.12), 0 0 30px rgba(0, 183, 194, 0.08)",
            }}
            className="rounded-[28px] sm:rounded-[36px] p-3 sm:p-4 border border-[#00b7c2]/30 overflow-hidden relative group"
          >
            {/* Aspect Ratio Video Box */}
            <div className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden bg-slate-950 aspect-video shadow-inner">
              <video
                ref={videoRef}
                src={videoSrc}
                poster={posterSrc}
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                className="w-full h-full object-cover cursor-pointer"
              />

              {/* Dark Gradient Overlay for Controls Scannability */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent transition-opacity duration-300 pointer-events-none ${
                  isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-70"
                }`}
              />

              {/* Big Center Play Button (When Paused) */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
                >
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-[#00b7c2] to-[#0284c7] text-white flex items-center justify-center shadow-2xl shadow-cyan-500/50 border-4 border-white/40 cursor-pointer relative"
                    aria-label="Play showcase video"
                  >
                    <span className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping pointer-events-none" />
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1.5" />
                  </motion.button>
                </div>
              )}

              {/* Top Status Bar with Live Telemetry Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Live Architecture</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-900/60 backdrop-blur-md text-slate-300 border border-white/10">
                    <Cpu className="w-3 h-3 text-[#00b7c2]" />
                    <span>2-4 Week Delivery</span>
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-xs font-bold text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>99.9% Uptime</span>
                </div>
              </div>

              {/* Bottom Interactive Control Bar */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20 transition-opacity duration-300 ${
                  isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              >
                {/* Progress Scrub Bar */}
                <div
                  onClick={handleSeek}
                  className="w-full h-1.5 sm:h-2 bg-white/20 hover:h-2.5 rounded-full mb-3 cursor-pointer overflow-hidden transition-all relative"
                >
                  <div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-[#00b7c2] to-[#38bdf8] rounded-full transition-all duration-100"
                  />
                </div>

                {/* Control Icons */}
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-white" />
                      ) : (
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      )}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer"
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>

                    <span className="text-xs font-semibold text-slate-300 hidden sm:inline-block">
                      Production System Walkthrough
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <span className="hidden sm:inline-block">High-Density Telemetry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
