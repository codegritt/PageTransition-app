import React from "react";

const ListItem = ({ list, deleteItem }) => {
  const itemDisplay = list.map((item) => (
    <li key={item.id}>
      {item.text}
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </li>
  ));
  return <>{itemDisplay}</>;
};

export default ListItem;
