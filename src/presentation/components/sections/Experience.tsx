import React from 'react';
import { useI18n } from '../../context/I18nContext';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Briefcase, GitPullRequest } from 'lucide-react';

export const Experience: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-20 scroll-mt-16">
      <SectionHeader title={t.experience.title} />
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 text-zinc-800 group-hover:text-primary/20 transition-colors">
            <GitPullRequest size={64} />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-text-main">{t.experience.oss.title}</h3>
            <p className="text-primary font-medium mt-1">{t.experience.oss.role}</p>
            <p className="text-sm text-zinc-500 mt-1 mb-4">{t.experience.oss.period}</p>
            <p className="text-text-muted leading-relaxed">
              {t.experience.oss.description}
            </p>
          </div>
        </Card>

        <Card className="relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 text-zinc-800 group-hover:text-primary/20 transition-colors">
            <Briefcase size={64} />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-text-main">{t.experience.work.title}</h3>
            <p className="text-primary font-medium mt-1">{t.experience.work.role}</p>
            <p className="text-sm text-zinc-500 mt-1 mb-4">{t.experience.work.period}</p>
            <p className="text-text-muted leading-relaxed">
              {t.experience.work.description}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
