'use client';

import TextType from './TextType';
import FaultyTerminal from './FaultyTerminal';
import { useState } from 'react';
import { useThemeLanguage } from './context/ThemeLanguageContext';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';

// Define the shape of the translations object
interface Translations {
  [key: string]: {
    welcome: string;
    name: string;
    help: string;
    navigate: string;
    pages: string[];
  };
}

const translations: Translations = {
  en: {
    welcome: "Welcome to my Portfolio",
    name: "David Emmanuel Castillo Florez",
    help: "Type 'help' or press F1 for available commands",
    navigate: "Navigate throught the pages with:",
    pages: ["AboutMe", "Projects", "Testimonies", "Education", "Contact"],
  },
  es: {
    welcome: "Bienvenido a mi Portafolio",
    name: "David Emmanuel Castillo Florez",
    help: "Escribe 'help' o presiona F1 para ver los comandos disponibles",
    navigate: "Navega a través de las páginas con:",
    pages: ["AboutMe", "Projects", "Testimonies", "Education", "Contact"],
  },
};

export default function Home() {
  const { language } = useThemeLanguage();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [command, setCommand] = useState<string>('');
  const [error, setError] = useState<string>('');
  
  const t = translations[language] || translations.en;

  const handleCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (command.trim().toLowerCase() === 'clear') {
      setError('');
    } else {
      setError(`command not found: ${command}`);
    }
    
    setCommand('');
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground font-mono flex items-center justify-center relative overflow-hidden p-4">
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
          tint="#BBFF99"
          mouseReact={false}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={0.8}
        />
      </div>
      <div className={`w-full h-full flex flex-col justify-center text-left p-8 relative z-10 ${isMobile ? 'p-4' : 'p-12'}`}>
        <div className="mb-8">
          <h1 className="text-6xl mb-4">
            <TextType
              text={[t.welcome]}
              typingSpeed={40}
              pauseDuration={2000}
              showCursor={false}
              textColors={['hsl(120, 100%, 55%)']}
            />
          </h1>
          <h2 className="text-xl mb-6">
            <TextType
              text={[t.name]}
              typingSpeed={30}
              pauseDuration={2000}
              showCursor={false}
              initialDelay={1300}
              textColors={['hsla(120, 100%, 55%, 0.85)']}
            />
            </h2>
          <h3 className="text-xl mb-4">
            <TextType
              text={[t.help]}
              typingSpeed={30}
              pauseDuration={2000}
              showCursor={false}
              initialDelay={2300}
              textColors={['#00FF41']}
            />
            </h3>
          <h3 className="text-xl mb-4">
            <TextType
              text={[t.navigate]}
              typingSpeed={30}
              pauseDuration={2000}
              showCursor={false}
              initialDelay={3800}
              textColors={['#00FF41']}
            />
          </h3>
          <ul className="list-none text-xl mb-6">
              {t.pages.map((page) => ((
                  <li key={page} className="mb-2">
                    <a href="#" className="hover:underline">
                      <TextType
                        text={[page]}
                        typingSpeed={40}
                        pauseDuration={2000}
                        showCursor={false}
                        initialDelay={5200}
                        textColors={['hsla(120, 100%, 55%, 0.7)']}
                      />
                    </a>
                  </li>
                )
              ))}
            </ul>
        </div>
        {error && <div className="text-xl mt-2">{error}</div>}
        <form onSubmit={handleCommand} className="mt-2 items-center text-xl">
          <span>~ $</span>
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
  );
}
