import React from "react";
import Grid from "@material-ui/core/Grid";
import GalleryPreview from "../components/GalleryPreview";
import WeatherInfo from "../layout/WeatherInfo";
import WeatherWarning from "../layout/WeatherWarning";
import { weatherInfo3, loremInpsun } from "../Utils/weatherText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  sectionDcontainer: {
    [theme.breakpoints.down("sm")]: {
      padding: 0
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem 14rem"
    }
  }
}));

function SectionD() {
  const classes = useStyles();
  return (
    <>
      <>
        <GalleryPreview />
      </>
      <Grid
        container
        direction='row-reverse'
        justify='center'
        alignItems='center'
        className={classes.sectionDcontainer}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <WeatherInfo weatherInfo1={weatherInfo3} loremInpsun={loremInpsun} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <WeatherWarning />
        </Grid>
      </Grid>
    </>
  );
}

export default SectionD;
