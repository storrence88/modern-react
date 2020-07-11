import React, { useState } from 'react';

function CounterHook() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>The count is: {count}</h1>
      <button onClick={() => setCount((currState) => currState + 1)}>Increment Count</button>
    </div>
  );
}

export default CounterHook;
