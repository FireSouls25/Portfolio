// eslint.config.mjs
import js from '@eslint/js';
import ts from 'typescript-eslint';
import react from 'eslint-plugin-react';

export default [
  {
    ignores: ['.next'],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  react.configs.flat.recommended,

  {
    files: ['next-env.d.ts'],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
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
      "@typescript-eslint/no-explicit-any": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];