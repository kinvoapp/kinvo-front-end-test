module.exports = {
  transform: {
    '^.+\\.(ts?|jsx?|tsx?)?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
      diagnostics: false,
    },
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/src/styles/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['<rootDir>/src/styles/', '<rootDir>/src/utils/', '.styles.ts', '__tests__/'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '@utils(.*)$': '<rootDir>/src/utils/$1',
    '@styles(.*)$': '<rootDir>/src/styles/$1',
    '@components(.*)$': '<rootDir>/src/components/$1',
    '@services(.*)$': '<rootDir>/services/$1',
    '@routes(.*)$': '<rootDir>/src/routes/$1',
    '@pages(.*)$': '<rootDir>/src/pages/$1',
    '@context(.*)$': '<rootDir>/src/context/$1',
    '@global.types': '<rootDir>/src/global.types.ts',
  },
  moduleDirectories: ['node_modules', 'src'],
};
