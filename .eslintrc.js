module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
  },
};
