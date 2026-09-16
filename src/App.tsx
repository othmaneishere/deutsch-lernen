import React, { useState, useEffect, useMemo } from 'react';
import { CoursePage, LanguageMode, SectionFilterType } from './types';
import { allPages, getPageByNumber } from './data/pagesData';
import { chaptersOverview } from './data/chaptersData';
import { AppSidebar } from './components/AppSidebar';
import { DashboardNavbar } from './components/DashboardNavbar';
import { ModuleHeroCard } from './components/ModuleHeroCard';
import { VocabularySection } from './components/VocabularySection';
import { DialogueSection } from './components/DialogueSection';
import { TableSection } from './components/TableSection';
import { NumbersSection } from './components/NumbersSection';
import { PronunciationSection } from './components/PronunciationSection';
import { RuleCardSection } from './components/RuleCardSection';
import { ExerciseSection } from './components/ExerciseSection';
import { NavigationFooter } from './components/NavigationFooter';
import { CheatSheetModal } from './components/CheatSheetModal';
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';
import { GlobalAudioPlayerBar } from './components/GlobalAudioPlayerBar';
import { AudioSettingsModal } from './components/AudioSettingsModal';
import { StoriesPage } from './components/StoriesPage';
import { LandingPage } from './components/LandingPage';
import { A2ComingSoonModal } from './components/A2ComingSoonModal';
import { getPlaybackSpeed, subscribeSpeechState } from './utils/speech';

