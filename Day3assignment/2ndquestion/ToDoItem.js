// TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <span>{todo}</span>
      <button onClick={() => onDelete(todo)}>Delete</button>
    </div>
  );
};

export default TodoItem;
