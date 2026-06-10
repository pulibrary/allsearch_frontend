import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import { createConfig } from '@vue/eslint-config-typescript';
import { globalIgnores } from 'eslint/config';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...pluginVueA11y.configs['flat/recommended'],
  eslintConfigPrettier,
  ...createConfig({ extends: ['recommended'] }),
  globalIgnores(['node_modules', 'dist', '.yalc']),
  {
    ignores: ['node_modules', 'dist', '.yalc'],
    files: ['*.js', '*.ts', '*.vue'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      'vue/require-default-prop': 'off',
      'vuejs-accessibility/label-has-for': [
        'error',
        {
          required: {
            some: ['nesting', 'id']
          }
        }
      ]
    }
  }
];
