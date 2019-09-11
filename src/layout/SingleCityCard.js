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
import GoogleMapsAPI from "../Utils/GoogleMapsAPI";
import WeatherApiRequest from "../Utils/WeatherApiRequest";
import WikipediaApiRequest from "../Utils/WikipediaApiRequest";
import Unsplash_PexelApi_Request from "../Utils/Unsplash_PexelApi_Request";

export default function SingleCityCard(props) {
  const classes = useStyles();
  const [randNumber, setRandNumber] = React.useState(0);
  const [cityInfo, setCityInfo] = React.useState(null);
  const [{ cityG, gMapsLoading, gMapsError }] = GoogleMapsAPI(cityInfo);
  const [
    { weatherData, weatherIsError, weatherIsLoading },
    setWeatherUrl
  ] = WeatherApiRequest(cityG);

  const [{ wikiArticle, wikiIsError, wikiIsLoading }] = WikipediaApiRequest(
    cityInfo
  );

  const [
    { unsplashPhotos, unsplashIsError, unsplashIsLoading }
  ] = Unsplash_PexelApi_Request(cityInfo);

  //getting a random number to pick a random photo
  React.useEffect(() => {
    const random = () => {
      const picked = Math.floor(Math.random() * unsplashPhotos.length);
      setRandNumber(picked);
    };

    if (unsplashPhotos !== null) {
      random();
    }
  }, [unsplashPhotos]);

  //setting up the city name and state to local state
  React.useEffect(() => {
    const data = props.location.state.data;
    setCityInfo(data);
  }, [props.location.state]);

  // giving to openWeather API the latitude and longitude to get the weather info
  React.useEffect(() => {
    if (cityG !== null) {
      setWeatherUrl(
        `http://api.openweathermap.org/data/2.5/weather?lat=${cityG.lat}&lon=${cityG.lng}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
    }
    //eslint-disable-next-line
  }, [cityG]);

  return (
    <>
      {/* <div style={{ marginTop: "32rem" }}>TESTING</div> */}

      {wikiIsError && weatherIsError && gMapsError && unsplashIsError ? (
        <Card raised={true} className={classes.card}>
          <CardContent>
            <Typography align='center' variant='h4'>
              Oh no...we are having technical issues...try again later
            </Typography>
          </CardContent>
        </Card>
      ) : wikiIsLoading &&
        weatherIsLoading &&
        gMapsLoading &&
        unsplashIsLoading ? (
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
                unsplashPhotos === null
                  ? null
                  : unsplashPhotos[randNumber].urls.raw +
                    "&w=995&crop=facearea&fit=fillmax"
              }
              alt={wikiArticle === null ? "" : wikiArticle.name}
            />
          </CardContent>
          <CardContent>
            <Typography variant='h4' align='center' noWrap={true}>
              {wikiArticle === null ? null : wikiArticle.name}
            </Typography>
            <Typography
              variant='body2'
              align='center'
              noWrap={true}
              className={classes.cityName}
            >
              {wikiArticle === null ? null : wikiArticle.description}
            </Typography>
          </CardContent>
          <CardContent className={classes.textex}>
            <Typography variant='body1' align='center'>
              {wikiArticle === null ? null : wikiArticle.extract}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
