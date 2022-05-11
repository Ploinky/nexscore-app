import React from 'react';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

const ScoreBoard = ({players}) => {
  const [data, setData] = useState({players: [], isLoaded: false});

  useEffect(() => {
    fetch('http://nexscore-env.eba-yxxpis3z.eu-central-1.elasticbeanstalk.com/players')
        .then((response) => response.json())
        .then((data) => {
          setData({players: data, isLoaded: true});
        });
  }, []);
  
  const playerList = [];

  data.players?.forEach((player, index) => {
    playerList.push(<span key={index}>{player.name}</span>);
  });

  if (!data.isLoaded) {
    return <div><h1> Please wait some time.... </h1> </div>;
  }

  return (<>{playerList}</>);
};

export default ScoreBoard;

ScoreBoard.propTypes = {
  players: PropTypes.array,
};
