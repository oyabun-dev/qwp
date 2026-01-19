module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
    },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'react/prop-types': 'off', // Common in modern React/Vite to largely ignore this if not using TS strictly or at all
    },
    overrides: [
        {
            files: [
                'jest.config.cjs',
                'babel.config.cjs',
                '.eslintrc.cjs',
                'jest.setup.js',
                '__mocks__/**/*',
            ],
            env: {
                node: true,
            },
        },
    ],
}
