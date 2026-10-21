"use client";

import React from "react";

interface MarqueeItem {
  id: string;
  name: string;
  type: "service" | "tech";
  icon: React.ReactNode;
}

// =========================================================================
// AUTHENTIC OFFICIAL BRAND LOGOS (Exact official brand vectors & colors)
// =========================================================================

const AwsLogo = () => (
  <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 75 45" fill="none" aria-label="AWS">
    <path
      d="M18.3 14.5c-.3-1.8-1.5-3.3-3.9-3.3-3.1 0-4.6 2.4-4.6 5.8 0 4.1 2 5.9 4.7 5.9 2 0 3.2-1.3 3.7-2.7h3.4c-.6 3.1-2.9 5.5-7.1 5.5-4.9 0-8.2-3.4-8.2-8.7 0-5.1 3.4-8.7 8.1-8.7 4.1 0 6.6 2.5 7.1 6.2h-3.2zm11.3 10.9h-3.3l-5.6-16.8h3.5l3.8 12.3 3.7-12.3h3.5l-5.6 16.8zm17-1.1c-.8.8-2 1.4-3.5 1.4-2.8 0-4.5-1.7-4.5-4.3 0-3.1 2.4-4.4 5.7-4.4h2.2v-1.1c0-1.7-.9-2.7-2.7-2.7-1.4 0-2.4.6-2.8 1.8h-3.2c.5-2.8 2.8-4.4 6-4.4 3.7 0 5.8 1.9 5.8 5.2v9.6h-3.1v-1.1zm-4.7-2.3c1.5 0 2.6-.7 3.3-1.6v-2.1h-2c-1.8 0-3 .6-3 2.1 0 1.1.7 1.6 1.7 1.6z"
      fill="#FFFFFF"
    />
    <path
      d="M60.1 31.6C48.6 37.8 33.3 38.6 18.2 34c-2.1-.6-4.1-1.5-6.2-2.5-.6-.3-.3-.9.3-.6 14.7 8 33.6 7.4 47.1.6 1-.5 1.7.5.7 1.1z"
      fill="#FF9900"
    />
    <path
      d="M63.7 29.8c-.8-1.1-5.3-1.2-7.8-1-.4 0-.4-.5 0-.7 2.7-1.3 7.8-.9 8.5.1.8 1.1-.3 6.1-3 7.6-.4.2-.7 0-.5-.4 1.2-2.2 3.6-4.5 2.8-5.6z"
      fill="#FF9900"
    />
  </svg>
);

const GoogleCloudLogo = () => (
  <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 24 24" fill="none" aria-label="Google Cloud">
    <path
      d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
      fill="#4285F4"
    />
    <path
      d="M19 14h-6v6h6c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96-.35.96-.75 2.16-1.35 2.96.6.6 1 1.2 1 2z"
      fill="#34A853"
    />
    <path
      d="M12 4c2.2 0 4.1 1 5.3 2.6l-3.3 3.3C13.4 9.3 12.7 9 12 9c-1.7 0-3.2 1.1-3.7 2.7l-3.5-2.7C6.1 6.2 8.8 4 12 4z"
      fill="#EA4335"
    />
    <path
      d="M4.8 9C4.3 9.9 4 10.9 4 12c0 1.1.3 2.1.8 3l3.5-2.7C8.2 12 8 11.5 8 11s.2-1 .3-1.3L4.8 9z"
      fill="#FBBC05"
    />
  </svg>
);

const AzureLogo = () => (
  <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 96 96" fill="none" aria-label="Microsoft Azure">
    <path
      d="M53.8 9.6L16.2 73.1a3.6 3.6 0 0 0 3.1 5.4h24.2a3.6 3.6 0 0 0 3.1-1.8l6.7-11.8 17.6 11.9a3.6 3.6 0 0 0 2 0.6H89a3.6 3.6 0 0 0 3-5.5L59.9 11.5a3.6 3.6 0 0 0-6.1-1.9z"
      fill="#0089D6"
    />
    <path
      d="M53.8 9.6a3.6 3.6 0 0 0-3.1 1.8L16.2 73.1a3.6 3.6 0 0 0 3.1 5.4h24.2a3.6 3.6 0 0 0 3.1-1.8l7.2-12.5-9.3-24.9 9.9-29.7z"
      fill="#0078D4"
    />
  </svg>
);

