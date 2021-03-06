import React from "react";
import "./styles.css";

import moment from "moment";

const refresh = () => {
  window.location.reload();
};

const WeatherCard = ({ weatherData }) => (
  <div className="main">
    <h2>Application Mรฉteo</h2>
    <p className="header">๐  Nom de la ville :{weatherData.city.name}</p>
    <p className="tump">
      ๐ Date: {moment().format("dddd")} ๐ฑ
      {moment().format("LL")}โ{moment().format("h:mm:ss a")}
    </p>
    <p className="temp">๐ฎCode Postal : {weatherData.city.cp}</p>
    <p className="temp">๐ Latitude : {weatherData.ephemeride.latitude}</p>
    <p className="temp">๐ Longitude : {weatherData.ephemeride.longitude}</p>
    {/*<div>{JSON.stringify(weatherData, undefined, true)}</div>*/}
    <p className="temp">๐๐โโ๏ธLever : {weatherData.ephemeride.sunrise} h</p>
    <p className="temp">๐ Coucher: {weatherData.ephemeride.sunset} h</p>
    <p className="temp">
      ๐ Durรฉe du Jour: {weatherData.ephemeride.duration_day} h
    </p>
    <p className="temp">๐ Lune: {weatherData.ephemeride.moon_phase}</p>
    <button class="raf" onClick={refresh}>
      Actualiser
    </button>
    <button class="raf" onClick={refresh}>
      Actualiser
    </button>
  </div>
);

export default WeatherCard;
