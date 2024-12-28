/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const Card = () => {
  const [count, setCount] = useState(() => {

    const storedCount = localStorage.getItem('val');
    return storedCount ? parseInt(storedCount, 10) : 0;
  });


  useEffect(() => {
    localStorage.setItem('val', count);
  }, [count]);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Card;

