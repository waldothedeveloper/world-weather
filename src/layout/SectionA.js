import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  bg: {
    background: "#b5cbe1"
  }
}));

function SectionA({ hero, weatherCard }) {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <div>{hero}</div>

      <Grid container direction='row' justify='center' alignItems='center'>
        {weatherCard}
      </Grid>
    </div>
  );
}

export default SectionA;
