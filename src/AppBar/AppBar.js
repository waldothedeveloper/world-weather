import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1,
    boxShadow: "none",
    background: "#b5cbe1"
  },
  menuButton: {
    marginRight: "8px * 2"
  },
  title: {
    flexGrow: 1,
    color: "#0b0b2a",
    fontWeight: 700
  },
  toolbar: {
    paddingLeft: "120px",
    paddingRight: "120px"
  },
  button: {
    color: "#aaa9b7",
    fontWeight: 700
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <AppBar
        classes={{
          colorPrimary: classes.root
        }}
        position="static"
      >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.title}>
            WeatherKast.
          </Typography>
          <Button className={classes.button}>Local Weather</Button>
          <Button className={classes.button}>About</Button>
          <Button className={classes.button}>Contact</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default withStyles(styles)(ButtonAppBar);
