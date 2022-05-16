import React from 'react';

const PlayerInput = () => {
  function createPlayer() {
    const name = document.getElementById('playerName').value;
    fetch(`https://api.ploinky.de/player?name=${name}`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
    });
  };

  return (
    <div>
      <input id='playerName' type="text"/>
      <button onClick={createPlayer}>Create player</button>
    </div>
  );
};

export default PlayerInput;
