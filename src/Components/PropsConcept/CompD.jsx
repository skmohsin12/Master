import React from "react";
import { NameProvider, NameOfSon } from "./CompA";

export const CompD = (props) => {
  return (
    <div>
      <NameProvider.Consumer>
        {(e) => {
          <NameOfSon.Consumer>
            return <h1>This is Comonent D {e} </h1>;
          </NameOfSon.Consumer>;
        }}
      </NameProvider.Consumer>

      <NameOfSon.Consumer>
        {(e) => {
          return (
            <h1>
              Your Son Name is {e.fName} {e.lName} {e.age}
            </h1>
          );
        }}
      </NameOfSon.Consumer>
    </div>
  );
};
