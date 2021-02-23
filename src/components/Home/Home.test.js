import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Home from './Home';

it("Renders without crashing", () => {
  const elem = document.createElement('div');
  ReactDOM.render(<Home />, elem);
});

it("Renders Navigation Bar/TopBar", () => {
  render(<Home />);
  const linkElement = screen.getByText(/home/i);
  const secondLinkElement = screen.getByText(/carousel/i);
  expect(linkElement).toBeInTheDocument();
  expect(secondLinkElement).toBeInTheDocument();
});