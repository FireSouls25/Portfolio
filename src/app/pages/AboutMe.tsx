'use client';

import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import TextType from '../TextType';

const translations = {
  en: {
    title: "About Me",
    p1: "I'm a dedicated developer with experience in web development, bringing creative and functional designs to life with a focus on responsive layouts and smooth user experiences.",
    p2: "I also have experience working on backend with Spring Boot and Django. Over the years, I've tuned my skills in problem-solving and collaboration, working on diverse projects.",
    p3: "My attention to detail and passion for clean code ensure that every project I undertake is both efficient and visually appealing.",
  },
  es: {
    title: "Sobre Mí",
    p1: "Soy un desarrollador dedicado con experiencia en desarrollo web, dando vida a diseños creativos y funcionales con un enfoque en diseños receptivos y experiencias de usuario fluidas.",
    p2: "También tengo experiencia trabajando en backend con Spring Boot y Django. A lo largo de los años, he afinado mis habilidades en la resolución de problemas y la colaboración, trabajando en diversos proyectos.",
    p3: "Mi atención al detalle y mi pasión por el código limpio aseguran que cada proyecto que emprendo sea eficiente y visualmente atractivo.",
  },
};

const AboutMe: React.FC = () => {
  const { language } = useThemeLanguage();
  const t = useMemo(() => translations[language] || translations.en, [language]);

  const memoizedTitle = useMemo(() => [t.title], [t]);
  const memoizedP1 = useMemo(() => [t.p1], [t]);
  const memoizedP2 = useMemo(() => [t.p2], [t]);
  const memoizedP3 = useMemo(() => [t.p3], [t]);

  return (
    <div className="text-foreground font-mono p-4 pt-16">
      <h1 className="text-6xl mb-4 text-main-100">
        <TextType text={memoizedTitle} 
        typingSpeed={60} 
        pauseDuration={2000} 
        showCursor={false} 
        textColors={['hsl(120, 100%, 55%)']}
        />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <span className="text-xl mb-4">
            <TextType text={memoizedP1} 
            typingSpeed={10} 
            pauseDuration={2000} 
            showCursor={false} 
            initialDelay={1000}
            textColors={['hsl(120, 100%, 55%)']}
            />
          </span>
          <span className="text-xl mb-4">
            <TextType text={memoizedP2} 
            typingSpeed={10} 
            pauseDuration={2000} 
            showCursor={false} 
            initialDelay={3000}
            textColors={['hsl(120, 100%, 55%)']}
            />
          </span>
          <span className="text-xl mb-4">
            <TextType text={memoizedP3} 
            typingSpeed={20} 
            pauseDuration={2000} 
            showCursor={false} 
            initialDelay={5000}
            textColors={['hsl(120, 100%, 55%)']}
            />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/file.svg" alt="Profile 1" className="w-full h-auto object-cover rounded" />
          <img src="/file.svg" alt="Profile 2" className="w-full h-auto object-cover rounded" />
          <img src="/file.svg" alt="Profile 3" className="w-full h-auto object-cover rounded" />
          <img src="/file.svg" alt="Profile 4" className="w-full h-auto object-cover rounded" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
