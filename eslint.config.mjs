import globals from 'globals';
import pluginJs from '@eslint/js';
import parseForESLint from '@babel/eslint-parser';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'script',
      parser: parseForESLint,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: ['@babel/preset-env'],
        },
        sourceType: 'module',
        allowImportExportEverywhere: true,
      },
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
];
