'use client';

import Image from 'next/image';
import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import TextType from '../components/TextType';
import PixelTransition from '../components/PixelTransition';

const Education: React.FC = () => {
  const { language, translations } = useThemeLanguage();
  const t = useMemo(() => translations.education[language] || translations.education.en, [language, translations]);

  const Title = useMemo(() => Array.isArray(t.title) ? t.title : [t.title], [t.title]);
  const University = useMemo(() => Array.isArray(t.university) ? t.university : [t.university], [t.university]);
  const Description = useMemo(() => Array.isArray(t.description) ? t.description : [t.description], [t.description]);

  return (
    <div className="text-foreground font-mono p-4 pt-16 bg-cline rounded-xl opacity-90">
      <h1 className="text-6xl mb-4 text-main-100">
        <TextType text={Title} typingSpeed={20} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-xl mb-4">
            <TextType text={Description} typingSpeed={5} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={200}/>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl mb-2 text-main-85">
            <TextType text={University} typingSpeed={10} pauseDuration={2000} showCursor={false} textColors={['var(--main)']} initialDelay={200}/>
          </h2>
          <PixelTransition
            firstContent={
              <img
              src="/images/education/ucc_logo.svg"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            }

            secondContent={
             <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111"
              }}>

              <img
              src="/images/education/ucc_pasto.webp"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            </div>
            }
            gridSize={12}
            pixelColor='#0a0a0a'
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
