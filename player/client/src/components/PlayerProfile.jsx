import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './styles/PlayerProfile.css';

const PlayerProfile = ({ player }) => {
  const { name, gamertag, picture, teamName, whatsappNumber } = player;

  const handleWhatsappClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="player-profile">
      <img src={picture} alt={`${name}'s profile`} className="player-picture" />
      <h2>{name}</h2>
      <p>Gamertag: {gamertag}</p>
      <p>Team: {teamName}</p>
      <button onClick={handleWhatsappClick} className="whatsapp-button">
        <FaWhatsapp /> Contact on WhatsApp
      </button>
    </div>
  );
};

export default PlayerProfile;
