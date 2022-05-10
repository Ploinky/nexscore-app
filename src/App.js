import './App.css';
import React from 'react';
import ScoreBoard from './components/scoreBoard/scoreBoard';

function App() {
  let players = [];

  fetch('http://nexscore-env.eba-yxxpis3z.eu-central-1.elasticbeanstalk.com/players')
      .then((data) => players = data);

  return (
    <ScoreBoard players={players}/>
  );
}

export default App;
