import React, { useRef, useEffect } from "react";


//useRef() hook is used to access DOM elements directly.
//For example - tell the below example useRef() is used for preference purpose and focus on the input field when page loads.
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
