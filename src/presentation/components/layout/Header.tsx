import React from 'react';
import { useI18n } from '../../context/I18nContext';
import { useActiveSection } from '../../hooks/useActiveSection';
import { LanguageToggle } from '../common/LanguageToggle';

const NAV_ITEMS = [
  { id: 'experience', labelKey: 'experience' },
  { id: 'skills', labelKey: 'skills' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'repos', labelKey: 'repos' },
  { id: 'about', labelKey: 'about' },
] as const;

export const Header: React.FC = () => {
  const { t } = useI18n();
  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id));

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-zinc-100 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          LR.
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map(({ id, labelKey }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                activeSection === id ? 'text-indigo-400' : 'text-zinc-400'
              }`}
            >
              {t.nav[labelKey]}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};
