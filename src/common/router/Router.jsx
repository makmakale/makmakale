import App from '@/App';
import ErrorPage from '@/common/ErrorPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
], { basename: import.meta.env.DEV ? '/' : '/portfolio/' });

export default router;
