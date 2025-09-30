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
    pages: ["SobreMi", "Proyectos", "Testimonios", "Educación", "Contacto"],
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
          timeScale={1}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={0.1}
          flickerAmount={0.1}
          noiseAmp={0.2}
          chromaticAberration={0.05}
          dither={0.02}
          curvature={0.1}
          tint="#00FF41"
          mouseReact={false}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={0.8}
        />
      </div>
      <div className={`w-full h-full flex flex-col justify-center text-left p-8 relative z-10 ${isMobile ? 'p-4' : 'p-12'}`}>
        <div className="mb-8">
          <h1 className="text-6xl mb-4 text-foreground">
            <TextType
              text={[t.welcome]}
              typingSpeed={50}
              pauseDuration={2000}
              showCursor={false}
            />
          </h1>
          <p className="text-xl mb-6">{t.name}</p>
          <p className="text-xl mb-4">{t.help}</p>
          <p className="text-xl mb-4">{t.navigate}</p>
          <ul className="list-none text-xl mb-6">
            {t.pages.map((page) => (
              <li key={page} className="mb-2">
                <a href="#" className="hover:underline">{page}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-grow"></div>
        {error && <div className="text-xl mt-2">{error}</div>}
        <form onSubmit={handleCommand} className="mt-2 flex items-center text-xl">
          <span>~ &gt;</span>
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
