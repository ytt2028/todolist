import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleComplete={() => toggleComplete(index)}
          deleteTodo={() => deleteTodo(index)}
          editTodo={(newText) => editTodo(index, newText)} // Pass editTodo to TodoItem
        />
      ))}
    </div>
  );
}

export default TodoList;

