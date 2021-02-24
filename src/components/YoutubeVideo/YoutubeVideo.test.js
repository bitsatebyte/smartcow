import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import YoutubeVideo from './YoutubeVideo';


it("Renders iframe element without crashing", () => {
  const elem = document.createElement('div');
  ReactDOM.render(<YoutubeVideo />, elem);
});

it("Renders a youtube video", () => {
  const { getByTestId } = render(<YoutubeVideo />);
  expect(getByTestId('yt-video')).toBeInTheDocument();
});