// Use FlatCompat for packages that are not yet supported.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname, // optional; default: process.cwd()
  resolvePluginsRelativeTo: __dirname // optional
});

import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
// import globals from 'globals';
// import prettier from 'prettier';
import tsParser from '@typescript-eslint/parser';
import ts from '@typescript-eslint/eslint-plugin';
import js from '@eslint/js';
// import eslintVue from 'eslint-plugin-vue';

export default [
  // prettier,
  js.configs.recommended,
  {
    // files: ['**/*.js'],
    // languageOptions: {
    //   globals: {
    //     node: true
    //   }
    // },
    ...compat.extends('@vue/eslint-config-typescript'),
    languageOptions: {
      parser: tsParser
    },
    // parser: 'vue-eslint-parser',

    rules: {
      'vue/require-default-prop': 'off'
    },
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': ts
    },
    ignores: ['node_modules/**', 'dist/**', '.gitignore'],
    root: true
  }
];
