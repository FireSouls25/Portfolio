'use client';

import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import TextType from '../TextType';

const Testimonies: React.FC = () => {
  const { language, translations } = useThemeLanguage();
  const t = useMemo(() => translations.testimonies[language] || translations.testimonies.en, [language, translations]);

  const memoizedTitle = useMemo(() => [t.title], [t]);
  const memoizedTestimony1 = useMemo(() => [t.testimony1], [t]);
  const memoizedAuthor1 = useMemo(() => [t.author1], [t]);
  const memoizedTestimony2 = useMemo(() => [t.testimony2], [t]);
  const memoizedAuthor2 = useMemo(() => [t.author2], [t]);
  const memoizedTestimony3 = useMemo(() => [t.testimony3], [t]);
  const memoizedAuthor3 = useMemo(() => [t.author3], [t]);
  const memoizedTestimony4 = useMemo(() => [t.testimony4], [t]);
  const memoizedAuthor4 = useMemo(() => [t.author4], [t]);

  return (
    <div className="text-foreground font-mono p-4 pt-16">
      <h1 className="text-6xl mb-4 text-main-100">
        <TextType text={memoizedTitle} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']}/>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <span className="text-xl mb-4">
            <TextType text={memoizedTestimony1} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={500}/>
          </span>
          <span className="text-xl mb-4 text-main-70">
            <TextType text={memoizedAuthor1} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={1800}/>
          </span>
        </div>
        <div>
          <span className="text-xl mb-4">
            <TextType text={memoizedTestimony2} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={1200}/>
          </span>
          <span className="text-xl mb-4 text-main-70">
            <TextType text={memoizedAuthor2} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={2500}/>
          </span>
        </div>
        <div>
          <span className="text-xl mb-4">
            <TextType text={memoizedTestimony3} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={2200}/>
          </span>
          <span className="text-xl mb-4 text-main-70">
            <TextType text={memoizedAuthor3} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={3800}/>
          </span>
        </div>
        <div>
          <span className="text-xl mb-4">
            <TextType text={memoizedTestimony4} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={3200}/>
          </span>
          <span className="text-xl mb-4 text-main-70">
            <TextType text={memoizedAuthor4} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={4200}/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
