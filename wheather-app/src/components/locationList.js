import React from "react";
import WeatherLocation from "./WeatherLocation";

const LocationList = () => {
  return (
  <div className="row">
    <div className="col-md-3">
      <WeatherLocation city="bogota"></WeatherLocation>
      {/* <WeatherLocation city="mexico"></WeatherLocation> */}
    </div>
  </div>


  )};
export default LocationList;
