import React, { useState, useEffect } from "react";

export const Counter = () => {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);
  useEffect(() => {
    document.title = `The Counter : ${count} times`;
  });
  return (
    <div>
      <h1>{count}</h1>
      <input type="text" placeholder={count} />
      <button onClick={() => setCount(count + 1)}>Click to Increment</button>
      <button
        onClick={() => {
          if (count <= 0) {
            setCount(initialValue);
          } else {
            setCount(count - 1);
          }
        }}
      >
        Click to Decrement
      </button>
      <button onClick={() => setCount(initialValue)}>Click to Decrement</button>
      <select name="" id="">
        <option value="Select">Select Value</option>
        <option value="Select">Select Value</option>
        <option value="Select">Select Value</option>
      </select>
    </div>
  );
};
