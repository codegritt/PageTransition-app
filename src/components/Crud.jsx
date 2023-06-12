import React, { useEffect, useState } from "react";
import axios from "axios";

const Crud = () => {
  const [itemText, setItemText] = useState("");
  const [listitem, setListitem] = useState("");
  const [isUpdating, setIsUpdating] = useState([]);
  const [isUpdatingtext, setIsUpdatingtext] = useState("");

  const addItems = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5500/api/item`, {
        item: itemText,
      });
      setListitem((prev) => [...prev, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getallItems = async (e) => {
      try {
        const res = await axios.get(`http://localhost:5500/api/items`);
        setListitem(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  });

  const deleteItem = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5500/api/item/${id}`);
      const deletearray = listitem.filter((item) => item._id !== id);
      setListitem(deletearray);
    } catch (err) {
      console.log(err);
    }
  };

  const renderupdateform = () => {
    <div onSubmit={(e) => updateformtext(e)}>
      <input
        className="form-control"
        placeholder="enter text here"
        onChange={(e) => setIsUpdatingtext(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Update
      </button>
    </div>;
  };

  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5500/api/item/${isUpdating}`
      );
      const updatedIndex = listitem.findIndex(
        (item) => item._id === isUpdating
      );
      const updatedtextitem = (listitem[updatedIndex].item = isUpdatingtext);
      setIsUpdating("");
      setIsUpdatingtext("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Todo list</h1>
      <div onSubmit={(e) => addItems(e)}>
        <input
          placeholder="enter text here"
          onChange={(e) => setItemText(e.target.value)}
          value={itemText}
        />
        <button type="submit">ADD</button>
      </div>
    </div>
  );
};

export default Crud;
