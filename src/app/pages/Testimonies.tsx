'use client';

import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import TextType from '../components/TextType';

const Testimonies: React.FC = () => {
  const { language, translations } = useThemeLanguage();
  const t = useMemo(() => translations.testimonies[language] || translations.testimonies.en, [language, translations]);

  const memoizedTitle = useMemo(() => Array.isArray(t.title) ? t.title : [t.title], [t.title]);
  const memoizedTestimony1 = useMemo(() => Array.isArray(t.testimony1) ? t.testimony1 : [t.testimony1], [t.testimony1]);
  const memoizedAuthor1 = useMemo(() => Array.isArray(t.author1) ? t.author1 : [t.author1], [t.author1]);
  const memoizedTestimony2 = useMemo(() => Array.isArray(t.testimony2) ? t.testimony2 : [t.testimony2], [t.testimony2]);
  const memoizedAuthor2 = useMemo(() => Array.isArray(t.author2) ? t.author2 : [t.author2], [t.author2]);
  const memoizedTestimony3 = useMemo(() => Array.isArray(t.testimony3) ? t.testimony3 : [t.testimony3], [t.testimony3]);
  const memoizedAuthor3 = useMemo(() => Array.isArray(t.author3) ? t.author3 : [t.author3], [t.author3]);
  const memoizedTestimony4 = useMemo(() => Array.isArray(t.testimony4) ? t.testimony4 : [t.testimony4], [t.testimony4]);
  const memoizedAuthor4 = useMemo(() => Array.isArray(t.author4) ? t.author4 : [t.author4], [t.author4]);

  return (
    <div className="text-foreground font-mono p-4 pt-16">
      <h1 className="text-6xl mb-4 text-main-100">
        <TextType text={memoizedTitle} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['var(--main)']}/>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <span className="text-xl mb-4">
            <TextType text={memoizedTestimony1} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={500}/>
          </span>
          <span className="text-xl mb-4 text-main-70">
            <TextType text={memoizedAuthor1} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={1800}/>
          </span>
        </div>
        <div>
          <span className="text-xl mb-4">
            <TextType text={memoizedTestimony2} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={1200}/>
          </span>
          <span className="text-xl mb-4 text-main-70">
            <TextType text={memoizedAuthor2} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={2500}/>
          </span>
        </div>
        <div>
          <span className="text-xl mb-4">
            <TextType text={memoizedTestimony3} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={2200}/>
          </span>
          <span className="text-xl mb-4 text-main-70">
            <TextType text={memoizedAuthor3} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={3800}/>
          </span>
        </div>
        <div>
          <span className="text-xl mb-4">
            <TextType text={memoizedTestimony4} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={3200}/>
          </span>
          <span className="text-xl mb-4 text-main-70">
            <TextType text={memoizedAuthor4} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={4200}/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
