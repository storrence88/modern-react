import { useState } from 'react';

function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);

  // Function that toggles the state
  const toggle = () => {
    setState(!state);
  };
  // Return state and function used to toggle it
  return [state, toggle];
}

export default useToggle;
