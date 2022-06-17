import React from "react";

const Child1 = (props) => {
  const Greetings = "Good Morning :)";
  return (
    <div>
      <h1>This is Child1</h1>
      <button onClick={() => props.value(Greetings)}>Send to Parent</button>
    </div>
  );
};

export default Child1;
