import React from 'react';
import { BookMarked, BookOpen, Library } from 'lucide-react';

interface PrimaryNavigationProps {
  active?: 'course' | 'stories' | 'vocabulary';
  className?: string;
}

export const PrimaryNavigation: React.FC<PrimaryNavigationProps> = ({ active, className = '' }) => {
  const linkClass = (key: PrimaryNavigationProps['active']) => `inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition ${active === key ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'}`;
  return (
    <nav className={`flex items-center gap-1.5 ${className}`} aria-label="Hauptnavigation">
      <a href="/kurs" aria-current={active === 'course' ? 'page' : undefined} className={linkClass('course')}><BookOpen className="h-4 w-4" /><span>A1 Lehrbuch</span></a>
      <a href="/geschichten" aria-current={active === 'stories' ? 'page' : undefined} className={linkClass('stories')}><BookMarked className="h-4 w-4" /><span>Hörgeschichten</span></a>
      <a href="/wortschatz" aria-current={active === 'vocabulary' ? 'page' : undefined} className={linkClass('vocabulary')}><Library className="h-4 w-4" /><span>Wortschatz</span></a>
    </nav>
  );
};
