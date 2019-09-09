import React from "react";
import { useStyles } from "../css/singlecitycardCSS";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Clock from "../ExampleCities/Clock";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
// import Temperature from "./Temperature";

export default function SingleCityCard({
  data,
  gMapsError,
  gMapsLoading,
  isError,
  isLoading,
  wikiData,
  wikiIsError,
  wikiIsLoading,
  unsplashIsLoading,
  unsplashIsError,
  unsplashData
}) {
  const classes = useStyles();
  console.log("wikiData", wikiData);
  // console.log("unsplashData:", unsplashData);

  return (
    <>
      {wikiIsError && isError && gMapsError && unsplashIsError ? (
        <Card raised={true} className={classes.card}>
          <CardContent>
            <Typography align='center' variant='h4'>
              Oh no...we are having technical issues...try again later
            </Typography>
          </CardContent>
        </Card>
      ) : wikiIsLoading && isLoading && gMapsLoading && unsplashIsLoading ? (
        <Card raised={true} className={classes.card}>
          <CardContent>
            <div style={{ display: "flex", height: "auto" }}>
              <CircularProgress style={{ margin: "auto" }} />
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card raised={true} className={classes.card}>
          <CardContent className={classes.cardImgContainer}>
            <img
              src={
                unsplashData[Math.floor(Math.random() * unsplashData.length)]
                  .urls.raw + "&w=995&crop=facearea&fit=fillmax"
              }
              alt={data.data.name}
            />
          </CardContent>
          <CardContent>
            <Typography variant='h4' align='center' noWrap={true}>
              {data.data.name}
            </Typography>
            <Typography
              variant='body2'
              align='center'
              noWrap={true}
              className={classes.cityName}
            >
              {wikiData.description}
            </Typography>
          </CardContent>
          <CardContent className={classes.textex}>
            <Typography variant='body1' align='center'>
              {wikiData.extract}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
