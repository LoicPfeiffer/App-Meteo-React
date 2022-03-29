import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";

export default function App(probs) {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}ephemeride/0?latlng=${lat},${long}&token=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      {typeof data != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        /*<div>{JSON.stringify(data.city.name, undefined, true)}</div>*/
        <div>{JSON.stringify(data, undefined, true)}</div>
      )}
    </div>
  );
}