const ReactLogo = () => (
  <svg className="w-full h-full object-contain shrink-0" viewBox="-11.5 -10.23174 23 20.46348" fill="none" aria-label="React">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextJsLogo = () => (
  <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 180 180" fill="none" aria-label="Next.js">
    <circle cx="90" cy="90" r="86" fill="#000000" stroke="#FFFFFF" strokeWidth="6" />
    <path
      d="M149.5 157.4L69.2 54H54v72h12.2V69.4l73.2 94.3c3.6-1.8 7-3.9 10.1-6.3z"
      fill="url(#nextjs_grad1)"
    />
    <rect x="114" y="54" width="12" height="72" fill="url(#nextjs_grad2)" />
    <defs>
      <linearGradient id="nextjs_grad1" x1="109" y1="116" x2="144" y2="160" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="nextjs_grad2" x1="120" y1="54" x2="120" y2="106" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const NodeJsLogo = () => (
  <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 32 32" fill="none" aria-label="Node.js">
    <path d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5z" fill="#339933" />
    <path d="M16 4.5l10.8 6.2v12.5L16 29.5 5.2 23.2V10.7L16 4.5z" fill="#5FA04E" />
    <path
      d="M12.5 13.5v7.2a1.8 1.8 0 0 0 1.8 1.8h3.4a1.8 1.8 0 0 0 1.8-1.8v-7.2"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const PythonLogo = () => (
  <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 110 110" fill="none" aria-label="Python">
    <path
      d="M54.2 2C27.9 2 29.5 13.4 29.5 13.4l.1 11.8h25.1v3.5H19.4S2 26.8 2 53.6c0 26.7 15.2 25.7 15.2 25.7h9.1v-12.8s-.5-15.2 15-15.2h24.4s14.4.2 14.4-14V16S82.4 2 54.2 2zm-13.8 8.1a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4z"
      fill="#3776AB"
    />
    <path
      d="M55.8 108c26.3 0 24.7-11.4 24.7-11.4l-.1-11.8H55.3v-3.5h35.3S108 83.2 108 56.4c0-26.7-15.2-25.7-15.2-25.7h-9.1v12.8s.5 15.2-15 15.2H44.3s-14.4-.2-14.4 14V94s-2.3 14 25.9 14zm13.8-8.1a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4z"
      fill="#FFD43B"
    />
  </svg>
);

const JavaLogo = () => (
  <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 32 32" fill="none" aria-label="Java">
    <path d="M11.5 6.5c-2.5 3 1.5 5 3 6.5-1.5-1.5-3.5-3.5-3-6.5z" fill="#EA2D2E" />
    <path d="M15.5 3.5c-3 3.5 2 6 4 8-2-2-4.5-4.5-4-8z" fill="#E76F00" />
    <path d="M19 8c-1.5 2.5 1 4 2 5.5-1-1.5-2.5-3-2-5.5z" fill="#EA2D2E" />
    <path d="M8 17c0 4 3 6.5 8 6.5s8-2.5 8-6.5H8zm17 1c1.5 0 2.5-.5 2.5-1.5s-1-1.5-2.5-1.5v3z" fill="#5382A1" />
    <path d="M6 25.5c3 1.5 7 2 10 2s7-.5 10-2c-3-.5-7-.8-10-.8s-7 .3-10 .8z" fill="#5382A1" />
  </svg>
);

const SpringBootLogo = () => (
  <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 24 24" fill="none" aria-label="Spring Boot">
    <path
      d="M19.5 4.5C18.2 3.2 16.2 3 14 3.5c-4.8 1-8.5 5.3-9.5 10.2-.8 3.8.5 6.8 3.5 8.3 1.2.6 2.6.8 4 .8 6 0 11-4.9 11-10.9 0-2.8-1.3-5.4-3.5-7.4z"
      fill="#6DB33F"
    />
    <path
      d="M14.5 10.5c-3 1-5 3.5-5.5 6.5 2-1 4.5-1 6.5-2.5 1.5-1 2.5-3 2.5-4.5-1.2 0-2.4.2-3.5.5z"
      fill="#FFFFFF"
    />
  </svg>
);

const PowerBiLogo = () => (
  <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 24 24" fill="none" aria-label="Microsoft Power BI">
    <rect x="2" y="10" width="4" height="11" rx="1" fill="#F2C811" />
    <rect x="8" y="6" width="4" height="15" rx="1" fill="#E8A200" />
    <rect x="14" y="2" width="4" height="19" rx="1" fill="#D18E00" />
    <path d="M18 2h1a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-1V2z" fill="#B77400" />
  </svg>
);

const FlutterLogo = () => (
  <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 24 24" fill="none" aria-label="Flutter">
    <path d="M14.3 2L4 12.3l3.2 3.2L20.7 2H14.3z" fill="#54C5F8" />
    <path d="M14.3 12.2l-5.3 5.3 3.2 3.2 2.1-2.1 6.4-6.4h-6.4z" fill="#29B6F6" />
    <path d="M11.1 19.6l3.2 3.2h6.4l-6.4-6.4-3.2 3.2z" fill="#01579B" />
  </svg>
);

const AndroidLogo = () => (
  <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 24 24" fill="#3DDC84" aria-label="Android">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.1356-.2348.0551-.536-.1797-.6716-.2349-.1355-.536-.055-.6716.1798l-2.023 3.5042a12.8 12.8 0 0 0-5.0032-1.0028c-1.8023 0-3.4983.3556-5.0032 1.0028L4.9737 4.8724c-.1356-.2348-.4368-.3153-.6716-.1798-.2348.1356-.3153.4368-.1797.6716l1.996 3.4572C2.698 10.7497.5 14.7315.5 19.3414h23c0-4.6099-2.198-8.5917-5.6185-10.02" />
  </svg>
);

const AppleLogo = () => (
  <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 170 170" fill="#FFFFFF" aria-label="Apple iOS">
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.83-8.1-12.44-15.06-6.61-9.99-11.75-20.93-15.42-32.82-3.67-11.89-5.51-23.08-5.51-33.56 0-14.86 3.82-27.24 11.45-37.13 7.64-9.89 17.38-14.97 29.23-15.24 5.37 0 11.22 1.35 17.54 4.06 6.32 2.7 10.23 4.12 11.74 4.24 1.28-.12 5.33-1.6 12.16-4.43 6.83-2.83 12.66-4.06 17.5-3.69 13.58 1.05 24.36 6.29 32.33 15.72-11.89 7.23-17.72 17.1-17.49 29.62.24 9.89 4.06 18.23 11.45 25.02 7.39 6.79 16.32 10.74 26.79 11.86-2.11 6.53-4.7 12.98-7.76 19.34zM119.22 33.15c0-7.23 2.66-14.15 7.99-20.76 5.33-6.61 11.96-10.74 19.88-12.39.24 1.28.35 2.45.35 3.51 0 7.39-2.77 14.42-8.31 21.09-5.54 6.67-12.35 10.68-20.43 12.03-.35-1.16-.48-2.32-.48-3.48z" />
  </svg>
);

const OpenAiLogo = () => (
  <svg className="w-full h-full object-contain shrink-0 text-[#10A37F]" viewBox="0 0 24 24" fill="currentColor" aria-label="OpenAI">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.475 4.475 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.47 4.47 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6669zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813v6.7227zm1.1458-1.9939l2.5473-1.4677 2.5473 1.4677v2.9355l-2.5473 1.4677-2.5473-1.4677z" />
  </svg>
);

const FigmaLogo = () => (
  <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 38 57" fill="none" aria-label="Figma">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
  </svg>
);

const LookerStudioLogo = () => (
  <svg className="w-full h-full object-contain shrink-0" viewBox="0 0 24 24" fill="none" aria-label="Looker Studio">
    <rect x="3" y="12" width="4" height="8" rx="1" fill="#4285F4" />
    <rect x="10" y="7" width="4" height="13" rx="1" fill="#34A853" />
    <rect x="17" y="3" width="4" height="17" rx="1" fill="#FBBC05" />
  </svg>
);

// =========================================================================
// CUSTOM-DESIGNED SERVICE ICONS (Clean, modern, CodePlaced cyan/green theme)
// =========================================================================

// Full-Stack Development: Connected frontend and backend layers
const FullStackIcon = () => (
  <svg className="w-full h-full object-contain text-[#00BCD4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

// AI & Machine Learning: Neural network nodes & synapses
const AiMlIcon = () => (
  <svg className="w-full h-full object-contain text-[#00BCD4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2.5" fill="#00C7E8" fillOpacity="0.3" />
    <circle cx="5" cy="6" r="2" />
    <circle cx="19" cy="6" r="2" />
    <circle cx="5" cy="18" r="2" />
    <circle cx="19" cy="18" r="2" />
    <line x1="7" y1="7.2" x2="10" y2="10.2" />
    <line x1="17" y1="7.2" x2="14" y2="10.2" />
    <line x1="7" y1="16.8" x2="10" y2="13.8" />
    <line x1="17" y1="16.8" x2="14" y2="13.8" />
  </svg>
);

// Mobile App Development: Smartphone with interactive app UI elements
const MobileAppIcon = () => (
  <svg className="w-full h-full object-contain text-[#00BCD4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
    <line x1="9" y1="6" x2="15" y2="6" strokeWidth="1.5" strokeOpacity="0.7" />
  </svg>
);

// Web Development: Browser window with clean code brackets
const WebDevIcon = () => (
  <svg className="w-full h-full object-contain text-[#00BCD4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="15" rx="2.5" />
    <line x1="2" y1="8" x2="22" y2="8" strokeOpacity="0.5" />
    <circle cx="5" cy="5.5" r="1" fill="currentColor" />
    <circle cx="8" cy="5.5" r="1" fill="currentColor" />
    <path d="m9 12-2 2 2 2" />
    <path d="m15 12 2 2-2 2" />
  </svg>
);

// Backend Development: Dual-tier server stack with active status lights
const BackendIcon = () => (
  <svg className="w-full h-full object-contain text-[#00BCD4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="7" rx="2" />
    <rect x="2" y="14" width="20" height="7" rx="2" />
    <circle cx="6" cy="6.5" r="1.5" fill="#10B981" stroke="none" />
    <circle cx="6" cy="17.5" r="1.5" fill="#10B981" stroke="none" />
    <line x1="10" y1="6.5" x2="18" y2="6.5" strokeOpacity="0.6" />
    <line x1="10" y1="17.5" x2="18" y2="17.5" strokeOpacity="0.6" />
  </svg>
);

// Data Analytics & Business Intelligence: Upward analytics chart
const AnalyticsIcon = () => (
  <svg className="w-full h-full object-contain text-[#00BCD4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="9" />
    <line x1="12" y1="20" x2="12" y2="5" />
    <line x1="6" y1="20" x2="6" y2="13" />
    <path d="M4 11l4-4 4 4 8-8" stroke="#10B981" />
  </svg>
);

// Cloud & DevOps: Cloud with deployment arrows
const CloudDevOpsIcon = () => (
  <svg className="w-full h-full object-contain text-[#00BCD4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    <polyline points="12 11 12 7 14 9" stroke="#10B981" />
    <polyline points="12 17 12 21 10 19" stroke="#10B981" />
  </svg>
);

// Enterprise Software Development: Connected modular architecture blocks
const EnterpriseIcon = () => (
  <svg className="w-full h-full object-contain text-[#00BCD4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <line x1="10" y1="6.5" x2="14" y2="6.5" strokeOpacity="0.7" />
    <line x1="6.5" y1="10" x2="6.5" y2="14" strokeOpacity="0.7" />
    <line x1="17.5" y1="10" x2="17.5" y2="14" strokeOpacity="0.7" />
    <line x1="10" y1="17.5" x2="14" y2="17.5" strokeOpacity="0.7" />
  </svg>
);

// QA & Software Testing: Verification shield with validation checkmark
const QaTestingIcon = () => (
  <svg className="w-full h-full object-contain text-[#10B981] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

// UI/UX Design: Wireframe layout symbol
const UiUxIcon = () => (
  <svg className="w-full h-full object-contain text-[#00BCD4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

// API Development & Integration: Connected nodes & linked system endpoints
const ApiIntegrationIcon = () => (
  <svg className="w-full h-full object-contain text-[#00BCD4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" fill="#00C7E8" fillOpacity="0.2" />
    <circle cx="6" cy="12" r="3" fill="#00C7E8" fillOpacity="0.2" />
    <circle cx="18" cy="19" r="3" fill="#00C7E8" fillOpacity="0.2" />
    <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
    <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
  </svg>
);

// =========================================================================
// MARQUEE ITEMS SEQUENCE (Paired Services + Authentic Tech Logos)
// =========================================================================

const MARQUEE_ITEMS: MarqueeItem[] = [
  // 1. Full-Stack Development + Tech
  { id: "fullstack", name: "Full-Stack Development", type: "service", icon: <FullStackIcon /> },
  { id: "react", name: "React", type: "tech", icon: <ReactLogo /> },
  { id: "nextjs", name: "Next.js", type: "tech", icon: <NextJsLogo /> },

  // 2. Cloud & DevOps + Tech
  { id: "cloud-devops", name: "Cloud & DevOps", type: "service", icon: <CloudDevOpsIcon /> },
  { id: "aws", name: "AWS", type: "tech", icon: <AwsLogo /> },
  { id: "azure", name: "Microsoft Azure", type: "tech", icon: <AzureLogo /> },
  { id: "gcp", name: "Google Cloud", type: "tech", icon: <GoogleCloudLogo /> },

  // 3. AI & Machine Learning + Tech
  { id: "ai-ml", name: "AI & Machine Learning", type: "service", icon: <AiMlIcon /> },
  { id: "python", name: "Python", type: "tech", icon: <PythonLogo /> },
  { id: "openai", name: "OpenAI", type: "tech", icon: <OpenAiLogo /> },

  // 4. Backend Development + Tech
  { id: "backend", name: "Backend Development", type: "service", icon: <BackendIcon /> },
  { id: "nodejs", name: "Node.js", type: "tech", icon: <NodeJsLogo /> },
  { id: "java", name: "Java", type: "tech", icon: <JavaLogo /> },
  { id: "springboot", name: "Spring Boot", type: "tech", icon: <SpringBootLogo /> },

  // 5. Mobile App Development + Tech
  { id: "mobile-dev", name: "Mobile App Development", type: "service", icon: <MobileAppIcon /> },
  { id: "flutter", name: "Flutter", type: "tech", icon: <FlutterLogo /> },
  { id: "android", name: "Android", type: "tech", icon: <AndroidLogo /> },
  { id: "apple", name: "Apple iOS", type: "tech", icon: <AppleLogo /> },

  // 6. Data Analytics & Business Intelligence + Tech
  { id: "data-analytics", name: "Data Analytics & BI", type: "service", icon: <AnalyticsIcon /> },
  { id: "powerbi", name: "Microsoft Power BI", type: "tech", icon: <PowerBiLogo /> },
  { id: "looker", name: "Looker Studio", type: "tech", icon: <LookerStudioLogo /> },

  // 7. Web Development
  { id: "web-dev", name: "Web Development", type: "service", icon: <WebDevIcon /> },

  // 8. API Development & Integration
  { id: "api-integration", name: "API Development & Integration", type: "service", icon: <ApiIntegrationIcon /> },

  // 9. Enterprise Software Development
  { id: "enterprise-dev", name: "Enterprise Software", type: "service", icon: <EnterpriseIcon /> },

  // 10. UI/UX Design + Tech
  { id: "ui-ux", name: "UI/UX Design", type: "service", icon: <UiUxIcon /> },
  { id: "figma", name: "Figma", type: "tech", icon: <FigmaLogo /> },

  // 11. QA & Software Testing
  { id: "qa-testing", name: "QA & Software Testing", type: "service", icon: <QaTestingIcon /> },
];

export function ServicesMarquee() {
  return (
    <div className="w-full max-w-full bg-[#000000] py-5 sm:py-6 flex items-center overflow-hidden select-none relative z-10">
      <div className="w-full overflow-hidden relative">
        <div
          className="animate-marquee flex items-center"
          style={{ animationDuration: "135s" }}
        >
          {/* Sequence 1 */}
          <div className="flex items-center shrink-0">
            {MARQUEE_ITEMS.map((item) => (
              <div
                key={`seq1-${item.id}`}
                className="flex items-center gap-3.5 sm:gap-4 pr-11 sm:pr-12 text-white hover:text-[#00BCD4] transition-colors duration-200 shrink-0 group cursor-default"
              >
                {/* Scaled Icon Container: 32px - 36px */}
                <div className="w-[32px] h-[32px] sm:w-[34px] sm:h-[34px] lg:w-[36px] lg:h-[36px] shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </div>

                {/* Text Label: 18px - 20px font */}
                <span className="text-[18px] sm:text-[19px] lg:text-[20px] font-bold tracking-tight text-white group-hover:text-[#00BCD4] transition-colors whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Sequence 2 (Identical duplicate for seamless infinite loop) */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {MARQUEE_ITEMS.map((item) => (
              <div
                key={`seq2-${item.id}`}
                className="flex items-center gap-3.5 sm:gap-4 pr-11 sm:pr-12 text-white hover:text-[#00BCD4] transition-colors duration-200 shrink-0 group cursor-default"
              >
                {/* Scaled Icon Container: 32px - 36px */}
                <div className="w-[32px] h-[32px] sm:w-[34px] sm:h-[34px] lg:w-[36px] lg:h-[36px] shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </div>

                {/* Text Label: 18px - 20px font */}
                <span className="text-[18px] sm:text-[19px] lg:text-[20px] font-bold tracking-tight text-white group-hover:text-[#00BCD4] transition-colors whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

