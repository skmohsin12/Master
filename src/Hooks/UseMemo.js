import React, { useMemo, useState } from 'react';

const UseMemo = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    // Use useMemo to calculate the sum of countA and countB

    const sum = useMemo(()=>{
        console.log('Calculating Sum...')
        return countA + countB
    },[countA, countB])


    return (
        <div>
            <h1>Example of useMemo() hook...</h1>
            <br />
            <h2>Count - A value :{countA}</h2>
            <button onClick={() => setCountA(countA + 1)}>Increment A</button>

            <br />
            <h2>Count - B value :{countB}</h2>
            <button onClick={() => setCountB(countB + 1)}>Increment B</button>

            <br />
            <h2>Sum of Count A and Count B: {sum}</h2>

        </div>
    );
};

export default UseMemo;