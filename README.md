# eslint-config

<div>
  <a href="https://npmjs.org/package/@yext/eslint-config">
    <img src="https://img.shields.io/npm/v/@yext/eslint-config" alt="NPM version"/>
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg" alt="License"/>
  </a>
</div>
<br>

Yext's ESLint configurations for Javascript, Typescript, and React repos.

## Configs

This package offers three pre-built configs:
- A default config for vanilla javascript specific rules
- "typescript" config for typescript specific rules
- "typescript-react" config, which extends our "typescript" config with react rules

Example usage:

```js
{
  extends: [
    '@yext/eslint-config/typescript-react',
  ]
}
```

# Typescript specific configuration

Certain rules included in "typescript" config or "typescript-react" config requires
"parserOptions.project" to be defined. By default, it's set to "./tsconfig.json".
User may override "parserOptions.project" configuration to provide a different path
to their project's tsconfig file.
