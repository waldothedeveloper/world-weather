import React from "react";
import Grid from "@material-ui/core/Grid";
import campfire from "../images/undraw_campfire.svg";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Search from "./Search";
import WeatherCard from "../ExampleCities/WeatherCard";

const styles = theme => ({
  root: {
    flexWrap: "nowrap",
    padding: theme.spacing(15)
  },
  bg: {
    background: "#b5cbe1"
  },
  type: {
    fontWeight: 700
  },
  subtitles: {
    color: "#3C3D5A",
    marginTop: "0.35em",
    marginBottom: "0.35em"
  }
});

function Hero(props) {
  const { classes } = props;

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
            Find out "weather" <br /> you should go fishing <br /> or stay cozy
            at home
          </Typography>
          <Typography className={classes.subtitles} variant='h6' gutterBottom>
            Let the rain kiss you <br />
            Let the rain sing you a lullaby
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

export default withStyles(styles)(Hero);
