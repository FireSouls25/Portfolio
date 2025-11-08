'use client';

import React, { useState, useMemo, useEffect } from 'react';
import FaultyTerminal from './components/FaultyTerminal';
import { useThemeLanguage } from './context/ThemeLanguageContext';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import ImagePreloader from './components/ImagePreloader';
import { getHelp, getCommandMap, getCommandSuggestions } from './commands';
import PageContent from './components/home/PageContent';
import CommandInput from './components/home/CommandInput';
import OutputDisplay from './components/home/OutputDisplay';
import HomeContent from './components/home/HomeContent';

export default function Home() {
  const { theme, language, translations, setTheme, setLanguage } = useThemeLanguage();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [command, setCommand] = useState<string>('');
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [tint, setTint] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const t = useMemo(() => translations.home[language] || translations.home.en, [language, translations]);

  const WelcomeText = useMemo(() => Array.isArray(t.welcome) ? t.welcome : [t.welcome], [t.welcome]);
  const NameText = useMemo(() => Array.isArray(t.name) ? t.name : [t.name], [t.name]);
  const HelpText = useMemo(() => Array.isArray(t.help) ? t.help : [t.help], [t.help]);
  const NavigateText = useMemo(() => Array.isArray(t.navigate) ? t.navigate : [t.navigate], [t.navigate]);
  const Pages = useMemo(() => Array.isArray(t.pages) ? t.pages : [t.pages], [t.pages]);

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

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'F1') {
        event.preventDefault();
        setOutput(prevOutput => (prevOutput.length > 0 ? [] : getHelp(language, translations)));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [language, translations]);

  const commandMap = useMemo(() => getCommandMap(translations), [translations]);

  const handleCommand = (cmd: string) => {
    console.log('Processing command:', cmd);
    if (cmd.trim() !== '') {
      setCommandHistory(prev => [...prev, cmd]);
    }
    setHistoryIndex(commandHistory.length);

    const commandToProcess = cmd.trim().toLowerCase().replace(/\s/g, '').normalize('NFD').replace(/[\u0300-\u036F]/g, '');
    const englishCommand = commandMap[commandToProcess];

    switch (englishCommand) {
      case 'theme light':
        setTheme('light');
        setOutput([]);
        setCommand('');
        setError('');
        break;
      case 'theme dark':
        setTheme('dark');
        setOutput([]);
        setCommand('');
        setError('');
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
        setOutput(getHelp(language, translations));
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
      default: {
        const suggestions = getCommandSuggestions(cmd, translations, language);
        if (suggestions.length > 0) {
          setError(`${t.didYouMean} ${suggestions.join(', ')}?`);
        } else {
          setError(`${t.commandError} ${cmd}`);
        }
        setOutput([]);
        break;
      }
    }
    
    setCommand('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[newIndex]);
      } else if (commandHistory.length > 0) {
        setHistoryIndex(0);
        setCommand(commandHistory[0]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[newIndex]);
      } else {
        setHistoryIndex(commandHistory.length);
        setCommand('');
      }
    }
  };

  const faultyTerminalProps = useMemo(() => (theme === 'dark'
  ? {
      tint: tint,
    }
  : {
      tint: tint,
    }), [theme, tint]);

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

  const homeContent = (
    <HomeContent
      welcomeText={WelcomeText}
      nameText={NameText}
      helpText={HelpText}
      navigateText={NavigateText}
      pages={Pages}
    />
  );

  return (
    <ImagePreloader imageUrls={imagesToPreload}>
      <div className="h-screen w-full bg-background text-foreground font-mono flex items-center justify-center relative overflow-hidden p-4">
        <div className="fixed inset-0 z-0">
          {useMemo(() => !isMobile ? (
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
          ), [isMobile, faultyTerminalProps])}
        </div>
        <div className={`w-full h-full flex flex-col text-left p-8 relative z-10 ${isMobile ? 'p-4' : 'p-12'}`}>
          <PageContent currentPage={currentPage} homeContent={homeContent} />
          <div className="mt-auto">
            <OutputDisplay output={output} error={error} />
            <CommandInput command={command} handleCommand={handleCommand} setCommand={setCommand} handleKeyDown={handleKeyDown} />
          </div>
        </div>
      </div>
    </ImagePreloader>
  );
}
