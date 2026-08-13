import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`relative rounded-full overflow-hidden border-4 border-border/50 shadow-2xl ${className}`}>
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full grayscale-[80%] opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 hover:mix-blend-normal transition-all duration-700 ease-in-out"
      />
    </div>
  );
};
