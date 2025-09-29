'use client';

import TextType from './TextType';
import FaultyTerminal from './FaultyTerminal';
import { useState, useEffect } from 'react';
import { useThemeLanguage } from './context/ThemeLanguageContext';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';

// Define the shape of the translations object
interface Translations {
  [key: string]: {
    welcome: string;
    description: string;
    description2: string;
    currentTheme: string;
    currentLanguage: string;
    invalidCommand: string;
  };
}

const translations: Translations = {
  en: {
    welcome: "Welcome to my portfolio!",
    description: "Type 'theme light' or 'theme dark' to change the theme.",
    description2: "Type 'lang en' or 'lang es' to change the language.",
    currentTheme: "Current Theme:",
    currentLanguage: "Current Language:",
    invalidCommand: "Invalid command. Try 'theme light/dark' or 'lang en/es'.",
  },
  es: {
    welcome: "¡Bienvenido a mi portafolio!",
    description: "Escribe 'theme light' o 'theme dark' para cambiar el tema.",
    description2: "Escribe 'lang en' o 'lang es' para cambiar el idioma.",
    currentTheme: "Tema Actual:",
    currentLanguage: "Idioma Actual:",
    invalidCommand: "Comando inválido. Intenta 'theme light/dark' o 'lang en/es'.",
  },
};

// Define props for TextType component
interface TextTypeProps {
  text: string[];
  typingSpeed: number;
  pauseDuration: number;
  showCursor: boolean;
  cursorCharacter: string;
}

// Define props for FaultyTerminal component
interface FaultyTerminalProps {
  scale: number;
  gridMul: [number, number];
  digitSize: number;
  timeScale: number;
  pause: boolean;
  scanlineIntensity: number;
  glitchAmount: number;
  flickerAmount: number;
  noiseAmp: number;
  chromaticAberration: number;
  dither: number;
  curvature: number;
  tint: string;
  mouseReact: boolean;
  mouseStrength: number;
  pageLoadAnimation: boolean;
  brightness: number;
}

export default function Home() {
  const { theme, language, setTheme, setLanguage } = useThemeLanguage();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [command, setCommand] = useState<string>('');
  const [output, setOutput] = useState<string[]>([]);
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [showDescription2, setShowDescription2] = useState<boolean>(false);

  const t = translations[language];

  // Calculate animation durations (in milliseconds)
  const typingSpeed = 35;
  const pauseDuration = 1500;
  const welcomeDuration = t.welcome.length * typingSpeed + pauseDuration;
  const descriptionDuration = t.description.length * typingSpeed + pauseDuration;

  // Control sequential rendering
  useEffect(() => {
    // Show description after welcome animation completes
    const descriptionTimer = setTimeout(() => {
      setShowDescription(true);
    }, welcomeDuration);

    // Show description2 after description animation completes
    const description2Timer = setTimeout(() => {
      setShowDescription2(true);
    }, welcomeDuration + descriptionDuration);

    // Cleanup timers
    return () => {
      clearTimeout(descriptionTimer);
      clearTimeout(description2Timer);
    };
  }, [welcomeDuration, descriptionDuration, language]);

  const handleCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [cmd, arg1] = command.split(' ');
    const newOutput = [...output, `> ${command}`];

    if (cmd === 'theme') {
      if (arg1 === 'light' || arg1 === 'dark') {
        setTheme(arg1);
        newOutput.push(`Theme set to ${arg1}.`);
      } else {
        newOutput.push(t.invalidCommand);
      }
    } else if (cmd === 'lang') {
      if (arg1 === 'en' || arg1 === 'es') {
        setLanguage(arg1);
        newOutput.push(`Language set to ${arg1}.`);
      } else {
        newOutput.push(t.invalidCommand);
      }
    } else {
      newOutput.push(t.invalidCommand);
    }
    setOutput(newOutput);
    setCommand('');
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground font-mono flex items-center justify-center relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <FaultyTerminal
          scale={3}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#d20f39"
          mouseReact={false}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={0.6}
        />
      </div>
      <div className={`w-full p-4 ${isMobile ? 'p-2' : 'p-6'} bg-card rounded-lg shadow-lg relative z-10`}>
        <pre className={`whitespace-pre-wrap ${isMobile ? 'text-xs' : 'text-sm'}`}>
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          {showWelcome && (
            <div>
              <TextType
                text={[t.welcome]}
                typingSpeed={typingSpeed}
                pauseDuration={pauseDuration}
                showCursor={true}
                cursorCharacter=""
              />
            </div>
          )}
          {showDescription && (
            <div>
              <TextType
                text={[t.description]}
                typingSpeed={typingSpeed}
                pauseDuration={pauseDuration}
                showCursor={true}
                cursorCharacter=""
              />
            </div>
          )}
          {showDescription2 && (
            <div>
              <TextType
                text={[t.description2]}
                typingSpeed={typingSpeed}
                pauseDuration={pauseDuration}
                showCursor={true}
                cursorCharacter=""
              />
            </div>
          )}
          <div>{t.currentTheme} {theme}</div>
          <div>{t.currentLanguage} {language}</div>
          <div>{isMobile ? 'Mobile Version' : 'Desktop Version'}</div>
        </pre>
        <form onSubmit={handleCommand} className="mt-4">
          <span className="text-green-400">user@portfolio</span>:<span className="text-blue-400">~</span>$
          <input
            type="text"
            value={command}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCommand(e.target.value)}
            className={`bg-transparent border-none outline-none ${isMobile ? 'w-1/2' : 'w-3/4'} ml-2`}
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}