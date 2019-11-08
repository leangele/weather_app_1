import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <WeatherLocation></WeatherLocation>
            </div>
            <div className="col-md-3">

              <WeatherLocation></WeatherLocation>
            </div>
            <div className="col-md-3">
              <WeatherLocation></WeatherLocation>
            </div>
            <div className="col-md-3">
              <WeatherLocation></WeatherLocation>
            </div>
          </div>
        </div>
       
      </div>
    );
  }
}

export default App;
