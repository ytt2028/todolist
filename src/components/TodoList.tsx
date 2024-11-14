import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';



// Styled component for the list container
const ListContainer = styled.div`
  padding: 20px;
  background-color: #e0f7fa;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

function TodoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div>
      <b>Tasks</b>
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

