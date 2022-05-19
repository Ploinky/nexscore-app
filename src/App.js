import React from 'react';
import ScoreBoard from './components/scoreBoard/scoreBoard';
import PlayerInput from './components/playerInput/playerInput';
import styles from './App.module.scss';
import {useEffect, useState} from 'react';

function App() {
  const [data, setData] = useState({players: [], isLoaded: false});
  const [error, setError] = useState('');

  function onPlayerAdd(name) {
    fetch(`https://api.ploinky.de/player?name=${name}`, {
      method: 'post',
    })
        .then(function(res) {
          if (res.status != 200) {
            res.json().then(function(json) {
              setError('Encountered an error while trying to add a player: ' + json.message + '.');
            });
          } else {
            setError('');
            fetchData();
          }
        });
    document.getElementById('playerName').value = '';
  };

  function fetchData() {
    fetch('https://api.ploinky.de/players')
        .then((response) => response.json())
        .then((data) => {
          setData({players: data, isLoaded: true});
        });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <ScoreBoard data={data}/>
      <PlayerInput onPlayerAdd={onPlayerAdd} error={error}/>
    </main>
  );
}

export default App;
