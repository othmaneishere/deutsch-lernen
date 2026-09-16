import { CoursePage } from '../types';
import { pages1to4 } from './pages1to4';
import { pages5to8 } from './pages5to8';
import { pages9to15 } from './pages9to15';
import { pages16to19 } from './pages16to19';
import { pages20to22 } from './pages20to22';

export const allPages: CoursePage[] = [
  ...pages1to4,
  ...pages5to8,
  ...pages9to15,
  ...pages16to19,
  ...pages20to22,
];

export const getPageByNumber = (num: number): CoursePage | undefined => {
  return allPages.find(p => p.pageNumber === num);
};

export const getTotalPages = (): number => {
  return allPages.length;
};
