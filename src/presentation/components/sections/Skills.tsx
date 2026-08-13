import React from 'react';
import { useI18n } from '../../context/I18nContext';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Code2, GitMerge, Box } from 'lucide-react';

export const Skills: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="skills" className="py-20 scroll-mt-16">
      <SectionHeader title={t.skills.title} />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <div className="flex items-center space-x-3 mb-6">
            <Code2 className="text-primary" size={24} />
            <h3 className="text-xl font-bold text-text-main">Technologies</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-zinc-300 font-medium">{t.skills.proficient}</p>
            </div>
            <div>
              <p className="text-text-muted">{t.skills.familiar}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3 mb-6">
            <GitMerge className="text-primary" size={24} />
            <h3 className="text-xl font-bold text-text-main">{t.skills.advancedGitTitle}</h3>
          </div>
          <p className="text-text-muted leading-relaxed">
            {t.skills.advancedGitDesc}
          </p>
        </Card>

        <Card>
          <div className="flex items-center space-x-3 mb-6">
            <Box className="text-primary" size={24} />
            <h3 className="text-xl font-bold text-text-main">{t.skills.dockerTitle}</h3>
          </div>
          <p className="text-text-muted leading-relaxed">
            {t.skills.dockerDesc}
          </p>
        </Card>
      </div>
    </section>
  );
};
