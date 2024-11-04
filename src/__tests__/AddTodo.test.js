//Test for adding a new item
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from '../components/AddTodo';

test('adding a new item successfully', () => {
  const addTodo = jest.fn();
  render(<AddTodo addTodo={addTodo} />);

  // Enter new todo text
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  fireEvent.change(inputElement, { target: { value: 'Learn Jest' } });

  // Click add button
  const addButton = screen.getByRole('button', { name: /Add/i });
  fireEvent.click(addButton);

  // Assert that addTodo function was called with the correct value
  expect(addTodo).toHaveBeenCalledWith({ text: 'Learn Jest', completed: false });
});
