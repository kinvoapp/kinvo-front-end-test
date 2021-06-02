import '@testing-library/jest-dom';

require('jest-fetch-mock').enableMocks();

jest.mock('axios');

declare let process: { on: (a: string, b: any) => void };

afterEach(() => {
  jest.clearAllMocks();
});

jest.setTimeout(50000);

process.on('unhandledRejection', (e: any) => {
  // eslint-disable-next-line no-console
  console.error('**** Unhandled rejection in promise: ');
  // eslint-disable-next-line no-console
  console.error(e);
});

const consoleError = console.error;
console.error = jest.fn((...args) => {
  const [error] = args;
  const skipMessages = [
    'Browser does not support SVG',
    "Content type isn't valid",
    'Could not convert the src',
    'Error parsing input',
    'Expected `%s` listener',
    'fetch is not a function',
    'Missing src',
    'Not found',
  ];

  if (!skipMessages.some(d => error.toString().includes(d))) {
    // consoleError(...args);
  }
});

class IntersectionObserver {
  observe = jest.fn();

  disconnect = jest.fn();

  unobserve = jest.fn();
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});
Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});
