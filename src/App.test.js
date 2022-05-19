import {render} from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import App from './App';


beforeEach(() => {
  fetch.resetMocks();
});

test('App is rendered without error', () => {
  fetch.mockResponseOnce(JSON.stringify([]));

  render(<App/>);
});
