
 module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': ['off', { target: 'any' }],
    'import/no-unresolved': 'off', // Disable the eslintimport/no-unresolved rule,
    'import/order': 'on',
  },
<<<<<<< HEAD
};
=======
};
>>>>>>> fc0cd67 (updated code with eslint rules)
