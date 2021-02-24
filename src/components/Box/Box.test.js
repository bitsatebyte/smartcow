import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';

import BoxContainer from '../BoxContainer/BoxContainer';

it("Renders without crashing", () => {
  const { getByRole } = render(<BoxContainer />);
  expect(getByRole('list', { name: /boxes/i, })).toBeInTheDocument();
});

it("Renders 5 boxes", () => {
  const { getByRole } = render(<BoxContainer />);
  fireEvent.change(getByRole('textbox', { name: /box-input/i }), { target: { value: 'hello' } });
  const { getAllByRole } = within(getByRole('list', { name: /boxes/i }));
  const items = getAllByRole('listitem');
  expect(items.length).toBe(5);
});

it("Tests rendered text in boxes", () => {
  const { getByRole } = render(<BoxContainer />);
  fireEvent.change(getByRole('textbox', { name: /box-input/i }), { target: { value: 'smartcow' } });
  const { getAllByRole } = within(getByRole('list', { name: /boxes/i, }));
  const items = getAllByRole('listitem');
  const formedString = items.map(item => item.textContent);
  expect(formedString).toMatchInlineSnapshot(`
    Array [
      "s",
      "m",
      "a",
      "r",
      "t",
      "c",
      "o",
      "w",
    ]
  `);
});