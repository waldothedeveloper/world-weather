import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 150
  }
}));

function SectionB(props) {
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
        {props.partA}
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        {props.partB}
      </Grid>
    </Grid>
  );
}

export default SectionB;