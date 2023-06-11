// import React from "react";

// const Listitem = ({ list, deleteItem }) => {
//   const itemdisplay = list.map((item) => <li key={item.id}>{item.text}</li>);
//   return <div>{itemdisplay}</div>;
// };

// export default Listitem;
import React from "react";

const Listitem = ({ list, deleteItem }) => {
  const listDisplay = list.map((item) => <li key={item.id}>{item.text}</li>);
  return <div>{listDisplay}</div>;
};

export default Listitem;
