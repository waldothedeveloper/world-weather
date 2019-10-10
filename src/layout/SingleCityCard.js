import React from "react";
import { useStyles } from "../css/singlecitycardCSS";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import GoogleMapsAPI from "../Utils/GoogleMapsAPI";
import WeatherApiRequest from "../Utils/WeatherApiRequest";
import WikipediaApiRequest from "../Utils/WikipediaApiRequest";
import Unsplash_PexelApi_Request from "../Utils/Unsplash_PexelApi_Request";
import thermometer from "../icons/thermometer.svg";
import sunrise from "../icons/sun.svg";
import sunset from "../icons/sunset.svg";
import suncloud from "../icons/sun-cloud.svg";
import { DatesLocale } from "../Utils/DateWithLocaleString";
// import Icon from "@material-ui/core/Icon";

export default function SingleCityCard(props) {
  const classes = useStyles();
  const [randNumber, setRandNumber] = React.useState(0);
  const [cityInfo, setCityInfo] = React.useState(null);
  const [{ cityG, gMapsLoading, gMapsError }] = GoogleMapsAPI(cityInfo);
  const [
    { weatherData, weatherIsError, weatherIsLoading },
    setWeatherUrl
  ] = WeatherApiRequest(cityG);

  // console.log("weatherData", weatherData);

  const [{ wikiArticle, wikiIsError, wikiIsLoading }] = WikipediaApiRequest(
    cityInfo
  );
  // console.log("wikiArticle", wikiArticle);

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
        <Grid container className={classes.container}>
          <Grid item style={{ marginTop: 32 }}>
            <Typography align='center' variant='h4'>
              Oh no...we are having technical issues...try again later
            </Typography>
          </Grid>
        </Grid>
      ) : wikiIsLoading &&
        weatherIsLoading &&
        gMapsLoading &&
        unsplashIsLoading ? (
        <Grid container className={classes.container}>
          <Grid item>
            <div style={{ display: "flex", height: "auto" }}>
              <CircularProgress style={{ margin: "auto" }} />
            </div>
          </Grid>
        </Grid>
      ) : (
        <Grid container className={classes.container}>
          <Grid
            item
            style={{ marginTop: "3rem" }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            {/* Wikipedia INFO */}
            <div className={classes.wikiWrapper}>
              <Typography className={classes.title} align='left' variant='h4'>
                {wikiArticle === null ? null : wikiArticle.displaytitle}
              </Typography>
              <Typography
                className={classes.subtext}
                align='left'
                variant='body2'
              >
                {wikiArticle === null ? null : wikiArticle.description}
              </Typography>
              <Typography
                align='left'
                variant='body1'
                className={classes.middleText}
              >
                {wikiArticle === null ? null : wikiArticle.extract}
              </Typography>
            </div>
            {/* Weather INFO */}
            <Grid container className={classes.iconsContainer}>
              {/* //temperature */}
              <Grid
                className={classes.iconWrapper}
                item
                xs={6}
                sm={6}
                md={3}
                lg={3}
                xl={3}
              >
                <img
                  className={classes.icons}
                  src={thermometer}
                  alt='temperature'
                />
                <Typography
                  align='center'
                  variant='h6'
                  className={classes.iconsText}
                >
                  {weatherData === null || weatherData.main === undefined
                    ? null
                    : `${Number.parseInt(weatherData.main.temp)}`}{" "}
                  &#8451;
                </Typography>
              </Grid>

              {/* //weather conditions */}
              <Grid
                className={classes.iconWrapper}
                item
                xs={6}
                sm={6}
                md={3}
                lg={3}
                xl={3}
              >
                <img
                  className={classes.icons}
                  src={suncloud}
                  alt='weather description'
                />
                <Typography
                  align='center'
                  variant='h6'
                  className={classes.iconsText}
                >
                  {weatherData === null || weatherData.main === undefined
                    ? null
                    : weatherData.weather[0].main}
                </Typography>
              </Grid>

              {/* // sunrise */}
              <Grid
                className={classes.iconWrapper}
                item
                xs={6}
                sm={6}
                md={3}
                lg={3}
                xl={3}
              >
                <img className={classes.icons} src={sunrise} alt='sunrise' />
                <Typography
                  align='center'
                  variant='h6'
                  className={classes.iconsText}
                >
                  {weatherData === null || weatherData.main === undefined
                    ? null
                    : DatesLocale(weatherData.sys.sunrise)}
                </Typography>
              </Grid>

              {/* //sunset */}
              <Grid
                className={classes.iconWrapper}
                item
                xs={6}
                sm={6}
                md={3}
                lg={3}
                xl={3}
              >
                <img className={classes.icons} src={sunset} alt='temperature' />
                <Typography
                  align='center'
                  variant='h6'
                  className={classes.iconsText}
                >
                  {weatherData === null || weatherData.main === undefined
                    ? null
                    : DatesLocale(weatherData.sys.sunset)}
                </Typography>
              </Grid>
            </Grid>
            <div></div>
          </Grid>
          <Grid
            style={{ marginTop: "3rem" }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            {/* IMAGES */}
            <figure className={classes.fig}>
              <img
                className={classes.imago}
                src={
                  unsplashPhotos === null
                    ? null
                    : unsplashPhotos[randNumber].urls.regular
                }
                alt={wikiArticle === null ? "" : wikiArticle.displaytitle}
              />
            </figure>
          </Grid>
        </Grid>
      )}
    </>
  );
}
