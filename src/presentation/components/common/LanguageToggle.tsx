import React from 'react';
import { useI18n } from '../../context/I18nContext';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useI18n();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 text-sm font-medium border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors"
      aria-label="Toggle Language"
    >
      {language === 'en' ? 'EN' : 'PT'}
    </button>
  );
};
