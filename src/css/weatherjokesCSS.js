import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    background: "none"
  },
  cityName: {
    fontWeight: 900,
    paddingBottom: "0.35em",
    color: "#fefefe"
  },
  card: {
    [theme.breakpoints.down("sm")]: {
      margin: "-6rem 0 2rem 0"
    },
    [theme.breakpoints.up("md")]: {
      margin: "-6rem 0 6rem 0"
    },
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    width: 900,
    margin: "-6rem 0 12rem 0",
    backgroundColor: "#ffffff",
    // linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)
    backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
    boxShadow:
      "0 7px 13px -3px rgba(45,35,66,0.3), 0 8px 10px 0 rgba(45,35,66,0.4)"
  },
  content: {
    [theme.breakpoints.down("sm")]: {
      height: 200
    },
    marginTop: "2rem"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 50,
    width: 50
  },
  actions: {
    [theme.breakpoints.down("sm")]: {
      height: 65
    },
    display: "block",
    width: "100%"
  },
  cardContent: {
    width: "50%"
  },
  colors: {
    color: "#fefefe"
  }
}));

// background-color: #21D4FD;
// background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
