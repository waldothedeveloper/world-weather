import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import * as momentTZ from "moment-timezone";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  buttonsColor: {
    backgroundColor: "#000000",
    backgroundImage: "linear-gradient(147deg, #000000 0%, #2c3e50 74%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text"
  }
}));
 

// To get the full timezone object of each sample city
export default function Clock(props) {
  const classes = useStyles();

  const cityNames = [];

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

  const CitiesClock = () =>
    cityNames.length > 0 &&
    cityNames.map(city => {
      return momentTZ
        .tz(new Date(), city)
        .format("dddd, MMMM Do YYYY, h:mm:ss A");
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
      <Typography className={classes.buttonsColor} variant='subtitle1'>
        {date[props.activeStep]}
      </Typography>
    </React.Fragment>
  );
}
