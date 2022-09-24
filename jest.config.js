module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/cypress/', '/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/src/testing/setup-tests.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': `ts-jest`
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            'identity-obj-proxy',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    }
};
