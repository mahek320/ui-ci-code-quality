module.exports = {
  roots: ['<rootDir>/public/src'],

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
    '!public/src/components/**/*.test.{ts,tsx,js,jsx}',  // Exclude test files
    '!public/src/components/**/setupTests.ts',           // Exclude setup file
    '!public/src/components/**/index.tsx',               // Exclude index (bootstrap)
    // '!public/src/components/**/App.tsx',              // Optional: exclude App if it's just layout
    '!**/*.d.ts'                                          // Already present
  ]
}
