'use client';

import Image from 'next/image';
import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import TextType from '../components/TextType';

const AboutMe: React.FC = () => {
  const { language, translations } = useThemeLanguage();
  const t = useMemo(() => translations.aboutme[language] || translations.aboutme.en, [language, translations]);

  const memoizedTitle = useMemo(() => Array.isArray(t.title) ? t.title : [t.title], [t.title]);
  const memoizedP1 = useMemo(() => Array.isArray(t.p1) ? t.p1 : [t.p1], [t.p1]);
  const memoizedP2 = useMemo(() => Array.isArray(t.p2) ? t.p2 : [t.p2], [t.p2]);
  const memoizedP3 = useMemo(() => Array.isArray(t.p3) ? t.p3 : [t.p3], [t.p3]);

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
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
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
        <div className="grid grid-cols-4 gap-4 mt-8">
          <img src="/images/aboutme/dog.webp" alt="Profile 1" className="w-100 h-100 object-cover rounded" />
          <img src="/images/aboutme/me_working.webp" alt="Profile 2" className="w-100 h-100 object-cover rounded" />
          <img src="/images/aboutme/me.webp" alt="Profile 3" className="w-100 h-100 object-cover rounded" />
          <img src="/images/aboutme/working.webp" alt="Profile 4" className="w-100 h-100 object-cover rounded" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
