import React, { useRef } from 'react';
import { useI18n } from '../../context/I18nContext';
import { useGithubRepos } from '../../hooks/useGithubRepos';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export const GithubRepoCarousel: React.FC = () => {
  const { t } = useI18n();
  const { repos, loading, isError } = useGithubRepos('lucaslive974');
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      // 320px + 24px (gap) = 344px
      carouselRef.current.scrollBy({ left: -344, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 344, behavior: 'smooth' });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
  };

  if (isError || (!loading && repos.length === 0)) {
    return null;
  }

  return (
    <section id="repos" className="py-20 scroll-mt-16">
      <SectionHeader title={t.repos.title} />
      
      {loading && (
        <div className="flex justify-center py-12">
          <div className="animate-pulse flex space-x-2">
            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
            <div className="w-3 h-3 bg-indigo-500 rounded-full animation-delay-200"></div>
            <div className="w-3 h-3 bg-indigo-500 rounded-full animation-delay-400"></div>
          </div>
        </div>
      )}

      {!loading && (
        <div className="relative group">
          {/* Navigation Arrows */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 p-2 bg-zinc-900 border border-zinc-700 rounded-full text-zinc-400 hover:text-white hover:border-indigo-500 hover:bg-zinc-800 transition-all shadow-xl hidden md:flex opacity-0 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 p-2 bg-zinc-900 border border-zinc-700 rounded-full text-zinc-400 hover:text-white hover:border-indigo-500 hover:bg-zinc-800 transition-all shadow-xl hidden md:flex opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 -mx-4 px-4 md:-mx-8 md:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              .flex::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {repos.map((repo) => (
              <div 
                key={repo.id} 
                className="snap-start shrink-0 w-[85vw] sm:w-[320px] h-full"
              >
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full outline-none focus:ring-2 focus:ring-indigo-500 rounded-xl"
                  aria-label={`View ${repo.name} on GitHub`}
                >
                  <Card className="flex flex-col h-[260px] group/card hover:bg-zinc-800/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-zinc-100 group-hover/card:text-indigo-400 transition-colors truncate">
                        {repo.name}
                      </h3>
                      <ExternalLink size={16} className="text-zinc-600 group-hover/card:text-indigo-400 transition-colors shrink-0 ml-2" />
                    </div>
                    
                    <p className="text-sm text-zinc-400 line-clamp-3 mb-6 flex-grow">
                      {repo.description || 'No description available'}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-zinc-500 mt-auto pt-4 border-t border-zinc-800/50">
                      <div className="flex items-center space-x-4">
                        {repo.language && (
                          <div className="flex items-center space-x-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                            <span>{repo.language}</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-1.5">
                          <Star size={14} />
                          <span>{repo.stargazers_count}</span>
                        </div>
                      </div>
                      <span className="font-mono">{formatDate(repo.pushed_at)}</span>
                    </div>
                  </Card>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
