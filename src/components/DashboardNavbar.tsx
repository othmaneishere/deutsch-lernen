import React from 'react';
import {
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
import { ChapterOverview, CoursePage, LanguageMode } from '../types';
import { CourseUnit, getUnitForChapter, getUnitTitle } from '../data/courseUnits';
import { chaptersOverview as defaultChapters } from '../data/chaptersData';
import { PrimaryNavigation } from './PrimaryNavigation';

interface DashboardNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  currentPage: CoursePage;
  totalPages: number;
  languageMode: LanguageMode;
  activeView: 'course' | 'stories';
  onSelectView: (view: 'course' | 'stories') => void;
  onOpenLevelComingSoon?: (level: 'A2' | 'B1') => void;
  courseUnitsOverride?: CourseUnit[];
  chaptersOverride?: ChapterOverview[];
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
  courseUnitsOverride,
  chaptersOverride,
}) => {
  const currentUnit = courseUnitsOverride
    ? courseUnitsOverride.find((unit) => unit.chapterNumbers.includes(currentPage.chapterNumber)) || courseUnitsOverride[0]
    : getUnitForChapter(currentPage.chapterNumber);
  const chapterInfo = (chaptersOverride || defaultChapters).find((c) => c.number === currentPage.chapterNumber);

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

      <PrimaryNavigation active="course" className="shrink-0" />
    </header>
  );
};
