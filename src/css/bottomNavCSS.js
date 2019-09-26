import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      background: "#e7f1f7",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    [theme.breakpoints.up("md")]: {
      height: "100%",
      background: "#e7f1f7",
      paddingTop: "16rem",
      paddingBottom: "1rem",
      clipPath: "polygon(0 50%, 100% 20%, 100% 100%, 0% 100%)",
      WebkitClipPath: "polygon(0 50%, 100% 20%, 100% 100%, 0% 100%)"
    }
  },
  links: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "flex-start",
    height: "100%"
  },
  grItem: {
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: theme.spacing(2)
    },
    height: "128px"
  },
  button: {
    [theme.breakpoints.down("sm")]: {
      padding: "0.38rem"
    }
  }
}));
