module.exports = {
  root: true,
  extends: ["custom"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["tsconfig.json"],
  },
  rules: {
    "react/button-has-type": "warn",
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "arrow-body-style": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "React" },
    ],
  },
};
