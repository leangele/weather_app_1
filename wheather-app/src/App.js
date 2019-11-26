import React, { Component } from "react";
import WeatherLocation from "./components/WeatherLocation";
import "./App.css";
import LocationList from "./components/locationList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <LocationList></LocationList>
        </div>
      </div>
    );
  }
}

export default App;
