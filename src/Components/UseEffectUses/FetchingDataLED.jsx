import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FetchingDataLED = () => {
    const [loading, setLoading] = useState(false)
    const[error, setError] = useState('')
    const [data, setData] = useState([])

    const getData = async ()=>{
        try{
            setLoading(true)
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setData(res.data)
            setLoading(false)
        }catch(err){
            setError(err.message)
        }
    }
    useEffect(()=>{
        getData()
    }, [])

    return (
        <div>
            <h1>Fetching Data with Loading, Error, and Data functionality...</h1>
            {loading ? 'Loading...' : data.map((elem, index)=>(
                <ul key={index}>
                    <li>{elem.id}</li>
                </ul>
            ))}
            {error ? error : null}
        </div>
    );
};

export default FetchingDataLED;