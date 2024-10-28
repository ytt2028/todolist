import React, { useState } from 'react';

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
  


