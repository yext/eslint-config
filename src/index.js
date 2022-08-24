module.exports = {
  rules: {
    'no-trailing-spaces': 'warn',
    'arrow-spacing': 'warn',
    'no-multi-spaces': 'warn',
    'max-len': ['warn', {
      code: 110,
      ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 1 }],
    'array-bracket-newline': ['warn', 'consistent'],
    'array-element-newline': ['warn', 'consistent'],
    'arrow-spacing': 'warn',
    'block-spacing': 'warn',
    'key-spacing': ['warn', { mode: 'minimum' }]
  },
  ignorePatterns: [
    'lib',
    'dist'
  ],
};
