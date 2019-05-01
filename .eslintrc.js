module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'vue',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV ===  'production' ? 'error' : 'off',
    //allow async-await
    'generator-star-spacing': 'off',
    //add
    'semi': [2, 'never'],
    'vue/max-attributes-per-line': 'off',
    'vue/no-unused-commponents': 'off',
    'vue/no-v-html': 'off',
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'semi': false
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'normal': 'never',
        'void': 'always'
      }
    }]
  }
}
