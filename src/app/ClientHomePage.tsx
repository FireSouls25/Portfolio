'use client';

import TextType from './components/TextType';
import FaultyTerminal from './components/FaultyTerminal';
import { useState, useMemo, useEffect } from 'react';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Testimonies from './pages/Testimonies';
import Education from './pages/Education';
import Contact from './pages/Contact';
import { useThemeLanguage } from './context/ThemeLanguageContext';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { getHelp } from './commands';

export default function Home() {
  const { theme, language, translations, setTheme, setLanguage } = useThemeLanguage();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [command, setCommand] = useState<string>('');
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<string>('home');
  
  const t = useMemo(() => translations.home[language] || translations.home.en, [language, translations]);

  const memoizedWelcomeText = useMemo(() => Array.isArray(t.welcome) ? t.welcome : [t.welcome], [t.welcome]);
  const memoizedNameText = useMemo(() => Array.isArray(t.name) ? t.name : [t.name], [t.name]);
  const memoizedHelpText = useMemo(() => Array.isArray(t.help) ? t.help : [t.help], [t.help]);
  const memoizedNavigateText = useMemo(() => Array.isArray(t.navigate) ? t.navigate : [t.navigate], [t.navigate]);
  const memoizedPages = useMemo(() => Array.isArray(t.pages) ? t.pages : [t.pages], [t.pages]);

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
      tint: "#BBFF99",
      brightness: 0.8,
    }
  : {
      tint: "#000000",
      brightness: 1.5,
    };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <h1 className="text-6xl mb-4">
              <TextType
                text={memoizedWelcomeText}
                typingSpeed={20}
                pauseDuration={2000}
                showCursor={false}
                textColors={['hsl(120, 100%, 55%)']}
              />
            </h1>
            <h2 className="text-xl mb-6">
              <TextType
                text={memoizedNameText}
                typingSpeed={10}
                pauseDuration={2000}
                showCursor={false}
                initialDelay={700}
                textColors={['hsla(120, 100%, 55%, 0.85)']}
              />
              </h2>
            <h3 className="text-xl mb-4">
              <TextType
                text={memoizedHelpText}
                typingSpeed={10}
                pauseDuration={2000}
                showCursor={false}
                initialDelay={1400}
                textColors={['hsl(120, 100%, 55%)']}
              />
              </h3>
            <h3 className="text-xl mb-4">
              <TextType
                text={memoizedNavigateText}
                typingSpeed={10}
                pauseDuration={2000}
                showCursor={false}
                initialDelay={1400}
                textColors={['hsl(120, 100%, 55%)']}
              />
            </h3>
            <ul className="list-none text-xl mb-6">
                {memoizedPages.map((page: string) => ((
                    <li key={page} className="mb-2">
                      <a href="#" className="hover:underline">
                        <TextType
                          text={[page]}
                          typingSpeed={20}
                          pauseDuration={2000}
                          showCursor={false}
                          initialDelay={2200}
                          textColors={['hsla(120, 100%, 55%, 0.7)']}
                        />
                      </a>
                    </li>
                  )
                ))}
              </ul>
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

  return (
    <div className="h-screen w-full bg-background text-foreground font-mono flex items-center justify-center relative overflow-hidden p-4">
      <div className="fixed inset-0 z-0">
        <FaultyTerminal
          scale={3}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={0.2}
          flickerAmount={0.2}
          noiseAmp={0.25}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          mouseReact={false}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          {...faultyTerminalProps}
        />
      </div>
      <div className={`w-full h-full flex flex-col text-left p-8 relative z-10 ${isMobile ? 'p-4' : 'p-12'}`}>
        <div className="flex-grow overflow-y-auto">
          {renderPageContent()}
        </div>
        <div className="mt-auto">
          {output.length > 0 && (
            <div className="text-xl mt-2">
              {output.map((line, index) => (
                <div key={index}>
                  <TextType
                    text={[line]}
                    typingSpeed={10}
                    pauseDuration={2000}
                    showCursor={false}
                    initialDelay={index * 100}
                    textColors={['hsla(120, 100%, 55%, 0.7)']}
                  />
                </div>
              ))}
            </div>
          )}
          {error && <div className="text-xl mt-2">{error}</div>}
          <form onSubmit={handleCommand} className="mt-2 flex items-center text-xl">
            <ul>
              <li>~</li>
              <li>$</li>
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
