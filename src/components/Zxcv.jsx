import React, { useState } from "react";
import Pluarlize from "./Pluarlize";
import Listitem from "./Listitem";

const Zxcv = () => {
  const [todoItems, settodoItems] = useState([]);
  const [todoList, settodoLIst] = useState([
    { id: "1", text: "gokul" },
    { id: "2", text: "max" },
  ]);

  const generateId = () => {
    const highestId = Math.max.apply(
      Math,
      todoList.map(function (element) {
        return element.id;
      })
    );
    let newId = 1;
    if (highestId > 0) {
      newId = highestId + 1;
    }

    return newId;
  };

  function createItem() {
    if (todoItems !== "") {
      const item = { id: generateId, text: todoItems };
      const tempArray = [...todoList, item];
      settodoLIst(tempArray);
    }
    settodoItems("");
  }

  function handleAdd(e) {
    e.preventDefault();
    createItem();
  }

  function handlekeyPress(e) {
    if (e.key === "Enter") {
      createItem();
    }
  }

  const deleteItem = (id) => {
    settodoLIst(todoItems.filter((item) => item.id !== id));
  };
  return (
    <div>
      <h1>Todo app by react</h1>
      <h6>
        {todoList.length} <Pluarlize itemList={todoList} word="todoItems" />
      </h6>
      <div>
        <input
          className="form-control"
          value={todoItems}
          name="todoItems"
          onKeyPress={handlekeyPress}
          type="text"
          onChange={(e) => {
            settodoItems(e.currentTarget.value);
          }}
        />

        <div>
          <button className="btn btn-primary" type="button" onClick={handleAdd}>
            ADD
          </button>
        </div>
      </div>

      <div>
        {todoList.length ? (
          <Listitem list={todoList} deleteItem={deleteItem} />
        ) : (
          <p>Nothing to show</p>
        )}
      </div>
    </div>
  );
};

export default Zxcv;
