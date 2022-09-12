module.exports = {
  plugins: ["react"],
  extends: [
    "plugin:react-perf/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
  ],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",
    "react/require-default-props": "off",
  },
};
