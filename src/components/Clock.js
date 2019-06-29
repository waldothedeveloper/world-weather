import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
//NEED TO CHECK THIS IMPORT BELOW
import * as moment from "moment-timezone";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonsColor: {
    backgroundColor: "#000000",
    backgroundImage: "linear-gradient(147deg, #000000 0%, #2c3e50 74%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text"
  }
});

// To get the full timezone object of each sample city
export default function Clock(props) {
  const classes = useStyles();
  const cityNames = [];
  const [date, setDate] = useState([]);

  if (props.data.weather && props.data.weather.length === 1) {
    cityNames.push(props.data.name);
  } else {
    props.data.forEach(city => {
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
  }

  const CitiesClock = () =>
    cityNames.length > 0 &&
    cityNames.map(city => {
      return moment
        .tz(new Date(), city)
        .format("dddd, MMMM Do YYYY, h:mm:ss A");
    });

  function tick() {
    setDate(CitiesClock());
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return (
    <React.Fragment>
      <Typography className={classes.buttonsColor} variant='subtitle1'>
        {date[props.activeStep] || date}
      </Typography>
    </React.Fragment>
  );
}
