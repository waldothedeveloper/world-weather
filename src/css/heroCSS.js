import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    flexWrap: "wrap",
    margin: 0
  },
  type: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
      padding: "1.8rem",
      fontWeight: 600,
      textAlign: "center"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.4rem",
      padding: "1.8rem",
      fontWeight: 600,
      textAlign: "center"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.8rem",
      padding: "2.8rem",
      fontWeight: 700,
      textAlign: "left"
    }
  },
  subtitles: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      textAlign: "center"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.3rem",
      textAlign: "center"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2rem",
      padding: "0 0 0 2.8rem",
      textAlign: "left"
    },
    color: "#3C3D5A",
    marginTop: "0.35em",
    marginBottom: "0.35em"
  },
  heroImg: {
    [theme.breakpoints.down("sm")]: {
      padding: "1.8rem"
    },
    [theme.breakpoints.up("sm")]: {
      padding: "3.6rem"
    }
  }
}));
