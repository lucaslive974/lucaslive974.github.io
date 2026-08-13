import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './presentation/App.tsx';
import './presentation/styles/index.css';
import { I18nProvider } from './presentation/context/I18nContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>,
);
