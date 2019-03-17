// https://jestjs.io/docs/en/configuration.html

module.exports = {
    verbose: true,//该不该显示都显示
    clearMocks: false,
    collectCoverage: false,
    reporters: ["default"],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleDirectories: ['node_modules'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json',
        },
    },
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
    },
    testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],//所有的测试文件在哪里
    transform: {
        "^.+unit\\.(js|jsx)$": "babel-jest",//如何转义
        '^.+\\.(ts|tsx)$': 'ts-jest',//如何转义
    },
    setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
}