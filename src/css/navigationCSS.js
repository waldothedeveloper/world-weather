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
    color: "#fefefe !important",
    backgroundColor: "transparent"
  },
  icon: {
    width: 48,
    height: 32,
    padding: "0 !important",
    "&:hover": {
      backgroundColor: "transparent !important"
    }
  },
  button: {
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem !important",
      transition: "font-size 300ms !important",
      borderRadius: "0 !important",
      "&:hover": {
        fontSize: "1.6rem !important",
        backgroundColor: "transparent !important"
      }
    },
    color: "#fefefe !important",
    fontWeight: 400,
    transition: "font-size 500ms",
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
    // background: "#b5cbe1",
    background: "#a3dcf5",
    fontSize: "17px",
    transitionDelay: "0.3s",
    overflowY: "hidden",
    webkitTransition:
      "background .44s .2s cubic-bezier(0.52, 0.16, 0.24, 1),height .56s cubic-bezier(0.52, 0.16, 0.24, 1)",
    transition:
      "background .44s .2s cubic-bezier(0.52, 0.16, 0.24, 1),height .56s cubic-bezier(0.52, 0.16, 0.24, 1)",
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  },
  globalNavOpened: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    background: "#24282d",
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
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "2.8rem !important",
      paddingRight: "2.8rem !important",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: 1425
    },
    width: "100%",
    overflow: "hidden",
    paddingLeft: "10px !important"
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
    maxWidth: 664,
    margin: "0 auto",
    padding: "45px 40px 8px",
    height: "100%",
    overflowY: "auto",
    transition: "visibility 0s linear 1s",
    transitionDelay: 0
  }
}));
