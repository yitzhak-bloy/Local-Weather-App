import React, { useState } from 'react';

const ShowingWeather = () => {

  const [api, setApi] = useState('');

    fetch('https://fcc-weather-api.glitch.me/api/current?lat=31.893429&lon=34.813946')
        .then(response => response.json())
        .then((user) =>{
          //  console.log(user)  
           setApi(user)
          })

    return (
        <div>
            <h1>cold</h1>
            <p>{api.name}</p>
        </div>
    )
}

export default ShowingWeather