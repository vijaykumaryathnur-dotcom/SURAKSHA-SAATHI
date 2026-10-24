import React from 'react';
import { ArrowRight, ShieldCheck, PhoneCall, ExternalLink, Shield } from 'lucide-react';
import { TranslationDictionary } from '../data/translations';
import { IllustrationHeroSequence } from './Illustrations';

interface HeroProps {
  t: TranslationDictionary;
  onNeedHelpClick: () => void;
  onStaySafeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  t,
  onNeedHelpClick,
  onStaySafeClick,
}) => {
  return (
    <section className="pt-3 pb-8 border-b border-[#20231F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5">
        
        {/* Compact Top Emergency Advisory Strip */}
        <div className="py-2 px-3.5 sm:px-4 rounded-lg bg-[#FAF0EE] border border-[#C94B35]/25 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2 w-2 rounded-full bg-[#C94B35] animate-pulse shrink-0" />
              <div className="text-xs sm:text-sm text-[#20231F]">
                <strong className="text-[#C94B35] font-bold mr-1.5">
                  {t.hero.urgentBannerTitle}:
                </strong>
                <span>{t.hero.urgentBannerBody}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
              <a
                href="tel:1930"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-white bg-[#C94B35] hover:bg-[#B33E2A] rounded-md transition-colors shadow-2xs whitespace-nowrap"
              >
                <PhoneCall className="w-3 h-3" />
                <span>1930 Helpline</span>
              </a>
              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-[#174C3C] bg-white border border-[#174C3C]/25 hover:bg-[#DCE6DC]/40 rounded-md transition-colors whitespace-nowrap"
              >
                <span>cybercrime.gov.in</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Balanced Two-Column Desktop Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* LEFT SIDE: Core Messaging & Decisive Actions */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#DCE6DC]/60 border border-[#174C3C]/20 text-[11px] font-bold uppercase tracking-wider text-[#174C3C]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.hero.badge || 'Public Citizen Assistance'}</span>
            </div>

            <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#174C3C] tracking-tight leading-[1.18] text-balance">
              {t.hero.headline}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#20231F]/85 font-medium leading-relaxed">
              {t.hero.supporting}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onNeedHelpClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-bold text-white bg-[#174C3C] hover:bg-[#123B2E] active:scale-[0.98] transition-all rounded-md shadow-xs focus-visible:ring-2 focus-visible:ring-[#174C3C]"
              >
                <span>{t.hero.getHelpBtn}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onStaySafeClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-[#174C3C] bg-white border border-[#174C3C]/30 hover:bg-[#EBE7DC]/60 transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-[#174C3C]"
              >
                <Shield className="w-4 h-4 text-[#174C3C]" />
                <span>{t.hero.guideBtn}</span>
              </button>
            </div>

            {/* Trust Indicator */}
            <div className="pt-1 flex items-center gap-2 text-xs text-[#20231F]/70">
              <ShieldCheck className="w-3.5 h-3.5 text-[#174C3C] shrink-0" />
              <span>{t.hero.trustText}</span>
            </div>
          </div>

          {/* RIGHT SIDE: Visual Storytelling Sequence */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg lg:max-w-none shadow-2xs rounded-2xl overflow-hidden">
              <IllustrationHeroSequence className="w-full h-auto" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
