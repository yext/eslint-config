module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    './custom/javascript', //override rules in airbnb-base + add new rules
    './custom/typescript', //override rules in airbnb-typescript/base + add new rules
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json'
  }
}
