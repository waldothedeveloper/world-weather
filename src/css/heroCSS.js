import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    flexWrap: "nowrap",
    padding: theme.spacing(15)
  },
  bg: {
    background: "#b5cbe1"
  },
  type: {
    fontWeight: 700
  },
  subtitles: {
    color: "#3C3D5A",
    marginTop: "0.35em",
    marginBottom: "0.35em"
  }
}));
