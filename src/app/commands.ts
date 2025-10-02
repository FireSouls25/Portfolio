
export type Command = "theme light" | "theme dark" | "lang es" | "lang en" | "help";

interface CommandHelp {
  [key: string]: {
    en: string;
    es: string;
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
};

export const getHelp = (language: "en" | "es"): string[] => {
  return Object.keys(commandHelp).map(command => {
    const description = commandHelp[command][language];
    return `${command}: ${description}`;
  });
};

