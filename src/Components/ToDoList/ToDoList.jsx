import React, { useState } from "react";

export const ToDoList = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const listEvent = (event) => {
    setInput(event.target.value);
  };
  const listItems = (e) => {
    setData((text) => {
      return [...text, input];
    });
    setInput("");
  };

  return (
    <div>
      <h1>My ToDo List</h1>
      <input
        type="text"
        placeholder="Enter Items"
        onChange={listEvent}
        value={input}
      />
      <button onClick={listItems}> +Add </button>
      <br />
      <br />
      {data.map((e) => {
        return (
          <div>
            <li>{e}</li>
          </div>
        );
      })}
    </div>
  );
};
