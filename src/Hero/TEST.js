import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as data from "../Utils/us-cities-only-no-id.json";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(8)
  }
}));

export default function Test() {
  const classes = useStyles();

  const handleClick = () => {
    data.default.map(ob => {
      console.log(ob.name.length === 1);
    });
  };

  return (
    <Button
      onClick={handleClick}
      variant='contained'
      color='primary'
      className={classes.button}
    >
      Import Data
    </Button>
  );
}
