import React, { useState, useEffect } from "react";

export const MouseMoveEvent = () => {
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);

  const handleListner = (evnt) => {
    setY(evnt.clientY);
    setX(evnt.clientX);
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleListner);
  }, []);
  return (
    <div>
      <h1>Mouse Move Event with useEffect()</h1>
      <h1>Y-Axix position :{y}</h1>
      <h1>X-Axix position :{x}</h1>
    </div>
  );
};
