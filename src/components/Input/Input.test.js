import React from 'react';
import { render } from '@testing-library/react';
import CardContext from '../BoxContainer/CardContext';


import BoxContainer from '../BoxContainer/BoxContainer';
import Input from '../Input/Input';

it("renders without crashing", () => {
  const { getByTestId } = render(<BoxContainer>
    <Input />
  </BoxContainer>);

  expect(getByTestId('box-input')).toBeInTheDocument();
});