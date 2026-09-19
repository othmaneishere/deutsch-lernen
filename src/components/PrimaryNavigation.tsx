import React, { useState } from 'react';
import { BookMarked, BookOpen, Library, Menu, X, Languages } from 'lucide-react';

interface PrimaryNavigationProps { active?: 'course' | 'stories' | 'vocabulary' | 'grammar'; className?: string; }

export const PrimaryNavigation: React.FC<PrimaryNavigationProps> = ({ active, className = '' }) => {
  const [open, setOpen] = useState(false);
  const items = [
    { key: 'course' as const, href: '/kurs', label: 'A1 Lehrbuch', Icon: BookOpen },
    { key: 'stories' as const, href: '/geschichten', label: 'Hörgeschichten', Icon: BookMarked },
    { key: 'vocabulary' as const, href: '/wortschatz', label: 'Wortschatz', Icon: Library },
    { key: 'grammar' as const, href: '/grammatik', label: 'Grammatik', Icon: Languages },
  ];
  const linkClass = (key: PrimaryNavigationProps['active']) => `inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition ${active === key ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'}`;
  return <div className={`relative ${className}`}>
    <nav className="hidden items-center gap-1.5 sm:flex" aria-label="Hauptnavigation">{items.map(({ key, href, label, Icon }) => <a key={key} href={href} aria-current={active === key ? 'page' : undefined} className={linkClass(key)}><Icon className="h-4 w-4" /><span>{label}</span></a>)}<a href="/kurs-a2" className="inline-flex items-center rounded-xl bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-700 transition hover:bg-blue-100">A2 Kurs</a></nav>
    <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm sm:hidden" aria-expanded={open} aria-controls="mobile-primary-navigation" aria-label={open ? 'Navigation schließen' : 'Navigation öffnen'}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
    {open && <nav id="mobile-primary-navigation" className="absolute right-0 top-12 z-50 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl sm:hidden" aria-label="Mobile Hauptnavigation">{items.map(({ key, href, label, Icon }) => <a key={key} href={href} aria-current={active === key ? 'page' : undefined} onClick={() => setOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold ${active === key ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'}`}><Icon className="h-4 w-4" /><span>{label}</span></a>)}<a href="/kurs-a2" onClick={() => setOpen(false)} className="mt-1 flex items-center gap-3 rounded-xl border-t border-slate-100 px-3 py-3 text-sm font-semibold text-blue-700">A2 Kurs</a></nav>}
  </div>;
};
