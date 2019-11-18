import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

const WeatherData = ({data:{tempeture,weatherState,humidity,wind }}) => 
     (<div className="weatherDataCont" >
        <WeatherTemperature 
            temperature={tempeture} 
            weatherState={weatherState} 
        />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>);
;

WeatherData.propTypes={
    data: PropTypes.shape({
        tempeture: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    }),
};

export default WeatherData;