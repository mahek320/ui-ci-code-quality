module.exports = {
  roots: ['<rootDir>/public/src/components'],
  testMatch: [
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/public/src/components/setupTests.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'public/src/components/**/*.{ts,tsx,js,jsx}',
    '!public/src/components/index.tsx'  // optional: skip index
  ]
}
