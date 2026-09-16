import React from 'react';
import { ArrowLeft, BookOpen, BriefcaseBusiness, Carrot, GraduationCap, Home, ShoppingBasket, Utensils } from 'lucide-react';

const groups = [
  { title: 'Im Büro', icon: BriefcaseBusiness, color: 'bg-indigo-50 text-indigo-700', words: ['der Schreibtisch', 'der Computer', 'der Drucker', 'das Telefon', 'die E-Mail', 'der Termin', 'die Besprechung', 'der Kollege'] },
  { title: 'Essen', icon: Utensils, color: 'bg-orange-50 text-orange-700', words: ['das Brot', 'der Käse', 'die Suppe', 'der Reis', 'das Fleisch', 'der Fisch', 'das Ei', 'das Wasser'] },
  { title: 'Obst', icon: Carrot, color: 'bg-rose-50 text-rose-700', words: ['der Apfel', 'die Banane', 'die Orange', 'die Birne', 'die Traube', 'die Erdbeere', 'die Zitrone', 'die Kirsche'] },
  { title: 'In der Schule', icon: GraduationCap, color: 'bg-sky-50 text-sky-700', words: ['die Schule', 'der Lehrer', 'der Schüler', 'das Buch', 'das Heft', 'der Stift', 'die Aufgabe', 'die Prüfung'] },
  { title: 'Zu Hause', icon: Home, color: 'bg-emerald-50 text-emerald-700', words: ['das Zimmer', 'die Küche', 'das Bad', 'der Tisch', 'der Stuhl', 'das Bett', 'die Tür', 'das Fenster'] },
  { title: 'Einkaufen', icon: ShoppingBasket, color: 'bg-violet-50 text-violet-700', words: ['der Laden', 'der Markt', 'der Preis', 'das Geld', 'die Kasse', 'die Tasche', 'kaufen', 'bezahlen'] },
];

export const VocabularyPage: React.FC = () => (
  <div className="min-h-screen bg-[#f7f8fa] text-slate-900 font-reading">
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <a href="/kurs" className="flex items-center gap-3" aria-label="Zum Kurs">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white">DE</span>
          <span className="hidden sm:block"><span className="block text-sm font-extrabold tracking-tight">Deutsch Lernen</span><span className="block text-[11px] font-medium text-slate-500">Wortschatz kompakt</span></span>
        </a>
        <nav className="flex items-center gap-2" aria-label="Hauptnavigation">
          <a href="/kurs" className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-100"><ArrowLeft className="h-4 w-4" /><span className="hidden sm:inline">Zum Kurs</span></a>
          <a href="/geschichten" className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-100"><BookOpen className="h-4 w-4" /><span className="hidden sm:inline">Geschichten</span></a>
        </nav>
      </div>
    </header>
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-12">
      <div className="mb-7 flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">Wortschatz</p><h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Deutsch für jeden Tag</h1></div><span className="hidden rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-500 shadow-sm sm:inline-flex">48 Wörter</span></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ title, icon: Icon, color, words }) => <section key={title} className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><div className="mb-4 flex items-center gap-3"><span className={`flex h-10 w-10 items-center justify-center rounded-2xl ${color}`}><Icon className="h-5 w-5" /></span><h2 className="text-lg font-extrabold">{title}</h2></div><div className="grid grid-cols-2 gap-x-4 gap-y-2">{words.map((word) => <span key={word} className="border-b border-slate-100 pb-1 text-sm font-medium text-slate-700">{word}</span>)}</div></section>)}
      </div>
    </main>
  </div>
);
