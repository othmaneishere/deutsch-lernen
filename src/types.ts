export type LanguageMode = 'none' | 'ar' | 'en' | 'fr';

export interface MultiLangText {
  de: string;
  ar: string;
  en: string;
  fr: string;
}

export interface VocabularyItem {
  de: string;
  ar: string;
  en: string;
  fr: string;
  noteDe?: string;
  noteAr?: string;
  noteEn?: string;
  noteFr?: string;
  gender?: 'der' | 'die' | 'das';
}

export interface TableRow {
  de: string[];
  ar: string[];
  en: string[];
  fr: string[];
}

export interface TableData {
  headersDe: string[];
  headersAr: string[];
  headersEn: string[];
  headersFr: string[];
  rows: TableRow[];
}

export interface DialogueLine {
  speaker: string;
  textDe: string;
  textAr: string;
  textEn: string;
  textFr: string;
}

export interface PronunciationRule {
  sound: string;
  arHint: string;
  enHint: string;
  frHint: string;
  examples: { word: string; translation: { ar: string; en: string; fr: string } }[];
}

export interface NumberItem {
  num: string | number;
  wordDe: string;
  wordAr: string;
  wordEn: string;
  wordFr: string;
}

export type SectionType = 
  | 'vocabulary'
  | 'dialogue'
  | 'table'
  | 'pronunciation'
  | 'numbers'
  | 'rule_card'
  | 'qa_list';

export interface ContentSection {
  id: string;
  titleDe: string;
  titleAr: string;
  titleEn: string;
  titleFr: string;
  type: SectionType;
  descriptionDe?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  descriptionFr?: string;
  vocabItems?: VocabularyItem[];
  dialogueLines?: DialogueLine[];
  tableData?: TableData;
  pronunciationRules?: PronunciationRule[];
  numberItems?: NumberItem[];
  rulePoints?: { de: string; ar: string; en: string; fr: string }[];
  qaItems?: { qDe: string; qAr: string; qEn: string; qFr: string; aDe?: string; aAr?: string; aEn?: string; aFr?: string }[];
}

export interface MatchingPair {
  leftDe: string;
  rightKey: string;
  translations: { ar: string; en: string; fr: string };
}

export interface BlankItem {
  id: string;
  prefixDe: string;
  correctAnswer: string;
  acceptedAnswers?: string[];
  suffixDe: string;
  hint?: string;
}

export interface MultipleChoiceItem {
  id: string;
  questionDe: string;
  options: string[];
  correctIndex: number;
  explanationDe?: string;
  translations?: { ar: string; en: string; fr: string };
}

export interface AnsweringItem {
  id: string;
  questionDe: string;
  questionAr: string;
  questionEn: string;
  questionFr: string;
  sampleAnswerDe: string;
}

export interface WritingTask {
  promptDe: string;
  promptAr: string;
  promptEn: string;
  promptFr: string;
  exampleDe: string[];
}

export interface Exercise {
  id: string;
  titleDe: string;
  titleAr: string;
  titleEn: string;
  titleFr: string;
  type: 'matching' | 'blanks' | 'answering' | 'writing' | 'multiple_choice';
  instructionDe: string;
  instructionAr: string;
  instructionEn: string;
  instructionFr: string;
  matchingPairs?: MatchingPair[];
  blanks?: BlankItem[];
  multipleChoice?: MultipleChoiceItem[];
  answeringQuestions?: AnsweringItem[];
  writingTask?: WritingTask;
}

export interface CoursePage {
  id: number; // 1 to 20
  pageNumber: number;
  chapterNumber: number;
  chapterTitleDe: string;
  chapterTitleAr: string;
  chapterTitleEn: string;
  chapterTitleFr: string;
  pageTitleDe: string;
  pageTitleAr: string;
  pageTitleEn: string;
  pageTitleFr: string;
  subtitleDe?: string;
  subtitleAr?: string;
  subtitleEn?: string;
  subtitleFr?: string;
  sections: ContentSection[];
  exercises: Exercise[];
}

export interface ChapterOverview {
  number: number;
  titleDe: string;
  titleAr: string;
  titleEn: string;
  titleFr: string;
  topicsDe: string;
  topicsAr: string;
  topicsEn: string;
  topicsFr: string;
  startPage: number;
}

export type SectionFilterType =
  | 'all'
  | 'vocab'
  | 'dialogue'
  | 'grammar'
  | 'numbers'
  | 'pronunciation'
  | 'exercises';

