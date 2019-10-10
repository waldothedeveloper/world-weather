import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Hero from "./Hero";
import WeatherCard from "./WeatherCard";

const useStyles = makeStyles(theme => ({
  bg: {
    //!TODO: need to follow this for every style
    // iphone 8plus & iphone xr
    [theme.breakpoints.down("sm")]: {
      // height: "155vh"
      height: "auto"
    },
    //ipad mini
    [theme.breakpoints.up("sm")]: {
      height: "120vh"
      // height: "auto"
    },
    //laptop
    [theme.breakpoints.up("lg")]: {
      height: "160vh"
      // height: "auto"
    },
    padding: "5rem 0 0 0",
    // background: "#b5cbe1",
    background: "#a3dcf5",
    clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
    WebkitClipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)"
  },
  weathercard: {
    // iphone 8plus & iphone xr
    [theme.breakpoints.down("sm")]: {
      padding: "1.8rem",
      // marginTop: "-33vh",
      marginTop: "-15vh"
      // transform: "translateY(-50%)"
    },
    //ipad mini
    [theme.breakpoints.up("sm")]: {
      padding: "6rem",
      marginTop: "-280px"
    },

    [theme.breakpoints.up("md")]: {
      padding: "3.8rem",
      marginTop: "-220px"
    },
    //laptop
    [theme.breakpoints.up("lg")]: {
      padding: "4.8rem",
      marginTop: "-300px"
    }
  },
  iphoneXrBackground: {
    height: "130vh",
    padding: "5rem 0 0 0",
    // background: "#b5cbe1",
    background: "#a3dcf5",
    clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
    WebkitClipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)"
  },
  iphoneXrWeatherCard: {
    padding: "1.8rem",
    marginTop: "-31vh"
  }
}));

function SectionA() {
  const classes = useStyles();
  const [iphoneXR, setIphoneXR] = React.useState(false);

  React.useEffect(() => {
    if (window.screen.width / window.screen.height === 414 / 896) {
      setIphoneXR(true);
    }
  }, []);

  if (iphoneXR) {
    return (
      <>
        <div className={classes.iphoneXrBackground}>{<Hero />}</div>
        <Grid
          className={classes.iphoneXrWeatherCard}
          container
          direction='row'
          justify='center'
          alignItems='center'
        >
          {<WeatherCard />}
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <div className={classes.bg}>{<Hero />}</div>
        <Grid
          className={classes.weathercard}
          container
          direction='row'
          justify='center'
          alignItems='center'
        >
          {<WeatherCard />}
        </Grid>
      </>
    );
  }
}

export default SectionA;
