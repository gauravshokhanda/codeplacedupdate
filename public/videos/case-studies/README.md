# Tuitionstime Hero Video Asset Specification

## Target Asset: `tuitionstime-hero.mp4` / `tuitionstime-hero.webm`

This directory houses the cinematic hero video loop for the **Tuitionstime EdTech Marketplace** case study detail page (`/case-studies/tuitionstime`).

### Video Production Specifications
- **Resolution**: 3840 × 2160 (4K UHD) or 1920 × 1080 (Full HD)
- **Aspect Ratio**: 16:9
- **Frame Rate**: 30 fps or 60 fps
- **Duration**: 8 to 15 seconds seamless loop (start and end frames match smoothly)
- **Encoding**: 
  - Format 1: H.264 / MP4 (yuv420p, high profile, CRF 20, optimized for web streaming with faststart)
  - Format 2: VP9 / WebM (CRF 28, optimized for Chrome/Firefox)
- **Audio**: None (muted track or no audio channel)
- **Target File Size**: ≤ 6 MB for fast mobile preloading

### Scene Composition & Visual Art Direction
1. **Scene**: Sleek 3D product showcase of an EdTech marketplace platform in a dark cinematic studio environment.
2. **Devices**: Modern silver laptop open displaying the Tuitionstime tutor discovery marketplace, alongside a modern smartphone showing the student class schedule & booking experience.
3. **Floating UI Panels**: Semi-transparent glassmorphic panels displaying tutor cards, analytics charts, meeting links, and wallet balance.
4. **Lighting**: Deep navy & pure black ambient environment with electric cyan (`#00D4F0`) and cobalt blue (`#078FE8`) neon volumetric illumination and subtle desktop reflections.
5. **Camera Motion**: Slow, cinematic pan and subtle parallax dolly forward with restrained particle dust.

### Static Poster Fallback
- Path: `/images/case-studies/tuitionstime-hero.webp`
- The Next.js case study hero component uses this poster image as an instant responsive background while the video preloads and for users with `prefers-reduced-motion: reduce`.
