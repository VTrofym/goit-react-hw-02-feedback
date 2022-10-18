import React from 'react';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(({ id, text }) => (
    <li key={id}>
        <p>{text}</p>
        <button>Удалить</button>
      </li>
      
    ))}
  </ul>
);

export default TodoList;

