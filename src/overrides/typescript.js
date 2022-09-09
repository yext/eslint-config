module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['eslint-plugin-tsdoc'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: false
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    'tsdoc/syntax': 'error'
  }
};
