module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue'],
  rules: {
    // semi: [2, 'never'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/require-prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        endOfLine: 'auto',
        singleQuote: true,
      },
    ],
  },
}
