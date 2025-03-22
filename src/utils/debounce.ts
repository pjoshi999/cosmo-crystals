export default function debounce<
  F extends (...args: Parameters<F>) => ReturnType<F>
>(func: F, delay: number = 1000): (...args: Parameters<F>) => void {
  let timeoutId: NodeJS.Timeout | null = null;

  return function (...args: Parameters<F>): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
}

// In the code above, we have created a  debounce  function that takes a function and a delay as arguments. The function returns a new function that will be called after the delay has passed. If the returned function is called again before the delay has passed, the previous timeout is cleared and a new timeout is set.
// Now, we can use this function to debounce the  handleSearch  function in our  Search  component.
