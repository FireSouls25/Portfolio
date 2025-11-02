'use client';


import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import TextType from '../components/TextType';

const Projects: React.FC = () => {
  const { language, translations } = useThemeLanguage();
  const t = useMemo(() => translations.projects[language] || translations.projects.en, [language, translations]);

  const title = useMemo(() => Array.isArray(t.title) ? t.title : [t.title], [t.title]);
  const project1Title = useMemo(() => Array.isArray(t.project1Title) ? t.project1Title : [t.project1Title], [t.project1Title]);
  const project1Desc = useMemo(() => Array.isArray(t.project1Desc) ? t.project1Desc : [t.project1Desc], [t.project1Desc]);
  const project2Title = useMemo(() => Array.isArray(t.project2Title) ? t.project2Title : [t.project2Title], [t.project2Title]);
  const project2Desc = useMemo(() => Array.isArray(t.project2Desc) ? t.project2Desc : [t.project2Desc], [t.project2Desc]);
  const project3Title = useMemo(() => Array.isArray(t.project3Title) ? t.project3Title : [t.project3Title], [t.project3Title]);
  const project3Desc = useMemo(() => Array.isArray(t.project3Desc) ? t.project3Desc : [t.project3Desc], [t.project3Desc]);

  return (
    <div className="text-foreground font-mono p-4 pt-16 bg-cline rounded-xl opacity-90">
      <h1 className="text-[48px] md:text-[96px] mb-4">
        <TextType text={title} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[28px] md:text-[46px] mb-2 text-main-85">
            <TextType text={project1Title} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={200}/>
          </h2>
          <span className="text-[20px] md:text-[32px] mb-4">
            <TextType text={project1Desc} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={400}/>
          </span>
          <img src="/images/projects/3D_calculator.webp" alt="3D Graphic Calculator" 
               className="w-full h-auto object-cover rounded rounded-xl border-2 border-green-600" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[28px] md:text-[46px] mb-2 text-main-85">
            <TextType text={project2Title} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={2000}/>
          </h2>
          <span className="text-[20px] md:text-[32px] mb-4">
            <TextType text={project2Desc} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={2200}/>
          </span>
          <img src="/images/projects/project2.webp" 
               className="w-full h-auto object-cover rounded rounded-xl border-2 border-green-600" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[28px] md:text-[46px] mb-2 text-main-85">
            <TextType text={project3Title} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={4100}/>
          </h2>
          <span className="text-[20px] md:text-[32px] mb-4">
            <TextType text={project3Desc} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={4300}/>
          </span>
          <img src="/images/projects/settings.webp" 
               className="w-96 h-auto object-cover rounded rounded-xl border-2 border-green-600" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
