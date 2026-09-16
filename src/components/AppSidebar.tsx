import React, { useState } from 'react';
import {
  FileText,
  ChevronDown,
  ChevronRight,
  Languages,
  PanelLeftClose,
  BookOpen,
  Volume2,
  BookMarked,
  Eye,
  EyeOff,
  Gauge,
  Sliders,
} from 'lucide-react';
import { LanguageMode } from '../types';
import { courseUnits } from '../data/courseUnits';
import { chaptersOverview } from '../data/chaptersData';
import { allPages } from '../data/pagesData';
import { getPlaybackSpeed, setPlaybackSpeed } from '../utils/speech';
import { moduleScenes } from '../utils/moduleAssets';

interface AppSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentChapterNumber: number;
  currentPageNumber: number;
  totalPages: number;
  onSelectChapter: (chapterNum: number) => void;
  onSelectPage?: (pageNumber: number) => void;
  languageMode: LanguageMode;
  onLanguageChange: (mode: LanguageMode) => void;
  onOpenCheatSheet: () => void;
  activeView: 'course' | 'stories';
  onSelectView: (view: 'course' | 'stories') => void;
  onOpenAudioSettings?: () => void;
  onOpenLevelComingSoon?: (level: 'A2' | 'B1') => void;
  showTranslations?: boolean;
  onToggleTranslations?: () => void;
  audioSpeed?: number;
  onSpeedChange?: (speed: number) => void;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  isOpen,
  onClose,
  currentChapterNumber,
  currentPageNumber,
  totalPages,
  onSelectChapter,
  onSelectPage,
  languageMode,
  onLanguageChange,
  onOpenCheatSheet,
  activeView,
  onSelectView,
  onOpenAudioSettings,
  onOpenLevelComingSoon,
  showTranslations = true,
  onToggleTranslations,
  audioSpeed = 1.0,
  onSpeedChange,
}) => {
  const [openUnits, setOpenUnits] = useState<{ [unitId: number]: boolean }>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  const toggleUnit = (unitId: number) => {
    setOpenUnits((prev) => ({
      ...prev,
      [unitId]: !prev[unitId],
    }));
  };

  const languageOptions: { id: LanguageMode; label: string; short: string; flag: string }[] = [
    { id: 'none', label: 'Deutsch', short: 'DE', flag: '🇩🇪' },
    { id: 'ar', label: 'العربية', short: 'عر', flag: '🇸🇦' },
    { id: 'en', label: 'English', short: 'EN', flag: '🇬🇧' },
    { id: 'fr', label: 'Français', short: 'FR', flag: '🇫🇷' },
  ];

  const progressPercent = Math.round((currentPageNumber / (totalPages || 19)) * 100);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Primary Sidebar Container */}
      <aside
        id="app-sidebar"
        className={`app-sidebar fixed lg:sticky top-0 left-0 z-40 h-screen w-80 sm:w-84 bg-white/75 border-r border-white/70 shadow-xl lg:shadow-none flex flex-col shrink-0 transition-transform duration-300 ease-in-out backdrop-blur-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:hidden'
        }`}
      >
        {/* Top Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-3 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              DE
            </div>
            <div>
              <h1 className="font-bold text-sm text-slate-900 leading-tight">
                Deutsch Kurs
              </h1>
              <p className="text-[11px] text-slate-500 font-medium">
                {languageMode === 'ar'
                  ? 'المنهج الدراسي المعتمد'
                  : languageMode === 'en'
                  ? 'Standard Curriculum'
                  : languageMode === 'fr'
                  ? 'Programme standard'
                  : 'Strukturierter Lehrplan'}
              </p>
            </div>
          </div>

          {/* Hide Sidebar Button */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            title="Seitenleiste ausblenden"
            aria-label="Seitenleiste ausblenden"
          >
            <PanelLeftClose className="w-5 h-5" />
          </button>
        </div>

        {/* Primary View Switcher Tabs (Course vs Stories) */}
        <div className="p-3.5 border-b border-slate-100 bg-white space-y-1.5">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1">
            Bereich
          </div>
          <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-xl">
            <a
              href="/"
              className={`py-2 px-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                activeView === 'course'
                  ? 'bg-white text-slate-950 shadow-2xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-700" />
              <span>A1 Lehrbuch</span>
            </a>

            <a
              href="/geschichten"
              className={`py-2 px-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                activeView === 'stories'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <BookMarked className={`w-3.5 h-3.5 ${activeView === 'stories' ? 'text-white' : 'text-slate-600'}`} />
              <span>Geschichten</span>
            </a>
          </div>
        </div>

        {/* Course Units Accordion Navigation */}
        <div className="flex-1 overflow-y-auto px-3.5 py-3 space-y-3 scrollbar-thin">
          <div className="px-1 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Kapitelübersicht
            </span>
            <span className="text-[10px] font-bold text-slate-500">
              {chaptersOverview.length} Kapitel
            </span>
          </div>

          {courseUnits.map((unit) => {
            const isExpanded = openUnits[unit.id] ?? false;
            const containsActiveChapter = unit.chapterNumbers.includes(currentChapterNumber);

            return (
              <div
                key={unit.id}
                className="rounded-2xl border border-slate-200/90 overflow-hidden bg-slate-50/50"
              >
                {/* Unit Header Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggleUnit(unit.id)}
                  className={`w-full p-2.5 text-left flex items-center justify-between transition cursor-pointer ${
                    containsActiveChapter
                      ? 'bg-white font-bold border-b border-slate-200/80'
                      : 'hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${unit.color.dotColor}`} />
                    <span className="text-xs font-bold text-slate-900 truncate">
                      {unit.titleDe}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 shrink-0">
                    <span className="text-[10px] font-mono">
                      {unit.chapterNumbers.length}
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {/* Chapter List */}
                {isExpanded && (
                  <div className="p-1.5 space-y-1 bg-white">
                    {unit.chapterNumbers.map((chNum) => {
                      const chData = chaptersOverview.find((c) => c.number === chNum);
                      if (!chData) return null;
                      const chapterPages = allPages.filter((page) => page.chapterNumber === chNum);
                      return chapterPages.map((page) => {
                        const isActive = page.pageNumber === currentPageNumber;
                        const scene = moduleScenes[chNum];
                        return (
                          <button
                            key={page.pageNumber}
                            type="button"
                            onClick={() => {
                              if (onSelectPage) onSelectPage(page.pageNumber);
                              else onSelectChapter(chNum);
                              if (activeView !== 'course') onSelectView('course');
                              if (window.innerWidth < 1024) onClose();
                            }}
                            className={`w-full px-2 py-1.5 rounded-xl text-left text-xs transition flex items-center justify-between gap-2.5 cursor-pointer ${
                              isActive && activeView === 'course'
                                ? 'bg-slate-900 text-white font-bold shadow-2xs'
                                : 'text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0 truncate">
                              {scene?.imageSrc ? (
                                <img
                                  src={scene.imageSrc}
                                  alt={`K${chNum}`}
                                  referrerPolicy="no-referrer"
                                  onError={(e) => {
                                    const filename = scene.imageSrc.split('/').pop();
                                    if (filename) {
                                      const fallback = `/images/${filename}`;
                                      if (e.currentTarget.src !== fallback && !e.currentTarget.src.endsWith(fallback)) e.currentTarget.src = fallback;
                                    }
                                  }}
                                  className="w-11 h-11 rounded-xl object-cover shrink-0 border border-white/90"
                                />
                              ) : (
                                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold shrink-0 ${isActive && activeView === 'course' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'}`}>
                                  S.{page.pageNumber}
                                </span>
                              )}
                              <div className="truncate">
                                <span className="truncate block font-semibold leading-tight">{page.pageTitleDe}</span>
                                <span className={`text-[10px] font-mono block ${isActive && activeView === 'course' ? 'text-slate-300' : 'text-slate-400'}`}>
                                  K{chNum < 10 ? `0${chNum}` : chNum} · S. {page.pageNumber}
                                </span>
                              </div>
                            </div>
                          </button>
                        );
                      });
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SETTINGS SECTION: compact icon-only controls */}
        <div className="options-panel mx-2 mb-2 rounded-2xl border border-slate-200/70 bg-white/80 p-2.5 shadow-sm">
          <div className="flex items-center justify-between px-1 pb-2">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-500">Optionen</p>
              <p className="mt-0.5 text-[10px] text-slate-400">Lernen personalisieren</p>
            </div>
            <span className="material-symbols-rounded options-heading-icon" aria-hidden="true">tune</span>
          </div>

          {/* 1. Language Mode Selector */}
          <div className="space-y-1">
            <div className="options-language grid grid-cols-4 gap-1 rounded-xl bg-slate-100/80 p-1">
              {languageOptions.map((opt) => {
                const isSelected = languageMode === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onLanguageChange(opt.id)}
                    className={`h-10 rounded-lg text-xs font-bold flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                    title={opt.label}
                  >
                    <span className="text-sm leading-none" aria-hidden="true">{opt.flag}</span>
                    <span className="text-[9px] font-extrabold leading-none">{opt.short}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Translations Toggle */}
          {onToggleTranslations && (
            <div className="options-actions mt-2 grid grid-cols-4 items-stretch gap-1 border-t border-slate-200/70 pt-2">
              <button
                type="button"
                onClick={onToggleTranslations}
                aria-label={showTranslations ? 'Übersetzungen ausblenden' : 'Übersetzungen anzeigen'}
                title={showTranslations ? 'Übersetzungen ausblenden' : 'Übersetzungen anzeigen'}
                className={`options-action h-11 rounded-lg flex flex-col items-center justify-center gap-0.5 transition cursor-pointer ${
                  showTranslations
                    ? 'text-slate-900 hover:bg-slate-100'
                    : 'text-slate-400 hover:bg-slate-100'
                }`}
              >
                <span className="material-symbols-rounded text-[18px]">{showTranslations ? 'visibility' : 'visibility_off'}</span>
                <span className="text-[8px] font-bold">Text</span>
              </button>
              <button type="button" onClick={() => { const next = audioSpeed === 1 ? 0.8 : 1; setPlaybackSpeed(next); onSpeedChange?.(next); }} className="options-action h-11 rounded-lg text-slate-700 hover:bg-slate-100 flex flex-col items-center justify-center gap-0.5" aria-label={`Sprechtempo ${audioSpeed.toFixed(1)}x`} title={`Sprechtempo ${audioSpeed.toFixed(1)}x`}><span className="material-symbols-rounded text-[18px]">speed</span><span className="text-[8px] font-bold">Tempo</span></button>
              {onOpenAudioSettings && (
                <button type="button" onClick={onOpenAudioSettings} aria-label="Audio-Optionen öffnen" title="Audio-Optionen" className="options-action h-11 rounded-lg bg-transparent hover:bg-slate-100 text-slate-800 transition flex flex-col items-center justify-center gap-0.5 cursor-pointer"><span className="material-symbols-rounded text-[18px]">volume_up</span><span className="text-[8px] font-bold">Audio</span></button>
              )}
              <button type="button" onClick={onOpenCheatSheet} aria-label="A1 Grammatikübersicht öffnen" title="A1 Grammatikübersicht" className="options-action h-11 rounded-lg bg-transparent hover:bg-slate-100 text-slate-800 transition flex flex-col items-center justify-center gap-0.5 cursor-pointer"><span className="material-symbols-rounded text-[18px]">menu_book</span><span className="text-[8px] font-bold">Grammatik</span></button>
            </div>
          )}

          {/* Course Progress Indicator */}
          <div className="pt-0.5">
            <div className="flex items-center justify-between text-[9px] text-slate-400 font-semibold mb-1">
              <span>Fortschritt A1</span>
              <span className="font-mono font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-slate-900 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
