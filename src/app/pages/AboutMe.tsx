'use client';

import Image from 'next/image';
import React, { useMemo } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { useMediaQuery } from '../hooks/useMediaQuery';
import TextType from '../components/TextType';
import PixelTransition from '../components/PixelTransition';

const AboutMe: React.FC = () => {
  const { language, translations } = useThemeLanguage();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const t = useMemo(() => translations.aboutme[language] || translations.aboutme.en, [language, translations]);

  const title = useMemo(() => Array.isArray(t.title) ? t.title : [t.title], [t.title]);
  const p1 = useMemo(() => Array.isArray(t.p1) ? t.p1 : [t.p1], [t.p1]);
  const p2 = useMemo(() => Array.isArray(t.p2) ? t.p2 : [t.p2], [t.p2]);
  const p3 = useMemo(() => Array.isArray(t.p3) ? t.p3 : [t.p3], [t.p3]);

  return (
    <div className="text-foreground font-mono p-4 pt-16">
      <h1 className="text-6xl mb-4 text-main-100">
        <TextType text={title} 
        typingSpeed={60} 
        pauseDuration={2000} 
        showCursor={false} 
        textColors={['var(--main)']}
        />
      </h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <span className="text-xl mb-4">
            <TextType text={p1} 
            typingSpeed={10} 
            pauseDuration={2000} 
            showCursor={false} 
            initialDelay={1000}
            textColors={['var(--main)']}
            />
          </span>
          <span className="text-xl mb-4">
            <TextType text={p2} 
            typingSpeed={10} 
            pauseDuration={2000} 
            showCursor={false} 
            initialDelay={3000}
            textColors={['var(--main)']}
            />
          </span>
          <span className="text-xl mb-4">
            <TextType text={p3} 
            typingSpeed={20} 
            pauseDuration={2000} 
            showCursor={false} 
            initialDelay={5000}
            textColors={['var(--main)']}
            />
          </span>
        </div>
        
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-4'} gap-4 mt-8`}>
          <PixelTransition
            firstContent={
              <img
              src="/images/aboutme/dog.webp"
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
              src="/images/aboutme/dog.webp"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            </div>
            }
            gridSize={12}
            pixelColor='#0a0a0a'
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
          <PixelTransition
            firstContent={
              <img
              src="images/aboutme/me_working.webp"
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
              src="images/aboutme/me_working.webp"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            </div>
            }
            gridSize={12}
            pixelColor='#0a0a0a'
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
          <PixelTransition
            firstContent={
              <img
              src="images/aboutme/me.webp"
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
              src="images/aboutme/me.webp"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            </div>
            }
            gridSize={12}
            pixelColor='#0a0a0a'
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
          <PixelTransition
            firstContent={
              <img
              src="images/aboutme/working.webp"
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
              src="images/aboutme/working.webp"
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

export default AboutMe;
