import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((e) => e + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>My Timer</h1>
      <h1>{count}</h1>
    </div>
  );
};
