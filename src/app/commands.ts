export type CommandKey = "themeLight" | "themeDark" | "langEs" | "langEn" | "help" | "home" | "aboutme" | "projects" | "testimonies" | "education" | "contact" | "clear";

interface CommandHelp {
  [key: string]: {
    en: string;
    es: string;
  };
}

interface TranslationContent {
  [key: string]: string | string[];
}

interface Translations {
  [key: string]: {
    en: TranslationContent;
    es: TranslationContent;
  };
}

const commandHelp: CommandHelp = {
  "theme light": {
    en: "Sets the terminal to light mode.",
    es: "Pone la terminal en modo claro.",
  },
  "theme dark": {
    en: "Sets the terminal to dark mode.",
    es: "Pone la terminal en modo oscuro.",
  },
  "lang es": {
    en: "Changes the language to Spanish.",
    es: "Cambia el idioma a español.",
  },
  "lang en": {
    en: "Changes the language to English.",
    es: "Cambia el idioma a inglés.",
  },
  "help": {
    en: "Shows a list of available commands.",
    es: "Muestra una lista de los comandos disponibles.",
  },
  "home": {
    en: "Navigates to the home page.",
    es: "Navega a la página de inicio.",
  },
  "aboutme": {
    en: "Navigates to the About Me page.",
    es: "Navega a la página Sobre Mí.",
  },
  "projects": {
    en: "Navigates to the Projects page.",
    es: "Navega a la página de Proyectos.",
  },
  "testimonies": {
    en: "Navigates to the Testimonies page.",
    es: "Navega a la página de Testimonios.",
  },
  "education": {
    en: "Navigates to the Education page.",
    es: "Navega a la página de Educación.",
  },
  "contact": {
    en: "Navigates to the Contact page.",
    es: "Navega a la página de Contacto.",
  },
  "clear": {
    en: "Clears the terminal output.",
    es: "Limpia la salida de la terminal.",
  },
};

export const getHelp = (language: "en" | "es", translations: Translations): string[] => {
  const commandsTranslations = translations.commands[language];
  return (Object.keys(commandsTranslations) as CommandKey[]).map(key => {
    const command = commandsTranslations[key];
    const englishCommandKey = translations.commands.en[key] as string;
    const description = commandHelp[englishCommandKey][language];
    return `${command}: ${description}`;
  });
};

export const getCommandMap = (translations: Translations): { [key: string]: string } => {
  const commandMap: { [key: string]: string } = {};
  const enCommands = translations.commands.en;
  const esCommands = translations.commands.es;

  for (const key in enCommands) {
    const enCommand = (enCommands[key as CommandKey] as string).replace(/\s/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const esCommand = (esCommands[key as CommandKey] as string).replace(/\s/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const englishCommandKey = enCommands[key as CommandKey] as string;
    
    commandMap[enCommand] = englishCommandKey;
    commandMap[esCommand] = englishCommandKey;
  }
  return commandMap;
};

export const getCommandSuggestions = (input: string, translations: Translations, language: 'en' | 'es'): string[] => {
  const commands = translations.commands[language];
  const commandList = Object.values(commands);
  
  if (input.trim() === 'lang' || input.trim() === 'idioma') {
    return language === 'en' ? ['lang en', 'lang es'] : ['idioma en', 'idioma es'];
  }

  return commandList.filter((cmd): cmd is string => 
    typeof cmd === 'string' && cmd.toLowerCase().startsWith(input.toLowerCase())
  );
};
