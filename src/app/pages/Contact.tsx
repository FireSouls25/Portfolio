'use client';

import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import TextType from '../components/TextType';

const Contact: React.FC = () => {
  const { language, translations } = useThemeLanguage();
  const t = useMemo(() => translations.contact[language] || translations.contact.en, [language, translations]);

  const memoizedTitle = useMemo(() => [t.title], [t]);
  const memoizedEmail = useMemo(() => [t.email], [t]);
  const memoizedGithub = useMemo(() => [t.github], [t]);
  const memoizedLinkedin = useMemo(() => [t.linkedin], [t]);
  const memoizedCv = useMemo(() => [t.cv], [t]);

  return (
    <div className="text-foreground font-mono p-4 pt-16">
      <h1 className="text-6xl mb-4 text-main-100">
        <TextType text={memoizedTitle} typingSpeed={40} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} />
      </h1>
      <div className="flex flex-col space-y-4 text-xl">
        <span className="flex items-center">
          <img src="/images/contacts/proton-mail-logo.svg" alt="Email" className="w-6 h-6 mr-2" />
          <TextType text={memoizedEmail} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} />
        </span>
        <span className="flex items-center">
          <img src="/images/contacts/github-logo.svg" alt="Github" className="w-6 h-6 mr-2" />
          <TextType text={memoizedGithub} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} />
        </span>
        <span className="flex items-center">
          <img src="/images/contacts/linkedin-logo.svg" alt="LinkedIn" className="w-6 h-6 mr-2" />
          <TextType text={memoizedLinkedin} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} />
        </span>
        <span className="flex items-center">
          <img src="/images/contacts/download-logo.svg" alt="Download CV" className="w-6 h-6 mr-2" />
          <TextType text={memoizedCv} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} />
        </span>
      </div>
    </div>
  );
};

export default Contact;
