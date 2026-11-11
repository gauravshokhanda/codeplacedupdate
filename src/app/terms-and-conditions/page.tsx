import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | CodePlaced",
  description:
    "Review the terms and conditions governing the use of CodePlaced's website and services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="relative min-h-screen font-sans bg-[#FFFFFF] text-neutral-900 selection:bg-[#00BCD4] selection:text-black">
      {/* ===================================================================== */}
      {/* HERO HEADER — PURE BLACK (#000000) WITH CYAN ACCENT                   */}
      {/* ===================================================================== */}
      <section className="relative bg-[#000000] border-b border-[#222222] text-white pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div
          className="absolute top-1/4 right-1/3 w-[480px] h-[480px] pointer-events-none opacity-20 -z-0"
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
            <Scale className="w-3.5 h-3.5 text-[#00BCD4]" />
            <span>TERMS OF SERVICE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Terms & Conditions
          </h1>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* MAIN TERMS CONTENT                                                    */}
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
              Welcome to CodePlaced. By accessing or using our website (<span className="font-mono text-neutral-800">codeplaced.com</span>), you agree to comply with and be bound by these Terms & Conditions and our Privacy Policy.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              If you do not agree with any part of these terms, please discontinue using this website.
            </p>
          </article>

          {/* Section 2: Website Usage */}
          <article className="space-y-3.5 border-b border-[#E5E7EB] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">02.</span>
              <span>Website Usage</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              The content on this website is provided for general informational purposes to present CodePlaced’s engineering, AI, and consulting capabilities.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              You agree to use this website in accordance with all applicable laws and regulations, and in a manner that does not infringe on the rights of or restrict the use of this website by others.
            </p>
          </article>

          {/* Section 3: Services & Information */}
          <article className="space-y-3.5 border-b border-[#E5E7EB] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">03.</span>
              <span>Services & Information</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Descriptions of services, case studies, technologies, and capabilities displayed on this website are for demonstration and informational purposes only.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Website content does not constitute a binding commercial offer or formal agreement. Specific engineering engagements, deliverables, warranties, and service levels are established exclusively through individually signed client agreements.
            </p>
          </article>

          {/* Section 4: Intellectual Property */}
          <article className="space-y-3.5 border-b border-[#E5E7EB] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">04.</span>
              <span>Intellectual Property</span>
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-neutral-600">
              <p>
                <strong className="text-neutral-900">Website Content:</strong> All text, branding, logos, graphics, and design elements on this website are the property of CodePlaced and are protected by applicable intellectual property and copyright laws. You may not copy, reproduce, or distribute website content without prior written consent.
              </p>
              <p>
                <strong className="text-neutral-900">Client Deliverables:</strong> For custom software engineering and consulting engagements, intellectual property ownership is governed by the specific client contract. CodePlaced delivers custom solutions where clients retain full ownership of their proprietary code, models, and deliverables as defined in their executed agreement.
              </p>
              <p>
                <strong className="text-neutral-900">Trademarks:</strong> Third-party company names, product names, logos, and trademarks referenced on this website belong to their respective owners.
              </p>
            </div>
          </article>

          {/* Section 5: Acceptable Use */}
          <article className="space-y-3.5 border-b border-[#E5E7EB] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">05.</span>
              <span>Acceptable Use</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              When accessing our website or using our contact forms, you agree not to:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0 mt-2.5" />
                <span>Use automated tools, bots, or scrapers to extract data or content without prior written authorization.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0 mt-2.5" />
                <span>Attempt to compromise the security, availability, or proper functioning of the website or connected networks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0 mt-2.5" />
                <span>Transmit unsolicited messages, spam, or malicious code through our inquiry forms.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0 mt-2.5" />
                <span>Misrepresent your identity or company affiliation when communicating with us.</span>
              </li>
            </ul>
          </article>

          {/* Section 6: Third-Party Links */}
          <article className="space-y-3.5 border-b border-[#E5E7EB] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">06.</span>
              <span>Third-Party Links</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Our website may contain links to external third-party websites (such as LinkedIn, GitHub, or partner platforms) for reference and convenience.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              CodePlaced does not control and is not responsible for the content, privacy practices, or availability of third-party websites. Visiting external links is done at your own discretion.
            </p>
          </article>

          {/* Section 7: Limitation of Liability */}
          <article className="space-y-3.5 border-b border-[#E5E7EB] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">07.</span>
              <span>Limitation of Liability</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              This website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              To the fullest extent permitted by applicable law, CodePlaced and its team shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to access this website, or reliance on information presented here.
            </p>
          </article>

          {/* Section 8: Changes to Terms */}
          <article className="space-y-3.5 border-b border-[#E5E7EB] pb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">08.</span>
              <span>Changes to Terms</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              We may revise these Terms & Conditions from time to time to reflect updates in our services or legal obligations.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Any revisions will be published directly to this page. Your continued use of the website after updates are posted constitutes your acceptance of the revised terms.
            </p>
          </article>

          {/* Section 9: Contact Information */}
          <article className="space-y-4 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-center gap-2.5">
              <span className="text-[#00BCD4] font-mono text-base">09.</span>
              <span>Contact Information</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              If you have any questions or feedback regarding these Terms & Conditions, please contact us:
            </p>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#0B0B0B] text-white border border-[#262626] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#00BCD4]">
                <Mail className="w-4 h-4" />
                <span>CodePlaced Contact Channels</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-300">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-neutral-400 text-xs">General & Legal Inquiries</div>
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
                <span>Looking to discuss an engineering engagement?</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[#00BCD4] hover:underline font-bold"
                >
                  <span>Get in Touch</span>
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
