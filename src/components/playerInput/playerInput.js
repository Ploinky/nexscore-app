import React from 'react';
import {useState} from 'react';
import styles from './playerInput.module.scss';

const PlayerInput = () => {
  const [error, setError] = useState('');

  function createPlayer() {
    const name = document.getElementById('playerName').value;
    fetch(`https://api.ploinky.de/player?name=${name}`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
    })
        .then(function(res) {
          if (res.status != 200) {
            setError('Encountered an error while trying to add a player.');
          } else {
            setError('');
          }
          console.log(res);
        });
    document.getElementById('playerName').value = '';
  };

  return (
    <div className={styles.playerInputContainer}>
      <div>
        <input id='playerName' type="text"/>
        <button onClick={createPlayer}>Create player</button>
      </div>
      {error ? <span className={styles.error}>{error}</span> : ''}
    </div>
  );
};

export default PlayerInput;
