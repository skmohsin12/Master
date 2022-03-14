import React, { useContext } from "react";
import { Greetings, FathersName } from "../PropsCUseContext/Compo1";

export const Compo3 = () => {
  const ReceiveGreetings = useContext(Greetings);
  const ReceiveFathersName = useContext(FathersName);
  console.log(ReceiveGreetings);
  return (
    <div>
      <h1>This is Third Component</h1>
      <h1> {ReceiveGreetings} </h1>
      <h1> Your Fathers Nameis : {ReceiveFathersName} </h1>
    </div>
  );
};
