// TodoList.js
import React from 'react';
import TodoItem from './ToDoItem';

const TodoList = ({ todos, onDelete }) => {
  return (
    <div>
      <h2>ToDo List</h2>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
