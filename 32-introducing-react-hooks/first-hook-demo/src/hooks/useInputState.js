import { useState } from 'react';

function useInputState(initalValue) {
  const [value, setValue] = useState(initalValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return [value, handleChange, reset];
}

export default useInputState;
