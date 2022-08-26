module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    './overrides/javascript', // override base rules in airbnb + add new rules
    './overrides/typescript', // override rules in airbnb-typescript + add new rules
    './overrides/react' // override react rules in airbnb + add new rules
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json'
  }
};
