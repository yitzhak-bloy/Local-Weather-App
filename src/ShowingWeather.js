import React, { useState, useEffect } from 'react';

const ShowingWeather = ({ latitude, longitude }) => {
  const [api, setApi] = useState('');
  const [temp, setTemp] = useState('');
  const [temp_max, setTemp_max] = useState('');
  const [temp_min, setTemp_min] = useState('');
  const [feels_like, setFeels_like] = useState('');
  const [scale, setScale] = useState('Celsius');

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`)
    .then(response => response.json())
    .then((resJson) =>{
      console.log(resJson, 'resJson')  
      setApi(resJson)
      setTemp(resJson.main.temp)
      setTemp_max(resJson.main.temp_max)
      setTemp_min(resJson.main.temp_min)
      setFeels_like(resJson.main.feels_like)
    })
    .catch(err => {
      console.log(err);
    })
  }

  const handleClick = () => {
    if (scale === 'Celsius') {
      setTemp((temp * 1.8 + 32).toFixed(2))
      setTemp_max((temp_max * 1.8 + 32).toFixed(2))
      setTemp_min((temp_min * 1.8 + 32).toFixed(2))
      setFeels_like((feels_like * 1.8 + 32).toFixed(2))
      setScale('Fahrenheit')
    } else {
      setTemp(((temp-32)/1.8).toFixed(2))
      setTemp_max(((temp_max-32)/1.8).toFixed(2))
      setTemp_min(((temp_min-32)/1.8).toFixed(2))
      setFeels_like(((feels_like-32)/1.8).toFixed(2))
      setScale('Celsius')
    }
  }

  return (
    <div>
      {
        api.main ? 
        <div>
          <p>{api.sys.country}, {api.name}  :אנו מזהים שאתה נמצא ב</p>
          <img src={api.weather[0].icon} alt="איקון מזג אוויר" height="150" width="150" />
          <p>{temp} :טמפרטורה כעת</p>
          <p>{temp_max} :טמפרטורה מקסימלית</p>
          <p>{temp_min} :טמפרטורה מינימלית</p>
          <p>{feels_like} :מרגיש כמו</p>
          {
            scale === 'Celsius' ?
            <button onClick={handleClick} >אני רוצה בפרנהייט</button>
            :
            <button onClick={handleClick} >אני רוצה בצלזיוס</button>
          }
        </div>
        : 
        <p>...המתן בסבלנות, אנו מעבדים את הנתונים</p> 
      }
    </div>
  )
}

export default ShowingWeather