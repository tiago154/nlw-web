module.exports = {
  env: {
    jest: true,
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'react-app'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    "react/prop-types": 1
  }
}
