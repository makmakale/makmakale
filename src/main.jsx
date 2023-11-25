import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

function noop() {
}

if (process.env.NODE_ENV !== 'development') {
  console.log = noop;
  console.warn = noop;
  console.error = noop;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
