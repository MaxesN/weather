export const loadStateFromLocalStorage = <T> (key: string): T | undefined => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      return JSON.parse(storedData) as T;
    }
  };