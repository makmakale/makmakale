import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import ErrorPage from '@/common/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
], { basename: import.meta.env.DEV ? '/' : '/profile/' });

export default router;
