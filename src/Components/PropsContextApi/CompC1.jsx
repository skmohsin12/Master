import React from "react";
import { Greetings } from "../PropsContextApi/CompA1";

export const CompC1 = () => {
  return (
    <div>
      <h1>This is Third Component as C1</h1>
      <Greetings.Consumer>
        {(prop) => {
          return <h1>{prop}</h1>;
        }}
      </Greetings.Consumer>
    </div>
  );
};
