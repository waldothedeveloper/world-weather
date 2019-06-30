import React from "react";
import Grid from "@material-ui/core/Grid";
import PexelApiRequest from "../Utils/Pexels_API_Request";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../css/weatherpicsCSS";
import { shuffle } from "../Utils/Randomizer";

function WeatherPics() {
  const classes = useStyles();

  const [{ data, isError, isLoading }] = PexelApiRequest();
  // console.log("data: ", data);
  const images = data;
  console.log("images: ", images);

  //calling the random pics
  if (typeof images.photos !== "undefined") {
    shuffle(images.photos);
  }
  return (
    <>
      {isLoading ? (
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xm={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant='h4' gutterBottom align='center'>
              Loading...Please wait
            </Typography>
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
          {images.photos && (
            <Grid container direction='row' justify='center'>
              <Grid
                className={classes.gridList}
                key={images.photos[[0].id]}
                item
                xm={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <img
                  className={classes.img}
                  src={images.photos[0].src.portrait}
                  alt={images.photos[0].photographer}
                />
              </Grid>
              <Grid
                className={classes.gridList}
                key={images.photos[1].id}
                item
                xm={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <img
                  className={classes.img}
                  src={images.photos[1].src.portrait}
                  alt={images.photos[1].photographer}
                />
              </Grid>
              <Grid
                className={classes.gridList2}
                key={images.photos[2].id}
                item
                xm={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
                <img
                  src={images.photos[2].src.landscape}
                  alt={images.photos[2].photographer}
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
