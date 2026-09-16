// Clean minimalist vector-style illustrations mapped to each chapter title & theme
import imgHeroBanner from '../assets/images/german_hero_banner_1789293488824.jpg';
import imgFamily from '../assets/images/german_family_1789293843957.jpg';
import imgDailyRoutine from '../assets/images/german_daily_routine_1789293858783.jpg';
import imgHomeLiving from '../assets/images/german_home_living_1789293528851.jpg';
import imgCafeScene from '../assets/images/german_cafe_scene_1789293504756.jpg';
import imgCityTransit from '../assets/images/german_city_transit_1789293515695.jpg';
import imgClothesWeather from '../assets/images/german_clothes_weather_1789293883130.jpg';
import imgMarketScene from '../assets/images/german_market_scene_1789293564702.jpg';
import imgProfessions from '../assets/images/german_professions_1789293830175.jpg';
import imgDoctorHealth from '../assets/images/german_doctor_health_1789293897419.jpg';
import imgAppointmentsBanner from '../assets/images/german_appointments_banner_1789294929967.jpg';
import imgTravelMemories from '../assets/images/german_travel_memories_1789294943615.jpg';
import imgExamReview from '../assets/images/german_exam_review_1789294956634.jpg';

export interface ModuleVisualScene {
  imageSrc: string;
  alt: string;
  badgeDe: string;
  badgeAr: string;
  badgeEn: string;
  badgeFr: string;
  scenarioDe: string;
  scenarioAr: string;
  scenarioEn: string;
  scenarioFr: string;
}

