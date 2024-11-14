import React, { useState } from 'react';
import styled from 'styled-components';
// Styled container for the form
const FormContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
`;

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
  width: 150%;
`;

// Styled component for the button
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #00bcd4;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0097a7;
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
      setError('Please enter a name Maximum 10 characters');
      return;
    }
    addTodo({text: newTodo, completed: false }); 
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
