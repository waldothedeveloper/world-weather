import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      padding: "0 6rem",
      maxHeight: 580
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0
    },
    marginTop: "2rem",
    position: "relative",
    overflow: "auto",
    maxHeight: 450,
    background: "#052337"
  },

  cont: {
    [theme.breakpoints.up("lg")]: {
      padding: "3.5rem"
    },
    padding: 0
  },
  contItem: {
    [theme.breakpoints.down("sm")]: {
      padding: "0.6rem"
    },
    padding: "1.5rem"
  },
  card: {
    display: "flex",
    flexDirection: "column"
  },

  maintitle: {
    color: "#FEFEFE",
    fontWeight: 700,
    padding: "2rem 0 1rem 0"
  },

  link: {
    color: "#2A5DB0",
    fontSize: "1rem",
    fontWeight: 500,
    alignSelf: "center"
  },

  news: {
    width: "100%",
    alignItems: "center",
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "1.2rem"
  },

  divide: {
    backgroundColor: "#e7f1f7"
  },

  divisor: {
    backgroundColor: "#e7f1f7",
    marginLeft: "12rem",
    marginRight: "2rem"
  },

  imgWrapper: {
    [theme.breakpoints.up("lg")]: {
      paddingRight: "2.5em"
    },
    paddingRight: 0,
    margin: 0
  },

  img: {
    maxWidth: "100%",
    height: "auto"
  },

  title: {
    textAlign: "center",
    color: "#fefefe"
  },

  subtitle: {
    textAlign: "center",
    color: "#eaeaea"
  },
  parag: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    color: "#eaeaea",
    textAlign: "center"
  },
  links: {
    color: "#2A5DB0"
  }
}));
