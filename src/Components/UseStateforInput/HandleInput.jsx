import React, { useState } from "react";

const HandleInput = () => {
  const [name, setName] = useState("");
  return (
    <React.Fragment>
      <h1>OutPut : {name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </React.Fragment>
  );
};
export default HandleInput;
