import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE
} from "./../../../constants/weathers";
import "./styles.css";

const icons = {
  [CLOUD]: "cloud",
  [SUN]: "day-sun",
  [RAIN]: "day-rain",
  [SNOW]: "day-snow",
  [THUNDER]: "day-thunderstore",
  [DRIZZLE]: "drizzle"
};

const getWeatherIcon = weatherStateInfo => {
  const { weatherState } = weatherStateInfo;
  const icon = icons[weatherState];
  const sizeIcon = "4x";

  if (icon)
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
  else return <WeatherIcons className="wicon" name={"cloud"} size={sizeIcon} />;
};

const WeatherTemperature = ({ temperature, weatherState }) => {
  return (
    <div className="weatherTemperatureCont">
      {getWeatherIcon(weatherState)}
      <span className="temperature">{`${temperature}`}</span>
      <span className="temperatureType">{`C°`}</span>
    </div>
  );
};

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
