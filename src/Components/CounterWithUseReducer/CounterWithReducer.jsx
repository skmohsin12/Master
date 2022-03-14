import React, { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "initial":
      return initialValue;
    default:
      return state;
  }
};

export const ReducerCounter = () => {
  const [count, setCount] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>
        {" "}
        <u>Counter using useReducer</u>{" "}
      </h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          if (count <= 0) {
            setCount(initialValue);
          } else {
            setCount("decrement");
          }
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount("initial");
        }}
      >
        Reset
      </button>
    </div>
  );
};
