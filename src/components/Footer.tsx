import React, { useState } from 'react';
import { Shield, Lock, ExternalLink, HelpCircle } from 'lucide-react';
import { TranslationDictionary } from '../data/translations';

interface FooterProps {
  t: TranslationDictionary;
  onNavigateSection: (sectionId: string) => void;
  onOpenHelp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onNavigateSection, onOpenHelp }) => {
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);

  const openAbout = () => {
    setModalContent({
      title: 'About Suraksha Saathi',
      body: 'Suraksha Saathi is an independent, citizen-focused first-response concept developed for demonstration in national innovation challenges. Its mission is to reduce citizen panic during the critical first hours following suspected cyber fraud by presenting calm, prioritized, step-by-step guidance, facilitating family protection messages, and structuring evidence for official government portals.',
    });
  };

  const openPrivacy = () => {
    setModalContent({
      title: 'Privacy & Data Commitment',
      body: 'Suraksha Saathi operates on a strict zero-telemetry, client-side model. No user accounts are created, no cookies track you, and no personal credentials or financial details are ever transmitted to or stored on any remote server. All incident summaries are generated purely in browser memory.',
    });
  };

  const openAccessibility = () => {
    setModalContent({
      title: 'Accessibility Statement',
      body: 'Designed in compliance with WCAG AA guidelines. Features high-contrast typography (Fraunces and Plus Jakarta Sans), keyboard-accessible focus rings, multi-language support (English, Hindi, Telugu), plain language explanations, and browser speech synthesis read-aloud capabilities.',
    });
  };

  return (
    <footer className="bg-[#FAF8F3] border-t border-[#20231F]/15 pt-14 pb-12 text-[#20231F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-[#174C3C]">
              <div className="w-7 h-7 rounded-md bg-[#174C3C] text-white flex items-center justify-center">
                <Shield className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="font-editorial text-xl font-bold tracking-tight">
                {t.brandName}
              </span>
            </div>
            <p className="text-sm font-medium text-[#174C3C]">
              {t.tagline}
            </p>
            <p className="text-xs text-[#20231F]/70 leading-relaxed max-w-sm">
              A citizen-focused cyber fraud first response platform that guides people through the crucial first steps after a suspected online scam.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#174C3C]">
              Platform Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-[#20231F]/80">
              <li>
                <button
                  onClick={() => onNavigateSection('how-it-works')}
                  className="hover:text-[#174C3C] hover:underline transition-colors"
                >
                  {t.nav.howItWorks}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('timeline')}
                  className="hover:text-[#174C3C] hover:underline transition-colors"
                >
                  {t.nav.timeline}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('reality-check')}
                  className="hover:text-[#174C3C] hover:underline transition-colors"
                >
                  {t.nav.realityCheck}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('family-alert')}
                  className="hover:text-[#174C3C] hover:underline transition-colors"
                >
                  {t.nav.familyAlert}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('evidence-assistant')}
                  className="hover:text-[#174C3C] hover:underline transition-colors"
                >
                  {t.nav.evidence}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Governance */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#174C3C]">
              Policies & Verification
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#20231F]/80">
              <button
                onClick={openAbout}
                className="hover:text-[#174C3C] hover:underline transition-colors"
              >
                About Platform
              </button>
              <button
                onClick={openPrivacy}
                className="hover:text-[#174C3C] hover:underline transition-colors"
              >
                Zero-Server Privacy
              </button>
              <button
                onClick={openAccessibility}
                className="hover:text-[#174C3C] hover:underline transition-colors"
              >
                Accessibility (WCAG AA)
              </button>
              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#174C3C] hover:underline transition-colors"
              >
                <span>cybercrime.gov.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="mt-3 p-3 rounded-lg bg-[#EBE7DC]/50 border border-[#20231F]/10 text-[11px] text-[#20231F]/80 flex items-start gap-2">
              <Lock className="w-3.5 h-3.5 text-[#174C3C] shrink-0 mt-0.5" />
              <span>
                Confidentiality: No cookies, tracking scripts, or external telemetry are present on this site.
              </span>
            </div>
          </div>

        </div>

        {/* Clear Mandatory Independent Prototype Disclaimer Banner */}
        <div className="p-4 sm:p-5 rounded-lg bg-white border border-[#20231F]/15 text-xs text-[#20231F]/75 space-y-1.5 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-[#174C3C] text-xs uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-[#174C3C]" />
            <span>Independent Citizen Safety Prototype Disclaimer</span>
          </div>
          <p className="leading-relaxed">
            {t.footer.independentNotice}
          </p>
          <p className="leading-relaxed text-[#20231F]/65">
            {t.footer.prototypeDisclaimer}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-[#20231F]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#20231F]/60 gap-3">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-3">
            <span>National Cyber Helpline: <strong>1930</strong></span>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenHelp}
              className="text-[#174C3C] font-semibold hover:underline"
            >
              First Response Guide
            </button>
          </div>
        </div>

      </div>

      {/* Information Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl p-6 sm:p-8 max-w-lg w-full border border-[#20231F]/20 shadow-2xl space-y-4">
            <h3 className="font-editorial text-xl font-bold text-[#174C3C]">
              {modalContent.title}
            </h3>
            <p className="text-sm text-[#20231F]/85 leading-relaxed font-normal">
              {modalContent.body}
            </p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setModalContent(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#174C3C] rounded hover:bg-[#123B2E] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
