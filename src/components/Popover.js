import React from "react";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "auto",
    color: "#fd212f",
    backgroundColor: "#fdef21"
  },
  typography: {
    padding: theme.spacing(2)
  }
}));

function MessagePopover({ anchorEl, handleClick, rest }) {
  const { hits } = rest;
  const classes = useStyles();
  // console.log("anchorEl on MessagePopover: ", anchorEl);

  const open = Boolean(anchorEl);
  // console.log("open: ", open);

  if (hits === undefined || hits.length === 0) {
    return (
      <div>
        <Popper open={open} anchorEl={anchorEl} placement='top' transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper onClick={() => handleClick(null)} className={classes.root}>
                <Typography className={classes.typography}>
                  This is not a valid city, please try again...
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    );
  } else if (hits.length === 20) {
    return null;
  } else {
    return (
      <div>
        <Popper open={open} anchorEl={anchorEl} placement='top' transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper onClick={() => handleClick(null)} className={classes.root}>
                <Typography className={classes.typography}>
                  Please select a city from the list.
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    );
  }
}

export default MessagePopover;
