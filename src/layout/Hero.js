import React from "react";
import Grid from "@material-ui/core/Grid";
import campfire from "../images/undraw_campfire.svg";
import Typography from "@material-ui/core/Typography";
//dont forget to put the search bar
import Search from "../components/Search";
import { useStyles } from "../css/heroCSS";

function Hero() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction='row'
      alignItems='center'
    >
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Typography className={classes.type} variant='h2' gutterBottom>
          Find out "weather" <br /> you should go camping <br /> or stay cozy at
          home.
        </Typography>
        <Typography className={classes.subtitles} variant='h6' gutterBottom>
          Find the local weather in any city of the USA.
        </Typography>

        {/* Here is where the Search Component should go */}
        <Search />

        <Typography className={classes.subtitles} variant='body2' gutterBottom>
          Best way to know your city weather easily.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <img
          className={classes.heroImg}
          loading='lazy'
          width='100%'
          height='auto'
          alt='campfire'
          src={campfire}
        />
      </Grid>
    </Grid>
  );
}

export default Hero;
