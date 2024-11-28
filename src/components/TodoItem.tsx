import React, { useState } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// Type definition for the props used in TodoText
type TodoTextProps = {
  completed: boolean;
};

// Styled component for the container
const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: row;
  }
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
// Define a styled component for the todo text
const TodoText = styled.span<{ completed: boolean }>`
  flex-grow: 1;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

type TodoItemProps = {
  todo: { id: number; text: string; completed: boolean };
  toggleComplete: () => void;
  onDelete: () => void;
  onEdit: () => void;
};

const Checkbox = styled.input`
  margin-right: 10px;
  width: 20px;
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
    <TodoContainer>
      <Checkbox
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
          style={{ marginRight: "10px" }}
        />
      ) : (
        <TodoText completed={todo.completed}>{todo.text}</TodoText>
      )}
      {isEditing ? (
        <Button onClick={handleSave} style={{ marginRight: "10px" }}>
          Save
        </Button>
      ) : (
        <>
          <EditIcon
            onClick={handleEdit}
            style={{ cursor: "pointer", marginRight: "10px", color: "#007bff" }}
          />
          <DeleteIcon
            onClick={deleteTodo}
            style={{ cursor: "pointer", color: "red" }}
          />
        </>
      )}
    </TodoContainer>
  );
}

export default TodoItem;
