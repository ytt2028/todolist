// App.tsx
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

// Global styles for the body
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #90caf9; /* Deeper blue */
    margin: 0;
    padding: 0;
  }
`;

// Styled component for the header
const Header = styled.header`
  background-color: #0288d1; /* Deeper blue for header */
  color: white;
  padding: 20px;
  font-size: 1.5em;
  font-weight: bold;
  text-align: left;
  font-style: italic;
`;

// Main app container
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  gap: 260px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 0px 200px;
  }
`;
//Styled container for the "New Task" section
const NewTaskContainer = styled.div`
  width: 300px;
`;
//Styled container for the "Current Tasks"section
const CurrentTasksContainer = styled.div`
  flex: 1;
`;
const App: React.FC = () => {
  const [todos, setTodos] = React.useState([
    { id: 1, text: 'task 1', completed: false },
    { id: 2, text: 'task 2', completed: false },
  ]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), ...newTodo }]);
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <GlobalStyle />
      <Header>Todo App</Header>
      <AppContainer>
        <div>
          <AddTodo addTodo={addTodo} />
        </div>
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
      </AppContainer>
    </>
  );
};

export default App;
