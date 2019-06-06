import React, { useState, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "inline-flex",
    padding: 22
  },
  divider: {
    width: 2.2,
    height: 34,
    margin: 22,
    backgroundColor: "#0b0b2a"
  },
  tempActive: {
    fontWeight: 600,
    backgroundColor: "#21D4FD",
    backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text"
  },
  tempGreyed: {
    fontWeight: 600,
    backgroundColor: "#000000",
    backgroundImage: "linear-gradient(147deg, #000000 0%, #2c3e50 74%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    opacity: 0.8
  }
});

export default function Temperature(props) {
  const classes = useStyles();
  const [currentTemp, setCurrentTemp] = useState(true);
  const [celsius, setCelsius] = useState(props.temperature);
  const [fahrenheit, setFahrenheit] = useState(
    parseInt((celsius * 9) / 5 + 32)
  );

  useEffect(() => {
    if (props.test) {
      setCelsius(props.temperature);
      setFahrenheit(parseInt((celsius * 9) / 5 + 32));
    }
  }, [celsius, fahrenheit, props.temperature, props.test]);

  return (
    <div className={classes.root}>
      <Typography
        onClick={() => setCurrentTemp(!!true)}
        variant="h2"
        className={currentTemp ? classes.tempActive : classes.tempGreyed}
      >
        {celsius}
        <span
          style={{ fontSize: "1.25rem" }}
          variant="subtitle1"
          className={currentTemp ? classes.tempActive : classes.tempGreyed}
        >
          &#x2103;
        </span>
      </Typography>

      <Divider className={classes.divider} />

      <Typography
        onClick={() => setCurrentTemp(!true)}
        variant="h2"
        className={currentTemp ? classes.tempGreyed : classes.tempActive}
      >
        {fahrenheit}
        <span
          style={{ fontSize: "1.25rem" }}
          variant="subtitle1"
          className={currentTemp ? classes.tempGreyed : classes.tempActive}
        >
          &#x2109;
        </span>
      </Typography>
    </div>
  );
}
