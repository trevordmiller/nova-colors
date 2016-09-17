module.exports = {
  "extends": ["eslint:recommended"],
  "env": {
    "es6": true,
    "node": true,
    "commonjs": true,
    "browser": true,
    "jest": true,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module",
  },
  "plugins": ["react"],
  "rules": {
    "linebreak-style": ["error", "unix"],
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
  }
}
