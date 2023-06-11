import React, { useEffect, useState } from "react";
import axios from "axios";

const Crud = () => {
  const [itemList, setitemList] = useState("");
  const [listItems, setlistItems] = useState("");
  const [isUpdating, setisUpdating] = useState([]);
  const [updateitemList, setupdateitemList] = useState("");

  const addData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("http:localhost:5500/api/item", {
        item: itemList,
      });
      setlistItems((prev) => [...prev, res.data]);
      setitemList("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get("http:localhost:5500/api/items");
        setlistItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  });
  return <div>Crud</div>;
};

export default Crud;
