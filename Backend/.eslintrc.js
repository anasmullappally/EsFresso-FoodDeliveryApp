module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: '"latest"',
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
