import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  gridList: {
    [theme.breakpoints.up("lg")]: {
      padding: "40px 10px 0 10px"
    },
    padding: "0.4rem 0"
  },
  gridList1: {
    [theme.breakpoints.down("sm")]: {
      padding: 0
    },
    padding: "40px 10px 0 10px"
  },
  img: {
    width: "100%",
    height: "100%"
  },
  gridList2: {
    [theme.breakpoints.up("lg")]: {
      padding: 10
    },
    padding: "0.4rem 0 0 0"
  },
  loader: {
    margin: "auto"
  }
}));
