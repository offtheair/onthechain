module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['node_modules/tsconfig/base.json'],
  },
  plugins: [],
  extends: [
    'turbo',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:@next/next/core-web-vitals',
    'prettier',
  ],
  rules: {
    // turborepo
    '@next/next/no-html-link-for-pages': 'off',
    // https://ilikekillnerds.com/2019/08/default-exports-bad/
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    // It's not accurate in the monorepo style
    'import/no-extraneous-dependencies': 'off',
    // react
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    // Use function hoisting to improve code readability
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
  },
  ignorePatterns: [
    '.eslintrc.js',
    'next.config.js',
    'index.js',
    'cypress.config.js',
  ],
}
