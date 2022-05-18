import {render, screen, waitFor} from '@testing-library/react';
import React from 'react';
import App from './App';
import ScoreBoard from './components/scoreBoard/scoreBoard';

beforeEach(() => {
  fetch.resetMocks();
});

test('App is rendered without error', () => {
  fetch.mockResponseOnce(JSON.stringify([]));

  render(<App/>);
});

test('scoreboard', async () => {
  const data = {players: [{puuid: '123', name: 'playername'},
    {puuid: '321', name: 'nameplayer2'}], isLoaded: true};

  render(<ScoreBoard data={data}/>);

  await waitFor(() => screen.getByText('playername'));

  const playername = screen.getByText(/playername/i);
  expect(playername).toBeInTheDocument();
  const nameplayer2 = screen.getByText(/nameplayer2/i);
  expect(nameplayer2).toBeInTheDocument();
});
