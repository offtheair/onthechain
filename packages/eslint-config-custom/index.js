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
    // prefer named exports in components
    'import/no-default-export': 'error',
    // It's not accurate in the monorepo style
    'import/no-extraneous-dependencies': 'off',
    // sorted imports
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
      },
    ],
    // react
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': 'off', // three.js
    'react/function-component-definition': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    // Use function hoisting to improve code readability
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
  },
  overrides: [
    // prefer default exports in next.js' app/pages dirs
    {
      files: ['**/app/**/*.tsx', '**/pages/**/*.tsx'],
      rules: {
        'import/prefer-default-export': 'error',
        'import/no-default-export': 'off',
      },
    },
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'next.config.js',
    'index.js',
    'cypress.config.js',
  ],
}
