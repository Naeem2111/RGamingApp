import React from 'react';
import Player from './Player';

const playerData = [
  'R - RGAMING23',
  'Dean B - Ghoststriker',
  'Kane The DJ - The Kave',
  'Jigga87 - JIGGAKMKK',
  'Ridah - reddevilcap10',
  'Aslam - Pes Dominator',
  'Allister - R-GAMER-ALLY',
  'Thaabit - The_Master_TP',
  'Humbum - igAidanvanw',
  'Werner - Team O Werner',
  'saany - ogsaany',
  'Riezwaan - Mindofthejoker',
  'Monecia - Stinco',
  'Masood - R-GAMING_MADNESS',
  'Carl Brown - R-Gaming_CB23',
  'Naeem - Naeem2111',
  'Mo_fc - moeyusuf603-moey',
  'GMANHACKER - GBOY-SAMBA-KING',
  'Alex - Alex R-Gaming'
];

const players = playerData.map((player) => {
  const [name, gamertag] = player.split(' - ').map(s => s.trim());
  return { name, gamertag };
});

const PlayerList = () => {
  return (
    <div>
      {players.map((player, index) => (
        <Player key={index} name={player.name} gamertag={player.gamertag} />
      ))}
    </div>
  );
};

export default PlayerList;
