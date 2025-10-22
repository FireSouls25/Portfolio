'use client';

import Image from 'next/image';
import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import TextType from '../components/TextType';

const Projects: React.FC = () => {
  const { language, translations } = useThemeLanguage();
  const t = useMemo(() => translations.projects[language] || translations.projects.en, [language, translations]);

  const memoizedTitle = useMemo(() => Array.isArray(t.title) ? t.title : [t.title], [t.title]);
  const memoizedProject1Title = useMemo(() => Array.isArray(t.project1Title) ? t.project1Title : [t.project1Title], [t.project1Title]);
  const memoizedProject1Desc = useMemo(() => Array.isArray(t.project1Desc) ? t.project1Desc : [t.project1Desc], [t.project1Desc]);
  const memoizedProject2Title = useMemo(() => Array.isArray(t.project2Title) ? t.project2Title : [t.project2Title], [t.project2Title]);
  const memoizedProject2Desc = useMemo(() => Array.isArray(t.project2Desc) ? t.project2Desc : [t.project2Desc], [t.project2Desc]);
  const memoizedProject3Title = useMemo(() => Array.isArray(t.project3Title) ? t.project3Title : [t.project3Title], [t.project3Title]);
  const memoizedProject3Desc = useMemo(() => Array.isArray(t.project3Desc) ? t.project3Desc : [t.project3Desc], [t.project3Desc]);

  return (
    <div className="text-foreground font-mono p-4 pt-16">
      <h1 className="text-6xl mb-4 text-main-100">
        <TextType text={memoizedTitle} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl mb-2 text-main-85">
            <TextType text={memoizedProject1Title} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={200}/>
          </h2>
          <span className="text-lg mb-4">
            <TextType text={memoizedProject1Desc} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={400}/>
          </span>
          <img src="/images/projects/3D_calculator.webp" alt="3D Graphic Calculator" className="w-full h-auto object-cover rounded" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl mb-2 text-main-85">
            <TextType text={memoizedProject2Title} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={2000}/>
          </h2>
          <span className="text-lg mb-4">
            <TextType text={memoizedProject2Desc} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={2200}/>
          </span>
          <img src="/images/projects/project2.webp" alt="News Dashboard Interface" className="w-full h-auto object-cover rounded" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl mb-2 text-main-85">
            <TextType text={memoizedProject3Title} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={4100}/>
          </h2>
          <span className="text-lg mb-4">
            <TextType text={memoizedProject3Desc} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={4300}/>
          </span>
          <img src="/images/projects/settings.webp" alt="Tailwind Settings Interface" className="w-full h-auto object-cover rounded" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
