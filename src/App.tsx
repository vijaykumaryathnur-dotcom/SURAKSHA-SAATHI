import React, { useState, useEffect, useCallback } from 'react';
import { TRANSLATIONS, Language } from './data/translations';
import { Header, PageRoute } from './components/Header';
import { Hero } from './components/Hero';
import { ImmediateActionStrip } from './components/ImmediateActionStrip';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TimelineSection } from './components/TimelineSection';
import { RealityCheck } from './components/RealityCheck';
import { FamilyAlertSection } from './components/FamilyAlertSection';
import { EvidenceAssistant } from './components/EvidenceAssistant';
import { OfficialResources } from './components/OfficialResources';
import { Footer } from './components/Footer';
import { ResponseFlow } from './components/ResponseFlow';
import { SaathiChatbot } from './components/SaathiChatbot';
import { Home, HelpCircle, Clock, ShieldAlert, PhoneCall } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('suraksha_lang');
      if (saved === 'hi' || saved === 'te' || saved === 'en') return saved;
    } catch {}
    return 'en';
  });

  const [activePage, setActivePage] = useState<PageRoute>('home');
  const [selectedScenarioForHelp, setSelectedScenarioForHelp] = useState<string | null>(null);
  const [activeEvidenceScenario, setActiveEvidenceScenario] = useState<string | null>(null);

  // Sync route from URL Hash (#/get-help, #/scam-check, etc.)
  const parseHashRoute = useCallback(() => {
    const rawHash = window.location.hash.replace(/^#\/?/, '');
    const [path, queryString] = rawHash.split('?');
    const validRoutes: PageRoute[] = [
      'home',
      'get-help',
      'first-hour',
      'scam-check',
      'family-alert',
      'evidence',
      'official-help',
    ];

    if (path && validRoutes.includes(path as PageRoute)) {
      setActivePage(path as PageRoute);
    } else if (!path || path === '') {
      setActivePage('home');
    }

    // Parse scenario query param if present
    if (queryString) {
      const searchParams = new URLSearchParams(queryString);
      const scenarioParam = searchParams.get('scenario');
      if (scenarioParam) {
        setSelectedScenarioForHelp(scenarioParam);
      }
    }
  }, []);

  // Set up hash change listeners for browser back/forward buttons
  useEffect(() => {
    parseHashRoute();

    // Check ?autostart=1 or ?page= in search
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('autostart') === '1') {
      setActivePage('get-help');
      setSelectedScenarioForHelp('money_sent');
      window.location.hash = '#/get-help?scenario=money_sent';
    }

    const handleHashChange = () => {
      parseHashRoute();
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [parseHashRoute]);

  // Handle language change with persistence
  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('suraksha_lang', lang);
    } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Dedicated navigation function that updates URL hash and browser history
  const navigateTo = (page: PageRoute, params?: { scenario?: string }) => {
    setActivePage(page);
    let hashUrl = `#/${page}`;
    if (params?.scenario) {
      setSelectedScenarioForHelp(params.scenario);
      hashUrl += `?scenario=${params.scenario}`;
    }
    if (window.location.hash !== hashUrl) {
      window.location.hash = hashUrl;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenScenario = (scenarioId: string) => {
    navigateTo('get-help', { scenario: scenarioId });
  };

  const handleOpenEvidenceWithScenario = (scenarioId: string) => {
    setActiveEvidenceScenario(scenarioId);
    navigateTo('evidence');
  };

  const t = TRANSLATIONS[currentLang];

  return (
<div className="min-h-screen bg-[#F7F5EF] text-[#20231F] flex flex-col font-sans pb-16 xl:pb-0">      
      {/* Navigation Top Bar with Active Tab Highlighting */}
      <Header
        activePage={activePage}
        currentLang={currentLang}
        onNavigate={navigateTo}
        onLanguageChange={handleLanguageChange}
        t={t}
      />

      {/* Main Container rendering dedicated page based on activePage */}
      <main className="flex-1">
        
        {/* PAGE 1: HOME (Focused entry point) */}
        {activePage === 'home' && (
          <div className="space-y-0">
            {/* Focused Public Assistance Hero */}
            <Hero
              t={t}
              onNeedHelpClick={() => navigateTo('get-help')}
              onStaySafeClick={() => navigateTo('first-hour')}
            />

            {/* Three Illustrated Choices: Money Lost, Account Compromised, Suspicious Call */}
            <ImmediateActionStrip
              t={t}
              onSelectAction={handleOpenScenario}
            />

            {/* Simple Three-Step Explanation */}
            <HowItWorksSection
              t={t}
              onGetHelpClick={() => navigateTo('get-help')}
            />
          </div>
        )}

        {/* PAGE 2: GET HELP (Dedicated interactive step-by-step guidance for 6 scenarios) */}
        {activePage === 'get-help' && (
          <ResponseFlow
            t={t}
            isPage={true}
            initialScenarioId={selectedScenarioForHelp}
            onOpenEvidence={handleOpenEvidenceWithScenario}
            onOpenFamilyAlert={() => navigateTo('family-alert')}
            onNavigatePage={navigateTo}
          />
        )}

        {/* PAGE 3: FIRST HOUR (Dedicated visual timeline) */}
        {activePage === 'first-hour' && (
          <div className="py-6">
            <TimelineSection t={t} />
          </div>
        )}

        {/* PAGE 4: SCAM CHECK (Dedicated warning sign checklist) */}
        {activePage === 'scam-check' && (
          <div className="py-6">
            <RealityCheck
              t={t}
              onOpenFlowForScenario={handleOpenScenario}
            />
          </div>
        )}

        {/* PAGE 5: FAMILY ALERT (Dedicated safety message generator) */}
        {activePage === 'family-alert' && (
          <FamilyAlertSection
            t={t}
            currentLang={currentLang}
          />
        )}

        {/* PAGE 6: EVIDENCE (Dedicated investigation preparation dossier) */}
        {activePage === 'evidence' && (
          <EvidenceAssistant
            t={t}
            activeScenarioId={activeEvidenceScenario}
          />
        )}

        {/* PAGE 7: OFFICIAL HELP (Dedicated verified Indian cyber safety channels) */}
        {activePage === 'official-help' && (
          <div className="py-6">
            <OfficialResources t={t} />
          </div>
        )}

      </main>

      {/* Footer across all pages */}
      <Footer
        t={t}
        onNavigateSection={(sectionId) => {
          if (sectionId === 'how-it-works' || sectionId === 'home') {
            navigateTo('home');
          } else if (sectionId === 'timeline') {
            navigateTo('first-hour');
          } else if (sectionId === 'reality-check') {
            navigateTo('scam-check');
          } else if (sectionId === 'family-alert') {
            navigateTo('family-alert');
          } else if (sectionId === 'evidence-assistant') {
            navigateTo('evidence');
          } else if (sectionId === 'official-resources') {
            navigateTo('official-help');
          }
        }}
        onOpenHelp={() => navigateTo('get-help')}
      />

      {/* Mobile Bottom Quick Navigation Bar (Sticky for thumb access) */}
      <nav
        className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F7F5EF] border-t border-[#20231F]/15 py-1.5 px-3 flex items-center justify-around shadow-lg"
        aria-label="Mobile Bottom Navigation"
      >
        <button
          onClick={() => navigateTo('home')}
          className={`flex flex-col items-center py-1 px-2 rounded-md text-[10px] font-semibold transition-colors ${
            activePage === 'home'
              ? 'text-[#174C3C] font-bold'
              : 'text-[#20231F]/70 hover:text-[#174C3C]'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span>{t.nav.home}</span>
        </button>

        <button
          onClick={() => navigateTo('get-help')}
          className={`flex flex-col items-center py-1 px-2 rounded-md text-[10px] font-semibold transition-colors ${
            activePage === 'get-help'
              ? 'text-[#174C3C] font-bold'
              : 'text-[#20231F]/70 hover:text-[#174C3C]'
          }`}
        >
          <HelpCircle className="w-4 h-4 mb-0.5" />
          <span>{t.nav.getHelp}</span>
        </button>

        <button
          onClick={() => navigateTo('scam-check')}
          className={`flex flex-col items-center py-1 px-2 rounded-md text-[10px] font-semibold transition-colors ${
            activePage === 'scam-check'
              ? 'text-[#174C3C] font-bold'
              : 'text-[#20231F]/70 hover:text-[#174C3C]'
          }`}
        >
          <ShieldAlert className="w-4 h-4 mb-0.5" />
          <span>{t.nav.scamCheck}</span>
        </button>

        <button
          onClick={() => navigateTo('first-hour')}
          className={`flex flex-col items-center py-1 px-2 rounded-md text-[10px] font-semibold transition-colors ${
            activePage === 'first-hour'
              ? 'text-[#174C3C] font-bold'
              : 'text-[#20231F]/70 hover:text-[#174C3C]'
          }`}
        >
          <Clock className="w-4 h-4 mb-0.5" />
          <span>{t.nav.timeline}</span>
        </button>

        <a
          href="tel:1930"
          className="flex flex-col items-center py-1 px-2.5 rounded-md text-[10px] font-bold text-white bg-[#C94B35] shadow-xs"
        >
          <PhoneCall className="w-4 h-4 mb-0.5" />
          <span>1930</span>
        </a>
      </nav>

      {/* AI Cyber First Response Chatbot */}
      <SaathiChatbot currentLang={currentLang} />

    </div>
  );
}
