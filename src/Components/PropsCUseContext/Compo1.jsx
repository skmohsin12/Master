import React, { createContext } from "react";
import { Compo2 } from "../PropsCUseContext/Compo2";

export const Greetings = createContext();
export const FathersName = createContext();
export const Compo1 = () => {
  return (
    <div>
      <h1>
        <u>Showing the useContext()</u>
      </h1>
      <h1>This is First Component</h1>
      <Greetings.Provider value={"Good Morning :) "}>
        <FathersName.Provider value={"Shaikh Muneer"}>
          <Compo2 />
        </FathersName.Provider>
      </Greetings.Provider>
    </div>
  );
};
