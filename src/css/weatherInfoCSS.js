import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: "6rem 1.5rem 4rem 1.5rem"
    },
    //ipad mini
    [theme.breakpoints.up("sm")]: {
      padding: "6rem 1.5rem 4rem 1.5rem"
    },
    [theme.breakpoints.up("md")]: {
      padding: "6rem 1.5rem 4rem 1.5rem"
    },
    //laptop
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(6)
    }
  },
  button: {
    width: "200px",
    height: "60px",
    fontWeight: 700,
    fontSize: "1.2rem",
    marginTop: theme.spacing(6),
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    textTransform: "none",
    color: "#fefefe",
    boxShadow: "none",
    backgroundImage: "linear-gradient( to right, #27CDE8 10%, #3CA4EC 100%)",
    "&:hover": {
      backgroundPosition: "right center",
      backgroundColor: "#333333"
    }
  }
}));
