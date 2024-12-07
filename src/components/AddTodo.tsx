import React, { useState } from "react";
import styled from "styled-components";
import {ERROR_MESSAGE, MAX_LENGTH_ITEM_NAME} from "./error"
// Styled container for the form
const FormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 350px;
  position: relative;
`;

// Styled component for the form title
const Title = styled.h2`
  font-size: 24px;
  color: black;
  text-align: left;
  font-weight: bold;
  margin-bottom: 10px;
`;

// Styled component for the input field
const Input = styled.input`
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 90%;
  font-size: 16px;
`;

// Styled component for the button
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #00bcd4;
  color: white;
  font-size: 16px;
  cursor: pointer;
  height: fit-content;

  &:hover {
    background-color: #0097a7;
  }
`;
// Styled error message
const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: 5px 0 15px 0;
`;
// Styled component for the input label
const Label = styled.label`
  font-size: 16px;
  color: black;
  margin-bottom: 8px;
  display: block;
  text-align: left;
`;
// Styled component for the button container
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState(ERROR_MESSAGE);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) {
      setError("Todo name is required");
      return;
    }
    if (newTodo.length > MAX_LENGTH_ITEM_NAME) {
      setError(ERROR_MESSAGE);
      return;
    }
    addTodo({ text: newTodo, completed: false });
    setNewTodo("");
    setError("");
  };

  return (
    <>
    <Title>New task</Title>
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="taskName">Task name</Label>
        <Input
          id="taskName"
          type="text"
          placeholder=""
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <ButtonContainer>{error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonContainer>
          <Button type="submit">Add</Button>
        </ButtonContainer>
        </ButtonContainer>
      </form>
    </FormContainer>
  </>
  );
};

export default AddTodo;
