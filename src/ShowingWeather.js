import React, { useState, useEffect } from 'react';

const ShowingWeather = ({ latitude, longitude }) => {

  const [api, setApi] = useState('');

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`)
    .then(response => response.json())
    .then((resJson) =>{
      console.log(resJson, 'resJson')  
      setApi(resJson)
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      <h1>cold</h1>
      <p>{api.name}</p>
      <p>רוחב{latitude}</p>
      <p>אורך{longitude}</p>
      {
        api.main ? 
        <div>
          <p>מדינה: {api.sys.country}</p>
          <p>{api.main.weather}</p>
          <p>temp: {api.main.temp}</p>
          <p>temp_max: {api.main.temp_max}</p>
          <p>temp_min: {api.main.temp_min}</p>
          <p>feels_like: {api.main.feels_like}</p>
        </div>
         : 
        <p>המתן בסבלנות</p> }
    </div>
  )
}

export default ShowingWeather