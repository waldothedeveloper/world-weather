import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#b5cbe1",
    overflowY: "hidden"
  },
  title: {
    color: "#0b0b2a",
    fontWeight: 700
  },
  checkedColor: {
    color: "#fefefe !important"
  },
  icon: {
    width: 48,
    height: 32,
    padding: "0 !important"
  },
  button: {
    color: "#fefefe !important",
    fontWeight: 400,
    "&:hover": {
      color: "#fefefe !important"
    }
  },
  navElems: {
    display: "flex",
    flexDirection: "column",
    background: "#b5cbe1",
    margin: 0,
    width: "100%",
    height: "100vh"
  },
  //testing the apple way
  globalNav: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 9999,
    display: "block",
    margin: 0,
    width: "100%",
    height: "48px",
    background: "#b5cbe1",
    fontSize: "17px",
    // transition: "all 0.5s ease-out, background 1s ease-out",
    transitionDelay: "0.3s",
    overflowY: "hidden",
    webkitTransition:
      "background .44s .2s cubic-bezier(0.52, 0.16, 0.24, 1),height .56s cubic-bezier(0.52, 0.16, 0.24, 1)",
    transition:
      "background .44s .2s cubic-bezier(0.52, 0.16, 0.24, 1),height .56s cubic-bezier(0.52, 0.16, 0.24, 1)"
  },
  globalNavOpened: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    background: "#24282d",
    // transition: "all 0.3s ease-in, background 0.5s ease-in"
    transitionDelay: "0.3s",
    webkitTransition:
      "background .36s cubic-bezier(0.32, 0.08, 0.24, 1),height .56s cubic-bezier(0.52, 0.16, 0.24, 1)",
    transition:
      "background .36s cubic-bezier(0.32, 0.08, 0.24, 1),height .56s cubic-bezier(0.52, 0.16, 0.24, 1)"
  },
  globalContent: {
    [theme.breakpoints.down("md")]: {
      padding: 0,
      position: "absolute",
      top: 0,
      width: "100%",
      height: "100%"
    },
    margin: "0 auto",
    maxWidth: "980px",
    padding: "0 22px",
    position: "relative",
    zIndex: 2
  },
  globalHeader: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    width: "100%",
    overflow: "hidden",
    paddingLeft: "10px !important"
  },
  globalListItem1: {
    transitionDelay: "150s"
  },
  globalListItem2: {
    transitionDelay: "300s"
  },
  globalListItem3: {
    transitionDelay: "450s"
  },
  globalList: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    top: "3.5rem",
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: 664,
    margin: "0 auto",
    padding: "45px 40px 8px",
    height: "auto",
    overflowY: "auto",
    visibility: "hidden"
  },
  globalListVisible: {
    visibility: "visible",
    display: "flex",
    flexDirection: "column",
    // position: "absolute",
    // top: "3.5rem",
    // right: 0,
    // bottom: 0,
    // left: 0,
    maxWidth: 664,
    margin: "0 auto",
    padding: "45px 40px 8px",
    height: "100%",
    overflowY: "auto",
    transition: "visibility 0s linear 1s",
    transitionDelay: 0,
  }
}));
