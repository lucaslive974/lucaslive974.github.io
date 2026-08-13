import React from 'react';
import { useI18n } from '../../context/I18nContext';
import { Code2, UserCircle2 } from 'lucide-react';
import { Avatar } from '../common/Avatar';

export const Hero: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-20">
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-12">
        <div className="space-y-6 flex-1">
          <p className="text-primary font-mono text-lg">{t.hero.greeting}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-text-main tracking-tight">
            {t.hero.title}.
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-2xl leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex space-x-6 pt-8">
            <a href="https://github.com/lucaslive974" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              <Code2 size={28} />
            </a>
            <a href="https://linkedin.com/in/lucas-ribeiro-lima40" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              <UserCircle2 size={28} />
            </a>
          </div>
        </div>
        
        <div className="flex-shrink-0 flex justify-start md:justify-end">
          <Avatar 
            src="/my_photo.jpg" 
            alt="Lucas Ribeiro" 
            className="w-48 h-48 md:w-64 md:h-64"
          />
        </div>
      </div>
    </section>
  );
};
