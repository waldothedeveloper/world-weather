import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: "linear-gradient( 135deg, #000428 0.8%, #004e92 100%)",
    padding: 100
    // height: "30rem"
    // clipPath: "inset(13px -50px -50px -50px round 150px)"
  }
}));

function SectionC(props) {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction='row'
      justify='center'
      alignItems='center'
    >
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        {props.map}
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        {props.news}
      </Grid>
    </Grid>
  );
}

export default SectionC;
