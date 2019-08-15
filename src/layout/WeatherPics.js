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
    console.log("Weather-Pics");
    setUrl(
      "https://api.pexels.com/v1/search?query=bad+weather&per_page=25&page=1"
    );
    //eslint-disable-next-line
  }, []);

  //calling the random pics
  if (typeof images.photos !== "undefined") {
    shuffle(images.photos);
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
          {images.photos && (
            <Grid container direction='row' justify='center'>
              <Grid
                className={classes.gridList}
                key={images.photos[[4].id]}
                item
                xm={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <img
                  className={classes.img}
                  src={images.photos[4].src.portrait}
                  alt={images.photos[4].photographer}
                />
              </Grid>
              <Grid
                className={classes.gridList}
                key={images.photos[6].id}
                item
                xm={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
              >
                <img
                  className={classes.img}
                  src={images.photos[6].src.portrait}
                  alt={images.photos[6].photographer}
                />
              </Grid>
              <Grid
                className={classes.gridList2}
                key={images.photos[10].id}
                item
                xm={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
                <img
                  src={images.photos[10].src.landscape}
                  alt={images.photos[10].photographer}
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
