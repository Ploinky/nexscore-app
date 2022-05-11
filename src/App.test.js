import {render, screen, waitFor} from '@testing-library/react';
import React from 'react';
import ScoreBoard from './components/scoreBoard/scoreBoard';

beforeEach(() => {
  fetch.resetMocks();
});

test('scoreboard', async () => {
  fetch.mockResponseOnce(JSON.stringify([{ puuid: '123', name: 'playername' },
    {puuid: '321', name: 'nameplayer2'}]));

  render(<ScoreBoard/>);

  await waitFor(() => screen.getByText('playername'));

  const playername = screen.getByText(/playername/i);
  expect(playername).toBeInTheDocument();
  const nameplayer2 = screen.getByText(/nameplayer2/i);
  expect(nameplayer2).toBeInTheDocument();
});