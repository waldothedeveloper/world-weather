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
      height: 808
    },
    // ipad mini & ipad pro
    [theme.breakpoints.up("sm")]: {
      height: 1188
    },
    //laptop
    [theme.breakpoints.up("lg")]: {
      height: "160vh"
      // height: "auto"
    },
    // height: 808,
    padding: "5rem 0 0 0",
    background: "#a3dcf5",
    clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
    WebkitClipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)"
  },
  weathercard: {
    // iphone 8plus & iphone xr
    [theme.breakpoints.down("sm")]: {
      padding: "1.8rem",
      marginTop: "-22%"
    },
    //ipad mini
    [theme.breakpoints.up("sm")]: {
      padding: "6rem",
      marginTop: "-22%"
    },

    [theme.breakpoints.up("md")]: {
      padding: "3.8rem",
      marginTop: "-22%"
    },
    //laptop
    [theme.breakpoints.up("lg")]: {
      padding: "4.8rem",
      marginTop: "-300px"
    }
  }
}));

function SectionA() {
  const classes = useStyles();
  const [mediumDevicesHeight, setMediumDevicesHeightElem] = React.useState(0);
  console.log("mediumDevicesHeight: ", mediumDevicesHeight);

  if (mediumDevicesHeight !== 0 && mediumDevicesHeight !== null) {
    return (
      <>
        <div
          style={{
            height: mediumDevicesHeight + window.innerHeight,
            background: "#a3dcf5",
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
            WebkitClipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)"
          }}
        >
          {<Hero setMediumDevicesHeightElem={setMediumDevicesHeightElem} />}
        </div>
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
  } else {
    return (
      <>
        <div className={classes.bg}>
          {<Hero setMediumDevicesHeightElem={setMediumDevicesHeightElem} />}
        </div>
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
