module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/label-has-for': 0,
        'no-confusing-arrow': 0,
        'no-nested-ternary': 0,
        'react-native/no-inline-styles': 0, // 关闭行内style警告
        'react/no-this-in-sfc': 0,
        'prettier/prettier': [
          'error',
          {
            'no-inline-styles': false,
            fileInfoOptions: {
              withNodeModules: true,
            },
          },
        ],
      },
    },
  ],
};
