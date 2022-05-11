import {render, screen} from '@testing-library/react';
import App from './App';
import React from 'react';
import nock from 'nock';

test('renders without crashing', () => {
  const scope = nock('http://nexscore-env.eba-yxxpis3z.eu-central-1.elasticbeanstalk.com')
  .get('/players')
  .reply(200, {
    players: [{ puuid: 1, name: 'playername' }]
  }, {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
  });


  render(<App />);
  const linkElement = screen.getByText(/playername/i);
  expect(linkElement).toBeInTheDocument();
});