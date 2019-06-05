import React, { useState, useEffect, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import * as momentTZ from "moment-timezone";
import { Store } from "../App";

//To get the full timezone object of each sample city
export default function Clock(props) {
  const cities = useContext(Store);
  const cityNames = [];

  cities.forEach(city => {
    if (city.name === "Hong Kong") {
      cityNames.push("Asia/Hong_Kong");
    }

    if (city.name === "Havana") {
      cityNames.push("America/Havana");
    }

    if (city.name === "Berlin") {
      cityNames.push("Europe/Berlin");
    }

    if (city.name === "Singapore") {
      cityNames.push("Asia/Singapore");
    }

    if (city.name === "Moscow") {
      cityNames.push("Europe/Moscow");
    }
  });

  const CitiesClock = () =>
    cityNames.length > 0 &&
    cityNames.map(city => {
      return momentTZ.tz(new Date(), city).format("h:mm:ss A");
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
      <Typography variant="h4">{date[props.activeStep]}</Typography>
    </React.Fragment>
  );
}
