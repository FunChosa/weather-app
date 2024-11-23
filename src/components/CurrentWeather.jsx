import React from "react";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="current-weather">
      <img
        src={`src/icons/${currentWeather.weatherIcon}.svg`}
        alt="icon weather"
        className="weather-icon"
      />
      <h2 className="temperature">
        {currentWeather.temperature} <span>°C</span>
      </h2>
      <p className="description">{currentWeather.description}</p>
    </div>
  );
};

export default CurrentWeather;
