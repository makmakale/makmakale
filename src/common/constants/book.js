import ProfilePage from '@/components/Pages/ProfilePage';
import BlankPage from '@/common/components/BlankPage';

export const bookPages = [
  { page: 1, title: 'Profile', component: ProfilePage },
  { page: 2, title: '2', component: BlankPage },
  { page: 3, title: '3', component: BlankPage },
  { page: 4, title: '4', component: BlankPage },
  { page: 5, title: '5', component: BlankPage },
  { page: 6, title: '6', component: BlankPage },
];

export const initialPage = 1;

export const pagesOnScreen = 2;
