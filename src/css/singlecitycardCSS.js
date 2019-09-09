import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  card: {
    [theme.breakpoints.down("sm")]: {
      height: 450,
      width: 350
    },
    [theme.breakpoints.up("lg")]: {
      height: "100%",
      width: 995
    },
    width: 700,
    height: "100%",
    boxShadow:
      "0 7px 13px -3px rgba(45,35,66,0.3), 0 8px 10px 0 rgba(45,35,66,0.4), inset 0 -2px 0 0 rgba(0,0,0,0.12)"
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
  cardImgContainer: {
    height: 320,
    padding: "0 !important",
    clipPath: "polygon(0 0, 100% 0, 100% 86%, 0 70%)",
    WebkitClipPath: "polygon(0 0, 100% 0, 100% 86%, 0 70%)"
  },
  textex: {
    padding: "0 4rem 2rem 4rem !important"
  }
}));
