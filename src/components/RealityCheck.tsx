import React, { useState } from 'react';
import { ShieldAlert, Check, RotateCcw, ArrowRight, AlertTriangle } from 'lucide-react';
import { TranslationDictionary } from '../data/translations';
import { evaluateWarningSigns } from '../utils/safetyCheck';
import { IllustrationScamCheck } from './Illustrations';

interface RealityCheckProps {
  t: TranslationDictionary;
  onOpenFlowForScenario: (scenarioId: string) => void;
}

export const RealityCheck: React.FC<RealityCheckProps> = ({ t, onOpenFlowForScenario }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleQuestion = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleReset = () => {
    setSelectedIds([]);
  };

  const evaluation = evaluateWarningSigns(selectedIds);

  const getResultFeedback = () => {
    if (evaluation.count === 0) {
      return {
        title: 'Low Indicator Profile',
        text: t.realityCheck.zeroSignals,
        color: 'text-[#174C3C]',
        bg: 'bg-[#DCE6DC]/40 border-[#174C3C]/20',
      };
    } else if (evaluation.count === 1) {
      return {
        title: '1 Warning Sign Detected',
        text: t.realityCheck.oneSignal,
        color: 'text-[#A66E14]',
        bg: 'bg-[#FAF4E6] border-[#A66E14]/30',
      };
    } else {
      return {
        title: `${evaluation.count} Warning Signs Detected`,
        text: t.realityCheck.multiSignals,
        color: 'text-[#C94B35]',
        bg: 'bg-[#FDF0EE] border-[#C94B35]/30',
      };
    }
  };

  const feedback = getResultFeedback();

  return (
    <section id="reality-check" className="py-10 md:py-16 border-b border-[#20231F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header with SVG Illustration */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#20231F]/15 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#174C3C] tracking-wider uppercase mb-1">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Behavioral Heuristics</span>
              <span aria-hidden="true">·</span>
              <span>Risk Self-Assessment</span>
            </div>
            <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#174C3C] tracking-tight">
              {t.realityCheck.sectionTitle}
            </h1>
            <p className="text-sm sm:text-base text-[#20231F]/80 leading-relaxed">
              {t.realityCheck.sectionSubtitle}
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <IllustrationScamCheck className="w-full max-w-sm h-auto" />
          </div>
        </div>

        {/* 2-Column Grid: Left Checklist, Right Diagnostic Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Questions Column */}
          <div className="lg:col-span-7 space-y-3.5">
            <p className="text-sm font-semibold text-[#20231F]/90 mb-2">
              {t.realityCheck.intro}
            </p>

            {t.realityCheck.questions.map((q) => {
              const checked = selectedIds.includes(q.id);
              return (
                <div
                  key={q.id}
                  onClick={() => toggleQuestion(q.id)}
                  className={`p-4 sm:p-5 rounded-lg border transition-all cursor-pointer flex items-start gap-4 ${
                    checked
                      ? 'bg-white border-[#174C3C] shadow-xs ring-1 ring-[#174C3C]/20'
                      : 'bg-[#FAF8F3] border-[#20231F]/15 hover:border-[#174C3C]/50'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                      checked
                        ? 'bg-[#174C3C] text-white'
                        : 'border border-[#20231F]/30 bg-white'
                    }`}
                  >
                    {checked && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </div>

                  <div className="space-y-1 select-none">
                    <h3 className="text-sm sm:text-base font-bold text-[#174C3C]">
                      {q.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#20231F]/75 leading-relaxed">
                      {q.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {selectedIds.length > 0 && (
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#20231F]/70 hover:text-[#C94B35] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.realityCheck.resetBtn}</span>
                </button>
              </div>
            )}
          </div>

          {/* Assessment Output Column */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-xl bg-white border border-[#20231F]/15 shadow-xs space-y-6 sticky top-24">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#20231F]/10">
                <span className="text-xs font-bold text-[#20231F]/80">
                  {t.realityCheck.resultTitle}
                </span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#EBE7DC] text-[#174C3C]">
                  {evaluation.count} / {evaluation.total} Signs Marked
                </span>
              </div>

              {/* Dynamic Assessment Result Box */}
              <div className={`p-4 rounded-lg border ${feedback.bg}`}>
                <h4 className={`text-base font-bold ${feedback.color} flex items-center gap-2`}>
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{feedback.title}</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#20231F]/85 mt-2 leading-relaxed">
                  {feedback.text}
                </p>
              </div>

              {/* Explicit Disclaimer as per requirement: warning signs indicate risk, not proof */}
              <p className="text-xs text-[#20231F]/70 italic leading-relaxed">
                {t.realityCheck.riskIndicatorNote}
              </p>

              {/* Action Button: Opens tailored flow */}
              <button
                onClick={() => onOpenFlowForScenario(evaluation.recommendedActionScenario)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#174C3C] hover:bg-[#123B2E] rounded-md shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#174C3C]"
              >
                <span>{t.realityCheck.takeActionBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
