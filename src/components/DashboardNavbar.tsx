import React from 'react';
import {
  PanelLeftClose,
  PanelLeftOpen,
  BookOpen,
  BookMarked,
  Library,
} from 'lucide-react';
import { CoursePage, LanguageMode } from '../types';
import { getUnitForChapter, getUnitTitle } from '../data/courseUnits';
import { chaptersOverview } from '../data/chaptersData';

interface DashboardNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  currentPage: CoursePage;
  totalPages: number;
  languageMode: LanguageMode;
  activeView: 'course' | 'stories';
  onSelectView: (view: 'course' | 'stories') => void;
  onOpenLevelComingSoon?: (level: 'A2' | 'B1') => void;
}

export const DashboardNavbar: React.FC<DashboardNavbarProps> = ({
  isSidebarOpen,
  onToggleSidebar,
  currentPage,
  totalPages,
  languageMode,
  activeView,
  onSelectView,
  onOpenLevelComingSoon,
}) => {
  const currentUnit = getUnitForChapter(currentPage.chapterNumber);
  const chapterInfo = chaptersOverview.find((c) => c.number === currentPage.chapterNumber);

  return (
    <header
      id="dashboard-navbar"
      className="app-topbar sticky top-0 z-30 bg-white/60 backdrop-blur-2xl border-b border-white/70 px-4 sm:px-8 py-3 flex items-center justify-between gap-4 shadow-sm"
    >
      {/* Left: Sidebar Toggle & Contextual Course Indicator */}
      <div className="flex items-center gap-3.5 min-w-0">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-xs font-bold transition cursor-pointer shadow-2xs"
          title={isSidebarOpen ? 'Seitenleiste verbergen (mehr Platz)' : 'Seitenleiste anzeigen'}
          aria-label={isSidebarOpen ? 'Seitenleiste verbergen' : 'Seitenleiste anzeigen'}
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="w-4 h-4 text-slate-700" />
          ) : (
            <PanelLeftOpen className="w-4 h-4 text-slate-700" />
          )}
          <span className="hidden sm:inline">
            {isSidebarOpen ? 'Leiste schließen' : 'Menü & Einstellungen'}
          </span>
        </button>

        <span className="text-slate-300 hidden md:inline">/</span>

        {activeView === 'course' ? (
          <div className="flex items-center gap-2 min-w-0 flex-wrap">
            <span
              className={`hidden md:inline-flex text-xs font-bold px-2.5 py-0.5 rounded-md border ${currentUnit.color.bgBadge}`}
            >
              {currentUnit.level} · {getUnitTitle(currentUnit, languageMode).split(':')[0]}
            </span>

            <span className="text-slate-300 hidden md:inline">/</span>

            <div className="min-w-0 flex items-center gap-2">
              <h2 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                {chapterInfo?.titleDe.replace(/^Kapitel \d+ – /, '') || currentPage.titleDe}
              </h2>
              <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                Seite {currentPage.pageNumber} / {totalPages}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 min-w-0">
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 truncate flex items-center gap-2">
              <span>Hörgeschichten</span>
              <span className="text-xs px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold border border-slate-200">
                A1 Lesestücke mit Audio
              </span>
            </h2>
          </div>
        )}
      </div>

      {/* Right: Primary Views Switcher (A1 Lehrbuch vs Hörgeschichten) */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="inline-flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-2xs">
          <a
            href="/kurs"
            aria-current={activeView === 'course' ? 'page' : undefined}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeView === 'course'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-slate-700" />
            <span className="hidden sm:inline">A1 Lehrbuch</span>
            <span className="sm:hidden">Kurs</span>
          </a>

          <a
            href="/geschichten"
            aria-current={activeView === 'stories' ? 'page' : undefined}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeView === 'stories'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookMarked className={`w-3.5 h-3.5 ${activeView === 'stories' ? 'text-white' : 'text-slate-700'}`} />
            <span className="hidden sm:inline">Hörgeschichten</span>
            <span className="sm:hidden">Audio</span>
          </a>

          <a
            href="/wortschatz"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 transition cursor-pointer"
            title="Wortschatz öffnen"
          >
            <Library className="w-3.5 h-3.5 text-slate-700" />
            <span className="hidden sm:inline">Wortschatz</span>
          </a>
        </div>
      </div>
    </header>
  );
};
