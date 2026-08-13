import React from 'react';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-text-main tracking-tight">{title}</h2>
      <div className="h-1 w-12 bg-primary mt-4 rounded-full"></div>
    </div>
  );
};
