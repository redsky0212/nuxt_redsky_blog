module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  plugins: ['vue'],
  rules: {
    // semi: [2, 'never'],
    'no-unused-vars': 1,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/require-prop-types': 'off',
    'vue/attributes-order': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'no-debugger': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        printWidth: 200,
        semi: true,
        endOfLine: 'auto',
        singleQuote: true,
        tabWidth: 2,
      },
    ],
  },
};
