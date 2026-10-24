import React, { useState } from 'react';
import {
  Shield,
  Menu,
  X,
  PhoneCall,
  Home,
  HelpCircle,
  Clock,
  ShieldAlert,
  MessageSquare,
  FileText,
  Building2,
  Globe
} from 'lucide-react';
import { TranslationDictionary, Language } from '../data/translations';

export type PageRoute =
  | 'home'
  | 'get-help'
  | 'first-hour'
  | 'scam-check'
  | 'family-alert'
  | 'evidence'
  | 'official-help';

interface HeaderProps {
  activePage: PageRoute;
  currentLang: Language;
  onNavigate: (page: PageRoute) => void;
  onLanguageChange: (lang: Language) => void;
  t: TranslationDictionary;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  currentLang,
  onNavigate,
  onLanguageChange,
  t,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageRoute; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: t.nav.home, icon: <Home className="w-3.5 h-3.5" /> },
    { id: 'get-help', label: t.nav.getHelp, icon: <HelpCircle className="w-3.5 h-3.5" /> },
    { id: 'first-hour', label: t.nav.timeline, icon: <Clock className="w-3.5 h-3.5" /> },
    { id: 'scam-check', label: t.nav.scamCheck, icon: <ShieldAlert className="w-3.5 h-3.5" /> },
    { id: 'family-alert', label: t.nav.familyAlert, icon: <MessageSquare className="w-3.5 h-3.5" /> },
    { id: 'evidence', label: t.nav.evidence, icon: <FileText className="w-3.5 h-3.5" /> },
    { id: 'official-help', label: t.nav.officialHelp, icon: <Building2 className="w-3.5 h-3.5" /> },
  ];

  const handleNavClick = (pageId: PageRoute) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5EF]/98 backdrop-blur-md border-b border-[#20231F]/15">
      {/* Top Bar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        
        {/* Left: Suraksha Saathi Logo */}
        <a
          href="#/home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-2.5 text-[#174C3C] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#174C3C] rounded-md py-1"
          aria-label="Suraksha Saathi Home"
        >
          <div className="w-9 h-9 rounded-lg bg-[#174C3C] flex items-center justify-center text-[#F7F5EF] shadow-xs">
            <Shield className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#174C3C] leading-none">
              {t.brandName}
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#20231F]/60 mt-0.5">
              Cyber Fraud First Response
            </span>
          </div>
        </a>

        {/* Center: Dedicated Navigation Tabs (Desktop & Tablet) */}
        <nav
          className="hidden xl:flex items-center gap-1 bg-[#EBE7DC]/80 p-1 rounded-lg border border-[#20231F]/10"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-[#174C3C] text-white shadow-xs'
                    : 'text-[#20231F]/80 hover:text-[#174C3C] hover:bg-white/60'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Language Selector with Native Scripts & Emergency 1930 */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* Native Script Language Selector */}
          <div
            className="flex items-center bg-[#EBE7DC] border border-[#20231F]/15 rounded-md p-0.5 text-xs font-medium"
            role="group"
            aria-label="Language selection"
          >
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded transition-colors whitespace-nowrap text-xs ${
                currentLang === 'en'
                  ? 'bg-[#174C3C] text-white font-bold shadow-xs'
                  : 'text-[#20231F]/75 hover:text-[#20231F]'
              }`}
              title="English"
              aria-pressed={currentLang === 'en'}
            >
              English
            </button>
            <button
              onClick={() => onLanguageChange('hi')}
              className={`px-2 py-1 rounded transition-colors whitespace-nowrap text-xs font-serif ${
                currentLang === 'hi'
                  ? 'bg-[#174C3C] text-white font-bold shadow-xs'
                  : 'text-[#20231F]/75 hover:text-[#20231F]'
              }`}
              title="हिन्दी"
              aria-pressed={currentLang === 'hi'}
            >
              हिन्दी
            </button>
            <button
              onClick={() => onLanguageChange('te')}
              className={`px-2 py-1 rounded transition-colors whitespace-nowrap text-xs font-serif ${
                currentLang === 'te'
                  ? 'bg-[#174C3C] text-white font-bold shadow-xs'
                  : 'text-[#20231F]/75 hover:text-[#20231F]'
              }`}
              title="తెలుగు"
              aria-pressed={currentLang === 'te'}
            >
              తెలుగు
            </button>
          </div>

          {/* Persistent Emergency 1930 Helpline Button (Desktop & Tablet) */}
          <a
            href="tel:1930"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#C94B35] hover:bg-[#B33E2A] rounded-md transition-colors shadow-2xs whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#C94B35]"
            title="Immediate National Cybercrime Financial Helpline"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Help:</span>
            <span>1930</span>
          </a>

          {/* Mobile Navigation Drawer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 text-[#20231F] hover:bg-[#EBE7DC] rounded-md focus-visible:ring-2 focus-visible:ring-[#174C3C]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Secondary Sub-navigation row for Medium/Tablet screens (lg screens) */}
      <div className="hidden lg:flex xl:hidden border-t border-[#20231F]/10 px-4 py-2 bg-[#FAF8F3] overflow-x-auto">
        <div className="flex items-center gap-1.5 mx-auto">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#174C3C] text-white shadow-xs'
                    : 'text-[#20231F]/80 hover:text-[#174C3C] hover:bg-[#EBE7DC]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F7F5EF] border-b border-[#20231F]/20 px-4 pt-3 pb-6 space-y-4 shadow-md">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors text-left ${
                    isActive
                      ? 'bg-[#174C3C] text-white shadow-xs'
                      : 'text-[#20231F] hover:bg-[#EBE7DC]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {isActive && <span className="text-xs text-white/80">Active</span>}
                </button>
              );
            })}
          </div>

          {/* Quick Helpline inside mobile menu */}
          <div className="pt-2 border-t border-[#20231F]/10 flex items-center justify-between">
            <span className="text-xs text-[#20231F]/70">National Helpline:</span>
            <a
              href="tel:1930"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#C94B35] rounded-md shadow-2xs"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Dial 1930</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
