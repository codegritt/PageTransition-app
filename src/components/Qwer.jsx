import React, { useState } from "react";
import Pluarlize from "./Pluarlize";
import ListItem from "./Listitem";

function Qwer() {
  document.title = "Simple Todo List Example";

  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([
    { id: "1", text: "Groceries" },
    { id: "2", text: "Dry Cleaning" },
    { id: "3", text: "Pick up Kids" },
    { id: "4", text: "Dog to Vet" },
  ]);

  const generateId = () => {
    const highestId = Math.max.apply(
      Math,
      todoList.map(function (element) {
        return element.id;
      })
    );
    let newId = 1; // default in case the array is empty

    if (highestId > 0) {
      // generate a new ID based off of
      // the highest existing element ID
      newId = highestId + 1;
    }
    return newId;
  };

  function createNewToDoItem() {
    if (todoItem !== "") {
      const item = { id: generateId(), text: todoItem };
      const tempArray = [...todoList, item];
      setTodoList(tempArray);
    }
    setTodoItem("");
  }

  function handleAdd(e) {
    e.preventDefault();
    createNewToDoItem();
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createNewToDoItem();
    }
  };

  const deleteItem = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-5 col-8">
      <h3>Simple Todo List</h3>
      <h6>
        {todoList.length} <Pluarlize itemList={todoList} word="item" />
      </h6>
      <div className="input-group">
        <input
          type="text"
          name="todoItem"
          className="form-control"
          value={todoItem}
          onChange={(e) => {
            setTodoItem(e.currentTarget.value);
          }}
          onKeyPress={handleKeyPress}
        />

        <div className="input-group-append">
          <button type="button" onClick={handleAdd} className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </div>
      <div className="mt-2">
        {todoList.length ? (
          <ul>
            <ListItem list={todoList} deleteItem={deleteItem} />
          </ul>
        ) : (
          <p>No items to list.</p>
        )}
      </div>
    </div>
  );
}

export default Qwer;
