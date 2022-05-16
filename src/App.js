import './App.css';
import React from 'react';
import ScoreBoard from './components/scoreBoard/scoreBoard';
import PlayerInput from './components/playerInput/playerInput';

function App() {
  return (
    <div>
      <ScoreBoard/>
      <PlayerInput/>
    </div>
  );
}

export default App;
