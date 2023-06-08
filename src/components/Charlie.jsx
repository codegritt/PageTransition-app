import React, { useState } from "react";

const Charlie = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState([
    { id: "1", text: "gokul" },
    { id: "2", text: "anagha" },
    { id: "3", text: "sai" },
    { id: "4", text: "max" },
  ]);

  return <div>Charlie</div>;
};

export default Charlie;
