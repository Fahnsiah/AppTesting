module.exports = {
    // Indicates whether each individual test should be reported during the run
    verbose: true,
  
    // The glob patterns Jest uses to detect test files
    testMatch: [
      '**/__tests__/**/*.js?(x)',
      '**/?(*.)+(spec|test).js?(x)'
    ],
  
    // An array of file extensions your modules use
    moduleFileExtensions: [
      'js',
      'jsx',
      'json',
      'node'
    ],
  
    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: [
      '/node_modules/'
    ],
  
    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: [
      '/node_modules/'
    ],
  
    // A map from regular expressions to paths to transformers
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
  
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
  
    // An array of file extensions that should be considered when calculating coverage
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!**/node_modules/**'
    ],
  
    // The test environment that will be used for testing
    testEnvironment: 'node'
  };
  