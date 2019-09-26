import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { useStyles } from "../css/galleryPreviewCSS";

//Pexels requires a special auth header
const GalleryPreview = () => {
  const classes = useStyles();
  const [photos, setPhoto1] = useState({ photo1: "", photo2: "", photo3: "" });
  const [error, isError] = useState(false);
  const [loading, isLoading] = useState(false);

  // fetchPhoto1
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchPhotos = async () => {
      isLoading(true);
      //get the first photo 1
      try {
        const result1 = await axios(
          {
            method: "GET",
            url: `https://api.pexels.com/v1/photos/257360`,
            headers: { Authorization: process.env.REACT_APP_PEXELS_API_KEY }
          },
          { cancelToken: source.token }
        );
        //get the second photo 2
        const result2 = await axios(
          {
            method: "GET",
            url: `https://api.pexels.com/v1/photos/287229`,
            headers: { Authorization: process.env.REACT_APP_PEXELS_API_KEY }
          },
          { cancelToken: source.token }
        );
        //get the third photo 3
        const result3 = await axios(
          {
            method: "GET",
            url: `https://api.pexels.com/v1/photos/248174`,
            headers: { Authorization: process.env.REACT_APP_PEXELS_API_KEY }
          },
          { cancelToken: source.token }
        );

        setPhoto1({
          photo1: result1.data,
          photo2: result2.data,
          photo3: result3.data
        });
      } catch (error) {
        isError(true);
        console.log(`Error: ${error}`);
      }
      isLoading(false);
    };

    fetchPhotos();

    return () => {
      source.cancel();
    };
    //eslint-disable-next-line
  }, []);

  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      style={{ overflow: "hidden" }}
    >
      <Grid className={classes.root} item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Typography align='center' variant='h4'>
          Weather in picture
        </Typography>
        <Typography
          style={{ marginTop: "2rem" }}
          align='center'
          variant='body1'
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Typography>
        <Typography
          style={{ marginTop: "1rem" }}
          align='center'
          variant='body1'
        >
          When an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </Typography>
      </Grid>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <div>
          <Typography variant='h6'>
            We are having technical issues...please try again later
          </Typography>
        </div>
      ) : (
        <>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <figure>
              <img
                width='100%'
                height='auto'
                className={classes.image}
                src={
                  typeof photos.photo1.src === "undefined"
                    ? null
                    : photos.photo1.src.landscape
                }
                alt={
                  typeof photos.photo1.src === "undefined"
                    ? null
                    : photos.photo1.photographer
                }
              />
            </figure>
          </Grid>
          <Grid
            className={classes.root1}
            container
            direction='row'
            justify='space-evenly'
          >
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <figure>
                <img
                  width='100%'
                  height='auto'
                  className={classes.image}
                  src={
                    typeof photos.photo2.src === "undefined"
                      ? null
                      : photos.photo2.src.landscape
                  }
                  alt={
                    typeof photos.photo2.src === "undefined"
                      ? null
                      : photos.photo2.photographer
                  }
                />
              </figure>
            </Grid>
            <Grid
              className={classes.twelve2}
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
            >
              <figure className={classes.crazyPic}>
                <img
                  width='100%'
                  height='auto'
                  className={classes.image}
                  src={
                    typeof photos.photo3.src === "undefined"
                      ? null
                      : photos.photo3.src.landscape
                  }
                  alt={
                    typeof photos.photo3.src === "undefined"
                      ? null
                      : photos.photo3.photographer
                  }
                />
              </figure>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default GalleryPreview;
