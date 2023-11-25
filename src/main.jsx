import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/common/router/Router';
import '@/index.css';

function noop() {
}

if (process.env.NODE_ENV !== 'development') {
  console.log = noop;
  console.warn = noop;
  console.error = noop;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
