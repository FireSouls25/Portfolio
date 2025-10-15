'use client';

import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import TextType from '../TextType';

const AboutMe: React.FC = () => {
  const { language, translations } = useThemeLanguage();
  const t = useMemo(() => translations.aboutme[language] || translations.aboutme.en, [language, translations]);

  const memoizedTitle = useMemo(() => [t.title], [t]);
  const memoizedP1 = useMemo(() => [t.p1], [t]);
  const memoizedP2 = useMemo(() => [t.p2], [t]);
  const memoizedP3 = useMemo(() => [t.p3], [t]);

  return (
    <div className="text-foreground font-mono p-4 pt-16">
      <h1 className="text-6xl mb-4 text-main-100">
        <TextType text={memoizedTitle} 
        typingSpeed={60} 
        pauseDuration={2000} 
        showCursor={false} 
        textColors={['hsl(120, 100%, 55%)']}
        />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <span className="text-xl mb-4">
            <TextType text={memoizedP1} 
            typingSpeed={10} 
            pauseDuration={2000} 
            showCursor={false} 
            initialDelay={1000}
            textColors={['hsl(120, 100%, 55%)']}
            />
          </span>
          <span className="text-xl mb-4">
            <TextType text={memoizedP2} 
            typingSpeed={10} 
            pauseDuration={2000} 
            showCursor={false} 
            initialDelay={3000}
            textColors={['hsl(120, 100%, 55%)']}
            />
          </span>
          <span className="text-xl mb-4">
            <TextType text={memoizedP3} 
            typingSpeed={20} 
            pauseDuration={2000} 
            showCursor={false} 
            initialDelay={5000}
            textColors={['hsl(120, 100%, 55%)']}
            />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/file.svg" alt="Profile 1" className="w-full h-auto object-cover rounded" />
          <img src="/file.svg" alt="Profile 2" className="w-full h-auto object-cover rounded" />
          <img src="/file.svg" alt="Profile 3" className="w-full h-auto object-cover rounded" />
          <img src="/file.svg" alt="Profile 4" className="w-full h-auto object-cover rounded" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
