import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bg: {
    // iphone 8plus & iphone xr
    [theme.breakpoints.down("sm")]: {
      height: "155vh"
    },
    //ipad mini
    [theme.breakpoints.up("sm")]: {
      height: "145vh"
    },
    [theme.breakpoints.up("md")]: {
      height: "120vh"
    },
    //laptop
    [theme.breakpoints.up("lg")]: {
      height: "160vh"
    },
    padding: "5rem 0 0 0",
    background: "#b5cbe1",
    clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
    WebkitClipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)"
  },
  weathercard: {
    // iphone 8plus & iphone xr
    [theme.breakpoints.down("sm")]: {
      padding: "1.8rem",
      marginTop: "-33vh"
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
    background: "#b5cbe1",
    clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
    WebkitClipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)"
  },
  iphoneXrWeatherCard: {
    padding: "1.8rem",
    marginTop: "-31vh"
  }
}));

function SectionA({ hero, weatherCard }) {
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
        <div className={classes.iphoneXrBackground}>{hero}</div>
        <Grid
          className={classes.iphoneXrWeatherCard}
          container
          direction='row'
          justify='center'
          alignItems='center'
        >
          {weatherCard}
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <div className={classes.bg}>{hero}</div>
        <Grid
          className={classes.weathercard}
          container
          direction='row'
          justify='center'
          alignItems='center'
        >
          {weatherCard}
        </Grid>
      </>
    );
  }
}

export default SectionA;
