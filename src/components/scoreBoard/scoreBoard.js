import React from 'react';
import PropTypes from 'prop-types';

const ScoreBoard = ({players}) => {
  const playerList = [];

  players.forEach((player, index) => {
    playerList.push(<span key={index}>{player.name}</span>);
  });

  return (<>{playerList}</>);
};

export default ScoreBoard;

ScoreBoard.propTypes = {
  players: PropTypes.array,
};
