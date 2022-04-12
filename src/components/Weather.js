import React from "react";
import "./styles.css";

import moment from "moment";

const refresh = () => {
  window.location.reload();
};

const WeatherCard = ({ weatherData }) => (
  <div className="main">
    <h2>Application Méteo</h2>
    <p className="header">🏠 Nom de la ville :{weatherData.city.name}</p>
    <p className="tump">
      📅 Date: {moment().format("dddd")} 🌱
      {moment().format("LL")}⌚{moment().format("h:mm:ss a")}
    </p>
    <p className="temp">📮Code Postal : {weatherData.city.cp}</p>
    <p className="temp">🔍 Latitude : {weatherData.ephemeride.latitude}</p>
    <p className="temp">🔎 Longitude : {weatherData.ephemeride.longitude}</p>
    {/*<div>{JSON.stringify(weatherData, undefined, true)}</div>*/}
    <p className="temp">🙋🙋‍♀️Lever : {weatherData.ephemeride.sunrise} h</p>
    <p className="temp">🛌 Coucher: {weatherData.ephemeride.sunset} h</p>
    <p className="temp">
      🌗 Durée du Jour: {weatherData.ephemeride.duration_day} h
    </p>
    <p className="temp">🌙 Lune: {weatherData.ephemeride.moon_phase}</p>
    <button class="raf" onClick={refresh}>
      Actualiser
    </button>
    <button class="raf" onClick={refresh}>
      Actualiser
    </button>
  </div>
);

export default WeatherCard;
