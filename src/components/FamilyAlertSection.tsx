import React, { useState } from 'react';
import { MessageSquare, Copy, Check, Share2, Shield, Lock } from 'lucide-react';
import { TranslationDictionary, Language } from '../data/translations';
import { generateFamilyAlertText } from '../utils/safetyCheck';

import { IllustrationFamilyHelp } from './Illustrations';

interface FamilyAlertSectionProps {
  t: TranslationDictionary;
  currentLang: Language;
}

export const FamilyAlertSection: React.FC<FamilyAlertSectionProps> = ({ t, currentLang }) => {
  const [selectedRecipient, setSelectedRecipient] = useState<string>('Parents');
  const [customNote, setCustomNote] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const messageText = generateFamilyAlertText({
    language: currentLang,
    relation: selectedRecipient,
    customNote: customNote,
  });

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(messageText);
      } else {
        // Fallback for older environments
        const textArea = document.createElement('textarea');
        textArea.value = messageText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsAppShare = () => {
    const encoded = encodeURIComponent(messageText);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  return (
    <section id="family-alert" className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Visual Header Banner */}
        <div className="p-6 rounded-2xl bg-white border border-[#20231F]/15 shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#174C3C] tracking-wider uppercase">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Secondary Scam Prevention</span>
            </div>
            <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#174C3C]">
              {t.familyAlert.sectionTitle}
            </h1>
            <p className="text-sm sm:text-base text-[#20231F]/80 leading-relaxed">
              {t.familyAlert.sectionSubtitle}
            </p>
          </div>
          <div className="md:col-span-5">
            <IllustrationFamilyHelp className="w-full h-36" />
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Customization Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-white border border-[#20231F]/15 shadow-2xs space-y-5">
              
              <div>
                <label className="block text-xs font-bold text-[#174C3C] uppercase tracking-wider mb-2">
                  {t.familyAlert.recipientLabel}
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {t.familyAlert.recipients.map((rec) => (
                    <button
                      key={rec.id}
                      onClick={() => setSelectedRecipient(rec.label)}
                      className={`text-left px-3.5 py-2.5 rounded-md text-xs sm:text-sm font-medium border transition-colors ${
                        selectedRecipient === rec.label
                          ? 'bg-[#174C3C] text-white border-[#174C3C]'
                          : 'bg-[#FAF8F3] text-[#20231F] border-[#20231F]/15 hover:border-[#174C3C]/50'
                      }`}
                    >
                      {rec.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Note Field */}
              <div>
                <label className="block text-xs font-semibold text-[#20231F]/80 mb-1.5">
                  Additional Note (Optional):
                </label>
                <textarea
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder={t.familyAlert.customNotePlaceholder}
                  rows={3}
                  className="w-full p-3 text-xs sm:text-sm rounded-md border border-[#20231F]/20 bg-[#FAF8F3] text-[#20231F] placeholder-[#20231F]/40 focus:border-[#174C3C] focus:bg-white transition-colors focus-visible:ring-1 focus-visible:ring-[#174C3C]"
                />
              </div>

              {/* Privacy Notice */}
              <div className="p-3 rounded-md bg-[#FAF8F3] border border-[#20231F]/10 text-xs text-[#20231F]/70 flex items-start gap-2">
                <Lock className="w-3.5 h-3.5 text-[#174C3C] shrink-0 mt-0.5" />
                <span>{t.familyAlert.privacyNotice}</span>
              </div>

            </div>
          </div>

          {/* Right Column: Live Message Preview & Actions */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-xl bg-white border border-[#20231F]/15 shadow-xs space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#20231F]/10">
                <span className="text-xs font-mono font-bold text-[#174C3C] uppercase tracking-wider">
                  {t.familyAlert.previewLabel}
                </span>
                <span className="text-xs text-[#20231F]/60">Ready to copy</span>
              </div>

              {/* Message Display Box */}
              <div className="p-5 rounded-lg bg-[#FAF8F3] border border-[#20231F]/15 text-sm sm:text-base text-[#20231F] font-mono whitespace-pre-wrap leading-relaxed select-all">
                {messageText}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#174C3C] hover:bg-[#123B2E] rounded-md shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#174C3C]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#DCE6DC]" />
                      <span>{t.familyAlert.copiedNotice}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{t.familyAlert.copyBtn}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleWhatsAppShare}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#174C3C] bg-[#DCE6DC]/60 hover:bg-[#DCE6DC] border border-[#174C3C]/30 rounded-md transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{t.familyAlert.whatsappBtn}</span>
                </button>
              </div>

              <div className="pt-3 border-t border-[#20231F]/10 flex items-center gap-2 text-xs text-[#20231F]/60">
                <Shield className="w-3.5 h-3.5 text-[#174C3C]" />
                <span>
                  Tip: Always ask relatives to call back on your verified phone number to foil AI voice cloning attempts.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
