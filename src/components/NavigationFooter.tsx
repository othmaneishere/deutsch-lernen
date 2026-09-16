import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CoursePage, LanguageMode, ChapterOverview } from '../types';

interface NavigationFooterProps {
  currentPage: CoursePage;
  allPages: CoursePage[];
  chapters: ChapterOverview[];
  onSelectPage: (pageNumber: number) => void;
  languageMode: LanguageMode;
  isCompact?: boolean;
}

export const NavigationFooter: React.FC<NavigationFooterProps> = ({
  currentPage,
  allPages,
  onSelectPage,
}) => {
  const currentIndex = allPages.findIndex((p) => p.pageNumber === currentPage.pageNumber);
  const prevPage = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const nextPage = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  const totalPages = allPages.length || 19;

  return (
    <footer className="pt-8 pb-16">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
        {/* Previous Page Button */}
        {prevPage ? (
          <button
            type="button"
            onClick={() => onSelectPage(prevPage.pageNumber)}
            className="flex-1 sm:max-w-xs flex items-center gap-3.5 px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-900 transition cursor-pointer group shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:-translate-x-1 transition-transform shrink-0" />
            <div className="text-left min-w-0">
              <span className="block text-[10px] uppercase font-mono font-bold tracking-wider text-slate-500">
                Zurück · Seite {prevPage.pageNumber}
              </span>
              <span className="font-bold text-sm text-slate-900 truncate block">
                {prevPage.pageTitleDe}
              </span>
            </div>
          </button>
        ) : (
          <div className="hidden sm:block flex-1 sm:max-w-xs" />
        )}

        {/* Center: Current page */}
        <div className="flex flex-col items-center gap-2.5 py-1">
          <span className="font-mono text-xs font-bold text-slate-600">Seite {currentPage.pageNumber} von {totalPages}</span>
        </div>

        {/* Next Page Button */}
        {nextPage ? (
          <button
            type="button"
            onClick={() => onSelectPage(nextPage.pageNumber)}
            className="flex-1 sm:max-w-xs flex items-center justify-end gap-3.5 px-4 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white transition cursor-pointer group shadow-2xs"
          >
            <div className="text-right min-w-0">
              <span className="block text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">
                Weiter · Seite {nextPage.pageNumber}
              </span>
              <span className="font-bold text-sm text-white truncate block">
                {nextPage.pageTitleDe}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>
        ) : (
          <div className="hidden sm:block flex-1 sm:max-w-xs" />
        )}
      </div>
    </footer>
  );
};
