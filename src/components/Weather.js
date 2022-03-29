import React from "react";
import "./styles.css";
import { Button } from "semantic-ui-react";
import moment from "moment";

const refresh = () => {
  window.location.reload();
};

const WeatherCard = ({ weatherData }) => (
  <div className="main">
    <p className="header">🏠 Nom de la ville :{weatherData.city.name}</p>
    📅 Date: {moment().format("dddd")} ⌚{moment().format("LL")}
    <div className="top">
      <Button
        className="button"
        inverted
        color="blue"
        circular
        icon="refresh"
        onClick={refresh}
      />
    </div>
    <p className="temp">Code Postal : {weatherData.city.cp}</p>
    <p className="temp">🔍 Latitude : {weatherData.ephemeride.latitude}</p>
    <p className="temp">🔎 Longitude : {weatherData.ephemeride.longitude}</p>
    {/*<div>{JSON.stringify(weatherData, undefined, true)}</div>*/}
    <div className="flex">
      <p className="temp">🙋🙋‍♀️Lever : {weatherData.ephemeride.sunrise} h</p>
      <p className="temp">🛌 Coucher: {weatherData.ephemeride.sunset} h</p>
      <p className="temp">
        🌗 Durée du Jour: {weatherData.ephemeride.duration_day} h
      </p>
      <p className="temp">🌙 Lune: {weatherData.ephemeride.moon_phase}</p>
    </div>
  </div>
);

export default WeatherCard;
