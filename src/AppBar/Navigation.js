import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../css/navigationCSS";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import CloseButton from "@material-ui/icons/Close";

export default function Navigation() {
  const [switchButton, setSwitchButton] = React.useState(false);
  const classes = useStyles();

  React.useEffect(() => {
    const ht = document.getElementsByTagName("HTML")[0];
    const bd = document.getElementsByTagName("BODY")[0];
    if (switchButton) {
      ht.setAttribute(
        "style",
        "overflow: hidden !important; height: 100% !important"
      );
      bd.setAttribute(
        "style",
        "overflow: hidden !important; height: 100% !important"
      );
    } else {
      ht.removeAttribute(
        "style",
        "overflow: hidden !important; height: 100% !important"
      );
      bd.removeAttribute(
        "style",
        "overflow: hidden !important; height: 100% !important"
      );
    }
  });
  return (
    <React.Fragment>
      {/* Testing the apple way */}
      <nav
        className={
          switchButton
            ? `${classes.globalNav} ${classes.globalNavOpened}`
            : classes.globalNav
        }
      >
        <ul className={classes.globalHeader}>
          <Typography
            variant='h6'
            className={
              switchButton
                ? `${classes.title} ${classes.checkedColor}`
                : classes.title
            }
          >
            WeatherKast.
          </Typography>
          <IconButton
            className={
              switchButton
                ? `${classes.checkedColor} ${classes.icon}`
                : classes.icon
            }
            onClick={() => setSwitchButton(!switchButton)}
            edge='start'
            aria-label='menu'
            color='inherit'
          >
            {switchButton ? <CloseButton /> : <MenuIcon />}
          </IconButton>
        </ul>
        <ul
          className={
            switchButton ? `${classes.globalListVisible}` : classes.globalList
          }
        >
          <Button classes={{ root: classes.button }}>Local Weather</Button>
          <Button classes={{ root: classes.button }}>About</Button>
          <Button classes={{ root: classes.button }}>Contact</Button>
        </ul>
      </nav>
    </React.Fragment>
  );
}
