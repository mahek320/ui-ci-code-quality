module.exports = {
  roots: ['<rootDir>/public/src'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/public/src/components/setupTests.ts'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'public/src/components/**/*.{ts,tsx,js,jsx}',
    '!public/src/components/**/*.test.{ts,tsx,js,jsx}',
    '!public/src/components/**/setupTests.ts',
    '!public/src/components/**/index.tsx',
    '!**/*.d.ts'
  ]
}
