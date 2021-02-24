import React from 'react';
import ReactDOM from 'react-dom';

import Carousel from './Carousel';

it("Renders the carousel without crashing", () => {
  const elem = document.createElement('div');
  ReactDOM.render(<Carousel />, elem);
});