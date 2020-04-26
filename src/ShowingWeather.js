import React, { useState, useEffect } from 'react';
import useGeolocation from 'react-hook-geolocation';

const ShowingWeather = () => {
  const geolocation = useGeolocation()
  const latitude = geolocation.latitude;
  const longitude = geolocation.longitude;

  const [api, setApi] = useState('');

  useEffect(() => {
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}lon=${longitude}`)
    .then(response => response.json())
    .then((user) =>{
      console.log(user)  
      setApi(user)
    })
  }, [])

    // console.log(geolocation.latitude, 'latitude')

  return (
    <div>
      <h1>cold</h1>
      <p>{api.name}</p>
      <p>{geolocation.latitude}</p>
      <p>{geolocation.longitude}</p>
    </div>
  )
}

export default ShowingWeather