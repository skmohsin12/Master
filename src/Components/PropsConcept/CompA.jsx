import React, { createContext } from "react";
import { CompB } from "./CompB";

const arr = { fName: "Shaikh Mohsin", lName: "Shaikh Muneer", age: 28 };
export const NameProvider = createContext();
export const NameOfSon = createContext();
export const CompA = () => {
  return (
    <div>
      <h1>This is Comonent A </h1>
      <NameProvider.Provider value={"Shaikh Muneer"}>
        <NameOfSon.Provider value={("Shaikh Mohsin", arr)}>
          <CompB value={"Hi Component A"} />
        </NameOfSon.Provider>
      </NameProvider.Provider>
    </div>
  );
};
