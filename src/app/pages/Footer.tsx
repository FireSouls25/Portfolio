'use client';

import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { MemoizedTextType } from '../components/MemoizedTextType';

const Footer: React.FC = () => {
  const { language, translations } = useThemeLanguage();
  const t = useMemo(() => translations.footer[language] || translations.footer.en, [language, translations]);

  const Title = useMemo(() => Array.isArray(t.title) ? t.title : [t.title], [t.title]);
  const License = useMemo(() => Array.isArray(t.license) ? t.license : [t.license], [t.license]);
  const Author = useMemo(() => Array.isArray(t.author) ? t.author : [t.author], [t.author]);

  return (
    <div className="text-foreground font-mono p-4 pt-16 p-2 bg-cline rounded-xl opacity-85">
      <h1 className="text-[48px] md:text-[96px] mb-4 text-main-100">
        <MemoizedTextType text={Title} typingSpeed={40} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} />
      </h1>
      <div className="flex flex-col space-y-4 text-[20px] md:text-[32px]">
        <div>
          <MemoizedTextType text={License} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} />
        </div>
        <div>
          <MemoizedTextType text={Author} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
