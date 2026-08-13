import React from 'react';
import { useI18n } from '../../context/I18nContext';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Box, Layers, TerminalSquare, ExternalLink, CheckCircle2, CircleDashed, FileSearch } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useI18n();
  const { orionGl, bonfire, gaia, codeX } = t.projects.items;

  // Helper to render detailed "Hero" projects
  const renderHeroProject = (
    project: any, 
    Icon: LucideIcon, 
    colorTextClass: string, 
    colorBorderClass: string, 
    colorBgClass: string
  ) => (
    <Card className={`flex flex-col relative group border ${colorBorderClass} transition-colors`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${colorBgClass} ${colorTextClass}`}>
            <Icon size={28} />
          </div>
          <h3 className="text-2xl font-bold text-text-main">{project.name}</h3>
        </div>
        {project.url && (
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors p-2"
            aria-label={`View ${project.name} source code`}
          >
            <ExternalLink size={24} />
          </a>
        )}
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mt-4">
        <div className="flex flex-col">
          <p className="text-text-muted text-base leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6 md:mb-0">
            {project.tags.map((tag: string) => (
              <span key={tag} className={`px-3 py-1 bg-zinc-800/30 ${colorTextClass} text-sm rounded-full border border-zinc-700/50`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-background/50 rounded-xl p-6 border border-border/80 shadow-inner">
          <h4 className="text-text-main font-semibold mb-4 flex items-center">
            <span className="bg-zinc-800 text-xs px-2 py-1 rounded text-zinc-300 mr-3 uppercase tracking-wider font-bold">Details</span>
            Architecture
          </h4>
          <ul className="space-y-3 mb-6">
            {project.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start space-x-3 text-text-muted text-sm">
                <CheckCircle2 size={18} className={`${colorTextClass} shrink-0 mt-0.5`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex items-start space-x-3 text-zinc-500 text-sm p-4 bg-surface/50 rounded-lg border border-border/50 border-l-2 border-l-zinc-700">
            <CircleDashed size={18} className="shrink-0 mt-0.5 text-zinc-600" />
            <span className="italic">{project.todo}</span>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <section id="projects" className="py-20 scroll-mt-16">
      <SectionHeader title={t.projects.title} />
      
      <div className="space-y-8">
        
        {/* OrionGL - Hero Project */}
        {renderHeroProject(
          orionGl,
          Box,
          'text-primary',
          'border-primary/20 hover:border-primary/40',
          'bg-primary/10'
        )}

        {/* Bonfire - Hero Project */}
        {renderHeroProject(
          bonfire,
          Layers,
          'text-orange-400',
          'border-orange-500/20 hover:border-orange-500/40',
          'bg-orange-500/10'
        )}

        {/* Other Regular Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="flex flex-col hover:border-zinc-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <TerminalSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-text-main">{codeX.name}</h3>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
              {codeX.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {codeX.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-zinc-800/30 text-emerald-400 text-xs rounded-full border border-emerald-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </Card>

          {/* Gaia - Regular Project */}
          <Card className="flex flex-col hover:border-zinc-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                <FileSearch size={24} />
              </div>
              <h3 className="text-xl font-bold text-text-main">{gaia.name}</h3>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
              {gaia.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {gaia.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-zinc-800/30 text-cyan-400 text-xs rounded-full border border-cyan-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};
