import React from "react";
import { Comp2 } from "../PropsDrillingOrigional/Copm2";

export const Comp1 = () => {
  // const arr = ["Shaikh Mohsin"];
  const arr = {
    your: "Shaikh Mohsin",
    fathersName: "Shaikh Muneer",
  };
  return (
    <div>
      <h1>This is the First Component </h1>
      <Comp2 value={arr} />
    </div>
  );
};
