import React, { useState, useEffect } from 'react';
import {
  FileText,
  Download,
  Printer,
  RotateCcw,
  Check,
  AlertCircle,
  Lock,
  ExternalLink,
  Eye
} from 'lucide-react';
import { TranslationDictionary } from '../data/translations';
import { formatEvidenceSummary, EvidenceRecord } from '../utils/safetyCheck';
import { IllustrationEvidence } from './Illustrations';

interface EvidenceAssistantProps {
  t: TranslationDictionary;
  activeScenarioId?: string | null;
}

export const EvidenceAssistant: React.FC<EvidenceAssistantProps> = ({
  t,
  activeScenarioId,
}) => {
  const [selectedScenario, setSelectedScenario] = useState<string>('money_sent');

  // Evidence Checklist Items state
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    item_bank_sms: true,
    item_upi_utr: true,
    item_chat_history: false,
    item_phone_number: true,
    item_fraud_account: false,
    item_app_link: false,
    item_fir_ack: false,
  });

  // Voluntary Form Data (Stored locally in component memory only)
  const [incidentDate, setIncidentDate] = useState<string>('');
  const [incidentTime, setIncidentTime] = useState<string>('');
  const [amountLost, setAmountLost] = useState<string>('');
  const [paymentAppOrBank, setPaymentAppOrBank] = useState<string>('');
  const [transactionRef, setTransactionRef] = useState<string>('');
  const [suspectNumberOrHandle, setSuspectNumberOrHandle] = useState<string>('');
  const [suspectPlatform, setSuspectPlatform] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [previewOpen, setPreviewOpen] = useState<boolean>(false);

  // Sync if passed from ResponseFlow
  useEffect(() => {
    if (activeScenarioId && t.scenarios[activeScenarioId]) {
      setSelectedScenario(activeScenarioId);
    }
  }, [activeScenarioId, t]);

  const toggleChecklistItem = (key: string) => {
    setChecklist((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleReset = () => {
    setIncidentDate('');
    setIncidentTime('');
    setAmountLost('');
    setPaymentAppOrBank('');
    setTransactionRef('');
    setSuspectNumberOrHandle('');
    setSuspectPlatform('');
    setNotes('');
    setChecklist({
      item_bank_sms: false,
      item_upi_utr: false,
      item_chat_history: false,
      item_phone_number: false,
      item_fraud_account: false,
      item_app_link: false,
      item_fir_ack: false,
    });
  };

  const getRecord = (): EvidenceRecord => {
    const scTitle = t.scenarios[selectedScenario]?.title || 'Cyber Incident';
    const readableChecklist: Record<string, boolean> = {};
    Object.entries(checklist).forEach(([k, v]) => {
      const label = t.evidenceAssistant.items[k] || k;
      readableChecklist[label] = v;
    });

    return {
      scenarioTitle: scTitle,
      incidentDate,
      incidentTime,
      amountLost,
      paymentAppOrBank,
      transactionRef,
      suspectNumberOrHandle,
      suspectPlatform,
      completedSteps: ['Bank contact initiated', 'Cyber incident dossier prepared'],
      evidenceChecklist: readableChecklist,
      notes,
    };
  };

  const dossierText = formatEvidenceSummary(getRecord());

  const handleDownloadTxt = () => {
    const blob = new Blob([dossierText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Suraksha-Saathi-Evidence-Summary-${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="evidence-assistant" className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Visual Header Banner */}
        <div className="p-6 rounded-2xl bg-white border border-[#20231F]/15 shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#174C3C] tracking-wider uppercase">
              <FileText className="w-3.5 h-3.5" />
              <span>Investigation Readiness</span>
            </div>
            <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#174C3C]">
              {t.evidenceAssistant.sectionTitle}
            </h1>
            <p className="text-sm sm:text-base text-[#20231F]/80 leading-relaxed">
              {t.evidenceAssistant.sectionSubtitle}
            </p>
          </div>
          <div className="md:col-span-5">
            <IllustrationEvidence className="w-full h-36" />
          </div>
        </div>

        {/* Incident Context Selector */}
        <div className="mb-8 p-4 rounded-lg bg-[#FAF8F3] border border-[#20231F]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <label className="text-xs font-bold uppercase tracking-wider text-[#174C3C]">
            {t.evidenceAssistant.selectScenarioLabel}
          </label>
          <select
            value={selectedScenario}
            onChange={(e) => setSelectedScenario(e.target.value)}
            className="p-2 text-xs sm:text-sm rounded border border-[#20231F]/20 bg-white text-[#20231F] font-medium focus:border-[#174C3C] focus:outline-hidden"
          >
            {Object.values(t.scenarios).map((sc) => (
              <option key={sc.id} value={sc.id}>
                {sc.title}
              </option>
            ))}
          </select>
        </div>

        {/* 2-Column Structure: Left Checklist & Form, Right Actions & Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Checklist & Voluntary Fields */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Checklist */}
            <div className="p-6 rounded-xl bg-white border border-[#20231F]/15 shadow-2xs space-y-4">
              <h3 className="text-sm font-bold text-[#174C3C] uppercase tracking-wider">
                {t.evidenceAssistant.checklistTitle}
              </h3>
              
              <div className="space-y-2.5">
                {Object.entries(t.evidenceAssistant.items).map(([key, label]) => {
                  const checked = !!checklist[key];
                  return (
                    <div
                      key={key}
                      onClick={() => toggleChecklistItem(key)}
                      className={`p-3 rounded-md border transition-all cursor-pointer flex items-center gap-3 ${
                        checked
                          ? 'bg-[#FAF8F3] border-[#174C3C]'
                          : 'bg-white border-[#20231F]/15 hover:border-[#174C3C]/40'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                          checked
                            ? 'bg-[#174C3C] text-white'
                            : 'border border-[#20231F]/30 bg-white'
                        }`}
                      >
                        {checked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#20231F]/90 select-none">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Voluntary Form Data */}
            <div className="p-6 rounded-xl bg-white border border-[#20231F]/15 shadow-2xs space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#20231F]/10">
                <h3 className="text-sm font-bold text-[#174C3C] uppercase tracking-wider">
                  {t.evidenceAssistant.voluntaryFormTitle}
                </h3>
                <span className="text-xs text-[#20231F]/60">Memory Only</span>
              </div>

              <p className="text-xs text-[#C94B35] font-semibold">
                {t.evidenceAssistant.formNotice}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#20231F]/80 mb-1">
                    {t.evidenceAssistant.dateLabel}
                  </label>
                  <input
                    type="date"
                    value={incidentDate}
                    onChange={(e) => setIncidentDate(e.target.value)}
                    className="w-full p-2.5 text-xs sm:text-sm rounded border border-[#20231F]/20 bg-[#FAF8F3] focus:bg-white focus:border-[#174C3C] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#20231F]/80 mb-1">
                    {t.evidenceAssistant.timeLabel}
                  </label>
                  <input
                    type="text"
                    value={incidentTime}
                    onChange={(e) => setIncidentTime(e.target.value)}
                    placeholder="e.g. 14:30 IST"
                    className="w-full p-2.5 text-xs sm:text-sm rounded border border-[#20231F]/20 bg-[#FAF8F3] focus:bg-white focus:border-[#174C3C] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#20231F]/80 mb-1">
                    {t.evidenceAssistant.amountLabel}
                  </label>
                  <input
                    type="text"
                    value={amountLost}
                    onChange={(e) => setAmountLost(e.target.value)}
                    placeholder="e.g. 15,000"
                    className="w-full p-2.5 text-xs sm:text-sm rounded border border-[#20231F]/20 bg-[#FAF8F3] focus:bg-white focus:border-[#174C3C] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#20231F]/80 mb-1">
                    {t.evidenceAssistant.bankLabel}
                  </label>
                  <input
                    type="text"
                    value={paymentAppOrBank}
                    onChange={(e) => setPaymentAppOrBank(e.target.value)}
                    placeholder="e.g. SBI / Google Pay"
                    className="w-full p-2.5 text-xs sm:text-sm rounded border border-[#20231F]/20 bg-[#FAF8F3] focus:bg-white focus:border-[#174C3C] focus:outline-hidden"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#20231F]/80 mb-1">
                    {t.evidenceAssistant.utrLabel}
                  </label>
                  <input
                    type="text"
                    value={transactionRef}
                    onChange={(e) => setTransactionRef(e.target.value)}
                    placeholder="e.g. UPI Ref / UTR: 329482948210"
                    className="w-full p-2.5 text-xs sm:text-sm rounded border border-[#20231F]/20 bg-[#FAF8F3] focus:bg-white focus:border-[#174C3C] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#20231F]/80 mb-1">
                    {t.evidenceAssistant.suspectContactLabel}
                  </label>
                  <input
                    type="text"
                    value={suspectNumberOrHandle}
                    onChange={(e) => setSuspectNumberOrHandle(e.target.value)}
                    placeholder="+91 98765 43210 or @handle"
                    className="w-full p-2.5 text-xs sm:text-sm rounded border border-[#20231F]/20 bg-[#FAF8F3] focus:bg-white focus:border-[#174C3C] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#20231F]/80 mb-1">
                    {t.evidenceAssistant.platformLabel}
                  </label>
                  <input
                    type="text"
                    value={suspectPlatform}
                    onChange={(e) => setSuspectPlatform(e.target.value)}
                    placeholder="WhatsApp, Phone Call, APK link"
                    className="w-full p-2.5 text-xs sm:text-sm rounded border border-[#20231F]/20 bg-[#FAF8F3] focus:bg-white focus:border-[#174C3C] focus:outline-hidden"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#20231F]/80 mb-1">
                    {t.evidenceAssistant.notesLabel}
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Briefly state sequence of events..."
                    rows={3}
                    className="w-full p-2.5 text-xs sm:text-sm rounded border border-[#20231F]/20 bg-[#FAF8F3] focus:bg-white focus:border-[#174C3C] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#20231F]/70 hover:text-[#C94B35]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.evidenceAssistant.resetBtn}</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Output Controls & Live Dossier Preview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-xl bg-white border border-[#20231F]/15 shadow-xs space-y-5 sticky top-24">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#20231F]/10">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#174C3C]">
                  Generated Dossier Summary
                </span>
                <span className="text-xs text-[#20231F]/70">Standardized Format</span>
              </div>

              {/* Text Preview Box */}
              <div className="p-4 rounded-lg bg-[#FAF8F3] border border-[#20231F]/15 font-mono text-[11px] sm:text-xs text-[#20231F]/90 max-h-80 overflow-y-auto whitespace-pre leading-relaxed select-all">
                {dossierText}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleDownloadTxt}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#174C3C] hover:bg-[#123B2E] rounded-md shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#174C3C]"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.evidenceAssistant.downloadBtn}</span>
                </button>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => setPreviewOpen(true)}
                    className="inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-[#174C3C] bg-white border border-[#174C3C]/30 hover:bg-[#EBE7DC] rounded-md transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Formatted</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-[#174C3C] bg-[#DCE6DC]/60 hover:bg-[#DCE6DC] border border-[#174C3C]/30 rounded-md transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Dossier</span>
                  </button>
                </div>
              </div>

              {/* Clear notice regarding non-FIR status */}
              <div className="p-3.5 rounded-lg bg-[#FAF8F3] border border-[#20231F]/10 text-xs text-[#20231F]/70 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#174C3C]">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Personal Preparation Aid</span>
                </div>
                <p className="leading-relaxed">
                  This summary is for your personal use when contacting your bank or police. It is NOT an official FIR or proof of successful recovery.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Formatted Dossier Modal View for Print / Reading */}
      {previewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white p-6 sm:p-8 rounded-xl border border-[#20231F]/20 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            
            <div className="flex items-center justify-between border-b pb-4 border-stone-200">
              <div>
                <h3 className="font-editorial text-xl font-bold text-[#174C3C]">
                  Suraksha Saathi Incident Dossier
                </h3>
                <p className="text-xs text-stone-500">
                  Citizen First Response Preparation Document
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-[#174C3C] rounded hover:bg-[#123B2E] transition-colors"
                >
                  Print
                </button>
                <button
                  onClick={() => setPreviewOpen(false)}
                  className="px-3 py-1.5 text-xs font-medium text-stone-600 hover:bg-stone-100 rounded"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="p-5 bg-stone-50 border border-stone-200 rounded font-mono text-xs whitespace-pre-wrap leading-relaxed select-all text-stone-900">
              {dossierText}
            </div>

            <div className="text-xs text-stone-500 italic border-t pt-3 border-stone-200 flex items-center justify-between">
              <span>Prepared for: Bank Dispute & Cybercrime Portal Filing</span>
              <span>Not a Police FIR</span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
