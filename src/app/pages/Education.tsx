'use client';

import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import TextType from '../TextType';

const Education: React.FC = () => {
  const { language, translations } = useThemeLanguage();
  const t = useMemo(() => translations.education[language] || translations.education.en, [language, translations]);

  const memoizedTitle = useMemo(() => [t.title], [t]);
  const memoizedUniversity = useMemo(() => [t.university], [t]);
  const memoizedDescription = useMemo(() => [t.description], [t]);

  return (
    <div className="text-foreground font-mono p-4 pt-16">
      <h1 className="text-6xl mb-4 text-main-100">
        <TextType text={memoizedTitle} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-xl mb-4">
            <TextType text={memoizedDescription} typingSpeed={5} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={200}/>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl mb-2 text-main-85">
            <TextType text={memoizedUniversity} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={200}/>
          </h2>
          <img src="/images/education/ucc_logo.svg" alt="Universidad Cooperativa de Colombia" className="w-100 h-100 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Education;
