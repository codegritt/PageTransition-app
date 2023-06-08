import React, { useEffect, useState } from "react";
import axios from "axios";

const Zxcv = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div>
      {data.map((obj, index) => {
        return (
          <p>
            {obj.username}
            {obj.email}
          </p>
        );
      })}
    </div>
  );
};

export default Zxcv;
