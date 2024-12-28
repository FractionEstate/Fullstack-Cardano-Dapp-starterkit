/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](node_modules|.next|dist|build)[/\\\\]'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ]
};