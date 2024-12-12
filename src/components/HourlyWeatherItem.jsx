import React from "react";
import { weatherCodes } from "../constants";
import clear from "../icons/clear.svg";
import clouds from "../icons/clouds.svg";
import mist from "../icons/mist.svg";
import moderate_heavy_rain from "../icons/moderate_heavy_rain.svg";
import rain from "../icons/rain.svg";
import snow from "../icons/snow.svg";
import thunder_rain from "../icons/thunder_rain.svg";
import thunder from "../icons/thunder.svg";

const HourlyWeatherItem = ({ hourlyWeather }) => {
  const temperature = Math.floor(hourlyWeather.temp_c);
  const time = hourlyWeather.time.split(" ")[1].substring(0, 5);
  const weatherIcon = Object.keys(weatherCodes).find((icon) =>
    weatherCodes[icon].includes(hourlyWeather.condition.code)
  );
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
    <li className="weather-item">
      <p className="time">{time}</p>
      <img
        src={weatherIcons[weatherIcon]}
        alt="icon weather"
        className="weather-icon"
      />
      <p className="temperature">{temperature}°</p>
    </li>
  );
};

export default HourlyWeatherItem;
