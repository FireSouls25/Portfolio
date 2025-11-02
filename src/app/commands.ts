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

export const getCommandMap = (language: "en" | "es", translations: Translations): { [key: string]: string } => {
  const commandMap: { [key: string]: string } = {};
  const commandsTranslations = translations.commands[language];
  for (const key in commandsTranslations) {
    commandMap[(commandsTranslations[key as CommandKey] as string).replace(/\s/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')] = translations.commands.en[key as CommandKey] as string;
  }
  return commandMap;
};
