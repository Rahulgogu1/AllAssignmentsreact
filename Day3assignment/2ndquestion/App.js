// App.js
import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <span>{todo}</span>
      <button onClick={() => onDelete(todo)}>Delete</button>
    </div>
  );
};

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

const App = () => {
  const [todos, setTodos] = useState(['Learn React', 'Build ToDo App', 'Deploy App']);

  const handleDelete = (todoToDelete) => {
    const updatedTodos = todos.filter((todo) => todo !== todoToDelete);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>ToDoList App</h1>
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
};

export default App;
