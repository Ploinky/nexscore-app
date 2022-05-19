import React from 'react';
import PropTypes from 'prop-types';

const ScoreBoard = ({data}) => {
  const playerList = [];

  data.players?.forEach((player, index) => {
    playerList.push(<li key={index}>{player.name}</li>);
  });

  if (!data?.isLoaded) {
    return <div><h1> Please wait some time.... </h1> </div>;
  }

  return (
    <div>
      <ul>{playerList}</ul>
    </div>
  );
};

export default ScoreBoard;

ScoreBoard.propTypes = {
  data: PropTypes.object,
};
