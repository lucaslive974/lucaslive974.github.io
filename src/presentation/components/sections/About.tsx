import React from 'react';
import { useI18n } from '../../context/I18nContext';
import { SectionHeader } from '../common/SectionHeader';
import { GraduationCap, Coffee } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20 scroll-mt-16">
      <SectionHeader title={t.about.title} />
      
      <div className="bg-surface border border-border rounded-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="text-xl font-bold text-text-main">Education</h3>
            </div>
            <p className="text-text-muted leading-relaxed text-lg">
              {t.about.education}
            </p>
          </div>
          
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Coffee className="text-primary" size={24} />
              <h3 className="text-xl font-bold text-text-main">Beyond the Code</h3>
            </div>
            <p className="text-text-muted leading-relaxed text-lg">
              {t.about.personal}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
