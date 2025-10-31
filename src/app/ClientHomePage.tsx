'use client';

import TextType from './components/TextType';
import FaultyTerminal from './components/FaultyTerminal';
import React, { useState, useMemo, useEffect } from 'react';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Testimonies from './pages/Testimonies';
import Education from './pages/Education';
import Contact from './pages/Contact';
import { useThemeLanguage } from './context/ThemeLanguageContext';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import ImagePreloader from './components/ImagePreloader';
import { getHelp } from './commands';

const MemoizedTextType = React.memo(TextType);

export default function Home() {
  const { theme, language, translations, setTheme, setLanguage } = useThemeLanguage();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [command, setCommand] = useState<string>('');
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [tint, setTint] = useState('');
  const t = useMemo(() => translations.home[language] || translations.home.en, [language, translations]);

  useEffect(() => {
    const fetchTint = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      const tintColor = computedStyle.getPropertyValue('--tint').trim();
      setTint(tintColor);
    };

    fetchTint();

    const observer = new MutationObserver(fetchTint);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, [theme]);

  const WelcomeText = useMemo(() => Array.isArray(t.welcome) ? t.welcome : [t.welcome], [t.welcome]);
  const NameText = useMemo(() => Array.isArray(t.name) ? t.name : [t.name], [t.name]);
  const HelpText = useMemo(() => Array.isArray(t.help) ? t.help : [t.help], [t.help]);
  const NavigateText = useMemo(() => Array.isArray(t.navigate) ? t.navigate : [t.navigate], [t.navigate]);
  const Pages = useMemo(() => Array.isArray(t.pages) ? t.pages : [t.pages], [t.pages]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'F1') {
        event.preventDefault();
        setOutput(prevOutput => (prevOutput.length > 0 ? [] : getHelp(language)));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [language]);

  const handleCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cmd = command.trim().toLowerCase();

    switch (cmd) {
      case 'theme light':
        setTheme('light');
        setOutput([]);
        break;
      case 'theme dark':
        setTheme('dark');
        setOutput([]);
        break;
      case 'lang es':
        setLanguage('es');
        setOutput([]);
        break;
      case 'lang en':
        setLanguage('en');
        setOutput([]);
        break;
      case 'help':
        setOutput(getHelp(language));
        break;
      case 'clear':
        setOutput([]);
        setError('');
        break;
      case 'home':
        setCurrentPage('home');
        setOutput([]);
        break;
      case 'aboutme':
        setCurrentPage('aboutme');
        setOutput([]);
        break;
      case 'projects':
        setCurrentPage('projects');
        setOutput([]);
        break;
      case 'testimonies':
        setCurrentPage('testimonies');
        setOutput([]);
        break;
      case 'education':
        setCurrentPage('education');
        setOutput([]);
        break;
      case 'contact':
        setCurrentPage('contact');
        setOutput([]);
        break;
      default:
        setError(`command not found: ${command}`);
        setOutput([]);
        break;
    }
    
    setCommand('');
  };

  const faultyTerminalProps = theme === 'dark'
  ? {
      tint: tint,
    }
  : {
      tint: tint,
    };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
          <div className='p-2 bg-cline rounded-xl opacity-85'>
            <h1 className="text-6xl items-center mb-4">
              <TextType
                text={WelcomeText}
                typingSpeed={20}
                pauseDuration={2000}
                showCursor={false}
                textColors={['var(--main)']}
              />
            </h1>
            <h2 className="text-xl mb-6">
              <TextType
                text={NameText}
                typingSpeed={10}
                pauseDuration={2000}
                showCursor={false}
                initialDelay={700}
                textColors={['var(--submain)']}
              />
              </h2>
            <h3 className="text-xl mb-4">
              <TextType
                text={HelpText}
                typingSpeed={10}
                pauseDuration={2000}
                showCursor={false}
                initialDelay={1400}
                textColors={['var(--main)']}
              />
              </h3>
            <h3 className="text-xl mb-4">
              <TextType
                text={NavigateText}
                typingSpeed={10}
                pauseDuration={2000}
                showCursor={false}
                initialDelay={1400}
                textColors={['var(--main)']}
              />
            </h3>
            <ul className="list-none text-xl mb-6">
                {Pages.map((page: string) => ((
                    <li key={page} className="mb-2">
                      <a href="#" className="hover:underline">
                        <TextType
                          text={[page]}
                          typingSpeed={20}
                          pauseDuration={2000}
                          showCursor={false}
                          initialDelay={2200}
                          textColors={['var(--submain-70)']}
                        />
                      </a>
                    </li>
                  )
                ))}
              </ul>
          </div>
          </>
        );
      case 'aboutme':
        return <AboutMe />;
      case 'projects':
        return <Projects />;
      case 'testimonies':
        return <Testimonies />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  const imagesToPreload = [
    '/images/aboutme/dog.webp',
    '/images/aboutme/me_working.webp',
    '/images/aboutme/me.webp',
    '/images/aboutme/working.webp',
    '/images/projects/3D_calculator.webp',
    '/images/projects/project2.webp',
    '/images/projects/settings.webp',
    '/images/education/ucc_logo.svg',
    '/images/education/ucc_pasto.webp',
  ];

  return (
    <div className="h-screen w-full bg-background text-foreground font-mono flex items-center justify-center relative overflow-hidden p-4">
      <ImagePreloader images={imagesToPreload} />
      <div className="fixed inset-0 z-0">
        {!isMobile ? (
          <FaultyTerminal
            scale={3}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={0.5}
            pause={isMobile}
            scanlineIntensity={0.5}
            glitchAmount={0.1}
            flickerAmount={0.1}
            noiseAmp={0.25}
            chromaticAberration={0}
            dither={0}
            curvature={0.1}
            mouseReact={false}
            mouseStrength={0}
            pageLoadAnimation={false}
            {...faultyTerminalProps}
          />
        ) : (
          <div className="h-screen w-full bg-background" />
        )}
      </div>
      <div className={`w-full h-full flex flex-col text-left p-8 relative z-10 ${isMobile ? 'p-4' : 'p-12'}`}>
        <div className="flex-grow overflow-y-auto">
          {renderPageContent()}
        </div>
        <div className="mt-auto">
          {output.length > 0 && (
            <div className="text-xl mt-2 p-2 bg-cline rounded-xl opacity-90">
              {output.map((line, index) => (
                <div key={index}>
                  <MemoizedTextType
                    text={line}
                    typingSpeed={10}
                    pauseDuration={2000}
                    showCursor={false}
                    initialDelay={index * 100}
                    textColors={['var(--submain-70)']}
                  />
                </div>
              ))}
            </div>
          )}
          {error && <div className="text-xl mt-2">{error}</div>}
          <form onSubmit={handleCommand} className="mt-2 flex items-center text-xl p-2 rounded-xl bg-cline opacity-90">
            <ul>
              <li>{'>_'}</li>
            </ul>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              className="bg-transparent border-none outline-none w-full ml-2"
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  );
}
