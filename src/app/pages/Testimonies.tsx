'use client';

import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import TextType from '../TextType';

const translations = {
  en: {
    title: "Testimonies",
    testimony1: "Fusce sit amet tortor quis erat dapibus viverra. Mauris congue tempor lorem, vel tristique orci egestas ac.",
    author1: "- tal",
    testimony2: "Nunc et lacus ut nisl blandit sodales in ut diam. Etiam lobortis, orci ut semper cursus, diam tortor molestie dolor.",
    author2: "- tal.2",
    testimony3: "Vestibulum ut luctus augue. Sed orci enim, venenatis at dui vitae, dictum venenatis nisi. Vestibulum facilisis felis purus.",
    author3: "- tal.3",
    testimony4: "Donec viverra risus eu ex rutrum, in lobortis ex faucibus. Suspendisse at pharetra mauris.",
    author4: "- tal.4",
  },
  es: {
    title: "Testimonios",
    testimony1: "Fusce sit amet tortor quis erat dapibus viverra. Mauris congue tempor lorem, vel tristique orci egestas ac.",
    author1: "- tal",
    testimony2: "Nunc et lacus ut nisl blandit sodales in ut diam. Etiam lobortis, orci ut semper cursus, diam tortor molestie dolor.",
    author2: "- tal.2",
    testimony3: "Vestibulum ut luctus augue. Sed orci enim, venenatis at dui vitae, dictum venenatis nisi. Vestibulum facilisis felis purus.",
    author3: "- tal.3",
    testimony4: "Donec viverra risus eu ex rutrum, in lobortis ex faucibus. Suspendisse at pharetra mauris.",
    author4: "- tal.4",
  },
};

const Testimonies: React.FC = () => {
  const { language } = useThemeLanguage();
  const t = useMemo(() => translations[language] || translations.en, [language]);

  const memoizedTitle = useMemo(() => [t.title], [t]);
  const memoizedTestimony1 = useMemo(() => [t.testimony1], [t]);
  const memoizedAuthor1 = useMemo(() => [t.author1], [t]);
  const memoizedTestimony2 = useMemo(() => [t.testimony2], [t]);
  const memoizedAuthor2 = useMemo(() => [t.author2], [t]);
  const memoizedTestimony3 = useMemo(() => [t.testimony3], [t]);
  const memoizedAuthor3 = useMemo(() => [t.author3], [t]);
  const memoizedTestimony4 = useMemo(() => [t.testimony4], [t]);
  const memoizedAuthor4 = useMemo(() => [t.author4], [t]);

  return (
    <div className="text-foreground font-mono p-4">
      <h1 className="text-6xl mb-4 text-main-100">
        <TextType text={memoizedTitle} typingSpeed={30} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']}/>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-xl mb-4">
            <TextType text={memoizedTestimony1} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={500}/>
          </p>
          <p className="text-xl mb-4 text-main-70">
            <TextType text={memoizedAuthor1} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={1800}/>
          </p>
        </div>
        <div>
          <p className="text-xl mb-4">
            <TextType text={memoizedTestimony2} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={1200}/>
          </p>
          <p className="text-xl mb-4 text-main-70">
            <TextType text={memoizedAuthor2} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={2500}/>
          </p>
        </div>
        <div>
          <p className="text-xl mb-4">
            <TextType text={memoizedTestimony3} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={2200}/>
          </p>
          <p className="text-xl mb-4 text-main-70">
            <TextType text={memoizedAuthor3} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={3800}/>
          </p>
        </div>
        <div>
          <p className="text-xl mb-4">
            <TextType text={memoizedTestimony4} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={3200}/>
          </p>
          <p className="text-xl mb-4 text-main-70">
            <TextType text={memoizedAuthor4} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['hsl(120, 100%, 55%)']} initialDelay={4200}/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