export function App() {
  const getViewFromPath = () => window.location.pathname.startsWith('/geschichten') ? 'stories' : 'course';

  // Primary Navigation View: 'course' (Lehrbuch A1) vs 'stories' (Lesestücke / Geschichten)
  const [activeView, setActiveViewState] = useState<'course' | 'stories'>(() => {
    const pathView = getViewFromPath();
    if (pathView === 'stories') return 'stories';
    // The root URL is always the course. This prevents a persisted Stories
    // preference from hijacking the public A1 Lehrbuch link.
    return 'course';
  });

  const setActiveView = (view: 'course' | 'stories') => {
    setActiveViewState(view);
    window.history.pushState({}, '', view === 'stories' ? '/geschichten' : '/kurs');
  };

  // Saved Language Mode: 'none' (DE only), 'ar', 'en', 'fr'
  const [languageMode, setLanguageMode] = useState<LanguageMode>(() => {
    const saved = localStorage.getItem('deutsch_lang_mode');
    return (saved as LanguageMode) || 'ar'; // default Arabic bilingual
  });

  // Current page number (1..19)
  const [activePageNumber, setActivePageNumber] = useState<number>(() => {
    const saved = localStorage.getItem('deutsch_current_page');
    return saved ? parseInt(saved, 10) : 1;
  });

  // Section filter
  const [sectionFilter, setSectionFilter] = useState<SectionFilterType>('all');

  // Sidebar toggle state (can be collapsed / hidden on both desktop & mobile)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    const saved = localStorage.getItem('deutsch_sidebar_open');
    if (saved !== null) return saved === 'true';
    return false; // Default closed/hidden so the course content starts nice, spacious and wide!
  });

  // Modals
  const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);
  const [showShortcuts, setShowShortcuts] = useState<boolean>(false);
  const [showAudioSettings, setShowAudioSettings] = useState<boolean>(false);
  const [comingSoonLevel, setComingSoonLevel] = useState<'A2' | 'B1' | null>(null);

  // Translations visibility mask
  const [showTranslations, setShowTranslations] = useState<boolean>(true);

  // Audio speed state synced across the app
  const [audioSpeed, setAudioSpeed] = useState<number>(getPlaybackSpeed());

  useEffect(() => {
    const unsub = subscribeSpeechState((s) => {
      setAudioSpeed(s.speed);
    });
    return unsub;
  }, []);

  // Persistence
  useEffect(() => {
    localStorage.setItem('deutsch_active_view', activeView);
  }, [activeView]);

  useEffect(() => {
    const handlePopState = () => setActiveViewState(getViewFromPath());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    localStorage.setItem('deutsch_lang_mode', languageMode);
  }, [languageMode]);

  useEffect(() => {
    localStorage.setItem('deutsch_sidebar_open', String(isSidebarOpen));
  }, [isSidebarOpen]);

  useEffect(() => {
    localStorage.setItem('deutsch_current_page', activePageNumber.toString());
    setSectionFilter('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePageNumber]);

  // Current page object
  const currentPage = useMemo(() => {
    return getPageByNumber(activePageNumber) || allPages[0];
  }, [activePageNumber]);

  // Handle Chapter Switch
  const handleSelectChapter = (chapterNum: number) => {
    const targetChapter = chaptersOverview.find((c) => c.number === chapterNum);
    if (targetChapter) {
      setActivePageNumber(targetChapter.startPage);
    }
  };

  // Toggle Sidebar helper
  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowRight') {
        if (activeView === 'course' && activePageNumber < allPages.length) {
          setActivePageNumber((p) => p + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (activeView === 'course' && activePageNumber > 1) {
          setActivePageNumber((p) => p - 1);
        }
      } else if (e.key === 'b' || e.key === 'B') {
        setIsSidebarOpen((v) => !v);
      } else if (e.key === 's' || e.key === 'S') {
        setShowCheatSheet((v) => !v);
      } else if (e.key === 'v' || e.key === 'V') {
        const nextView = activeView === 'course' ? 'stories' : 'course';
        setActiveView(nextView);
      } else if (e.key === '?') {
        setShowShortcuts((v) => !v);
      } else if (e.key === 'Escape') {
        setShowCheatSheet(false);
        setShowShortcuts(false);
        setShowAudioSettings(false);
        setComingSoonLevel(null);
        if (window.innerWidth < 1024) {
          setIsSidebarOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePageNumber, activeView]);

  // Filter sections logic
  const shouldShowSection = (type: string): boolean => {
    if (sectionFilter === 'all') return true;
    if (sectionFilter === 'vocab' && type === 'vocabulary') return true;
    if (sectionFilter === 'dialogue' && type === 'dialogue') return true;
    if (sectionFilter === 'grammar' && (type === 'table' || type === 'rule_card')) return true;
    if (sectionFilter === 'numbers' && type === 'numbers') return true;
    if (sectionFilter === 'pronunciation' && type === 'pronunciation') return true;
    return false;
  };

  const shouldShowExercises = sectionFilter === 'all' || sectionFilter === 'exercises';

  if (window.location.pathname === '/') {
    return <LandingPage />;
  }

  if (activeView === 'stories') {
    return (
      <>
        <StoriesPage
          languageMode={languageMode}
          onOpenAudioSettings={() => setShowAudioSettings(true)}
          onOpenLevelComingSoon={(lvl) => setComingSoonLevel(lvl)}
        />
        <AudioSettingsModal
          isOpen={showAudioSettings}
          onClose={() => setShowAudioSettings(false)}
          languageMode={languageMode}
        />
        <A2ComingSoonModal
          isOpen={comingSoonLevel !== null}
          onClose={() => setComingSoonLevel(null)}
          languageMode={languageMode}
          levelRequested={comingSoonLevel || 'A2'}
        />
      </>
    );
  }

  return (
    <div className="study-shell min-h-screen text-slate-900 selection:bg-indigo-200 selection:text-slate-950 flex flex-row font-reading">
      {/* Collapsible Left Sidebar with All Settings */}
      <AppSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        currentChapterNumber={currentPage.chapterNumber}
        currentPageNumber={activePageNumber}
        totalPages={allPages.length}
        onSelectChapter={handleSelectChapter}
        onSelectPage={setActivePageNumber}
        languageMode={languageMode}
        onLanguageChange={setLanguageMode}
        onOpenCheatSheet={() => setShowCheatSheet(true)}
        activeView={activeView}
        onSelectView={setActiveView}
        onOpenAudioSettings={() => setShowAudioSettings(true)}
        onOpenLevelComingSoon={(lvl) => setComingSoonLevel(lvl)}
        showTranslations={showTranslations}
        onToggleTranslations={() => setShowTranslations((v) => !v)}
        audioSpeed={audioSpeed}
        onSpeedChange={setAudioSpeed}
      />

      {/* Main Reading & Learning Canvas */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        {/* Top Navbar - Clean and uncluttered */}
        <DashboardNavbar
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={handleToggleSidebar}
          currentPage={currentPage}
          totalPages={allPages.length}
          languageMode={languageMode}
          activeView={activeView}
          onSelectView={setActiveView}
          onOpenLevelComingSoon={(lvl) => setComingSoonLevel(lvl)}
        />

        {/* View Switch Rendering */}
        {
          /* Focused Course Workspace View - Wider when sidebar is closed */
          <main
            className={`flex-1 w-full mx-auto px-4 sm:px-8 lg:px-12 py-8 space-y-8 transition-all duration-300 ${
              isSidebarOpen ? 'max-w-5xl' : 'max-w-6xl'
            }`}
          >
            {/* Active Module & Scenario Visual Hero Card */}
            <ModuleHeroCard
              currentPage={currentPage}
              languageMode={languageMode}
              onSelectFilter={setSectionFilter}
            />

            {/* Content Sections with generous spacing */}
            <div className="space-y-6">
              {currentPage.sections.map((section) => {
                if (!shouldShowSection(section.type)) return null;

                if (section.type === 'vocabulary') {
                  return (
                    <div key={section.id} id="section-vocabulary">
                      <VocabularySection
                        section={section}
                        languageMode={languageMode}
                        showTranslations={showTranslations}
                      />
                    </div>
                  );
                }

                if (section.type === 'dialogue') {
                  return (
                    <div key={section.id} id="section-dialogue">
                      <DialogueSection
                        section={section}
                        languageMode={languageMode}
                        showTranslations={showTranslations}
                      />
                    </div>
                  );
                }

                if (section.type === 'table') {
                  return (
                    <TableSection
                      key={section.id}
                      section={section}
                      languageMode={languageMode}
                      showTranslations={showTranslations}
                    />
                  );
                }

                if (section.type === 'numbers') {
                  return (
                    <NumbersSection
                      key={section.id}
                      section={section}
                      languageMode={languageMode}
                    />
                  );
                }

                if (section.type === 'pronunciation') {
                  return (
                    <PronunciationSection
                      key={section.id}
                      section={section}
                      languageMode={languageMode}
                    />
                  );
                }

                if (section.type === 'rule_card') {
                  return (
                    <RuleCardSection
                      key={section.id}
                      section={section}
                      languageMode={languageMode}
                    />
                  );
                }

                return null;
              })}
            </div>

            {/* Interactive Exercises */}
            {shouldShowExercises && currentPage.exercises && currentPage.exercises.length > 0 && (
              <div id="section-exercises" className="space-y-5 pt-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                    <h2 className="font-bold text-slate-900 text-xl tracking-tight">
                      Übungen zum Modul
                    </h2>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                      {currentPage.exercises.length} Aufgaben
                    </span>
                  </div>
                </div>

                {currentPage.exercises.map((exercise) => (
                  <ExerciseSection
                    key={exercise.id}
                    exercise={exercise}
                    languageMode={languageMode}
                    pageId={currentPage.pageNumber}
                  />
                ))}
              </div>
            )}

            {/* Clean Navigation Footer */}
            <NavigationFooter
              currentPage={currentPage}
              allPages={allPages}
              chapters={chaptersOverview}
              onSelectPage={setActivePageNumber}
              languageMode={languageMode}
            />
          </main>
        }
      </div>

      {/* Global Audio Control Bar */}
      <GlobalAudioPlayerBar />

      {/* Audio Options Modal */}
      <AudioSettingsModal
        isOpen={showAudioSettings}
        onClose={() => setShowAudioSettings(false)}
        languageMode={languageMode}
      />

      {/* A1 Cheat Sheet (Spickzettel) */}
      <CheatSheetModal
        isOpen={showCheatSheet}
        onClose={() => setShowCheatSheet(false)}
        languageMode={languageMode}
      />

      {/* Keyboard Shortcuts Guide */}
      <KeyboardShortcutsModal
        isOpen={showShortcuts}
        onClose={() => setShowShortcuts(false)}
      />

      {/* A2 / B1 Level Coming Soon Modal */}
      <A2ComingSoonModal
        isOpen={comingSoonLevel !== null}
        onClose={() => setComingSoonLevel(null)}
        languageMode={languageMode}
        levelRequested={comingSoonLevel || 'A2'}
      />
    </div>
  );
}

export default App;
