import React from "react";
import { CompD } from "./CompD";

export const CompC = (props) => {
  return (
    <div>
      <h1>This is Component C {props.value}</h1>
      <CompD userName={"This is your user Name :) compD :)"} />
    </div>
  );
};
