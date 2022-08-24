module.exports = {
  extends: [
    'plugin:@yext/export-star/recommended',
    '@yext/slapshot'
  ],
  rules: {
    indent: ['warn', 2, {
      SwitchCase: 1,
      ignoreComments: true
    }],
    quotes: ['warn', 'single'],
    'space-before-function-paren': ['warn', {
      named: 'never',
      anonymous: 'never'
    }],
    'object-curly-spacing': ['warn', 'always'],
    'quote-props': ['warn', 'as-needed'],
    semi: ['warn', 'always'],
    'no-extra-semi': 'warn',
    'keyword-spacing': 'warn'
  }
};
