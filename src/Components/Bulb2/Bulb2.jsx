import React, { useState } from "react";
import "../Bulb2/Bulb2.css";

export const Bulb2 = () => {
  const [target, setTarget] = useState("bulbOn");
  return (
    // <React.Fragment>
    <div className={target}>
      <button
        onClick={() => {
          target === "bulbOn" ? setTarget("bulbOff") : setTarget("bulbOn");
        }}
      >
        On/Off Button
      </button>
    </div>
    // </React.Fragment>
  );
};
