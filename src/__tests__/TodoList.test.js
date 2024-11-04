//Test the entire list for adding/removing items and marking items as done
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

const mockTodos = [
  { text: 'Learn React', completed: false },
  { text: 'Learn Jest', completed: false },
];

test('toggles the completion status of a todo item', () => {
  const toggleComplete = jest.fn();
  render(<TodoList todos={mockTodos} toggleComplete={toggleComplete} deleteTodo={() => {}} editTodo={() => {}} />);

  // Click the checkbox for the first item
  const checkbox = screen.getAllByRole('checkbox')[0];
  fireEvent.click(checkbox);

  // Assert that toggleComplete function was called with correct index
  expect(toggleComplete).toHaveBeenCalledWith(0);
});

test('deletes a todo item', () => {
  const deleteTodo = jest.fn();
  render(<TodoList todos={mockTodos} toggleComplete={() => {}} deleteTodo={deleteTodo} editTodo={() => {}} />);

  // Click delete button for the second item
  const deleteButton = screen.getAllByRole('button', { name: /Delete/i })[1];
  fireEvent.click(deleteButton);

  // Assert that deleteTodo function was called with correct index
  expect(deleteTodo).toHaveBeenCalledWith(1);
});
