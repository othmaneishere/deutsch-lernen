import { CoursePage } from '../types';

export const pages23to24: CoursePage[] = [
  {
    id: 23, pageNumber: 23, chapterNumber: 19,
    chapterTitleDe: 'Kapitel 19', chapterTitleAr: 'الفصل 19', chapterTitleEn: 'Chapter 19', chapterTitleFr: 'Chapitre 19',
    pageTitleDe: 'Post, Pakete & Telefon', pageTitleAr: 'البريد والطرود والهاتف', pageTitleEn: 'Post, Packages & Phone Calls', pageTitleFr: 'Poste, colis et téléphone',
    subtitleDe: 'Ein Paket abholen, Informationen erfragen und am Telefon helfen lassen', subtitleAr: 'استلام طرد وطلب المعلومات والحصول على المساعدة عبر الهاتف', subtitleEn: 'Collecting a package, asking for information, and getting help by phone', subtitleFr: 'Retirer un colis, demander des informations et obtenir de l’aide par téléphone',
    sections: [
      { id: 's23-vocab', titleDe: 'Bei der Post', titleAr: 'في مكتب البريد', titleEn: 'At the post office', titleFr: 'À la poste', type: 'vocabulary', vocabItems: [
        { de: 'das Paket', ar: 'الطرد', en: 'package', fr: 'le colis' }, { de: 'der Brief', ar: 'الرسالة', en: 'letter', fr: 'la lettre' }, { de: 'die Briefmarke', ar: 'الطابع', en: 'stamp', fr: 'le timbre' }, { de: 'die Sendungsnummer', ar: 'رقم التتبع', en: 'tracking number', fr: 'le numéro de suivi' }, { de: 'der Ausweis', ar: 'بطاقة الهوية', en: 'ID card', fr: 'la pièce d’identité' }, { de: 'der Schalter', ar: 'النافذة', en: 'counter', fr: 'le guichet' }, { de: 'abholen', ar: 'يستلم', en: 'to collect', fr: 'retirer' }, { de: 'unterschreiben', ar: 'يوقّع', en: 'to sign', fr: 'signer' }, { de: 'öffnen', ar: 'يفتح', en: 'to open', fr: 'ouvrir' }, { de: 'kosten', ar: 'يكلف', en: 'to cost', fr: 'coûter' },
      ] },
      { id: 's23-dialog', titleDe: 'Dialog: Ein Paket abholen', titleAr: 'حوار: استلام طرد', titleEn: 'Dialogue: Collecting a package', titleFr: 'Dialogue : Retirer un colis', type: 'dialogue', dialogueLines: [
        { speaker: 'Mitarbeiterin', textDe: 'Guten Tag. Wie kann ich Ihnen helfen?', textAr: 'مرحباً. كيف يمكنني مساعدتك؟', textEn: 'Hello. How can I help you?', textFr: 'Bonjour. Comment puis-je vous aider ?' },
        { speaker: 'Mina', textDe: 'Ich möchte dieses Paket abholen. Hier ist mein Ausweis.', textAr: 'أريد استلام هذا الطرد. هذه بطاقة هويتي.', textEn: 'I would like to collect this package. Here is my ID.', textFr: 'Je voudrais retirer ce colis. Voici ma pièce d’identité.' },
        { speaker: 'Mitarbeiterin', textDe: 'Bitte unterschreiben Sie hier. Das Paket kostet nichts.', textAr: 'من فضلك وقّع هنا. الطرد لا يكلف شيئاً.', textEn: 'Please sign here. The package costs nothing.', textFr: 'Veuillez signer ici. Le colis ne coûte rien.' },
      ] },
      { id: 's23-rule', titleDe: 'Höflich fragen', titleAr: 'السؤال بأدب', titleEn: 'Asking politely', titleFr: 'Demander poliment', type: 'rule_card', rulePoints: [
        { de: 'Können Sie mir bitte helfen?', ar: 'هل يمكنك مساعدتي من فضلك؟', en: 'Can you please help me?', fr: 'Pouvez-vous m’aider, s’il vous plaît ?' },
        { de: 'Ich möchte wissen, wann das Paket kommt.', ar: 'أريد أن أعرف متى يصل الطرد.', en: 'I would like to know when the package arrives.', fr: 'Je voudrais savoir quand le colis arrive.' },
      ] },
    ],
    exercises: [
      { id: 'ex23-match', titleDe: 'Wortschatz: Die Post', titleAr: 'مفردات: البريد', titleEn: 'Vocabulary: The post office', titleFr: 'Vocabulaire : La poste', type: 'matching', instructionDe: 'Ordne die Wörter ihrer Bedeutung zu.', instructionAr: 'صل الكلمات بمعانيها.', instructionEn: 'Match the words with their meanings.', instructionFr: 'Associez les mots à leur sens.', matchingPairs: [
        { leftDe: 'das Paket', rightKey: 'A', translations: { en: 'package', ar: 'الطرد', fr: 'le colis' } }, { leftDe: 'der Ausweis', rightKey: 'B', translations: { en: 'ID card', ar: 'بطاقة الهوية', fr: 'la pièce d’identité' } }, { leftDe: 'unterschreiben', rightKey: 'C', translations: { en: 'to sign', ar: 'يوقّع', fr: 'signer' } },
      ] },
      { id: 'ex23-blanks', titleDe: 'Sätze ergänzen', titleAr: 'أكمل الجمل', titleEn: 'Complete the sentences', titleFr: 'Complétez les phrases', type: 'blanks', instructionDe: 'Setze das passende Wort ein.', instructionAr: 'ضع الكلمة المناسبة.', instructionEn: 'Fill in the missing word.', instructionFr: 'Complétez avec le mot correct.', blanks: [
        { id: 'b23-1', prefixDe: 'Ich möchte mein ', correctAnswer: 'Paket', suffixDe: ' abholen.', hint: 'package' }, { id: 'b23-2', prefixDe: 'Bitte ', correctAnswer: 'unterschreiben', suffixDe: ' Sie hier.', hint: 'sign' }, { id: 'b23-3', prefixDe: 'Hier ist mein ', correctAnswer: 'Ausweis', suffixDe: '.', hint: 'ID card' },
      ] },
    ],
  },
  {
    id: 24, pageNumber: 24, chapterNumber: 19,
    chapterTitleDe: 'Kapitel 19', chapterTitleAr: 'الفصل 19', chapterTitleEn: 'Chapter 19', chapterTitleFr: 'Chapitre 19',
    pageTitleDe: 'Am Telefon helfen', pageTitleAr: 'المساعدة عبر الهاتف', pageTitleEn: 'Getting Help by Phone', pageTitleFr: 'Obtenir de l’aide par téléphone',
    subtitleDe: 'Anrufen, nachfragen, buchstabieren und eine Nachricht hinterlassen', subtitleAr: 'الاتصال والاستفسار والتهجئة وترك رسالة', subtitleEn: 'Calling, clarifying, spelling, and leaving a message', subtitleFr: 'Appeler, préciser, épeler et laisser un message',
    sections: [
      { id: 's24-vocab', titleDe: 'Telefonieren', titleAr: 'المكالمة الهاتفية', titleEn: 'Making a phone call', titleFr: 'Téléphoner', type: 'vocabulary', vocabItems: [
        { de: 'anrufen', ar: 'يتصل', en: 'to call', fr: 'appeler' }, { de: 'zurückrufen', ar: 'يعاود الاتصال', en: 'to call back', fr: 'rappeler' }, { de: 'die Nachricht', ar: 'الرسالة', en: 'message', fr: 'le message' }, { de: 'erreichen', ar: 'يصل إلى', en: 'to reach', fr: 'joindre' }, { de: 'besetzt', ar: 'مشغول', en: 'busy', fr: 'occupé' }, { de: 'buchstabieren', ar: 'يتهجى', en: 'to spell', fr: 'épeler' }, { de: 'die Durchwahl', ar: 'الرقم الداخلي', en: 'extension', fr: 'le poste' }, { de: 'die Verbindung', ar: 'الاتصال', en: 'connection', fr: 'la connexion' }, { de: 'wiederholen', ar: 'يكرر', en: 'to repeat', fr: 'répéter' }, { de: 'sich melden', ar: 'يرد على الهاتف', en: 'to answer / get in touch', fr: 'répondre / se manifester' },
      ] },
      { id: 's24-dialog', titleDe: 'Dialog: Eine Nachricht hinterlassen', titleAr: 'حوار: ترك رسالة', titleEn: 'Dialogue: Leaving a message', titleFr: 'Dialogue : Laisser un message', type: 'dialogue', dialogueLines: [
        { speaker: 'Anrufer', textDe: 'Guten Tag, hier ist Karim. Ist Frau Weber zu erreichen?', textAr: 'مرحباً، معك كريم. هل يمكنني التحدث مع السيدة فيبر؟', textEn: 'Hello, this is Karim. Can I reach Ms Weber?', textFr: 'Bonjour, Karim à l’appareil. Puis-je joindre Mme Weber ?' },
        { speaker: 'Kollegin', textDe: 'Leider ist sie gerade nicht da. Soll sie Sie zurückrufen?', textAr: 'للأسف ليست هنا الآن. هل تعاود الاتصال بك؟', textEn: 'Unfortunately, she is not here right now. Should she call you back?', textFr: 'Malheureusement, elle n’est pas là. Doit-elle vous rappeler ?' },
        { speaker: 'Anrufer', textDe: 'Ja, bitte. Meine Nummer ist 0176 234 567.', textAr: 'نعم من فضلك. رقمي هو 0176 234 567.', textEn: 'Yes, please. My number is 0176 234 567.', textFr: 'Oui, s’il vous plaît. Mon numéro est le 0176 234 567.' },
      ] },
      { id: 's24-rule', titleDe: 'Nachfragen und Wiederholen', titleAr: 'الاستفسار والتكرار', titleEn: 'Clarifying and repeating', titleFr: 'Préciser et répéter', type: 'rule_card', rulePoints: [
        { de: 'Wie bitte? Können Sie das wiederholen?', ar: 'عفواً؟ هل يمكنك التكرار؟', en: 'Pardon? Can you repeat that?', fr: 'Pardon ? Pouvez-vous répéter ?' },
        { de: 'Wie schreibt man das?', ar: 'كيف تُكتب هذه الكلمة؟', en: 'How do you spell that?', fr: 'Comment cela s’écrit-il ?' },
      ] },
    ],
    exercises: [
      { id: 'ex24-answer', titleDe: 'Sprechen: Am Telefon', titleAr: 'تحدث: عبر الهاتف', titleEn: 'Speaking: On the phone', titleFr: 'Expression orale : Au téléphone', type: 'answering', instructionDe: 'Antworte mit einem vollständigen Satz.', instructionAr: 'أجب بجملة كاملة.', instructionEn: 'Answer with a complete sentence.', instructionFr: 'Répondez avec une phrase complète.', answeringQuestions: [
        { id: 'q24-1', questionDe: 'Was sagst du, wenn du etwas nicht verstehst?', questionAr: 'ماذا تقول عندما لا تفهم شيئاً؟', questionEn: 'What do you say when you do not understand?', questionFr: 'Que dites-vous si vous ne comprenez pas ?', sampleAnswerDe: 'Wie bitte? Können Sie das wiederholen?' }, { id: 'q24-2', questionDe: 'Was sagst du, wenn die Person nicht da ist?', questionAr: 'ماذا تقول عندما لا يكون الشخص موجوداً؟', questionEn: 'What do you say when the person is not there?', questionFr: 'Que dites-vous si la personne n’est pas là ?', sampleAnswerDe: 'Können Sie ihr bitte eine Nachricht geben?' },
      ] },
      { id: 'ex24-write', titleDe: 'Schreiben: Eine kurze Nachricht', titleAr: 'كتابة: رسالة قصيرة', titleEn: 'Writing: A short message', titleFr: 'Écriture : Un court message', type: 'writing', instructionDe: 'Schreibe eine Nachricht mit deinem Namen, deiner Nummer und deinem Anliegen.', instructionAr: 'اكتب رسالة فيها اسمك ورقمك وسبب الاتصال.', instructionEn: 'Write a message with your name, number, and reason for calling.', instructionFr: 'Écrivez un message avec votre nom, numéro et motif de l’appel.', writingTask: { promptDe: 'Du möchtest zurückgerufen werden. Was sagst du?', promptAr: 'تريد أن يعاودوا الاتصال بك. ماذا تقول؟', promptEn: 'You would like a call back. What do you say?', promptFr: 'Vous souhaitez être rappelé. Que dites-vous ?', exampleDe: ['Guten Tag, hier ist Sara.', 'Bitte rufen Sie mich zurück.', 'Meine Nummer ist 0176 123 456.'] } },
    ],
  },
];
