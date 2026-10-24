import React from 'react';
import { HelpCircle, CheckSquare, Building2, PhoneCall, ArrowRight } from 'lucide-react';
import { TranslationDictionary } from '../data/translations';

interface HowItWorksSectionProps {
  t: TranslationDictionary;
  onGetHelpClick: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ t, onGetHelpClick }) => {
  return (
    <section className="py-8 border-b border-[#20231F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#174C3C]">
            Three Simple Steps
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#174C3C]">
            How Suraksha Saathi Helps You
          </h2>
          <p className="text-sm sm:text-base text-[#20231F]/75">
            Designed for clear, practical action when every second counts.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1 */}
          <div className="p-6 rounded-xl bg-white border border-[#20231F]/15 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF8F3] border border-[#174C3C]/20 flex items-center justify-center text-[#174C3C]">
              <HelpCircle className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-[#174C3C] uppercase tracking-wider">
                Step 1
              </span>
              <h3 className="text-base font-bold text-[#174C3C] mt-0.5">
                {t.howItWorks.step1Title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#20231F]/80 leading-relaxed">
              {t.howItWorks.step1Desc}
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-xl bg-white border border-[#20231F]/15 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF8F3] border border-[#174C3C]/20 flex items-center justify-center text-[#174C3C]">
              <CheckSquare className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-[#174C3C] uppercase tracking-wider">
                Step 2
              </span>
              <h3 className="text-base font-bold text-[#174C3C] mt-0.5">
                {t.howItWorks.step2Title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#20231F]/80 leading-relaxed">
              {t.howItWorks.step2Desc}
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-xl bg-white border border-[#20231F]/15 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF8F3] border border-[#174C3C]/20 flex items-center justify-center text-[#174C3C]">
              <Building2 className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold text-[#174C3C] uppercase tracking-wider">
                Step 3
              </span>
              <h3 className="text-base font-bold text-[#174C3C] mt-0.5">
                {t.howItWorks.step3Title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#20231F]/80 leading-relaxed">
              {t.howItWorks.step3Desc}
            </p>
          </div>

        </div>

        {/* Rapid action reminder */}
        <div className="p-5 sm:p-6 rounded-xl bg-[#FAF8F3] border border-[#174C3C]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#174C3C]">
              Why immediate action is critical
            </h4>
            <p className="text-xs text-[#20231F]/80 max-w-xl">
              Banks and payment providers have internal freeze systems in the early golden window. Quick action limits damage, though no platform can guarantee full recovery.
            </p>
          </div>
          <button
            onClick={onGetHelpClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#174C3C] hover:bg-[#123B2E] rounded-md transition-colors shadow-2xs whitespace-nowrap shrink-0"
          >
            <span>Start Response Plan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
