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
  Lock,
  Eye,
  EyeOff,
  Gauge,
  Sliders,
} from 'lucide-react';
import { LanguageMode } from '../types';
import { courseUnits } from '../data/courseUnits';
import { chaptersOverview } from '../data/chaptersData';
import { getPlaybackSpeed, setPlaybackSpeed } from '../utils/speech';
import { moduleScenes } from '../utils/moduleAssets';

interface AppSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentChapterNumber: number;
  currentPageNumber: number;
  totalPages: number;
  onSelectChapter: (chapterNum: number) => void;
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

  const speedOptions = [0.8, 0.9, 1.0];

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
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-80 sm:w-84 bg-white border-r border-slate-200/90 shadow-xl lg:shadow-none flex flex-col shrink-0 transition-transform duration-300 ease-in-out ${
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

        {/* Level Category Selector: A1 (Active) vs A2 (Coming Soon) & B1 */}
        <div className="p-3.5 border-b border-slate-100 bg-slate-50/60 space-y-2">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1">
            <span>Sprachniveau</span>
            <span className="text-emerald-700 font-bold">A1 Aktiv</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-200/70 rounded-xl">
            {/* A1 Active */}
            <button
              type="button"
              className="py-1.5 px-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 bg-white text-slate-900 shadow-2xs cursor-default"
            >
              <span>A1</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </button>

            {/* A2 Coming Soon */}
            <button
              type="button"
              onClick={() => onOpenLevelComingSoon && onOpenLevelComingSoon('A2')}
              className="py-1.5 px-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/60 transition flex items-center justify-center gap-1 cursor-pointer"
              title="A2 ist in Vorbereitung (Klicken für Info)"
            >
              <span>A2</span>
              <span className="text-[9px] px-1 rounded bg-amber-100 text-amber-800 font-bold border border-amber-300">
                Bald
              </span>
            </button>

            {/* B1 Coming Soon */}
            <button
              type="button"
              onClick={() => onOpenLevelComingSoon && onOpenLevelComingSoon('B1')}
              className="py-1.5 px-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-slate-700 hover:bg-white/60 transition flex items-center justify-center gap-1 cursor-pointer"
              title="B1 ist in Planung"
            >
              <span>B1</span>
              <Lock className="w-2.5 h-2.5 text-slate-400" />
            </button>
          </div>
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
                      const isActive = chNum === currentChapterNumber;
                      const scene = moduleScenes[chNum];

                      return (
                        <button
                          key={chNum}
                          type="button"
                          onClick={() => {
                            onSelectChapter(chNum);
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
                            {/* Chapter Thumbnail Preview */}
                            {scene?.imageSrc ? (
                              <img
                                src={scene.imageSrc}
                                alt={`K${chNum}`}
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                  const filename = scene.imageSrc.split('/').pop();
                                  if (filename) {
                                    const fallback = `/images/${filename}`;
                                    if (e.currentTarget.src !== fallback && !e.currentTarget.src.endsWith(fallback)) {
                                      e.currentTarget.src = fallback;
                                    }
                                  }
                                }}
                                className="w-8 h-8 rounded-lg object-cover shrink-0 border border-slate-200/80"
                              />
                            ) : (
                              <span
                                className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold shrink-0 ${
                                  isActive && activeView === 'course'
                                    ? 'bg-white/20 text-white'
                                    : 'bg-slate-100 text-slate-700'
                                }`}
                              >
                                K{chNum < 10 ? `0${chNum}` : chNum}
                              </span>
                            )}
                            <div className="truncate">
                              <span className="truncate block font-semibold leading-tight">
                                {chData.titleDe.replace(/^Kapitel \d+ – /, '')}
                              </span>
                              <span
                                className={`text-[10px] font-mono block ${
                                  isActive && activeView === 'course'
                                    ? 'text-slate-300'
                                    : 'text-slate-400'
                                }`}
                              >
                                K{chNum < 10 ? `0${chNum}` : chNum} · S. {chData.startPage}
                              </span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SETTINGS SECTION: compact icon-only controls */}
        <div className="px-2.5 py-2 border-t border-slate-200 bg-slate-50 space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">Optionen</span>
            <Sliders className="w-3 h-3 text-slate-300" aria-hidden="true" />
          </div>

          {/* 1. Language Mode Selector */}
          <div className="space-y-1">
            <div className="grid grid-cols-4 gap-1 p-1 bg-white/80 rounded-xl border border-slate-200/80">
              {languageOptions.map((opt) => {
                const isSelected = languageMode === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onLanguageChange(opt.id)}
                    className={`h-7 rounded-lg text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                    title={opt.label}
                  >
                    <span className="text-sm leading-none">{opt.flag}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Translations Toggle */}
          {onToggleTranslations && (
            <div className="grid grid-cols-4 gap-1 p-1 bg-white/80 rounded-xl border border-slate-200/80">
              <button
                type="button"
                onClick={onToggleTranslations}
                aria-label={showTranslations ? 'Übersetzungen ausblenden' : 'Übersetzungen anzeigen'}
                title={showTranslations ? 'Übersetzungen ausblenden' : 'Übersetzungen anzeigen'}
                className={`h-7 rounded-lg flex items-center justify-center transition cursor-pointer ${
                  showTranslations
                    ? 'text-slate-900 hover:bg-slate-100'
                    : 'text-slate-400 hover:bg-slate-100'
                }`}
              >
                {showTranslations ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
              <button type="button" onClick={() => { const next = audioSpeed === 1 ? 0.8 : 1; setPlaybackSpeed(next); onSpeedChange?.(next); }} className="h-7 rounded-lg text-slate-700 hover:bg-slate-100 font-mono text-xs font-bold flex items-center justify-center" aria-label={`Sprechtempo ${audioSpeed.toFixed(1)}x`} title={`Sprechtempo ${audioSpeed.toFixed(1)}x`}><Gauge className="h-3.5 w-3.5" /></button>
            </div>
          )}

          {/* 3. Audio options */}
          {onOpenAudioSettings && (
            <button
              type="button"
              onClick={onOpenAudioSettings}
              aria-label="Audio-Optionen öffnen"
              title="Audio-Optionen"
              className="h-7 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 transition flex items-center justify-center cursor-pointer shadow-2xs"
            >
              <Volume2 className="w-3.5 h-3.5 text-slate-700" />
            </button>
          )}

          {/* 4. Grammar cheat sheet */}
          <button
            type="button"
            onClick={onOpenCheatSheet}
            aria-label="A1 Grammatikübersicht öffnen"
            title="A1 Grammatikübersicht"
            className="h-7 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 transition flex items-center justify-center cursor-pointer shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5 text-slate-700" />
          </button>

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
