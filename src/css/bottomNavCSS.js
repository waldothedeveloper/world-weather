import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    height: "400px",
    background: "#e7f1f7",
    paddingTop: "16rem",
    paddingBottom: "1rem",
    clipPath: "polygon(0 50%, 100% 20%, 100% 100%, 0% 100%)",
    WebkitClipPath: "polygon(0 50%, 100% 20%, 100% 100%, 0% 100%)"
  },
  links: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "flex-start",
    height: "4rem"
  },
  grItem: {
    height: "128px"
  }
}));
