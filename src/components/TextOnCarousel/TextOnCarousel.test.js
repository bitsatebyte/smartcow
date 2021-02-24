import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import TextOnCarousel from './TextOnCarousel';


it("Renders text without crashing", () => {
  const elem = document.createElement('div');
  ReactDOM.render(<TextOnCarousel />, elem);
});

it("Renders the header element", () => {
  const { getByRole } = render(<TextOnCarousel />);
  expect(getByRole('heading')).toBeInTheDocument();
});