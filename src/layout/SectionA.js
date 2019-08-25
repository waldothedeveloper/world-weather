import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  bg: {
    background: "#b5cbe1",
    clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
    WebkitClipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
    height: "calc(120vh + 220px)"
  },
  weathercard: {
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
