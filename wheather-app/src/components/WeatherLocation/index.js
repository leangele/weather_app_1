import React, { Component } from "react";
import tranformWeather from "./../../services/transformWeather";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import {  CLOUDY } from "./../../constants/weathers";

import {api_weather} from "./../../constants/apiUrl"

const data = {
  tempeture: 5,
  weatherState: CLOUDY,
  humidity: 10,
  wind: "10 m/s"
};



class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Medellin",
      data: data
    };
  }

  getData = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;

    const data = {
      tempeture: temp,
      weatherState: tranformWeather(weather_data),
      humidity,
      wind: `${speed} m/s`
    };
    return data;
  };

  handleUpdateClick = () => {
    console.log(api_weather);
    fetch(api_weather)
      .then(message => {
        return message.json();
      })
      .then(dataService => {
        console.log(dataService);
        const newWeather = this.getData(dataService);
        this.setState(
          (this.state = {
            city: dataService.name,
            data: newWeather
          })
        );
      });
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}
export default WeatherLocation;
