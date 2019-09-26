import { makeStyles } from "@material-ui/core/styles";
// import taieri from "../icons/Vorderrhein.svg";

export const useStyles = makeStyles(theme => ({
  wikiWrapper: {
    padding: "1.6rem"
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
      margin: "48px auto",
      marginTop: 48
      // background: `transparent url(${taieri}) top right no-repeat`,
      // backgroundSize: "30% 40%"
    }
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.8rem",
      padding: "1.6rem 1.6rem 0 1.6rem"
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "1.8rem",
      padding: "1.6rem 1.6rem 0 1.6rem"
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "2rem",
      padding: "1.6rem 14rem 0 1.6rem"
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "1.6rem 14rem 0 1.6rem"
    }
  },
  middleText: {
    [theme.breakpoints.down("sm")]: {
      padding: "1.6rem 4rem 0 1.6rem"
    },
    [theme.breakpoints.up("sm")]: {
      padding: "1.6rem 4rem 0 1.6rem"
    },
    [theme.breakpoints.up("md")]: {
      padding: "1.6rem 24rem 0 1.6rem"
    },
    [theme.breakpoints.up("lg")]: {
      padding: "1.6rem 34rem 0 1.6rem"
    }
  },
  subtext: {
    [theme.breakpoints.down("sm")]: {
      padding: "0.2rem 0 0.5rem 0 !important"
    },
    [theme.breakpoints.up("sm")]: {
      // padding: "0rem 14rem 2rem 14rem !important"
    },
    [theme.breakpoints.up("md")]: {
      // padding: "0rem 14rem 0.8rem 14rem !important"
    },
    [theme.breakpoints.up("lg")]: {
      // padding: "0rem 14rem 0.8rem 14rem !important"
    }
  },
  iconsContainer: {
    [theme.breakpoints.down("sm")]: {
      margin: "0.2rem 0",
      padding: "0.4rem 0.4rem 0.4rem 1.6rem"
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0.2rem 0",
      padding: "0.6rem"
    },
    [theme.breakpoints.up("md")]: {
      margin: "1.4rem 0",
      padding: "1rem"
    },
    [theme.breakpoints.up("lg")]: {
      margin: "2.6rem 0",
      padding: "1.6rem"
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
    height: 520
  },
  imago: {
    width: "100%",
    height: "auto"
  }
}));
