import React from 'react';
import './assets/App.css';
import PlayerList from './components/PlayerList.js';

function App() {
  return (
    <div className="App">
      <h1>Player Availability</h1>
      <PlayerList />
    </div>
  );
}

export default App;
