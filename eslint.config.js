const tsEslintPlugin = require('@typescript-eslint/eslint-plugin');
const tsEslintParser = require('@typescript-eslint/parser');
const eslintConfigPrettier = require('eslint-config-prettier');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const eslintPluginReact = require('eslint-plugin-react');
const trivagoPrettiesPluginSortImports = require('@trivago/prettier-plugin-sort-imports');

module.exports = [
  {
    // Парсер для TypeScript
    languageOptions: {
      parser: tsEslintParser,
      ecmaVersion: 'latest', // Используем последнюю версию ECMAScript
      sourceType: 'module', // Используем ES-модули
    },
    // Плагины
    plugins: {
      '@typescript-eslint/eslint-plugin': tsEslintPlugin,
      '@typescript-eslint/parser': tsEslintParser,
      'eslint-config-prettier': eslintConfigPrettier,
      'eslint-plugin-prettier': eslintPluginPrettier,
      'eslint-plugin-react': eslintPluginReact,
      '@trivago/prettier-plugin-sort-imports': trivagoPrettiesPluginSortImports,
    },
    // Правила
    rules: {
      // React правила
      'react/react-in-jsx-scope': 'off', // Не требует импорта React в новых версиях
      // TypeScript правила
      '@typescript-eslint/eslint-plugin/no-unused-vars': 'warn', // Предупреждение о неиспользуемых переменных
      // Общие правила
      'no-console': 'warn', // Предупреждение при использовании console
      // Prettier правила
      'eslint-plugin-prettier/prettier': 'error', // Ошибка, если код не соответствует правилам Prettier
    },
    // Настройки
    settings: {
      react: {
        version: 'detect', // Автоматически определяет версию React
      },
    },
  },
  eslintConfigPrettier, // Отключает конфликтующие правила ESLint
];
