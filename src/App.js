import React from 'react';
import ScoreBoard from './components/scoreBoard/scoreBoard';
import PlayerInput from './components/playerInput/playerInput';
import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.main}>
      <ScoreBoard/>
      <PlayerInput/>
    </main>
  );
}

export default App;
