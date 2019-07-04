import React from "react";
import { useStyles } from "../css/singlecitycardCSS";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Clock from "../ExampleCities/Clock";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Temperature from "./Temperature";

export default function SimpleCard(props) {
  console.log("props on simpleCard: ", props);
  const classes = useStyles();
  const dataReceived = props.data;
  const isLoading = props.isLoading;
  const isError = props.isError;

  return (
    <>
      {dataReceived.length === 0 ? (
        <div>Loading...</div>
      ) : isError ? (
        <Card raised={true} className={classes.card}>
          <CardContent>
            <Typography align='center' variant='h4'>
              Oh no...we are having technical issues...try again later
            </Typography>
          </CardContent>
        </Card>
      ) : isLoading ? (
        <Card raised={true} className={classes.card}>
          <CardContent>
            <div style={{ display: "flex", height: "auto" }}>
              <CircularProgress style={{ margin: "auto" }} />
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card raised={true} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cityName} variant='h3' noWrap={true}>
              <img
                className={classes.media}
                src={
                  isLoading
                    ? "http://placehold.jp/50x50.png"
                    : `http://openweathermap.org/img/w/${
                        dataReceived.data.weather[0].icon
                      }.png`
                }
                alt='cities'
              />
              {dataReceived.data.name}
            </Typography>
            <Temperature temperature={parseInt(dataReceived.data.main.temp)} />
            <Typography variant='h6' className={classes.colors}>
              {dataReceived.data.weather[0].description}
            </Typography>
          </CardContent>
          <CardContent className={classes.cardContent}>
            {/* <Clock data={dataReceived.data} /> */}
            <Typography variant='h6' className={classes.colors}>
              Humidity: {dataReceived.data.main.humidity}
            </Typography>
            <Typography variant='h6' className={classes.colors}>
              Wind Speed: {dataReceived.data.wind.speed}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} />
        </Card>
      )}
    </>
  );
}
