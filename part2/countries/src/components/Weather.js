import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Weather = (props) => {
  const [weatherTown, setWeatherTown] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY
  
  const cityName = props.town;
  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  useEffect(() => {
    axios.get(urlWeather).then((res) => setWeatherTown(res.data));
  }, [cityName]);

  //convert kelvin to celsius
  const kelvinToCelsius = (kelvin) => {
    const celsius = kelvin - 273.15;
    return celsius;
  };
  // Check if weatherTown data is available before rendering
  if (weatherTown) {
      const temperatureInKelvin = weatherTown.main.temp;
      const temperatureInCelsius = kelvinToCelsius(temperatureInKelvin);
      const icona = weatherTown.weather[0].icon
      const imgWeather = `https://openweathermap.org/img/wn/${icona}@2x.png`
      return (
          <div>
        <h4>Weather in {cityName}</h4>
        <p>Temperature: {temperatureInCelsius.toFixed(2)} Celsius</p>
        <img
        src={imgWeather}
        alt="weather icon"
        width="100px"
      />
        <p>Wind: {weatherTown.wind.speed} m/s</p>
      </div>
    );
  } else {
    // Display a loading state or other content while data is being fetched
    return <p>Loading...</p>;
  }
};

export default Weather;
