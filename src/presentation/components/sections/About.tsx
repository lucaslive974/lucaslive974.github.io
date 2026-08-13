import React from 'react';
import { useI18n } from '../../context/I18nContext';
import { SectionHeader } from '../common/SectionHeader';
import { GraduationCap, Coffee } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20 scroll-mt-16">
      <SectionHeader title={t.about.title} />
      
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="text-indigo-400" size={24} />
              <h3 className="text-xl font-bold text-zinc-100">Education</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed text-lg">
              {t.about.education}
            </p>
          </div>
          
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Coffee className="text-indigo-400" size={24} />
              <h3 className="text-xl font-bold text-zinc-100">Beyond the Code</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed text-lg">
              {t.about.personal}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
