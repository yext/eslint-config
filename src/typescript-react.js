module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    './custom/javascript', //override base rules in airbnb + add new rules
    './custom/typescript', //override rules in airbnb-typescript + add new rules
    './custom/react'       //override react rules in airbnb + add new rules
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json'
  }
}
