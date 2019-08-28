import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    backgroundColor: "#fefefe !important",
    width: "100%",
    justifyContent: "space-between"
  },
  cityName: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem"
    },
    fontWeight: 900,
    paddingBottom: "0.35em"
  },
  card: {
    [theme.breakpoints.down("sm")]: {
      height: 280
    },
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 900,
    height: 317,
    zIndex: 1,
    backgroundColor: "#fefefe",
    backgroundImage: "linear-gradient(315deg, #fdfdfd 0%, #fefefe 74%)",
    boxShadow:
      "0 7px 13px -3px rgba(45,35,66,0.3), 0 8px 10px 0 rgba(45,35,66,0.4)"
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
    display: "flex",
    width: "100%",
    justifyContent: "center"
  },
  cardContent: {
    width: "50%"
  },
  colors: {
    color: "#aaa9b7"
  }
}));

// background-color: #21D4FD;
// background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
