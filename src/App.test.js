import {render, screen, waitFor} from '@testing-library/react';
import React from 'react';
import ScoreBoard from './components/scoreBoard/scoreBoard';

beforeEach(() => {
  fetch.resetMocks();
});

test('scoreboard', async () => {
  fetch.mockResponseOnce(JSON.stringify([{ puuid: '123', name: 'playername' }]));

  render(<ScoreBoard/>);

  await waitFor(() => screen.getByText('playername'));

  const linkElement = screen.getByText(/playername/i);
  expect(linkElement).toBeInTheDocument();
});