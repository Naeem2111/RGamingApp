import React, { useState } from 'react';
import Select from 'react-select';

const hourOptions = Array.from({ length: 24 }, (_, hour) => ({
  value: hour,
  label: `${hour}:00`,
}));

const Player = ({ name, gamertag }) => {
  const [availability, setAvailability] = useState({
    friday: [],
    saturday: [],
  });

  const handleChange = (day, selectedOptions) => {
    setAvailability(prev => ({
      ...prev,
      [day]: selectedOptions,
    }));
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Gamertag: {gamertag}</p>
      <div>
        <h4>Friday</h4>
        <Select
          isMulti
          options={hourOptions}
          value={availability.friday}
          onChange={(selectedOptions) => handleChange('friday', selectedOptions)}
        />
      </div>
      <div>
        <h4>Saturday</h4>
        <Select
          isMulti
          options={hourOptions}
          value={availability.saturday}
          onChange={(selectedOptions) => handleChange('saturday', selectedOptions)}
        />
      </div>
    </div>
  );
};

export default Player;
