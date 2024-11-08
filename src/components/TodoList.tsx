import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';



// Styled component for the list container
const ListContainer = styled.div`
  width: 100%;
`;

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

