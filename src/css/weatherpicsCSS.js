import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  gridList: {
    [theme.breakpoints.up("sm")]: {
      padding: "40px 10px 0 10px"
    },
    [`${theme.breakpoints.up("sm")} and (orientation: landscape)`]: {
      padding: "40px 10px 0 10px"
    },
    [theme.breakpoints.up("lg")]: {
      padding: "40px 10px 0 10px"
    },
    padding: "0.1rem 0"
  },
  gridList1: {
    [theme.breakpoints.down("sm")]: {
      padding: 0
    },
    [`${theme.breakpoints.up("sm")} and (orientation: landscape)`]: {
      padding: "40px 10px 0 10px"
    },
    padding: "40px 10px 0 10px"
  },
  img: {
    width: "100%",
    height: "100%"
  },
  gridList2: {
    [theme.breakpoints.up("sm")]: {
      padding: "0.1rem 0 0 0"
    },
    [`${theme.breakpoints.up("sm")} and (orientation: landscape)`]: {
      padding: 10
    },
    [theme.breakpoints.up("lg")]: {
      padding: 10
    },
    padding: "0.1rem 0 0 0"
  },
  loader: {
    margin: "0 auto"
  }
}));
