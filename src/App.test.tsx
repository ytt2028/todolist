import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders Todo App header', () => {
  render(<App />);
  const headerElement = screen.getByText(/todo app/i); // Update to match "Todo App"
  expect(headerElement).toBeInTheDocument();
});
