import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './index';
import { CHARACTERS } from './constants';

describe('Home screen', () => {
  it.todo('should not have any a11y violations');

  it('Navbar and Footer render well', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Batman Characters/i })).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText(/Made with/i).closest("span")).toBeInTheDocument();
  });

  it('renders cards', async () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const seeMoreBtn = screen.getAllByRole("button", { name: /see more/i });
    expect(seeMoreBtn).toHaveLength(CHARACTERS.length);
    const { title, subtitle, description } = CHARACTERS[0];
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: title })).toBeInTheDocument();
  });
});
