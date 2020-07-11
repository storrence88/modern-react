import React, { useState } from 'react';
import useToggle from './hooks/useToggle';

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(false);
  const [isBanana, toggleIsBanana] = useToggle(true);

  return (
    <div>
      <h1 onClick={() => toggleIsHappy(!isHappy)}>{isHappy ? '😄' : '😢'}</h1>
      <h1 onClick={() => toggleIsHeartBroken(!isHeartBroken)}>{isHeartBroken ? '💔' : '❤️'}</h1>
      <h1 onClick={() => toggleIsBanana(!isBanana)}>{isBanana ? '🍌' : '🍏'}</h1>
    </div>
  );
}

export default Toggler;
