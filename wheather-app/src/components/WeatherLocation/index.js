import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import tranformWeather from "./../../services/transformWeather";
import getUrlWeatherByCity from "./../../services/getUrlWeatherByCity";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city,
      data: null
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

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    this.handleUpdateClick();
  }

  handleUpdateClick = () => {
    const url = getUrlWeatherByCity(this.state.city);
    console.log(url);
    fetch(url)
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
        {data ? (
          <WeatherData data={data}></WeatherData>
        ) : (
          <CircularProgress syze={50}></CircularProgress>
        )}
      </div>
    );
  }
}

WeatherLocation.propType = {
  city: PropTypes.toString.isRequired
};

export default WeatherLocation;
