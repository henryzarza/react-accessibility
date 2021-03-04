import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import Login from './index';

describe('Login screen', () => {
  it.todo('should not have any a11y violations');

  it('renders well', () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    expect(screen.getByRole('heading', { name: /Batman characters/i })).toBeInTheDocument();
  });

  it('shows form errors', async () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const submitButton = screen.getByRole("button", { name: 'Log In' });
    expect(submitButton).toBeInTheDocument();
    userEvent.click(submitButton);
    const errorMsg = await screen.findAllByText(/This field is required/i);
    expect(errorMsg).toHaveLength(2);
  });

  it('should send the data and show loading', async () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const submitButton = screen.getByRole("button", { name: 'Log In' });
    const emailField = screen.getByRole("textbox", { name: /Email/i });
    const passField = screen.getByLabelText(/password/i);
    expect(emailField).toBeInTheDocument();
    expect(passField).toBeInTheDocument();
    userEvent.type(emailField, "email@example.com");
    userEvent.type(passField, "Qwerty1234");
    userEvent.click(submitButton);
    expect(await screen.findByLabelText(/loading/i)).toBeInTheDocument();
  });
});
