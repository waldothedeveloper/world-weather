import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bg: {
    height: "130vh",
    padding: "5rem 0 0 0",
    background: "#b5cbe1",
    clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
    WebkitClipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)"
  },
  weathercard: {
    padding: "1.8rem",
    marginTop: "-220px"
  }
}));

function SectionA({ hero, weatherCard }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bg}>{hero}</div>

      <Grid
        className={classes.weathercard}
        container
        direction='row'
        justify='center'
        alignItems='center'
      >
        {weatherCard}
      </Grid>
    </>
  );
}

export default SectionA;
