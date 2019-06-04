import React, { useState, useEffect } from "react";
import { findTimeZone, getZonedTime } from "timezone-support";
import Typography from "@material-ui/core/Typography";

// const timeZon = [
//   "Asia/Hong_Kong",
//   "America/Havana",
//   "Europe/Berlin",
//   "Asia/Singapore",
//   "Europe/Moscow"
// ];

//To get the full timezone object of each sample city

export default function Clock(props) {
  // console.log(props.cityNames);

  const cities = [];

  if (props.cityNames !== "undefined") {
    props.cityNames.map(city => {
      if (city.name === "Hong Kong") {
        cities.push("Asia/Hong_Kong");
      }

      if (city.name === "Havana") {
        cities.push("America/Havana");
      }

      if (city.name === "Berlin") {
        cities.push("Europe/Berlin");
      }

      if (city.name === "Singapore") {
        cities.push("Asia/Singapore");
      }

      if (city.name === "Moscow") {
        cities.push("Europe/Moscow");
      }
      return null;
    });
  }

  const CitiesClock = () =>
    cities.map(city => {
      return getZonedTime(new Date(), findTimeZone(city));
    });

  const [date, setDate] = useState([]);
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(CitiesClock());
  }

  return (
    <React.Fragment>
      {date.length > 0 && (
        <Typography variant="h4">
          {date[0].hours}:{date[0].minutes}:{date[0].seconds} PM
        </Typography>
      )}
    </React.Fragment>
  );
}
