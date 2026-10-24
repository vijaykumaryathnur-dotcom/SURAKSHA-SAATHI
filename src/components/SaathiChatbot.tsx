import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  ShieldAlert,
  ExternalLink,
  RotateCcw,
  Sparkles,
  Search,
  PhoneCall,
  Loader2,
  ChevronDown,
  Info
} from 'lucide-react';
import { Language } from '../data/translations';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  sources?: Array<{ title: string; url: string }>;
  searchQueries?: string[];
  timestamp: Date;
}

interface SaathiChatbotProps {
  currentLang: Language;
}

const EMERGENCY_PROMPTS = [
  {
    en: 'I transferred money to a scammer on UPI just now',
    hi: 'मैंने अभी-अभी UPI से किसी स्कैमर को पैसे भेज दिए',
    te: 'నేను ఇప్పుడే ఒక స్కామర్‌కి UPI ద్వారా డబ్బు పంపాను',
  },
  {
    en: 'A caller is threatening me with Digital Arrest / CBI',
    hi: 'कोई मुझे डिजिटल अरेस्ट / CBI के नाम पर धमका रहा है',
    te: 'డిజిటల్ అరెస్ట్ / CBI పేరుతో ఒకరు నన్ను బెదిరిస్తున్నారు',
  },
  {
    en: 'I installed an unknown APK / screen share app',
    hi: 'मैंने कोई अज्ञात APK या स्क्रीन शेयर ऐप इंस्टॉल कर ली है',
    te: 'నేను తెలియని APK లేదా స్క్రీన్ షేర్ యాప్‌ని ఇన్‌స్టాల్ చేసాను',
  },
  {
    en: 'Received SMS threatening electricity disconnection',
    hi: 'बिजली काटने की धमकी वाला SMS आया है',
    te: 'కరెంట్ కట్ చేస్తామని బెదిరింపు SMS వచ్చింది',
  },
];

