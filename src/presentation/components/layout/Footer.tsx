import React from 'react';
import { Code2, UserCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Lucas Ribeiro. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/lucaslive974" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
            <Code2 size={20} />
          </a>
          <a href="https://linkedin.com/in/lucas-ribeiro-lima40" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
            <UserCircle2 size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
