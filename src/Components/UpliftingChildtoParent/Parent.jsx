import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [childData, setData] = useState("");

  const recChildData = (data) => {
    setData(data);
    console.log(data);
  };
  return (
    <div>
      <h1>Uplifting of Props from Child to Parent and vice versa</h1>
      <h1>{childData}</h1>
      <h1>This is Parent Components</h1>
      <Child1 value={recChildData} />
      <Child2 props={childData} />
    </div>
  );
};

export default Parent;
