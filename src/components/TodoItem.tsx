import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: (e: React.MouseEvent) => void;
}> = ({ text, onRemoveTodo }) => {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>
      {text}
    </li>
  );
};

export default TodoItem;
