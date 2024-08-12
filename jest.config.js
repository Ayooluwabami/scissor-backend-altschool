module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'test',
  testRegex: '.*\\.spec\\.ts$',
  coverageDirectory: '../coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(nestjs-module|some-other-module)/)'],
};
