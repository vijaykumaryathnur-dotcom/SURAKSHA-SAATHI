import React from 'react';
import { ExternalLink, PhoneCall, ShieldCheck, AlertCircle } from 'lucide-react';
import { TranslationDictionary } from '../data/translations';
import { IllustrationOfficialHelp } from './Illustrations';

interface OfficialResourcesProps {
  t: TranslationDictionary;
}

export const OfficialResources: React.FC<OfficialResourcesProps> = ({ t }) => {
  return (
    <section id="official-resources" className="py-10 md:py-16 bg-[#FAF8F3] border-b border-[#20231F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header with SVG Illustration */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#20231F]/15 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#174C3C] tracking-wider uppercase mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Official Channels</span>
              <span aria-hidden="true">·</span>
              <span>Government of India</span>
            </div>
            <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#174C3C] tracking-tight">
              {t.resources.sectionTitle}
            </h1>
            <p className="text-sm sm:text-base text-[#20231F]/80 leading-relaxed">
              {t.resources.sectionSubtitle}
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <IllustrationOfficialHelp className="w-full max-w-sm h-auto" />
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.resources.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-xl bg-white border border-[#20231F]/15 shadow-2xs space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#20231F]/10 mb-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#174C3C]">
                    {item.role}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#EBE7DC] text-[#174C3C]">
                    {item.priorityTag}
                  </span>
                </div>

                <h3 className="font-editorial text-xl font-bold text-[#174C3C]">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-[#20231F]/90 mt-1 font-mono">
                  {item.contact}
                </p>

                <p className="text-xs sm:text-sm text-[#20231F]/80 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#20231F]/10">
                {item.isPhone ? (
                  <a
                    href="tel:1930"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#C94B35] hover:bg-[#B33E2A] rounded-md transition-colors shadow-2xs"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Dial 1930 Helpline</span>
                  </a>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-[#174C3C] bg-[#DCE6DC]/60 hover:bg-[#DCE6DC] border border-[#174C3C]/30 rounded-md transition-colors"
                  >
                    <span>Visit Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Warning Callout Box Against Secondary Recovery Scams */}
        <div className="mt-10 p-5 sm:p-6 rounded-xl bg-[#FDF0EE] border border-[#C94B35]/30 flex flex-col sm:flex-row items-start gap-4">
          <div className="w-9 h-9 rounded-full bg-[#C94B35] text-white flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div className="space-y-1.5 text-xs sm:text-sm text-[#20231F]/90">
            <h4 className="font-bold text-[#C94B35] text-sm sm:text-base">
              Beware of Fake "Recovery Agents" on Social Media
            </h4>
            <p className="leading-relaxed">
              Never hire or pay individuals on Instagram, X, WhatsApp, or Telegram claiming to be "hackers", "cyber recovery lawyers", or "case managers" who guarantee your money back. Neither the Cyber Police, RBI, nor legitimate banks charge any upfront fee or cryptocurrency to retrieve stolen funds.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
