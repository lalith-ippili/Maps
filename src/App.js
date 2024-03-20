import React, { useState } from 'react';
import './App.css';

function App() {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');

  const handleGoButtonClick = () => {
    if (startLocation.trim() !== '' && endLocation.trim() !== '') {
      const url = `https://www.google.com/maps/dir/${startLocation}/${endLocation}/`;
      window.open(url, '_blank');
    } else {
      alert('Please enter both start and end locations.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter starting location"
        value={startLocation}
        onChange={(e) => setStartLocation(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter ending location"
        value={endLocation}
        onChange={(e) => setEndLocation(e.target.value)}
      />
      <br />
      <button onClick={handleGoButtonClick}>Go</button>
    </div>
  );
}

export default App;
