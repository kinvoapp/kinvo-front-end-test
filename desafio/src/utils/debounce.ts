// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Procedure = (...args: any[]) => void;

interface DebouncedFunction<F extends Procedure> {
  (this: ThisParameterType<F>, ...args: Parameters<F>): void;
}

export function debounce<F extends Procedure>(
  func: F,
  waitMilliseconds = 1000
): DebouncedFunction<F> {
  let timeout: number;

  const debouncedFunction = function fun(
    this: ThisParameterType<F>,
    ...args: Parameters<F>
  ) {
    if (timeout) clearTimeout(timeout);

    timeout = window.setTimeout(() => {
      func(...args);
    }, waitMilliseconds);
  };

  return debouncedFunction;
}
