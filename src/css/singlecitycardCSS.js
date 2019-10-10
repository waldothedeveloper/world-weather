import { makeStyles } from "@material-ui/core/styles";
// import taieri from "../icons/Vorderrhein.svg";

export const useStyles = makeStyles(theme => ({
  wikiWrapper: {
    [theme.breakpoints.up("lg")]: {
      padding: "0 14rem"
    }
  },

  container: {
    //iphone 8+ & iphone xr
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      margin: "48px auto",
      marginTop: 48
      // background: `transparent url(${taieri}) top right no-repeat`,
      // backgroundSize: "30% 40%"
    },
    //ipad mini
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "column",
      margin: "48px auto",
      marginTop: 48
      // background: `transparent url(${taieri}) top right no-repeat`,
      // backgroundSize: "30% 40%"
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
      margin: "48px auto",
      marginTop: 48
      // background: `transparent url(${taieri}) top right no-repeat`,
      // backgroundSize: "30% 40%"
    },
    //laptop
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "column",
      margin: "48px auto"
      // padding: "0 14rem"
    }
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      // marginTop: "1.8rem",
      // padding: "1.6rem 1.6rem 0 1.6rem"
    },
    [theme.breakpoints.up("sm")]: {
      // marginTop: "1.8rem",
      // padding: "1.6rem 1.6rem 0 1.6rem"
    },
    [theme.breakpoints.up("md")]: {
      // marginTop: "2rem",
      // padding: "1.6rem 14rem 0 1.6rem"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "270%"
    },
    padding: "0 2rem 0 2rem"
  },
  middleText: {
    [theme.breakpoints.down("sm")]: {
      // padding: "1.6rem 4rem 0 1.6rem"
    },
    [theme.breakpoints.up("sm")]: {
      // padding: "1.6rem 4rem 0 1.6rem"
    },
    [theme.breakpoints.up("md")]: {
      // padding: "1.6rem 24rem 0 1.6rem"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "170%"
    },
    padding: "1rem 2rem 0 2rem",
    opacity: 0.4
  },
  subtext: {
    [theme.breakpoints.down("sm")]: {
      // padding: "0.2rem 0 0.5rem 0"
    },
    [theme.breakpoints.up("sm")]: {
      // padding: "0rem 14rem 2rem 14rem !important"
    },
    [theme.breakpoints.up("md")]: {
      // padding: "0rem 14rem 0.8rem 14rem !important"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "150%"
    },
    padding: "0.5rem 2rem 0 2rem",
    opacity: 0.8
  },
  iconsContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: "0 2rem 0 2rem"
    },
    [theme.breakpoints.up("sm")]: {
      padding: "0 2rem 0 2rem"
    },
    [theme.breakpoints.up("md")]: {
      margin: "1.4rem auto",
      padding: "0 14rem"
    },
    [theme.breakpoints.up("lg")]: {
      margin: "4rem auto",
      padding: "0 18rem"
    },
    display: "flex",
    flexDirection: "row"
  },
  iconWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "1rem 0 0.4rem 0"
  },
  icons: {
    [theme.breakpoints.down("sm")]: {
      width: 32,
      height: 32
    },
    [theme.breakpoints.up("sm")]: {
      width: 32,
      height: 32
    },
    [theme.breakpoints.up("md")]: {
      width: 48,
      height: 48
    },
    [theme.breakpoints.up("lg")]: {
      width: 48,
      height: 48
    }
  },
  iconsText: {
    paddingLeft: "0.65rem"
  },
  fig: {
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      padding: 0,
      height: "auto"
    },
    [theme.breakpoints.up("sm")]: {
      margin: 0,
      padding: 0,
      height: "auto"
    },
    [theme.breakpoints.up("md")]: {
      margin: 0,
      padding: 0,
      height: 620,
      overflow: "hidden"
    },
    [theme.breakpoints.up("lg")]: {
      margin: 0,
      padding: 0,
      height: 720,
      overflow: "hidden"
    },
    margin: 0,
    padding: 0,
    height: 520,
    "&:hover": {
      opacity: 0.85,
      transition: "opacity 0.4s ease-out"
    }
  },
  imago: {
    width: "100%",
    height: "auto"
  }
}));
