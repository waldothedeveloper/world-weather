import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("md")]: {
      width: "auto",
      margin: "1rem 2rem 0 2rem",
      borderRadius: "4px 4px 0 0"
    },
    marginTop: 20,
    padding: 0,
    display: "flex",
    alignItems: "center",
    width: 500,
    boxShadow: "none",
    // boxShadow:
    //   "0 7px 13px -3px rgba(45,35,66,0.3), 0 2px 4px 0 rgba(45,35,66,0.4)",
    borderRadius: 0,
    backgroundColor: "#fefefe"
  },
  aisSearch: {
    [theme.breakpoints.up("lg")]: {
      display: "flex !important",
      flexDirection: "column !important",
      alignItems: "flex-start !important",
      justifyContent: "center !important",
      paddingLeft: "2.8rem"
    }
  },
  InstantSearch: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  },
  paper: {
    position: "absolute",
    outline: "none"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));
