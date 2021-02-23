import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

it("Renders without crashing", () => {
  const elem = document.createElement('div');
  ReactDOM.render(<App />, elem);
})