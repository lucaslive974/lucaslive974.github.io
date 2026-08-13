import React from 'react';
import { useI18n } from '../../context/I18nContext';
import { SectionHeader } from '../common/SectionHeader';
import { Mail, MessageSquare, MapPin, UserCircle2, Code2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, label, value, href }) => {
  const content = (
    <>
      <div className="flex items-center justify-center p-4 bg-indigo-500/10 text-indigo-400 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon size={32} />
      </div>
      <h3 className="text-zinc-400 text-sm mb-2">{label}</h3>
      <p className="text-zinc-100 font-semibold text-center group-hover:text-indigo-400 transition-colors w-full break-all px-2">
        {value}
      </p>
    </>
  );

  const containerClasses = "flex flex-col items-center justify-center p-6 h-full group bg-zinc-900/50 hover:bg-zinc-800/80 border border-zinc-800 hover:border-indigo-500/50 transition-all rounded-2xl";

  if (href) {
    return (
      <a 
        href={href} 
        target={href.startsWith('mailto:') || href.startsWith('https://wa.me') ? '_self' : '_blank'} 
        rel="noopener noreferrer" 
        className={`${containerClasses} cursor-pointer`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={containerClasses}>
      {content}
    </div>
  );
};

export const ContactSection: React.FC = () => {
  const { t } = useI18n();
  const { contact } = t;

  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <SectionHeader title={contact.title} />
      
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: CTA & Location */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tight leading-tight">
            {contact.cta}
          </h2>
          
          <div className="flex items-center space-x-4 text-zinc-400 p-4 bg-zinc-900/30 rounded-2xl border border-zinc-800/50 w-fit">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm font-medium">{contact.locationLabel}</p>
              <p className="text-zinc-100 font-semibold">{contact.locationValue}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ContactCard 
            icon={Mail} 
            label={contact.emailLabel} 
            value="lucaribeirolima974@gmail.com" 
            href="mailto:lucaribeirolima974@gmail.com" 
          />
          <ContactCard 
            icon={MessageSquare} 
            label={contact.phoneLabel} 
            value="+55 31 98496-1351" 
            href="https://wa.me/5531984961351" 
          />
          <ContactCard 
            icon={UserCircle2} 
            label={contact.linkedinLabel} 
            value="lucas-ribeiro-lima40" 
            href="https://linkedin.com/in/lucas-ribeiro-lima40" 
          />
          <ContactCard 
            icon={Code2} 
            label={contact.githubLabel} 
            value="lucaslive974" 
            href="https://github.com/lucaslive974" 
          />
        </div>
      </div>
    </section>
  );
};
