import React from 'react';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

const ScoreBoard = ({players}) => {
  const [data, setData] = useState({players: [], isLoaded: false});

  useEffect(() => {
    fetch('https://api.ploinky.de/players')
        .then((response) => response.json())
        .then((data) => {
          setData({players: data, isLoaded: true});
        });
  }, []);

  const playerList = [];

  data.players?.forEach((player, index) => {
    playerList.push(<li key={index}>{player.name}</li>);
  });

  if (!data.isLoaded) {
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
  players: PropTypes.array,
};
