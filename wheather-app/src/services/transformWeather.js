import { SUN } from "./../constants/weathers";

const getWeatherState = weather_data => {
  return SUN;
};

const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;

  const data = {
    tempeture: temp,
    weatherState: getWeatherState(weather_data),
    humidity,
    wind: `${speed} m/s`
  };
  return data;
};

export default transformWeather;
