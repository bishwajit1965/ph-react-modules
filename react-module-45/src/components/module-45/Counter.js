import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const decrementCount = () => {
    const newCount = count - 1;
    if (newCount >= 0) {
      setCount(newCount);
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount}> Increase</button> &nbsp;
      <button onClick={decrementCount}> Decrease</button>
    </div>
  );
};
