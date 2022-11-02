module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['node_modules/tsconfig/base.json'],
  },
  plugins: ['import', 'react', 'react-hooks', 'jsx-a11y', '@typescript-eslint'],
  extends: [
    'turbo',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@next/next/core-web-vitals',
    'prettier',
  ],
  rules: {},
  ignorePatterns: ['**/*.js'],
}
