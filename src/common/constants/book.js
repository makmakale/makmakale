import ProfilePage from '@/components/Pages/ProfilePage';
import BlankPage from '@/common/components/BlankPage';
import Experience from '@/components/Pages/Experience';
import Education from '@/components/Pages/Education';

export const bookPages = [
  { page: 1, title: 'Profile', component: ProfilePage },
  {
    page: 2, title: 'Work Experience', component: Experience, part: 1,
  },
  {
    page: 3, component: Experience, part: 2,
  },
  {
    page: 4, component: Experience, part: 3,
  },
  {
    page: 5, component: Experience, part: 4,
  },
  { page: 6, component: Experience, part: 5 },
  { page: 7, component: Experience, part: 6 },
  { page: 8, title: 'Education', component: Education },
  { page: 9, title: 'Skills', component: BlankPage },
];

export const initialPage = 1;

export const pagesOnScreen = 2;
