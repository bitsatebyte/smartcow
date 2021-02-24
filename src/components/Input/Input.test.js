import React from 'react';
import { render } from '@testing-library/react';


import BoxContainer from '../BoxContainer/BoxContainer';

it("Renders without crashing", () => {
  const { getByRole } = render(<BoxContainer />);
  expect(getByRole('textbox', { name: /box-input/i })).toBeInTheDocument();
});