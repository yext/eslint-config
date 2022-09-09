module.exports = {
  rules: {
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'comma-dangle': ['error', 'never'],
    'no-underscore-dangle': 'off',
    'no-console': 'off'
  }
};
