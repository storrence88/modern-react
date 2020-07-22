import { useState } from 'react';

export default (initalValue) => {
  const [value, setValue] = useState(initalValue);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const reset = () => {
    setValue('');
  };

  return [value, handleChange, reset];
};
