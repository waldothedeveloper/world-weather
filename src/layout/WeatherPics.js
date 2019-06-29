import React from "react";
import Grid from "@material-ui/core/Grid";
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
import PexelApiRequest from "../Utils/Pexels_API_Request";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../css/weatherpicsCSS";

function WeatherPics() {
  const classes = useStyles();

  const [{ data, isError, isLoading }] = PexelApiRequest();
  console.log("data: ", data);
  const images = data;

  let randImg1 =
    images.photos &&
    Math.floor(Math.random() * Math.floor(images.photos.length));
  console.log("randImg: ", randImg1);

  let randImg2 =
    images.photos &&
    Math.floor(Math.random() * Math.floor(images.photos.length));
  console.log("randImg: ", randImg2);

  let randImg3 =
    images.photos &&
    Math.floor(Math.random() * Math.floor(images.photos.length));
  console.log("randImg: ", randImg3);

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
        <>
          {images.photos && (
            <Grid container direction='row' justify='center'>
              <Grid
                className={classes.gridList}
                key={images.photos[randImg1].id}
                item
                xm={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <img
                  className={classes.img}
                  src={images.photos[randImg1].src.portrait}
                  alt={images.photos[randImg1].photographer}
                />
              </Grid>
              <Grid
                className={classes.gridList}
                key={images.photos[randImg2].id}
                item
                xm={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <img
                  className={classes.img}
                  src={images.photos[randImg2].src.portrait}
                  alt={images.photos[randImg2].photographer}
                />
              </Grid>
              <Grid
                className={classes.gridList2}
                key={images.photos[randImg3].id}
                item
                xm={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
                <img
                  src={images.photos[randImg3].src.landscape}
                  alt={images.photos[randImg3].photographer}
                  width='100%'
                  height='auto'
                />
              </Grid>
            </Grid>
          )}
        </>
      )}
    </>
  );
}

export default WeatherPics;
