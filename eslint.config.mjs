// eslint.config.mjs
import js from '@eslint/js';
import ts from 'typescript-eslint';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  react.configs.flat.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },

  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // ¡LIBERTAD!
    },
  },
];