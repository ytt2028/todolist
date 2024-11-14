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

function AddTodo({ addTodo }: AddTodoProps) {
  const [newTodo, setNewTodo] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    addTodo({ text: newTodo, completed: false });
    setNewTodo('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Add a new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </Form>
  );
}

export default AddTodo;
