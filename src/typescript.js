module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@yext/export-star/recommended',
    '@yext/slapshot'
  ],
  plugins: [
    'eslint-plugin-tsdoc'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    '@typescript-eslint/indent': ['warn', 2, {
      SwitchCase: 1,
      ignoreComments: true
    }],
    '@typescript-eslint/quotes': ['warn', 'single'],
    '@typescript-eslint/space-before-function-paren': ['warn', {
      named: 'never',
      anonymous: 'never'
    }],
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    '@typescript-eslint/semi': 'warn',
    '@typescript-eslint/no-extra-semi': 'warn',
    '@typescript-eslint/keyword-spacing': 'warn',
    '@typescript-eslint/type-annotation-spacing': 'warn',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_' 
    }],
    '@typescript-eslint/member-delimiter-style': ['warn', {
      multiline: {
        delimiter: 'comma',
        requireLast: false
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false
      },
    }],
    '@typescript-eslint/func-call-spacing': 'warn',
    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/comma-spacing': 'warn',
    '@typescript-eslint/space-infix-ops': ['warn', { 'int32Hint': false }],
    'tsdoc/syntax': 'warn'
  }
}

