import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    flexWrap: "wrap",
    margin: 0
  },
  type: {
    fontWeight: 700,
    fontSize: "1.8rem",
    padding: "1.8rem"
  },
  subtitles: {
    color: "#3C3D5A",
    marginTop: "0.35em",
    marginBottom: "0.35em"
  },
  heroImg: {
    padding: "1.8rem"
  }
}));
