import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '.';

test('renders login well', () => {
  render(<Login />);
  expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
});
