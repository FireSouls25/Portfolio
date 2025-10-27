'use client';

import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import TextType from '../components/TextType';

const Testimonies: React.FC = () => {
  const { language, translations } = useThemeLanguage();
  const t = useMemo(() => translations.testimonies[language] || translations.testimonies.en, [language, translations]);

  const Title = useMemo(() => Array.isArray(t.title) ? t.title : [t.title], [t.title]);
  const Testimony1 = useMemo(() => Array.isArray(t.testimony1) ? t.testimony1 : [t.testimony1], [t.testimony1]);
  const Author1 = useMemo(() => Array.isArray(t.author1) ? t.author1 : [t.author1], [t.author1]);
  const Testimony2 = useMemo(() => Array.isArray(t.testimony2) ? t.testimony2 : [t.testimony2], [t.testimony2]);
  const Author2 = useMemo(() => Array.isArray(t.author2) ? t.author2 : [t.author2], [t.author2]);
  const Testimony3 = useMemo(() => Array.isArray(t.testimony3) ? t.testimony3 : [t.testimony3], [t.testimony3]);
  const Author3 = useMemo(() => Array.isArray(t.author3) ? t.author3 : [t.author3], [t.author3]);
  const Testimony4 = useMemo(() => Array.isArray(t.testimony4) ? t.testimony4 : [t.testimony4], [t.testimony4]);
  const Author4 = useMemo(() => Array.isArray(t.author4) ? t.author4 : [t.author4], [t.author4]);

  return (
    <div className="text-foreground font-mono p-4 pt-16">
      <h1 className="text-6xl mb-4 text-main-100">
        <TextType text={Title} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['var(--main)']}/>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <span className="text-xl mb-4">
            <TextType text={Testimony1} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={500}/>
          </span>
          <span className="text-xl mb-4 text-main-70">
            <TextType text={Author1} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={1800}/>
          </span>
        </div>
        <div>
          <span className="text-xl mb-4">
            <TextType text={Testimony2} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={1200}/>
          </span>
          <span className="text-xl mb-4 text-main-70">
            <TextType text={Author2} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={2500}/>
          </span>
        </div>
        <div>
          <span className="text-xl mb-4">
            <TextType text={Testimony3} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={2200}/>
          </span>
          <span className="text-xl mb-4 text-main-70">
            <TextType text={Author3} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={3800}/>
          </span>
        </div>
        <div>
          <span className="text-xl mb-4">
            <TextType text={Testimony4} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={3200}/>
          </span>
          <span className="text-xl mb-4 text-main-70">
            <TextType text={Author4} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={4200}/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
