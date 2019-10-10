import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import WeatherInfo from "../layout/WeatherInfo";
import { weatherInfo1, weatherInfo2, loremInpsun } from "../Utils/weatherText";
import WeatherPics from "../layout/WeatherPics";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      padding: 50
    },
    [theme.breakpoints.up("lg")]: {
      padding: 150
    },
    padding: 0
  }
}));

function SectionB(props) {
  const classes = useStyles();
  return (
    <Grid container direction='row' justify='center' className={classes.root}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <WeatherInfo
          weatherInfo1={weatherInfo1}
          weatherInfo2={weatherInfo2}
          loremInpsun={loremInpsun}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <WeatherPics />
      </Grid>
    </Grid>
  );
}

export default SectionB;
