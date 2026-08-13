import React, { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors ${className}`}>
      {children}
    </div>
  );
};
