import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import WeatherJokes from "../components/WeatherJokes";
import News from "../components/News";

const useStyles = makeStyles(theme => ({
  // original blue gradient: "linear-gradient( 135deg, #000428 0.8%, #004e92 100%)"
  // taken from css-tricks: linear-gradient(to right,#ff8a00,#da1b60)
  // taken from Stripe? linear-gradient(rgb(28, 210, 242), rgb(68, 0, 204))
  // backgroundImage: "linear-gradient( 135deg, #000428 0.8%, #004e92 100%)",
  root: {
    [theme.breakpoints.down("sm")]: {
      height: "100vh"
    },
    [theme.breakpoints.up("lg")]: {
      padding: "100px 50px 280px 50px"
    },
    backgroundImage: "linear-gradient( to right, #27CDE8 10%, #3CA4EC 100%)",
    padding: 0,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  wrapper: {
    [theme.breakpoints.down("sm")]: {
      padding: "1rem"
    }
    // margin: "-180px 0 180px 0"
  },
  gitem: {
    [theme.breakpoints.up("lg")]: {
      padding: "3.2rem"
    },
    padding: 0
  }
}));

function SectionC() {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.root}
        container
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid
          className={classes.gitem}
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <News />
        </Grid>
      </Grid>
      <Grid
        className={classes.wrapper}
        container
        direction='row'
        justify='center'
        alignItems='center'
      >
        <WeatherJokes />
      </Grid>
    </>
  );
}

export default SectionC;
