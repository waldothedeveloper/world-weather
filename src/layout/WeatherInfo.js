import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../css/weatherInfoCSS";
import Button from "@material-ui/core/Button";

function WeatherInfo(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        variant='h3'
        gutterBottom
        className={classes.weatherInfoTitle}
      >
        {props.weatherInfo1}
        <br />
        {props.weatherInfo2}
      </Typography>
      <Typography variant='body1' gutterBottom>
        {props.loremInpsun}
      </Typography>
      <Button className={classes.button} variant='contained' size='large'>
        More info
      </Button>
    </div>
  );
}

export default WeatherInfo;