export const moduleScenes: Record<number, ModuleVisualScene> = {
  // Modul 1: Erste Schritte & Begrüßung
  1: {
    imageSrc: imgHeroBanner,
    alt: 'Erstes Kennenlernen',
    badgeDe: 'Kennenlernen & Begrüßung',
    badgeAr: 'التعارف والتحية',
    badgeEn: 'Introductions & Greetings',
    badgeFr: 'Présentations & Salutations',
    scenarioDe: 'Begrüße andere Menschen höflich und stelle dich auf Deutsch vor.',
    scenarioAr: 'حيّ الآخرين بلباقة وقدّم نفسك باللغة الألمانية.',
    scenarioEn: 'Greet others politely and introduce yourself in German.',
    scenarioFr: 'Saluez poliment et présentez-vous en allemand.',
  },
  // Modul 2: Alphabet & Aussprache
  2: {
    imageSrc: imgHeroBanner,
    alt: 'Phonetik & Buchstabieren',
    badgeDe: 'Phonetik & Alphabet',
    badgeAr: 'الصوتيات والأبجدية',
    badgeEn: 'Phonetics & Alphabet',
    badgeFr: 'Phonétique & Alphabet',
    scenarioDe: 'Umlaute (ä, ö, ü) und typische Buchstabenlaute (ch, sch, ei, eu) meistern.',
    scenarioAr: 'إتقان الحروف الصوتية الخاصة ومجموعات الحروف الألمانية.',
    scenarioEn: 'Master umlauts (ä, ö, ü) and German sound blends (ch, sch, ei).',
    scenarioFr: 'Maîtrisez les trémas et combinaisons phonétiques allemandes.',
  },
  // Modul 3: Sein & Fragen
  3: {
    imageSrc: imgHeroBanner,
    alt: 'Grammatik & Satzbau',
    badgeDe: 'Verben & W-Fragen',
    badgeAr: 'الأفعال وأدوات الاستفهام',
    badgeEn: 'Verbs & Questions',
    badgeFr: 'Verbes & Questions',
    scenarioDe: 'Aussagesätze, das Hilfsverb sein und gezielte Fragen stellen.',
    scenarioAr: 'صياغة الجمل الإخبارية وفعل الكينونة وطرح الأسئلة.',
    scenarioEn: 'Declarative sentences, the verb sein, and asking questions.',
    scenarioFr: 'Phrases déclaratives, verbe sein et questions.',
  },
  // Modul 4: Familie & Artikel
  4: {
    imageSrc: imgFamily,
    alt: 'Familie & Personen',
    badgeDe: 'Familie & Artikel',
    badgeAr: 'العائلة وأدوات التعريف',
    badgeEn: 'Family & Articles',
    badgeFr: 'Famille & Articles',
    scenarioDe: 'Familienmitglieder benennen und der, die, das sicher anwenden.',
    scenarioAr: 'تسمية أفراد العائلة واستخدام أدوات التعريف بثقة.',
    scenarioEn: 'Name family members and master der, die, das articles.',
    scenarioFr: 'Nommer les membres de la famille et maîtriser les articles.',
  },
  // Modul 5: Mein Alltag & Uhrzeit
  5: {
    imageSrc: imgDailyRoutine,
    alt: 'Tagesablauf & Zeit',
    badgeDe: 'Alltag & Uhrzeit',
    badgeAr: 'الروتين اليومي والوقت',
    badgeEn: 'Daily Routine & Time',
    badgeFr: 'Quotidien & Heure',
    scenarioDe: 'Tagesablauf beschreiben, Termine vereinbaren und Uhrzeiten nennen.',
    scenarioAr: 'وصف الروتين اليومي وتحديد المواعيد وقراءة الساعة.',
    scenarioEn: 'Describe your day, schedule appointments, and tell time.',
    scenarioFr: 'Décrire votre journée, fixer des rendez-vous et lire l\'heure.',
  },
  // Modul 6: Wohnen & Möbel
  6: {
    imageSrc: imgHomeLiving,
    alt: 'Wohnung & Einrichtung',
    badgeDe: 'Zimmer & Möbel',
    badgeAr: 'الغرف والأثاث',
    badgeEn: 'Rooms & Furniture',
    badgeFr: 'Pièces & Meubles',
    scenarioDe: 'Wohnung, Zimmer und Einrichtungsgegenstände präzise beschreiben.',
    scenarioAr: 'وصف الشقة والغرف والأثاث المنزلي بدقة.',
    scenarioEn: 'Describe your apartment, rooms, and furniture precisely.',
    scenarioFr: 'Décrire avec précision votre logement, pièces et meubles.',
  },
  // Modul 7: Essen & Trinken
  7: {
    imageSrc: imgCafeScene,
    alt: 'Café & Restaurant',
    badgeDe: 'Essen & Bestellen',
    badgeAr: 'الطعام والطلب',
    badgeEn: 'Food & Ordering',
    badgeFr: 'Repas & Commande',
    scenarioDe: 'Speisen und Getränke im Restaurant bestellen und bezahlen.',
    scenarioAr: 'طلب الوجبات والمشروبات في المطعم ودفع الفاتورة.',
    scenarioEn: 'Order food and drinks at cafes/restaurants and handle the bill.',
    scenarioFr: 'Commander à manger et à boire au café et régler l\'addition.',
  },
  // Modul 8: Stadt & Wegbeschreibung
  8: {
    imageSrc: imgCityTransit,
    alt: 'Unterwegs in der Stadt',
    badgeDe: 'Weg & Verkehr',
    badgeAr: 'الاتجاهات والمواصلات',
    badgeEn: 'Directions & Transit',
    badgeFr: 'Itinéraires & Transports',
    scenarioDe: 'Nach dem Weg fragen und sich in der deutschen Stadt orientieren.',
    scenarioAr: 'السؤال عن الطريق والتنقل بوسائل المواصلات في المدينة.',
    scenarioEn: 'Ask for directions and navigate public transit in German cities.',
    scenarioFr: 'Demander son chemin et utiliser les transports en ville.',
  },
  // Modul 9: Kleidung & Wetter
  9: {
    imageSrc: imgClothesWeather,
    alt: 'Kleidung & Jahreszeiten',
    badgeDe: 'Kleidung & Wetter',
    badgeAr: 'الملابس والطقس',
    badgeEn: 'Clothing & Weather',
    badgeFr: 'Vêtements & Météo',
    scenarioDe: 'Über Kleidung, Farben, Größen und das aktuelle Wetter sprechen.',
    scenarioAr: 'التحدث عن الملابس والألوان والمقاسات وحالة الطقس.',
    scenarioEn: 'Talk about outfits, colors, sizes, and daily weather conditions.',
    scenarioFr: 'Parler de vêtements, couleurs, tailles et de la météo.',
  },
  // Modul 10: Einkaufen & Supermarkt
  10: {
    imageSrc: imgMarketScene,
    alt: 'Einkauf & Preise',
    badgeDe: 'Markt & Einkaufen',
    badgeAr: 'التسوق والأسعار',
    badgeEn: 'Shopping & Market',
    badgeFr: 'Courses & Marché',
    scenarioDe: 'Mengen, Gewichte und Preise beim Einkaufen auf Deutsch verhandeln.',
    scenarioAr: 'معرفة الكميات والأوزان والأسعار أثناء التسوق في السوق.',
    scenarioEn: 'Discuss quantities, weights, and prices while shopping.',
    scenarioFr: 'Exprimer les quantités, poids et prix lors des achats.',
  },
  // Modul 11: Beruf & Ausbildung
  11: {
    imageSrc: imgProfessions,
    alt: 'Arbeitswelt & Ausbildung',
    badgeDe: 'Beruf & Ausbildung',
    badgeAr: 'العمل والتعليم المهني',
    badgeEn: 'Work & Education',
    badgeFr: 'Travail & Formation',
    scenarioDe: 'Über Berufe, Arbeitsplatz, Tätigkeiten und Pflichten mit dem Modalverb „müssen“ sprechen.',
    scenarioAr: 'التحدث عن المهن ومكان العمل وساعات الدوام باستخدام فعل الإلزام müssen.',
    scenarioEn: 'Discuss professions, workplaces, working hours, and duties using modal verb müssen.',
    scenarioFr: 'Parler de son métier, lieu de travail et obligations avec le verbe modal müssen.',
  },
  // Modul 12: Gesundheit & Arztbesuch
  12: {
    imageSrc: imgDoctorHealth,
    alt: 'Gesundheit & Praxis',
    badgeDe: 'Gesundheit & Praxis',
    badgeAr: 'الصحة وعيادة الطبيب',
    badgeEn: 'Health & Clinic',
    badgeFr: 'Santé & Cabinet médical',
    scenarioDe: 'Körperteile, Schmerzen und Symptome schildern sowie Ratschläge in der Apotheke verstehen.',
    scenarioAr: 'وصف أجزاء الجسم وأعراض المرض عند زيارة الطبيب أو في الصيدلية.',
    scenarioEn: 'Describe body parts, symptoms, pain, and understand advice at the clinic or pharmacy.',
    scenarioFr: 'Décrire le corps humain, les symptômes et comprendre les conseils à la pharmacie.',
  },
  // Modul 13: Termine & Kommunikation
  13: {
    imageSrc: imgAppointmentsBanner,
    alt: 'Termine & Telefonieren',
    badgeDe: 'Termine & Kontakt',
    badgeAr: 'المواعيد والتواصل',
    badgeEn: 'Appointments & Contact',
    badgeFr: 'Rendez-vous & Contact',
    scenarioDe: 'Termine telefonisch vereinbaren, verschieben oder absagen und höfliche Bitten formulieren.',
    scenarioAr: 'حجز المواعيد هاتفياً وتأجيلها أو إلغاؤها وصياغة الطلبات المهذبة.',
    scenarioEn: 'Schedule, postpone, or cancel appointments by phone and formulate polite requests.',
    scenarioFr: 'Prendre, reporter ou annuler des rendez-vous par téléphone et formuler des demandes polies.',
  },
  // Modul 14: Vergangenheit & Pläne
  14: {
    imageSrc: imgTravelMemories,
    alt: 'Vergangenheit & Erlebnisse',
    badgeDe: 'Perfekt & Reisen',
    badgeAr: 'الماضي والرحلات',
    badgeEn: 'Past & Travel Plans',
    badgeFr: 'Passé composé & Voyages',
    scenarioDe: 'Im Perfekt von Wochenenden, Erlebnissen und Reisen berichten (haben/sein + Partizip II).',
    scenarioAr: 'التحدث في صيغة الماضي التام Perfekt عن عطلة نهاية الأسبوع والأنشطة والرحلات.',
    scenarioEn: 'Talk in the German past tense (Perfekt) about weekend activities, trips, and memories.',
    scenarioFr: 'Raconter son week-end, ses expériences et ses voyages au passé composé (Perfekt).',
  },
  // Modul 15: A1-Überleben & Prüfungstraining
  15: {
    imageSrc: imgExamReview,
    alt: 'A1-Zertifikat & Überlebensguide',
    badgeDe: 'A1-Zertifikat & Überleben',
    badgeAr: 'شهادة A1 ودليل البقاء',
    badgeEn: 'A1 Mastery & Survival Guide',
    badgeFr: 'Certificat A1 & Guide de survie',
    scenarioDe: 'Wichtige Formulare, Bahnhof, Notfälle und ein umfassendes Prüfungstraining für das A1-Niveau.',
    scenarioAr: 'استمارات رسمية، محطة القطار، أرقام الطوارئ واختبار شامل لاجتياز مستوى A1 بنجاح.',
    scenarioEn: 'Official forms, train stations, emergency protocols, and comprehensive A1 mastery exam review.',
    scenarioFr: 'Formulaires officiels, gare, urgences et révision complète pour l’examen de niveau A1.',
  },
  16: {
    imageSrc: '/images/unit5-travel.png', alt: 'Reisen & Unterwegs', badgeDe: 'Reisen & Unterwegs', badgeAr: 'السفر والتنقل', badgeEn: 'Travel & Getting Around', badgeFr: 'Voyager et se déplacer',
    scenarioDe: 'Tickets kaufen, nach dem Weg fragen und sicher ankommen.', scenarioAr: 'شراء التذاكر والسؤال عن الطريق والوصول بأمان.', scenarioEn: 'Buy tickets, ask for directions, and arrive with confidence.', scenarioFr: 'Acheter des billets, demander son chemin et arriver sereinement.',
  },
  17: {
    imageSrc: '/images/unit5-weather.png', alt: 'Wetter & Jahreszeiten', badgeDe: 'Wetter & Jahreszeiten', badgeAr: 'الطقس والفصول', badgeEn: 'Weather & Seasons', badgeFr: 'La météo et les saisons',
    scenarioDe: 'Das Wetter beschreiben und Pläne für den Tag anpassen.', scenarioAr: 'وصف الطقس وتعديل خطط اليوم.', scenarioEn: 'Describe the weather and adjust your plans for the day.', scenarioFr: 'Décrire la météo et adapter ses projets de la journée.',
  },
  18: {
    imageSrc: '/images/unit5-plans.png', alt: 'Pläne & Einladungen', badgeDe: 'Pläne & Einladungen', badgeAr: 'الخطط والدعوات', badgeEn: 'Plans & Invitations', badgeFr: 'Projets et invitations',
    scenarioDe: 'Einladungen aussprechen, annehmen und Termine vereinbaren.', scenarioAr: 'تقديم الدعوات وقبولها وتحديد المواعيد.', scenarioEn: 'Make invitations, accept them, and arrange plans.', scenarioFr: 'Inviter, accepter une invitation et organiser un rendez-vous.',
  },
};
