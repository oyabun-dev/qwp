module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
        '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
        '\\.(less|sass|scss)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp)$': '<rootDir>/__mocks__/fileMock.js',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!lenis|react-router-dom|react-router|@vercel/analytics)',
    ],
};
