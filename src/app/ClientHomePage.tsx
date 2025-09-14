'use client';

import { useState } from 'react';
import { useThemeLanguage } from './context/ThemeLanguageContext';
import { useMediaQuery } from '@/app/hooks/useMediaQuery'; // Corrected import path

const translations = {
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

export default function Home() {
  const { theme, language, setTheme, setLanguage } = useThemeLanguage();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>([]);

  const t = translations[language];

  const handleCommand = (e: React.FormEvent) => {
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
    <div className="min-h-screen bg-background text-foreground p-4 font-mono">
      <div className="max-w-2xl mx-auto bg-card p-6 rounded-lg shadow-lg">
        <pre className="whitespace-pre-wrap text-sm">
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          <div>{t.welcome}</div>
          <div>{t.description}</div>
          <div>{t.description2}</div>
          <div>{t.currentTheme} {theme}</div>
          <div>{t.currentLanguage} {language}</div>
          <div>{isMobile ? 'Mobile Version' : 'Desktop Version'}</div>
        </pre>
        <form onSubmit={handleCommand} className="mt-4">
          <span className="text-green-400">user@portfolio</span>:<span className="text-blue-400">~</span>$ 
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="bg-transparent border-none outline-none w-3/4 ml-2"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
