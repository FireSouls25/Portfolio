'use client';
import React, { useState, useEffect } from 'react';
import { useThemeLanguage } from '../../context/ThemeLanguageContext';

interface HelpButtonProps {
  handleCommand: (command: string) => void;
}

const HelpButton: React.FC<HelpButtonProps> = ({ handleCommand }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shine, setShine] = useState(true);
  const { theme, setTheme, language, setLanguage, translations } = useThemeLanguage();

  // HELP BUTTON TEXTS
  const t = (translations.helpButton[language] ?? translations.helpButton.en) as {
    title: string;
    theme: string;
    light: string;
    dark: string;
    language: string;
    english: string;
    spanish: string;
    navigation: string;
  };

  const pages: string[] = [
  String(translations.commands[language]?.home        ?? translations.commands.en.home        ?? "Home"),
  String(translations.commands[language]?.aboutme     ?? translations.commands.en.aboutme     ?? "About Me"),
  String(translations.commands[language]?.projects    ?? translations.commands.en.projects    ?? "Projects"),
  String(translations.commands[language]?.testimonies ?? translations.commands.en.testimonies ?? "Testimonies"),
  String(translations.commands[language]?.education   ?? translations.commands.en.education   ?? "Education"),
  String(translations.commands[language]?.contact     ?? translations.commands.en.contact     ?? "Contact"),
];

  useEffect(() => {
    const timer = setTimeout(() => setShine(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setShine(true)}
        onMouseLeave={() => setShine(false)}
        className={`cursor-pointer text-main-85 rounded-xl hover:text-main ${shine ? 'shine-effect' : ''}`}
      >
        [{t.title}]
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-56 bg-cline rounded-xl p-4 opacity-95">
          {/* TEMA */}
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold">{t.theme}:</span>
            <button onClick={toggleTheme} className="text-main-85 hover:text-main">
              {theme === 'light' ? t.dark : t.light}
            </button>
          </div>

          {/* IDIOMA */}
          <div className="relative group">
            <div className="flex justify-between items-center">
              <span className="font-bold">{t.language}:</span>
              <span className="cursor-pointer text-main-85">{language.toUpperCase()}</span>
            </div>
            <div className="absolute top-full left-0 mt-1 w-full bg-background rounded-xl p-2 opacity-95 group-hover:block hidden">
              <button onClick={() => setLanguage('en')} className="block w-full text-left text-main-85 hover:text-main">
                {t.english}
              </button>
              <button onClick={() => setLanguage('es')} className="block w-full text-left text-main-85 hover:text-main">
                {t.spanish}
              </button>
            </div>
          </div>

          {/* NAVEGACIÓN */}
          <div className="mt-4">
            <span className="font-bold">{t.navigation}:</span>
            {pages.map((page) => (
              <button
                type="button"
                key={page}
                onClick={() => {
                  handleCommand(page);
                  setIsOpen(false);
                }}
                className="block w-full text-left text-main-85 hover:text-main"
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpButton;