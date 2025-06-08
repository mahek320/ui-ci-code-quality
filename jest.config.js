module.exports = {
  roots: ['<rootDir>/src/public'], // ✅ correct root
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/src/public/setupTests.ts'], // ✅ fix path
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'src/public/**/*.{ts,tsx,js,jsx}',     // ✅ include everything under public
    '!src/public/index.tsx'                // optional: exclude entry file
  ]
};
