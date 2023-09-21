module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["tsconfig.json"],
    createDefaultProgram: true,
  },

  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "no-unneeded-ternary": "off",
    "@typescript-eslint/consistent-type-imports": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
