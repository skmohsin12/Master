import React, { useCallback, useState } from 'react';

const UseCallback = () => {
    // useCalback() hook is used for performance optimization purpose. It will stop un-necessary re-renders of the components.
    // it will return a memoised function if there is not any change within the dependanciew like state of that function useCallback() will not allow the component to re-render.
    // basically it will accepts two  parameters - you know well

    const [count, setCount] = useState(0)

    const handleIncrement = useCallback(()=>{
        setCount(count + 1)
    },[count])

    console.log("Callback component renders...")
    
    return (
        <div>
            <h1>Purpose of useCallback() hook...</h1>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default UseCallback;