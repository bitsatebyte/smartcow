import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

it("Renders without crashing", () => {
  const elem = document.createElement('div');
  ReactDOM.render(<App />, elem);
});

it("Renders Navigation Bar/TopBar", () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  const secondLinkElement = screen.getByText(/carousel/i);
  expect(linkElement).toBeInTheDocument();
  expect(secondLinkElement).toBeInTheDocument();
});