import { useState, useEffect } from 'react';

function useLocalStorageState(key, initialValue) {
  // Make piece of state, based off of value in localStorage
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(initialValue));
    } catch (error) {
      val = initialValue;
    }
    return val;
  });
  // Use useEffect to update localStorage when state changes
  useEffect(
    () => {
      window.localStorage.setItem(key, JSON.stringify(state));
    },
    [state, key]
  );
  return [state, setState];
}

export default useLocalStorageState;
