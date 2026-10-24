import React from 'react';
import { ArrowRight, CreditCard, KeyRound, AlertTriangle } from 'lucide-react';
import { TranslationDictionary } from '../data/translations';
import {
  IllustrationMoneyLost,
  IllustrationAccountSecurity,
  IllustrationSuspiciousCall,
} from './Illustrations';

interface ImmediateActionStripProps {
  t: TranslationDictionary;
  onSelectAction: (scenarioId: string) => void;
}

export const ImmediateActionStrip: React.FC<ImmediateActionStripProps> = ({
  t,
  onSelectAction,
}) => {
  return (
    <section id="incident-chooser" className="py-6 sm:py-8 bg-[#FAF8F3] border-b border-[#20231F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1 pb-1 border-b border-[#20231F]/10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#174C3C]">
              Incident Triage
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#174C3C] mt-0.5">
              {t.immediateStrip.heading}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#20231F]/75 max-w-md">
            {t.immediateStrip.subheading}
          </p>
        </div>

        {/* 3 Visually Distinct, Illustrated Choices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* CHOICE 1: MONEY LOST */}
          <button
            type="button"
            onClick={() => onSelectAction('money_sent')}
            className="group cursor-pointer rounded-xl bg-white border-2 border-[#20231F]/10 hover:border-[#C94B35] hover:shadow-md transition-all text-left flex flex-col justify-between overflow-hidden focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C94B35]"
          >
            {/* Illustration Banner */}
            <div className="w-full bg-[#FAF8F3] border-b border-[#20231F]/10 p-3 flex items-center justify-center">
              <IllustrationMoneyLost className="w-full h-32 sm:h-36 object-contain" />
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 w-full">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#C94B35] uppercase tracking-wider">
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Emergency Priority</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-[#FAF0EE] text-[#C94B35]">
                    1930
                  </span>
                </div>

                <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#174C3C] group-hover:text-[#C94B35] transition-colors leading-snug">
                  {t.immediateStrip.action1Title}
                </h3>

                <p className="text-xs sm:text-sm text-[#20231F]/80 leading-relaxed font-medium">
                  {t.immediateStrip.action1Desc}
                </p>
              </div>

              <div className="pt-2 border-t border-[#20231F]/10 flex items-center justify-between text-xs font-bold text-[#C94B35]">
                <span>Start Immediate Steps</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>

          {/* CHOICE 2: ACCOUNT AT RISK */}
          <button
            type="button"
            onClick={() => onSelectAction('credential_leak')}
            className="group cursor-pointer rounded-xl bg-white border-2 border-[#20231F]/10 hover:border-[#174C3C] hover:shadow-md transition-all text-left flex flex-col justify-between overflow-hidden focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#174C3C]"
          >
            {/* Illustration Banner */}
            <div className="w-full bg-[#FAF8F3] border-b border-[#20231F]/10 p-3 flex items-center justify-center">
              <IllustrationAccountSecurity className="w-full h-32 sm:h-36 object-contain" />
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 w-full">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#174C3C] uppercase tracking-wider">
                    <KeyRound className="w-3.5 h-3.5" />
                    <span>Access Security</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-[#DCE6DC]/60 text-[#174C3C]">
                    Freeze & Reset
                  </span>
                </div>

                <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#174C3C] group-hover:text-[#123B2E] transition-colors leading-snug">
                  {t.immediateStrip.action2Title}
                </h3>

                <p className="text-xs sm:text-sm text-[#20231F]/80 leading-relaxed font-medium">
                  {t.immediateStrip.action2Desc}
                </p>
              </div>

              <div className="pt-2 border-t border-[#20231F]/10 flex items-center justify-between text-xs font-bold text-[#174C3C]">
                <span>Secure Accounts Now</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>

          {/* CHOICE 3: SUSPICIOUS CONTACT */}
          <button
            type="button"
            onClick={() => onSelectAction('suspicious_message')}
            className="group cursor-pointer rounded-xl bg-white border-2 border-[#20231F]/10 hover:border-[#A66E14] hover:shadow-md transition-all text-left flex flex-col justify-between overflow-hidden focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#A66E14]"
          >
            {/* Illustration Banner */}
            <div className="w-full bg-[#FAF8F3] border-b border-[#20231F]/10 p-3 flex items-center justify-center">
              <IllustrationSuspiciousCall className="w-full h-32 sm:h-36 object-contain" />
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 w-full">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#A66E14] uppercase tracking-wider">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Threat Defense</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-[#FAF4E6] text-[#A66E14]">
                    Verify & Block
                  </span>
                </div>

                <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#174C3C] group-hover:text-[#A66E14] transition-colors leading-snug">
                  {t.immediateStrip.action3Title}
                </h3>

                <p className="text-xs sm:text-sm text-[#20231F]/80 leading-relaxed font-medium">
                  {t.immediateStrip.action3Desc}
                </p>
              </div>

              <div className="pt-2 border-t border-[#20231F]/10 flex items-center justify-between text-xs font-bold text-[#A66E14]">
                <span>Verify & Report Link/Call</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>

        </div>

      </div>
    </section>
  );
};
