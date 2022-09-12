module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@yext/export-star/recommended",
  ],
  plugins: ["eslint-plugin-tsdoc"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "@typescript-eslint/no-extra-semi": "off", // to avoid conflict with Prettier
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "tsdoc/syntax": "error",
  },
};
