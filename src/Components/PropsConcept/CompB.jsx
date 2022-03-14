import React from "react";
import { CompC } from "./CompC";

export const CompB = (props) => {
  return (
    <div>
      <h1>This is Comonent B {props.value}</h1>
      <CompC value={"Wow Component C :)"} />
    </div>
  );
};
