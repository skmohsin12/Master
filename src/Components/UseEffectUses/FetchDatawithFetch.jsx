import React, { useState, useEffect } from "react";

export const FetchData = () => {
  const [apiData, setData] = useState([]);

  const getApiData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    setData(await response.json());
    // console.log(recData);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div>
      <h1>Fetching Data From Jason.placeholder</h1>
      {apiData.map((elem) => {
        return (
          <div>
            <tr key={elem.id}>
              <td>{elem.id}</td>
              <td>{elem.title}</td>
              <td>{elem.body}</td>
            </tr>
          </div>
        );
      })}
    </div>
  );
};
