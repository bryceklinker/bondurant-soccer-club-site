module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/src/testing/setup-tests.ts'],
    transform: {
        '^.+\\.tsx?$': [
            `ts-jest`,
            {
                tsconfig: '<rootDir>/tsconfig.spec.json'
            }
        ]
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            'identity-obj-proxy',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    }
};
