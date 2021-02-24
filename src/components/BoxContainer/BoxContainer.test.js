import { render, screen } from '@testing-library/react';

import BoxContainer from './BoxContainer';

it("Renders Box Container without crashing", () => {
  render(<BoxContainer />);
  const inputElem = screen.getByRole('textbox', { name: /box-input/i })
  expect(inputElem).toBeInTheDocument();
});