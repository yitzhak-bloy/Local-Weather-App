import React, { useState, useEffect } from 'react';
import ShowingWeather from './ShowingWeather'
import useGeolocation from 'react-hook-geolocation';
import './App.css';

const App = () => {

  const geolocation = useGeolocation()
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    setLatitude(geolocation.latitude)
  },[geolocation])

  useEffect(() => {
    setLongitude(geolocation.longitude)
  },[geolocation])

  return (
    <div className="App">
      <h1>מזג אוויר</h1>
      <h3>!לדעת מה מזג האוויר ברגע זה</h3>
      { 
        latitude ?
        <ShowingWeather latitude={latitude} longitude={longitude} /> 
        :
        <p>.המתן בסבלנות, אנו מעבדים את הנתונים</p> 
      }
    </div>
  );
}

export default App;