import React, { useState } from 'react';
import axios from 'axios';

const CreatePlayerProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    gamertag: '',
    picture: '',
    teamName: '',
    whatsappNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/players', formData);
      alert('Player profile created successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="gamertag"
        value={formData.gamertag}
        onChange={handleChange}
        placeholder="Gamertag"
      />
      <input
        type="text"
        name="picture"
        value={formData.picture}
        onChange={handleChange}
        placeholder="Picture URL"
      />
      <input
        type="text"
        name="teamName"
        value={formData.teamName}
        onChange={handleChange}
        placeholder="Team Name"
      />
      <input
        type="text"
        name="whatsappNumber"
        value={formData.whatsappNumber}
        onChange={handleChange}
        placeholder="WhatsApp Number"
      />
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default CreatePlayerProfile;
