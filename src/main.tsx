import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerServiceWorker, trackWebVitals } from './utils/performance';

// Register service worker for caching
registerServiceWorker();

// Track web vitals for performance monitoring
trackWebVitals();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
