import React, { useState } from 'react';
import styled from 'styled-components';
// Styled component for the form
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

// Styled component for the input field
const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80%;
`;

// Styled component for the button
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

// Define the type for a Todo item
type Todo = {
  text: string;
  completed: boolean;
};

// Define the props type for AddTodo component
type AddTodoProps = {
  addTodo: (newTodo: Todo) => void;
};

const AddTodo: React.FC<AddTodoProps> = ({ addTodo  }) => {
  const [newTodo, setNewTodo] = useState(''); 
  const [error, setError] = useState('');
  const handleSubmit = (e) => { 
    e.preventDefault();
    if (!newTodo) {
    setError('Todo name is required');
    return; 
  }
    if (newTodo.length > 10) {
      setError('Todo name cannot be more than 10 characters');
      return;
    }
    addTodo({text: newTodo, completed: true }); 
    setNewTodo(''); 
    setError('');
  };

  return ( <Form onSubmit={handleSubmit}>
  <Input
          type="text"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
  <Button type="submit">Add</Button> 
  {error && <p style={{ color: 'red' }}>{error}</p>}
  </Form> );
  };

export default AddTodo;
