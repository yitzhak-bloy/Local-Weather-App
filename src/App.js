import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import ShowingWeather from './ShowingWeather'
import useGeolocation from 'react-hook-geolocation';
import './App.css';

const App = () => {

  const geolocation = useGeolocation()

  const [viewTheWeather, setViewTheWeather] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    setLatitude(geolocation.latitude)
  },[geolocation])

  useEffect(() => {
    setLongitude(geolocation.longitude)
  },[geolocation])


  const handleClick = () => {
    setViewTheWeather(true);
  }

  console.log(latitude, 'sdf')
  console.log(geolocation)


  return (
    <div className="App">
      <h1>Weather app</h1>
      <h3>Know what the weather is!</h3>
      <p>Do you want to know what the weather is?</p>
      {  
        viewTheWeather ? <ShowingWeather latitude={latitude} longitude={longitude} />: <button onClick={handleClick} >is!</button>
      }
    </div>
  );
}

export default App;
