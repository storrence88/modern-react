import { useState } from 'react';

function useToggleState(initialValue = false) {
  // Call 'useState' to reserve piece of state
  const [state, setState] = useState(initialValue);
  const toggle = () => {
    setState(!state);
  };
  // Return piece of state AND function to toggle it
  return [state, toggle];
}

export default useToggleState;
