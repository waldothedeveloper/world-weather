import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import WeatherCard from "./WeatherCard";

const useStyles = makeStyles(theme => ({
  root: {
    // original blue gradient: "linear-gradient( 135deg, #000428 0.8%, #004e92 100%)"
    // taken from css-tricks: linear-gradient(to right,#ff8a00,#da1b60)
    // taken from Stripe? linear-gradient(rgb(28, 210, 242), rgb(68, 0, 204))
    backgroundImage: "linear-gradient( 135deg, #000428 0.8%, #004e92 100%)",
    padding: "100px 50px 280px 50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "nowrap",
    flexDirection: "row"
    // height: "30rem"
    // clipPath: "inset(13px -50px -50px -50px round 150px)"
  },
  wrapper: {
    margin: "-180px 0 180px 0"
  }
}));

function SectionC(props) {
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
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {props.news}
        </Grid>
      </Grid>
      <Grid
        className={classes.wrapper}
        container
        direction='row'
        justify='center'
        alignItems='center'
      >
        <WeatherCard />
      </Grid>
    </>
  );
}

export default SectionC;
