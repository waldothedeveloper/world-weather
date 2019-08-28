import React from "react";
import Grid from "@material-ui/core/Grid";
import PexelApiRequest from "../Utils/Pexels_API_Request";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../css/weatherpicsCSS";
import { shuffle } from "../Utils/Randomizer";
import CircularProgress from "@material-ui/core/CircularProgress";

function WeatherPics() {
  const classes = useStyles();

  const [{ data, isError, isLoading }, setUrl] = PexelApiRequest();
  const images = data;

  React.useEffect(() => {
    setUrl(
      `https://api.unsplash.com/search/photos?client_id=${
        process.env.REACT_APP_UNSPLASH_API_KEY
      }&page=1&query=global+warming`
    );
    //eslint-disable-next-line
  }, []);

  // calling the random pics
  if (typeof images.urls !== "undefined") {
    shuffle(images.urls);
  }
  return (
    <>
      {isLoading ? (
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xm={12} sm={12} md={12} lg={12} xl={12}>
            <div style={{ display: "flex", height: "auto" }}>
              <CircularProgress className={classes.loader} />
            </div>
          </Grid>
        </Grid>
      ) : isError ? (
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xm={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant='h4' gutterBottom align='center'>
              We are having technical issues to retreive the photos....
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <div>
          {images && (
            <Grid container direction='row' justify='center'>
              <Grid
                className={classes.gridList}
                key={images[2].id}
                item
                xm={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <img
                  loading='lazy'
                  className={classes.img}
                  src={images[2].urls.raw + "&ar=3:4&fit=crop"}
                  alt={images[2].description}
                  width='100%'
                  height='336px'
                />
              </Grid>
              <Grid
                className={classes.gridList}
                key={images[4].id}
                item
                xm={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <img
                  loading='lazy'
                  className={classes.img}
                  src={images[4].urls.raw + "&ar=3:4&fit=crop"}
                  alt={images[4].description}
                  width='100%'
                  height='336px'
                />
              </Grid>
              <Grid
                className={classes.gridList2}
                key={images[9].id}
                item
                xm={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
                <img
                  loading='lazy'
                  src={images[9].urls.regular}
                  alt={images[9].description}
                  width='100%'
                  height='auto'
                />
              </Grid>
            </Grid>
          )}
        </div>
      )}
    </>
  );
}

export default WeatherPics;
