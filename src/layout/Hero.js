import React from "react";
import Grid from "@material-ui/core/Grid";
import campfire from "../images/undraw_campfire.svg";
import Typography from "@material-ui/core/Typography";
import Search from "../components/Search";
import WeatherCard from "../layout/WeatherCard";
import { useStyles } from "../css/heroCSS";

function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.bg}>
      <Grid
        container
        className={classes.root}
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid item lg={6} md={6} sm={6}>
          <Typography className={classes.type} variant='h3' gutterBottom>
            Find out "weather" <br /> you should go camping <br /> or stay cozy
            at home
          </Typography>
          <Typography className={classes.subtitles} variant='h6' gutterBottom>
            Find the local weather <br />
            in any city of USA
          </Typography>
          <Search />
          <Typography className={classes.subtitles} variant='h6' gutterBottom>
            Best way to know your city weather easily
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={6}>
          <img width='100%' height='auto' alt='campfire' src={campfire} />
        </Grid>
      </Grid>
      <Grid container direction='row' justify='center' alignItems='center'>
        <WeatherCard />
      </Grid>
    </div>
  );
}

export default Hero;
