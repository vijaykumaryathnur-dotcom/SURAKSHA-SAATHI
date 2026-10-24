import React, { useState, useEffect } from 'react';
import {
  CreditCard,
  KeyRound,
  Smartphone,
  ShieldAlert,
  AlertTriangle,
  Users,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  PhoneCall,
  ExternalLink,
  Volume2,
  VolumeX,
  FileText,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { TranslationDictionary, ScenarioStep } from '../data/translations';
import {
  ScenarioIllustration,
  IllustrationMoneyLost,
  IllustrationAccountSecurity,
  IllustrationDeviceSecurity,
  IllustrationDigitalArrestCoercion,
  IllustrationSuspiciousCall,
  IllustrationFamilyHelp,
  IllustrationGetHelp,
} from './Illustrations';

interface ResponseFlowProps {
  t: TranslationDictionary;
  isOpen?: boolean;
  isPage?: boolean;
  initialScenarioId?: string | null;
  onClose?: () => void;
  onOpenEvidence: (scenarioId: string) => void;
  onOpenFamilyAlert: () => void;
  onNavigatePage?: (page: any) => void;
}

export const ResponseFlow: React.FC<ResponseFlowProps> = ({
  t,
  isOpen = true,
  isPage = false,
  initialScenarioId,
  onClose,
  onOpenEvidence,
  onOpenFamilyAlert,
  onNavigatePage,
}) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(initialScenarioId || null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Sync initial scenario when opened or changed
  useEffect(() => {
    if (initialScenarioId && t.scenarios[initialScenarioId]) {
      setSelectedScenarioId(initialScenarioId);
      setCurrentStepIndex(0);
    }
  }, [initialScenarioId, t]);

  // Clean up speech synthesis when component unmounts or step changes
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentStepIndex, selectedScenarioId, isOpen]);

  if (!isOpen && !isPage) return null;

  const currentScenario = selectedScenarioId ? t.scenarios[selectedScenarioId] : null;
  const currentStep: ScenarioStep | undefined = currentScenario?.steps[currentStepIndex];

  const handleSelectScenario = (id: string) => {
    setSelectedScenarioId(id);
    setCurrentStepIndex(0);
    setCompletedSteps({});
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setSelectedScenarioId(null);
    setCurrentStepIndex(0);
    setCompletedSteps({});
    if (typeof window !== 'undefined') {
      if (window.location.hash.includes('?')) {
        window.location.hash = '#/get-help';
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      }
    }
  };

  const toggleStepCompleted = (stepId: string) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepId]: !prev[stepId],
    }));
  };

  const handleToggleReadAloud = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    if (!currentStep) return;

    window.speechSynthesis.cancel();
    const textToSpeak = `${currentStep.title}. ${currentStep.instruction}. ${currentStep.tip ? 'Tip: ' + currentStep.tip : ''}`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const scenarioVisuals: Record<string, { icon: React.ReactNode }> = {
    money_sent: {
      icon: <CreditCard className="w-5 h-5 text-[#C94B35]" />,
    },
    credential_leak: {
      icon: <KeyRound className="w-5 h-5 text-[#A66E14]" />,
    },
    malicious_app: {
      icon: <Smartphone className="w-5 h-5 text-[#174C3C]" />,
    },
    device_takeover: {
      icon: <Smartphone className="w-5 h-5 text-[#174C3C]" />,
    },
    blackmail_threat: {
      icon: <ShieldAlert className="w-5 h-5 text-[#C94B35]" />,
    },
    coercion_threat: {
      icon: <ShieldAlert className="w-5 h-5 text-[#C94B35]" />,
    },
    suspicious_message: {
      icon: <AlertTriangle className="w-5 h-5 text-[#A66E14]" />,
    },
    helping_someone: {
      icon: <Users className="w-5 h-5 text-[#174C3C]" />,
    },
    family_victim: {
      icon: <Users className="w-5 h-5 text-[#174C3C]" />,
    },
  };

  const content = (
    <div className={`space-y-6 ${isPage ? 'max-w-4xl mx-auto py-8 px-4 sm:px-6' : 'p-5 sm:p-8'}`}>
      
      {/* Header if on dedicated page */}
      {isPage && (
        <>
          {!selectedScenarioId ? (
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#20231F]/15 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-6">
              <div className="lg:col-span-7 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#174C3C] tracking-wider uppercase mb-1">
                  <span>Public Assistance Flow</span>
                  <span aria-hidden="true">·</span>
                  <span>Step-by-Step Guidance</span>
                </div>
                <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#174C3C]">
                  {t.responseModal.chooseScenarioTitle}
                </h1>
                <p className="text-sm sm:text-base text-[#20231F]/80 leading-relaxed">
                  {t.responseModal.chooseScenarioSubtitle}
                </p>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <IllustrationGetHelp className="w-full max-w-sm h-auto" />
              </div>
            </div>
          ) : (
            <div className="border-b border-[#20231F]/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#174C3C] tracking-wider uppercase mb-1">
                  <span>Active Incident Guidance</span>
                  <span aria-hidden="true">·</span>
                  <span>Step-by-Step Defense</span>
                </div>
                <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#174C3C]">
                  {currentScenario?.title}
                </h1>
                <p className="text-sm sm:text-base text-[#20231F]/80 mt-1">
                  Follow these prioritized actions immediately to limit harm and freeze accounts.
                </p>
              </div>

              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#174C3C] bg-white border border-[#174C3C]/25 hover:bg-[#EBE7DC] rounded-md transition-colors self-start sm:self-center shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Choose Another Situation</span>
              </button>
            </div>
          )}
        </>
      )}

      {/* PHASE 1: Scenario Selector */}
      {!selectedScenarioId ? (
        <div className="space-y-6">
          {!isPage && (
            <div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#174C3C]">
                {t.responseModal.chooseScenarioTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#20231F]/80 mt-1">
                {t.responseModal.chooseScenarioSubtitle}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.values(t.scenarios).map((sc) => {
              const visual = scenarioVisuals[sc.id];
              return (
                <button
                  key={sc.id}
                  onClick={() => handleSelectScenario(sc.id)}
                  className="p-5 rounded-xl bg-white border border-[#20231F]/15 hover:border-[#174C3C] hover:shadow-md text-left transition-all group flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-[#174C3C]"
                >
                  <div className="space-y-3 w-full">
                    {/* Scenario SVG Illustration Banner */}
                    <div className="w-full h-32 rounded-lg bg-[#FAF8F3] border border-[#20231F]/10 overflow-hidden flex items-center justify-center p-2 group-hover:border-[#174C3C]/30 transition-colors">
                      <ScenarioIllustration scenarioId={sc.id} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-md bg-[#FAF8F3] border border-[#20231F]/10 flex items-center justify-center">
                          {visual?.icon || <AlertCircle className="w-4 h-4 text-[#174C3C]" />}
                        </div>
                        <span className="text-xs font-mono font-semibold text-[#20231F]/60">
                          {sc.steps.length} Steps
                        </span>
                      </div>
                      <span className="text-xs font-bold text-[#174C3C] opacity-0 group-hover:opacity-100 transition-opacity">
                        Select →
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-[#174C3C] group-hover:text-[#123B2E] leading-snug">
                        {sc.title}
                      </h3>
                      <p className="text-xs text-[#20231F]/70 mt-1 leading-relaxed line-clamp-2">
                        {sc.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#20231F]/10 flex items-center justify-between text-[11px] text-[#20231F]/60">
                    <span className="text-[#C94B35] font-semibold">Immediate Action</span>
                    <span className="font-semibold text-[#174C3C]">Open Guidance →</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-4 rounded-lg bg-[#EBE7DC]/60 border border-[#20231F]/10 text-xs text-[#20231F]/80 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#174C3C] shrink-0" />
            <span>
              All information is processed strictly inside your browser. No passwords, OTPs, or financial details are ever stored.
            </span>
          </div>
        </div>
      ) : (
        /* PHASE 2: Step-by-Step Guidance */
        currentScenario && currentStep && (
          <div className="space-y-6">
            
            {/* Step Progress & Scenario Bar */}
            <div className="space-y-2 border-b border-[#20231F]/10 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#174C3C] flex items-center gap-2">
                  {scenarioVisuals[currentScenario.id]?.icon}
                  <span>{currentScenario.title}</span>
                </span>

                <span className="text-xs font-mono font-bold text-[#174C3C] bg-[#EBE7DC] px-2.5 py-1 rounded">
                  {t.responseModal.stepOf
                    .replace('{current}', String(currentStepIndex + 1))
                    .replace('{total}', String(currentScenario.steps.length))}
                </span>
              </div>

              {/* Step Progress Segments */}
              <div className="w-full bg-[#E5E1D5] h-2 rounded-full overflow-hidden flex">
                {currentScenario.steps.map((st, idx) => (
                  <div
                    key={st.id}
                    className={`h-full flex-1 transition-all ${
                      idx < currentStepIndex
                        ? 'bg-[#174C3C]'
                        : idx === currentStepIndex
                        ? 'bg-[#2E7D32]'
                        : 'bg-transparent'
                    } ${idx !== 0 ? 'border-l-2 border-[#F7F5EF]' : ''}`}
                  />
                ))}
              </div>
            </div>

            {/* Step Header with Priority and Speech Synthesis */}
            <div className="flex items-center justify-between">
              <span
                className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded ${
                  currentStep.priority === 'critical'
                    ? 'bg-[#FDF0EE] text-[#C94B35] border border-[#C94B35]/30'
                    : 'bg-[#FAF4E6] text-[#A66E14] border border-[#A66E14]/30'
                }`}
              >
                {currentStep.priority === 'critical' ? 'Urgent Immediate Priority' : 'High Priority'}
              </span>

              {/* Read Aloud Button */}
              <button
                onClick={handleToggleReadAloud}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#174C3C] bg-white border border-[#174C3C]/25 rounded hover:bg-[#EBE7DC]/60 transition-colors focus-visible:ring-2 focus-visible:ring-[#174C3C]"
                aria-label={isSpeaking ? t.responseModal.stopAudio : t.responseModal.readAloud}
              >
                {isSpeaking ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-[#C94B35]" />
                    <span className="text-[#C94B35] font-semibold">{t.responseModal.stopAudio}</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{t.responseModal.readAloud}</span>
                  </>
                )}
              </button>
            </div>

            {/* Scenario Visual Context Banner */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F3] border border-[#20231F]/15 shadow-2xs grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-8 space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#174C3C]">
                  Active Guidance Context
                </span>
                <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#174C3C]">
                  {currentScenario.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#20231F]/75">
                  {currentScenario.shortDesc}
                </p>
              </div>
              <div className="sm:col-span-4 flex justify-center">
                <ScenarioIllustration scenarioId={currentScenario.id} className="w-full max-w-[220px] h-24" />
              </div>
            </div>

            {/* Main Action Card */}
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#20231F]/15 shadow-2xs space-y-5">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#174C3C] leading-snug">
                {currentStep.title}
              </h2>

              <p className="text-base sm:text-lg text-[#20231F]/90 leading-relaxed font-normal">
                {currentStep.instruction}
              </p>

              {/* Interactive Phone / Portal Action Buttons */}
              {(currentStep.phoneCall || currentStep.actionUrl) && (
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {currentStep.phoneCall && (
                    <a
                      href={`tel:${currentStep.phoneCall}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#C94B35] hover:bg-[#B33E2A] rounded-md shadow-xs transition-colors"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Call {currentStep.phoneCall} Helpline</span>
                    </a>
                  )}
                  {currentStep.actionUrl && (
                    <a
                      href={currentStep.actionUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#174C3C] bg-[#DCE6DC]/60 hover:bg-[#DCE6DC] border border-[#174C3C]/30 rounded-md transition-colors"
                    >
                      <span>{currentStep.actionLabel || 'Open Official Channel'}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}

              {/* Contextual Pro Tip */}
              {currentStep.tip && (
                <div className="p-4 rounded-lg bg-[#FAF8F3] border border-[#174C3C]/15 text-xs sm:text-sm text-[#20231F]/80 flex items-start gap-3">
                  <span className="font-bold text-[#174C3C] uppercase tracking-wider shrink-0 mt-0.5">
                    Notice:
                  </span>
                  <span className="leading-relaxed">{currentStep.tip}</span>
                </div>
              )}

              {/* Completed Step Checkbox */}
              <div className="pt-4 border-t border-[#20231F]/10">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={!!completedSteps[currentStep.id]}
                    onChange={() => toggleStepCompleted(currentStep.id)}
                    className="w-5 h-5 text-[#174C3C] rounded border-[#20231F]/30 focus:ring-[#174C3C]"
                  />
                  <span className="text-sm font-medium text-[#20231F]">
                    {completedSteps[currentStep.id]
                      ? t.responseModal.completedLabel
                      : t.responseModal.markDone}
                  </span>
                </label>
              </div>
            </div>

            {/* Support Tools Cross-Links */}
            <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#20231F]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#20231F]/70">
                Direct tools for this situation:
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={() => onOpenEvidence(currentScenario.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#174C3C] bg-white border border-[#174C3C]/25 hover:bg-[#EBE7DC] rounded-md transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Prepare Evidence Dossier</span>
                </button>
                <button
                  onClick={onOpenFamilyAlert}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#174C3C] bg-white border border-[#174C3C]/25 hover:bg-[#EBE7DC] rounded-md transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Alert Family Members</span>
                </button>
              </div>
            </div>

            {/* Navigation Bottom Controls */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => {
                  if (currentStepIndex > 0) {
                    setCurrentStepIndex(currentStepIndex - 1);
                  } else {
                    setSelectedScenarioId(null);
                  }
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#20231F]/80 bg-white border border-[#20231F]/20 hover:bg-[#EBE7DC] rounded-md transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{currentStepIndex > 0 ? t.responseModal.backBtn : 'Change Scenario'}</span>
              </button>

              <div className="flex items-center gap-3">
                {currentStepIndex < currentScenario.steps.length - 1 ? (
                  <button
                    onClick={() => {
                      setCurrentStepIndex(currentStepIndex + 1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-[#174C3C] hover:bg-[#123B2E] rounded-md shadow-xs transition-colors"
                  >
                    <span>{t.responseModal.nextBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (onNavigatePage) {
                        onNavigatePage('home');
                      } else if (onClose) {
                        onClose();
                      }
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-[#2E7D32] hover:bg-[#256628] rounded-md shadow-xs transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Completed All Steps</span>
                  </button>
                )}
              </div>
            </div>

          </div>
        )
      )}

    </div>
  );

  // If page mode, return in standard page layout
  if (isPage) {
    return <section id="get-help" className="py-6 min-h-[70vh]">{content}</section>;
  }

  // Otherwise modal layout
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
    >
      <div className="relative w-full max-w-3xl my-auto bg-[#F7F5EF] rounded-xl border border-[#20231F]/20 shadow-xl overflow-hidden flex flex-col max-h-[92vh]">
        <div className="px-5 py-4 bg-[#FAF8F3] border-b border-[#20231F]/10 flex items-center justify-between shrink-0">
          <span className="text-sm font-bold text-[#174C3C]">
            Suraksha Saathi · Guided Response
          </span>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 text-[#20231F]/70 hover:text-[#20231F] rounded"
              aria-label="Close"
            >
              ✕
            </button>
          )}
        </div>
        <div className="overflow-y-auto flex-1">{content}</div>
      </div>
    </div>
  );
};
