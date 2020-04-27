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
      <p>{latitude}</p>
      <p>{longitude}</p>
      {/* <p>{api}</p> */}
    </div>
  )
}

export default ShowingWeather