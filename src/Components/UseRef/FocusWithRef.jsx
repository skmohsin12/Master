import React, { useRef, useEffect } from "react";

export const FocusRef = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div>
      <h1>Focus with useRef</h1>
      <input type="text" ref={inputRef} />
    </div>
  );
};
