//Test for removing an item, marking an item as done, and updating item name
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

const mockTodo = { text: 'Learn React', completed: false };

test('removes an item successfully', () => {
  const deleteTodo = jest.fn();
  render(<TodoItem todo={mockTodo} deleteTodo={deleteTodo} />);

  // Click delete button
  const deleteButton = screen.getByRole('button', { name: /Delete/i });
  fireEvent.click(deleteButton);

  // Assert that deleteTodo function was called
  expect(deleteTodo).toHaveBeenCalled();
});

test('marks an item as done', () => {
  const toggleComplete = jest.fn();
  render(<TodoItem todo={mockTodo} toggleComplete={toggleComplete} />);

  // Click checkbox to mark as done
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  // Assert that toggleComplete function was called
  expect(toggleComplete).toHaveBeenCalled();
});

test('updates item name', () => {
  const editTodo = jest.fn();
  render(<TodoItem todo={mockTodo} editTodo={editTodo} />);

  // Click edit button
  const editButton = screen.getByRole('button', { name: /Edit/i });
  fireEvent.click(editButton);

  // Update text
  const inputElement = screen.getByDisplayValue('Learn React');
  fireEvent.change(inputElement, { target: { value: 'Learn Jest and React' } });
  fireEvent.blur(inputElement); // Simulate save action

  // Assert that editTodo function was called with the new text
  expect(editTodo).toHaveBeenCalledWith('Learn Jest and React');
});
