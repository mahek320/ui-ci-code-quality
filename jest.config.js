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
    'public/src/components/App.tsx',
    'public/src/components/**/*.{ts,tsx,js,jsx}',
    '!**/*.d.ts'
    
  ]
}
