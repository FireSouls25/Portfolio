'use client';

import React, { useState, useEffect } from 'react';
import { useThemeLanguage } from '../../context/ThemeLanguageContext';

interface HelpButtonProps {
  handleCommand: (command: string) => void;
}

const HelpButton: React.FC<HelpButtonProps> = ({ handleCommand }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shine, setShine] = useState(true);
  const { theme, setTheme, language, setLanguage } = useThemeLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setShine(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const pages = ['home', 'aboutme', 'projects', 'testimonies', 'education', 'contact'];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setShine(true)}
        onMouseLeave={() => setShine(false)}
        className={`cursor-pointer text-main-85 rounded-xl hover:text-main ${shine ? 'shine-effect' : ''}`}
      >
        [Help]
      </button>
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-56 bg-cline rounded-xl p-4 opacity-95">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold">Theme:</span>
            <button onClick={toggleTheme} className="text-main-85 hover:text-main">
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </div>
          <div className="relative group flex justify-between items-center">
            <span className="font-bold">Language:</span>
            <span className="cursor-pointer text-main-85">{language.toUpperCase()}</span>
            <div className="absolute top-0 -left-32 w-28 bg-cline rounded-xl p-2 opacity-95 group-hover:block hidden">
              <button onClick={() => setLanguage('en')} className="block w-full text-left text-main-85 hover:text-main">
                English
              </button>
              <button onClick={() => setLanguage('es')} className="block w-full text-left text-main-85 hover:text-main">
                Spanish
              </button>
            </div>
          </div>
          <div className="mt-4">
            <span className="font-bold">Navigation:</span>
            {pages.map(page => (
              <button
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
