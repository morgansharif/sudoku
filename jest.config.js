module.exports = {
  verbose: true,
  testMatch: ['**/__tests__/**/*.test.js'],
  // collectCoverage: true,
  collectCoverageFrom: ['**/*.js', '!**/*.config.js'],
  coveragePathIgnorePatterns: ['node_modules/', 'coverage/'],
};
