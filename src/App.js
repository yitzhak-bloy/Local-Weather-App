import React, { useState } from 'react';
// import logo from './logo.svg';
import ShowingWeather from './ShowingWeather'
import './App.css';

const App = () => {
  
  const [viewTheWeather, setViewTheWeather] = useState(false);

  const handleClick = () => {
    setViewTheWeather(true);
  }

  return (
    <div className="App">
      <h1>Weather app</h1>
      <h3>Know what the weather is!</h3>
      <p>Do you want to know what the weather is?</p>
      {  
        viewTheWeather ? <ShowingWeather  />: <button onClick={handleClick} >is!</button>
      }
    </div>
  );
}

export default App;
