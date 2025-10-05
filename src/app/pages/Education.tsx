'use client';

import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import TextType from '../TextType';

const translations = {
  en: {
    title: "Education",
    university: "Universidad Cooperativa de Colombia",
    description: "I am currently pursuing a degree in Software Engineering at Universidad Cooperativa de Colombia, located in Pasto, Nariño, Colombia. This program has equipped me with a solid foundation in programming, software design, and problem-solving, while also offering opportunities to work on real-world projects that enhance my technical and collaborative skills.",
  },
  es: {
    title: "Educación",
    university: "Universidad Cooperativa de Colombia",
    description: "Actualmente estoy cursando la carrera de Ingeniería de Software en la Universidad Cooperativa de Colombia, ubicada en Pasto, Nariño, Colombia. Este programa me ha proporcionado una base sólida en programación, diseño de software y resolución de problemas, al mismo tiempo que me ofrece oportunidades para trabajar en proyectos del mundo real que mejoran mis habilidades técnicas y de colaboración.",
  },
};

const Education: React.FC = () => {
  const { language } = useThemeLanguage();
  const t = useMemo(() => translations[language] || translations.en, [language]);

  const memoizedTitle = useMemo(() => [t.title], [t]);
  const memoizedUniversity = useMemo(() => [t.university], [t]);
  const memoizedDescription = useMemo(() => [t.description], [t]);

  return (
    <div className="text-foreground font-mono p-4">
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
          <img src="/globe.svg" alt="Universidad Cooperativa de Colombia" className="w-48 h-48 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Education;
