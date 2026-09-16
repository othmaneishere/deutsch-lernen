import React from 'react';
import { BookOpen, BookMarked, Volume2 } from 'lucide-react';
import { LanguageMode } from '../types';
import { GermanStoriesLounge } from './GermanStoriesLounge';

interface StoriesPageProps {
  languageMode: LanguageMode;
  onOpenAudioSettings: () => void;
  onOpenLevelComingSoon: (level: 'A2' | 'B1') => void;
}

export const StoriesPage: React.FC<StoriesPageProps> = ({
  languageMode,
  onOpenAudioSettings,
  onOpenLevelComingSoon,
}) => (
  <div className="stories-page min-h-screen bg-[#f7f8fa] text-slate-900 font-reading">
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
          <a href="/kurs" className="flex items-center gap-3" aria-label="Zum A1 Lehrbuch">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white">DE</span>
          <span className="hidden sm:block">
            <span className="block text-sm font-extrabold tracking-tight">Deutsch Lernen</span>
            <span className="block text-[11px] font-medium text-slate-500">A1 Sprachstudio</span>
          </span>
        </a>

        <nav className="flex items-center gap-2" aria-label="Hauptnavigation">
          <a href="/" className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">A1 Lehrbuch</span>
          </a>
          <a href="/geschichten" aria-current="page" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-bold text-white shadow-sm">
            <BookMarked className="h-4 w-4" />
            <span>Geschichten</span>
          </a>
          <button type="button" onClick={onOpenAudioSettings} className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950" aria-label="Audio-Einstellungen öffnen" title="Audio-Einstellungen">
            <Volume2 className="h-4 w-4" />
          </button>
        </nav>
      </div>
    </header>

    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-8 lg:px-12">
      <GermanStoriesLounge
        languageMode={languageMode}
        onSwitchToCourse={() => { window.location.href = '/kurs'; }}
        onOpenAudioSettings={onOpenAudioSettings}
        onOpenLevelComingSoon={onOpenLevelComingSoon}
      />
    </main>
  </div>
);
