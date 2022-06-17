import React, { useState, useEffect } from "react";

export const Timer2 = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((e) => e + 1);
  };
  useEffect(() => {
    setInterval(handleCount, 1000);
  }, []);

  return (
    <div>
      <h1>Second Timer</h1>
      <h1>{count}</h1>
    </div>
  );
};
