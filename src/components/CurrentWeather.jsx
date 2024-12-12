import React from "react";
import clear from "../icons/clear.svg";
import clouds from "../icons/clouds.svg";
import mist from "../icons/mist.svg";
import moderate_heavy_rain from "../icons/moderate_heavy_rain.svg";
import rain from "../icons/rain.svg";
import snow from "../icons/snow.svg";
import thunder_rain from "../icons/thunder_rain.svg";
import thunder from "../icons/thunder.svg";

const CurrentWeather = ({ currentWeather }) => {
  const weatherIcons = {
    clear,
    clouds,
    mist,
    moderate_heavy_rain,
    rain,
    snow,
    thunder,
    thunder_rain,
  };

  return (
    <div className="current-weather">
      <img
        src={weatherIcons[currentWeather.weatherIcon]}
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
