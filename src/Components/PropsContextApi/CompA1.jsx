import React, { createContext } from "react";
import { CompB1 } from "../PropsContextApi/CompB1";

export const Greetings = createContext();
export const CompA1 = () => {
  return (
    <div>
      <h1>
        <u>Showing use of ContextAPI</u>
      </h1>
      <h1>This is First Component as A1</h1>
      <Greetings.Provider value={"Good Morning :) "}>
        <CompB1 />
      </Greetings.Provider>
    </div>
  );
};
