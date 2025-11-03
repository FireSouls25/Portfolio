'use client';

import Image from 'next/image';
import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import TextType from '../components/TextType';

const Contact: React.FC = () => {
  const { language, translations } = useThemeLanguage();
  const t = useMemo(() => translations.contact[language] || translations.contact.en, [language, translations]);

  const Title = useMemo(() => Array.isArray(t.title) ? t.title : [t.title], [t.title]);
  const Email = useMemo(() => Array.isArray(t.email) ? t.email : [t.email], [t.email]);
  const Github = useMemo(() => Array.isArray(t.github) ? t.github : [t.github], [t.github]);
  const Linkedin = useMemo(() => Array.isArray(t.linkedin) ? t.linkedin : [t.linkedin], [t.linkedin]);


  return (
    <div className="text-foreground font-mono p-4 pt-16 p-2 bg-cline rounded-xl opacity-85">
      <h1 className="text-[48px] md:text-[96px] mb-4 text-main-100">
        <TextType text={Title} typingSpeed={40} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} />
      </h1>
      <div className="flex flex-col space-y-4 text-[20px] md:text-[32px]">
        <span className="flex items-center">
          <Image src="/images/contacts/proton-mail-logo.svg" alt="Email" width={24} height={24} className="w-6 h-6 mr-2" />
          <TextType text={Email} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} />
        </span>
        <span className="flex items-center">
          <Image src="/images/contacts/github-logo.svg" alt="Github" width={24} height={24} className="w-6 h-6 mr-2" />
          <TextType text={Github} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} />
        </span>
        <span className="flex items-center">
          <Image src="/images/contacts/linkedin-logo.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6 mr-2" />
          <TextType text={Linkedin} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} />
        </span>

      </div>
    </div>
  );
};

export default Contact;
