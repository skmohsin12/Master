import axios from "axios";
import React, { useState, useEffect } from "react";

export const FetchDatawithAxios = () => {
  const [apiData, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Data from Axios</h1>
      {apiData.map((e) => {
        return (
          <div>
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>{e.body}</td>
            </tr>
          </div>
        );
      })}
    </div>
  );
};
