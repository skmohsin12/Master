import React, { useState } from "react";
// import "../BulbComonent/Bulb.css";
import "../BulbComonent/Bulb.css";
export const Bulb = () => {
  const [target, setTarget] = useState("bulbOn");
  return (
    <React.Fragment>
      <div className={target}>
        <h1>Bulb</h1>
        <button
          onClick={() =>
            target === "bulbOn" ? setTarget("bulbOff") : setTarget("bulbOn")
          }
        >
          On/Off Button
        </button>
      </div>
      <button onClick={() => setTarget("bulbOn")}>Off Button</button>
      <button onClick={() => setTarget("bulbOff")}>On Button</button>
    </React.Fragment>
  );
};