export const SaathiChatbot: React.FC<SaathiChatbotProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      role: 'model',
      text:
        currentLang === 'hi'
          ? 'नमस्ते। मैं सुरक्षा साथी (Suraksha Saathi) का AI सहायता परामर्शदाता हूँ। यदि आपके साथ कोई साइबर धोखाधड़ी, संदिग्ध कॉल, गलत UPI ट्रांसफर या धमकी की घटना हुई है, तो बिना घबराए मुझे बताएं। मैं तुरंत आपको आधिकारिक और सुरक्षित कदम बताऊंगा।'
          : currentLang === 'te'
          ? 'నమస్కారం. నేను సురక్ష సాథీ (Suraksha Saathi) అత్యవసర AI సహాయకుడిని. మీకు ఏదైనా సైబర్ మోసం, అనుమానాస్పద కాల్ లేదా తప్పుడు UPI లావాదేవీ జరిగితే భయపడకుండా చెప్పండి. నేను తక్షణ అధికారిక దశలను వివరిస్తాను.'
          : 'Hello. I am the Suraksha Saathi Emergency Cyber Counselor. If you are experiencing cyber fraud, a suspicious call, an unauthorized UPI transaction, or digital arrest threats, take a deep breath and tell me what happened. I will guide you with calm, step-by-step verified actions.',
      timestamp: new Date(),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || isLoading) return;

    const userMessageId = `user-${Date.now()}`;
    const newMessages: ChatMessage[] = [
      ...messages,
      {
        id: userMessageId,
        role: 'user',
        text: query,
        timestamp: new Date(),
      },
    ];

    setMessages(newMessages);
    setInputQuery('');
    setIsLoading(true);

    try {
      const historyPayload = newMessages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: historyPayload,
          query,
          language: currentLang,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: `model-${Date.now()}`,
          role: 'model',
          text: data.text || 'Please dial 1930 immediately to register your incident.',
          sources: data.sources || [],
          searchQueries: data.searchQueries || [],
          timestamp: new Date(),
        },
      ]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: 'model',
          text:
            'I could not reach the server right now. If money has been debited or you are under immediate threat, please dial **1930** immediately to freeze transactions, or report on **cybercrime.gov.in**.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'model',
        text:
          currentLang === 'hi'
            ? 'बातचीत रीसेट कर दी गई है। अपनी स्थिति बताएं, मैं कदम-दर-कदम मदद करने के लिए यहाँ हूँ।'
            : currentLang === 'te'
            ? 'చర్చ రీసెట్ చేయబడింది. మీ పరిస్థితిని తెలియజేయండి, నేను సహాయం చేయడానికి ఇక్కడ ఉన్నాను.'
            : 'Conversation reset. Please describe your situation, and I will help you take immediate action.',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button (Stationed bottom-right) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 xl:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#174C3C] text-white shadow-xl hover:bg-[#123B2E] hover:scale-105 active:scale-95 transition-all border border-[#FAF8F3]/20 focus:outline-hidden focus:ring-2 focus:ring-[#174C3C]"
          aria-label="Open Suraksha Saathi AI Cyber Assistant"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-[#E8DCC9]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#C94B35] animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#C94B35]" />
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-wide">
            {currentLang === 'hi' ? 'AI साइबर परामर्शदाता' : currentLang === 'te' ? 'AI సైబర్ సహాయకుడు' : 'Ask Saathi AI'}
          </span>
        </button>
      )}

      {/* Chat Drawer / Modal Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Suraksha Saathi AI First Responder Chat"
          className="fixed bottom-20 xl:bottom-6 right-2 sm:right-6 z-50 w-[calc(100vw-1rem)] sm:w-[440px] max-h-[82vh] h-[640px] bg-[#FAF8F3] border border-[#20231F]/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header */}
          <div className="px-4 py-3.5 bg-[#174C3C] text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#123B2E] border border-white/20 flex items-center justify-center">
                <ShieldAlert className="w-4 h-4 text-[#E8DCC9]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h2 className="text-sm font-bold tracking-wide">Suraksha Saathi AI</h2>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-semibold bg-[#2E7D32] text-white uppercase tracking-wider">
                    Search Grounded
                  </span>
                </div>
                <p className="text-[11px] text-white/80">Emergency Cyber First Response</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Reset conversation"
                className="p-1.5 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Reset conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="px-3 py-1.5 bg-[#FAF0EE] border-b border-[#C94B35]/20 flex items-center justify-between text-[11px] text-[#C94B35] shrink-0">
            <div className="flex items-center gap-1.5 font-semibold">
              <PhoneCall className="w-3.5 h-3.5 shrink-0" />
              <span>Money lost recently? Call 1930 immediately.</span>
            </div>
            <a
              href="tel:1930"
              className="px-2 py-0.5 rounded bg-[#C94B35] text-white font-bold text-[10px] hover:bg-[#A83723] transition-colors"
            >
              Dial 1930
            </a>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap break-words ${
                    msg.role === 'user'
                      ? 'bg-[#174C3C] text-white rounded-br-xs'
                      : 'bg-white text-[#20231F] border border-[#20231F]/15 rounded-bl-xs shadow-2xs'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Google Search Grounding Sources & Queries */}
                {msg.role === 'model' && (msg.sources?.length || msg.searchQueries?.length) ? (
                  <div className="mt-2 max-w-[88%] p-2 rounded-lg bg-[#EBE7DC]/60 border border-[#20231F]/10 space-y-1.5 text-[11px]">
                    {msg.searchQueries && msg.searchQueries.length > 0 && (
                      <div className="flex items-center gap-1.5 text-[#174C3C] font-semibold">
                        <Search className="w-3 h-3" />
                        <span>Grounded via Google Search:</span>
                        <span className="italic font-normal truncate">
                          "{msg.searchQueries[0]}"
                        </span>
                      </div>
                    )}

                    {msg.sources && msg.sources.length > 0 && (
                      <div className="space-y-1">
                        <span className="font-bold text-[#20231F]/70 text-[10px] uppercase tracking-wider block">
                          Verified Official Sources:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {msg.sources.map((s, idx) => (
                            <a
                              key={idx}
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white border border-[#20231F]/15 text-[#174C3C] hover:underline font-medium text-[11px]"
                            >
                              <span className="truncate max-w-[150px]">{s.title}</span>
                              <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : null}

                <span className="text-[10px] text-[#20231F]/40 mt-1 px-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-[#174C3C] bg-white border border-[#20231F]/15 px-3 py-2.5 rounded-2xl rounded-bl-xs w-fit shadow-2xs">
                <Loader2 className="w-4 h-4 animate-spin text-[#174C3C]" />
                <span className="font-medium">Suraksha Saathi is searching verified cyber resources...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 pt-2 pb-1 border-t border-[#20231F]/10 bg-white/70 shrink-0">
            <span className="text-[10px] font-bold text-[#174C3C] uppercase tracking-wider block mb-1.5">
              Quick Situations:
            </span>
            <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
              {EMERGENCY_PROMPTS.map((p, idx) => {
                const label = p[currentLang] || p.en;
                return (
                  <button
                    key={idx}
                    disabled={isLoading}
                    onClick={() => handleSendMessage(label)}
                    className="shrink-0 px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#FAF8F3] border border-[#20231F]/15 hover:border-[#174C3C] hover:bg-[#DCE6DC]/30 text-[#20231F] transition-colors disabled:opacity-50"
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#20231F]/15 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder={
                currentLang === 'hi'
                  ? 'अपनी स्थिति यहाँ लिखें (जैसे: गलत खाते में पैसे गए)...'
                  : currentLang === 'te'
                  ? 'మీ సమస్యను ఇక్కడ టైప్ చేయండి...'
                  : 'Describe what happened (e.g., money debited, fake police call)...'
              }
              disabled={isLoading}
              className="flex-1 p-2.5 rounded-lg text-xs sm:text-sm border border-[#20231F]/20 focus:border-[#174C3C] focus:outline-hidden bg-[#FAF8F3] text-[#20231F] disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !inputQuery.trim()}
              className="p-2.5 rounded-lg bg-[#174C3C] text-white hover:bg-[#123B2E] transition-colors disabled:opacity-40 shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
