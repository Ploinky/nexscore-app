import {render, screen} from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello world!/i);
  expect(linkElement).toBeInTheDocument();
});
