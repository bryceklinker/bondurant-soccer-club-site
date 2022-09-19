const nextJest = require('next/jest');
const createJestConfig = nextJest({
    dir: './'
});

module.exports = createJestConfig({
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: [
        '<rootDir>/src/testing/setup-tests.ts'
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
});
