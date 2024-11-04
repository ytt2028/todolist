import React, { useState } from 'react';
import styled from 'styled-components';

// Styled component for the container
const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Styled component for the text
const TodoText = styled.span`
  flex-grow: 1;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  margin-left: 10px;
`;

// Styled component for the button
const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleSave = () => {
      editTodo(editedText); 
      setIsEditing(false);
    };
  
    return (
      <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onBlur={handleSave}
          />
        ) : (
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
        )}
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={deleteTodo}>Delete</button>
      </div>
    );
  }
  
  export default TodoItem;
  


