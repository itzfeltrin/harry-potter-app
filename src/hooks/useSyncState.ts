import { useEffect, useState } from "react";

export default function useSyncState<T>(
  key: string,
  initialValue?: T
): [T | undefined, (newValue: T) => void] {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue) {
      const parsedValue = JSON.parse(storedValue);
      setState(parsedValue);
    }
  }, []);

  const updateState = (newValue: typeof state) => {
    setState(newValue);

    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [state, updateState];
}
