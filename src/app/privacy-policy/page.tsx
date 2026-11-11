import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | CodePlaced",
  description:
    "Learn how CodePlaced collects, uses, and protects your information across our website and services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen font-sans bg-[#FFFFFF] text-neutral-900 selection:bg-[#00BCD4] selection:text-black">
      {/* ===================================================================== */}
      {/* HERO HEADER — PURE BLACK (#000000) WITH CYAN ACCENT                   */}
      {/* ===================================================================== */}
      <section className="relative bg-[#000000] border-b border-[#222222] text-white pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div
          className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none opacity-20 -z-0"
          style={{
            background: "radial-gradient(circle, rgba(0,188,212,0.25) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Navigation Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-400 hover:text-[#00BCD4] transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          {/* Legal Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase bg-[#111111] text-[#00BCD4] border border-[#262626] mb-4">
            <Shield className="w-3.5 h-3.5 text-[#00BCD4]" />
            <span>DATA PRIVACY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* MAIN POLICY CONTENT                                                   */}
      {/* ===================================================================== */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          {/* Section 1: Introduction */}
          <article className="space-y-3.5 border-b border-[#E5E7EB] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">01.</span>
              <span>Introduction</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              CodePlaced (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) provides technology consulting, software engineering, AI, and data solutions. We respect your privacy and are committed to safeguarding the personal information you share with us through our website (<span className="font-mono text-neutral-800">codeplaced.com</span>).
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              This Privacy Policy explains how we collect, use, and protect your information when you browse our website or communicate with our team.
            </p>
          </article>

          {/* Section 2: Information We Collect */}
          <article className="space-y-3.5 border-b border-[#E5E7EB] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">02.</span>
              <span>Information We Collect</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              We collect information that you voluntarily provide to us, as well as standard technical data collected during your visit:
            </p>
            <ul className="space-y-2.5 pt-1 text-sm sm:text-base text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0 mt-2.5" />
                <span>
                  <strong className="text-neutral-900">Contact & Inquiry Information:</strong> When you submit a project inquiry, request a strategy call, or reach out to us, we collect your name, business email address, company name, phone number, and any project details or notes you choose to share.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0 mt-2.5" />
                <span>
                  <strong className="text-neutral-900">Technical & Browsing Data:</strong> When you access our website, standard technical information such as your IP address, browser type, operating system, and pages viewed may be collected to help ensure site performance and security.
                </span>
              </li>
            </ul>
          </article>

          {/* Section 3: How We Use Information */}
          <article className="space-y-3.5 border-b border-[#E5E7EB] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">03.</span>
              <span>How We Use Information</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              We use the collected information for standard business, communication, and operational purposes:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0 mt-2.5" />
                <span>Responding to your inquiries and scheduling discussions regarding our services.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0 mt-2.5" />
                <span>Understanding your project requirements to provide relevant engineering proposals.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0 mt-2.5" />
                <span>Maintaining, securing, and optimizing our website and systems.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0 mt-2.5" />
                <span>Complying with applicable legal and statutory requirements.</span>
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-neutral-500 pt-1">
              CodePlaced does not sell, rent, or trade your personal information to third parties.
            </p>
          </article>

          {/* Section 4: Data Storage and Security */}
          <article className="space-y-3.5 border-b border-[#E5E7EB] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">04.</span>
              <span>Data Storage and Security</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              We apply appropriate technical and organizational safeguards to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Website communication is encrypted in transit using industry-standard HTTPS (TLS). Access to submitted contact information is restricted to authorized team members who need the data to respond to your inquiry or provide requested services.
            </p>
          </article>

          {/* Section 5: Cookies and Analytics */}
          <article className="space-y-3.5 border-b border-[#E5E7EB] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">05.</span>
              <span>Cookies and Analytics</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Our website uses cookies and analytics tools to understand how visitors interact with our content and to improve overall site experience. Cookies are small files placed on your device that help us remember preferences and evaluate traffic trends.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              You can adjust your browser settings to refuse or delete cookies at any time. Refusing cookies will not prevent you from browsing our website.
            </p>
          </article>

          {/* Section 6: Third-Party Services */}
          <article className="space-y-3.5 border-b border-[#E5E7EB] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">06.</span>
              <span>Third-Party Services</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              We may use trusted third-party service providers to support our operations, such as cloud hosting platforms, email communication tools, and website analytics.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              These service providers only have access to information necessary to perform their specific services on our behalf and are required to maintain the confidentiality and security of that information.
            </p>
          </article>

          {/* Section 7: Data Retention */}
          <article className="space-y-3.5 border-b border-[#E5E7EB] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">07.</span>
              <span>Data Retention</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, respond to your inquiries, or comply with applicable legal obligations.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              When personal information is no longer needed, it is deleted or anonymized securely.
            </p>
          </article>

          {/* Section 8: Your Data Rights */}
          <article className="space-y-3.5 border-b border-[#E5E7EB] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">08.</span>
              <span>Your Data Rights</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Depending on your location, you may have rights regarding your personal information, including the right to request access to the data we hold about you, request corrections to inaccurate information, or request the deletion of your personal details.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              To exercise any of these rights, please contact us by email at <a href="mailto:contact@codeplaced.com" className="font-bold text-[#00AFC8] hover:underline">contact@codeplaced.com</a>.
            </p>
          </article>

          {/* Section 9: Contact Information */}
          <article className="space-y-4 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">09.</span>
              <span>Contact Information</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              If you have any questions, feedback, or requests regarding this Privacy Policy or our data practices, please contact our team:
            </p>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#0B0B0B] text-white border border-[#262626] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#00BCD4]">
                <Mail className="w-4 h-4" />
                <span>CodePlaced Contact Channels</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-300">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-neutral-400 text-xs">General & Privacy Inquiries</div>
                  <a href="mailto:contact@codeplaced.com" className="text-white hover:text-[#00BCD4] font-medium block">
                    contact@codeplaced.com
                  </a>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-neutral-400 text-xs">Direct Support & Strategy</div>
                  <a href="mailto:hello@codeplaced.com" className="text-white hover:text-[#00BCD4] font-medium block">
                    hello@codeplaced.com
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-400">
                <span>Have a project or technical question?</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[#00BCD4] hover:underline font-bold"
                >
                  <span>Submit an Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
