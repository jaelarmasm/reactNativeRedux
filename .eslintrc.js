
module.exports = {
  extends: [
    'airbnb',
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended"
    "eslint-config-prettier"
  ],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'import/no-unresolved': 'off',
    "react/jsx-filename-extension": [
    1,
    {
      "extensions": [".js", ".jsx"]
    }],
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
    'max-len': [ 2, { code: 80 } ],
    'arrow-parens': [2, 'as-needed'],
  },
};