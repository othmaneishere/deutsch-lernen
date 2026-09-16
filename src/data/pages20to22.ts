import { CoursePage } from '../types';

export const pages20to22: CoursePage[] = [
  {
    id: 20, pageNumber: 20, chapterNumber: 16,
    chapterTitleDe: 'Kapitel 16', chapterTitleAr: 'الفصل 16', chapterTitleEn: 'Chapter 16', chapterTitleFr: 'Chapitre 16',
    pageTitleDe: 'Reisen & Unterwegs', pageTitleAr: 'السفر والتنقل', pageTitleEn: 'Travel & Getting Around', pageTitleFr: 'Voyager et se déplacer',
    subtitleDe: 'Tickets kaufen, nach dem Weg fragen und ankommen', subtitleAr: 'شراء التذاكر والسؤال عن الطريق والوصول', subtitleEn: 'Buying tickets, asking for directions, and arriving', subtitleFr: 'Acheter des billets, demander son chemin et arriver',
    sections: [
      { id: 's20-reise', titleDe: 'Wichtige Wörter unterwegs', titleAr: 'كلمات مهمة أثناء السفر', titleEn: 'Useful travel words', titleFr: 'Mots utiles en voyage', type: 'vocabulary', vocabItems: [
        { de: 'die Reise', ar: 'رحلة', en: 'trip', fr: 'le voyage' }, { de: 'der Bahnhof', ar: 'محطة القطار', en: 'train station', fr: 'la gare' }, { de: 'der Zug', ar: 'القطار', en: 'train', fr: 'le train' }, { de: 'das Ticket', ar: 'تذكرة', en: 'ticket', fr: 'le billet' }, { de: 'der Fahrplan', ar: 'جدول المواعيد', en: 'timetable', fr: 'les horaires' }, { de: 'der Koffer', ar: 'حقيبة السفر', en: 'suitcase', fr: 'la valise' }, { de: 'die Haltestelle', ar: 'المحطة', en: 'stop', fr: 'l’arrêt' }, { de: 'ankommen', ar: 'يصل', en: 'to arrive', fr: 'arriver' },
      ] },
      { id: 's20-dialog', titleDe: 'Dialog: Am Bahnhof', titleAr: 'حوار: في محطة القطار', titleEn: 'Dialogue: At the station', titleFr: 'Dialogue : À la gare', type: 'dialogue', dialogueLines: [
        { speaker: 'Mitarbeiter', textDe: 'Guten Tag. Wohin möchten Sie fahren?', textAr: 'مرحباً. إلى أين تريد السفر؟', textEn: 'Hello. Where would you like to travel?', textFr: 'Bonjour. Où souhaitez-vous aller ?' },
        { speaker: 'Samir', textDe: 'Nach Köln, bitte. Wann fährt der nächste Zug?', textAr: 'إلى كولونيا من فضلك. متى ينطلق القطار التالي؟', textEn: 'To Cologne, please. When does the next train leave?', textFr: 'À Cologne, s’il vous plaît. Quand part le prochain train ?' },
        { speaker: 'Mitarbeiter', textDe: 'Um 14 Uhr von Gleis drei.', textAr: 'في الساعة الثانية من الرصيف الثالث.', textEn: 'At 2 p.m. from platform three.', textFr: 'À 14 heures, voie trois.' },
      ] },
      { id: 's20-regel', titleDe: 'Fragen mit „Wann?“ und „Wo?“', titleAr: 'أسئلة متى وأين', titleEn: 'Questions with “when” and “where”', titleFr: 'Questions avec « quand » et « où »', type: 'rule_card', rulePoints: [
        { de: 'Wann fährt der Zug? – Um 14 Uhr.', ar: 'متى ينطلق القطار؟ – في الساعة الثانية.', en: 'When does the train leave? – At 2 p.m.', fr: 'Quand part le train ? – À 14 heures.' },
        { de: 'Wo ist Gleis drei? – Dort links.', ar: 'أين الرصيف الثالث؟ – هناك على اليسار.', en: 'Where is platform three? – Over there on the left.', fr: 'Où est la voie trois ? – Là-bas à gauche.' },
      ] },
    ], exercises: [],
  },
  {
    id: 21, pageNumber: 21, chapterNumber: 17,
    chapterTitleDe: 'Kapitel 17', chapterTitleAr: 'الفصل 17', chapterTitleEn: 'Chapter 17', chapterTitleFr: 'Chapitre 17',
    pageTitleDe: 'Wetter & Jahreszeiten', pageTitleAr: 'الطقس والفصول', pageTitleEn: 'Weather & Seasons', pageTitleFr: 'La météo et les saisons',
    subtitleDe: 'Das Wetter beschreiben und Pläne anpassen', subtitleAr: 'وصف الطقس وتغيير الخطط', subtitleEn: 'Describing weather and adjusting plans', subtitleFr: 'Décrire la météo et adapter ses projets',
    sections: [
      { id: 's21-wetter', titleDe: 'Das Wetter', titleAr: 'الطقس', titleEn: 'The weather', titleFr: 'La météo', type: 'vocabulary', vocabItems: [
        { de: 'die Sonne scheint.', ar: 'الشمس مشرقة.', en: 'The sun is shining.', fr: 'Le soleil brille.' }, { de: 'Es regnet.', ar: 'إنها تمطر.', en: 'It is raining.', fr: 'Il pleut.' }, { de: 'Es ist bewölkt.', ar: 'الجو غائم.', en: 'It is cloudy.', fr: 'Le ciel est nuageux.' }, { de: 'Es ist windig.', ar: 'الجو عاصف.', en: 'It is windy.', fr: 'Il y a du vent.' }, { de: 'Es ist warm.', ar: 'الجو دافئ.', en: 'It is warm.', fr: 'Il fait chaud.' }, { de: 'Es ist kalt.', ar: 'الجو بارد.', en: 'It is cold.', fr: 'Il fait froid.' }, { de: 'der Frühling', ar: 'الربيع', en: 'spring', fr: 'le printemps' }, { de: 'der Winter', ar: 'الشتاء', en: 'winter', fr: 'l’hiver' },
      ] },
      { id: 's21-dialog', titleDe: 'Dialog: Das Wochenende', titleAr: 'حوار: عطلة نهاية الأسبوع', titleEn: 'Dialogue: The weekend', titleFr: 'Dialogue : Le week-end', type: 'dialogue', dialogueLines: [
        { speaker: 'Lea', textDe: 'Wie wird das Wetter am Samstag?', textAr: 'كيف سيكون الطقس يوم السبت؟', textEn: 'What will the weather be like on Saturday?', textFr: 'Quel temps fera-t-il samedi ?' },
        { speaker: 'Jonas', textDe: 'Es soll sonnig und warm werden. Wir können im Park spazieren gehen.', textAr: 'سيكون مشمساً ودافئاً. يمكننا المشي في الحديقة.', textEn: 'It should be sunny and warm. We can go for a walk in the park.', textFr: 'Il devrait faire beau et chaud. Nous pouvons nous promener au parc.' },
      ] },
      { id: 's21-regel', titleDe: '„Es ist“ und „Es gibt“', titleAr: 'استخدام Es ist و Es gibt', titleEn: 'Using “it is” and “there is”', titleFr: 'Employer « il fait » et « il y a »', type: 'rule_card', rulePoints: [
        { de: 'Es ist kalt.', ar: 'الجو بارد.', en: 'It is cold.', fr: 'Il fait froid.' }, { de: 'Es gibt viel Schnee.', ar: 'يوجد ثلج كثير.', en: 'There is a lot of snow.', fr: 'Il y a beaucoup de neige.' },
      ] },
    ], exercises: [],
  },
  {
    id: 22, pageNumber: 22, chapterNumber: 18,
    chapterTitleDe: 'Kapitel 18', chapterTitleAr: 'الفصل 18', chapterTitleEn: 'Chapter 18', chapterTitleFr: 'Chapitre 18',
    pageTitleDe: 'Pläne, Einladungen & Wünsche', pageTitleAr: 'الخطط والدعوات والرغبات', pageTitleEn: 'Plans, Invitations & Wishes', pageTitleFr: 'Projets, invitations et souhaits',
    subtitleDe: 'Einladungen annehmen, ablehnen und Termine vereinbaren', subtitleAr: 'قبول الدعوات ورفضها وتحديد المواعيد', subtitleEn: 'Accepting invitations, declining, and arranging plans', subtitleFr: 'Accepter une invitation, refuser et organiser un rendez-vous',
    sections: [
      { id: 's22-plaene', titleDe: 'Pläne machen', titleAr: 'وضع الخطط', titleEn: 'Making plans', titleFr: 'Faire des projets', type: 'vocabulary', vocabItems: [
        { de: 'Hast du Zeit?', ar: 'هل لديك وقت؟', en: 'Do you have time?', fr: 'Tu as le temps ?' }, { de: 'Möchtest du mitkommen?', ar: 'هل تريد أن تأتي معنا؟', en: 'Would you like to come along?', fr: 'Tu veux venir ?' }, { de: 'Gern!', ar: 'بكل سرور!', en: 'Gladly!', fr: 'Avec plaisir !' }, { de: 'Leider kann ich nicht.', ar: 'للأسف لا أستطيع.', en: 'Unfortunately, I cannot.', fr: 'Malheureusement, je ne peux pas.' }, { de: 'Vielleicht morgen.', ar: 'ربما غداً.', en: 'Maybe tomorrow.', fr: 'Peut-être demain.' }, { de: 'Wir treffen uns um sechs.', ar: 'سنلتقي في السادسة.', en: 'We will meet at six.', fr: 'On se retrouve à six heures.' }, { de: 'der Termin', ar: 'الموعد', en: 'appointment', fr: 'le rendez-vous' }, { de: 'die Einladung', ar: 'الدعوة', en: 'invitation', fr: 'l’invitation' },
      ] },
      { id: 's22-dialog', titleDe: 'Dialog: Eine Einladung', titleAr: 'حوار: دعوة', titleEn: 'Dialogue: An invitation', titleFr: 'Dialogue : Une invitation', type: 'dialogue', dialogueLines: [
        { speaker: 'Nora', textDe: 'Möchtest du am Sonntag mit uns essen gehen?', textAr: 'هل تريد الذهاب لتناول الطعام معنا يوم الأحد؟', textEn: 'Would you like to go out for a meal with us on Sunday?', textFr: 'Tu veux aller manger avec nous dimanche ?' },
        { speaker: 'Omar', textDe: 'Sehr gern! Um wie viel Uhr treffen wir uns?', textAr: 'بكل سرور! في أي ساعة نلتقي؟', textEn: 'Gladly! What time shall we meet?', textFr: 'Avec plaisir ! À quelle heure se retrouve-t-on ?' },
        { speaker: 'Nora', textDe: 'Um halb sieben vor dem Restaurant.', textAr: 'في السادسة والنصف أمام المطعم.', textEn: 'At half past six in front of the restaurant.', textFr: 'À six heures et demie devant le restaurant.' },
      ] },
      { id: 's22-regel', titleDe: 'Wünsche mit „möchten“', titleAr: 'الرغبات مع möchten', titleEn: 'Wishes with “möchten”', titleFr: 'Les souhaits avec « möchten »', type: 'rule_card', rulePoints: [
        { de: 'Ich möchte einen Kaffee.', ar: 'أريد قهوة.', en: 'I would like a coffee.', fr: 'Je voudrais un café.' }, { de: 'Möchtest du mitkommen?', ar: 'هل تريد المجيء؟', en: 'Would you like to come along?', fr: 'Tu voudrais venir ?' },
      ] },
    ], exercises: [],
  },
];
