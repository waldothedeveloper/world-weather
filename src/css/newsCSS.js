import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "2rem",
    position: "relative",
    overflow: "auto",
    maxHeight: 450
  },

  cont: {
    padding: "3.5rem"
  },

  card: {
    display: "flex",
    flexDirection: "column"
  },

  maintitle: {
    color: "#FEFEFE",
    fontWeight: 700
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
    justifyContent: "space-between",
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
    paddingRight: "2.5em"
  },

  img: {
    maxWidth: "100%",
    height: "auto"
  },

  title: {
    color: "#fefefe"
  },

  subtitle: {
    color: "#eaeaea"
  },

  links: {
    color: "#2A5DB0"
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey"
    }
  }
}));
