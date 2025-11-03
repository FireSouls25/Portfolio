'use client';


import React, { useMemo } from 'react';
import Image from 'next/image';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { MemoizedTextType } from '../components/MemoizedTextType';


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
  const project1Link = useMemo(() => Array.isArray(t.project1Link) ? t.project1Link : [t.project1Link], [t.project1Link]);
  const project1Github = useMemo(() => Array.isArray(t.project1Github) ? t.project1Github : [t.project1Github], [t.project1Github]);
  const project1GithubText = useMemo(() => Array.isArray(t.project1GithubText) ? t.project1GithubText : [t.project1GithubText], [t.project1GithubText]);
  const project2Link = useMemo(() => Array.isArray(t.project2Link) ? t.project2Link : [t.project2Link], [t.project2Link]);
  const project2Github = useMemo(() => Array.isArray(t.project2Github) ? t.project2Github : [t.project2Github], [t.project2Github]);
  const project2GithubText = useMemo(() => Array.isArray(t.project2GithubText) ? t.project2GithubText : [t.project2GithubText], [t.project2GithubText]);
  const project3Link = useMemo(() => Array.isArray(t.project3Link) ? t.project3Link : [t.project3Link], [t.project3Link]);
  const project3Github = useMemo(() => Array.isArray(t.project3Github) ? t.project3Github : [t.project3Github], [t.project3Github]);
  const project3GithubText = useMemo(() => Array.isArray(t.project3GithubText) ? t.project3GithubText : [t.project3GithubText], [t.project3GithubText]);

  return (
    <div className="text-foreground font-mono p-4 pt-16 bg-cline rounded-xl opacity-90">
      <h1 className="text-[48px] md:text-[96px] mb-4">
        <MemoizedTextType text={title} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[28px] md:text-[46px] mb-2 text-main-85">
            <MemoizedTextType text={project1Title} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={200}/>
          </h2>
          <span className="text-[20px] md:text-[32px] mb-4">
            <MemoizedTextType text={project1Desc} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={400}/>
          </span>
          <a href={project1Link[0]} target="_blank" rel="noopener noreferrer">
            <img src="/images/projects/3D_calculator.webp" alt="3D Graphic Calculator" 
                 className="w-full h-auto object-cover rounded rounded-xl border-2 border-green-600" />
          </a>
          <div className="flex items-center mt-2">
            <a href={project1Github[0]} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Image src="/images/contacts/github-logo.svg" alt="Github" width={24} height={24} className="w-6 h-6 mr-2" />
              <span className="text-[16px] md:text-[24px] text-main-85">{project1GithubText[0]}</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[28px] md:text-[46px] mb-2 text-main-85">
            <MemoizedTextType text={project2Title} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={2000}/>
          </h2>
          <span className="text-[20px] md:text-[32px] mb-4">
            <MemoizedTextType text={project2Desc} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={2200}/>
          </span>
          <a href={project2Link[0]} target="_blank" rel="noopener noreferrer">
            <img src="/images/projects/project2.webp" 
                 className="w-full h-auto object-cover rounded rounded-xl border-2 border-green-600" />
          </a>
          <div className="flex items-center mt-2">
            <a href={project2Github[0]} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Image src="/images/contacts/github-logo.svg" alt="Github" width={24} height={24} className="w-6 h-6 mr-2" />
              <span className="text-[16px] md:text-[24px] text-main-85">{project2GithubText[0]}</span>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[28px] md:text-[46px] mb-2 text-main-85">
            <MemoizedTextType text={project3Title} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={4100}/>
          </h2>
          <span className="text-[20px] md:text-[32px] mb-4">
            <MemoizedTextType text={project3Desc} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={4300}/>
          </span>
          <a href={project3Link[0]} target="_blank" rel="noopener noreferrer">
            <img src="/images/projects/map_app.webp" 
                 className="w-96 h-auto object-cover rounded rounded-xl border-2 border-green-600" />
          </a>
          <div className="flex items-center mt-2">
            <a href={project3Github[0]} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Image src="/images/contacts/github-logo.svg" alt="Github" width={24} height={24} className="w-6 h-6 mr-2" />
              <span className="text-[16px] md:text-[24px] text-main-85">{project3GithubText[0]}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
