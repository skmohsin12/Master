import React from "react";
import { Copm3 } from "../PropsDrillingOrigional/Copm3";

export const Comp2 = ({ value }) => {
  //   document.write(arr);
  return (
    <div>
      <h1>This is Second Component </h1>
      <Copm3 value={value} />
    </div>
  );
};
