"use client";

import React from "react";
import Image from "next/image";
import {
  Search,
  Bell,
  Heart,
  Calendar,
  Clock,
  Video,
  Mic,
  VideoOff,
  Share2,
  MessageSquare,
  PhoneOff,
  PenTool,
  FileText,
  Folder,
  Users,
  ChevronRight,
  MoreVertical,
  SlidersHorizontal,
  Home,
  Compass,
  GraduationCap,
  Sparkles,
  ArrowLeft,
  Calculator,
  FlaskConical,
  BookOpen,
  Atom,
  Download,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

// =============================================================================
// TUITIONSTIME LOGO (AUTHENTIC VECTOR MARK)
// =============================================================================
export function TuitionstimeBrandLogo({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 select-none ${className}`}>
      {/* Tuitionstime Bird / Book Icon */}
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 32 32" fill="none">
        <path
          d="M6 16C6 10.477 10.477 6 16 6C21.523 6 26 10.477 26 16C26 21.523 21.523 26 16 26C10.477 26 6 21.523 6 16Z"
          fill="#FFDA55"
        />
        <path
          d="M10 20L15 14L18 17L22 11"
          stroke="#17191F"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="22" cy="11" r="2" fill="#17191F" />
      </svg>
      <div className="flex items-baseline font-bold tracking-tight text-[#17191F] text-sm">
        <span>tuitions</span>
        <span className="text-[#FFC928]">time</span>
      </div>
    </div>
  );
}

// =============================================================================
// SMARTPHONE HARDWARE CHASSIS FRAME
// =============================================================================
interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
}

export function PhoneFrame({ children, className = "", isDark = false }: PhoneFrameProps) {
  return (
    <div
      className={`relative rounded-[40px] p-[5px] bg-[#14161B] border-[3px] border-[#2C3038] shadow-[0_20px_45px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.06)] select-none overflow-hidden ${className}`}
    >
      {/* Outer Metallic Bezel Edge */}
      <div className="absolute inset-0 rounded-[37px] border border-white/10 pointer-events-none z-30" />

      {/* Screen Container */}
      <div
        className={`relative w-full h-full rounded-[36px] overflow-hidden flex flex-col ${
          isDark ? "bg-[#111317] text-white" : "bg-[#F7F8FA] text-[#17191F]"
        }`}
      >
        {/* Dynamic Island / Camera Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-40 flex items-center justify-end pr-2.5">
          <div className="w-2 h-2 rounded-full bg-[#1A1D24] border border-white/10" />
        </div>

        {/* iOS Status Bar */}
        <div
          className={`relative z-30 pt-3 px-6 pb-1 flex items-center justify-between text-[11px] font-semibold tracking-tight ${
            isDark ? "text-white" : "text-[#17191F]"
          }`}
        >
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            {/* Cellular Signal Bars */}
            <svg className="w-3.5 h-2.5" viewBox="0 0 14 10" fill="currentColor">
              <rect x="0" y="7" width="2" height="3" rx="0.5" />
              <rect x="3.5" y="5" width="2" height="5" rx="0.5" />
              <rect x="7" y="2.5" width="2" height="7.5" rx="0.5" />
              <rect x="10.5" y="0" width="2" height="10" rx="0.5" />
            </svg>
            {/* Wi-Fi */}
            <svg className="w-3.5 h-2.5" viewBox="0 0 14 10" fill="currentColor">
              <path d="M7 8C7.55 8 8 7.55 8 7C8 6.45 7.55 6 7 6C6.45 6 6 6.45 6 7C6 7.55 6.45 8 7 8ZM1.5 2.5C3.05 1 5.05 0 7 0C8.95 0 10.95 1 12.5 2.5L7 8L1.5 2.5Z" />
            </svg>
            {/* Battery */}
            <div className="w-5 h-2.5 rounded-[4px] border border-current p-[1px] flex items-center">
              <div className="w-full h-full bg-current rounded-[2px]" />
            </div>
          </div>
        </div>

        {/* Main Phone Content Canvas */}
        <div className="relative flex-1 flex flex-col overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

// =============================================================================
// SCREEN 1: TUTOR DISCOVERY (STUDENT APP)
// =============================================================================
export function PhoneTutorDiscovery() {
  return (
    <div className="flex-1 flex flex-col justify-between text-left font-sans text-[#17191F]">
      {/* App Header */}
      <div className="px-4 pt-1 pb-2.5 flex items-center justify-between">
        <TuitionstimeBrandLogo />
        <button className="relative w-7 h-7 rounded-full bg-white border border-[#E8EBF0] flex items-center justify-center text-[#30343B]">
          <Bell className="w-3.5 h-3.5" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-red-500" />
        </button>
      </div>

      {/* Scrollable Body Container */}
      <div className="px-3 space-y-2.5 overflow-hidden">
        {/* Yellow Hero Promo Banner */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#FFE066] to-[#FFCC00] p-3 overflow-hidden shadow-xs">
          <div className="max-w-[62%] space-y-1">
            <h3 className="text-xs font-black text-[#17191F] leading-tight">
              Learn Smarter <br /> Teach Better
            </h3>
            <p className="text-[8px] text-[#30343B] leading-tight">
              Find the right tutor for every subject. Learn faster with expert mentors.
            </p>
          </div>
          {/* Student Graphic */}
          <div className="absolute -bottom-1 right-1 w-20 h-24">
            <Image
              src="/images/case-studies/tuitionstime/tuitionstime-hero-person-clean.png"
              alt="Student"
              fill
              className="object-contain object-bottom"
              sizes="80px"
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#E8EBF0] shadow-xs">
          <Search className="w-3.5 h-3.5 text-[#737B89] shrink-0" />
          <span className="text-[9px] text-[#737B89] flex-1 truncate">
            Search subjects, tutors or topics...
          </span>
          <SlidersHorizontal className="w-3 h-3 text-[#30343B] shrink-0" />
        </div>

        {/* Category Filter Chips */}
        <div className="grid grid-cols-4 gap-1.5">
          <div className="py-1.5 rounded-lg bg-[#FFDA55] text-[#17191F] flex flex-col items-center justify-center gap-0.5 shadow-xs">
            <Calculator className="w-3 h-3" />
            <span className="text-[8px] font-bold">Maths</span>
          </div>
          <div className="py-1.5 rounded-lg bg-white border border-[#E8EBF0] text-[#30343B] flex flex-col items-center justify-center gap-0.5">
            <FlaskConical className="w-3 h-3 text-[#737B89]" />
            <span className="text-[8px] font-medium">Science</span>
          </div>
          <div className="py-1.5 rounded-lg bg-white border border-[#E8EBF0] text-[#30343B] flex flex-col items-center justify-center gap-0.5">
            <BookOpen className="w-3 h-3 text-[#737B89]" />
            <span className="text-[8px] font-medium">English</span>
          </div>
          <div className="py-1.5 rounded-lg bg-white border border-[#E8EBF0] text-[#30343B] flex flex-col items-center justify-center gap-0.5">
            <Atom className="w-3 h-3 text-[#737B89]" />
            <span className="text-[8px] font-medium">Physics</span>
          </div>
        </div>

        {/* Top Rated Tutors Section */}
        <div className="space-y-1.5 pt-0.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#17191F]">Top Rated Tutors</span>
            <span className="text-[8px] font-bold text-[#D97706]">View All</span>
          </div>

          {/* Tutor Card 1: Priya Sharma */}
          <div className="p-2 rounded-xl bg-white border border-[#E8EBF0] shadow-xs flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                  alt="Priya Sharma"
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-[9px] font-bold text-[#17191F] truncate">Priya Sharma</span>
                  <span className="px-1 py-[1px] rounded bg-emerald-50 text-[7px] font-bold text-emerald-600">
                    Online
                  </span>
                </div>
                <div className="text-[7.5px] text-[#737B89]">Mathematics</div>
                <div className="text-[7.5px] font-bold text-[#17191F] flex items-center gap-1">
                  <span className="text-amber-500">★ 4.8</span>
                  <span className="text-[#737B89] font-normal">(320+)</span>
                  <span className="text-[#17191F] font-bold ml-1">$30/hr</span>
                </div>
              </div>
            </div>
            <button className="px-2 py-1 rounded-full bg-[#FFDA55] hover:bg-[#FFC928] text-[8px] font-bold text-[#17191F] shrink-0">
              Book Demo
            </button>
          </div>

          {/* Tutor Card 2: Aarav Mehta */}
          <div className="p-2 rounded-xl bg-white border border-[#E8EBF0] shadow-xs flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Aarav Mehta"
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-[9px] font-bold text-[#17191F] truncate">Aarav Mehta</span>
                  <span className="px-1 py-[1px] rounded bg-emerald-50 text-[7px] font-bold text-emerald-600">
                    Online
                  </span>
                </div>
                <div className="text-[7.5px] text-[#737B89]">Science &amp; Physics</div>
                <div className="text-[7.5px] font-bold text-[#17191F] flex items-center gap-1">
                  <span className="text-amber-500">★ 4.7</span>
                  <span className="text-[#737B89] font-normal">(210+)</span>
                  <span className="text-[#17191F] font-bold ml-1">$28/hr</span>
                </div>
              </div>
            </div>
            <button className="px-2 py-1 rounded-full bg-[#FFDA55] hover:bg-[#FFC928] text-[8px] font-bold text-[#17191F] shrink-0">
              Book Demo
            </button>
          </div>

          {/* Tutor Card 3: Neha Kapoor */}
          <div className="p-2 rounded-xl bg-white border border-[#E8EBF0] shadow-xs flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80"
                  alt="Neha Kapoor"
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-[9px] font-bold text-[#17191F] truncate">Neha Kapoor</span>
                  <span className="px-1 py-[1px] rounded bg-slate-100 text-[7px] font-bold text-slate-500">
                    Offline
                  </span>
                </div>
                <div className="text-[7.5px] text-[#737B89]">English Grammar</div>
                <div className="text-[7.5px] font-bold text-[#17191F] flex items-center gap-1">
                  <span className="text-amber-500">★ 4.8</span>
                  <span className="text-[#737B89] font-normal">(180+)</span>
                  <span className="text-[#17191F] font-bold ml-1">$25/hr</span>
                </div>
              </div>
            </div>
            <button className="px-2 py-1 rounded-full bg-[#FFDA55] hover:bg-[#FFC928] text-[8px] font-bold text-[#17191F] shrink-0">
              Book Demo
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Dock */}
      <div className="mt-2 bg-white border-t border-[#E8EBF0] px-4 py-2 flex items-center justify-between">
        <div className="flex flex-col items-center gap-0.5 text-[#17191F]">
          <Home className="w-3.5 h-3.5 text-[#EAB308]" />
          <span className="text-[7px] font-bold text-[#EAB308]">Home</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#737B89]">
          <Compass className="w-3.5 h-3.5" />
          <span className="text-[7px]">Explore</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#737B89]">
          <Calendar className="w-3.5 h-3.5" />
          <span className="text-[7px]">My Classes</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#737B89]">
          <MessageSquare className="w-3.5 h-3.5" />
          <span className="text-[7px]">Messages</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#737B89]">
          <Users className="w-3.5 h-3.5" />
          <span className="text-[7px]">Profile</span>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// SCREEN 2: MY CLASSES (CLASS MANAGEMENT & SCHEDULE)
// =============================================================================
export function PhoneMyClasses() {
  return (
    <div className="flex-1 flex flex-col justify-between text-left font-sans text-[#17191F]">
      {/* App Header */}
      <div className="px-4 pt-1 pb-2 flex items-center justify-between">
        <TuitionstimeBrandLogo />
        <button className="relative w-7 h-7 rounded-full bg-white border border-[#E8EBF0] flex items-center justify-center text-[#30343B]">
          <Bell className="w-3.5 h-3.5" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-red-500" />
        </button>
      </div>

      {/* Title & Tabs */}
      <div className="px-3 space-y-2 overflow-hidden">
        <h2 className="text-sm font-black text-[#17191F]">My Classes</h2>

        {/* Segmented Filter Pills */}
        <div className="flex items-center gap-1.5">
          <span className="px-3 py-1 rounded-full bg-[#FFDA55] text-[8px] font-bold text-[#17191F] shadow-xs">
            Upcoming
          </span>
          <span className="px-3 py-1 rounded-full bg-white border border-[#E8EBF0] text-[8px] font-medium text-[#737B89]">
            Completed
          </span>
          <span className="px-3 py-1 rounded-full bg-white border border-[#E8EBF0] text-[8px] font-medium text-[#737B89]">
            Cancelled
          </span>
        </div>

        {/* Horizontal Calendar Week Strip */}
        <div className="grid grid-cols-7 gap-1 py-1">
          {[
            { day: "Mon", date: "12", active: false },
            { day: "Tue", date: "13", active: true },
            { day: "Wed", date: "14", active: false },
            { day: "Thu", date: "15", active: false },
            { day: "Fri", date: "16", active: false },
            { day: "Sat", date: "17", active: false },
            { day: "Sun", date: "18", active: false },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`py-1.5 rounded-xl flex flex-col items-center justify-center text-[7.5px] transition-colors ${
                item.active
                  ? "bg-[#FFDA55] text-[#17191F] font-black shadow-xs"
                  : "bg-white border border-[#E8EBF0] text-[#737B89] font-medium"
              }`}
            >
              <span>{item.day}</span>
              <span className="text-[9px] font-bold">{item.date}</span>
            </div>
          ))}
        </div>

        {/* Classes List */}
        <div className="space-y-2 pt-0.5">
          {/* Class Card 1: Mathematics - Algebra */}
          <div className="p-2.5 rounded-2xl bg-white border border-[#E8EBF0] shadow-xs space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="relative w-7 h-7 rounded-full overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Rahul Mehta"
                    fill
                    className="object-cover"
                    sizes="28px"
                  />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold text-[#17191F]">Mathematics - Algebra</h4>
                  <p className="text-[7.5px] text-[#737B89]">With Rahul Mehta</p>
                </div>
              </div>
              <MoreVertical className="w-3 h-3 text-[#737B89]" />
            </div>

            <div className="grid grid-cols-2 gap-1 text-[7.5px] text-[#30343B]">
              <div className="flex items-center gap-1">
                <Clock className="w-2.5 h-2.5 text-[#EAB308]" />
                <span>Today, 5:00 PM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-1 justify-end">
                <Video className="w-2.5 h-2.5 text-[#EAB308]" />
                <span>Online Class</span>
              </div>
            </div>

            <button className="w-full py-1.5 rounded-xl bg-[#FFDA55] hover:bg-[#FFC928] text-[8.5px] font-bold text-[#17191F] flex items-center justify-center gap-1.5 shadow-xs transition-colors">
              <Video className="w-3 h-3 fill-[#17191F]" />
              <span>Join Class</span>
            </button>
          </div>

          {/* Class Card 2: Science - Chemistry */}
          <div className="p-2.5 rounded-2xl bg-white border border-[#E8EBF0] shadow-xs space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="relative w-7 h-7 rounded-full overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                    alt="Priya Sharma"
                    fill
                    className="object-cover"
                    sizes="28px"
                  />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold text-[#17191F]">Science - Chemistry</h4>
                  <p className="text-[7.5px] text-[#737B89]">With Priya Sharma</p>
                </div>
              </div>
              <MoreVertical className="w-3 h-3 text-[#737B89]" />
            </div>

            <div className="grid grid-cols-2 gap-1 text-[7.5px] text-[#30343B]">
              <div className="flex items-center gap-1">
                <Clock className="w-2.5 h-2.5 text-[#EAB308]" />
                <span>Tomorrow, 4:00 PM - 5:00 PM</span>
              </div>
              <div className="flex items-center gap-1 justify-end">
                <Video className="w-2.5 h-2.5 text-[#EAB308]" />
                <span>Online Class</span>
              </div>
            </div>

            <button className="w-full py-1.5 rounded-xl bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[8.5px] font-semibold text-[#374151] flex items-center justify-center transition-colors">
              <span>Reschedule</span>
            </button>
          </div>

          {/* Class Card 3: English - Grammar */}
          <div className="p-2 rounded-2xl bg-white border border-[#E8EBF0] shadow-xs space-y-1.5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="relative w-6 h-6 rounded-full overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                    alt="Arjun Patel"
                    fill
                    className="object-cover"
                    sizes="24px"
                  />
                </div>
                <div>
                  <h4 className="text-[8.5px] font-bold text-[#17191F]">English - Grammar</h4>
                  <p className="text-[7px] text-[#737B89]">With Arjun Patel</p>
                </div>
              </div>
              <span className="text-[7px] text-[#737B89]">Wed, 14 Aug</span>
            </div>
            <button className="w-full py-1 rounded-lg bg-[#FFDA55] text-[7.5px] font-bold text-[#17191F]">
              Join Class
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Dock */}
      <div className="mt-2 bg-white border-t border-[#E8EBF0] px-4 py-2 flex items-center justify-between">
        <div className="flex flex-col items-center gap-0.5 text-[#737B89]">
          <Home className="w-3.5 h-3.5" />
          <span className="text-[7px]">Home</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#737B89]">
          <Compass className="w-3.5 h-3.5" />
          <span className="text-[7px]">Explore</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#17191F]">
          <Calendar className="w-3.5 h-3.5 text-[#EAB308]" />
          <span className="text-[7px] font-bold text-[#EAB308]">My Classes</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#737B89]">
          <MessageSquare className="w-3.5 h-3.5" />
          <span className="text-[7px]">Messages</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#737B89]">
          <Users className="w-3.5 h-3.5" />
          <span className="text-[7px]">Profile</span>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// SCREEN 3: LEARNING RESOURCES & STUDENT PROGRESS (NO AI FACES / 100% VECTOR UI)
// =============================================================================
export function PhoneStudentProgress() {
  return (
    <div className="flex-1 flex flex-col justify-between text-left font-sans bg-[#F7F8FA] overflow-hidden select-none">
      <div className="flex-1 flex flex-col justify-between px-3 pt-1 space-y-2">
        {/* Top App Bar with Tuitionstime Branding */}
        <div className="flex items-center justify-between pt-0.5">
          <TuitionstimeBrandLogo className="h-4" />
          <div className="relative p-1.5 rounded-full bg-white border border-[#E8EBF0] shadow-xs">
            <Bell className="w-3.5 h-3.5 text-[#17191F]" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full" />
          </div>
        </div>

        {/* Screen Title & Period Pill */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xs font-black tracking-tight text-[#17191F]">
              Learning Progress
            </h2>
            <p className="text-[7.5px] text-[#737B89]">
              Track milestones &amp; study resources
            </p>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#FFDA55]/20 text-[#17191F] border border-[#FFDA55]/50 text-[7px] font-bold">
            This Week
          </span>
        </div>

        {/* Overall Progress Metric Banner Card */}
        <div className="p-2.5 rounded-2xl bg-white border border-[#E8EBF0] shadow-xs space-y-1.5">
          <div className="flex items-center justify-between text-[8px]">
            <span className="font-bold text-[#17191F] flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-[#FFC928]" />
              Weekly Goal Completed
            </span>
            <span className="font-mono font-bold text-[#17191F]">78%</span>
          </div>
          {/* Progress Bar in Tuitionstime Yellow */}
          <div className="w-full h-1.5 rounded-full bg-[#F0F2F5] overflow-hidden">
            <div className="h-full bg-[#FFC928] rounded-full" style={{ width: "78%" }} />
          </div>
          <div className="flex items-center justify-between pt-0.5 text-[7px] text-[#737B89]">
            <span>14.5 / 18 hrs studied</span>
            <span className="text-[#16A34A] font-semibold flex items-center gap-0.5">
              <CheckCircle2 className="w-2.5 h-2.5" /> 94% Attendance
            </span>
          </div>
        </div>

        {/* Subject-Wise Progress Modules */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[8px] font-bold text-[#17191F]">
            <span>Active Subjects</span>
            <span className="text-[#737B89] font-normal text-[7px]">3 Enrolled</span>
          </div>

          {/* Module 1: Mathematics */}
          <div className="p-2 rounded-xl bg-white border border-[#E8EBF0] shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#FFDA55]/25 border border-[#FFDA55]/40 flex items-center justify-center text-[#17191F] shrink-0">
                <Calculator className="w-3 h-3" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[8px] font-bold text-[#17191F] leading-tight">
                  Mathematics - Algebra
                </div>
                <div className="text-[6.5px] text-[#737B89]">
                  12 of 14 lessons completed
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[8px] font-mono font-black text-[#17191F]">85%</span>
            </div>
          </div>

          {/* Module 2: Science */}
          <div className="p-2 rounded-xl bg-white border border-[#E8EBF0] shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7] shrink-0">
                <FlaskConical className="w-3 h-3" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[8px] font-bold text-[#17191F] leading-tight">
                  Science - Chemistry
                </div>
                <div className="text-[6.5px] text-[#737B89]">
                  8 of 12 lessons completed
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[8px] font-mono font-black text-[#17191F]">68%</span>
            </div>
          </div>
        </div>

        {/* Study Materials & Revision Notes Card */}
        <div className="space-y-1">
          <div className="text-[8px] font-bold text-[#17191F] flex items-center justify-between">
            <span>Study Resources &amp; Notes</span>
            <span className="text-[7px] text-[#0284C7] font-semibold">View All</span>
          </div>

          <div className="p-1.5 rounded-xl bg-white border border-[#E8EBF0] flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-[#FFFBEB] border border-[#FEF3C7] flex items-center justify-center text-[#D97706] shrink-0">
                <FileText className="w-2.5 h-2.5" />
              </div>
              <div>
                <div className="text-[7.5px] font-bold text-[#17191F] leading-tight">
                  Algebra Formula Sheet.pdf
                </div>
                <div className="text-[6px] text-[#737B89]">2.4 MB • Updated yesterday</div>
              </div>
            </div>
            <div className="px-1.5 py-0.5 rounded bg-[#F7F8FA] border border-[#E8EBF0] text-[6.5px] font-bold text-[#17191F] flex items-center gap-0.5">
              <Download className="w-2 h-2" />
              Get
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Dock (Matching Phones 1 & 2) */}
      <div className="mt-2 bg-white border-t border-[#E8EBF0] px-4 py-2 flex items-center justify-between">
        <div className="flex flex-col items-center gap-0.5 text-[#737B89]">
          <Home className="w-3.5 h-3.5" />
          <span className="text-[7px]">Home</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#737B89]">
          <Compass className="w-3.5 h-3.5" />
          <span className="text-[7px]">Explore</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#737B89]">
          <Calendar className="w-3.5 h-3.5" />
          <span className="text-[7px]">My Classes</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#17191F]">
          <BookOpen className="w-3.5 h-3.5 text-[#EAB308]" />
          <span className="text-[7px] font-bold text-[#EAB308]">Resources</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#737B89]">
          <Users className="w-3.5 h-3.5" />
          <span className="text-[7px]">Profile</span>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// COMPOSITE THREE-PHONE SHOWCASE (STANDS SIDE-BY-SIDE IN PURE HARMONY)
// =============================================================================
export function TuitionstimeThreePhonesShowcase({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-[780px] xl:max-w-[820px] mx-auto select-none ${className}`}>
      {/* Grid of 3 Phones in a clean horizontal row, equal height/width, bottom aligned, no glow */}
      <div className="grid grid-cols-3 gap-3.5 sm:gap-5 lg:gap-6 items-end">
        {/* Phone 1: Tutor Discovery (Left) */}
        <div className="relative aspect-[9/18.5] w-full">
          <PhoneFrame className="w-full h-full">
            <PhoneTutorDiscovery />
          </PhoneFrame>
        </div>

        {/* Phone 2: My Classes (Center) */}
        <div className="relative aspect-[9/18.5] w-full">
          <PhoneFrame className="w-full h-full">
            <PhoneMyClasses />
          </PhoneFrame>
        </div>

        {/* Phone 3: Student Progress & Resources (Right) */}
        <div className="relative aspect-[9/18.5] w-full">
          <PhoneFrame className="w-full h-full">
            <PhoneStudentProgress />
          </PhoneFrame>
        </div>
      </div>
    </div>
  );
}
