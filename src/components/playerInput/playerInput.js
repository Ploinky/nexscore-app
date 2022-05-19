import React from 'react';
import styles from './playerInput.module.scss';
import PropTypes from 'prop-types';

const PlayerInput = ({error, onPlayerAdd}) => {
  function createPlayer() {
    onPlayerAdd(document.getElementById('playerName').value);
  };

  return (
    <div className={styles.playerInputContainer}>
      <div>
        <input id='playerName' type="text"/>
        <button data-testid='button' onClick={createPlayer}>Create player</button>
      </div>
      {error ? <span className={styles.error}>{error}</span> : ''}
    </div>
  );
};

export default PlayerInput;

PlayerInput.propTypes = {
  error: PropTypes.string,
  onPlayerAdd: PropTypes.func,
};
