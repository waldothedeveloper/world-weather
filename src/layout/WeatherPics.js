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
  // console.log("images: ", images);

  React.useEffect(() => {
    setUnsplashUrl(
      `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=1&query=bad+weather`
    );
    //eslint-disable-next-line
  }, []);

  //calling the random pics
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
            <Grid container>
              <Grid
                className={classes.gridList}
                key={images[1].id}
                item
                xm={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
              >
                <img
                  className={classes.img}
                  src={images[1].urls.regular}
                  alt={images[1].description}
                  width='100%'
                />
              </Grid>
              <Grid
                className={classes.gridList}
                key={images[6].id}
                item
                xm={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
              >
                <img
                  className={classes.img}
                  src={images[6].urls.regular}
                  alt={images[6].description}
                  width='100%'
                />
              </Grid>
              <Grid
                className={classes.gridList2}
                key={images[8].id}
                item
                xm={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
                <img
                  className={classes.img}
                  src={images[8].urls.regular}
                  alt={images[8].description}
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
