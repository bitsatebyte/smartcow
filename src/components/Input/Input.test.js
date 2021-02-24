import React from 'react';
import { render } from '@testing-library/react';


import BoxContainer from '../BoxContainer/BoxContainer';
import Input from '../Input/Input';

it("Renders without crashing", () => {
  const { getByTestId } = render(<BoxContainer>
    <Input />
  </BoxContainer>);

  expect(getByTestId('box-input')).toBeInTheDocument();
});