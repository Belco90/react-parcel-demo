/** @type {import('@jest/types').Config.InitialOptions} */
const jestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  clearMocks: true,
  transform: {
    '.+\\.(css|svg|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
}

export default jestConfig
