// import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// interface Props {
//   children: React.ReactNode;
// }

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
