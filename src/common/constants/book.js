import ProfilePage from '@/components/Pages/ProfilePage';
import BlankPage from '@/common/components/BlankPage';

export const bookPages = [
  { page: 1, title: 'Profile', component: ProfilePage },
  { page: 2, title: 'Work Experience', component: BlankPage },
  { page: 3, component: BlankPage },
  { page: 4, component: BlankPage },
  { page: 5, component: BlankPage },
  { page: 6, component: BlankPage },
  { page: 7, component: BlankPage },
  { page: 8, component: BlankPage },
];

export const initialPage = 1;

export const pagesOnScreen = 2;
