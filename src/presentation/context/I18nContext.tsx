import React, { createContext, useState, type ReactNode, useContext, useCallback } from 'react';
import { en } from '../i18n/dictionaries/en';
import { pt } from '../i18n/dictionaries/pt';
import type { ITranslationDictionary } from '../../core/domain/interfaces/ITranslationDictionary';

type Language = 'en' | 'pt';

interface I18nContextProps {
  language: Language;
  t: ITranslationDictionary;
  toggleLanguage: () => void;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'));
  }, []);

  const t = language === 'en' ? en : pt;

  return (
    <I18nContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextProps => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
