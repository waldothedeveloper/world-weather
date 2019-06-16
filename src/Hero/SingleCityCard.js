import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Clock from "../ExampleCities/Clock";
import Typography from "@material-ui/core/Typography";
import Temperature from "../ExampleCities/Temperature";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 700,
    marginBottom: theme.spacing(6),
    backgroundColor: "#ffffff",
    backgroundImage: "linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)",
    boxShadow:
      "0 7px 13px -3px rgba(45,35,66,0.3), 0 8px 10px 0 rgba(45,35,66,0.4), inset 0 -2px 0 0 rgba(0,0,0,0.12)"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

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
            <Typography align='center' variant='h2'>
              Loading...This will take a second
            </Typography>
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
            <Clock data={dataReceived.data} />
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
