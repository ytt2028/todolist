// src/__tests__/TodoItem.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

const mockTodo = { id: 1, text: 'Learn React', completed: false };

describe('TodoItem Component', () => {
  test('renders todo item', () => {
    render(<TodoItem todo={mockTodo} toggleComplete={() => {}} deleteTodo={() => {}} editTodo={() => {}} />);
    const todoElement = screen.getByText(/learn react/i);
    expect(todoElement).toBeInTheDocument();
  });

  test('marks an item as done', () => {
    const toggleComplete = jest.fn();
    render(<TodoItem todo={mockTodo} toggleComplete={toggleComplete} deleteTodo={() => {}} editTodo={() => {}} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(toggleComplete).toHaveBeenCalledTimes(1);
  });

  test('removes an item successfully', () => {
    const deleteTodo = jest.fn();
    render(<TodoItem todo={mockTodo} deleteTodo={deleteTodo} toggleComplete={() => {}} editTodo={() => {}} />);

    const deleteButton = screen.getByTestId('delete-icon'); // Ensure the icon has data-testid="delete-icon"
    fireEvent.click(deleteButton);

    expect(deleteTodo).toHaveBeenCalledTimes(1);
  });

  test('updates item name', () => {
    const editTodo = jest.fn();
    render(<TodoItem todo={mockTodo} editTodo={editTodo} deleteTodo={() => {}} toggleComplete={() => {}} />);

    const editButton = screen.getByTestId('edit-icon'); // Ensure the icon has data-testid="edit-icon"
    fireEvent.click(editButton);

    expect(editTodo).toHaveBeenCalledTimes(1);
  });
});
