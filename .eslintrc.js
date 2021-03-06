module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
  },
  plugins: ["@typescript-eslint", "simple-import-sort", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:compat/recommended",
    "prettier",
  ],
  rules: {
    "import/no-default-export": "error",
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
    polyfills: [
      // Add if any
    ],
  },
};
