import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: "inline-flex",
    padding: 22
  },
  divider: {
    width: 1.2,
    height: 22,
    margin: 22,
    backgroundColor: "#0b0b2a"
  },
  tempActive: {
    fontWeight: 600,
    backgroundColor: "#21D4FD",
    backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text"
  },
  tempGreyed: {
    fontWeight: 600,
    backgroundColor: "#000000",
    backgroundImage: "linear-gradient(147deg, #000000 0%, #2c3e50 74%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    opacity: 0.8
  }
});
