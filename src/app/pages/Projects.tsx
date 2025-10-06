'use client';

import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import TextType from '../TextType';

const translations = {
  en: {
    title: "Projects",
    project1Title: "3D Graphic Calculator",
    project1Desc: "A web-based 3D graphic calculator that visualizes functions in three dimensions. It also features built-in tools to compute derivatives and integrals.",
    project2Title: "News Dashboard Interface",
    project2Desc: "A dynamic news dashboard using Tailwind CSS, showcasing article cards, category filters, and user profiles with interactive elements, optimized for a clean and engaging layout.",
    project3Title: "Tailwind Settings Interface",
    project3Desc: "A sleek settings panel built with Tailwind CSS, featuring customizable themes, accent color options, and accessibility toggles, designed for a user-friendly experience.",
  },
  es: {
    title: "Proyectos",
    project1Title: "Calculadora Gráfica 3D",
    project1Desc: "Una calculadora gráfica 3D basada en la web que visualiza funciones en tres dimensiones. También cuenta con herramientas integradas para calcular derivadas e integrales.",
    project2Title: "Interfaz de Panel de Noticias",
    project2Desc: "Un panel de noticias dinámico que utiliza Tailwind CSS, mostrando tarjetas de artículos, filtros de categoría y perfiles de usuario con elementos interactivos, optimizado para un diseño limpio y atractivo.",
    project3Title: "Interfaz de Configuración de Tailwind",
    project3Desc: "Un elegante panel de configuración creado con Tailwind CSS, con temas personalizables, opciones de color de acento y conmutadores de accesibilidad, diseñado para una experiencia de usuario amigable.",
  },
};

const Projects: React.FC = () => {
  const { language } = useThemeLanguage();
  const t = useMemo(() => translations[language] || translations.en, [language]);

  const memoizedTitle = useMemo(() => [t.title], [t]);
  const memoizedProject1Title = useMemo(() => [t.project1Title], [t]);
  const memoizedProject1Desc = useMemo(() => [t.project1Desc], [t]);
  const memoizedProject2Title = useMemo(() => [t.project2Title], [t]);
  const memoizedProject2Desc = useMemo(() => [t.project2Desc], [t]);
  const memoizedProject3Title = useMemo(() => [t.project3Title], [t]);
  const memoizedProject3Desc = useMemo(() => [t.project3Desc], [t]);

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
          <img src="/file.svg" alt="3D Graphic Calculator" className="w-full h-auto object-cover rounded" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl mb-2 text-main-85">
            <TextType text={memoizedProject2Title} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={2000}/>
          </h2>
          <span className="text-lg mb-4">
            <TextType text={memoizedProject2Desc} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={2200}/>
          </span>
          <img src="/file.svg" alt="News Dashboard Interface" className="w-full h-auto object-cover rounded" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl mb-2 text-main-85">
            <TextType text={memoizedProject3Title} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={4100}/>
          </h2>
          <span className="text-lg mb-4">
            <TextType text={memoizedProject3Desc} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={4300}/>
          </span>
          <img src="/file.svg" alt="Tailwind Settings Interface" className="w-full h-auto object-cover rounded" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
