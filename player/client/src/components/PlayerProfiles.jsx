import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlayerProfile from './PlayerProfile';

const PlayerProfiles = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await axios.get('/api/players');
      setPlayers(response.data);
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      {players.map((player, index) => (
        <PlayerProfile key={index} player={player} />
      ))}
    </div>
  );
};

export default PlayerProfiles;
