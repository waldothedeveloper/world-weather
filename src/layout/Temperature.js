import React, { useState, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../css/temperatureCSS";

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
        variant='h2'
        className={currentTemp ? classes.tempActive : classes.tempGreyed}
      >
        {celsius}
        <span
          style={{ fontSize: "1.25rem" }}
          variant='subtitle1'
          className={currentTemp ? classes.tempActive : classes.tempGreyed}
        >
          &#x2103;
        </span>
      </Typography>

      <Divider className={classes.divider} />

      <Typography
        onClick={() => setCurrentTemp(!true)}
        variant='h2'
        className={currentTemp ? classes.tempGreyed : classes.tempActive}
      >
        {fahrenheit}
        <span
          style={{ fontSize: "1.25rem" }}
          variant='subtitle1'
          className={currentTemp ? classes.tempGreyed : classes.tempActive}
        >
          &#x2109;
        </span>
      </Typography>
    </div>
  );
}
