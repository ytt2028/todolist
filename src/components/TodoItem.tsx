import React, { useState } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/DeleteOutline"; // Thin delete icon
import EditIcon from "@mui/icons-material/EditOutlined"; // Thin edit icon

// Styled component for the task container
const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  width: 350px;
`;

// Styled component for the task text
const TaskText = styled.span<{ completed: boolean }>`
  flex-grow: 1;
  margin-left: 10px;
  font-size: 16px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

// Icon container for consistent icon styling
const IconContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    font-size: 1.5em;
  }
`;

// Styled Checkbox
const Checkbox = styled.input`
  margin-right: 10px;
`;

type TodoItemProps = {
  todo: { id: number; text: string; completed: boolean };
  toggleComplete: () => void;
  deleteTodo: () => void;
  editTodo: (newText: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedText.trim()) {
      editTodo(editedText);
      setIsEditing(false);
    }
  };

  return (
    <TaskContainer>
      <Checkbox type="checkbox" checked={todo.completed} onChange={toggleComplete} />
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleSave}
          style={{ flexGrow: 1, fontSize: "16px" }}
        />
      ) : (
        <TaskText completed={todo.completed}>{todo.text}</TaskText>
      )}
      {!isEditing && (
        <IconContainer>
          <EditIcon
            onClick={handleEdit}
            style={{
              color: "#black", // Blue color
              cursor: "pointer",
              marginRight: "10px",
              
            }}
          />
          
          <DeleteIcon
            onClick={deleteTodo}

            style={{
              color: "red", // Red color
              cursor: "pointer",
            }}
            
          />
        </IconContainer>
      )}
    </TaskContainer>
  );
};

export default TodoItem;
