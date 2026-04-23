const googleConfig = require('eslint-config-google');

const rules = {...googleConfig.rules};
delete rules['valid-jsdoc'];
delete rules['require-jsdoc'];

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        // node globals
        require: 'readonly',
        exports: 'readonly',
        module: 'readonly',
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    rules: {
      ...rules,
      'no-unused-vars': 'warn',
    },
  },
];
