import React from "react";
import Grid from "@material-ui/core/Grid";
import Unsplash_Custom_Hook from "../Utils/Unsplash_Custom_Hook";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../css/weatherpicsCSS";
import { shuffle } from "../Utils/Randomizer";
import CircularProgress from "@material-ui/core/CircularProgress";

function WeatherPics() {
  const classes = useStyles();

  const [
    { unsplashPhotos, unsplashIsError, unsplashIsLoading },
    setUnsplashUrl
  ] = Unsplash_Custom_Hook();
  const images = unsplashPhotos;

  React.useEffect(() => {
    setUnsplashUrl(
      `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=1&query=global+warming`
    );
    //eslint-disable-next-line
  }, []);

  // calling the random pics
  if (images !== null) {
    shuffle(images);
  }
  return (
    <>
      {unsplashIsLoading ? (
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xm={12} sm={12} md={12} lg={12} xl={12}>
            <div style={{ display: "flex", height: "auto" }}>
              <CircularProgress className={classes.loader} />
            </div>
          </Grid>
        </Grid>
      ) : unsplashIsError ? (
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
                className={classes.gridList1}
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
