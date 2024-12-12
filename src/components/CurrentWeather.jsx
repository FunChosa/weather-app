import React from "react";

const CurrentWeather = ({ currentWeather }) => {
  const image = `src/icons/${currentWeather.weatherIcon}.svg`;
  return (
    <div className="current-weather">
      <img src={image} alt="icon weather" className="weather-icon" />
      <h2 className="temperature">
        {currentWeather.temperature} <span>°C</span>
      </h2>
      <p className="description">{currentWeather.description}</p>
    </div>
  );
};

export default CurrentWeather;
