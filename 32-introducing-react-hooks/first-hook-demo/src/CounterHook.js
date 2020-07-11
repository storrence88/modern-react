import React, { useState } from 'react';

function CounterHook() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>The count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount(count - 1)}>Decrement Count</button>
    </div>
  );
}

export default CounterHook;
