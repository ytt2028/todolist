import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';



// Styled component for the list container
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Space between tasks */
`;

// Styled header for the "Current tasks" section
const SectionHeader = styled.h2`
  font-size: 1.5em;
  color: black;
  margin-bottom: 15px;
`;

type TodoListProps = {
  todos: { id: number; text: string; completed: boolean }[];
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
  editTodo: (index: number, newText: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div>
      <SectionHeader>Current tasks</SectionHeader>
      <ListContainer>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={() => toggleComplete(index)}
            deleteTodo={() => deleteTodo(index)}
            editTodo={(newText) => editTodo(index, newText)}
          />
        ))}
      </ListContainer>
    </div>
  );
};

export default TodoList;

