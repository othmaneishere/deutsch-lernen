import { LanguageMode } from '../types';

export interface CourseUnit {
  id: number;
  number: number;
  level: 'A1.1' | 'A1.2';
  titleDe: string;
  titleAr: string;
  titleEn: string;
  titleFr: string;
  descDe: string;
  descAr: string;
  descEn: string;
  descFr: string;
  chapterNumbers: number[];
  color: {
    name: string;
    gradient: string;
    bgBadge: string;
    textBadge: string;
    borderAccent: string;
    lightBg: string;
    activeTab: string;
    dotColor: string;
    ring: string;
  };
}

export const courseUnits: CourseUnit[] = [
  {
    id: 1,
    number: 1,
    level: 'A1.1',
    titleDe: 'Einheit 1: Erste Schritte & Grundlagen',
    titleAr: 'الوحدة 1: الخطوات الأولى والأساسيات',
    titleEn: 'Unit 1: First Steps & Foundations',
    titleFr: 'Unité 1 : Premiers pas et bases',
    descDe: 'Begrüßung, Alphabet, Aussprache, das Verb „sein“ und erste W-Fragen.',
    descAr: 'التحيات، الأبجدية، النطق، فعل الكينونة وأدوات الاستفهام الأساسية.',
    descEn: 'Greetings, alphabet, phonetics, the verb "sein", and basic questions.',
    descFr: 'Salutations, alphabet, phonétique, verbe « sein » et questions en W.',
    chapterNumbers: [1, 2, 3],
    color: {
      name: 'indigo',
      gradient: 'from-blue-600 to-indigo-600',
      bgBadge: 'bg-indigo-50 border-indigo-200 text-indigo-700',
      textBadge: 'text-indigo-700',
      borderAccent: 'border-indigo-500',
      lightBg: 'bg-indigo-50/60',
      activeTab: 'bg-indigo-600 text-white shadow-indigo-200 shadow-sm',
      dotColor: 'bg-indigo-500',
      ring: 'ring-indigo-400',
    },
  },
  {
    id: 2,
    number: 2,
    level: 'A1.1',
    titleDe: 'Einheit 2: Alltag, Familie & Wohnen',
    titleAr: 'الوحدة 2: الحياة اليومية، العائلة والسكن',
    titleEn: 'Unit 2: Daily Life, Family & Home',
    titleFr: 'Unité 2 : Quotidien, famille et logement',
    descDe: 'Familienmitglieder, Tagesablauf, Uhrzeiten, Wohnungsräume und Möbel.',
    descAr: 'أفراد العائلة، روتين اليوم، الساعات، غرف المنزل والأثاث.',
    descEn: 'Family members, daily schedule, telling time, apartment rooms & furniture.',
    descFr: 'Famille, emploi du temps, heure, pièces de l’appartement et meubles.',
    chapterNumbers: [4, 5, 6],
    color: {
      name: 'emerald',
      gradient: 'from-emerald-600 to-teal-600',
      bgBadge: 'bg-emerald-50 border-emerald-200 text-emerald-700',
      textBadge: 'text-emerald-700',
      borderAccent: 'border-emerald-500',
      lightBg: 'bg-emerald-50/60',
      activeTab: 'bg-emerald-600 text-white shadow-emerald-200 shadow-sm',
      dotColor: 'bg-emerald-500',
      ring: 'ring-emerald-400',
    },
  },
  {
    id: 3,
    number: 3,
    level: 'A1.2',
    titleDe: 'Einheit 3: Unterwegs, Konsum & Freizeit',
    titleAr: 'الوحدة 3: الخروج، التسوق وأوقات الفراغ',
    titleEn: 'Unit 3: Out & About, Shopping & Leisure',
    titleFr: 'Unité 3 : Sorties, achats et loisirs',
    descDe: 'Essen & Trinken, Einkaufen, Preise, Freizeitaktivitäten und Stadtverkehr.',
    descAr: 'الطعام والشراب، التسوق والأسعار، الهوايات والمواصلات في المدينة.',
    descEn: 'Food & drinks, shopping, prices, leisure hobbies, and city transport.',
    descFr: 'Nourriture, achats, prix, loisirs et transports en ville.',
    chapterNumbers: [7, 8, 9, 10],
    color: {
      name: 'amber',
      gradient: 'from-amber-500 to-orange-600',
      bgBadge: 'bg-amber-50 border-amber-200 text-amber-800',
      textBadge: 'text-amber-800',
      borderAccent: 'border-amber-500',
      lightBg: 'bg-amber-50/60',
      activeTab: 'bg-amber-600 text-white shadow-amber-200 shadow-sm',
      dotColor: 'bg-amber-500',
      ring: 'ring-amber-400',
    },
  },
  {
    id: 4,
    number: 4,
    level: 'A1.2',
    titleDe: 'Einheit 4: Beruf, Gesundheit & A1-Abschluss',
    titleAr: 'الوحدة 4: العمل، الصحة وامتحان A1',
    titleEn: 'Unit 4: Work, Health & A1 Exam',
    titleFr: 'Unité 4 : Travail, santé et examen A1',
    descDe: 'Berufe, Arzttermin & Körper, Termine & Kommunikation, Perfekt und A1-Prüfung.',
    descAr: 'المهن، موعد الطبيب والصحة، المواعيد، الماضي التام Perfekt ومراجعة الامتحان.',
    descEn: 'Professions, health & doctor, appointments, past tense Perfekt, and exam review.',
    descFr: 'Métiers, santé et médecin, rendez-vous, passé composé Perfekt et révision A1.',
    chapterNumbers: [11, 12, 13, 14, 15],
    color: {
      name: 'purple',
      gradient: 'from-purple-600 to-pink-600',
      bgBadge: 'bg-purple-50 border-purple-200 text-purple-700',
      textBadge: 'text-purple-700',
      borderAccent: 'border-purple-500',
      lightBg: 'bg-purple-50/60',
      activeTab: 'bg-purple-600 text-white shadow-purple-200 shadow-sm',
      dotColor: 'bg-purple-500',
      ring: 'ring-purple-400',
    },
  },
  {
    id: 5,
    number: 5,
    level: 'A1.2',
    titleDe: 'Einheit 5: Reisen, Wetter & Pläne',
    titleAr: 'الوحدة 5: السفر والطقس والخطط',
    titleEn: 'Unit 5: Travel, Weather & Plans',
    titleFr: 'Unité 5 : Voyages, météo et projets',
    descDe: 'Reisen organisieren, Wetter beschreiben, Einladungen aussprechen und Pläne machen.',
    descAr: 'تنظيم السفر، وصف الطقس، تقديم الدعوات ووضع الخطط.',
    descEn: 'Organising trips, describing weather, making invitations, and planning.',
    descFr: 'Organiser un voyage, décrire la météo, inviter et faire des projets.',
    chapterNumbers: [16, 17, 18],
    color: {
      name: 'cyan',
      gradient: 'from-cyan-600 to-blue-600',
      bgBadge: 'bg-cyan-50 border-cyan-200 text-cyan-700',
      textBadge: 'text-cyan-700',
      borderAccent: 'border-cyan-500',
      lightBg: 'bg-cyan-50/60',
      activeTab: 'bg-cyan-600 text-white shadow-cyan-200 shadow-sm',
      dotColor: 'bg-cyan-500',
      ring: 'ring-cyan-400',
    },
  },
];

export const getUnitForChapter = (chapterNumber: number): CourseUnit => {
  return courseUnits.find((u) => u.chapterNumbers.includes(chapterNumber)) || courseUnits[0];
};

export const getUnitTitle = (unit: CourseUnit, mode: LanguageMode): string => {
  if (mode === 'ar') return unit.titleAr;
  if (mode === 'en') return unit.titleEn;
  if (mode === 'fr') return unit.titleFr;
  return unit.titleDe;
};
