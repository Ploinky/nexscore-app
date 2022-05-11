import './App.css';
import React from 'react';
import ScoreBoard from './components/scoreBoard/scoreBoard';
import {useState} from 'react';

function App() {
  const [playerList, setPlayers] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  fetch('http://nexscore-env.eba-yxxpis3z.eu-central-1.elasticbeanstalk.com/players')
      .then((response) => response.json())
      .then((d) => {
        setPlayers(d);
        setDataIsLoaded(true);
      },
      );

  if (!dataIsLoaded) {
    return <div><h1> Please wait some time.... </h1> </div>;
  }

  return (
    <ScoreBoard players={playerList}/>
  );
}

export default App;
