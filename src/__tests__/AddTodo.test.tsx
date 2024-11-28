// src/__tests__/AddTodo.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from '../components/AddTodo';

describe('AddTodo Component', () => {
  test('adds a new item successfully', () => {
    const addTodo = jest.fn();
    render(<AddTodo addTodo={addTodo} />);

    const input = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(addTodo).toHaveBeenCalledWith({ text: 'New Task', completed: false });
    expect(addTodo).toHaveBeenCalledTimes(1);
  });
});
