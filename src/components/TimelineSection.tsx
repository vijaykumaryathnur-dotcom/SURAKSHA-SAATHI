import React, { useState } from 'react';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { TranslationDictionary } from '../data/translations';
import { IllustrationFirstHour } from './Illustrations';

interface TimelineSectionProps {
  t: TranslationDictionary;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ t }) => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      badge: t.timeline.stage1Badge,
      title: t.timeline.stage1Title,
      desc: t.timeline.stage1Desc,
      points: t.timeline.stage1Points,
      accent: 'border-[#C94B35] text-[#C94B35]',
    },
    {
      badge: t.timeline.stage2Badge,
      title: t.timeline.stage2Title,
      desc: t.timeline.stage2Desc,
      points: t.timeline.stage2Points,
      accent: 'border-[#174C3C] text-[#174C3C]',
    },
    {
      badge: t.timeline.stage3Badge,
      title: t.timeline.stage3Title,
      desc: t.timeline.stage3Desc,
      points: t.timeline.stage3Points,
      accent: 'border-[#2E7D32] text-[#2E7D32]',
    },
  ];

  return (
    <section id="timeline" className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Visual Header Banner with SVG Illustration */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#20231F]/15 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#174C3C] tracking-wider uppercase">
              <Clock className="w-3.5 h-3.5" />
              <span>The Critical Golden Window</span>
            </div>
            <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#174C3C]">
              {t.timeline.sectionTitle}
            </h1>
            <p className="text-sm sm:text-base text-[#20231F]/80 leading-relaxed">
              {t.timeline.sectionSubtitle}
            </p>
            
            {/* Quick Stage Visual Badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-[#FAF0EE] border border-[#C94B35]/25 flex items-center gap-2 text-xs">
                <span className="font-bold text-[#C94B35]">0 - 15 Mins:</span>
                <span className="text-[#20231F]/80">Freeze Bank & Cards</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#174C3C]/25 flex items-center gap-2 text-xs">
                <span className="font-bold text-[#174C3C]">15 - 60 Mins:</span>
                <span className="text-[#20231F]/80">Dial 1930 Helpline</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#DCE6DC]/40 border border-[#2E7D32]/25 flex items-center gap-2 text-xs">
                <span className="font-bold text-[#2E7D32]">Day 1 Onward:</span>
                <span className="text-[#20231F]/80">Preserve Dossier</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <IllustrationFirstHour className="w-full max-w-sm h-auto" />
          </div>
        </div>

        {/* Interactive Timeline Tabs for Mobile / Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((st, idx) => {
            const isSelected = activeStage === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-6 sm:p-7 rounded-xl transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-white border-[#174C3C] shadow-sm ring-1 ring-[#174C3C]/20'
                    : 'bg-white/70 border-[#20231F]/15 hover:border-[#174C3C]/50 hover:bg-white'
                }`}
              >
                {/* Stage Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#20231F]/10 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#174C3C]">
                    {st.badge}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#EBE7DC] text-[#20231F]/70">
                    {idx === 0 ? '0-15 Min' : idx === 1 ? '15-60 Min' : 'Day 1+'}
                  </span>
                </div>

                <h3 className="font-editorial text-xl font-bold text-[#174C3C]">
                  {st.title}
                </h3>
                
                <p className="text-sm text-[#20231F]/80 mt-1.5 font-medium leading-relaxed">
                  {st.desc}
                </p>

                {/* Points List */}
                <div className="mt-5 space-y-2.5">
                  {st.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#20231F]/85 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#174C3C] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Disclaimer Footer */}
        <div className="mt-8 p-4 rounded-lg bg-[#EBE7DC]/60 border border-[#20231F]/10 flex items-start gap-3 text-xs text-[#20231F]/80">
          <AlertCircle className="w-4 h-4 text-[#C94B35] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {t.timeline.disclaimer}
          </p>
        </div>

      </div>
    </section>
  );
};
