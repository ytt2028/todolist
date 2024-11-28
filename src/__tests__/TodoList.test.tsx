// src/__tests__/TodoList.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

const todos = [
  { id: 1, text: 'Sample Task 1', completed: false },
  { id: 2, text: 'Sample Task 2', completed: true },
];

describe('TodoList Component', () => {
  test('renders list of todos', () => {
    render(<TodoList todos={todos} toggleComplete={() => {}} deleteTodo={() => {}} editTodo={() => {}} />);

    expect(screen.getByText(/sample task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/sample task 2/i)).toBeInTheDocument();
  });
});
