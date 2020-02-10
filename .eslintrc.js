module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb-base", "prettier"],
  eslint: recommended,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  plugins: ["import"],
  rules: {
    "no-console": "off",
    "import/no-unassigned-import": 0
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  }
};
