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
    'public/src/components/**/*.{ts,tsx,js,jsx}', // ✅ Includes all relevant files
    '!public/src/components/**/*.test.{ts,tsx,js,jsx}', // ✅ Excludes test files
    '!public/src/components/**/setupTests.ts', // ✅ Excludes setup
    '!public/src/components/**/index.tsx', // ✅ Excludes barrel files
    '!**/*.d.ts', // ✅ Excludes type declarations
    '!**/__mocks__/**', // ✅ (Optional) Exclude mock files if you use them
    '!**/__tests__/**' // ✅ (Optional) Exclude test folders if you use them
  ]
}
