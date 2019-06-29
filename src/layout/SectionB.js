import React from "react";
import Grid from "@material-ui/core/Grid";
import WeatherInfo from "./WeatherInfo";
import WeatherPics from "./WeatherPics";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 150
  }
}));

function SectionB() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      className={classes.root}
    >
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <WeatherInfo />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <WeatherPics />
      </Grid>
    </Grid>
  );
}

export default SectionB;
