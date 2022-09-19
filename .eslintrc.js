module.exports = {
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'parser': 'babel-eslint',
    rules: {
      "max-len":["error",{code:300}],
      camelcase: 2,
      "no-empty": 2,
    },
  }
}
