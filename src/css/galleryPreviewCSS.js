import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  image: {
    maxWidth: "100%",
    height: "auto"
  },
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: 0
    },
    padding: "0 120px 0 120px"
  },
  twelve2: {
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      padding: 0
    },
    paddingTop: "6rem"
  },
  root1: {
    [theme.breakpoints.down("sm")]: {
      margin: 0
    },
    marginTop: "4rem"
  },
  crazyPic: {
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      padding: 0
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0 -22rem 0 0",
      padding: 0
    }
  }
}));
