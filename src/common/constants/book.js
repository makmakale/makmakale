import IntroPage from '@/components/Pages/Intro';
import Profile from '@/components/Pages/Profile';
import Experience from '@/components/Pages/Experience';
import Education from '@/components/Pages/Education';
import Skills from '@/components/Pages/Skills';

const pages = [
  { title: 'Introduction', component: IntroPage },
  { title: 'Profile', component: Profile },
  { title: 'Work Experience', component: Experience, part: 1 },
  { component: Experience, part: 2 },
  { component: Experience, part: 3 },
  { component: Experience, part: 4 },
  { component: Experience, part: 5 },
  { component: Experience, part: 6 },
  { title: 'Education', component: Education },
  { title: 'Skills', component: Skills },
];

export const bookPages = pages.map((page, index) => ({ ...page, page: index + 1 }));

export const initialPage = 1;

export const pagesOnScreen = 2;

export const coverRotateTimeout = 1000;
