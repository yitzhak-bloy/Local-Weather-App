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
      <p>{api.name}</p>
      {
        api.main ? 
        <div>
          <p>מדינה: {api.sys.country}</p>
          <p>{api.main.weather}</p>
          <img src={api.weather[0].icon} alt="איקון מזג אוויר" height="150" width="150" />
          <p>{api.main.temp} :טמפרטורה כעת</p>
          <p>{api.main.temp_max} :טמפרטורה מקסימלית</p>
          <p>{api.main.temp_min} :טמפרטורה מינימלית</p>
          <p>{api.main.feels_like} :מרגיש כמו</p>
          <p>{api.weather[0].description}</p>
        </div>
        : 
        <p>...המתן בסבלנות, אנו מעבדים את הנתונים</p> 
      }
    </div>
  )
}

export default ShowingWeather